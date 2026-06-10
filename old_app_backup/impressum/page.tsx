import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Impressum | K-Aqua GmbH',
  description: 'Impressum der K-Aqua GmbH gemäß § 5 TMG. Angaben zum Unternehmen, Kontaktdaten und rechtliche Hinweise.',
};

export default function Impressum() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-background">
      <div className="max-w-3xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-foreground mb-8">Impressum</h1>

        <div className="prose prose-invert max-w-none space-y-8 text-text-secondary">
          <section>
            <h2 className="text-xl font-bold text-foreground mt-0">Angaben gemäß § 5 TMG</h2>
            <p>
              K-Aqua GmbH<br />
              Industriestraße 42<br />
              70565 Stuttgart<br />
              Deutschland
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">Vertreten durch</h2>
            <p>Geschäftsführer: Dr. Thomas Weber</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">Kontakt</h2>
            <p>
              Telefon: +49 711 123456-0<br />
              E-Mail: info@k-aqua.de<br />
              Web: www.k-aqua.de
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">Registereintrag</h2>
            <p>
              Handelsregister: Amtsgericht Stuttgart<br />
              Registernummer: HRB XXXXX<br />
              Umsatzsteuer-ID: DE XXXXXXXXX
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <p>
              Dr. Thomas Weber<br />
              K-Aqua GmbH<br />
              Industriestraße 42<br />
              70565 Stuttgart
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">Haftungsausschluss</h2>
            <h3 className="text-lg font-semibold text-foreground">Haftung für Inhalte</h3>
            <p>Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.</p>

            <h3 className="text-lg font-semibold text-foreground">Haftung für Links</h3>
            <p>Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.</p>

            <h3 className="text-lg font-semibold text-foreground">Urheberrecht</h3>
            <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
