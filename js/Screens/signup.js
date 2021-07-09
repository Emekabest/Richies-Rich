import { header } from "./header.js";

export const SignUp = {
  after_render() {
    document.querySelector(".Btn").addEventListener("click", () => {
      console.log("cool");
    });
  },

  render() {
    return `
    <div class = "container">
          ${header.renderSmallView()}

      <div class="right-container">
        <div class="right-container_content-container">
          <div class="content">

          ${header.renderLargeView()}

            <div class="productMain-content">

    <div class="Main-container">
      <div class="Main-container-login-container">
        <center><h2>Create Account</h2></center>

        <div class="Main-container-login-containerInner">
          <form action="">
            <div
              class="main-input main-container-login-containerInner-username"
            >
              <input
                type="username"
                placeholder="First Name"
                name="firstname"
              />
            </div>
            <div class="main-input mian-container-login-containerInner-email">
              <input type="email" placeholder="Email" name="email" />
            </div>

            <div
              class="main-input mian-container-login-containerInner-password"
            >
              <input
                type="password"
                class="password"
                placeholder="Password"
                name="password"
              />
            </div>

            <div
              class="main-input mian-container-login-containerInner-repassword"
            >
              <input
                type="password"
                class="re-password"
                placeholder="Re-enter password"
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
       
    
    `;
  },
};
