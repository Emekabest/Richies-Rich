// import { login, update } from "../api.js";
import { awaitTimeout } from "../app_functionalities.js";
import {
  getShippingInfo,
  getUserInfo,
  setShippingInfo,
} from "../localStorage.js";
import { CheckoutSteps } from "../utlis.js";
import { header } from "./header.js";

export const ShippingScreen = {
  async after_render() {
    const btn = document
      .querySelector(".shipping-Form")
      .addEventListener("submit", async (event) => {
        event.preventDefault();

        const data = setShippingInfo({
          address: document.querySelector("#address").value,
          city: document.querySelector("#city").value,
          postalcode: document.querySelector("#postalcode").value,
          country: document.querySelector("#country").value,
        });

        document.location.hash = "/payment";
      });
  },

  render() {
    const { name } = getUserInfo();
    if (!name) {
      document.location.hash = "/";
    }

    awaitTimeout(this.after_render);

    const { address, city, postalcode, country } = getShippingInfo();
    console.log(address);

    return `
    
    <div class = "container">
    
          ${header.renderSmallView()}

      <div class="right-container">
        <div class="right-container_content-container">
          <div class="content">

          ${header.renderLargeView()}
            
            <div class="productMain-content">
      ${CheckoutSteps.render({ step1: true, step2: true })}


<div class="Main-container">
      <div class="Main-container-login-container">
        <center><h2>Shipping</h2></center>

        <div class="Main-container-login-containerInner">
          <form class = "shipping-Form">

            <div class="main-input mian-container-login-containerInner-email">
              <input type="text" placeholder="address" name="name" value = "${address}"
                id="address"
              />
            </div>

            <div class="main-input mian-container-login-containerInner-email">
              <input type="text" placeholder="city" name="name" value = "${city}"
                id="city"
              />
            </div>

            <div class="main-input mian-container-login-containerInner-email">
              <input type="text" placeholder="postalcode" name="name" value = "${postalcode}"
                id="postalcode"
              />
            </div>

            <div class="main-input mian-container-login-containerInner-email">
              <input type="text" placeholder="country" name="name" value = "${country}"
                id="country"
              />
            </div>
        
          

      


            <div class="form-btn">
              <button class="Btn">Continue</button>
            </div>

            
            </form>
       
        </div>
      </div>
    </div>
    </div>
    </div>
       
    
    `;
  },
};
