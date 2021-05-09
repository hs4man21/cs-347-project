let changeColor = document.getElementById("submit");
let feedback = document.getElementById("feedback");

changeColor.addEventListener("click", async () => {
  const Http = new XMLHttpRequest();
  const url=`https://street-smarts-demo.herokuapp.com/send-test/${feedback.value}`
  Http.open("GET", url);
  Http.send();
});
