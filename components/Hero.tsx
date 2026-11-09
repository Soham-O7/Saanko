"use client";
import { ArrowRight } from "lucide-react";
import "./Hero.css";
export default function Hero() {
  return (
    <section className="saanko-hero">

      {/* HERO IMAGE */}
      <div className="hero-image">
        <img
          src="/hero-image.png"
          alt="Saanko traditional ethnic wear collection"
        />
      </div>

      {/* HERO PAPER PANEL */}
      <div className="hero-panel">
        <img
          src="/hero-svg-2.png"
          alt="svg"
          aria-hidden="true"
          className="hero-mobile"
        />
        {/* TEXT CONTENT */}
        <div className="hero-content">
          <h1>
            Tradition
            <br />
            in a New Light
          </h1>

          <div className="hero-divider">
            <span />
            <span className="hero-divider-arrow">››</span>
          </div>

          <p>
            At Saanko, we weave together heritage
            and contemporary style for everyday lives
            and special moments.
          </p>

          <a href="/brand-story" className="hero-link" aria-label="Discover our story">
            <span>DISCOVER OUR STORY</span>
            <ArrowRight size={19} strokeWidth={1.4} />
          </a>
        </div>

        {/* DECORATIVE ILLUSTRATION */}
        <div className="hero-illustration">
          <img
            src="/hero-svg.png"
            alt="svg"
            aria-hidden="true"
            className="hero-illustration-desktop"
          />
          <img
            src="/hero-svg-1.png"
            alt="svg"
            aria-hidden="true"
            className="hero-illustration-mobile"
          />
        </div>

      </div>
    </section>
  );
}