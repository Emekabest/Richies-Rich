import { errorPageScreen } from "./Screens/errorScreen.js";
import { homeScreen } from "./Screens/homeScreen.js";
import { mainContainer_div } from "./index.js";
import { productScreen } from "./Screens/ProductScreen.js";
import { parseRequest_url } from "./utlis.js";
import { cartScreen, removeFromCart } from "./Screens/cartScreen.js";
import { contactScreen } from "./Screens/contactScreen.js";
import { ranScreen } from "./Screens/ranscreen.js";
import { allProduct_category } from "./Screens/AP_categoryScreen.js";

// import { html } from "./lit-html";

const getLinkToHash = (link) => {
  document.location.hash = link;
};

const routerExecution = {
  render: (cardHtml) => {
    const route = {
      "/": homeScreen,
      "/product/:slug": productScreen,
      "/carts/:slug": cartScreen,
      "/carts": cartScreen,
      "/contact": contactScreen,
      "/APcategory": allProduct_category,
    };

    const router = async () => {
      const request = parseRequest_url();
      const parseUrl =
        (request.resource ? `/${request.resource}` : "/") +
        (request.slug ? `/:slug` : "") +
        (request.action ? `/${request.action}` : "");

      console.log(parseUrl);

      const screen = route[parseUrl] ? route[parseUrl] : errorPageScreen;
      // const Page = await screen.render();

      // console.log(await screen.render());

      mainContainer_div.innerHTML = await screen.render(cardHtml);

      const cartCardDel_div = document.querySelectorAll(
        ".cart-boxInner_Productcard_right_delete"
      );

      Array.from(cartCardDel_div).forEach((del_btn) => {
        del_btn.addEventListener("click", () => {
          console.log(del_btn.id);
          removeFromCart(del_btn.id);
        });
      });

      const link = document.querySelectorAll(".linK");
      Array.from(link).forEach((element) => {
        element.addEventListener("click", (e) => {
          getLinkToHash(element.id);
        });
      });
    };

    addEventListener("hashchange", () => {
      router();
      location.reload();
    });

    addEventListener("load", router());
  },
};

export default routerExecution;
