import "./contact.css";
import { ArrowRight, MapPin } from "lucide-react";
export default function ContactPage() {
  return (
    <main className="contact-page">

      {/* LEFT: IMAGE WITH TORN EDGE */}
      <div className="contact-image">
        <img
          src="/hero-image.png"
          alt="Saanko traditional clothing collection"
        />
      </div>

      {/* RIGHT: PAPER CONTENT */}
      <div className="contact-content">

        {/* UPPER ROW */}
        <section className="contact-intro">
          <div className="contact-intro-text">
            <h1>SAANKO HERITAGE<br />COLLECTIONS</h1>

            <p>
              Embark on a journey through time and technique.
              Each piece in our collection is a testament to the
              master craftspeople who weave heritage into the
              very fabric of contemporary style. We welcome you
              to experience the legacy.
            </p>
          </div>

          <div className="contact-intro-art">
            <img src="/hero-svg.png" alt="" aria-hidden="true" />
          </div>

          <div className="contact-divider">
            <span>»</span>
            <div />
            <img src="/divider-svg.png" alt="" aria-hidden="true" />
          </div>
        </section>

        {/* LOWER ROW: THREE COLUMNS */}
        <section className="contact-details">

          {/* COLUMN 1 */}
          <div className="contact-column contact-enquiry">
            <h2>Interested in Acquiring<br />a Piece?</h2>

            <p>
              Have something special in mind?
              Get in touch with us and let us help
              you find the perfect piece.
            </p>
            <div>
              <h3>OUR STORES</h3>
              <p>Find our boutique on Google Maps<MapPin size={17} strokeWidth={1.4} />.</p>
              <a href="https://maps.app.goo.gl/Fku2YtFsuEFvWP3w9?g_st=ac"><span>Store Locator</span><ArrowRight size={19} strokeWidth={1.4} /></a>
            </div>
          </div>

          {/* COLUMN 2 */}
          <div className="contact-column contact-orders">
            <h2>Tradition Meets<br />Contemporary</h2>

            <p>
              Click below to enquire about an order
              or discuss a custom request with us.
            </p>

            <a
              className="whatsapp-button"
              href="https://wa.me/917407659335"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="whatsapp-icon">
                <svg xmlns="http://www.w3.org/2000/svg" height="5cqw" width="5cqw" viewBox="0 0 448 512"><path fill="rgb(37, 211, 102)" d="M380.9 97.1c-41.9-42-97.7-65.1-157-65.1-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480 117.7 449.1c32.4 17.7 68.9 27 106.1 27l.1 0c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3 18.6-68.1-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1s56.2 81.2 56.1 130.5c0 101.8-84.9 184.6-186.6 184.6zM325.1 300.5c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8s-14.3 18-17.6 21.8c-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7s-12.5-30.1-17.1-41.2c-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2s-9.7 1.4-14.8 6.9c-5.1 5.6-19.4 19-19.4 46.3s19.9 53.7 22.6 57.4c2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4s4.6-24.1 3.2-26.4c-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
              </span>

              <span className="whatsapp-label">
                REQUEST ORDERS<br />ON WHATSAPP
              </span>
            </a>
          </div>

          {/* COLUMN 3 */}
          <div className="contact-column contact-information">

            <div>
              <h3>DIRECT CONTACTS</h3>
              <p>
                Email: <a href="mailto:inquiries@saanko.com">inquiries@saanko.com</a><br />
                Phone: <a href="tel:+917407659335">+91 7407659335</a>
              </p>
            </div>

            <div>
              <h3>VISIT US</h3>
              <p>
                Saanko Atelier &amp; Gallery<br />
                Shahid Khudiram Bose, Csi para, Rd, Sarani, Kalindi Housing Estate, Kolkata, West Bengal 700048
              </p>
            </div>
            

          </div>
        </section>
      </div>
    </main>
  );
}