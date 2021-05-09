// Initialize button with user's preferred color
let changeColor = document.getElementById("submit");
let feedback = document.getElementById("feedback");

// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {
  const Http = new XMLHttpRequest();
  const url=`https://street-smarts-demo.herokuapp.com/send-test/${feedback.value}`
  Http.open("GET", url);
  Http.send();
});
