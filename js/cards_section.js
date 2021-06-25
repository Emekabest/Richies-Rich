import { get } from "./http.js";
// import { mainArea_main } from "./index.js";
import { ProductCards } from "./templateConstructor.js";

const cards_section = {
  async cardPlacement() {
    const allProducts = await get("http://localhost:5000/api/products");

    // const allProduct = allProducts();

    console.log(allProducts);

    const allProduct_demo = [];

    for (let i = 0; i < allProducts.length; i++) {
      const product = allProducts[i];
      const existProduct = allProduct_demo.find(
        (array) => array[0].category === product.category
      );

      if (!existProduct) {
        const array = [];

        for (let j = 0; j < allProducts.length; j++) {
          if (product.category === allProducts[j].category) {
            array.push(allProducts[j]);
          }
        }

        allProduct_demo.push(array);
      }
    }

    return allProduct_demo;
  },

  async render() {
    let cardHtml;

    const sections = await this.cardPlacement();
    // console.log(sections);

    for (let i = 0; i < sections.length; i++) {
      cardHtml += ProductCards.getHTMLString(sections[i]);

      // mainArea_main
      //   ? (mainArea_main.innerHTML += ProductCards.getHTMLString(sections[i]))
      //   : "";
    }

    return cardHtml;
  },
};

export default cards_section;
