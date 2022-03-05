// Getting dom elements:
const durationText = document.querySelector(".duration-text");
const durationList = document.querySelector(".duration-list");
const items = document.querySelectorAll(".item");
const column1 = document.querySelector(".column-1");
const column2 = document.querySelector(".column-2");
const column3 = document.querySelector(".column-3");

// Adding event listners:
durationText.addEventListener("click", (e) => {
  durationList.classList.toggle("active");
});

items.forEach((item) => {
  item.addEventListener("click", (e) => {
    durationText.innerText = item.innerText;
    durationList.classList.remove("active");
    fetch(
      `https://top-nft-sales.p.rapidapi.com/collections/${item.getAttribute(
        "value"
      )}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "top-nft-sales.p.rapidapi.com",
          "x-rapidapi-key":
            "1b1d49e2bfmsh43c67eb04a26f64p1b2ed4jsn837ba8ff3ded",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        updateUi(data);
      })
      .catch((err) => {
        console.error(err);
      });
  });
});

window.addEventListener("load", () => {
  fetch(`https://top-nft-sales.p.rapidapi.com/collections/7d`, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "top-nft-sales.p.rapidapi.com",
      "x-rapidapi-key": "1b1d49e2bfmsh43c67eb04a26f64p1b2ed4jsn837ba8ff3ded",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      updateUi(data);
    })
    .catch((err) => {
      console.error(err);
    });
});

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector("nav").style.top = "0px";
  } else {
    document.querySelector("nav").style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
};

const updateUi = (data) => {
  const res = data.slice(0, 15);
  const col1 = res.slice(0, 5);
  const col2 = res.slice(5, 10);
  const col3 = res.slice(10, 15);

  let a = "";
  let b = "";
  let c = "";

  col1.forEach((col) => {
    a += `<a target="_blank" href="${col.collection_url}">
    <div class="collection-name"> 
      <h4>${col.collection}</h4>
    </div>
    <div class="collection-volume-trades"">
      <p class="volume">${col.volume}</p>
      <p class="trades">${col.trades}</p>
    </div>
  </a>
    `;
  });
  col2.forEach((col) => {
    b += `<a target="_blank" href="${col.collection_url}">
    <div class="collection-name"> 
      <h4>${col.collection}</h4>
    </div>
    <div class="collection-volume-trades"">
      <p class="volume">${col.volume}</p>
      <p class="trades">${col.trades}</p>
    </div>
  </a>
    `;
  });
  col3.forEach((col) => {
    c += `<a target="_blank" href="${col.collection_url}">
    <div class="collection-name"> 
      <h4>${col.collection}</h4>
    </div>
    <div class="collection-volume-trades"">
      <p class="volume">${col.volume}</p>
      <p class="trades">${col.trades}</p>
    </div>
  </a>
    `;
  });

  column1.innerHTML = a;
  column2.innerHTML = b;
  column3.innerHTML = c;
};

// Event listeners for categories section drop down menu
const categoriesText = document.querySelector(".categories-text");
const categoriesList = document.querySelector(".categories-list");
const item1 = document.querySelector(".item1");
const item2 = document.querySelector(".item2");
const item3 = document.querySelector(".item3");
const item4 = document.querySelector(".item4");
categoriesText.addEventListener("click", (e) => {
  categoriesList.classList.toggle("active");
});

item1.addEventListener("click", () => {
  categoriesList.classList.toggle("active");
});
item2.addEventListener("click", () => {
  categoriesList.classList.toggle("active");
});
item3.addEventListener("click", () => {
  categoriesList.classList.toggle("active");
});
item4.addEventListener("click", () => {
  categoriesList.classList.toggle("active");
});
