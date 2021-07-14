import { login, update } from "../api.js";
import { awaitTimeout } from "../app_functionalities.js";
import { clearUserInfo, getUserInfo, setUserInfo } from "../localStorage.js";
import { header } from "./header.js";

export const ProfileScreen = {
  async after_render() {
    document.querySelector(".signout-btn").addEventListener("click", () => {
      clearUserInfo();

      document.location.hash = "/";
    });

    const btn = document
      .querySelector(".profile-Form")
      .addEventListener("submit", async (event) => {
        event.preventDefault();

        const data = await update({
          name: document.querySelector("#name").value,
          email: document.querySelector("#email").value,
          password: document.querySelector("#password").value,
          re_password: document.querySelector("#re-password").value,
        });

        if (data.error) {
          alert(data.error);
        } else {
          setUserInfo(data);
          document.location.hash = "/";
        }
      });
  },

  render() {
    awaitTimeout(this.after_render);
    const { name, email } = getUserInfo();

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
        <center><h2>User Profile</h2></center>

        <div class="Main-container-login-containerInner">
          <form class = "profile-Form">

            <div class="main-input mian-container-login-containerInner-email">
              <input type="text" placeholder="Name" name="name" value = "${name}"
                id="name"
              />
            </div>
        
            <div class="main-input mian-container-login-containerInner-email">
              <input type="email" placeholder="Email" name="email" value = "${email}"
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

            <div
              class="main-input mian-container-login-containerInner-password"
            >
              <input
                id="re-password"
                type="password"
                class="re-password"
                placeholder="Re-password"
                name="password"
              />
            </div>

            <div class="form-btn">
              <button class="Btn">Submit</button>
            </div>

            
            </form>
            <div class="cont_signout-btn" >
              <button class="signout-btn">Sign Out</button>
            </div>
        </div>
      </div>
    </div>
    </div>
    </div>
       
    
    `;
  },
};
