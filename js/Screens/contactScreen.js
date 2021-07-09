import { header } from "./header.js";

export const contactScreen = {
  render() {
    return `
     <div class="container">
     
          ${header.renderSmallView()}

      <div class="right-container">
        <div class="content-container">
          <div class="content">

          ${header.renderLargeView()}

            <div class="productMain-content">
            <div class="contact-container">
              <div class="contact-box">
                <div class="contact-box-msg">
                  <h1 class="contact-box-msg-h1">Get in touch</h1>

                  <p class="contact-box-msg-p">
                    Want to get in touch? We'd love to hear from you.Here is how
                    you can reach us.
                  </p>
                </div>
              </div>

              <div class="contact-guide">
                <div class="contact-box-guide-box">
                  <div class="contact-box-guide-call">
                    <div class="contact-box-guide-call-box">
                      <i class="fas fa-phone phone"></i>

                      <h3 class="contact-box-guide-call-h3">Talk to sales</h3>

                      <p class="contact-box-guide-call-p">
                        Intersted in talking? Just pick up the phone to chat
                        with a member of our sales team
                      </p>

                      <a href="" class="contact-box-guide-call-a">
                        +234 813 890 2301
                      </a>
                    </div>
                  </div>

                  <div class="contact-box-guide-call">
                    <div class="contact-box-guide-call-box">
                      <i class="far fa-envelope phone"></i>

                      <h3 class="contact-box-guide-call-h3">
                        Contact Customer Support
                      </h3>

                      <p class="contact-box-guide-call-p">
                        Sometimes you need a little help from a friend or a
                        Hubspot support rep. Don't worry.... we're here for you
                      </p>

                      <a href="">
                        <button class="contact-box-guide-call-a-1">
                          Contact Support
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`;
  },
};
