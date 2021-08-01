import { header } from "./header.js";

const OrdersPage = {
  render() {
    return `  <div class="container">
     
          ${header.renderSmallView()}

      <div class="right-container">
        <div class="right-container_content-container">
          <div class="content">
            <!--- Header Section below  -->

            ${header.renderLargeView()}
          
            <div class="productMain-content">
              <main class="main-area">
  
                    <div class="Return-container">

                        <div class="Return-container-box">

                            <div class="Return-container-Headertxt">
                                <h2 class="Return-container-Headertxth2">ORDERS - Frequently Asked Questions (FAQS)</h2>
                            </div>

                            <div class="Return-container-contentTxtbox">
                                <div class="Return-container-contentTxtQ">
                                    <h4 class="Return-container-contentTxtQh4">Q.How can i place an order?</h4>
                                    <div class="div">
                                        <i class=" fas fa-plus Return-container-contentTxtQFont"></i>
                                    </div>
                                </div>

                                <div class="Return-container-contentTxtboxAns">


                                    <ol class="Return-container-contentTxtboxAns-ul">

                                        <li  class="Return-container-contentTxtboxAns-li">
                                            Go to 'Cart' and select the item(s) you want to return.
                                        </li>

                                    </ol>

                                </div>
                                

                            </div>

                            <div class="Return-container-contentTxtbox">
                                <div class="Return-container-contentTxtQ">
                                    <h4 class="Return-container-contentTxtQh4">Q.How long will it take for my order to dispatched once the order is received?</h4>
                                    <div class="div">
                                        <i class=" fas fa-plus Return-container-contentTxtQFont"></i>
                                    </div>
                                </div>

                                <div class="Return-container-contentTxtboxAns">

                                    <ol class="Return-container-contentTxtboxAns-ul">

                                        <li  class="Return-container-contentTxtboxAns-li">
                                            Orders will be dispatched/shipped within 3-5 working days
                                        </li>
                                      
                                    </ol>

                                </div>
                                

                            </div>

                            <div class="Return-container-contentTxtbox">
                                <div class="Return-container-contentTxtQ">
                                    <h4 class="Return-container-contentTxtQh4">Q.Who is responsible for content activation issues?</h4>
                                    <div class="div">
                                        <i class=" fas fa-plus Return-container-contentTxtQFont"></i>
                                    </div>
                                </div>

                                <div class="Return-container-contentTxtboxAns">


                                    <ol class="Return-container-contentTxtboxAns-ul">
                                        <li  class="Return-container-contentTxtboxAns-li">
                                            All sales of online resources will continue to be handled by Richie'sRich sales team.
                                        </li>
                                    
                                    </ol>

                                </div>
                                

                            </div>

                            <div class="Return-container-contentTxtbox">
                                <div class="Return-container-contentTxtQ">
                                    <h4 class="Return-container-contentTxtQh4">Q.Can orders be delivered before payment?</h4>
                                    <div class="div">
                                        <i class=" fas fa-plus Return-container-contentTxtQFont"></i>
                                    </div>
                                </div>

                                <div class="Return-container-contentTxtboxAns">


                                    <ol class="Return-container-contentTxtboxAns-ul">
                                        <li  class="Return-container-contentTxtboxAns-li">
                                            No.All orders are paid for before delivery.
                                        </li>
                                    
                                    </ol>

                                </div>
                                

                            </div>

                            <div class="Return-container-contentTxtbox">
                                <div class="Return-container-contentTxtQ">
                                    <h4 class="Return-container-contentTxtQh4">Q.What payment options will be available?</h1>
                                        <div class="div">
                                            <i class=" fas fa-plus Return-container-contentTxtQFont"></i>
                                        </div>
                                </div>

                                <div class="Return-container-contentTxtboxAns">


                                    <ol class="Return-container-contentTxtboxAns-ul">
                                        <li  class="Return-container-contentTxtboxAns-li">
                                            Payment are accepted via credit card, electronic fund transfer.For queries concerning
                                            your payment options, please contact a <span><a href="contact.html">'Customer Care Representative'</a></span>.
                                        </li>
                                    
                                    </ol>

                                </div>
                                

                            </div>

                            <div class="Return-container-contentTxtbox">
                                <div class="Return-container-contentTxtQ">
                                    <h4 class="Return-container-contentTxtQh4">Q.Which credit cards are accepted?</h4>
                                    <div class="div">
                                        <i class=" fas fa-plus Return-container-contentTxtQFont"></i>
                                    </div>
                                </div>

                                <div class="Return-container-contentTxtboxAns">


                                    <ol class="Return-container-contentTxtboxAns-ul">
                                        <li  class="Return-container-contentTxtboxAns-li">
                                            The following cards are accepted: VISA, MasterCard, Verve.
                                        </li>
                                    
                                    </ol>

                                </div>
                                

                            </div>

                           


                            <div class="Return-container-returnPolicy">
                                <div class="Return-container-returnPolicy-headerTxt">
                                    <h2>
                                        Order Policy
                                    </h2>
                                </div>
                            </div>

                            <div class="Return-container-contentTxtbox">
                                <div class="Return-container-contentTxtQ">
                                    <h4 class="Return-container-contentTxtQh4">Terms & Condition</h4>
                                    <div class="div">
                                        <i class=" fas fa-plus Return-container-contentTxtQFont"></i>
                                    </div>
                                </div>

                                <di v class="Return-container-contentTxtboxAns">

                                    <h4 class="Return-container-contentTxtboxAns-h4">
                                        In order to return any product sold through the Website, You are required to comply with the below 
                                        mention conditions:
                                    </h4>

                                    <ol class="Return-container-contentTxtboxAns-ul">

                                        <li  class="Return-container-contentTxtboxAns-li contentTxtboxAns-liEdit ">
                                            Please note that the product might look different from the ones you see on the website.
                                            The return has to be in complaince with the return policy associated with teh product.
                                        </li>

                                        <li class="Return-container-contentTxtboxAns-li contentTxtboxAns-liEdit">
                                            Richie'sRich.Ltd of the reciept of a damaged or defective product or if the product is 
                                            significantly different from what was purchased or the package delivered is missing ones
                                            or two products, within 48 hours of reciept of the order.
                                        </li>

                                        <li class="Return-container-contentTxtboxAns-li contentTxtboxAns-liEdit">
                                            Products should return unused, in their original packaging or boxes along with the original invoice.
                                            If any product is returned without these mentioned essentials, the product will not be accepted
                                            and willbe sent back to you.
                                        </li>

                                        <li class="Return-container-contentTxtboxAns-li contentTxtboxAns-liEdit">
                                            The return packages should be strongly and adequately packaged so that there is no damage of 
                                            product during transit.If the product are used, damaged, altered, the return won't be possessed
                                            and the items willbe sent back to you.Please do not accept product in damaged or altered condition.
                                        </li>

                                        <li class="Return-container-contentTxtboxAns-li contentTxtboxAns-liEdit">
                                            The return products are subject to verification and quality checks by Richie'sRich quality
                                            assurance team in other to determine the legitimacy of the complaint or return.
                                        </li>

                                        <li class="Return-container-contentTxtboxAns-li contentTxtboxAns-liEdit">
                                        The final decision whether a returned item will be approved or rejected lies solely and completely
                                        with Richie'sRich.Ltd quality assurance team. 
                                        </li>

                                    </ol>

                                </div>
                                

                            </div>


                        </div>
                        

              </main>
            </div>

    
          </div>
        </div>
      </div>
    </div> `;
  },
};

export default OrdersPage;
