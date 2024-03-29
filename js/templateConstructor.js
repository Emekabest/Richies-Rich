import { currency_sign, getDiscount } from "./app_functionalities.js";

class ProductCards {
  constructor() {
    this.categoryName = "";
  }

  static getHTMLString(products, relatedCard) {
    const getCardsHTMLString = () => {
      let cardsHTMLString = "";

      // Build cards into string => cardsHTMLString

      // products.forEach((p) => {
      //   console.log(p);
      // });

      for (let p = 0; p < 3; p++) {
        if (products[p]) {
          cardsHTMLString += ` 
          
            <div class="container-sales">
                <a id="/product/${
                  products[p].slug
                }"  style="display:block" class = "linK">
                    <div class="content-sales-img-wrapper">
                        <img
                            src="./image/${products[p].image}"
                            class="content-sales-img"
                            alt="${products[p].name}"
                        />
                    </div>
                    <div class="content-salesOption">
                        <div class="content-name">
                            <p>${products[p].name}</p>
                        </div>
                        <div class="content-price">
                           <span class = "content-price-discount"> ${currency_sign(
                             "naira"
                           )}  ${products[p].recent_price}</p></span>
                           <span class = "content-price-mainPrice">  ${currency_sign(
                             "naira"
                           )} ${getDiscount(
            products[p].recent_price,
            products[p].discount_price
          )}</span>
                        </div>
                    </div>
                </a>
            </div>
       
          `;
        }
      }

      products.forEach((product) => {
        this.categoryName = product.category;
      });

      return { cardName: this.categoryName, cardString: cardsHTMLString };
    };

    return `
            <div class="product-cards">
              <div class="container-sales-container">
                <div class="things">
                  <div class="sales-category">
                    <h5 class="sales-category-heading">${
                      !relatedCard
                        ? getCardsHTMLString().cardName
                        : "related product"
                    }</h5>
                    <p class="sales-category-view-more">
                    ${
                      !relatedCard
                        ? ` <a>
                        View more <i class="fa fa-angle-right" ></i
                      ></a>`
                        : ""
                    }
              
                    </p>
                  </div>
                  <div class="container-sales-boxes">${
                    getCardsHTMLString().cardString
                  }</div>
                </div>
              </div>
            </div>
        `;
  }
}

class BO_categoryProduct {
  static getCardsHTMLString(products) {
    let html;
    products.forEach((product) => {
      html += `
      <div class="Ccontainer">
        <a id="/product/${product.slug}" class="Ccontainer_inner linK">
          <div class="Ccontainer_inner_img">
            <img src="./image/${product.image}" alt="" />
          </div>
          <div class="Ccontainer_inner_Product-details">
            <div class="Ccontainer_inner_Product-details_name">
              <center>
                <h4>${product.name}</h4>
              </center>
            </div>
            <div class="Ccontainer_inner_Product-details_price">
              <center>
                <h5 class = "Ccontainer_inner_Product-details_price-recent">${
                  product.recent_price
                }</h5>
                <h5 class = "Ccontainer_inner_Product-details_price-main"> ${getDiscount(
                  product.recent_price,
                  product.discount_price
                )}</h5>
              </center>
            </div>
          </div>
        </a>
      </div>
      
      `;
    });

    return html;
  }
}

export { ProductCards, BO_categoryProduct };
