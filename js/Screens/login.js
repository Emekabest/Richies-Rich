import { login } from "../api.js";
import { awaitTimeout } from "../app_functionalities.js";

export const Login = {
  async after_render() {
    const btn = document
      .querySelector(".Form")
      .addEventListener("submit", async (event) => {
        event.preventDefault();

        const data = await login({
          email: document.querySelector("#email").value,
          password: document.querySelector("#password").value,
        });

        if (data.error) {
          alert(data.error);
        } else {
          alert("Good");
        }
      });
  },

  render() {
    awaitTimeout(this.after_render);

    return `
    <div class = "container">
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
          <li class="navli-content"><a href="#">EXCLUSIVE OFFER</a></li>
          <li><a class = "linK" id="/contact">CONTACT</a></li>
        </ul>
      </nav>

      <div class="right-container">
        <div class="right-container_content-container">
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
                      <li><a id="/contact"  href = "javascript:void(0)"  class="linK">CONTACT</a></li>
                    <li><a id=""  href = "javascript:void(0)"  class="linK">EXCLUSIVE OFFER</a></li>
                    <li><a id="/carts"  href = "javascript:void(0)"  class="linK">CARTS</a></li>

                  </ul>
                </div>
              
                <div class="menu-bar"> <i class="fas fa-ellipsis-v"></i> </div>

                <div class="content-headerbox-right-register">

                  <!---Login Zone -->

                  <div class="content-headerbox-right-register-login">
                  <a href="/login" class="linK" id="/login"> 
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
                  <a href="/signup" class="linK" id="/signup"> 
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
                  <a href="/login" class="linK" id="/login"> 
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
                  <a href="/signup" class="linK" id="/signup"> 
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

<div class="Main-container">
      <div class="Main-container-login-container">
        <center><h2>Login</h2></center>

        <div class="Main-container-login-containerInner">
          <form class = "Form">
            <div class="main-input mian-container-login-containerInner-email">
              <input type="email" placeholder="Email" name="email"
                id="email"
              />
            </div>

            <div
              class="main-input mian-container-login-containerInner-password"
            >
              <input
                id="password"
                type="password"
                class="password"
                placeholder="Password"
                name="password"
              />
            </div>

    
            <div class="form-btn">
              <button class="Btn">Submit</button>
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
