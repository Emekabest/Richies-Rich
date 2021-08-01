import { createOrder } from "../api.js";
import {
  cleanCart,
  getCartItems,
  getPayment,
  getShippingInfo,
} from "../localStorage.js";
import { checkAwaitTimeout } from "../routerExecution.js";
import { CheckoutSteps } from "../utlis.js";
import { header } from "./header.js";

const Interval = (FuncTion) => {
  const TimeOut = setInterval(() => {
    console.log(checkAwaitTimeout);
    if (checkAwaitTimeout) {
      FuncTion();
      clearInterval(TimeOut);
    }
  }, 300);
};

const convertCartToOrder = () => {
  const orderItems = getCartItems();
  if (orderItems.length === 0) {
    document.location.hash = "/cart";
  }

  const shipping = getShippingInfo();

  if (!shipping.address) {
    document.location.hash = "/shipping";
  }

  const payment = getPayment();

  if (!payment.payment_method) {
    document.location.hash = "/payment";
  }

  const ItemPrices = orderItems.reduce((a, c) => a + c.main_price * c.qty, 0);
  const ShippingPrice = ItemPrices < 8000 ? 1000 : 0;

  // Tax is Zero for some season depending on the agreement
  const Tax = 0;

  const TotalPrice = ItemPrices + ShippingPrice;

  return {
    TotalPrice,
    ItemPrices,
    ShippingPrice,
    orderItems,
    payment,
    shipping,
  };
};

export const PlaceOrderScreen = {
  after_render() {
    document
      .querySelector("#place-order-btn")
      .addEventListener("click", async () => {
        const order = convertCartToOrder();
        const data = await createOrder(order);
        console.log(order);

        if (data.error) {
          console.log("cool");
          alert(data.error);
        } else {
          // cleanCart();
          console.log(data);
          // document.location.hash = `/order/${data.order.id}`;
        }
      });
  },

  render() {
    const {
      TotalPrice,
      ItemPrices,
      ShippingPrice,
      orderItems,
      payment,
      shipping,
    } = convertCartToOrder();

    Interval(this.after_render);

    return `  <div class="container">
     
          ${header.renderSmallView()}

      <div class="right-container">
        <div class="right-container_content-container">
          <div class="content">
            <!--- Header Section below  -->

            ${header.renderLargeView()}
          
            <div class="productMain-content">
    ${CheckoutSteps.render({
      step1: true,
      step2: true,
      step3: true,
      step4: true,
    })}

  <div class="all-orders">
      <div class="all-ordersInner">
        <div class="all-ordersInnerLeft">
          <div class="all-ordersInnerLeft_shipping">
            <li class="all-ordersInnerLeft_shippingTop"><h2>Shipping</h2></li>
            <li class="all-ordersInnerLeft_shippingButtom">
              <h4>${shipping.address}</h4>
            </li>
          </div>
          <div class="all-ordersInnerLeft_payment">
            <li class="all-ordersInnerLeft_paymentTop">
              <h2>Payment</h2>
            </li>
            <li class="all-ordersInnerLeft_paymentButtom">
              <h4>Payment Method : ${payment.payment_method}</h4>
            </li>
          </div>

          <div class="all-ordersInnerLeft_shopping-cart">
            <div class="all-ordersInnerLeft_shopping-cart_heading">
              <div class="all-ordersInnerLeft_shopping-cart_headingInner">
                <div
                  class="all-ordersInnerLeft_shopping-cart_headingInner-left"
                >
                  <h2>Shopping Cart</h2>
                </div>
                <div
                  class="all-ordersInnerLeft_shopping-cart_headingInner-right"
                >
                  <h4>Price</h4>
                </div>
              </div>
            </div>

            <div class="all-ordersInnerLeft_shopping-cart_products">

              <div class="cartContainer"> 

                <div class="cart-box">
                  <div class="cart-boxInner">
                  ${orderItems
                    .map((item) => {
                      return `   <div class="cart-boxInner_Productcard">
                         <div class="cart-boxInner_Productcard_left Productcard_inner">
                           <div class="cart-boxInner_Productcard_leftInner-img">
           
                               <img src="./image/${item.image}" alt="">
           
                           </div>
           
                           <div class="cart-boxInner_Productcard_leftInner">
                             <div class="cart-boxInner_Productcard_leftInner-top">
                               <a class="placeOrder-product-name">${
                                 item.name
                               }</a>
                             </div>
           
                             <div class="cart-boxInner_Productcard_leftInner-bottom">
                               <div class="cart-boxInner_Productcard_leftInner-bottom_qty">
                            
                       
                                 </select> 
                               </div>
           
                                  <div
                                 class="cart-boxInner_Productcard_leftInner-bottom_size"
                               >
                                 <a> Size:  ${item.size.split("-")[0]} (${
                        item.size.split("-")[1] === "L"
                          ? "Large"
                          : item.size.split("-")[1] === "El"
                          ? "Extra-Large"
                          : item.size.split("-")[1] === "S"
                          ? "Small"
                          : ""
                      }) </a>
           
                             <div>
                             <p>  Qty:${item.qty}</p>
                             </div>
                               </div>
                             </div>
                           </div>
                         </div>
           
                         <div class="cart-boxInner_Productcard_right Productcard_inner">
                           <span class="cart-boxInner_Productcard_right_price">
                             <h3>&#8358 ${item.main_price}</h3>
                           </span>
                      
                         </div>
                       </div>`;
                    })
                    .join("\n")}
                      
                </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div class="all-ordersInnerRight">
          <div class="all-ordersInnerRightInner">
            <div class="all-ordersInnerRightInner_heading">
              <h2>Order Summary</h2>
            </div>
            <div class="all-ordersInnerRightInner_productDetails">

              <li class="all-ordersInnerRightInner_productDetail_li"> 
                <div class="all-ordersInnerRightInner_productDetail_li_left"><h4>Items</h4></div>
                <div class="all-ordersInnerRightInner_productDetail_li_right"><h4>&#8358 ${ItemPrices}</h4></div>
              </li>

              <li class="all-ordersInnerRightInner_productDetail_li"> 
                <div class="all-ordersInnerRightInner_productDetail_li_left"><h4>Shipping</h4></div>
                <div class="all-ordersInnerRightInner_productDetail_li_right"><h4>&#8358 ${ShippingPrice}</h4></div>
              </li>

              <li class="all-ordersInnerRightInner_productDetail_li"> 
                <div class="all-ordersInnerRightInner_productDetail_li_left"><h4>Tax</h4></div>
                <div class="all-ordersInnerRightInner_productDetail_li_right"><h4>Null</h4></div>
              </li>

            </div>

            <div class="all-ordersInnerRightInner_orderTotal">
              <li class="all-ordersInnerRightInner_orderTotal_li">
                <div class="all-ordersInnerRightInner_orderTotal_li_left"><h2>Order Total</h2></div>
                <div class="all-ordersInnerRightInner_orderTotal_li_right"> <h3> &#8358 ${TotalPrice}</h3></div>
              </li>

            </div>
            <div class="all-ordersInnerRightInner_placeOrder">
              <div class="all-ordersInnerRightInner_placeOrder_btn">
                <button id="place-order-btn">Place Order</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

            </div>
          </div>
        </div>
      </div>
    </div> `;
  },
};
