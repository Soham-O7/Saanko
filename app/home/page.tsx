import Hero from "@/components/Hero";
import Maincard from "@/components/Maincard";

export default function Home() {
  return (
    <div className="home-grid">
      <Hero />

      <section className="main-section">
        <Maincard
          type={1}
          Category="MEN"
          href="/men"
          src="/men_image.png"
          tags={[
            { label: "Shirts", href: "/men/shirts" },
            { label: "Kurtas", href: "/men/kurtas" },
          ]}
          svg="/men_svg.png"
          svgpos="right"
        />

        <Maincard
          type={2}
          Category="WOMEN"
          href="/women"
          src="/women_image.png"
          tags={[
            { label: "Dresses & Coord Sets", href: "/women/dresses_&_coordsets" },
            { label: "Sarees", href: "/women/sarees" },
          ]}
          svg="/women_svg.png"
          svgpos="0px"
        />

        <Maincard
          type={3}
          Category="KIDS"
          href="/kids"
          src="/kids_image.png"
          tags={[
            { label: "Boys", href: "/kids/boys" },
            { label: "Girls", href: "/kids/girls" },
          ]}
          svg="/kids_svg.png"
          svgpos="right"
        />

        <Maincard
          type={4}
          Category="THE FAMILY EDIT"
          href="/family-edit"
          src="/family_image.png"
          tags={[
            { label: "Couple Sets", href: "/family-edit/couple_sets" },
            { label: "Family Sets", href: "/family-edit/family_sets" },
          ]}
          svg="/family_svg.png"
          svgpos="right"
        />
      </section>
    </div>
  );
}