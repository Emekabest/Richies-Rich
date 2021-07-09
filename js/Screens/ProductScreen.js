import { currency_sign, getDiscount } from "../app_functionalities.js";
import { get } from "../http.js";
import { parseRequest_url } from "../utlis.js";
import { header } from "./header.js";
// import { mainArea_main, mainAreaRelatedcontent_div } from "./mainIndex.js";

let Product;

class ProductScreen {
  constructor() {
    this.slug = "";
    this.product = { nam: "joe" };
  }

  getSlug() {
    const request = parseRequest_url();
    const slug = request.slug;
    this.slug = slug;
  }

  display() {
    console.log(this.product);

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
                      MeasureMent Box
                    </div>

                    <div class="right-barContent_description-box">
                      <article>Description-Tag</article>
                    </div>

                    <div class="right-barContent_addButton">
                      <a> <button class="btn">ADD <i class="fas fa-cart-plus"></i></button> </a>
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
                      MeasureMent Box
                    </div>

                    <div class="right-bar2Content-right_description-box">
                      <article>Description-Tag</article>
                    </div>
              </div>
              
              </div>
              <div class="right-bar2Content-right_addButton">
                <a> <button class="btn">ADD <i class="fas fa-cart-plus"></i></button> </a>
              </div>

                </div>
                </div>

              </main>

              <div class="main-area_related-content"> </div>

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
    console.log(this.product);
    Product = product;
  }

  async render() {
    this.getSlug();
    await this.fetchProduct();
    const display = this.display();

    // this.product.related_items.forEach((related_itemsCard) => {
    //   mainAreaRelatedcontent_div.innerHTML =
    //     ProductCards.getHTMLString(related_itemsCard);
    // });

    return display;
  }
}

const productScreen = new ProductScreen();

export { productScreen, Product };
