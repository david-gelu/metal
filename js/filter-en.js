const filter = [
  {
    id: 1,
    category: "facade",
    img: "../img/Fatada-Corp-L.jpg",
    link: "project-1.html",
    text: `486 prefabricated panels made from aluminum pipes, arranged in two planes in a random pattern / Welded steel structure / Anchorage system designed to avoid thermal bridges.`,
    title: "Aluminum façade"
  },
  {
    id: 2,
    category: "structure",
    img: "../img/Scari-ISHO-P.jpg",
    link: "project-2.html",
    text: `Hot-dip galvanized steel structure made from laminated profiles / Platform with a 3.3m long cantilever / 10 storey evacuation exterior staircase.`,
    title: "Multi Storey staircase"
  },
  {
    id: 3,
    category: "facade",
    img: "../img/afi-tech-park-2.jpg",
    link: "project-3.html",
    text: `Stick system curtain wall / reinforced mullions with steel and aluminum inserts / SunGuard secured glass / Bond cladding / Stainless steel canopy.`,
    title: "Office building façade"
  },
  {
    id: 4,
    category: "structure",
    img: "../img/Car-Wash-Point-2.jpg",
    link: "project-4.html",
    text: `Hot-dip galvanized steel structure made from bent laminated profiles / 7m diameter dome.`,
    title: "Steel structure"
  },
];

const proiecteBox = document.querySelector('.proiecte');
const container = document.querySelector('.filtru');


window.addEventListener('DOMContentLoaded', function () {
  displayFilterItems(filter);
  displayFilterBtns();
});

function displayFilterItems(filterItems) {
  let displyFilter = filterItems.map(function (item) {
    return `<div class="proiect col-md-6">
            <a href="${item.link} " class="col-xs-12       col-md-6"><img src="${item.img}"
              alt="Corp L, Iulius Town, Timisoara">
              <h4 class="proiect-titlu">${item.title}</h4>
            </a>
            <h4 class="proiecte-text col-xs-12 col-md-6">
            ${item.text}
            </h4>
          </div>`;
  })
  displyFilter = displyFilter.join("")
  proiecteBox.innerHTML = displyFilter;
}

function displayFilterBtns() {
  const categories = filter.reduce(function (values, item) {
    if (!values.includes(item.category)) {
      values.push(item.category)
    }
    return values
  }, ['all']);
  const categoryBtns = categories.map(function (category) {
    return `<li class="filter-btn" type="button" data-id=${category}>
            ${category}    
          </li>`
  }).join("");
  container.innerHTML = categoryBtns;
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      const category = e.currentTarget.dataset.id;
      const filterCategory = filter.filter(function (filterItem) {
        if (filterItem.category === category) {
          return filterItem;
        }
      });
      if (category === 'all') {
        displayFilterItems(filter);
      } else {
        displayFilterItems(filterCategory);
      }
    });
  });
}