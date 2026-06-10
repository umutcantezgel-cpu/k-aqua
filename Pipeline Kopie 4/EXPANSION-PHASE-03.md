Bereinige alle Vorherigen Tasks um diese durch ausführlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die übergeordnete Aufgabe haben, 50+ echte, funktionale React-Komponenten mit realer Tailwind-Implementierung, Server/Client-Grenzen und vollständiger TypeScript-Typisierung zu erstellen.

═══ PHASE 3: COMPONENT ECOSYSTEM — 50+ ECHTE, FUNKTIONALE UI-KOMPONENTEN ═══

ULTRATHINK-TASK 0: EXPANSION-SYNC &amp; DISCOVERY

Lese .ai-expansion-context.md und .expansion-state.md. Dokumentiere:
  — Welche Komponenten existieren BEREITS im /components-Verzeichnis? (NIEMALS überschreiben)
  — Phase 2 Daten: Welche Service-Types, Blog-Post-Interface, Team-Member-Typen sind definiert?
  — Welche Getter liefern live-Daten? (getServices, getBlogPosts, getTeamMembers)
  — npm run build baseline: Stelle sicher, dass der aktuelle Stand kompiliert
  — Erstelle einen Inventory: "Existierende Komponenten: [Liste]. Zu erstellende Komponenten: [Liste]"

───────────────────────────────────────────────────────────────────────────────

═══ BLOCK A: ATOMIC COMPONENTS — BUILDING BLOCKS ═══

ULTRATHINK-TASK 1: TEXT-KOMPONENTEN (Heading, Paragraph, Badge, Label)

Datei: /components/ui/Heading.tsx (Server Component)
  Props: { children: React.ReactNode, variant?: 'h1'|'h2'|'h3'|'h4'|'h5'|'h6', responsive?: boolean, className?: string }
  Tailwind: variant='h1' → text-5xl font-bold leading-tight, variant='h2' → text-4xl font-bold, variant='h3' → text-3xl font-bold, variant='h4' → text-2xl font-semibold, variant='h5' → text-xl font-semibold, variant='h6' → text-lg font-semibold
  responsive=true → lg:text-5xl md:text-4xl text-3xl (für h1), ähnlich für h2-h6
  Default: variant='h1', responsive=true
  Render: &lt;h1&gt;, &lt;h2&gt;, etc. je nach variant
  Output: Klare HTML-Semantik, skaliert auf Mobile

Datei: /components/ui/Paragraph.tsx (Server Component)
  Props: { children: React.ReactNode, size?: 'sm'|'base'|'lg', muted?: boolean, className?: string }
  Tailwind: size='base' → text-base leading-relaxed, size='sm' → text-sm, size='lg' → text-lg, muted=true → text-gray-600
  Default: size='base', muted=false
  Render: &lt;p&gt; mit className-Zusammenbau
  Output: Flexible Typografie für Body-Text

Datei: /components/ui/Badge.tsx (Server Component)
  Props: { children: React.ReactNode, variant?: 'primary'|'secondary'|'success'|'warning'|'error', size?: 'sm'|'md'|'lg', className?: string }
  Tailwind: variant='primary' → bg-blue-100 text-blue-900, variant='secondary' → bg-gray-100 text-gray-900, variant='success' → bg-green-100 text-green-900, variant='warning' → bg-yellow-100 text-yellow-900, variant='error' → bg-red-100 text-red-900
  size='sm' → px-2 py-1 text-xs, size='md' → px-3 py-1.5 text-sm, size='lg' → px-4 py-2 text-base
  Render: &lt;span className="inline-block rounded-full {variant-klasse} {size-klasse}"&gt;
  Output: Farbige, skalierbare Tags

Datei: /components/ui/Label.tsx (Server Component)
  Props: { children: React.ReactNode, htmlFor?: string, required?: boolean, className?: string }
  Tailwind: text-sm font-medium text-gray-900, required → mit Stern "*" in rot
  Render: &lt;label htmlFor={htmlFor}&gt; mit optional &lt;span className="text-red-500 ml-1"&gt;*&lt;/span&gt;
  Output: Form-Labels mit optionaler erforderlich-Markierung

ULTRATHINK-TASK 2: INTERACTIVE ATOMS (Button, Input, Textarea, Select, Checkbox)

Datei: /components/ui/Button.tsx (use client)
  Props: { children: React.ReactNode, variant?: 'primary'|'secondary'|'outline'|'ghost'|'link', size?: 'sm'|'md'|'lg'|'xl', loading?: boolean, disabled?: boolean, asChild?: boolean, className?: string, onClick?: () => void, type?: 'button'|'submit'|'reset' }
  Tailwind: variant='primary' → bg-blue-600 hover:bg-blue-700 text-white, variant='secondary' → bg-gray-600 hover:bg-gray-700 text-white, variant='outline' → border-2 border-gray-300 hover:bg-gray-50, variant='ghost' → hover:bg-gray-100, variant='link' → text-blue-600 hover:underline
  size='sm' → px-3 py-1.5 text-sm, size='md' → px-4 py-2 text-base, size='lg' → px-6 py-3 text-lg, size='xl' → px-8 py-4 text-xl
  disabled → opacity-50 cursor-not-allowed
  loading=true → zeige Spinner neben children, disabled=true
  asChild=true → nutze React.forwardRef und render children als &lt;button&gt; mit className-Props
  Render: &lt;button className="rounded-lg transition-colors font-medium"&gt;
  Output: Vielseitiger Button für alle Use-Cases

Datei: /components/ui/Input.tsx (use client)
  Props: { type?: 'text'|'email'|'tel'|'url'|'number'|'password', placeholder?: string, error?: boolean, helperText?: string, disabled?: boolean, className?: string, value?: string, onChange?: (e) => void, ...rest }
  Tailwind: border-2 border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500, error=true → border-red-500 focus:border-red-600
  Render: &lt;div&gt; mit &lt;input className="w-full"&gt; und optionalem &lt;p className="text-red-500 text-sm mt-1"&gt;{helperText}&lt;/p&gt;
  Output: Barrierefreies Text-Input mit Error-State

Datei: /components/ui/Textarea.tsx (use client)
  Props: { placeholder?: string, error?: boolean, disabled?: boolean, className?: string, rows?: number, value?: string, onChange?: (e) => void, ...rest }
  Tailwind: border-2 border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500, font-sans resize-none oder resize-vertical
  Render: &lt;textarea className="w-full"&gt;
  Output: Multi-line Text-Input mit gleicher Styling-Konsistenz wie Input

Datei: /components/ui/Select.tsx (use client)
  Props: { options: Array&lt;{label: string, value: string}&gt;, placeholder?: string, disabled?: boolean, className?: string, value?: string, onChange?: (value: string) => void, ...rest }
  Tailwind: border-2 border-gray-300 rounded-lg px-3 py-2 bg-white appearance-none cursor-pointer
  Render: &lt;select className="w-full pr-10"&gt; (pr-10 für Dropdown-Pfeil)
  Output: Native Select mit Tailwind-Styling

Datei: /components/ui/Checkbox.tsx (use client)
  Props: { id?: string, label?: string, checked?: boolean, onChange?: (checked: boolean) => void, disabled?: boolean, className?: string }
  Tailwind: w-4 h-4 accent-blue-600 rounded, checked:bg-blue-600 checked:border-blue-600
  Render: &lt;div className="flex items-center gap-2"&gt; mit &lt;input type="checkbox"&gt; und &lt;label&gt;
  Output: Barrierefreie Checkbox mit Label

ULTRATHINK-TASK 3: VISUAL ATOMS (Icon, Avatar, Divider, Skeleton, Spinner)

Datei: /components/ui/Icon.tsx (Server Component)
  Props: { name?: string, size?: 'sm'|'md'|'lg'|'xl', className?: string, children?: React.ReactNode }
  Tailwind: size='sm' → w-4 h-4, size='md' → w-6 h-6, size='lg' → w-8 h-8, size='xl' → w-12 h-12
  Render: Wrapper &lt;svg&gt; oder &lt;span className="inline-flex"&gt; für externe Icons
  Output: Konsistente Icon-Größen, kompatibel mit Lucide-Icons

Datei: /components/ui/Avatar.tsx (Server Component)
  Props: { src?: string, initials?: string, alt?: string, size?: 'sm'|'md'|'lg'|'xl', className?: string }
  Tailwind: size='sm' → w-6 h-6, size='md' → w-8 h-8, size='lg' → w-12 h-12, size='xl' → w-16 h-16, rounded-full
  Fallback: Wenn src fehlt, zeige &lt;div className="flex items-center justify-center bg-blue-600 text-white font-bold"&gt;{initials}&lt;/div&gt;
  Render: &lt;img className="object-cover"&gt; oder Fallback-&lt;div&gt;
  Output: Runde Profilbilder mit Initialen-Fallback

Datei: /components/ui/Divider.tsx (Server Component)
  Props: { orientation?: 'horizontal'|'vertical', spacing?: 'sm'|'md'|'lg', className?: string }
  Tailwind: orientation='horizontal' → h-px bg-gray-200 w-full, spacing='md' → my-4, orientation='vertical' → w-px bg-gray-200 h-full, spacing='md' → mx-4
  Render: &lt;div&gt; oder &lt;hr&gt;
  Output: Visuelle Trennlinien

Datei: /components/ui/Skeleton.tsx (Server Component)
  Props: { width?: string|number, height?: string|number, className?: string, circle?: boolean }
  Tailwind: bg-gray-200 animate-pulse, circle=true → rounded-full
  Render: &lt;div className="rounded-lg animate-pulse bg-gray-200" style={{width, height}}&gt;
  Output: Loading-Platzhalter

Datei: /components/ui/Spinner.tsx (use client)
  Props: { size?: 'sm'|'md'|'lg', className?: string }
  Tailwind: size='md' → w-6 h-6, animate-spin border-4 border-gray-300 border-t-blue-600 rounded-full
  Render: &lt;div className="inline-block animate-spin"&gt;
  Output: Lade-Spinner

ULTRATHINK-TASK 4: LAYOUT ATOMS (Container, Section, Grid, Stack)

Datei: /components/ui/Container.tsx (Server Component)
  Props: { children: React.ReactNode, className?: string, size?: 'sm'|'md'|'lg'|'full' }
  Tailwind: size='sm' → max-w-2xl, size='md' → max-w-4xl, size='lg' → max-w-7xl, mx-auto px-4 sm:px-6 lg:px-8
  Render: &lt;div className="mx-auto px-4"&gt;
  Output: Zentrierter Content mit konsistenten Rändern

Datei: /components/ui/Section.tsx (Server Component)
  Props: { children: React.ReactNode, className?: string, spacing?: 'sm'|'md'|'lg', background?: 'white'|'gray'|'blue', id?: string }
  Tailwind: spacing='md' → py-16, spacing='lg' → py-24, background='gray' → bg-gray-50, background='blue' → bg-blue-50
  Render: &lt;section className="w-full"&gt; mit className-Zusammenbau
  Output: Horizontale Content-Abschnitte mit konsistenten Abständen

Datei: /components/ui/Grid.tsx (Server Component)
  Props: { children: React.ReactNode, columns?: 1|2|3|4, gap?: 'sm'|'md'|'lg', className?: string, responsive?: boolean }
  Tailwind: columns=2 → grid-cols-2, columns=3 → grid-cols-3, columns=4 → grid-cols-4, gap='md' → gap-6, responsive=true → grid-cols-1 md:grid-cols-2 lg:grid-cols-3
  Render: &lt;div className="grid"&gt;
  Output: Responsive Grid-Layout für Card-Sammlungen

Datei: /components/ui/Stack.tsx (Server Component)
  Props: { children: React.ReactNode, direction?: 'vertical'|'horizontal', gap?: 'sm'|'md'|'lg', className?: string, align?: 'start'|'center'|'end', justify?: 'start'|'center'|'between'|'end' }
  Tailwind: direction='vertical' → flex flex-col, direction='horizontal' → flex flex-row, gap='md' → gap-6, align='center' → items-center, justify='between' → justify-between
  Render: &lt;div className="flex"&gt;
  Output: Flexible Flex-basierte Layout-Kombination

═══ BLOCK B: MOLECULE COMPONENTS — FEATURE BLOCKS ═══

ULTRATHINK-TASK 5: CARD MOLECULES (ServiceCard, BlogCard, TeamCard, TestimonialCard)

Datei: /components/cards/ServiceCard.tsx (Server Component)
  Props: { service: Service } (wobei Service aus Phase 2 Getter kommt)
  Render: &lt;div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"&gt; mit Heading (h3), Paragraph (size='base'), Badge (variant aus service.category), Button (variant='outline', text: "Mehr erfahren")
  Tailwind: border-gray-200, rounded-lg, p-6, hover:shadow-lg
  Output: Lesbar gestaltete Service-Card, importiert und rendert echte Daten

Datei: /components/cards/BlogCard.tsx (Server Component)
  Props: { post: BlogPost }
  Render: &lt;div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"&gt; mit Bild-Platzhalter (Skeleton oder &lt;div className="w-full h-48 bg-gray-300"&gt;), Heading (h3, text: post.title), Paragraph (post.excerpt), &lt;div&gt; mit Text (post.date formatiert), ReadingTime (berechnet aus post.content), Author (post.author)
  Tailwind: border-gray-200, rounded-lg, overflow-hidden
  Output: Blog-Preview mit Metadaten

Datei: /components/cards/TeamCard.tsx (Server Component)
  Props: { member: TeamMember }
  Render: &lt;div className="text-center"&gt; mit Avatar (src: member.image, initials), Heading (h4, text: member.name), Paragraph (size='sm', text: member.role), Paragraph (size='sm', muted=true, text: member.bio)
  Tailwind: text-center, p-4
  Output: Professionelle Team-Vorstellung

Datei: /components/cards/TestimonialCard.tsx (Server Component)
  Props: { testimonial: {quote: string, client: string, rating: number, company: string} }
  Render: &lt;div className="border-l-4 border-blue-600 pl-6 py-4"&gt; mit Paragraph (size='lg', text: `"${testimonial.quote}"`), &lt;div&gt; mit Star-Rating (rendere 5 Stars, gefüllt bis rating), Paragraph (size='sm', font-bold, text: testimonial.client), Paragraph (size='sm', muted=true, text: testimonial.company)
  Tailwind: border-l-4 border-blue-600 pl-6 py-4, bg-gray-50 rounded-r
  Output: Kundenempfehlung mit Sternen

ULTRATHINK-TASK 6: NAVIGATION MOLECULES (NavLink, MobileNavItem, BreadcrumbItem, FooterLinkGroup)

Datei: /components/nav/NavLink.tsx (use client)
  Props: { href: string, label: string, active?: boolean, onClick?: () => void }
  Render: &lt;Link href={href}&gt; mit className abhängig von active
  Tailwind: active → text-blue-600 border-b-2 border-blue-600, inactive → text-gray-700 hover:text-blue-600 transition-colors
  usePathname() nutzen um active zu bestimmen (if usePathname() === href)
  Output: Header-Navigation mit aktiven Link-Styling

Datei: /components/nav/MobileNavItem.tsx (use client)
  Props: { label: string, href?: string, submenu?: Array&lt;{label: string, href: string}&gt;, onClick?: () => void }
  Render: Wenn submenu vorhanden, &lt;button onClick={() => setOpen(!open)}&gt; mit Chevron-Icon und Accordion-Animation. Wenn kein submenu, &lt;Link href={href}&gt;
  Tailwind: py-3 px-4 border-b border-gray-200 flex items-center justify-between
  Output: Mobile-Navigations-Items mit Accordion-Support

Datei: /components/nav/BreadcrumbItem.tsx (Server Component)
  Props: { label: string, href?: string, active?: boolean }
  Render: &lt;li&gt; mit &lt;Link href={href}&gt; oder &lt;span&gt;, Trenner "/" zwischen Items
  Tailwind: text-sm text-gray-600, active → text-gray-900 font-medium
  Output: Breadcrumb-Navigation für Wayfinding (vorbereitet für Phase 4 Schema.org)

Datei: /components/nav/FooterLinkGroup.tsx (Server Component)
  Props: { title: string, links: Array&lt;{label: string, href: string}&gt; }
  Render: &lt;div&gt; mit Heading (h4, text: title), &lt;ul&gt; mit &lt;li&gt;&lt;Link&gt; für jeden Link
  Tailwind: heading: font-semibold text-gray-900, links: text-gray-600 hover:text-blue-600
  Output: Footer-Spalten-Layout

ULTRATHINK-TASK 7: FORM MOLECULES (FormField, FormGroup, ContactForm)

Datei: /components/forms/FormField.tsx (use client)
  Props: { label: string, error?: string, children: React.ReactNode, required?: boolean, helperText?: string }
  Render: &lt;div className="mb-6"&gt; mit &lt;Label&gt;, children (Input/Textarea/Select), optionaler Fehler-Nachricht
  Tailwind: mb-6, error: text-red-500 text-sm
  Output: Wiederverwendbarer Form-Field-Wrapper

Datei: /components/forms/FormGroup.tsx (Server Component)
  Props: { title?: string, children: React.ReactNode, className?: string }
  Render: &lt;fieldset&gt; mit optionaler &lt;legend className="font-semibold mb-4"&gt;, dann children
  Output: Gruppiere mehrere FormFields zusammen

Datei: /components/forms/ContactForm.tsx (use client)
  Props: { onSuccess?: () => void }
  State: { name: '', email: '', phone: '', subject: '', message: '', gdpr: false, loading: false }
  Render: &lt;form action="https://formspree.io/f/YOUR_FORM_ID" method="POST"&gt; mit FormField für jedes Feld, Checkbox für DSGVO (name="gdpr", required), Button (variant='primary', type='submit', loading={loading})
  Tailwind: max-w-2xl mx-auto
  Output: Voll funktionales Contact-Formular mit Formspree-Integration und DSGVO-Checkbox

═══ BLOCK C: ORGANISM COMPONENTS — PAGE STRUCTURES ═══

ULTRATHINK-TASK 8-1: Header &amp; Footer (Tasks 8, 9)

Datei: /components/layout/Header.tsx (use client)
  Props: {}
  State: { mobileMenuOpen: boolean }
  Render: &lt;header className="sticky top-0 z-50 bg-white border-b border-gray-200"&gt;
  — Desktop Nav: &lt;nav className="hidden md:flex gap-8"&gt; mit NavLinks für Home, Services, Blog, About, Contact
  — Mobile Hamburger: &lt;button className="md:hidden"&gt; mit 3-Zeilen-Icon, onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
  — Logo: Text oder Image (nutze vorhandenes Logo wenn verfügbar)
  — CTA Button: &lt;Button variant='primary'&gt;Kontakt&lt;/Button&gt;
  Tailwind: sticky top-0 z-50, flex items-center justify-between, py-4 px-6
  Output: Responsive Header mit Mobile-Menü-Trigger

Datei: /components/layout/Footer.tsx (Server Component)
  Props: {}
  Render: &lt;footer className="bg-gray-900 text-white py-16"&gt; mit 4-Column Grid:
  — Spalte 1: Firmeninfo (Logo, kurze Beschreibung, Kontakt-Info: Email, Phone)
  — Spalte 2: Leistungen (Links zu Services)
  — Spalte 3: Unternehmen (Links zu About, Team, Blog)
  — Spalte 4: Rechtliches (Links zu Impressum, Datenschutz, AGB)
  — Bottom: Copyright-Text mit dynamischem Jahr, Sekundär-Navigation
  Tailwind: bg-gray-900, text-white, grid-cols-4 responsive, gap-12
  Output: Vollständiger Footer mit allen Link-Gruppen

ULTRATHINK-TASK 9: MOBILE NAVIGATION &amp; PAGE SECTIONS (Tasks 10, 11)

Datei: /components/layout/MobileNav.tsx (use client)
  Props: { isOpen: boolean, onClose: () => void }
  Render: &lt;div className={isOpen ? "fixed inset-0 z-40 bg-black/50" : "hidden"}&gt; mit &lt;nav className="fixed left-0 top-0 h-full w-64 bg-white"&gt;
  — Close Button: &lt;button onClick={onClose}&gt; mit X-Icon
  — All NavLinks als MobileNavItems mit Accordion für Untermenüs
  — CTA Button: &lt;Button variant='primary' className="w-full mt-6"&gt;Kontakt&lt;/Button&gt;
  Tailwind: fixed, inset-0, z-40, bg-black/50 für Overlay, w-64 für Drawer
  Output: Overlay-basierte Mobile-Navigation

Datei: /components/sections/HeroSection.tsx (Server Component)
  Props: { title?: string, subtitle?: string, ctaText?: string, ctaHref?: string, backgroundImage?: string }
  Render: &lt;section className="relative py-32 bg-gradient-to-r from-blue-600 to-blue-800 text-white"&gt;
  — Container mit Heading (variant='h1', text: title || "Willkommen"), Paragraph (size='lg', text: subtitle), Button (variant='primary', text: ctaText || "Jetzt anfragen")
  Tailwind: py-32, bg-gradient-to-r from-blue-600 to-blue-800, text-white, relative
  Output: Eye-catching Hero mit CTA

Datei: /components/sections/ServiceGrid.tsx (Server Component)
  Props: { limit?: number }
  Render: Nutze getServices() Getter um Services zu laden, limit anwenden, dann &lt;Grid columns={3} responsive&gt; mit ServiceCards
  Output: Dynamische Service-Anzeige

Datei: /components/sections/TestimonialSlider.tsx (Server Component)
  Props: { testimonials?: Array&lt;...&gt; }
  Render: Platzhalter für Karussell-Logik (Phase 5), zeige vorerst 3 statische TestimonialCards in &lt;Grid columns={1}&gt;
  Output: Testimonial-Section mit Platzhalter

Datei: /components/sections/BlogPreview.tsx (Server Component)
  Props: { limit?: number }
  Render: Nutze getBlogPosts() Getter, limit=3 default, &lt;Grid columns={3} responsive&gt; mit BlogCards
  Output: Homepage-Blog-Section

Datei: /components/sections/FAQSection.tsx (use client)
  Props: { faqs?: Array&lt;{question: string, answer: string}&gt; }
  State: { openIndex: number | null }
  Render: &lt;Section&gt; mit Heading, dann &lt;div&gt; mit FAQ-Accordion-Items
  Output: Aufklappbar FAQ-Sektion

Datei: /components/sections/CTASection.tsx (Server Component)
  Props: { heading?: string, text?: string, buttonText?: string, buttonHref?: string, variant?: 'blue'|'gray' }
  Render: &lt;Section spacing='lg' background={variant === 'blue' ? 'blue' : 'gray'}&gt; mit Heading, Paragraph, Button
  Tailwind: text-center, max-w-2xl mx-auto
  Output: Call-to-Action Banner-Sektion

═══ BLOCK D: INTEGRATION &amp; VALIDATION ═══

ULTRATHINK-TASK 10: PAGE COMPOSITION

Updatet JEDE bestehende Route:
  — /: HeroSection + ServiceGrid + TestimonialSlider + BlogPreview + CTASection
  — /services: Heading + ServiceGrid (limit=null für alle)
  — /services/[slug]: Service-Detail Layout mit Heading, Image-Platzhalter, Content aus Getter, RelatedServices (Grid von 3 verwandten)
  — /blog: Heading + BlogPreview (limit=null)
  — /blog/[slug]: BlogPost-Detail mit Heading, Content, Author-Info, RelatedPosts
  — /about: HeroSection (custom) + TeamGrid (Team-Cards) + CTASection
  — /contact: Heading + ContactForm + CTASection

ULTRATHINK-TASK 11: LAYOUT INJECTION

Root Layout (app/layout.tsx): Modifiziere &lt;body&gt; um Header und Footer einzubinden:
  — &lt;Header /&gt; (muss state für mobileMenuOpen haben, also in Client-Wrapper)
  — {children}
  — &lt;Footer /&gt;
  ACHTUNG: Bestehenden Layout-Code NICHT zerstören, nur Header/Footer hinzufügen

ULTRATHINK-TASK 12: CONSISTENCY AUDIT

Checkliste:
  □ Alle Komponenten nutzen Tailwind aus derselben Palette (Farben: blue-600, gray-900, etc.)
  □ Alle Text-Abstände (gap-4, gap-6, gap-12) konsistent
  □ Border-Radius: rounded-lg überall, wo Card vorhanden
  □ Keine Komponente hat überflüssiges "use client"
  □ Server Components sind Standard, nur Forms/Navigation/Interactive sind "use client"
  □ Alle Props sind typsicher (TypeScript strict)
  □ Keine bestehenden Komponenten wurden überschrieben

═══ ATOMIC VALIDATION ═══

Führe aus:
  — npm run build: Keine Fehler, alle 50+ Komponenten müssen compilieren
  — tsc: Strikte Typen, keine impliziten any
  — npm run lint: ESLint-Clean
  — Komponenten-Zählung: &gt;= 50 Komponenten-Dateien
  — Visuelle Inspektion: Alle Home-Page-Sections rendert echte Daten, responsive Design funktioniert auf Mobile/Tablet/Desktop

═══ SELF-OPTIMIZING LOOP &amp; HANDOFF ═══

Nach Abschluss:
  — Updater .ai-expansion-context.md: "Phase 3 COMPLETE: 50+ komponenten erstellt, alle Seiten mit Komponenten bestückt"
  — Updater .expansion-state.md: Markiere PHASE-3 als done, prüfe Abhängigkeiten für Phase 4
  — Code ist SSOT: Alle UI-Struktur lebt in /components, keine Duplikate

═══ COMPLIANCE CHECKLIST ═══

□ Text-Komponenten (Heading, Paragraph, Badge, Label) existieren und rendern
□ Interactive Atoms (Button, Input, Textarea, Select, Checkbox) sind "use client" und funktional
□ Visual Atoms (Icon, Avatar, Divider, Skeleton, Spinner) existieren
□ Layout Atoms (Container, Section, Grid, Stack) strukturieren Content
□ ServiceCard importiert und rendert echte Service-Daten
□ BlogCard importiert und rendert echte Blog-Daten
□ TeamCard importiert und rendert echte Team-Daten
□ TestimonialCard rendert Testimonial-Struktur mit Sternen
□ NavLink nutzt usePathname() für active-State
□ MobileNavItem unterstützt Accordion-Submenüs
□ BreadcrumbItem existiert (vorbereitet für Phase 4)
□ FooterLinkGroup strukturiert Footer-Links
□ FormField wrappet Label + Input + Error
□ FormGroup gruppiert mehrere FormFields
□ ContactForm ist vollständig mit Formspree-Integration und DSGVO-Checkbox
□ Header ist sticky, responsive, hat Mobile-Hamburger
□ Footer hat 4-Column-Grid, Copyright mit dynamischem Jahr, Sekundär-Nav
□ MobileNav ist Overlay mit Close-Button und voller Navigation
□ HeroSection hat Gradient-Background, Heading, CTA
□ ServiceGrid nutzt getServices() Getter und rendert alle Services
□ TestimonialSlider zeigt mindestens 3 Cards (Platzhalter für Karussell)
□ BlogPreview zeigt letzte 3 Posts
□ FAQSection ist interaktiv mit useState für open/close
□ CTASection hat Varianten (blue/gray)
□ Root Layout injiziert Header/Footer OHNE bestehenden Code zu zerstören
□ npm run build kompiliert ohne Fehler
□ Alle 50+ Komponenten existieren
□ Responsive Design funktioniert auf allen Screen-Sizes
□ Keine "use client" Komponenten ohne Notwendigkeit
□ TypeScript strict mode, keine impliziten any
□ ESLint clean

═══ PHASE-3-ABSCHLUSS ═══

Mit Phase 3 ist das Projekt von einer abstrakten Struktur (Phase 1-2) zu einer visuellen, funktionalen Komponenten-Bibliothek übergegangen. Die Website hat jetzt ein vollständiges UI-Gerüst mit 50+ echten, implementierten Komponenten, alle mit real funktionierenden Tailwind-Klassen, Server/Client-Grenzen, und integration mit Phase-2-Daten.

Phase 4 wird sich auf Navigation, Wayfinding, Breadcrumbs, und SEO-Strukturierung konzentrieren. Phase 5 wird Interaktivität (Karusselle, Filter, Suche) hinzufügen.