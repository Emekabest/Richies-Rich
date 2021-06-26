export const errorPageScreen = {
  render() {
    return `     <div class="container">
      <nav class="nav">
        <div class="nav-close-btn">
          <i class="far fa-times-circle"></i>
        </div>

        <ul class="navul-content">
          <li class="navli-content"><a href="" class="linK" data-link="/">PRODUCTS</a></li>
          <li class="navli-content"><a href="#" >BOULDERS & SHRUGS</a></li>
          <li class="navli-content"><a href="#" >SHIRTS</a></li>
          <li class="navli-content"><a href="#" >KIDS</a></li>
          <li class="navli-content"><a href="#" >MATCHY-MATCHY</a></li>
          <li><a href="" class="linK" data-link="/carts"> CARTS</a></li>
          <li class="navli-content"><a href="#">EXCLUSIVE OFFER</a></li>
          <li><a href="" class = "linK" data-link="/contact">CONTACT</a></li>
        </ul>
      </nav>

      <div class="right-container">
        <div class="right-container_content-container">
          <div class="content">
            <!--- Header Section below  -->

          <header class="content-headerbox">
              <div class="content-headerbox-productName">
                <div class="nav-open-btn">
                
                  <i class="fas fa-bars"></i>

                </div>

                <div class="content-headerbox-productName_name">
                  <span>
                    <h1 class=""><a href="/" class = "linK">RICHY'SRICH</a></h1>
                  </span>
                </div>
              </div>

              <div class="content-headerbox-right">
                <div class="content-headerbox-right_menu-list">
                  <ul>

                    <li><a href="" data-link="/" class="linK">PRODUCTS</a></li>
                    <li><a href="" data-link="" class="linK" >BOULDERS & SHURGS</a></li>
                    <li><a href="" data-link="" class="linK">SHIRTS</a></li>
                    <li><a href="" data-link="" class="linK">KIDS</a></li>
                    <li><a href="" data-link="" class="linK">MATCHY-MATCHY</a></li>
                    <li><a href="/#/carts/"   data-link="/carts"  class="linK">CARTS</a></li>
                    <li><a href="" data-link="" class="linK">EXCLUSIVE OFFER</a></li>
                    <li><a href="/#/contact/" data-link="/contact" class="linK">CONTACT</a></li>

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

            <!-- content goes here  -->

            
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
              <main class="mai-area">
              
               <div class="error-container">
    <div class="error-container-box">
      <div class="error-contaianer-logo">
        <img src="../image/errormsg.jpg" class="error-img" alt="">
      </div>

      <div class="error-txt">
        <h1 class="error-txt1 error-code-h1">404</h1>
        <p class="error-txt1 error-code-p">Whoops.. Page Not Found !!!</p>
     <!---   <a href="index.html"><button class="btn error-txt1">Go Home</button></a> -->
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
