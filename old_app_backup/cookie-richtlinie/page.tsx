import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cookie-Richtlinie | K-Aqua GmbH',
  description: 'Informationen über den Einsatz von Cookies auf der K-Aqua Website. Welche Cookies wir nutzen und wie Sie diese verwalten können.',
};

export default function CookieRichtlinie() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-background">
      <div className="max-w-3xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-foreground mb-8">Cookie-Richtlinie</h1>

        <div className="prose prose-invert max-w-none space-y-8 text-text-secondary">
          <section>
            <h2 className="text-xl font-bold text-foreground mt-0">Was sind Cookies?</h2>
            <p>Cookies sind kleine Textdateien, die von Ihrem Browser auf Ihrem Gerät gespeichert werden, wenn Sie eine Website besuchen. Sie dienen dazu, die Website funktionsfähig zu machen, die Effizienz zu steigern und Informationen an die Eigentümer der Website zu übermitteln.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">Welche Cookies nutzen wir?</h2>

            <h3 className="text-lg font-semibold text-foreground">Technisch notwendige Cookies</h3>
            <p>Diese Cookies sind für den Betrieb der Website unerlässlich. Sie ermöglichen grundlegende Funktionen wie die Seitennavigation und den Zugang zu geschützten Bereichen. Die Website kann ohne diese Cookies nicht richtig funktionieren.</p>

            <h3 className="text-lg font-semibold text-foreground">Session-Cookies</h3>
            <p>Session-Cookies werden temporär gespeichert und automatisch gelöscht, wenn Sie Ihren Browser schließen. Sie werden zur Aufrechterhaltung Ihrer Sitzung benötigt.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">Cookies von Drittanbietern</h2>
            <p>Wir setzen derzeit keine Tracking-, Analyse- oder Marketing-Cookies von Drittanbietern ein. Sollte eine Einbindung von Drittanbieter-Diensten (z.B. Calendly für Terminbuchungen) erfolgen, werden die entsprechenden Cookie-Informationen hier ergänzt.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">Wie können Sie Cookies verwalten?</h2>
            <p>Sie können Ihren Browser so einstellen, dass er Sie über das Setzen von Cookies informiert, Cookies nur im Einzelfall erlaubt, die Annahme von Cookies für bestimmte Fälle oder generell ausschließt und das automatische Löschen der Cookies beim Schließen des Browsers aktiviert.</p>
            <p>Bitte beachten Sie, dass bei der Deaktivierung von Cookies die Funktionalität dieser Website eingeschränkt sein kann.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">Weitere Informationen</h2>
            <p>Detaillierte Informationen zum Umgang mit personenbezogenen Daten finden Sie in unserer <Link href="/datenschutz" className="text-primary hover:underline">Datenschutzerklärung</Link>.</p>
          </section>

          <p className="text-sm text-text-muted mt-8">Stand: Januar 2025</p>
        </div>
      </div>
    </div>
  );
}
