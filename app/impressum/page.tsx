import Link from "next/link";

export const metadata = {
  title: "Impressum | ads klar",
  description: "Impressum von ads klar.",
};

export default function ImpressumPage() {
  return (
    <main className="legal-page">
      <div className="legal-shell">
        <Link className="legal-back" href="/">
          ads klar
        </Link>

        <section className="legal-content">
          <p className="kicker">Impressum</p>
          <h1>Impressum</h1>

          <div className="legal-block">
            <h2>Angaben zum Anbieter</h2>
            <p>Alexander Kochman</p>
            <p>1070 Wien</p>
            <p>Österreich</p>
          </div>

          <div className="legal-block">
            <h2>Kontakt</h2>
            <p>
              E-Mail:{" "}
              <a href="mailto:office@adsklar.at">office@adsklar.at</a>
            </p>
            <p>
              Telefon: <a href="tel:+4366567221783">0665 672 217 83</a>
            </p>
          </div>

          <div className="legal-block">
            <h2>Verantwortlich für den Inhalt</h2>
            <p>Alexander Kochman, 1070 Wien</p>
          </div>
        </section>
      </div>
    </main>
  );
}
