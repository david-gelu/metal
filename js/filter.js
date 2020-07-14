const filter = [
  {
    id: 1,
    category: "fațadă",
    img: "img/Fatada-Corp-L.jpg",
    link: "proiect-1.html",
    text: `486 panouri prefabricate realizate din țevi de aluminiu, dispuse în două planuri într-un model aleatoriu / Structură din oțel sudat / Sistem de ancorare conceput pentru a evita punțile termice.`,
    title: "Fațadă din aluminiu"
  },
  {
    id: 2,
    category: "structură",
    img: "img/Scari-ISHO-P.jpg",
    link: "proiect-2.html",
    text: `Structură din oțel zincat la cald, realizată din profile laminate / Platformă cu scară exterioară de evacuare de 10,3 m / Scară de evacuare de 10 etaje.`,
    title: "Scară etaje multiple"
  },
  {
    id: 3,
    category: "fațadă",
    img: "img/afi-tech-park-2.jpg",
    link: "proiect-3.html",
    text: `Perete pentru perdea de sistem de lipit / Muluri armate cu inserții din oțel și aluminiu / Sticlă securizată SunGuard / Placare de legături / Copertină din oțel inoxidabil.`,
    title: "Fațadă clădire de birouri"
  },
  {
    id: 4,
    category: "structură",
    img: "img/Car-Wash-Point-2.jpg",
    link: "proiect-4.html",
    text: "Structură din oțel zincat la cald realizată din profile laminate îndoite / Cupole cu diametrul de 7m.",
    title: "Structură din oțel"
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