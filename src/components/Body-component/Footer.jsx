import React from "react";
import "./body-styles/footer.scss";

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
                <span>
                  <img src="" alt="" />
                  <b>123 Street, Lagos, Nigeria</b>
                </span>
                <span>
                  <img src="" alt="" />
                  <b>eshop@gmail.com</b>
                </span>
              </div>
        
          </section>

          <section>
            <div>
              <b> WE ACCEPT:</b>
              <span>
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
              </span>
            </div>

            <div>
              <b>SECURED BY:</b>
              <span>
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
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
