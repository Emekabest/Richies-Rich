import { login } from "../api.js";
import { awaitTimeout } from "../app_functionalities.js";
import { setUserInfo } from "../localStorage.js";
import { CheckoutSteps, redirectUser } from "../utlis.js";
import { header } from "./header.js";

export const LoginScreen = {
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
          setUserInfo(data);

          redirectUser();
          // document.location.hash = "/";
        }
      });
  },

  render() {
    awaitTimeout(this.after_render);

    return `
    <div class = "container">
    
          ${header.renderSmallView()}

      <div class="right-container">
        <div class="right-container_content-container">
          <div class="content">

          ${header.renderLargeView()}
            
            <div class="productMain-content">

            ${CheckoutSteps.render({ step1: true })}
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
               <div style = "margin:15px 0px;display:flex">
          <h5>New user?</h5>
          <a class="linK" id="/signup" style="color:#000; text-decoration:underline; font-weight:bold;font-size:14px; margin-left:10px;"> create an account <a>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
    `;
  },
};
