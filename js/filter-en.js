const filter = [
  {
    id: 1,
    category: "facade",
    img: "../img/Fatada-Corp-L.jpg",
    link: "project-1.html",
    text: `486 prefabricated panels made of aluminum pipes arranged in two planes/ welded steel structure / anchorage system of structures specially designed for the removal of thermal bridges.`,
    title: "Aluminum facade"
  },
  {
    id: 2,
    category: "structure",
    img: "../img/Scari-ISHO-P.jpg",
    link: "project-2.html",
    text: `Metallic structure from hot-galvanized steel laminated profiles for the height regime of GF + GF + 8Et / Podest intermediate console with 3.3m opening.`,
    title: "Metallic staircase"
  },
  {
    id: 3,
    category: "facade",
    img: "../img/afi-tech-park-2.jpg",
    link: "project-3.html",
    text: `Curtain wall / reinforcing pillars with inserts in aluminum, metal / SunGuard secured glass  / bond cladding / cover with stainless steel frame.`,
    title: "Ventilated facade"
  },
  {
    id: 4,
    category: "structure",
    img: "../img/Car-Wash-Point-2.jpg",
    link: "project-4.html",
    text: `Metallic structure made of hot rolled galvanized steel / dome with a diameter of 7m.`,
    title: "Metallic structure"
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