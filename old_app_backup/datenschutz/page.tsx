import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung | K-Aqua GmbH',
  description: 'Datenschutzerklärung der K-Aqua GmbH gemäß DSGVO. Informationen zur Datenerhebung, -verarbeitung und Ihren Rechten.',
};

export default function Datenschutz() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-background">
      <div className="max-w-3xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-foreground mb-8">Datenschutzerklärung</h1>

        <div className="prose prose-invert max-w-none space-y-8 text-text-secondary">
          <section>
            <h2 className="text-xl font-bold text-foreground mt-0">1. Allgemeines</h2>
            <p>Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten daher ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, BDSG, TMG). In dieser Datenschutzerklärung informieren wir Sie über die wichtigsten Aspekte der Datenverarbeitung im Rahmen unserer Website.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">2. Verantwortlicher</h2>
            <p>
              K-Aqua GmbH<br />
              Industriestraße 42<br />
              70565 Stuttgart<br />
              E-Mail: datenschutz@k-aqua.de<br />
              Telefon: +49 711 123456-0
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">3. Erhobene Daten</h2>
            <h3 className="text-lg font-semibold text-foreground">3.1 Kontaktformulare</h3>
            <p>Wenn Sie uns über ein Kontaktformular kontaktieren, werden die von Ihnen angegebenen Daten (Name, E-Mail-Adresse, Nachricht) zum Zwecke der Bearbeitung Ihrer Anfrage bei uns gespeichert. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO.</p>

            <h3 className="text-lg font-semibold text-foreground">3.2 Server-Logfiles</h3>
            <p>Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt (IP-Adresse, Browsertyp, Betriebssystem, Referrer URL, Uhrzeit der Serveranfrage).</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">4. Formspree (Formularverarbeitung)</h2>
            <p>Wir nutzen den Dienst Formspree zur Verarbeitung von Formulardaten. Bei Absenden eines Formulars werden Ihre Daten an Formspree (USA) übermittelt. Weitere Informationen: <a href="https://formspree.io/legal/privacy-policy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Formspree Privacy Policy</a>.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">5. Cookies</h2>
            <p>Diese Website verwendet ausschließlich technisch notwendige Cookies (Session-Cookies), die für den Betrieb der Website erforderlich sind. Eine gesonderte Einwilligung ist hierfür nicht erforderlich. Tracking- oder Marketing-Cookies werden nicht eingesetzt.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">6. Ihre Rechte</h2>
            <p>Ihnen stehen folgende Rechte zu:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-foreground">Auskunft</strong> über Ihre bei uns gespeicherten Daten (Art. 15 DSGVO)</li>
              <li><strong className="text-foreground">Berichtigung</strong> unrichtiger Daten (Art. 16 DSGVO)</li>
              <li><strong className="text-foreground">Löschung</strong> Ihrer Daten (Art. 17 DSGVO)</li>
              <li><strong className="text-foreground">Einschränkung</strong> der Verarbeitung (Art. 18 DSGVO)</li>
              <li><strong className="text-foreground">Datenübertragbarkeit</strong> (Art. 20 DSGVO)</li>
              <li><strong className="text-foreground">Widerspruch</strong> gegen die Verarbeitung (Art. 21 DSGVO)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">7. Speicherdauer</h2>
            <p>Personenbezogene Daten, die über Kontaktformulare übermittelt werden, werden nach abschließender Bearbeitung der Anfrage gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten bestehen. Die gesetzliche Aufbewahrungsfrist beträgt in der Regel 6 Jahre (§ 257 HGB) bzw. 10 Jahre (§ 147 AO).</p>
          </section>
        </div>
      </div>
    </div>
  );
}
