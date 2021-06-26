import routerExecution from "./routerExecution.js";
import cards_section from "./cards_section.js";
import { Product } from "./Screens/ProductScreen.js";
import { ProductCards } from "./templateConstructor.js";
import { removeFromCart } from "./Screens/cartScreen.js";
import { awaitTimeout } from "./app_functionalities.js";

const cardHtml = await cards_section.render();

export const mainContainer_div = document.querySelector(".main-container");
routerExecution.render(cardHtml);

// setTimeout(() => {

// }, 1000);

//RelatedItems usabilities
//RelatedItems usabilities
//RelatedItems usabilities

function settingRelatedItemscards() {
  const mainAreaRelatedcontent_div = document.querySelector(
    ".main-area_related-content"
  );

  Product && Product.related_items
    ? Product.related_items.forEach((related_itemsCard) => {
        mainAreaRelatedcontent_div.innerHTML =
          ProductCards.getHTMLString(related_itemsCard);
      })
    : "";
}

settingRelatedItemscards();
//RelatedItems usabilities
//RelatedItems usabilities
//RelatedItems usabilities

//##############################################################################

//Homescreen usabilities
//Homescreen usabilities
//Homescreen usabilities

function homeScreenusabilities() {
  const closeBtn_el = document.querySelector(".nav-close-btn");
  const openBtn_el = document.querySelector(".nav-open-btn");
  const navBar_el = document.querySelector(".nav");
  const menu_bar_li = document.querySelector(".menu-bar");
  const overlay_div = document.querySelector(".overlay");
  const menuList_div = document.querySelector(".menu-list");

  //ProductPage.....

  const productMainScreen_div = document.querySelector(".productMain-content");
  const contentHeaderBox_div = document.querySelector(".content-headerbox");

  openBtn_el.addEventListener("click", () => {
    navBar_el.classList.add("open");
  });

  closeBtn_el.addEventListener("click", () => {
    navBar_el.classList.remove("open");
  });

  menu_bar_li.addEventListener("click", () => {
    menuList_div.classList.add("menu-list_show");
    overlay_div.classList.add("overlay_show");

    overlay_div.addEventListener("click", () => {
      menuList_div.classList.remove("menu-list_show");
      overlay_div.classList.remove("overlay_show");
    });

    addEventListener("scroll", () => {
      menuList_div.classList.remove("menu-list_show");
      overlay_div.classList.remove("overlay_show");
    });
  });

  let header_height = contentHeaderBox_div.clientHeight;

  productMainScreen_div.style.marginTop = header_height + "px";
  productMainScreen_div.style.paddingTop = header_height - 26 + "px";
}

awaitTimeout(homeScreenusabilities);
//Homescreen usabilities
//Homescreen usabilities
//Homescreen usabilities

//##############################################################################

//productScreen usabilities
//productScreen usabilities
//productScreen usabilities

const psAfter_render = () => {
  const btns = document.querySelectorAll(".btn");
  console.log(btns);
  btns.forEach((btn) => {
    console.log(btn);
    btn
      ? btn.addEventListener("click", () => {
          console.log("sup");
          document.location.hash = `/carts/${Product.slug}`;
        })
      : "";
  });
};
awaitTimeout(psAfter_render);
//productScreen usabilities
//productScreen usabilities
//productScreen usabilities

//#################################################################################

// export { mainArea_main };
// export { mainContainer_div };

//Checkout!!!!!!!!!!!!!!!!!!!!!!!!
//Checkout!!!!!!!!!!!!!!!!!!!!!!!!
//Checkout!!!!!!!!!!!!!!!!!!!!!!!!

const meals = [
  {
    name: "shaw",
    category: "red",
  },
  {
    name: "mang",
    category: "blue",
  },
  {
    name: "meak",
    category: "red",
  },
  {
    name: "keel",
    category: "blue",
  },
  {
    name: "mea",
    category: "yellow",
  },
  {
    name: "pea",
    category: "yellow",
  },
];

const seperateMeals = [];

for (let i = 0; i < meals.length; i++) {
  const meal = meals[i];

  const existmeal = seperateMeals.find((arry) => {
    return arry[0].category === meal.category;
  });

  if (!existmeal) {
    const arr = [];

    for (let j = 0; j < meals.length; j++) {
      if (meal.category === meals[j].category) {
        arr.push(meals[j]);
      }
    }

    seperateMeals.push(arr);
  }
}
