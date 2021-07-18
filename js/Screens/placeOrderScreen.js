import { getCartItems, getPayment, getShippingInfo } from "../localStorage.js";
import { CheckoutSteps } from "../utlis.js";
import { header } from "./header.js";

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
  after_render() {},

  render() {
    const {
      TotalPrice,
      ItemPrices,
      ShippingPrice,
      orderItems,
      payment,
      shipping,
    } = convertCartToOrder();

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
              <h4>19 koki street, laggon, ibadan</h4>
            </li>
          </div>
          <div class="all-ordersInnerLeft_payment">
            <li class="all-ordersInnerLeft_paymentTop">
              <h2>Payment</h2>
            </li>
            <li class="all-ordersInnerLeft_paymentButtom">
              <h4>Payment Method : Paypal</h4>
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
                  
                    <div class="cart-boxInner_Productcard">
                         <div class="cart-boxInner_Productcard_left Productcard_inner">
                           <div class="cart-boxInner_Productcard_leftInner-img">
           
                               <img src="./MyStory11.jpg" alt="">
           
                           </div>
           
                           <div class="cart-boxInner_Productcard_leftInner">
                             <div class="cart-boxInner_Productcard_leftInner-top">
                               <a>Huani</a>
                             </div>
           
                             <div class="cart-boxInner_Productcard_leftInner-bottom">
                               <div class="cart-boxInner_Productcard_leftInner-bottom_qty">
                            
                       
                                 </select> 
                               </div>
           
                                  <div
                                 class="cart-boxInner_Productcard_leftInner-bottom_size"
                               >
                                 <a> Size:  30 (Large) </a>
           
                             <div>
                             <p>  Qty:5</p>
                             </div>
                               </div>
                             </div>
                           </div>
                         </div>
           
                         <div class="cart-boxInner_Productcard_right Productcard_inner">
                           <span class="cart-boxInner_Productcard_right_price">
                             <h3>&#8358 15000</h3>
                           </span>
                      
                         </div>
                       </div>
               
                   
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
                <div class="all-ordersInnerRightInner_productDetail_li_right"><h4>&#8358 2000</h4></div>
              </li>

              <li class="all-ordersInnerRightInner_productDetail_li"> 
                <div class="all-ordersInnerRightInner_productDetail_li_left"><h4>Shipping</h4></div>
                <div class="all-ordersInnerRightInner_productDetail_li_right"><h4>&#8358 2000</h4></div>
              </li>

              <li class="all-ordersInnerRightInner_productDetail_li"> 
                <div class="all-ordersInnerRightInner_productDetail_li_left"><h4>Tax</h4></div>
                <div class="all-ordersInnerRightInner_productDetail_li_right"><h4>Null</h4></div>
              </li>

            </div>

            <div class="all-ordersInnerRightInner_orderTotal">
              <li class="all-ordersInnerRightInner_orderTotal_li">
                <div class="all-ordersInnerRightInner_orderTotal_li_left"><h2>Order Total</h2></div>
                <div class="all-ordersInnerRightInner_orderTotal_li_right"> <h3> &#8358 100000</h3></div>
              </li>

            </div>
            <div class="all-ordersInnerRightInner_placeOrder">
              <div class="all-ordersInnerRightInner_placeOrder_btn">
                <button>Place Order</button>
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
