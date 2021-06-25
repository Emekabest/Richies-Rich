export const contactScreen = {
  render() {
    return `
     <div class="container">
      <nav class="nav">
        <div class="nav-close-btn">
          <i class="far fa-times-circle"></i>
        </div>

        <ul class="navul-content">
          <li class="navli-content"><a href="#">PRODUCTS</a></li>
          <li class="navli-content"><a href="#">BOULDERS & SHRUGS</a></li>
          <li class="navli-content"><a href="#">SHIRTS</a></li>
          <li class="navli-content"><a href="#">KIDS</a></li>
          <li class="navli-content"><a href="#">MATCHY-MATCHY</a></li>
          <li><a href="/frontend/public/#/carts/">CARTS</a></li>
          <li class="navli-content"><a href="#">EXCLUSIVE OFFER</a></li>
          <li><a href="/frontend/public/#/contact/">CONTACT</a></li>
        </ul>
      </nav>

      <div class="right-container">
        <div class="content-container">
          <div class="content">
            <header class="content-headerbox">
              <div class="content-headerbox-productName">
                <div class="nav-open-btn">
                  <i class="fas fa-bars"></i>
                </div>

                <div class="content-headerbox-productName_name">
                  <span>
                    <h1 class=""><a href="/frontend/public/#/">RICHY'SRICH</a></h1>
                  </span>
                </div>
              </div>

              <div class="content-headerbox-right">
                <div class="content-headerbox-right_menu-list">
                  <ul>
                    <li><a href="">PRODUCTS</a></li>
                    <li><a href="">BOULDERS & SHURGS</a></li>
                    <li><a href="">SHIRTS</a></li>
                    <li><a href="">KIDS</a></li>
                    <li><a href="">MATCHY-MATCHY</a></li>
                    <li><a href="/frontend/public/#/carts/">CARTS</a></li>
                    <li><a href="">EXCLUSIVE OFFER</a></li>
                    <li><a href="/frontend/public/#/contact/">CONTACT</a></li>
                  </ul>
                </div>

                <div class="content-headerbox-right-register">
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
            
            <!--- content goes here -->

            <div class="productMain-content">
            <div class="contact-container">
              <div class="contact-box">
                <div class="contact-box-msg">
                  <h1 class="contact-box-msg-h1">Get in touch</h1>

                  <p class="contact-box-msg-p">
                    Want to get in touch? We'd love to hear from you.Here is how
                    you can reach us.
                  </p>
                </div>
              </div>

              <div class="contact-guide">
                <div class="contact-box-guide-box">
                  <div class="contact-box-guide-call">
                    <div class="contact-box-guide-call-box">
                      <i class="fas fa-phone phone"></i>

                      <h3 class="contact-box-guide-call-h3">Talk to sales</h3>

                      <p class="contact-box-guide-call-p">
                        Intersted in talking? Just pick up the phone to chat
                        with a member of our sales team
                      </p>

                      <a href="" class="contact-box-guide-call-a">
                        +234 813 890 2301
                      </a>
                    </div>
                  </div>

                  <div class="contact-box-guide-call">
                    <div class="contact-box-guide-call-box">
                      <i class="far fa-envelope phone"></i>

                      <h3 class="contact-box-guide-call-h3">
                        Contact Customer Support
                      </h3>

                      <p class="contact-box-guide-call-p">
                        Sometimes you need a little help from a friend or a
                        Hubspot support rep. Don't worry.... we're here for you
                      </p>

                      <a href="">
                        <button class="contact-box-guide-call-a-1">
                          Contact Support
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`;
  },
};
