import Link from "next/link";

export const metadata = {
  title: "Datenschutz | ads klar",
  description: "Datenschutzerklärung von ads klar.",
};

export default function DatenschutzPage() {
  return (
    <main className="legal-page">
      <div className="legal-shell">
        <Link className="legal-back" href="/">
          ads klar
        </Link>

        <section className="legal-content">
          <p className="kicker">Datenschutz</p>
          <h1>Datenschutzerklärung</h1>

          <div className="legal-block">
            <h2>Verantwortlicher</h2>
            <p>Alexander Kochman</p>
            <p>1070 Wien, Österreich</p>
            <p>
              E-Mail:{" "}
              <a href="mailto:office@adsklar.at">office@adsklar.at</a>
            </p>
            <p>
              Telefon: <a href="tel:+4366567221783">0665 672 217 83</a>
            </p>
          </div>

          <div className="legal-block">
            <h2>Welche Daten verarbeitet werden</h2>
            <p>
              Wenn Sie uns per Kontaktformular, E-Mail oder Telefon
              kontaktieren, verarbeiten wir die Angaben, die Sie uns mitteilen.
              Dazu können Name, Unternehmen, E-Mail-Adresse, Telefonnummer,
              Wunschtermin und Ihre Nachricht gehören.
            </p>
          </div>

          <div className="legal-block">
            <h2>Zweck der Verarbeitung</h2>
            <p>
              Wir verwenden diese Daten, um Ihre Anfrage zu beantworten, einen
              Termin abzustimmen und eine mögliche Zusammenarbeit zu
              besprechen.
            </p>
          </div>

          <div className="legal-block">
            <h2>Rechtsgrundlage</h2>
            <p>
              Die Verarbeitung erfolgt auf Grundlage vorvertraglicher
              Maßnahmen bzw. berechtigter Interessen, insbesondere der
              Bearbeitung Ihrer Anfrage und der Kommunikation mit Ihnen.
            </p>
          </div>

          <div className="legal-block">
            <h2>Speicherdauer</h2>
            <p>
              Wir speichern personenbezogene Daten nur so lange, wie es für die
              Bearbeitung Ihrer Anfrage erforderlich ist oder gesetzliche
              Aufbewahrungspflichten bestehen.
            </p>
          </div>

          <div className="legal-block">
            <h2>Hosting und Serverdaten</h2>
            <p>
              Diese Website wird über GitHub Pages bereitgestellt. Beim Besuch
              der Website können technisch notwendige Serverdaten verarbeitet
              werden, zum Beispiel IP-Adresse, Zeitpunkt des Zugriffs,
              aufgerufene Seite, Browser und Betriebssystem. Diese Daten dienen
              der technischen Bereitstellung und Sicherheit der Website.
            </p>
          </div>

          <div className="legal-block">
            <h2>Cookies und Tracking</h2>
            <p>
              Auf dieser Website setzen wir derzeit keine eigenen
              Marketing-Cookies und kein eigenes Analyse-Tracking ein.
            </p>
          </div>

          <div className="legal-block">
            <h2>Weitergabe von Daten</h2>
            <p>
              Eine Weitergabe personenbezogener Daten erfolgt nur, wenn dies zur
              Bearbeitung Ihrer Anfrage notwendig ist, eine gesetzliche Pflicht
              besteht oder Sie eingewilligt haben.
            </p>
          </div>

          <div className="legal-block">
            <h2>Ihre Rechte</h2>
            <p>
              Sie haben grundsätzlich das Recht auf Auskunft, Berichtigung,
              Löschung, Einschränkung, Datenübertragbarkeit, Widerruf und
              Widerspruch. Wenn Sie glauben, dass die Verarbeitung Ihrer Daten
              gegen Datenschutzrecht verstößt, können Sie sich bei der
              zuständigen Aufsichtsbehörde beschweren. In Österreich ist das
              die Datenschutzbehörde.
            </p>
          </div>

          <div className="legal-block">
            <h2>Kontakt zum Datenschutz</h2>
            <p>
              Bei Fragen zum Datenschutz schreiben Sie bitte an{" "}
              <a href="mailto:office@adsklar.at">office@adsklar.at</a>.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
