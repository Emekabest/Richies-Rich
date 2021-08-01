import { header } from "./header.js";

export const FaqScreen = {
  render() {
    return ` <div class="container">
     
          ${header.renderSmallView()}

      <div class="right-container">
        <div class="right-container_content-container">
          <div class="content">
            <!--- Header Section below  -->

            ${header.renderLargeView()}
          
            <div class="productMain-content">
              <main class="main-area">
              
               <div class="faq-container">
              <div class="faq-container-box">
                <div class="faq-container-boxtxt">
                  <h1 class="faq-container-boxtxt-h1">
                    FAQ! Need Help?
                    <span class="faq-container-boxtxt-span"
                      >we've got you covered</span
                    >
                  </h1>
                </div>

                <div class="faq-container-boxOptions">
                  <div class="faq-container-boxOptions-div">
                    <!-- <form class="faq-container-boxOptionSuggestion">
                      <p  class="faq-container-boxOptionSuggestion-p">Suggestion</p>
                      <input type="text" placeholder="PLACE YOUR SUGGESTION" class="faq-container-boxOptionSuggestion-inp">
                      <button class="faq-container-boxOptionSuggestion-btn">Submit</button>
                    </form> -->

                    <a id="/orders" class="linK">
                      <div class="faq-container-boxOptionListone">
                        <div class="faq-container-boxOptionListoneBox">
                          <i></i>

                          <h4>ORDERS</h4>
                        </div>
                      </div>
                    </a>

                    <a href="javascript:void(0)"  id = "/delivery"  class= "linK">
                      <div
                        class="faq-container-boxOptionListone boxOptionListTwo"
                      >
                        <div class="faq-container-boxOptionListoneBox">
                          <i></i>

                          <h4>DELIVERY</h4>

                        </div>
                      </div>
                    </a>

                    <a href=javascript:void(0)" id="/return-and-refunds" class="linK">

                      <div class="faq-container-boxOptionListone">
                        <div class="faq-container-boxOptionListoneBox">
                          <i></i>

                          <h4>RETURNS & REFUNDS</h4>
                          
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

              </main>
            </div>

    
          </div>
        </div>
      </div>
    </div>`;
  },
};
