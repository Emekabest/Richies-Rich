// import { html } from "./lit-html";

import { awaitTimeout } from "../app_functionalities.js";
import { get } from "../http.js";

export const homeScreen = {
  after_render() {
    const viewMore_p = document.querySelectorAll(".sales-category-view-more");
    viewMore_p.forEach((Vbtn) => {
      Vbtn.addEventListener(
        "click",
        ({
          target: {
            parentNode: {
              parentNode: { children },
            },
          },
        }) => {
          const categoryName = children[0].textContent.trim();
          localStorage.setItem("category-name", categoryName);
          Vbtn.href = "";
          document.location.hash = "/APcategory";
        }
      );
    });
  },

  render(cardHtml) {
    awaitTimeout(this.after_render);

    return ` <div class="container">
      <nav class="nav">
        <div class="nav-close-btn">
          <i class="far fa-times-circle"></i>
        </div>
     <ul class="navul-content">
          <li class="navli-content"><a class="linK" id="/">PRODUCTS</a></li>
          <li class="navli-content"><a >BOULDERS & SHRUGS</a></li>
          <li class="navli-content"><a >SHIRTS</a></li>
          <li class="navli-content"><a >KIDS</a></li>
          <li class="navli-content"><a >MATCHY-MATCHY</a></li>
          <li><a class="linK" id="/carts"> CARTS</a></li>
          <li class="navli-content"><a >EXCLUSIVE OFFER</a></li>
          <li><a class="linK" id="/contact">CONTACT</a></li>
        </ul>
      </nav>

      <div class="right-Container">
        <div class="content-container">
          <div class="content">

            <header class="content-headerbox">
              <div class="content-headerbox-productName">
                <div class="nav-open-btn">
                
                  <i class="fas fa-bars"></i>
                </div>

                <div class="content-headerbox-productName_name">
                  <span>
                    <h1 class=""><a id="/" href = "/#/" class="linK">RICHY'SRICH</a></h1>
                  </span>
                </div>
              </div>

              <div class="content-headerbox-right">
                <div class="content-headerbox-right_menu-list">
                 <ul>
                    <li><a id="/" href = "javascript:void(0)" class="linK">PRODUCTS</a></li>
                    <li><a id="" href = "javascript:void(0)"   class="linK" >BOULDERS & SHURGS</a></li>
                    <li><a id=""  href = "javascript:void(0)"  class="linK">SHIRTS</a></li>
                    <li><a id=""  href = "javascript:void(0)"  class="linK">KIDS</a></li>
                    <li><a id="" href = "javascript:void(0)"   class="linK">MATCHY-MATCHY</a></li>
                    <li><a id="/carts"  href = "/carts"  class="linK">CARTS</a></li>
                    <li><a id=""  href = "javascript:void(0)"  class="linK">EXCLUSIVE OFFER</a></li>
                    <li><a id="/contact"  href = "/contact"  class="linK">CONTACT</a></li>

                  </ul>
                </div>
              
                <div class="menu-bar"> <i class="fas fa-ellipsis-v"></i> </div>

                <div class="content-headerbox-right-register">

                  <!---Login Zone -->

                  <div class="content-headerbox-right-register-login">
                  <a href="login.html">
                    <div
                      class="content-headerbox-right-register-login-user-fa"
                    >
                      <i class="fas fa-user"></i>
                      <h6>Login</h6>
                    </div>

                    <div
                      class="content-headerbox-right-register-login-user-txt"
                    >
                      <i class="fas fa-sign-in-alt"></i>
                      <p class="register-p">Login</p>
                    </div>
                  </a>
                  </div>

                  <!---Sign up Zone -->

                  <div class="content-headerbox-right-register-signUp">
                  <a href="signup.html">
                    <div
                      class="content-headerbox-right-register-signUp-user-fa"
                    >
                      <i class="fas fa-user-plus"></i>
                      <h6>Register</h6>
                    </div>
                    <div
                      class="content-headerbox-right-register-signUp-user-txt"
                    >
                      <i class="fas fa-user-plus"></i>
                      <p class="register-p">Register</p>
                    </div>
                  </a>
                </div>
                </div>
              </div>
            </header>

            <!---  content goes here -->

            <div class="menu-list">
          
              <div class="content-headerbox-right2-register">

                <!---Login Zone -->

                  <div class="content-headerbox-right-register-login">
                    <a href="login.html">
                      <div class="content-headerbox-right-register-login-user-fa">                                                   
                        <i class="fas fa-user"></i>
                        <h6>Login</h6>
                      </div>

                      <div class="content-headerbox-right-register-login-user-txt">
                        <i class="fas fa-sign-in-alt"></i>
                        <p class="register-p">Login</p>
                      </div>
                    </a>
                  </div>

                <!---Sign up Zone -->

                <div class="content-headerbox-right-register-signUp">
                  <a href="signup.html">
                    <div class="content-headerbox-right-register-signUp-user-fa">
                      <i class="fas fa-user-plus"></i>
                      <h6>Register</h6>
                    </div>
                    <div class="content-headerbox-right-register-signUp-user-txt">
                      <i class="fas fa-user-plus"></i>
                      <p class="register-p">Register</p>
                    </div>
                  </a>
               </div>
             </div>
            </div> 
            
            <div class="productMain-content">
              <main class="main-area"> ${
                cardHtml ? cardHtml.replace("undefined", "") : ""
              } </main>
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
                    <li class="customer-care-li"> <a id="/contact" class="linK">Contact Us </a> </li>
                    <li class="customer-care-li"> <a id="">FAQ</a> </li>
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
    </div>`;
  },
};
