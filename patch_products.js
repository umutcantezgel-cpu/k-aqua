const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'components', 'sections');

const replacements = {
  'ProductsApplicationAreas.tsx': [
    { from: '"Deployment Verticals."', to: 't(\'ApplicationAreas.title\')' },
    { from: '>Deployment Verticals.<', to: '>{t(\'ApplicationAreas.title\')}<' },
    { from: 'K-Aqua is not a singular solution; it is a versatile platform engineered for diverse, highly-demanding fluid transport scenarios across residential, commercial, and industrial sectors.', to: '{t(\'ApplicationAreas.subtitle\')}' },
    { from: 'title: "Potable Water Networks", desc: "Absolute hygiene for hot and cold drinking water."', to: 'title: t(\'ApplicationAreas.cards.potable.title\'), desc: t(\'ApplicationAreas.cards.potable.desc\')' },
    { from: 'title: "Climate Control Systems", desc: "Seamless integration with heating and chilling networks."', to: 'title: t(\'ApplicationAreas.cards.climate.title\'), desc: t(\'ApplicationAreas.cards.climate.desc\')' },
    { from: 'title: "Industrial Fluids", desc: "High chemical resistance for aggressive liquid transport."', to: 'title: t(\'ApplicationAreas.cards.industrial.title\'), desc: t(\'ApplicationAreas.cards.industrial.desc\')' },
    { from: 'title: "Agricultural Irrigation", desc: "Durable deployment in high UV and pressure environments."', to: 'title: t(\'ApplicationAreas.cards.agricultural.title\'), desc: t(\'ApplicationAreas.cards.agricultural.desc\')' },
    { from: 'title: "Compressed Air", desc: "Leak-proof infrastructure for pneumatic applications."', to: 'title: t(\'ApplicationAreas.cards.compressed.title\'), desc: t(\'ApplicationAreas.cards.compressed.desc\')' },
    { from: 'title: "Shipbuilding", desc: "Marine-grade resilience against saline environments."', to: 'title: t(\'ApplicationAreas.cards.shipbuilding.title\'), desc: t(\'ApplicationAreas.cards.shipbuilding.desc\')' }
  ],
  'ProductsCTA.tsx': [
    { from: '>Initialize Deployment.<', to: '>{t(\'CTA.title\')}<' },
    { from: 'Engage with our technical architects to specify K-Aqua for your next infrastructure project. We provide comprehensive CAD libraries and pressure drop calculations.', to: '{t(\'CTA.subtitle\')}' },
    { from: '>Download Technical Manual<', to: '>{t(\'CTA.download\')}<' },
    { from: '>Contact Engineering<', to: '>{t(\'CTA.contact\')}<' },
    { from: '>System Status:<', to: '>{t(\'CTA.systemStatus\')}<' },
    { from: '>Operational<', to: '>{t(\'CTA.operational\')}<' }
  ],
  'ProductsCompetitiveAdvantage.tsx': [
    { from: '>The Architecture of Superiority.<', to: '>{t(\'CompetitiveAdvantage.title\')}<' },
    { from: 'Why replace legacy infrastructure with K-Aqua\'s advanced PP-R/RCT polymer matrix?', to: '{t(\'CompetitiveAdvantage.subtitle\')}' },
    { from: 'title: "Absolute Zero Corrosion", desc: "Unlike metal pipes, PP-R is completely immune to galvanic corrosion, rust, and internal scaling."', to: 'title: t(\'CompetitiveAdvantage.advantages.corrosion.title\'), desc: t(\'CompetitiveAdvantage.advantages.corrosion.desc\')' },
    { from: 'title: "Thermal Acoustic Insulation", desc: "The polymer structure absorbs acoustic vibrations, drastically reducing water hammer and flow noise."', to: 'title: t(\'CompetitiveAdvantage.advantages.thermal.title\'), desc: t(\'CompetitiveAdvantage.advantages.thermal.desc\')' },
    { from: 'title: "Chemical Resilience", desc: "Engineered to withstand highly aggressive pH levels and industrial chemical compounds."', to: 'title: t(\'CompetitiveAdvantage.advantages.chemical.title\'), desc: t(\'CompetitiveAdvantage.advantages.chemical.desc\')' },
    { from: 'title: "Kinetic Flexibility", desc: "High impact strength combined with elasticity allows the system to absorb seismic shocks."', to: 'title: t(\'CompetitiveAdvantage.advantages.kinetic.title\'), desc: t(\'CompetitiveAdvantage.advantages.kinetic.desc\')' }
  ],
  'ProductsFAQSection.tsx': [
    { from: '>Technical Inquiries.<', to: '>{t(\'FAQ.title\')}<' },
    { from: 'Comprehensive answers for engineers, architects, and installers specifying K-Aqua systems.', to: '{t(\'FAQ.subtitle\')}' },
    { from: 'q: "Is K-Aqua suitable for outdoor installations?", a: "Standard PP-R pipes require UV protection when installed outdoors. We recommend our specialized UV-stabilized composite pipes or applying adequate protective sheathing against direct sunlight."', to: 'q: t(\'FAQ.questions.outdoor.q\'), a: t(\'FAQ.questions.outdoor.a\')' },
    { from: 'q: "What is the maximum operational temperature?", a: "Our PP-RCT systems can continuously operate at 70°C for 50 years, with short-term peak resistance up to 90°C according to DIN EN ISO 15874."', to: 'q: t(\'FAQ.questions.temp.q\'), a: t(\'FAQ.questions.temp.a\')' },
    { from: 'q: "How does the fusion welding process work?", a: "It utilizes polyfusion. The pipe and fitting are heated simultaneously to 260°C and joined. Within seconds, they fuse into a single, seamless, and completely leak-proof homogeneous material."', to: 'q: t(\'FAQ.questions.fusion.q\'), a: t(\'FAQ.questions.fusion.a\')' },
    { from: 'q: "Are the pipes safe for drinking water?", a: "Absolutely. K-Aqua systems are non-toxic, structurally inert, and comply with all major international drinking water standards (e.g., WRAS, DVGW)."', to: 'q: t(\'FAQ.questions.safety.q\'), a: t(\'FAQ.questions.safety.a\')' }
  ],
  'ProductsFittingsArsenal.tsx': [
    { from: '>The Arsenal.<', to: '>{t(\'FittingsArsenal.title\')}<' },
    { from: 'A system is only as formidable as its weakest link. K-Aqua eliminates weak links entirely. Our fittings are precision-engineered in sizes from ', to: '{t(\'FittingsArsenal.subtitle1\')}' },
    { from: '>20 mm to 315 mm<', to: '>{t(\'FittingsArsenal.subtitle2\')}<' },
    { from: ', creating an impenetrable network of homogeneous connections.', to: '{t(\'FittingsArsenal.subtitle3\')}' },
    { from: 'Every single accessory is manufactured to interlock flawlessly with the core piping system. From the exact calibration of the welding saddles to the ergonomic superiority of our cutting tools, the ecosystem is uncompromising.', to: '{t(\'FittingsArsenal.footer\')}' },
    { from: 'title: "Premium Valves", desc: "Zero-leakage control mechanisms."', to: 'title: t(\'FittingsArsenal.items.valves.title\'), desc: t(\'FittingsArsenal.items.valves.desc\')' },
    { from: 'title: "High-Pressure Unions", desc: "Flawless mechanical junctions."', to: 'title: t(\'FittingsArsenal.items.unions.title\'), desc: t(\'FittingsArsenal.items.unions.desc\')' },
    { from: 'title: "Cutting Tools", desc: "Micrometer-precision pipe severing."', to: 'title: t(\'FittingsArsenal.items.cutting.title\'), desc: t(\'FittingsArsenal.items.cutting.desc\')' },
    { from: 'title: "Welding Devices", desc: "Thermal fusion equipment for absolute homogenization."', to: 'title: t(\'FittingsArsenal.items.welding.title\'), desc: t(\'FittingsArsenal.items.welding.desc\')' }
  ],
  'ProductsHeroSection.tsx': [
    { from: '>System Architecture<', to: '>{t(\'Hero.badge\')}<' },
    { from: '>PP-R & PP-RCT<', to: '>{t(\'Hero.title\')}<' },
    { from: 'The apex of sanitary engineering. Forged for pure drinkable hot and cold water, our piping systems redefine structural integrity in the modern construction industry.', to: '{t(\'Hero.subtitle\')}' },
    { from: '>Initialize System<', to: '>{t(\'Hero.button\')}<' }
  ],
  'ProductsInstallationProcess.tsx': [
    { from: '>Deployment Protocol.<', to: '>{t(\'Installation.title\')}<' },
    { from: 'The polyfusion welding process is fast, clean, and guarantees a 100% leak-proof homogeneous connection. No glues, no threading, no compromises.', to: '{t(\'Installation.subtitle\')}' },
    { from: 'title: "Calibration", desc: "Sever the pipe at a perfect 90-degree angle. Precision is paramount for an optimal fusion depth."', to: 'title: t(\'Installation.steps.calibration.title\'), desc: t(\'Installation.steps.calibration.desc\')' },
    { from: 'title: "Thermal Activation", desc: "Insert pipe and fitting into the 260°C welding matrix. Wait for the molecular structure to destabilize."', to: 'title: t(\'Installation.steps.thermal.title\'), desc: t(\'Installation.steps.thermal.desc\')' },
    { from: 'title: "Homogenization", desc: "Connect the components immediately. The polymers cross-link, creating a joint stronger than the pipe itself."', to: 'title: t(\'Installation.steps.homogenization.title\'), desc: t(\'Installation.steps.homogenization.desc\')' }
  ],
  'ProductsMaterialScience.tsx': [
    { from: '>Material Science.<', to: '>{t(\'MaterialScience.title\')}<' },
    { from: 'We don\'t just extrude plastic; we engineer molecular structures.', to: '{t(\'MaterialScience.subtitle\')}' },
    { from: 'title: "Pure PP-R", desc: "Type 3 Polypropylene Random Copolymer. High molecular weight, extreme thermal stability, and absolute hygienic safety."', to: 'title: t(\'MaterialScience.materials.ppr.title\'), desc: t(\'MaterialScience.materials.ppr.desc\')' },
    { from: 'title: "Advanced PP-RCT", desc: "Type 4 modified crystallinity. Enables thinner pipe walls, increasing flow rate by up to 20% while maintaining immense pressure thresholds."', to: 'title: t(\'MaterialScience.materials.pprct.title\'), desc: t(\'MaterialScience.materials.pprct.desc\')' },
    { from: 'title: "Glass Fiber Composite", desc: "A tri-layer co-extrusion. The middle layer is fortified with glass fibers, restricting thermal expansion by 75% compared to standard plastics."', to: 'title: t(\'MaterialScience.materials.glass.title\'), desc: t(\'MaterialScience.materials.glass.desc\')' }
  ],
  'ProductsQualityAssurance.tsx': [
    { from: '>Quality Assurance.<', to: '>{t(\'QualityAssurance.title\')}<' },
    { from: 'Every millimeter of K-Aqua PP-R and PP-RCT pipe is subjected to rigorous internal and third-party testing protocols. We do not rely on sampling alone; our continuous extrusion monitoring ensures absolute dimensional consistency, structural integrity, and flawless surface smoothness. The result is an engineered lifespan exceeding 50 years under continuous operational stress.', to: '{t(\'QualityAssurance.subtitle\')}' },
    { from: 'title: "Dimensional Calibration", desc: "Laser-guided micrometers ensure wall thickness and diameter remain within ultra-tight tolerances."', to: 'title: t(\'QualityAssurance.certs.dimensional.title\'), desc: t(\'QualityAssurance.certs.dimensional.desc\')' },
    { from: 'title: "Hydrostatic Pressure Testing", desc: "Accelerated aging tests under extreme pressure and temperature profiles validate 50-year longevity."', to: 'title: t(\'QualityAssurance.certs.hydrostatic.title\'), desc: t(\'QualityAssurance.certs.hydrostatic.desc\')' },
    { from: 'title: "Impact Resistance", desc: "Charpy impact testing at sub-zero temperatures ensures the matrix won\'t fracture during winter installations."', to: 'title: t(\'QualityAssurance.certs.impact.title\'), desc: t(\'QualityAssurance.certs.impact.desc\')' },
    { from: 'title: "Hygienic Certification", desc: "Continuous lab analysis confirms zero leaching of toxic compounds into potable water streams."', to: 'title: t(\'QualityAssurance.certs.hygienic.title\'), desc: t(\'QualityAssurance.certs.hygienic.desc\')' }
  ],
  'ProductsSDRRatings.tsx': [
    { from: '>Dimensional Scaling.<', to: '>{t(\'SDRRatings.title\')}<' },
    { from: 'We do not compromise on scale. Depending on the precise pipe type and application requirements, our dimensions start from a highly agile ', to: '{t(\'SDRRatings.subtitle1\')}' },
    { from: '>20 mm<', to: '>{t(\'SDRRatings.subtitle2\')}<' },
    { from: ' and scale up to a colossal ', to: '{t(\'SDRRatings.subtitle3\')}' },
    { from: '>630 mm<', to: '>{t(\'SDRRatings.subtitle4\')}<' },
    { from: ' for massive industrial fluid dynamics.', to: '{t(\'SDRRatings.subtitle5\')}' },
    { from: 'sdr: "SDR 6", desc: "Extreme Pressure. Maximum wall thickness for hostile operational environments.", pressure: "PN 20"', to: 'sdr: t(\'SDRRatings.ratings.sdr6.sdr\'), desc: t(\'SDRRatings.ratings.sdr6.desc\'), pressure: t(\'SDRRatings.ratings.sdr6.pressure\')' },
    { from: 'sdr: "SDR 7.4", desc: "High Pressure. Optimal balance for commercial hot water grids.", pressure: "PN 16"', to: 'sdr: t(\'SDRRatings.ratings.sdr7.sdr\'), desc: t(\'SDRRatings.ratings.sdr7.desc\'), pressure: t(\'SDRRatings.ratings.sdr7.pressure\')' },
    { from: 'sdr: "SDR 9", desc: "Elevated Flow. Reinforced structure with optimized internal diameter.", pressure: "PN 12.5"', to: 'sdr: t(\'SDRRatings.ratings.sdr9.sdr\'), desc: t(\'SDRRatings.ratings.sdr9.desc\'), pressure: t(\'SDRRatings.ratings.sdr9.pressure\')' },
    { from: 'sdr: "SDR 11", desc: "Standard Distribution. The gold standard for residential cold/hot water.", pressure: "PN 10"', to: 'sdr: t(\'SDRRatings.ratings.sdr11.sdr\'), desc: t(\'SDRRatings.ratings.sdr11.desc\'), pressure: t(\'SDRRatings.ratings.sdr11.pressure\')' },
    { from: 'sdr: "SDR 17", desc: "Maximum Volume. Thin-walled architecture for low-pressure high-yield flow.", pressure: "PN 6"', to: 'sdr: t(\'SDRRatings.ratings.sdr17.sdr\'), desc: t(\'SDRRatings.ratings.sdr17.desc\'), pressure: t(\'SDRRatings.ratings.sdr17.pressure\')' }
  ],
  'ProductsSustainability.tsx': [
    { from: '>Ecological Responsibility.<', to: '>{t(\'Sustainability.title\')}<' },
    { from: 'Sustainability in industrial engineering requires a multi-faceted approach: minimizing embodied energy during production, maximizing operational efficiency, and ensuring end-of-life recyclability.', to: '{t(\'Sustainability.p1\')}' },
    { from: 'K-Aqua PP-R/RCT systems demand significantly less energy to manufacture and transport compared to copper or steel alternatives. Operationally, the exceptionally smooth inner surface (roughness of 0.007 mm) reduces fluid friction, lowering the energy required by circulatory pumps. Furthermore, the inherent thermal insulation reduces heat loss in hot water networks, conserving immense amounts of energy over the system\'s 50-year lifecycle.', to: '{t(\'Sustainability.p2\')}' },
    { from: 'At the end of its service life, the polypropylene matrix is 100% recyclable, capable of being repurposed into secondary industrial applications without chemical degradation.', to: '{t(\'Sustainability.p3\')}' },
    { from: '>Embodied Energy (MJ/kg)<', to: '>{t(\'Sustainability.energy\')}<' },
    { from: '>Low<', to: '>{t(\'Sustainability.low\')}<' },
    { from: '>Heat Loss Profile<', to: '>{t(\'Sustainability.heat\')}<' },
    { from: '>Minimal<', to: '>{t(\'Sustainability.minimal\')}<' },
    { from: '>Material Recyclability<', to: '>{t(\'Sustainability.recyclability\')}<' }
  ],
  'ProductsTechnicalSpecifications.tsx': [
    { from: '>Technical Specifications.<', to: '>{t(\'TechnicalSpecs.title\')}<' },
    { from: 'Rigorous engineering requires precise data. The thermal, mechanical, and physical properties of the K-Aqua piping systems are thoroughly tested and documented according to international ISO and DIN standards.', to: '{t(\'TechnicalSpecs.subtitle\')}' },
    { from: '>Property<', to: '>{t(\'TechnicalSpecs.headers.property\')}<' },
    { from: '>Value<', to: '>{t(\'TechnicalSpecs.headers.value\')}<' },
    { from: '>Test Method<', to: '>{t(\'TechnicalSpecs.headers.method\')}<' },
    { from: 'property: "Density", value: "0.895 - 0.905 g/cm³", method: "ISO 1183"', to: 'property: t(\'TechnicalSpecs.specs.density.property\'), value: t(\'TechnicalSpecs.specs.density.value\'), method: t(\'TechnicalSpecs.specs.density.method\')' },
    { from: 'property: "Melt Flow Rate (230°C/2.16kg)", value: "0.2 - 0.5 g/10min", method: "ISO 1133"', to: 'property: t(\'TechnicalSpecs.specs.melt.property\'), value: t(\'TechnicalSpecs.specs.melt.value\'), method: t(\'TechnicalSpecs.specs.melt.method\')' },
    { from: 'property: "Thermal Conductivity at 20°C", value: "0.24 W/(m·K)", method: "DIN 52612"', to: 'property: t(\'TechnicalSpecs.specs.thermal.property\'), value: t(\'TechnicalSpecs.specs.thermal.value\'), method: t(\'TechnicalSpecs.specs.thermal.method\')' },
    { from: 'property: "Coefficient of Linear Thermal Expansion", value: "0.15 mm/(m·K)", method: "DIN 53752"', to: 'property: t(\'TechnicalSpecs.specs.expansion.property\'), value: t(\'TechnicalSpecs.specs.expansion.value\'), method: t(\'TechnicalSpecs.specs.expansion.method\')' },
    { from: 'property: "Modulus of Elasticity", value: "800 MPa", method: "ISO 178"', to: 'property: t(\'TechnicalSpecs.specs.modulus.property\'), value: t(\'TechnicalSpecs.specs.modulus.value\'), method: t(\'TechnicalSpecs.specs.modulus.method\')' },
    { from: 'property: "Yield Stress", value: "25 MPa", method: "ISO 527-2"', to: 'property: t(\'TechnicalSpecs.specs.yield.property\'), value: t(\'TechnicalSpecs.specs.yield.value\'), method: t(\'TechnicalSpecs.specs.yield.method\')' }
  ],
  'ProductsTechnologyCore.tsx': [
    { from: '>Molecular<', to: '>{t(\'TechnologyCore.title1\')}<' },
    { from: '>Dominance.<', to: '>{t(\'TechnologyCore.title2\')}<' },
    { from: '>Mono-layer & Multi-layer Glass Fiber Reinforced Structures.<', to: '>{t(\'TechnologyCore.subtitle\')}<' },
    { from: 'The K-Aqua PP-R (Polypropylene Random Copolymer) and PP-RCT (Polypropylene Random Copolymer with modified crystallinity and Temperature resistance) piping architectures represent a paradigm shift in fluid transport. Designed explicitly for extreme thermal stress and rigorous sanitary demands, the system guarantees zero toxicity, preventing scaling, corrosion, and bacterial colonization.', to: '{t(\'TechnologyCore.p1\')}' },
    { from: 'By integrating an advanced multi-layer extrusion process, we embed high-tensile glass fibers directly into the polymer matrix. This composite architecture drastically minimizes thermal expansion while exponentially increasing the pressure tolerance at elevated temperatures. The result is a network that performs flawlessly under the most hostile industrial and residential conditions, ensuring drinkable water remains absolutely pure from source to tap.', to: '{t(\'TechnologyCore.p2\')}' },
    { from: 'When you deploy K-Aqua, you are not just installing pipes. You are initializing a permanent, leak-proof, homogeneous vascular system for your infrastructure. The fusion welding process melts the pipe and fitting into a single, continuous molecular chain, eliminating the mechanical failure points inherent in legacy metal or glued PVC systems.', to: '{t(\'TechnologyCore.p3\')}' },
    { from: '>Polymatrix / Visualization<', to: '>{t(\'TechnologyCore.badge\')}<' }
  ]
};

Object.entries(replacements).forEach(([file, rps]) => {
  const filePath = path.join(componentsDir, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Add import if not present
    if (!content.includes('useTranslations')) {
      content = content.replace('\'react\';', '\'react\';\nimport { useTranslations } from \'next-intl\';');
    }
    
    // Add hook if not present
    if (!content.includes('useTranslations(')) {
      content = content.replace(/export default function (\w+)\(([^)]*)\) \{/, 'export default function $1($2) {\n  const t = useTranslations(\'Products\');\n');
    }

    // Replace strings
    rps.forEach(rp => {
      content = content.split(rp.from).join(rp.to);
    });

    fs.writeFileSync(filePath, content);
    console.log(`Updated ${file}`);
  }
});
