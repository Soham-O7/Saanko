
import "./Footer.css";
import { ArrowRight } from "lucide-react";

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/saanko_traditions?exln=MXJjNHR6eTM3dzBrYw==",
    src: "/instagram.svg",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/saanko.traditions/",
    src: "/facebook.svg",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/919830881931?text=Hi%20Saanko,%20I%20would%20like%20to%20place%20an%20order%20or%20know%20more%20about%20your%20collection.",
    src: "/whatsapp.svg",
  },
  {
    name: "Threads",
    href: "https://www.threads.com/@saanko_traditions",
    src: "/threads.svg",
  },
];

export default function Footer() {
  return (
    <footer className="saanko-footer">

      {/* COLUMN 1 — DECORATIVE ARTWORK */}
      <div className="footer-artwork">
        <img
          src="/footer-bridge.png"
          alt=""
          aria-hidden="true"
        />
      </div>

      {/* COLUMN 2 — SOCIAL MEDIA */}
      <div className="footer-social">
        <div className="footer-social-heading">
          <p>
            Check out our social media for the latest
            updates and collections 
          </p>
          <ArrowRight
            size={19}
            strokeWidth={1.4}
            aria-hidden="true"
          />
          <div className="footer-social-links">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
              >
                <img src={social.src} alt="" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* COLUMN 3 — BRAND PHILOSOPHY */}
      <div className="footer-philosophy">
        <h2>Rooted in heritage. Made for today.</h2>

        <p>
          We celebrate the artistry of tradition while
          embracing the spirit of modern living.
        </p>

        <span className="footer-tagline">
          THE BRIDGE BETWEEN TRADITION AND MODERNITY
        </span>
      </div>

      {/* BOTTOM COPYRIGHT */}
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} SAANKO. ALL RIGHTS RESERVED.</span>
        <span>CRAFTED WITH A SENSE OF HERITAGE.</span>
      </div>

    </footer>
  );
}
