"use client";

import { FormEvent, useState } from "react";
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

const testimonials = [
  [
    "Nordwerk",
    "Seit Google Ads sauber läuft, sehen wir endlich, welche Anfragen wirklich passen.",
  ],
  ["Studio Vela", "Nicht lauter geworden. Einfach messbarer."],
  [
    "Berg & Kraft",
    "Wir wissen jetzt, welche Suchbegriffe Kunden bringen und welche nicht.",
  ],
  ["Lumen Bau", "Vorher viel probiert. Jetzt sehen wir, was funktioniert."],
  ["Feldmann", "Endlich Anfragen, die zu unserem Angebot passen."],
  ["Maison Lenz", "Klarer Blick auf Budget, Klicks und echte Kontakte."],
] as const;

const Logo = () => (
  <span className="logo" aria-label="ads klar">
    ads <span>klar</span>
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
        <a href="#top" aria-label="ads klar – Startseite">
          <Logo />
        </a>
        <nav aria-label="Seitennavigation">
          <a href="#arbeitsweise">Arbeitsweise</a>
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
            Endlich auf Google gefunden werden.
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
          </div>

          <div className="search-page">
            <div className="search-field">
              <span className="search-query">google ads agentur wien</span>
              <Search aria-hidden="true" />
            </div>

            <p className="search-count">Ergebnisse für Ihre Suche</p>

            <article className="search-result featured-result">
              <div className="position-label">
                <span>1</span> Erste Position
              </div>
              <p><strong>Gesponsert</strong> · adsklar.de</p>
              <h3>ads klar | Google Ads, klar betreut</h3>
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

      <section className="testimonial-strip" aria-label="Kundenstimmen">
        <p>Unternehmen, die mit klareren Suchkampagnen arbeiten</p>
        <div className="testimonial-marquee">
          <div className="testimonial-track">
            {testimonials.map(([name, quote]) => (
              <article className="testimonial-card" key={name}>
                <div className="fake-logo">{name}</div>
                <blockquote>{quote}</blockquote>
              </article>
            ))}
            {testimonials.map(([name, quote]) => (
              <article
                className="testimonial-card"
                key={`${name}-duplicate`}
                aria-hidden="true"
              >
                <div className="fake-logo">{name}</div>
                <blockquote>{quote}</blockquote>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section page-grid" id="arbeitsweise">
        <div className="section-label reveal">
          <p className="kicker">Wie es funktioniert</p>
          <h2>Warum Kunden Ihr Unternehmen nicht finden</h2>
        </div>
        <div className="section-content reveal">
          <div className="story-copy">
            <p>Sie haben eine Website.</p>
            <p>Wahrscheinlich hat das zwei Monate gedauert.</p>
            <p>
              Texte schreiben. Bilder aussuchen. Seiten bauen. Noch einmal
              alles ändern.
            </p>
            <p>Dann ist sie online.</p>
            <p>Und trotzdem kommen keine Kunden.</p>
            <p>Hier und da eine Anfrage vielleicht.</p>
            <p>Aber nichts, worauf man sich verlassen kann.</p>
            <p>Also probiert man weiter.</p>
            <p>Ein paar Blogposts.</p>
            <p>Instagram.</p>
            <p>Facebook-Gruppen.</p>
            <p>Man ist beschäftigt. Aber es wird nicht wirklich besser.</p>
            <p>
              <strong>
                Ich verstehe das, ich war selbst an diesem Punkt.
              </strong>
            </p>
            <p>
              Das Problem ist dann meistens nicht die Website selbst.
            </p>
            <p>
              <strong>
                Das Problem ist, dass zu wenige passende Menschen sie finden.
              </strong>
            </p>
            <p>
              Wir alle googeln, wenn wir etwas brauchen.
            </p>
            <p>
              Und meistens klicken wir auf eines der ersten Ergebnisse.
            </p>
            <p>
              <strong>
                Menschen kaufen, wenn sie motiviert sind zu kaufen.
              </strong>
            </p>
            <p>
              Genau dann sollten Sie sichtbar sein.
            </p>
            <p>
              Google Ads ist dafür ein kontrollierter Test. Man sieht schnell,
              welche Suchanfragen funktionieren, welche nicht und ob daraus
              echte Anfragen entstehen.
            </p>
            <p>
              Nur so kommt man raus aus dem Raten.
            </p>
            <p>
              <strong>Und rein in Klarheit. Und zu Kunden.</strong>
            </p>
          </div>

          <div className="story-contact" id="kontakt">
            <div className="story-contact-intro">
              <p className="kicker">Nächste Schritte</p>
              <h3>
                Ihren kontrollierten Google Ads Test starten und endlich
                Marketing-Klarheit bekommen
              </h3>
              <p className="section-note">
                Wir sprechen über Ihre Ausgangslage und sagen offen, ob wir
                helfen können.
              </p>

              <div className="contact-person">
                <div className="person-avatar">AK</div>
                <div>
                  <strong>Alexander Kochman</strong>
                  <span>Beratung & Strategie</span>
                </div>
              </div>
              <div className="contact-links">
                <a href="tel:+493055520184">
                  <Phone aria-hidden="true" /> Tel: +49 30 555 20 184
                </a>
                <a href="mailto:alexander@adsklar.de">
                  <Mail aria-hidden="true" /> Mail: alexander@adsklar.de
                </a>
              </div>
            </div>

            {sent ? (
              <div className="success-state" role="status">
                <span>
                  <Check aria-hidden="true" />
                </span>
                <h3>Danke für Ihre Anfrage.</h3>
                <p>Alexander meldet sich und bestätigt den Termin.</p>
                <Button variant="outline" onClick={() => setSent(false)}>
                  Neue Anfrage
                </Button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
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
