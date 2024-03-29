import { errorPageScreen } from "./Screens/errorScreen.js";
import { homeScreen } from "./Screens/homeScreen.js";
import { mainContainer_div } from "./index.js";
import { productScreen } from "./Screens/ProductScreen.js";
import { parseRequest_url } from "./utlis.js";
import { cartScreen, removeFromCart } from "./Screens/cartScreen.js";
import { contactScreen } from "./Screens/contactScreen.js";
import { ranScreen } from "./Screens/ranscreen.js";
import { allProduct_categoryScreen } from "./Screens/AP_categoryScreen.js";
import { LoginScreen } from "./Screens/login.js";
import { RegisterScreen } from "./Screens/register.js";
import { FaqScreen } from "./Screens/faq.js";
import { ProfileScreen } from "./Screens/profile.js";
import { KidsScreen } from "./Screens/kidsScreen.js";
import { ShippingScreen } from "./Screens/shipping.js";
import { PaymentScreen } from "./Screens/payment.js";
import { PlaceOrderScreen } from "./Screens/placeOrderScreen.js";
import OrdersPage from "./Screens/order.js";
import { DeliveryScreen } from "./Screens/deliveryScreen.js";
import { ReturnsAndRefunds } from "./Screens/returns-refund.js";

// import { html } from "./lit-html";
let checkAwaitTimeout = false;

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
      "/APcategory": allProduct_categoryScreen,
      "/login": LoginScreen,
      "/signup": RegisterScreen,
      "/faq": FaqScreen,
      "/profile": ProfileScreen,
      "/kids": KidsScreen,
      "/shipping": ShippingScreen,
      "/payment": PaymentScreen,
      "/place-order": PlaceOrderScreen,
      "/orders": OrdersPage,
      "/delivery": DeliveryScreen,
      "/return-and-refunds": ReturnsAndRefunds,
    };

    const router = async () => {
      const request = parseRequest_url();
      const parseUrl =
        (request.resource ? `/${request.resource}` : "/") +
        (request.slug ? `/:slug` : "") +
        (request.action ? `/${request.action}` : "");

      const screen = route[parseUrl] ? route[parseUrl] : errorPageScreen;
      // const Page = await screen.render();
      const getScreen = async () => {
        const RenderScreen = await screen.render(cardHtml);

        const TimeOut = setInterval(() => {
          if (RenderScreen) {
            checkAwaitTimeout = true;
            clearInterval(TimeOut);
          }
        }, 100);
        return RenderScreen;
      };

      // console.log(await screen.render());

      mainContainer_div.innerHTML = await getScreen();

      const cartCardDel_div = document.querySelectorAll(
        ".cart-boxInner_Productcard_right_delete"
      );

      Array.from(cartCardDel_div).forEach((del_btn) => {
        del_btn.addEventListener("click", () => {
          console.log(del_btn);
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

export { routerExecution, checkAwaitTimeout };
