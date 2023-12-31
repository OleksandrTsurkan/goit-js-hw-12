const recipe_list = document.querySelector('.popular-recipe-list');

fetch("https://tasty-treats-backend.p.goit.global/api/recipes/popular")
  .then(response => {
 
    if (!response.ok) {
      throw new Error(`Ошибка запроса: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    const recipe = data.map((data) => {
        return `<li class="popular-recipe-list-li">
        <div class="favorite-list-img">
        <img class="round-img-1" src="${data.preview}" alt="${data.title}">
      </div>
        <div class="popular-recipe-div-list">
          <h2 class="favorite-list-h2">${data.title}</h2>
          <h3 class="favorite-list-h3" >${data.description}</h3>
        </div>
        </li>`;
    });
    recipe_list.insertAdjacentHTML('beforeend', recipe.join(''));
  });