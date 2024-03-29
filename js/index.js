import { checkAwaitTimeout, routerExecution } from "./routerExecution.js";
import cards_section from "./cards_section.js";
import { Product } from "./Screens/ProductScreen.js";
import { ProductCards } from "./templateConstructor.js";
import { removeFromCart } from "./Screens/cartScreen.js";
import { awaitTimeout } from "./app_functionalities.js";
import { parseRequest_url } from "./utlis.js";

const cardHtml = await cards_section.render();

export const mainContainer_div = document.querySelector(".main-container");
routerExecution.render(cardHtml);

setInterval(() => {}, 500);

const Interval = (FuncTion) => {
  const TimeOut = setInterval(() => {
    console.log(checkAwaitTimeout);
    if (checkAwaitTimeout) {
      FuncTion();
      clearInterval(TimeOut);
    }
  }, 800);
};
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

  if (!localStorage.getItem("userInfo")) {
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
  }

  let header_height = contentHeaderBox_div.clientHeight;

  productMainScreen_div.style.marginTop = header_height + "px";
  productMainScreen_div.style.paddingTop = header_height - 26 + "px";
}
// awaitTimeout(homeScreenusabilities);

Interval(homeScreenusabilities);

//Homescreen usabilities
//Homescreen usabilities
//Homescreen usabilities

//##############################################################################

//productScreen usabilities
//productScreen usabilities
//productScreen usabilities

const psAfter_render = () => {
  const btns = document.querySelectorAll(".addtocart-btn");
  btns.forEach((btn) => {
    btn
      ? btn.addEventListener("click", () => {
          const radioSizes = document.querySelector(
            `input[name="product-size"]:checked`
          );
          const productQty = document.querySelectorAll(".product-qty");

          const size_name =
            radioSizes.parentElement.parentElement.children[1].children[0].textContent
              .replace(":", "")
              .trim();

          const abrev = size_name.includes("Extra")
            ? "El"
            : size_name.includes("Large")
            ? "L"
            : "S";

          const slug = `${Product.slug}?${radioSizes.value}-${abrev}`;

          productQty.forEach((e) => {
            localStorage.setItem("product-qty", e.value);
          });

          document.location.hash = `/carts/${slug}`;
        })
      : "";
  });
};
// awaitTimeout(psAfter_render);

Interval(psAfter_render);

//#################################################################################

//Checkout!!!!!!!!!!!!!!!!!!!!!!!!
//Checkout!!!!!!!!!!!!!!!!!!!!!!!!
//Checkout!!!!!!!!!!!!!!!!!!!!!!!!

//Checkout!!!!!!!!!!!!!!!!!!!!!!!!
//Checkout!!!!!!!!!!!!!!!!!!!!!!!!
//Checkout!!!!!!!!!!!!!!!!!!!!!!!!

//#############################################

function faqPageSetup() {
  let questionBtn = document.querySelectorAll(".Return-container-contentTxtQ");

  questionBtn.forEach((element) => {
    let toogle = false;
    element.addEventListener("click", (event) => {
      const div = element.parentElement.children[0].children[1];

      console.log("cool");
      // console.log(event.target.children[]);
      element.parentElement.children[1].style.display = "block";

      if (!toogle) {
        element.parentElement.children[1].style.display = "block";
        div.innerHTML = `
                <i class=" fas fa-minus Return-container-contentTxtQFont"></i> `;

        toogle = true;
      } else {
        element.parentElement.children[1].style.display = "none";
        div.innerHTML = `
                <i class=" fas fa-plus Return-container-contentTxtQFont"></i> `;
        toogle = false;
      }
    });
  });
}

Interval(faqPageSetup);

//#############################################
