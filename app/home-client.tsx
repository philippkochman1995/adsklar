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

const Logo = () => (
  <span className="logo" aria-label="ads klar">
    ads <span>klar</span>
    <i aria-hidden="true" />
  </span>
);

const contactEmail = "office@adsklar.at";
const contactPhoneDisplay = "0665 672 217 83";
const contactPhoneHref = "tel:+4366567221783";
const timeLabels: Record<string, string> = {
  morning: "09:00-12:00 Uhr",
  afternoon: "12:00-15:00 Uhr",
  late: "15:00-17:00 Uhr",
};

export default function Home() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const timeValue = String(formData.get("time") ?? "");
    const message = [
      `Name: ${formData.get("name") ?? ""}`,
      `Unternehmen: ${formData.get("company") ?? ""}`,
      `E-Mail: ${formData.get("email") ?? ""}`,
      `Telefon: ${formData.get("phone") ?? ""}`,
      `Wunschtermin: ${formData.get("date") ?? ""}`,
      `Zeit: ${timeLabels[timeValue] ?? timeValue}`,
      "",
      "Nachricht:",
      `${formData.get("message") ?? ""}`,
    ].join("\n");
    const mailto = `mailto:${contactEmail}?subject=${encodeURIComponent(
      "Google Ads Test anfragen",
    )}&body=${encodeURIComponent(message)}`;

    window.location.href = mailto;
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
              <p><strong>Gesponsert</strong> · adsklar.at</p>
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

      <section className="content-section page-grid" id="arbeitsweise">
        <div className="section-label reveal">
          <p className="kicker">Wie es funktioniert</p>
          <h2>Warum Kunden Ihr Unternehmen nicht finden</h2>
        </div>
        <div className="section-content reveal">
          <div className="story-copy">
            <p>Wir alle googeln, wenn wir etwas brauchen.</p>

<p>Und meistens klicken wir auf eines der ersten Ergebnisse.</p>

<p>
  Deshalb ist es essentiell, bei Google ganz vorne zu sein.<br />
  Und sofern Sie das nicht schon sind, gelingt das durch Google Ads.
</p>

<p>
  Google Ads sind bezahlte Anzeigen bei Google, die wir schalten können, um unter relevanten Suchbegriffen gefunden zu werden
  (z. B. „Installateur Wien 1090“).
</p>

<p>
  Je smarter man die Kampagne einrichtet und optimiert,<br />
  desto mehr Anfragen lassen sich aus dem Werbebudget herausholen.
</p>

<p>Und genau das machen wir.</p>
          </div>
        </div>
      </section>

      <section className="cta-section" id="kontakt">
        <div className="cta-inner">
          <div className="cta-intro reveal">
            <p className="kicker">Nächste Schritte</p>
            <h2>
              Ihren kontrollierten Google Ads Test starten und endlich
              Marketing-Klarheit bekommen
            </h2>
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
              <a href={contactPhoneHref}>
                <Phone aria-hidden="true" /> Tel: {contactPhoneDisplay}
              </a>
              <a href={`mailto:${contactEmail}`}>
                <Mail aria-hidden="true" /> Mail: {contactEmail}
              </a>
            </div>
          </div>

          <div className="cta-form reveal">
            {sent ? (
              <div className="success-state" role="status">
                <span>
                  <Check aria-hidden="true" />
                </span>
                <h3>Danke für Ihre Anfrage.</h3>
                <p>Ihr Mailprogramm wurde mit den Angaben geöffnet.</p>
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

      <div className="site-footer-wrap">
        <footer className="site-footer">
          <Logo />
          <span>Google Ads, klar betreut.</span>
          <div>
            <a href="/impressum">Impressum</a>
            <a href="/datenschutz">Datenschutz</a>
          </div>
        </footer>
      </div>
    </main>
  );
}
