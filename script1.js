
//items
const menu = [
  {
    id: 1,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img: "Bibimbap.jpg",
    desc: `"Bibimbap" literally means mixed rice. It is served in a bowl over hot rice, accompanied by sautéed vegetables, chili paste, egg and sliced meats. `,
  },
  {
    id: 2,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img: "Jajangmyeon.jpg",
    desc: `“Jajangmyeon”; It is the easiest Korean pronunciation of the words Jajang (Jajang), which means fried sauce in Chinese, and Mian (Myeon), meaning noodle.`,
  },
  {
    id: 3,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img: "Tteokbokki.jpg",
    desc: `In Korean cuisine, small sized garaette is a cylindrical rice cake made from oak..`,
  },
  {
    id: 4,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img: "doroyaki.jpg",
    desc: `Loved by everyone in Japan, this popular Japanese dessert is simply a pancake sandwich topped with sweet red bean paste (anko) (or chocolate hazelnut paste)  `,
  },
  {
    id: 5,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img: "chickenramen.jpg",
    desc: `The chicken-related flavors of Maruchan Ramen contain ingredients derived from real chicken, such as Powdered Cooked Chicken, Chicken Broth, and Chicken Fat. However, they do not contain big chucks of in-tact, real chicken `,
    
  },
  {
    id: 6,
    title: "Onigri",
    category: "Japan",
    price: 9.99,
    img: "onigri.jpg",
    desc: `Onigiri or omisubi is a Japanese dish made from white rice, formed into triangles or cylinders, and usually wrapped in nori. Traditionally, an onigiri is filled with pickled ume, salted salmon, katsuobushi, kombu, tarako, or another salty or sour ingredient as a natural preservative.`,
  },
  {
    id: 7,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img: "fried.jpg",
    desc: `yangzhou fried rice is a popular Chinese wok fried rice dish in many Chinese restaurants around the world. `,
  },
  {
    id: 8,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img: "mian.jpg",
    desc: `Dandan noodles or dandanmian, literally "carry pole noodles", is a noodle dish from Chinese Sichuan cuisine. A spicy sauce usually consisting of preserved vegetables, chili oil, Sichuan pepper, minced pork, and scallions served over noodles. `,
  },
  {
    id: 9,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 16.99,
    img: "shu.jpg",
    desc: `This dish, made with Glass Noodle obtained from mung bean starch, makes you feel the difference with its transparent appearance after cooking. Those looking for different experiences should definitely try this easy-to-make dish..`,
  },
  
];
// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(menu);
  displayMenuButtons();
});

function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  // console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;
}
function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        diplayMenuItems(menu);
      } else {
        diplayMenuItems(menuCategory);
      }
    });
  });
}