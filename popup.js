let changeColor = document.getElementById("submit");
let feedback = document.getElementById("feedback");

changeColor.addEventListener("click", async () => {
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, ([currentTab]) => {
    fetch('https://street-smarts-demo.herokuapp.com/send-test/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ feedback: `"${feedback.value}" reported at ${currentTab.url}` }),
    }).then(feedback.value = "");
  });
});
