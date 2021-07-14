import { awaitTimeout } from "./app_functionalities.js";
import { getCartItems } from "./localStorage.js";

export const parseRequest_url = () => {
  const url = document.location.hash;
  const request = url.split("/");

  console.log(request);
  const splittedUrl = {
    resource: request[1],
    slug: request[2],
    action: request[3],
  };

  return splittedUrl;
};

export const redirectUser = () => {
  const exist = getCartItems().find((x) => x);

  if (exist) {
    document.location.hash = "/shipping";
  } else {
    document.location.hash = "/";
  }
};

export const CheckoutSteps = {
  step1: "Signin",
  step2: "Shipping",
  step3: "Payment",
  step4: "Place Order",

  render({ step1, step2, step3, step4 }) {
    return `<div class = "checkout-steps">
    <div class="progress-cont">

    <div class="progress-bar" style = "width:${
      step4 ? "100" : step3 ? "75" : step2 ? "48.5" : "21.5"
    }%" >

    </div>

    </div>

    <ul>
        <li class="${step1 ? "coloured" : "not-coloured"}"><a> ${
      this.step1
    }</a></li>
        <li class="${step1 && step2 ? "coloured" : "not-coloured"}"><a>${
      this.step2
    }</a></li>
        <li  class="${
          step1 && step2 && step3 ? "coloured" : "not-coloured"
        } " ><a>${this.step3}</a> </li>
        <li class="${
          step1 && step2 && step3 && step4 ? "coloured" : "not-coloured"
        }" ><a>${this.step4}</a></li>
        </ul>
    </div>`;
  },
};
