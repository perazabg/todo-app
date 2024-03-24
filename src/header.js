export default function createHeader() {
  // grabs content div
  const content = document.getElementById("content");

  const header = document.createElement("div");
  header.classList.add("header");
  header.textContent = "Todo List";
  content.appendChild(header);
}
