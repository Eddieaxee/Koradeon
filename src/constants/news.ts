/**
 * KÓRADEON — Newsroom content.
 * Structured editorial articles: strong ledes, subheadings, pull quotes,
 * supporting statistics and imagery. Treated like a corporate publication.
 */

import { IMAGES } from '@/constants/assets'

export type ArticleBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'quote'; text: string; by?: string }
  | { type: 'list'; items: string[] }

export interface NewsArticle {
  slug: string
  category: string
  title: string
  dek: string
  excerpt: string
  blocks: ArticleBlock[]
  stats?: { value: string; label: string }[]
  date: string
  readTime: string
  author: string
  authorRole: string
  location: string
  image: string
  imageAlt: string
  featured: boolean
}

export const NEWS_CATEGORIES = [
  'Corporate',
  'Innovation',
  'Infrastructure',
  'Hospitality',
  'Real Estate',
  'Sustainability',
] as const

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    slug: 'strategic-vision-african-market-expansion',
    category: 'Corporate',
    title: 'KÓRADEON GROUP Announces Strategic Vision for African Market Expansion',
    dek: 'The holding company will open a regional headquarters in Nairobi in 2026, anchoring a phased expansion across East and Southern Africa.',
    excerpt:
      'The Group reveals plans to establish a presence across key African markets, with initial focus on East and Southern Africa.',
    blocks: [
      {
        type: 'p',
        text: 'KÓRADEON GROUP has announced the next chapter of its growth strategy: a phased expansion into East and Southern Africa, anchored by a new regional headquarters in Nairobi that will open during 2026. The move extends the Group beyond its West African base and into markets where its four operating pillars can each build durable, competitive advantage.',
      },
      {
        type: 'p',
        text: 'The decision follows an eighteen-month study of more than a dozen markets across the continent. The Group assessed regulatory predictability, infrastructure readiness, demographic tailwinds, and the availability of institutional talent. Kenya, Rwanda, Tanzania, Ethiopia, Zambia and South Africa emerged as priority destinations for the first phase of deployment.',
      },
      { type: 'h2', text: 'A deliberate sequence, not a sprint' },
      {
        type: 'p',
        text: 'Expansion will be sequenced rather than simultaneous. The Group enters each market with a single anchor business — commonly Kavora Farms or Arcovia Infrastructure — establishes local governance and delivery capability, and only then introduces the remaining pillars. This mirrors the disciplined approach the Group used when building its four foundational businesses in Nigeria.',
      },
      {
        type: 'p',
        text: 'Each regional office will carry real mandate. Hiring plans call for more than one hundred professional roles in the first two years, spanning agronomy, engineering, project finance and corporate governance, with the explicit goal that local leadership runs each operation within five years of entry.',
      },
      {
        type: 'quote',
        text: 'We are not entering markets. We are building institutions in them — with the same patience and discipline we have applied since day one.',
        by: 'Group Executive Office',
      },
      { type: 'h2', text: 'What the next decade holds' },
      {
        type: 'p',
        text: 'By 2030 the Group targets a presence in at least ten African countries, with regional operating centres in Nairobi, Accra, Johannesburg and Lagos. The expansion is expected to materially broaden the Group\'s revenue base and deepen its access to agricultural land, hospitality assets, urban land markets and public infrastructure programmes across the continent.',
      },
      {
        type: 'list',
        items: [
          'Nairobi regional headquarters opening in 2026',
          'Anchor entry via Kavora Farms and Arcovia Infrastructure in two new markets before end-2027',
          'Regional treasury and shared-services platform to standardise governance',
          'Partnership corridor discussions with development-finance institutions under way',
        ],
      },
    ],
    stats: [
      { value: '3', label: 'New markets in 2026' },
      { value: '10', label: 'Country presence by 2030' },
      { value: '100+', label: 'New regional roles' },
    ],
    date: '2025-03-18',
    readTime: '6 min read',
    author: 'Group Communications',
    authorRole: 'Corporate Affairs',
    location: 'Lagos, Nigeria',
    image: IMAGES.corporateSkyline,
    imageAlt: 'City skyline at dusk',
    featured: true,
  },
  {
    slug: 'kavora-precision-agriculture',
    category: 'Innovation',
    title: 'Kavora Farms Launches Precision Agriculture Initiative',
    dek: 'A 12,000-hectare pilot programme applies AI, satellite imagery and IoT sensing to some of the largest commercial farmland in West Africa.',
    excerpt: 'Leveraging AI and IoT technologies to revolutionise sustainable farming practices across Nigeria.',
    blocks: [
      { type: 'h2', text: 'Farming with millimetre precision' },
      {
        type: 'p',
        text: 'Kavora Farms has activated the first phase of a precision agriculture programme covering 12,000 hectares of commercial farmland. The initiative replaces uniform field treatment with variable-rate application guided by satellite imagery, on-soil sensor networks and machine-learning yield models.',
      },
      {
        type: 'p',
        text: 'Every 100-metre cell of the farm is now mapped against soil chemistry, moisture, slope and historical yield. Planting, irrigation and nutrient application are tuned per cell rather than per field — the difference between treating a farm and understanding it.',
      },
      {
        type: 'quote',
        text: 'Precision is stewardship at scale. We cannot feed a continent with averages.',
        by: 'Head of Agritech, Kavora Farms',
      },
      { type: 'h2', text: 'The technology stack' },
      {
        type: 'list',
        items: [
          'Satellite imagery refreshed every 12–24 hours for phenology and stress detection',
          '2,400 IoT soil probes reporting moisture, salinity and temperature in near real time',
          'AI-driven nitrogen and irrigation advisories delivered to operators daily',
          'Drone-based scouting for early pest and disease identification',
        ],
      },
      {
        type: 'p',
        text: 'Early results from the pilot field blocks are encouraging. Water application has fallen sharply, nutrient use is better targeted, and measured yields have improved relative to the control fields. The Group intends to expand the programme across Kavora\'s full land bank by 2027 and to productise the advisory layer for partner farms.',
      },
    ],
    stats: [
      { value: '12,000', label: 'Hectares under precision farming' },
      { value: '30%', label: 'Reduction in water use (pilot)' },
      { value: '22%', label: 'Yield improvement vs control fields' },
    ],
    date: '2025-02-27',
    readTime: '5 min read',
    author: 'Kavora Farms',
    authorRole: 'Office of the CEO',
    location: 'Kaduna, Nigeria',
    image: IMAGES.kavora,
    imageAlt: 'Golden wheat field at harvest',
    featured: false,
  },
  {
    slug: 'arcovia-awarded-major-transportation-contract',
    category: 'Infrastructure',
    title: 'Arcovia Infrastructure Awarded Major Transportation Contract',
    dek: 'The 240-kilometre corridor contract is one of the largest project wins in the company’s history and a landmark for corridor development in West Africa.',
    excerpt: 'The contract represents a significant milestone in Arcovia’s mission to build critical infrastructure across Africa.',
    blocks: [
      {
        type: 'p',
        text: 'Arcovia Infrastructure has been selected to deliver a critical 240-kilometre transportation corridor linking three regional economic zones. The contract, awarded following a competitive international tender, is among the largest single project wins in the company\'s history.',
      },
      { type: 'h2', text: 'More than a road' },
      {
        type: 'p',
        text: 'Beyond the carriageway itself, the scope includes four grade-separated interchanges, eleven bridges, drainage and flood-management systems, and a fibre backbone for smart-traffic operations. The corridor is designed to move both people and freight efficiently, with a design life of well over fifty years.',
      },
      {
        type: 'p',
        text: 'Delivery will be structured as a phased programme, with an estimated 14,000 direct and indirect jobs across the construction envelope. The company has committed to sourcing materials regionally wherever quality and cost allow, and to a comprehensive local-content framework for subcontracting.',
      },
      {
        type: 'quote',
        text: 'Infrastructure is the skeleton of an economy. The quality of the skeleton determines what the body can become.',
        by: 'Arcovia Project Office',
      },
      { type: 'h2', text: 'Financing and delivery' },
      {
        type: 'p',
        text: 'Project financing blends structured credit from development-finance institutions with government contributions, with revenue supported by a managed tolling regime. Independent verification engineers will audit design and construction quality at every stage.',
      },
      {
        type: 'p',
        text: 'Arcovia\'s order book now spans transportation, energy and water infrastructure, positioning the company as one of the region\'s most active integrated infrastructure developers.',
      },
    ],
    stats: [
      { value: '240km', label: 'Corridor length' },
      { value: '11', label: 'Bridges' },
      { value: '14,000', label: 'Projected jobs' },
    ],
    date: '2025-01-30',
    readTime: '5 min read',
    author: 'Arcovia Infrastructure',
    authorRole: 'Project Office',
    location: 'Lagos, Nigeria',
    image: IMAGES.arcovia,
    imageAlt: 'Aerial view of a major highway interchange',
    featured: false,
  },
  {
    slug: 'ozura-sustainable-luxury-tourism',
    category: 'Hospitality',
    title: 'Ozura Hospitality Unveils Sustainable Luxury Tourism Portfolio',
    dek: 'Four flagship properties will pair low-impact design with genuinely local experience — a bet that the future of luxury hospitality is regenerative, not extractive.',
    excerpt: 'Ozura Hospitality unveils a portfolio of sustainable luxury destinations across West Africa’s most compelling coastal and cultural settings.',
    blocks: [
      {
        type: 'p',
        text: 'Ozura Hospitality has unveiled the first full picture of its development pipeline: four flagship properties that apply a single, uncompromising brief — world-class hospitality that leaves its host environments measurably better than it found them. The portfolio spans beachfront, coastal and urban settings, each designed around its landscape rather than imposed upon it.',
      },
      {
        type: 'p',
        text: 'The announcement follows three years of land studies, community consultation and design development. Rather than pursuing volume, Ozura has deliberately limited each property to between 40 and 80 keys — a scale at which service remains personal and environmental impact can be actively managed.',
      },
      { type: 'h2', text: 'Design with the landscape, not against it' },
      {
        type: 'p',
        text: 'Every property in the portfolio is built to a common environmental standard: passive-cooling-first architecture, building envelopes that reference regional craft traditions, and native planting that restores rather than replaces local ecology. Solar generation, water recycling and zero-single-use-plastic operations are baseline requirements, not aspirations.',
      },
      {
        type: 'p',
        text: 'Interiors are commissioned from African designers and makers, with the majority of furnishing, art and tableware sourced within each property’s home country. The effect is a portfolio that feels unmistakably of its place — a deliberate counterpoint to the placelessness of international luxury.',
      },
      {
        type: 'quote',
        text: 'True luxury is finite by nature. Scarcity, craft and care cannot be scaled — and that is precisely the point.',
        by: 'Ozura Hospitality — Brand Office',
      },
      { type: 'h2', text: 'Community as infrastructure' },
      {
        type: 'p',
        text: 'Each property operates a structured local-partnership programme covering employment, procurement and training. Ozura targets a minimum of 80 per cent local employment at every property, with hospitality academies co-funded alongside state tourism bodies to build durable career pathways rather than seasonal jobs.',
      },
      {
        type: 'p',
        text: 'The first property in the portfolio has entered construction, with openings phased through 2026 and 2027. A second development phase — including a wellness-led flagship — is already in design.',
      },
    ],
    stats: [
      { value: '4', label: 'Flagship properties planned' },
      { value: '80%+', label: 'Local employment target' },
      { value: '100%', label: 'Solar-plus-storage energy design' },
    ],
    date: '2024-12-12',
    readTime: '5 min read',
    author: 'Ozura Hospitality',
    authorRole: 'Brand Office',
    location: 'Lagos, Nigeria',
    image: IMAGES.ozura,
    imageAlt: 'Palm-fringed coastline beside turquoise water',
    featured: false,
  },
  {
    slug: 'rumara-affordable-housing-initiative',
    category: 'Real Estate',
    title: 'Rumara Properties Breaks Ground on 800-Home Community Initiative',
    dek: 'A master-planned district combines dignified affordable housing, modular construction and generous green infrastructure — built for first-time homeowners, not speculators.',
    excerpt: 'Rumara Properties begins an 800-home master-planned community focused on dignified, attainable home ownership.',
    blocks: [
      {
        type: 'p',
        text: 'Rumara Properties has broken ground on an 800-home master-planned community on the outskirts of Abuja — the company’s most ambitious attempt yet to close the gap between housing demand and dignified, attainable supply. The district is designed around a simple premise: affordability should not mean compromise on light, space, safety or green access.',
      },
      { type: 'h2', text: 'Rethinking how homes are built' },
      {
        type: 'p',
        text: 'The programme’s economics rest on industrialised construction. Bathroom pods, precast structural elements and standardised fit-outs are manufactured off-site and assembled by a trained local workforce, compressing delivery timelines by roughly a third while raising build quality and reducing waste.',
      },
      {
        type: 'p',
        text: 'Homes are arranged in low-rise, walkable clusters around shared courtyards — a layout that cuts infrastructure cost per home while creating the neighbourly scale that high-rise estate models routinely destroy. Over a third of the site is retained as parks, playing fields and planted bufferland.',
      },
      {
        type: 'quote',
        text: 'A home is the most important financial instrument most families will ever hold. Our job is to make it a fair one.',
        by: 'Rumara Properties — Development Office',
      },
      { type: 'h2', text: 'Ownership, not just housing' },
      {
        type: 'p',
        text: 'Sales are structured around mortgage partnerships with commercial and microfinance banks, with title insurance and transparent service-charge governance built in from day one. Priority allocation is given to first-time buyers, teachers, nurses and civil servants — the key workers any functioning city depends on.',
      },
      {
        type: 'p',
        text: 'Phase one, comprising 260 homes and the district’s school, clinic and market core, is scheduled for completion within 24 months. The remaining phases follow the infrastructure, not the other way around.',
      },
    ],
    stats: [
      { value: '800', label: 'Homes at full build-out' },
      { value: '35%', label: 'Faster delivery via modular build' },
      { value: '40%', label: 'Of site retained as green space' },
    ],
    date: '2024-11-05',
    readTime: '5 min read',
    author: 'Rumara Properties',
    authorRole: 'Development Office',
    location: 'Abuja, Nigeria',
    image: IMAGES.rumara,
    imageAlt: 'Modern residential architecture at dusk',
    featured: false,
  },
  {
    slug: 'koradeon-commits-net-zero-2040',
    category: 'Sustainability',
    title: 'KÓRADEON GROUP Commits to Net-Zero Operations by 2040',
    dek: 'A group-wide climate programme moves every business onto a single measurement standard — with capital allocation, not announcements, as the enforcement mechanism.',
    excerpt: 'The Group formalises a 2040 net-zero commitment covering all four businesses, backed by a concrete transition programme.',
    blocks: [
      {
        type: 'p',
        text: 'KÓRADEON GROUP has formalised a commitment to reach net-zero operational emissions by 2040 across all four businesses — the first time the Group’s climate strategy has been consolidated into a single, board-governed programme with published interim targets.',
      },
      {
        type: 'p',
        text: 'The programme covers the emissions the Group controls directly: farm operations and processing at Kavora, property and construction activity at Rumara, resort operations at Ozura, and plant and project logistics at Arcovia. An independent assurance partner will verify measurement annually against the GHG Protocol.',
      },
      { type: 'h2', text: 'Where the reductions come from' },
      {
        type: 'list',
        items: [
          'Solar-plus-storage as the default power architecture for new farms, resorts and estates',
          'Electrification of light vehicles and fixed plant on a fixed replacement cycle',
          'Low-carbon material standards for all Rumara and Arcovia construction from 2026',
          'Regenerative agriculture practices across the Kavora land bank to build soil carbon',
        ],
      },
      {
        type: 'p',
        text: 'Capital expenditure plans already approved place the Group on track for a 50 per cent reduction in operational emissions by 2030, relative to a verified 2024 baseline. Residual emissions at 2040 will be addressed through a small, independently verified removals portfolio — not through offsets of convenience.',
      },
      {
        type: 'quote',
        text: 'A climate target without a capital plan is a press release. Ours is written into the investment committee’s mandate.',
        by: 'Group Sustainability Office',
      },
      { type: 'h2', text: 'Governance and reporting' },
      {
        type: 'p',
        text: 'Progress will be reported annually in the Group’s sustainability statement, with business-level dashboards reviewed quarterly by the executive committee. Climate performance is now a standing input into capital allocation and executive incentive structures — the mechanism that gives the 2040 date its meaning.',
      },
    ],
    stats: [
      { value: '2040', label: 'Net-zero operational target' },
      { value: '−50%', label: 'Emissions reduction by 2030' },
      { value: '2024', label: 'Verified baseline year' },
    ],
    date: '2024-10-08',
    readTime: '6 min read',
    author: 'Group Sustainability Office',
    authorRole: 'ESG & Climate',
    location: 'Lagos, Nigeria',
    image: IMAGES.energy,
    imageAlt: 'Solar array under a clear sky',
    featured: false,
  },
]

export function getArticleBySlug(slug: string): NewsArticle | undefined {
  return NEWS_ARTICLES.find((a) => a.slug === slug)
}

/** Related stories: same category first, then most recent. */
export function getRelatedArticles(slug: string, category: string, limit = 2): NewsArticle[] {
  return NEWS_ARTICLES.filter((a) => a.slug !== slug)
    .sort((a, b) => {
      const aScore = a.category === category ? 1 : 0
      const bScore = b.category === category ? 1 : 0
      if (aScore !== bScore) return bScore - aScore
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    })
    .slice(0, limit)
}

export function getFeaturedArticle(): NewsArticle {
  return NEWS_ARTICLES.find((a) => a.featured) ?? NEWS_ARTICLES[0]
}