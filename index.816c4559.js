const t=document.querySelector(".popular-recipe-list");fetch("https://tasty-treats-backend.p.goit.global/api/recipes/popular").then((t=>{if(!t.ok)throw new Error(`Ошибка запроса: ${t.status}`);return t.json()})).then((i=>{const e=i.map((t=>`<li class="popular-recipe-list-li">\n        <div class="favorite-list-img">\n        <img class="round-img-1" src="${t.preview}" alt="${t.title}">\n      </div>\n        <div class="popular-recipe-div-list">\n          <h2 class="favorite-list-h2">${t.title}</h2>\n          <h3 class="favorite-list-h3" >${t.description}</h3>\n        </div>\n        </li>`));t.insertAdjacentHTML("beforeend",e.join(""))}));
//# sourceMappingURL=index.816c4559.js.map
