import { ArrowRight } from "lucide-react";
import "./Maincard.css";

type MaincardTag = {
  label: string;
  href: string;
};

type MaincardProps = {
  type: number | string;
  Category: string;
  href: string;
  src: string;
  tags: MaincardTag[];
  svg: string;
  svgpos?: string;
};

export default function Maincard({
  type,
  Category,
  href,
  src,
  tags,
  svg,
  svgpos = "top right",
}: MaincardProps) {
  return (
    <div className="maincard-container">
      <article className="maincard" data-type={type}>
        <a
          href={href}
          className="maincard-primary-link"
          aria-label={`Explore ${Category}`}
        />
        <div className="maincard-image">
          <img src={src} alt={`${Category} collection`} />
        </div>
        <div className="maincard-info">
          <h2 className="maincard-category">
            {Category}
          </h2>
          <div className="maincard-tags">
            {tags.map((tag) => (
              <a
                key={tag.href}
                href={tag.href}
                className="maincard-tag"
              >
                {tag.label}
              </a>
            ))}
            <ArrowRight className="maincard-arrow" size={22} strokeWidth={1.4} />
          </div>
          <div className="maincard-artwork">
            <img
              src={svg}
              alt="svg"
              aria-hidden="true"
              style={{ objectPosition: svgpos }}
            />
          </div>
        </div>
      </article>
    </div>
  );
}