const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");
const tag = document.querySelector(".badge");
const button = document.querySelector("button");



const fetchQuate = async () => {
    const response = await fetch("https://quotable.io/random")
    const data = await response.json();
    h1.innerHTML = data.content;
    h2.innerHTML = data.author;
    tag.innerHTML = data.tags;
}

fetchQuate();
button.addEventListener("click", fetchQuate)
