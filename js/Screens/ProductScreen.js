import { currency_sign, getDiscount } from "../app_functionalities.js";
import { get } from "../http.js";
import { getCartItems } from "../localStorage.js";
import { checkAwaitTimeout } from "../routerExecution.js";
import { ProductCards } from "../templateConstructor.js";
import { parseRequest_url } from "../utlis.js";
import { header } from "./header.js";
// import { mainArea_main, mainAreaRelatedcontent_div } from "./mainIndex.js";

const Interval = (FuncTion) => {
  const TimeOut = setInterval(() => {
    console.log(checkAwaitTimeout);
    if (checkAwaitTimeout) {
      FuncTion();
      clearInterval(TimeOut);
    }
  }, 300);
};

let Product;

class ProductScreen {
  constructor() {
    this.slug = "";
    this.product = "";
  }

  getSlug() {
    const request = parseRequest_url();
    const slug = request.slug.split("?")
      ? request.slug.split("?")[0]
      : request.slug;
    this.slug = slug;
    console.log(this.slug);
  }

  display() {
    const slugSettings = () => {
      const radioTxt_p = document.querySelectorAll(".radio-txt");
      const splittedSlug = parseRequest_url().slug
        ? parseRequest_url().slug.split("?")[1]
        : "";

      radioTxt_p.forEach((e) => {
        if (splittedSlug) {
          const checkRadioInput =
            e.textContent.replace(":", "").trim()[0] ===
            splittedSlug.split("-")[1].trim()
              ? splittedSlug.split("-")[1].trim()
              : "";

          if (checkRadioInput) {
            console.log("ok radio");
            const radioInput =
              e.parentElement.parentElement.children[0].children[0];
            radioInput.checked = true;
          }
        }
      });
    };

    Interval(slugSettings);

    const slug = parseRequest_url().slug;

    const productItems = getProductDetails();

    const cartItems = getCartItems();
    const product = cartItems.find((item) => item.slug === slug);

    const { size, qty } = product ? product : "";

    if (qty) {
      this.product.qty = qty;
    }

    return ` <div class="container">

          ${header.renderSmallView()}

      <div class="right-Container">
        <div class="content-container">
          <div class="content">
          
          ${header.renderLargeView()}

            <div class="productMain-content">
              <main class="product_main-area">
              <div class="main-areaContent">
                <section class="left-bar">
                  <div class="left-barTop">
                    <div class="left-barTopimg">
                      <img src="./image/${this.product.image}" alt="${
      this.product.name
    }" />
                    </div>
                    <div class="left-barTopimg">
                      <img src="./image/${this.product.image}" alt="${
      this.product.name
    }" />

                    </div>
                    <div class="left-barTopimg">
                       <img src="./image/${this.product.image}" alt="${
      this.product.name
    }" />

                    </div>
                    <div class="left-barTopimg">
                       <img src="./image/${this.product.image}" alt="${
      this.product.name
    }" />

                    </div>
                  </div>
                  <div class="left-barButtom">

                    <div class="left-barButtomimage">
                     <img src="./image/${this.product.image}" alt="${
      this.product.name
    }" />
                      </div>
                  </div>
                </section>





 <section class="left-bar2">
                  <div class="left-bar2Top">
                    <div class="left-bar2Topimg">
                      <img src="./image/${this.product.image}" alt="${
      this.product.name
    }" />
                    </div>
                    <div class="left-bar2Topimg">
                      <img src="./image/${this.product.image}" alt="${
      this.product.name
    }" />

                    </div>
                    <div class="left-bar2Topimg">
                       <img src="./image/${this.product.image}" alt="${
      this.product.name
    }" />                                               

                    </div>
                    <div class="left-bar2Topimg">
                       <img src="./image/${this.product.image}" alt="${
      this.product.name
    }" />

                    </div>
                 
                      <div class="left-bar2Topimg left-bar2-buttomimg">

                     <img src="./image/${this.product.image}" alt="${
      this.product.name
    }" />
                      </div>

                    </div>
                </section>

                <section class="right-bar">
                  <div class="right-barContent">
                    <div class="right-barContent_name-tag">
                      <h1 style="color: #003d59">${this.product.name}</h1>
                    </div>

                    <div class="right-barContentPrice-tag">
                     <span>
                        <h1 style="color: #003d59">Discount: ${
                          this.product.discount_price
                        }% </h1>
                      </span>
                      <span class="right-barContentPrice-tag-recent">
                        <h1  style="color:#540a0a; text-decoration:line-through">Price: ${currency_sign(
                          "naira"
                        )} ${this.product.recent_price}</h1>
                      </span>
                      <span class="right-barContentPrice-tag-main">
                        <h1  style="color:#003d59">Price: ${currency_sign(
                          "naira"
                        )} ${getDiscount(
      this.product.recent_price,
      this.product.discount_price
    )}</h1>
                      </span>
                    </div>

                    <div class="right-barContentProduct-details">
                      <div class="right-barContentProduct-details_image-tag">
                        <div class="right-barContent_image-tag-inner">
                          <div class="right-barContent_image">
                       <img src="../image/${this.product.image}" alt="${
      this.product.name
    }" /> 

                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="right-barContent_measureMent-box">
                              <center>  <h3>Measurement </h3> </center>

                      <div class="right-barContent_measureMent-box-measurement-tag">
                      <div class = "right-barContent_measureMent-box-measurement-tag-radio">  <input type=radio name= "product-size" id="small" value="13"> </div>
                      <label class = "right-barContent_measureMent-box-measurement-tag-size" for = "small">  <p class = "radio-txt"> Small : </p> <h4> 13</h4> </label> 
                      </div>

                      <div class="right-barContent_measureMent-box-measurement-tag">
                        <div class = "right-barContent_measureMent-box-measurement-tag-radio"><input type = radio name= "product-size" id="large"  value="20"> </div>
                        <label class = "right-barContent_measureMent-box-measurement-tag-size" for = "large">  <p class = "radio-txt" > Large : </p> <h4> 20</h4> </label> 
                        </div>
                        
                        <div class="right-barContent_measureMent-box-measurement-tag">
                        <div class = "right-barContent_measureMent-box-measurement-tag-radio"><input type = radio name= "product-size" id="extra-large" value="30"> </div>
                        <label class = "right-barContent_measureMent-box-measurement-tag-size" for = "extra-large">  <p class = "radio-txt" > Extra-Large : </p> <h4> 30</h4> </label> 
                      </div>
                    
                      <div class = "right-barContent_measureMent-box-qty">
                      <div class = "right-barContent_measureMent-box-qtyInner">
                      <h2>Quantity:</h2>

                       <select class = "product-qty" id = "">
                       ${console.log(this.product.qty)}
                            ${[...Array(this.product.countInStock).keys()].map(
                              (x) =>
                                this.product.qty === x + 1
                                  ? `<option selected value="${x + 1}">${
                                      x + 1
                                    }  </option>`
                                  : `<option value="${x + 1}"> ${
                                      x + 1
                                    } </option>`
                            )}
                    
                      </select>
                      
                      <h4> Pcs </h4>
                       </div>
                       </div>
                    </div>

                    <div class="right-barContent_description-box">
                      <article>Description-Tag</article>
                    </div>

                    <div class="right-barContent_addButton">
                      <a> <button class="addtocart-btn">ADD <i class="fas fa-cart-plus"></i></button> </a>
                    </div>
                  </div>
                </section>

    <div class="right-bar2">
                  <div class="right-bar2Content">
                <div class = "right-bar2Content-left">
                    <div class="right-bar2Content-left_name-tag">
                      <h1 style="color: #003d59">${this.product.name}</h1>
                    </div>

                    <div class="right-bar2Content-left_Price-tag">
                     <span class= "right-bar2Content-left_Price-tag-discount" >
                        <h1 style="  color: #003d59">   </h1>
                      </span>
                      <span class = "right-bar2Content-left_Price-tag-recent">
                        <h1 style="color:#540a0a; text-decoration:line-through">Price: ${currency_sign(
                          "naira"
                        )} ${this.product.recent_price}</h1>
                      </span>

                      <span class = "right-bar2Content-left_Price-tag-main">
                        <h1>Price: ${currency_sign("naira")} ${
      this.product.main_price
    } </h1>
                      </span>
                    </div>
                    <div class="right-bar2Content-left_Product-details">
                      <div class="right-bar2Content-left_Product-details_image-tag">
                        <div class="right-bar2Content-left_image-tag-inner">
                          <div class="right-bar2Content-left_image">
                            <img src="./image/${this.product.image}" alt="${
      this.product.name
    }" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div class = right-bar2Content-right>
                    <div class="right-bar2Content-right_measureMent-box">
                          <center>  <h3>Measurement </h3> </center>

                      <div class="right-bar2Content-right_measureMent-box-measurement-tag">
                      <div class = "right-bar2Content-right_measureMent-box-measurement-tag-radio">  <input type=radio name= "product-size" id="small" value="13"> </div>
                      <label class = "right-bar2Content-right_measureMent-box-measurement-tag-size" for = "small">  <p class = "radio-txt"> Small : </p> <h4> 13</h4> </label> 
                      </div>

                      <div class="right-bar2Content-right_measureMent-box-measurement-tag">
                        <div class = "right-bar2Content-right_measureMent-box-measurement-tag-radio"><input type = radio name= "product-size" id="large"  value="20"> </div>
                        <label class = "right-bar2Content-right_measureMent-box-measurement-tag-size" for = "large">  <p class = "radio-txt" > Large : </p> <h4> 20</h4> </label> 
                        </div>
                        
                        <div class="right-bar2Content-right_measureMent-box-measurement-tag">
                        <div class = "right-bar2Content-right_measureMent-box-measurement-tag-radio"><input type = radio name= "product-size" id="extra-large" value="30"> </div>
                        <label class = "right-bar2Content-right_measureMent-box-measurement-tag-size" for = "extra-large">  <p class = "radio-txt" > Extra-Large : </p> <h4> 30</h4> </label> 
                      </div>
                    
                      <div class = "right-bar2Content-right_measureMent-box-qty">
                      <div class = "right-bar2Content-right_measureMent-box-qtyInner">
                      <h2>Quantity:</h2>

                       <select class = "product-qty" id = "">
                       ${console.log(this.product.qty)}
                            ${[...Array(this.product.countInStock).keys()].map(
                              (x) =>
                                this.product.qty === x + 1
                                  ? `<option selected value="${x + 1}">${
                                      x + 1
                                    }  </option>`
                                  : `<option value="${x + 1}"> ${
                                      x + 1
                                    } </option>`
                            )}
                    
                      </select>
                      <h4> Pcs </h4>
                       </div>
                       </div>                    </div>

                    <div class="right-bar2Content-right_description-box">
                      <article>Description-Tag</article>
                    </div>
              </div>
              
              </div>
              <div class="right-bar2Content-right_addButton">
                <a> <button class="addtocart-btn">ADD <i class="fas fa-cart-plus"></i></button> </a>
              </div>

                </div>
                </div>

              </main>

              <div class="main-area_related-content">
              
              ${
                this.product.related_items
                  ? ProductCards.getHTMLString(
                      this.product.related_items.products,
                      true
                    )
                  : ""
              }
              </div>

            </div>
          </div>
        </div>
      </div>
    </div> `;
  }

  async fetchProduct() {
    const herokuServer =
      "https://richies-rich1-commerce.herokuapp.com/api/products";
    const localServer = "http://localhost:5000/api/products";

    const allProducts = await get(herokuServer, localServer);

    const product = allProducts.find((product) => {
      return product.slug === this.slug;
    });

    this.product = product;
    Product = product;
  }

  async render() {
    this.getSlug();
    await this.fetchProduct();
    const display = this.display();

    return display;
  }
}

const productScreen = new ProductScreen();

export { productScreen, Product };
