import { get } from "../http.js";
import { header } from "./header.js";
import { BO_categoryProduct } from "../templateConstructor.js";

export const KidsScreen = {
  after_render() {},
  async render() {
    const herokuServer =
      "https://richies-rich1-commerce.herokuapp.com/api/products";
    const localServer = "http://localhost:5000/api/products";

    const allProducts = await get(localServer);

    const kidsWears = [];

    allProducts.forEach((x) => {
      if (x.category === "Kids") {
        kidsWears.push(x);
      }
    });

    const y = kidsWears.sort((x, b) => {
      return x;
    });

    return `
    div class="container">
    
          ${header.renderSmallView()}

      <div class="right-container">
        <div class="right-container_content-container">
          <div class="content">

          ${header.renderLargeView()}
            
            <div class="productMain-content">
      <div class = "main-Ccontainer">
           

  ${BO_categoryProduct.getCardsHTMLString(kidsWears).replace("undefined", "")}
            </div>
            </div>

            <footer class="footer">
              <div class="footer-container">
                <div class="label">
                  <div class="label-logo-name">
                    <h3 class="label-logo-name-h3">Richie'sRich</h3>
                  </div>

                  <div class="label-logo-media">
                    <a href="" class="fab fa-facebook mediafont"></a>
                    <a href="" class="fab fa-twitter mediafont"></a>
                    <a href="" class="fab fa-instagram mediafont"></a>
                    <a href="" class="fab fa-whatsapp mediafont"></a>
                  </div>
                </div>

                <div class="customer-care">
                  <div class="customer-care-support">
                    <h5 class="customer-care-support-h5">Support</h5>
                  </div>

                  <ul class="customer-care-ul">
                    <li class="customer-care-li"> <a id="/contact" class=linK>Contact Us </a> </li>
                    <li class="customer-care-li"> <a id="">FAQ</a></li>
                    <li class="customer-care-li"> <a id="">Locate A Dealer</a> </li>
                    <li class="customer-care-li"> <a id="">Delivery</a> </li>
                    <li class="customer-care-li"> <a id="">Terms and conditions</a> </li>
                  </ul>
                </div>

                <div class="about">
                  <div class="about-name">
                    <h5 class="about-name-h5">Richie'sRich</h5>
                  </div>

                  <ul class="about-ul">
                    <li class="about-li"> <a href="">About Us</a> </li>
                    <li class="about-li"> <a href="">Career</a> </li>
                    <li class="about-li"> <a href="">Testimonials</a> </li>
                    <li class="about-li"> <a href="">Access</a> </li>
            <!---   <li class="about-li"> <a href="404.html">error-page</a> </li> -->
                  </ul>
                </div>

                <div class="footer-latest-register">
                  <div class="footer-latest-div">
                    <i class="far fa-envelope latestfont">
                      <span
                        >Stay up to date on the latest from Richies Rich</span
                      >
                    </i>
                  </div>

                  <div class="footer-latest-btn-div">
                     <a href="signup.html"><button class="footer-latest-btn">Sign Up</button></a>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
    
        
      `;
  },
};
