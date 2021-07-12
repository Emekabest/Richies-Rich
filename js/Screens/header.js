import { getUserInfo } from "../localStorage.js";

export const header = {
  renderSmallView() {
    return `
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
                <li><a class="linK" id="/carts">CART</a></li>
                <li class="navli-content"><a href="#">EXCLUSIVE OFFER</a></li>
                <li><a class = "linK" id="/contact">CONTACT</a></li>
            </ul>
      </nav>
        `;
  },

  renderLargeView() {
    // localStorage.setItem("OK", getUserInfo().name);

    return `
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
                        <li><a id="/contact"  href = "javascript:void(0)"  class="linK">CONTACT</a></li>
                    <li><a id=""  href = "javascript:void(0)"  class="linK">EXCLUSIVE OFFER</a></li>
                    <li><a id="/carts" href="javascript:void(0)"  class="linK">CART</a></li>
                  </ul>
                </div>
              
                ${
                  getUserInfo().name
                    ? `<p class="user-name" > 
                    <a class="linK" id="/profile">${getUserInfo().name}
                      </a> 
                      </p>`
                    : `<div class="menu-bar"> <i class="fas fa-ellipsis-v"></i> </div>

                <div class="content-headerbox-right-register">

                  <!---Login Zone -->

                  <div class="content-headerbox-right-register-login">
                  <a class="linK" id="/login">
                  
                   <!--- <div class="content-headerbox-right-register-login-user-fa"> 
                      <i class="fas fa-user"></i>
                      <h6>Login</h6>
                    </div> -->

                    <div class="content-headerbox-right-register-login-user-txt">
                      <i class="fas fa-sign-in-alt"></i>
                      <p class="register-p">Login</p>
                    </div>
                  </a>
                  </div>

                  <!---Sign up Zone -->

                    <div class="content-headerbox-right-register-signUp">
                        <a class="linK" id="/signup"> 
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
                </div>`
                }


            </div>
            </header>

 <!---  content goes here -->

            <div class="menu-list">
          
              <div class="content-headerbox-right2-register">

                <!---Login Zone -->

                  <div class="content-headerbox-right-register-login">
                  <a class="linK" id="/login"> 
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
                  <a class="linK" id="/signup"> 
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

        `;
  },
};
