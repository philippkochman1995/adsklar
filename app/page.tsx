"use client";

import { FormEvent, useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  Check,
  Mail,
  Phone,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Klar Ads – Startseite">
          klar<span>.</span>
        </a>
        <nav aria-label="Seitennavigation">
          <a href="#arbeitsweise">Arbeitsweise</a>
          <a href="#ueber-uns">Über uns</a>
          <a href="#kontakt">Kontakt</a>
        </nav>
        <Button asChild className="header-cta">
          <a href="#kontakt">
            Erstgespräch <ArrowDownRight aria-hidden="true" />
          </a>
        </Button>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow hero-enter hero-delay-1">
            Google Ads Beratung & Betreuung
          </p>
          <h1
            className="hero-title"
            aria-label="Weniger Vermutung. Mehr Klarheit im Werbekonto."
          >
            <span className="title-line">
              <span>Weniger Vermutung.</span>
            </span>
            <span className="title-line">
              <span className="hero-delay-2">Mehr Klarheit im</span>
            </span>
            <span className="title-line">
              <span className="hero-delay-3">Werbekonto.</span>
            </span>
          </h1>
          <p className="hero-lead hero-enter hero-delay-4">
            Wir planen, betreuen und verbessern Google Ads für Unternehmen,
            die wissen möchten, was ihr Budget tatsächlich bewirkt. Ohne
            unnötige Komplexität. Ohne große Versprechen.
          </p>
          <div className="hero-actions hero-enter hero-delay-5">
            <Button asChild size="lg" className="primary-button">
              <a href="#kontakt">
                Unverbindlich sprechen <ArrowRight aria-hidden="true" />
              </a>
            </Button>
            <a className="text-link" href="#arbeitsweise">
              So arbeiten wir
            </a>
          </div>
          <div
            className="trust-line hero-enter hero-delay-6"
            aria-label="Vorteile"
          >
            <span>
              <Check aria-hidden="true" /> Monatlich kündbar
            </span>
            <span>
              <Check aria-hidden="true" /> Transparente Auswertung
            </span>
            <span>
              <Check aria-hidden="true" /> Direkter Kontakt
            </span>
          </div>
        </div>

        <div
          className="hero-visual hero-enter hero-delay-3"
          aria-label="Beispielhafte Entwicklung eines Google Ads Kontos"
        >
          <div className="visual-glow" />
          <div className="account-card">
            <div className="account-head">
              <div>
                <span className="status-dot" />
                Beispielkonto
              </div>
              <span>Letzte 30 Tage</span>
            </div>

            <div className="main-metric">
              <span>Kosten pro Anfrage</span>
              <strong>67,10 €</strong>
              <small>
                <span>↓ 13,4 %</span> zum Vormonat
              </small>
            </div>

            <div className="chart" aria-hidden="true">
              <svg viewBox="0 0 560 190" role="img">
                <defs>
                  <linearGradient
                    id="chartFill"
                    x1="0"
                    x2="0"
                    y1="0"
                    y2="1"
                  >
                    <stop
                      offset="0"
                      stopColor="#c8f36c"
                      stopOpacity="0.35"
                    />
                    <stop
                      offset="1"
                      stopColor="#c8f36c"
                      stopOpacity="0"
                    />
                  </linearGradient>
                </defs>
                <path
                  className="chart-area"
                  d="M0 164 C52 151 84 156 128 132 C177 106 207 125 250 95 C298 61 329 91 370 62 C418 28 464 54 560 20 L560 190 L0 190 Z"
                />
                <path
                  className="chart-line"
                  pathLength="1"
                  d="M0 164 C52 151 84 156 128 132 C177 106 207 125 250 95 C298 61 329 91 370 62 C418 28 464 54 560 20"
                />
                <circle className="chart-point" cx="560" cy="20" r="6" />
              </svg>
            </div>

            <div className="metric-row">
              <div>
                <span>Anfragen</span>
                <strong>186</strong>
              </div>
              <div>
                <span>Budget</span>
                <strong>12.480 €</strong>
              </div>
              <div>
                <span>Messung</span>
                <strong className="metric-ok">Sauber</strong>
              </div>
            </div>
          </div>

          <div className="floating-note note-top">
            <span>Suchbegriffe geprüft</span>
            <strong>+ 24 relevante</strong>
          </div>
          <div className="floating-note note-bottom">
            <span>Nächster Schritt</span>
            <strong>Landingpage testen</strong>
          </div>
        </div>
      </section>

      <section className="process section-shell" id="arbeitsweise">
        <div className="section-intro reveal">
          <p className="eyebrow">Wie es funktioniert</p>
          <h2>
            Gute Kampagnen beginnen nicht mit mehr Budget. Sondern mit einer
            klaren Frage.
          </h2>
        </div>

        <div className="problem-solution">
          <article className="logic-card problem-card reveal">
            <span className="card-number">01 / Das Problem</span>
            <h3>Zu viele Signale, zu wenig Einordnung.</h3>
            <p>
              Klicks, Conversions und Empfehlungen wirken präzise. Trotzdem
              bleibt oft offen, welche Kampagne wirklich gute Anfragen bringt —
              und wo Budget ohne klare Wirkung ausläuft.
            </p>
          </article>
          <article className="logic-card solution-card reveal">
            <span className="card-number">02 / Unsere Lösung</span>
            <h3>Ein Konto, das Entscheidungen einfacher macht.</h3>
            <p>
              Wir ordnen Kampagnen und Messung, priorisieren sinnvolle Tests
              und erklären Empfehlungen so, dass sie nachvollziehbar bleiben.
              Sie sehen, was wir tun — und warum.
            </p>
          </article>
        </div>

        <div className="steps reveal">
          <article>
            <span>01</span>
            <h3>Verstehen</h3>
            <p>
              Ziele, Angebot, Datenlage und bisherige Kampagnen gemeinsam
              einordnen.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>Fokussieren</h3>
            <p>
              Budget auf die Suchanfragen und Kampagnen mit echtem Potenzial
              lenken.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>Verbessern</h3>
            <p>
              Regelmäßig testen, auswerten und die nächsten Schritte
              verständlich festhalten.
            </p>
          </article>
        </div>
      </section>

      <section className="about section-shell" id="ueber-uns">
        <div className="about-grid">
          <div className="section-intro reveal">
            <p className="eyebrow">Über uns</p>
            <h2>Eine kleine Agentur, die nah am Konto arbeitet.</h2>
          </div>
          <div className="about-copy reveal">
            <p className="lead-copy">
              Klar Ads ist ein fokussiertes Team aus Strategie, Tracking und
              Kampagnenmanagement. Wir arbeiten lieber mit wenigen Unternehmen
              eng zusammen, als viele Konten nebenbei zu verwalten.
            </p>
            <p>
              Ihr Kontakt bleibt derselbe. Entscheidungen werden dokumentiert.
              Und wenn eine Maßnahme nicht sinnvoll ist, sagen wir das auch.
              Unser Anspruch ist nicht, Werbung komplizierter zu machen —
              sondern verlässlicher steuerbar.
            </p>
          </div>
        </div>

        <div className="principles reveal">
          <div>
            <strong>1</strong>
            <span>feste Ansprechperson</span>
          </div>
          <div>
            <strong>14</strong>
            <span>Tage im Optimierungsrhythmus</span>
          </div>
          <div>
            <strong>100 %</strong>
            <span>Einblick in Konto und Entscheidungen</span>
          </div>
        </div>
      </section>

      <section className="contact section-shell" id="kontakt">
        <div className="contact-heading reveal">
          <p className="eyebrow">Nächste Schritte</p>
          <h2>Erst einmal sehen, ob es passt.</h2>
          <p>
            In 30 Minuten klären wir Ihre Ausgangslage, Ziele und ob wir dabei
            sinnvoll helfen können. Das Gespräch ist unverbindlich.
          </p>
        </div>

        <div className="contact-layout">
          <div className="contact-person reveal">
            <div className="portrait-mark" aria-hidden="true">
              LF
            </div>
            <div>
              <span>Ihre Ansprechpartnerin</span>
              <h3>Lea Fischer</h3>
              <p>Beratung & Strategie</p>
            </div>
            <div className="contact-details">
              <a href="tel:+493055520184">
                <Phone aria-hidden="true" /> +49 30 555 20 184
              </a>
              <a href="mailto:lea@klar-ads.de">
                <Mail aria-hidden="true" /> lea@klar-ads.de
              </a>
            </div>
            <p className="availability">
              Telefonisch erreichbar Montag bis Freitag, 9–17 Uhr.
            </p>
          </div>

          {sent ? (
            <div className="form-success reveal" role="status">
              <span>
                <Check aria-hidden="true" />
              </span>
              <h3>Vielen Dank.</h3>
              <p>
                Ihre Anfrage ist angekommen. Lea meldet sich, um den Termin zu
                bestätigen und offene Fragen kurz vorab zu klären.
              </p>
              <Button variant="outline" onClick={() => setSent(false)}>
                Weitere Anfrage senden
              </Button>
            </div>
          ) : (
            <form className="contact-form reveal" onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="field">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Vor- und Nachname"
                    required
                  />
                </div>
                <div className="field">
                  <Label htmlFor="company">Unternehmen</Label>
                  <Input
                    id="company"
                    name="company"
                    placeholder="Unternehmensname"
                  />
                </div>
                <div className="field">
                  <Label htmlFor="email">E-Mail</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="name@unternehmen.de"
                    required
                  />
                </div>
                <div className="field">
                  <Label htmlFor="phone">Telefon</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Optional"
                  />
                </div>
                <div className="field">
                  <Label htmlFor="date">Wunschtermin</Label>
                  <Input id="date" name="date" type="date" required />
                </div>
                <div className="field">
                  <Label htmlFor="time">Bevorzugte Zeit</Label>
                  <Select name="time" defaultValue="morning">
                    <SelectTrigger id="time" className="select-trigger">
                      <SelectValue placeholder="Zeit auswählen" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="morning">09:00–12:00 Uhr</SelectItem>
                      <SelectItem value="afternoon">
                        12:00–15:00 Uhr
                      </SelectItem>
                      <SelectItem value="late">15:00–17:00 Uhr</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="field">
                <Label htmlFor="message">Worum geht es?</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Ein paar Sätze zur aktuellen Situation genügen."
                  rows={4}
                />
              </div>
              <div className="form-footer">
                <p>Wir verwenden Ihre Angaben nur zur Kontaktaufnahme.</p>
                <Button type="submit" size="lg" className="primary-button">
                  Erstgespräch anfragen <ArrowRight aria-hidden="true" />
                </Button>
              </div>
            </form>
          )}
        </div>
      </section>

      <footer>
        <a className="brand" href="#top">
          klar<span>.</span>
        </a>
        <p>Google Ads, nachvollziehbar betreut.</p>
        <div>
          <a href="#">Impressum</a>
          <a href="#">Datenschutz</a>
        </div>
      </footer>
    </main>
  );
}
