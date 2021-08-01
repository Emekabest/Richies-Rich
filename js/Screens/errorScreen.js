import { header } from "./header.js";

export const errorPageScreen = {
  render() {
    return `     <div class="container">
     
          ${header.renderSmallView()}

      <div class="right-container">
        <div class="right-container_content-container">
          <div class="content">
            <!--- Header Section below  -->

            ${header.renderLargeView()}
          
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
