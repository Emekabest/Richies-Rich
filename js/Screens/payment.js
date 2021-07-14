// import { login, update } from "../api.js";
import { awaitTimeout } from "../app_functionalities.js";
import {
  clearUserInfo,
  getCartItems,
  getShippingInfo,
  getUserInfo,
  setPayment,
  setShippingInfo,
  setUserInfo,
} from "../localStorage.js";
import { CheckoutSteps } from "../utlis.js";
import { header } from "./header.js";

export const PaymentScreen = {
  async after_render() {
    const btn = document
      .querySelector(".shipping-Form")
      .addEventListener("submit", async (event) => {
        event.preventDefault();

        const payment_method = document.querySelector(
          `input[name="payment-method"]:checked`
        ).value;

        setPayment({ payment_method });

        document.location.hash = "/place-order";
      });
  },

  render() {
    const { name } = getUserInfo();
    if (!name) {
      document.location.hash = "/";
    }

    awaitTimeout(this.after_render);

    return `
    <div class = "container">
    
          ${header.renderSmallView()}

      <div class="right-container">
        <div class="right-container_content-container">
          <div class="content">

          ${header.renderLargeView()}
            
            <div class="productMain-content">
            
            <div class="Main-container">
            ${CheckoutSteps.render({ step1: true, step2: true, step3: true })}
            <div class="Main-container-login-container">
            <center><h2>Payment</h2></center>

            <div class="Main-container-login-containerInner">
                <form class="shipping-Form">

                        <div class="main-input mian-container-login-containerInner-email">
                        <input type="radio" placeholder="paypal" name="payment-method" value="paypal" 
                            id="paypal" style = "width:15px; height:10px" checked
                        />

                        <label for="paypal">paypal</label>
                        </div>

                        <div class="main-input mian-container-login-containerInner-email">
                        <input type="radio" placeholder="stripe" name="payment-method" value = "stripe"
                            id="stripe" style = "width:15px; height:10px"
                        />

                        <label for="stripe">stripe </label>
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
