const arr = [1, 2, 3, 4, 5, 6, 7, 8];
function test() {
  let button = document.getElementById("button");
  let text = document.getElementById("test");
  let random = Math.floor(Math.random() * arr.length);
  text.textContent = arr[random];
}
