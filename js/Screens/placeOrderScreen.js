import { CheckoutSteps } from "../utlis.js";
import { header } from "./header.js";

export const PlaceOrderScreen = {
  after_render() {},

  render() {
    return `  <div class="container">
     
          ${header.renderSmallView()}

      <div class="right-container">
        <div class="right-container_content-container">
          <div class="content">
            <!--- Header Section below  -->

            ${header.renderLargeView()}
          
            <div class="productMain-content">
    ${CheckoutSteps.render({
      step1: true,
      step2: true,
      step3: true,
      step4: true,
    })}
            </div>
          </div>
        </div>
      </div>
    </div> `;
  },
};
