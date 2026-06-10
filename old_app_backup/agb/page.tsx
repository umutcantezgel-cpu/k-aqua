import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Allgemeine Geschäftsbedingungen | K-Aqua GmbH',
  description: 'Allgemeine Geschäftsbedingungen der K-Aqua GmbH. Informationen zu Geltungsbereich, Vertrag, Lieferung und Haftung.',
};

export default function AGB() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-background">
      <div className="max-w-3xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-foreground mb-8">Allgemeine Geschäftsbedingungen</h1>

        <div className="prose prose-invert max-w-none space-y-8 text-text-secondary">
          <section>
            <h2 className="text-xl font-bold text-foreground mt-0">§ 1 Geltungsbereich</h2>
            <p>Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Geschäftsbeziehungen der K-Aqua GmbH (nachfolgend &quot;Verkäufer&quot;) mit ihren Kunden (nachfolgend &quot;Käufer&quot;). Abweichende Bedingungen des Käufers werden nicht anerkannt, es sei denn, der Verkäufer stimmt ihrer Geltung ausdrücklich schriftlich zu.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">§ 2 Vertragsschluss</h2>
            <p>Die Darstellung der Produkte auf der Website stellt kein rechtlich bindendes Angebot, sondern eine Aufforderung zur Bestellung dar. Durch Absenden einer Bestellung gibt der Käufer ein verbindliches Angebot ab. Der Vertrag kommt zustande, wenn der Verkäufer die Annahme durch eine Auftragsbestätigung erklärt oder die Lieferung ausführt.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">§ 3 Lieferumfang</h2>
            <p>Der Lieferumfang ergibt sich aus der Auftragsbestätigung des Verkäufers. Teillieferungen sind zulässig, soweit sie dem Käufer zumutbar sind. Liefertermine sind nur verbindlich, wenn sie vom Verkäufer ausdrücklich schriftlich bestätigt werden.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">§ 4 Vergütung und Zahlung</h2>
            <p>Es gelten die zum Zeitpunkt der Bestellung gültigen Preise. Alle Preise verstehen sich zuzüglich der gesetzlichen Mehrwertsteuer und zuzüglich Versandkosten. Rechnungen sind innerhalb von 30 Tagen nach Rechnungsdatum ohne Abzug zahlbar, sofern nicht anders vereinbart.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">§ 5 Eigentumsvorbehalt</h2>
            <p>Die gelieferte Ware bleibt bis zur vollständigen Bezahlung aller Forderungen aus der Geschäftsbeziehung Eigentum des Verkäufers. Der Käufer ist verpflichtet, die Vorbehaltsware pfleglich zu behandeln.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">§ 6 Gewährleistung und Haftung</h2>
            <p>Die Gewährleistungsfrist beträgt 24 Monate ab Lieferung. Die Haftung des Verkäufers für leichte Fahrlässigkeit ist auf den vorhersehbaren, vertragstypischen Schaden begrenzt. Dies gilt nicht für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">§ 7 Schlussbestimmungen</h2>
            <p>Es gilt das Recht der Bundesrepublik Deutschland. Gerichtsstand für alle Streitigkeiten ist Stuttgart, sofern der Käufer Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen ist. Sollte eine Bestimmung dieser AGB unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.</p>
          </section>

          <p className="text-sm text-text-muted mt-8">Stand: Januar 2025</p>
        </div>
      </div>
    </div>
  );
}
