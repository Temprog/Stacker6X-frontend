document.getElementById('predictForm').addEventListener('submit', async function(e) {
  e.preventDefault();

  let text = document.getElementById('textInput').value.trim();
  const fileInput = document.getElementById('fileInput').files[0];

  if (!text && fileInput) {
    // ✅ Enforce 2 MB limit
    if (fileInput.size > 2 * 1024 * 1024) {
      document.getElementById('result').innerText = "❌ File too large! Max size is 2MB.";
      return;
    }

    // Read file if no manual text input
    const reader = new FileReader();
    reader.onload = async function(e) {
      text = e.target.result;
      await sendToAPI(text);
    };
    reader.readAsText(fileInput);
  } else if (text) {
    await sendToAPI(text);
  } else {
    document.getElementById('result').innerText = "Please enter text or upload a file.";
  }
});

async function sendToAPI(text) {
  try {
    const response = await fetch("https://api.stacker6x.com/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ text: text })
    });

    const data = await response.json();
    document.getElementById('result').innerText = "Prediction: " + JSON.stringify(data);
  } catch (error) {
    document.getElementById('result').innerText = "Error: " + error;
  }
}
