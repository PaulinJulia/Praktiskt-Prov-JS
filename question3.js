// 3. (4p) Hämta posts med fetch från denna url: https://jsonplaceholder.typicode.com/posts
// Visa title och body från varje post på sidan inuti: <div id="posts"></div> (skapa HTML-elementet med JavaScript eller lägg till dem i HTML-filen)
// Visa endast posts från användaren med userId: 1
// Använd async/await med felhantering. Använd dig av filter samt forEach eller map.

// Din kod här
const url = "https://jsonplaceholder.typicode.com/posts";
const postContainer = document.querySelector("#posts");

async function getData() {
  try {
    const response = await fetch(url); //async
    //Synk kod
    const data = await response.json(); //async
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

function renderTodos(postList) {
  const html = postList
    .filter((post) => post.userId == 1)
    .map((post) => `<li>Title:${post.title} Body:${post.body}</li>`)
    .join("");
  postContainer.innerHTML = html;
}

/* async function main() {
  const postList = await getData();
  renderTodos(postList);
}

main(); */
