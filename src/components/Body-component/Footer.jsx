import React from "react";
import "./body-styles/footer.scss";
import Mastercard from "./img/mastercard.png";
import Secured from "./img/secured.svg";
import Secured2 from "./img/secured2.svg";
import Secured3 from "./img/ssl.svg";

export function Footer() {
  return (
    <>
      <footer>
        <section className="touch">
          {/* Touch Section */}
          <section className="get">
            <div>
              <h1>GET IN TOUCH</h1>
              <em>
                No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita
                et et dolor sed dolor. Rebum tempor no vero est magna amet no
              </em>
            </div>

            <div>
              <b>🏠 123 Street, Lagos, Nigeria</b>

              <b> 📩: eshop@gmail.com</b>
            </div>
          </section>

          <section className="payment">
            <div className="accept">
              <b> WE ACCEPT:</b>
              <span>
                <img src={Mastercard} alt="payment methods for E-shop " />
              </span>
            </div>

            <div className="secured">
              <b>SECURED BY:</b>
              <span>
                <img src={Secured} alt="secured packages for E-shop" />
                <img src={Secured2} alt="secured packages for E-shop" />
                <img src={Secured3} alt="secured packages for E-shop" />
              </span>
            </div>
          </section>
        </section>

        <section className="copyRight">
          <p>&copy; 2024 E-Shop. All rights reserved.</p>
        </section>
      </footer>
    </>
  );
}
