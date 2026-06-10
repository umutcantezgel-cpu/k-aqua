import os
import json
import re

components_dir = "components/sections"
files = [
    "SolutionsApplications.tsx",
    "SolutionsCertifications.tsx",
    "SolutionsComparative.tsx",
    "SolutionsCtaSection.tsx",
    "SolutionsDurability.tsx",
    "SolutionsEconomicROI.tsx",
    "SolutionsEnvironment.tsx",
    "SolutionsHealthSafety.tsx",
    "SolutionsHeroSection.tsx",
    "SolutionsMaterialScience.tsx",
    "SolutionsRecyclability.tsx"
]

en_json = {
  "Hero": {
    "title1": "Sustainable",
    "title2": "PP-R Pipe",
    "title3": "Systems",
    "subtitle": "Environmentally responsible plumbing solutions engineered for the future. We are committed to reducing atmospheric pollution, conserving resources, and manufacturing superior thermoplastic polymers that outperform traditional materials."
  },
  "Applications": {
    "title": "Industry Applications",
    "subtitle": "A versatile engineering solution deployed across multiple sectors, engineered to solve specific fluid transport challenges.",
    "commercialTitle": "Commercial Plumbing",
    "commercialDesc": "Ideal for high-rise commercial buildings, hospitals, and hotels where reliable potable water distribution and pressure consistency are strictly mandated. Zero corrosion guarantees clean water delivery for decades.",
    "hvacTitle": "HVAC Chilled Water",
    "hvacDesc": "Highly efficient for air conditioning and chilled water systems. The low thermal conductivity of PP-R minimizes heat gain, preventing condensation buildup and maintaining precise temperature control.",
    "heatingTitle": "Radiator Heating",
    "heatingDesc": "Engineered to handle continuous high-temperature stress, making it the premier choice for central radiator heating networks and underfloor heating applications.",
    "industrialTitle": "Industrial Fluid Transport",
    "industrialDesc": "Exceptional chemical resistance allows for the safe conveyance of aggressive industrial fluids, compressed air, and manufacturing chemicals without degrading the pipe matrix.",
    "agricultureTitle": "Agricultural Irrigation",
    "agricultureDesc": "Durable and UV-resistant options available for large-scale agricultural irrigation, offering high impact resistance against environmental wear and extreme weather conditions."
  },
  "Certifications": {
    "title": "Global Certifications",
    "subtitle": "Engineered in Germany, trusted globally. Our products are rigorously tested to meet and exceed international quality assurance standards.",
    "dinTitle": "DIN 8077 / DIN 8078",
    "dinDesc": "German Institute for Standardization compliance for polypropylene pipe dimensions and quality testing.",
    "isoTitle": "ISO 9001:2015",
    "isoDesc": "Internationally recognized standard for robust Quality Management Systems in manufacturing.",
    "dvgwTitle": "DVGW Certified",
    "dvgwDesc": "Approved for safe use in drinking water installations by the German Technical and Scientific Association for Gas and Water.",
    "skzTitle": "SKZ Testing",
    "skzDesc": "Rigorous third-party testing and quality surveillance by the German Plastics Center."
  },
  "Comparative": {
    "title": "Material Comparison",
    "subtitle": "When evaluated against traditional plumbing materials, K-Aqua PP-R demonstrates superior capabilities in preventing corrosion, reducing scale build-up, and ensuring long-term system integrity.",
    "perfFeature": "Performance Feature",
    "kAqua": "K-Aqua PP-R",
    "copper": "Copper",
    "steel": "Galvanized Steel",
    "pvc": "PVC / CPVC",
    "f1": "Corrosion Resistant",
    "f2": "Scale Build-Up Prevention",
    "f3": "Thermal Insulation (Low Heat Loss)",
    "f4": "Acoustic Dampening (Low Noise)",
    "f5": "Toxic-Free Installation (No Glues/Solder)",
    "f6": "High Impact Resistance"
  },
  "Cta": {
    "title": "Specify K-Aqua for Your Next Project",
    "subtitle": "Download our comprehensive technical documentation, including CAD files, pressure specifications, and global certification documents.",
    "button1": "Download Technical Specs",
    "button2": "Contact Engineering Team"
  },
  "Durability": {
    "title": "Uncompromising Durability",
    "subtitle": "Built to outlast the buildings they inhabit. Our systems provide peace of mind through exceptional engineering and material science.",
    "lifespanTitle": "50+ Year Lifespan",
    "lifespanDesc": "Engineered for longevity, K-Aqua PP-R piping systems are certified to operate continuously for over 50 years under standard operating pressures and temperatures, eliminating the need for periodic system overhauls.",
    "pressureTitle": "High Pressure Resistance",
    "pressureDesc": "Our homogeneous fusion joints and structurally reinforced pipe walls allow the system to withstand severe pressure fluctuations and water hammer effects, surpassing the stress tolerances of traditional materials.",
    "tempTitle": "Temperature Extremes",
    "tempDesc": "Designed to operate flawlessly across a broad thermal spectrum. From deep chilling applications to high-temperature radiator heating networks, the material maintains its structural integrity without warping or degrading."
  },
  "EconomicROI": {
    "title": "Economic ROI",
    "subtitle": "Beyond engineering superiority, K-Aqua delivers profound economic advantages through rapid installation, energy efficiency, and eliminated maintenance.",
    "fasterTitle": "Faster Installation",
    "fasterDesc": "Thermal fusion joining drastically reduces labor time compared to welding steel or soldering copper, accelerating project timelines and reducing labor costs.",
    "maintenanceTitle": "Maintenance Costs",
    "maintenanceDesc": "Scale-free and corrosion-resistant properties mean zero routine internal maintenance, significantly lowering operational expenditures over the building's lifecycle.",
    "heatTitle": "Less Heat Loss",
    "heatDesc": "Superior thermal insulation retains heat in hot water lines much more effectively than metal piping, leading to measurable energy efficiency and utility savings."
  },
  "Environment": {
    "title": "Environmental Integrity",
    "p1": "Before modern polypropylene extraction, propylene and ethylene waste gases from petroleum processing were simply burned off, releasing significant atmospheric pollution. Today, these gases are upcycled into polypropylene, drastically reducing manufacturing emissions and preventing harmful flares.",
    "p2": "Our manufacturing facilities employ a state-of-the-art closed cooling cycle. This means water is continuously circulated and chilled without discharging into local rivers, streams, or lakes, completely eliminating thermal pollution and wastewater run-off.",
    "p3": "Because K-Aqua PP-R pipes are significantly lighter than metal alternatives, transportation requires less fuel, directly contributing to a significantly reduced carbon footprint from factory to job site.",
    "diagram": "Environmental Process Diagram"
  },
  "HealthSafety": {
    "title": "Health & Hygiene",
    "subtitle": "Setting the international standard for hygienic fluid transport. Our materials prioritize human health and acoustic comfort above all.",
    "potableTitle": "Potable Water Safety",
    "potableDesc": "Manufactured from food-grade plumbing materials, ensuring that drinking water remains completely uncontaminated, tasteless, and odorless from source to tap.",
    "legionellaTitle": "Legionella Resistance",
    "legionellaDesc": "The exceedingly smooth internal surface of PP-R prevents the formation of biofilms and scale, effectively neutralizing the breeding grounds for Legionella and other harmful bacteria.",
    "toxicTitle": "Non-Toxic Architecture",
    "toxicDesc": "Installation relies on heat fusion rather than toxic glues, solvents, or lead-based solders, maintaining absolute chemical purity within the piping network.",
    "acousticTitle": "Acoustic Insulation",
    "acousticDesc": "The inherent density and elasticity of our polymer structure provide exceptional noise reduction, severely dampening flow noise and water hammer for quieter building environments."
  },
  "MaterialScience": {
    "title": "Advanced Material Science",
    "p1": "At the core of our solutions lies Polypropylene Random Copolymer (PP-R/PP-RCT), a sophisticated thermoplastic polymer engineered for exceptional performance. Unlike traditional materials, its unique molecular structure provides outstanding chemical resistance and thermal stability.",
    "p2": "The copolymerization process introduces ethylene into the propylene chain, resulting in a highly flexible yet durable matrix. This prevents internal scaling, maintains a smooth internal surface, and eliminates the risk of heavy metal leaching, ensuring absolute purity in fluid transport.",
    "chemicalTitle": "Chemical Resistance",
    "chemicalDesc": "Highly resistant to acidic and alkaline solutions, operating safely in aggressive environments without degrading or weakening the pipe wall.",
    "thermalTitle": "Thermal Stability",
    "thermalDesc": "Maintains structural integrity across extreme temperature gradients, making it ideal for both high-heat industrial applications and chilled water systems."
  },
  "Recyclability": {
    "title": "Lifecycle & Recyclability",
    "subtitle": "Engineered for a sustainable future, our PP-R systems represent the pinnacle of zero-waste manufacturing and end-of-life material recovery.",
    "recyclableTitle": "100% Recyclable Pipes",
    "recyclableDesc": "K-Aqua PP-R pipes are 100% recyclable at the end of their 50+ year lifespan. Unlike cross-linked plastics (PEX) or composite metals, polypropylene can be melted down and repurposed without complex chemical separation.",
    "resinTitle": "Resin Code 5",
    "resinDesc": "Categorized under Resin Identification Code 5, our materials are highly prized in the secondary recycling market. This high-grade polymer retains significant structural integrity, making it ideal for secondary industrial applications.",
    "zeroWasteTitle": "Zero Waste Manufacturing",
    "zeroWasteDesc": "During the extrusion and injection molding processes, any off-cuts or production scrap are immediately reground and reintroduced into non-critical manufacturing lines, ensuring absolute minimal landfill waste."
  }
}

os.makedirs("messages/en", exist_ok=True)
if os.path.exists("messages/en/Solutions.json"):
    with open("messages/en/Solutions.json", "r") as f:
        existing = json.load(f)
        en_json = {**existing, **en_json}
with open("messages/en/Solutions.json", "w") as f:
    json.dump(en_json, f, indent=2)

def replace_in_file(filename, replacements):
    with open(filename, "r") as f:
        content = f.read()
    
    if "import { useTranslations } from 'next-intl';" not in content:
        content = content.replace("import React", "import { useTranslations } from 'next-intl';\nimport React")
        content = content.replace("export default function ", "export default function ")
        
        # Inject hook
        # find the function body start
        match = re.search(r'export default function (\w+)\(\) {', content)
        if match:
            func_name = match.group(1)
            content = content.replace(f"export default function {func_name}() {{", f"export default function {func_name}() {{\n  const t = useTranslations('Solutions');\n")

    for old, new in replacements.items():
        content = content.replace(old, new)

    with open(filename, "w") as f:
        f.write(content)

# File 1: SolutionsApplications.tsx
replace_in_file(f"{components_dir}/SolutionsApplications.tsx", {
    '"Commercial Plumbing"': 't("Applications.commercialTitle")',
    '"Ideal for high-rise commercial buildings, hospitals, and hotels where reliable potable water distribution and pressure consistency are strictly mandated. Zero corrosion guarantees clean water delivery for decades."': 't("Applications.commercialDesc")',
    '"HVAC Chilled Water"': 't("Applications.hvacTitle")',
    '"Highly efficient for air conditioning and chilled water systems. The low thermal conductivity of PP-R minimizes heat gain, preventing condensation buildup and maintaining precise temperature control."': 't("Applications.hvacDesc")',
    '"Radiator Heating"': 't("Applications.heatingTitle")',
    '"Engineered to handle continuous high-temperature stress, making it the premier choice for central radiator heating networks and underfloor heating applications."': 't("Applications.heatingDesc")',
    '"Industrial Fluid Transport"': 't("Applications.industrialTitle")',
    '"Exceptional chemical resistance allows for the safe conveyance of aggressive industrial fluids, compressed air, and manufacturing chemicals without degrading the pipe matrix."': 't("Applications.industrialDesc")',
    '"Agricultural Irrigation"': 't("Applications.agricultureTitle")',
    '"Durable and UV-resistant options available for large-scale agricultural irrigation, offering high impact resistance against environmental wear and extreme weather conditions."': 't("Applications.agricultureDesc")',
    
    '>\n            Industry Applications\n          </h2>': '>\n            {t("Applications.title")}\n          </h2>',
    '>\n            A versatile engineering solution deployed across multiple sectors, engineered to solve specific fluid transport challenges.\n          </p>': '>\n            {t("Applications.subtitle")}\n          </p>'
})

# File 2: SolutionsCertifications.tsx
replace_in_file(f"{components_dir}/SolutionsCertifications.tsx", {
    '"DIN 8077 / DIN 8078"': 't("Certifications.dinTitle")',
    '"German Institute for Standardization compliance for polypropylene pipe dimensions and quality testing."': 't("Certifications.dinDesc")',
    '"ISO 9001:2015"': 't("Certifications.isoTitle")',
    '"Internationally recognized standard for robust Quality Management Systems in manufacturing."': 't("Certifications.isoDesc")',
    '"DVGW Certified"': 't("Certifications.dvgwTitle")',
    '"Approved for safe use in drinking water installations by the German Technical and Scientific Association for Gas and Water."': 't("Certifications.dvgwDesc")',
    '"SKZ Testing"': 't("Certifications.skzTitle")',
    '"Rigorous third-party testing and quality surveillance by the German Plastics Center."': 't("Certifications.skzDesc")',
    
    '>\n            Global Certifications\n          </h2>': '>\n            {t("Certifications.title")}\n          </h2>',
    '>\n            Engineered in Germany, trusted globally. Our products are rigorously tested to meet and exceed international quality assurance standards.\n          </p>': '>\n            {t("Certifications.subtitle")}\n          </p>'
})

# File 3: SolutionsComparative.tsx
replace_in_file(f"{components_dir}/SolutionsComparative.tsx", {
    '"Corrosion Resistant"': 't("Comparative.f1")',
    '"Scale Build-Up Prevention"': 't("Comparative.f2")',
    '"Thermal Insulation (Low Heat Loss)"': 't("Comparative.f3")',
    '"Acoustic Dampening (Low Noise)"': 't("Comparative.f4")',
    '"Toxic-Free Installation (No Glues/Solder)"': 't("Comparative.f5")',
    '"High Impact Resistance"': 't("Comparative.f6")',
    
    '>\n            Material Comparison\n          </h2>': '>\n            {t("Comparative.title")}\n          </h2>',
    '>\n            When evaluated against traditional plumbing materials, K-Aqua PP-R demonstrates superior capabilities in preventing corrosion, reducing scale build-up, and ensuring long-term system integrity.\n          </p>': '>\n            {t("Comparative.subtitle")}\n          </p>',
    
    '>Performance Feature</th>': '>{t("Comparative.perfFeature")}</th>',
    '>K-Aqua PP-R</th>': '>{t("Comparative.kAqua")}</th>',
    '>Copper</th>': '>{t("Comparative.copper")}</th>',
    '>Galvanized Steel</th>': '>{t("Comparative.steel")}</th>',
    '>PVC / CPVC</th>': '>{t("Comparative.pvc")}</th>'
})

# File 4: SolutionsCtaSection.tsx
replace_in_file(f"{components_dir}/SolutionsCtaSection.tsx", {
    '>\n            Specify K-Aqua for Your Next Project\n          </h2>': '>\n            {t("Cta.title")}\n          </h2>',
    '>\n            Download our comprehensive technical documentation, including CAD files, pressure specifications, and global certification documents.\n          </p>': '>\n            {t("Cta.subtitle")}\n          </p>',
    '>\n                Download Technical Specs\n              </span>': '>\n                {t("Cta.button1")}\n              </span>',
    '>\n              Contact Engineering Team\n            </Link>': '>\n              {t("Cta.button2")}\n            </Link>'
})

# File 5: SolutionsDurability.tsx
replace_in_file(f"{components_dir}/SolutionsDurability.tsx", {
    '"50+ Year Lifespan"': 't("Durability.lifespanTitle")',
    '"Engineered for longevity, K-Aqua PP-R piping systems are certified to operate continuously for over 50 years under standard operating pressures and temperatures, eliminating the need for periodic system overhauls."': 't("Durability.lifespanDesc")',
    '"High Pressure Resistance"': 't("Durability.pressureTitle")',
    '"Our homogeneous fusion joints and structurally reinforced pipe walls allow the system to withstand severe pressure fluctuations and water hammer effects, surpassing the stress tolerances of traditional materials."': 't("Durability.pressureDesc")',
    '"Temperature Extremes"': 't("Durability.tempTitle")',
    '"Designed to operate flawlessly across a broad thermal spectrum. From deep chilling applications to high-temperature radiator heating networks, the material maintains its structural integrity without warping or degrading."': 't("Durability.tempDesc")',
    
    '>\n                Uncompromising Durability\n              </h2>': '>\n                {t("Durability.title")}\n              </h2>',
    '>\n                Built to outlast the buildings they inhabit. Our systems provide peace of mind through exceptional engineering and material science.\n              </p>': '>\n                {t("Durability.subtitle")}\n              </p>'
})

# File 6: SolutionsEconomicROI.tsx
replace_in_file(f"{components_dir}/SolutionsEconomicROI.tsx", {
    '"Faster Installation"': 't("EconomicROI.fasterTitle")',
    '"Thermal fusion joining drastically reduces labor time compared to welding steel or soldering copper, accelerating project timelines and reducing labor costs."': 't("EconomicROI.fasterDesc")',
    '"Maintenance Costs"': 't("EconomicROI.maintenanceTitle")',
    '"Scale-free and corrosion-resistant properties mean zero routine internal maintenance, significantly lowering operational expenditures over the building\'s lifecycle."': 't("EconomicROI.maintenanceDesc")',
    '"Less Heat Loss"': 't("EconomicROI.heatTitle")',
    '"Superior thermal insulation retains heat in hot water lines much more effectively than metal piping, leading to measurable energy efficiency and utility savings."': 't("EconomicROI.heatDesc")',
    
    '>\n            Economic ROI\n          </h2>': '>\n            {t("EconomicROI.title")}\n          </h2>',
    '>\n            Beyond engineering superiority, K-Aqua delivers profound economic advantages through rapid installation, energy efficiency, and eliminated maintenance.\n          </p>': '>\n            {t("EconomicROI.subtitle")}\n          </p>'
})

# File 7: SolutionsEnvironment.tsx
replace_in_file(f"{components_dir}/SolutionsEnvironment.tsx", {
    '>\n                Environmental Integrity\n              </h2>': '>\n                {t("Environment.title")}\n              </h2>',
    '>\n                  Before modern polypropylene extraction, propylene and ethylene waste gases from petroleum processing were simply burned off, releasing significant atmospheric pollution. Today, these gases are upcycled into polypropylene, drastically reducing manufacturing emissions and preventing harmful flares.\n                </p>': '>\n                  {t("Environment.p1")}\n                </p>',
    '>\n                  Our manufacturing facilities employ a state-of-the-art closed cooling cycle. This means water is continuously circulated and chilled without discharging into local rivers, streams, or lakes, completely eliminating thermal pollution and wastewater run-off.\n                </p>': '>\n                  {t("Environment.p2")}\n                </p>',
    '>\n                  Because K-Aqua PP-R pipes are significantly lighter than metal alternatives, transportation requires less fuel, directly contributing to a significantly reduced carbon footprint from factory to job site.\n                </p>': '>\n                  {t("Environment.p3")}\n                </p>',
    '>Environmental Process Diagram</p>': '>{t("Environment.diagram")}</p>'
})

# File 8: SolutionsHealthSafety.tsx
replace_in_file(f"{components_dir}/SolutionsHealthSafety.tsx", {
    '"Potable Water Safety"': 't("HealthSafety.potableTitle")',
    '"Manufactured from food-grade plumbing materials, ensuring that drinking water remains completely uncontaminated, tasteless, and odorless from source to tap."': 't("HealthSafety.potableDesc")',
    '"Legionella Resistance"': 't("HealthSafety.legionellaTitle")',
    '"The exceedingly smooth internal surface of PP-R prevents the formation of biofilms and scale, effectively neutralizing the breeding grounds for Legionella and other harmful bacteria."': 't("HealthSafety.legionellaDesc")',
    '"Non-Toxic Architecture"': 't("HealthSafety.toxicTitle")',
    '"Installation relies on heat fusion rather than toxic glues, solvents, or lead-based solders, maintaining absolute chemical purity within the piping network."': 't("HealthSafety.toxicDesc")',
    '"Acoustic Insulation"': 't("HealthSafety.acousticTitle")',
    '"The inherent density and elasticity of our polymer structure provide exceptional noise reduction, severely dampening flow noise and water hammer for quieter building environments."': 't("HealthSafety.acousticDesc")',
    
    '>\n              Health & Hygiene\n            </h2>': '>\n              {t("HealthSafety.title")}\n            </h2>',
    '>\n              Setting the international standard for hygienic fluid transport. Our materials prioritize human health and acoustic comfort above all.\n            </p>': '>\n              {t("HealthSafety.subtitle")}\n            </p>'
})

# File 9: SolutionsHeroSection.tsx
replace_in_file(f"{components_dir}/SolutionsHeroSection.tsx", {
    '>\n            Sustainable <br className="hidden md:block"/>\n            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5b2d8c] to-purple-400">PP-R Pipe</span> Systems\n          </h1>': '>\n            {t("Hero.title1")} <br className="hidden md:block"/>\n            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5b2d8c] to-purple-400">{t("Hero.title2")}</span> {t("Hero.title3")}\n          </h1>',
    '>\n            Environmentally responsible plumbing solutions engineered for the future. We are committed to reducing atmospheric pollution, conserving resources, and manufacturing superior thermoplastic polymers that outperform traditional materials.\n          </p>': '>\n            {t("Hero.subtitle")}\n          </p>'
})

# File 10: SolutionsMaterialScience.tsx
replace_in_file(f"{components_dir}/SolutionsMaterialScience.tsx", {
    '>\n              Advanced Material Science\n            </h2>': '>\n              {t("MaterialScience.title")}\n            </h2>',
    '>\n                At the core of our solutions lies Polypropylene Random Copolymer (PP-R/PP-RCT), a sophisticated thermoplastic polymer engineered for exceptional performance. Unlike traditional materials, its unique molecular structure provides outstanding chemical resistance and thermal stability.\n              </p>': '>\n                {t("MaterialScience.p1")}\n              </p>',
    '>\n                The copolymerization process introduces ethylene into the propylene chain, resulting in a highly flexible yet durable matrix. This prevents internal scaling, maintains a smooth internal surface, and eliminates the risk of heavy metal leaching, ensuring absolute purity in fluid transport.\n              </p>': '>\n                {t("MaterialScience.p2")}\n              </p>',
    '>Chemical Resistance</h3>': '>{t("MaterialScience.chemicalTitle")}</h3>',
    '>Highly resistant to acidic and alkaline solutions, operating safely in aggressive environments without degrading or weakening the pipe wall.</p>': '>{t("MaterialScience.chemicalDesc")}</p>',
    '>Thermal Stability</h3>': '>{t("MaterialScience.thermalTitle")}</h3>',
    '>Maintains structural integrity across extreme temperature gradients, making it ideal for both high-heat industrial applications and chilled water systems.</p>': '>{t("MaterialScience.thermalDesc")}</p>'
})

# File 11: SolutionsRecyclability.tsx
replace_in_file(f"{components_dir}/SolutionsRecyclability.tsx", {
    '"100% Recyclable Pipes"': 't("Recyclability.recyclableTitle")',
    '"K-Aqua PP-R pipes are 100% recyclable at the end of their 50+ year lifespan. Unlike cross-linked plastics (PEX) or composite metals, polypropylene can be melted down and repurposed without complex chemical separation."': 't("Recyclability.recyclableDesc")',
    '"Resin Code 5"': 't("Recyclability.resinTitle")',
    '"Categorized under Resin Identification Code 5, our materials are highly prized in the secondary recycling market. This high-grade polymer retains significant structural integrity, making it ideal for secondary industrial applications."': 't("Recyclability.resinDesc")',
    '"Zero Waste Manufacturing"': 't("Recyclability.zeroWasteTitle")',
    '"During the extrusion and injection molding processes, any off-cuts or production scrap are immediately reground and reintroduced into non-critical manufacturing lines, ensuring absolute minimal landfill waste."': 't("Recyclability.zeroWasteDesc")',
    
    '>\n            Lifecycle & Recyclability\n          </h2>': '>\n            {t("Recyclability.title")}\n          </h2>',
    '>\n            Engineered for a sustainable future, our PP-R systems represent the pinnacle of zero-waste manufacturing and end-of-life material recovery.\n          </p>': '>\n            {t("Recyclability.subtitle")}\n          </p>'
})
