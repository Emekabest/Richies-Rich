import { getCartItems, setCartItems } from "../localStorage.js";
import { parseRequest_url } from "../utlis.js";
import { get } from "../http.js";
import { getDiscount } from "../app_functionalities.js";

const addToCart = (item, forceUpdate = false) => {
  let cartItems = getCartItems();
  console.log(item);
  // item.getDiscount();

  const exitItem = cartItems.find((x) => x.slug === item.slug);

  if (exitItem) {
    cartItems = cartItems.map((x) => (x.slug === exitItem.slug ? item : x));
  } else {
    cartItems = [...cartItems, item];
  }

  setCartItems(cartItems);
};

export const removeFromCart = async (slug) => {
  console.log(slug);
  const filter = getCartItems().filter((x) => x.slug !== slug);

  setCartItems(filter);

  console.log(getCartItems());

  if (slug === parseRequest_url().slug) {
    document.location.hash = "/carts/";
    console.log("true");
  } else {
    document.location.hash = `/carts/${parseRequest_url().slug}`;
    location.reload();
  }
};

export const cartScreen = {
  csAfter_render() {},

  async render() {
    const allProducts = await get("http://localhost:5000/api/products");

    const request = parseRequest_url();

    const cartItemsArry = getCartItems();

    if (request.slug) {
      const product = allProducts.find((x) => x.slug === request.slug);

      addToCart({
        slug: product.slug,
        name: product.name,
        image: product.image,
        discount_price: product.discount_price,
        recent_price: product.recent_price,
        main_price: getDiscount(product.recent_price, product.discount_price),
        countInStock: product.countInStock ? product.countInStock : 1,
        qty: product.qty ? product.qty : 1,
      });
    }

    const getCartHtmlStrings = () => {
      let mainCartItemsString = "";
      cartItemsArry.map((cartItem) => {
        mainCartItemsString += `
         <div class="cart-boxInner_Productcard">
              <div class="cart-boxInner_Productcard_left Productcard_inner">
                <div class="cart-boxInner_Productcard_leftInner-img">

                    <img src="./image/${cartItem.image}" alt="">

                </div>

                <div class="cart-boxInner_Productcard_leftInner">
                  <div class="cart-boxInner_Productcard_leftInner-top">
                    <a id="/product/${cartItem.slug}" class="linK">${
          cartItem.name
        }</a>
                  </div>

                  <div class="cart-boxInner_Productcard_leftInner-bottom">
                    <div class="cart-boxInner_Productcard_leftInner-bottom_qty">
                    <!---  <a>Qty</a> <select name="" id="${cartItem.slug}">
                      ${[...Array(cartItem.countInStock).keys()].map((x) =>
                        cartItem.qty === x + 1
                          ? `<option selected value = "${x + 1}"> ${
                              x + 1
                            }  </option>`
                          : `
                          <option value = "${x + 1}"> ${x + 1}  </option>
                          `
                      )}
                      )} -->
            
                      </select> 
                    </div>

                       <div
                      class="cart-boxInner_Productcard_leftInner-bottom_size"
                    >
                      <a>Size: 178 X 190  </a> 
                    </div>
                  </div>
                </div>
              </div>

              <div class="cart-boxInner_Productcard_right Productcard_inner">
                <span class="cart-boxInner_Productcard_right_price">
                  <h3>&#8358 ${cartItem.main_price}</h3>
                </span>
                
                <div class="cart-boxInner_Productcard_right_delete" id = "${
                  cartItem.slug
                }">
                    <i class="fas fa-trash-alt"></i>
                </div>
              </div>
            </div>
        `;
      });

      return mainCartItemsString;
    };
    console.log("cartScreen");

    return `
    <div class="container">
      <nav class="nav">
        <div class="nav-close-btn">
          <i class="far fa-times-circle"></i>
        </div>

     <ul class="navul-content">
          <li class="navli-content"><a class="linK" id="/">PRODUCTS</a></li>
          <li class="navli-content"><a >BOULDERS & SHRUGS</a></li>
          <li class="navli-content"><a >SHIRTS</a></li>
          <li class="navli-content"><a >KIDS</a></li>
          <li class="navli-content"><a >MATCHY-MATCHY</a></li>
          <li><a class="linK" id="/carts"> CARTS</a></li>
          <li class="navli-content"><a >EXCLUSIVE OFFER</a></li>
          <li><a class="linK" id="/contact">CONTACT</a></li>
        </ul>
      </nav>

      <div class="right-Container">
        <div class="content-container">
          <div class="content">


           
            <header class="content-headerbox">
              <div class="content-headerbox-productName">
                <div class="nav-open-btn">
                
                  <i class="fas fa-bars"></i>
                </div>

                <div class="content-headerbox-productName_name">
                  <span>
                    <h1 class=""><a id="/" href = "/#/" class="linK">RICHY'SRICH</a></h1>
                  </span>
                </div>
              </div>

              <div class="content-headerbox-right">
                <div class="content-headerbox-right_menu-list">
                 <ul>
                    <li><a id="/" href = "javascript:void(0)" class="linK">PRODUCTS</a></li>
                    <li><a id="" href = "javascript:void(0)"   class="linK" >BOULDERS & SHURGS</a></li>
                    <li><a id=""  href = "javascript:void(0)"  class="linK">SHIRTS</a></li>
                    <li><a id=""  href = "javascript:void(0)"  class="linK">KIDS</a></li>
                    <li><a id="" href = "javascript:void(0)"   class="linK">MATCHY-MATCHY</a></li>
                    <li><a id="/carts"  href = "/carts"  class="linK">CARTS</a></li>
                    <li><a id=""  href = "javascript:void(0)"  class="linK">EXCLUSIVE OFFER</a></li>
                    <li><a id="/contact"  href = "/contact"  class="linK">CONTACT</a></li>

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

            <!-- Main content goes here  -->

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

${
  cartItemsArry.length >= 1
    ? `  <div class="cartContainer">
        <div class="cart-box">
          <div class="productMain-content_heading">
            <div><h2>Shopping Cart</h2></div>
            <div><h4>Price</h4></div>
          </div>
          <div class="cart-boxInner">
    ${getCartHtmlStrings()}
          </div>
        </div>
        <div class = "checkout-main">
        <div class="checkout-box">
          <section class="checkout-box_allproduct_details">
 
            <h3>Subtotal (${cartItemsArry.reduce((a, c) => a + c.qty, 0)} ${
        cartItemsArry.length <= 1 ? `item` : `items`
      }):&#8358 ${cartItemsArry.reduce((a, c) => a + c.main_price, 0)}</h3>

          </section>
          <section class="checkout-box_btn">
            <a href="#"><button>Checkout</button> </a>
          </section>
        </div>
      </div> `
    : `<div class = "productMain-content-empty"> 
    
      <div class = "productMain-content-emptyInner">
     <i class="fab fa-wpexplorer"></i>
       <h1>Cart is empty</h1>
       <a class="linK" id="/">go shopping </a>
      </div>
      </div>`
}
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
    
    `;
  },
};
