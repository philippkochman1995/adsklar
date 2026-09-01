"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import { ArrowRight, Check, Mail, Phone, Search } from "lucide-react";

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

const Logo = () => (
  <span className="logo" aria-label="Klar Ads">
    klar <span>ads</span>
    <i aria-hidden="true" />
  </span>
);

export default function Home() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <main>
      <header className="site-header">
        <a href="#top" aria-label="Klar Ads – Startseite">
          <Logo />
        </a>
        <nav aria-label="Seitennavigation">
          <a href="#arbeitsweise">Arbeitsweise</a>
          <a href="#ueber-uns">Über uns</a>
          <a href="#kontakt">Kontakt</a>
        </nav>
        <Button asChild className="blue-button header-button">
          <a href="#kontakt">Erstgespräch</a>
        </Button>
      </header>

      <section className="hero page-grid" id="top">
        <div className="hero-copy">
          <p className="kicker hero-in delay-1">Google Ads für Unternehmen</p>
          <h1 className="hero-in delay-2">
            Endlich auf Platz eins bei Google.
          </h1>
          <p className="hero-text hero-in delay-3">
            Wir sorgen dafür, dass Ihre Anzeigen bei den richtigen
            Suchanfragen sichtbar werden. Mit klaren Kampagnen, sauberem
            Tracking und laufender Optimierung.
          </p>
          <div className="hero-actions hero-in delay-4">
            <Button asChild size="lg" className="blue-button">
              <a href="#kontakt">
                Erstgespräch buchen <ArrowRight aria-hidden="true" />
              </a>
            </Button>
            <a className="plain-link" href="#arbeitsweise">
              So arbeiten wir
            </a>
          </div>
          <div className="proof hero-in delay-5">
            <span>
              <Check aria-hidden="true" /> Direkter Kontakt
            </span>
            <span>
              <Check aria-hidden="true" /> Klare Auswertung
            </span>
            <span>
              <Check aria-hidden="true" /> Monatlich kündbar
            </span>
          </div>
        </div>

        <div className="search-mockup hero-in-right delay-3">
          <div className="search-window-bar" aria-hidden="true">
            <div>
              <i />
              <i />
              <i />
            </div>
            <span>google.de</span>
          </div>

          <div className="search-page">
            <div className="search-wordmark" aria-label="Google">
              <span>G</span><span>o</span><span>o</span><span>g</span><span>l</span><span>e</span>
            </div>

            <div className="search-field">
              <span className="search-query">google ads agentur berlin</span>
              <Search aria-hidden="true" />
            </div>

            <div className="search-tabs" aria-hidden="true">
              <span>Alle</span>
              <span>Bilder</span>
              <span>Maps</span>
              <span>Mehr</span>
            </div>

            <p className="search-count">Ergebnisse für Ihre Suche</p>

            <article className="search-result featured-result">
              <div className="position-label">
                <span>1</span> Erste Position
              </div>
              <p><strong>Gesponsert</strong> · klarads.de</p>
              <h3>Klar Ads | Google Ads, klar betreut</h3>
              <div>
                Strukturierte Kampagnen, sauberes Tracking und direkte
                Betreuung für Ihr Unternehmen.
              </div>
            </article>

            <article className="search-result muted-result" aria-hidden="true">
              <p>beispiel-agentur.de</p>
              <h3>Digitale Lösungen für Unternehmen</h3>
              <div className="result-lines"><i /><i /></div>
            </article>
          </div>

          <p className="example-note">Beispielhafte Suchdarstellung</p>
        </div>
      </section>

      <section className="content-section page-grid" id="arbeitsweise">
        <div className="section-label reveal">
          <p className="kicker">Wie es funktioniert</p>
          <h2>Erst verstehen. Dann optimieren.</h2>
        </div>
        <div className="section-content reveal">
          <div className="problem-solution">
            <article>
              <span className="tag red-tag">Das Problem</span>
              <h3>Das Konto läuft. Die Wirkung bleibt unklar.</h3>
              <p>
                Kampagnen liefern Klicks und Anfragen. Trotzdem ist oft nicht
                klar, was gute Ergebnisse bringt und wo Budget verloren geht.
              </p>
            </article>
            <article>
              <span className="tag blue-tag">Die Lösung</span>
              <h3>Ein klarer Plan für Konto und Budget.</h3>
              <p>
                Wir prüfen Konto und Tracking, setzen Prioritäten und erklären
                jede wichtige Änderung. Kurz und nachvollziehbar.
              </p>
            </article>
          </div>

          <div className="illustrated-steps">
            <article className="illustrated-step reveal">
              <div className="step-art art-blue">
                <Image
                  src="/illustrations/analyse.png"
                  alt="Illustration einer Analyse mit Lupe und Datenübersicht"
                  width={640}
                  height={480}
                />
              </div>
              <div className="step-copy">
                <span>01 / Analyse</span>
                <h3>Wir prüfen Konto und Tracking.</h3>
                <p>
                  Wir sehen uns Kampagnen, Suchbegriffe, Messung und Ziele an.
                  Danach ist klar, wo das Konto steht.
                </p>
              </div>
            </article>

            <article className="illustrated-step reveal">
              <div className="step-art art-yellow">
                <Image
                  src="/illustrations/fokus.png"
                  alt="Illustration eines Filters, der Kampagnen klar priorisiert"
                  width={640}
                  height={480}
                />
              </div>
              <div className="step-copy">
                <span>02 / Fokus</span>
                <h3>Wir setzen klare Prioritäten.</h3>
                <p>
                  Budget fließt in relevante Kampagnen. Unnötige Komplexität
                  und schwache Suchanfragen werden reduziert.
                </p>
              </div>
            </article>

            <article className="illustrated-step reveal">
              <div className="step-art art-green">
                <Image
                  src="/illustrations/optimierung.png"
                  alt="Illustration einer laufenden Optimierung mit Reglern und Diagramm"
                  width={640}
                  height={480}
                />
              </div>
              <div className="step-copy">
                <span>03 / Optimierung</span>
                <h3>Wir verbessern Schritt für Schritt.</h3>
                <p>
                  Wir testen, werten aus und passen an. Jede wichtige Änderung
                  wird kurz dokumentiert und erklärt.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="content-section page-grid soft-section" id="ueber-uns">
        <div className="section-label reveal">
          <p className="kicker">Über uns</p>
          <h2>Klein genug für direkten Kontakt.</h2>
        </div>
        <div className="section-content about-content reveal">
          <p className="large-copy">
            Klar Ads ist eine spezialisierte Google Ads Agentur. Wir arbeiten
            mit wenigen Unternehmen eng zusammen.
          </p>
          <p>
            Sie haben eine feste Ansprechperson. Entscheidungen werden
            dokumentiert. Wenn eine Maßnahme nicht sinnvoll ist, sagen wir das.
          </p>
          <div className="facts">
            <div>
              <strong>1</strong>
              <span>feste Ansprechperson</span>
            </div>
            <div>
              <strong>14 Tage</strong>
              <span>Optimierungsrhythmus</span>
            </div>
            <div>
              <strong>100 %</strong>
              <span>Einblick ins Konto</span>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section page-grid contact-section" id="kontakt">
        <div className="section-label reveal">
          <p className="kicker">Nächste Schritte</p>
          <h2>30 Minuten. Klare Einschätzung.</h2>
          <p className="section-note">
            Wir sprechen über Ihre Ausgangslage und sagen offen, ob wir helfen
            können.
          </p>

          <div className="contact-person">
            <div className="person-avatar">LF</div>
            <div>
              <strong>Lea Fischer</strong>
              <span>Beratung & Strategie</span>
            </div>
          </div>
          <div className="contact-links">
            <a href="tel:+493055520184">
              <Phone aria-hidden="true" /> +49 30 555 20 184
            </a>
            <a href="mailto:lea@klar-ads.de">
              <Mail aria-hidden="true" /> lea@klar-ads.de
            </a>
          </div>
        </div>

        <div className="section-content reveal">
          {sent ? (
            <div className="success-state" role="status">
              <span>
                <Check aria-hidden="true" />
              </span>
              <h3>Danke für Ihre Anfrage.</h3>
              <p>Lea meldet sich und bestätigt den Termin.</p>
              <Button variant="outline" onClick={() => setSent(false)}>
                Neue Anfrage
              </Button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="field">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" placeholder="Vor- und Nachname" required />
                </div>
                <div className="field">
                  <Label htmlFor="company">Unternehmen</Label>
                  <Input id="company" name="company" placeholder="Unternehmensname" />
                </div>
                <div className="field">
                  <Label htmlFor="email">E-Mail</Label>
                  <Input id="email" name="email" type="email" placeholder="name@unternehmen.de" required />
                </div>
                <div className="field">
                  <Label htmlFor="phone">Telefon</Label>
                  <Input id="phone" name="phone" type="tel" placeholder="Optional" />
                </div>
                <div className="field">
                  <Label htmlFor="date">Wunschtermin</Label>
                  <Input id="date" name="date" type="date" required />
                </div>
                <div className="field">
                  <Label htmlFor="time">Zeit</Label>
                  <Select name="time" defaultValue="morning">
                    <SelectTrigger id="time" className="select-trigger">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="morning">09:00–12:00 Uhr</SelectItem>
                      <SelectItem value="afternoon">12:00–15:00 Uhr</SelectItem>
                      <SelectItem value="late">15:00–17:00 Uhr</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="field message-field">
                <Label htmlFor="message">Kurze Nachricht</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Worum geht es?"
                  rows={4}
                />
              </div>
              <div className="form-footer">
                <p>Ihre Angaben werden nur zur Kontaktaufnahme verwendet.</p>
                <Button type="submit" size="lg" className="blue-button">
                  Termin anfragen <ArrowRight aria-hidden="true" />
                </Button>
              </div>
            </form>
          )}
        </div>
      </section>

      <footer className="site-footer">
        <Logo />
        <span>Google Ads, klar betreut.</span>
        <div>
          <a href="#">Impressum</a>
          <a href="#">Datenschutz</a>
        </div>
      </footer>
    </main>
  );
}
