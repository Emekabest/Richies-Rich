import { header } from "./header.js";

export const DeliveryScreen = {
  render() {
    return `
         <div class="container">
     
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
                                <h2 class="Return-container-Headertxth2">DELIVERY - Frequently Asked Questions (FAQS)</h2>
                            </div>

                            <div class="Return-container-contentTxtbox">
                                <div class="Return-container-contentTxtQ">
                                    <h4 class="Return-container-contentTxtQh4">Q.What delivery(shipping) options do i have?</h4>
                                    <div class="div">
                                        <i class=" fas fa-plus Return-container-contentTxtQFont"></i>
                                    </div>
                                </div>

                                <div class="Return-container-contentTxtboxAns">


                                    <ol class="Return-container-contentTxtboxAns-ul">

                                        <li  class="Return-container-contentTxtboxAns-li">
                                            All standard delivery(shipping) options are available.Please <span><a href="contact.html">Contact Us</a></span>
                                            to discuss your specific shipping needs.
                                        </li>

                                    </ol>

                                </div>
                                

                            </div>

                            <div class="Return-container-contentTxtbox">
                                <div class="Return-container-contentTxtQ">
                                    <h4 class="Return-container-contentTxtQh4">Q.Can you provide me with information on shipping cost?</h4>
                                    <div class="div">
                                        <i class=" fas fa-plus Return-container-contentTxtQFont"></i>
                                    </div>
                                </div>

                                <div class="Return-container-contentTxtboxAns">

                                    <ol class="Return-container-contentTxtboxAns-ul">

                                        <li  class="Return-container-contentTxtboxAns-li">
                                            Shipping cost will remain similar for a majority of orders.To discuss specific shiiping options
                                            and cost for your order, please <span><a href="contact.html">Contact Us</a></span>.
                                        </li>
                                      
                                    </ol>

                                </div>
                                

                            </div>



                          

                           


                            <div class="Return-container-returnPolicy">
                                <div class="Return-container-returnPolicy-headerTxt">
                                    <h2>
                                        Delivery Policy
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

                                <div class="Return-container-contentTxtboxAns">

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
                        
                    </div>

              </main>
            </div>

    
          </div>
        </div>
      </div>
    </div>
        
        `;
  },
};
