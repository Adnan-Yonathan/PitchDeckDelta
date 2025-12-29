import { ReactNode } from "react";

const features = [
  {
    title: "Player Profiles",
    description:
      "Advanced metrics, matchup context, and projections to spot true player edges.",
  },
  {
    title: "Team Profiles",
    description:
      "Macro trends, pace, efficiency, and performance splits to contextualize every bet.",
  },
  {
    title: "Line Shopping",
    description:
      "Live odds from every major sportsbook and prediction market, side by side.",
  },
  {
    title: "EV Tool",
    description:
      "Surfacing mispriced odds across books so profitable plays stay ahead of the move.",
  },
  {
    title: "Betting Trends",
    description:
      "Recent and season-long trends vs spreads, props, and totals with continuation likelihood.",
  },
  {
    title: "Live Betting Model",
    description:
      "Outcome-influencing inputs streamed live to compute a true line before books adjust.",
  },
  {
    title: "Combo Analysis",
    description:
      "Correlated parlay insights, best-book discovery, and implied probability checks.",
  },
  {
    title: "Matchup Analysis",
    description:
      "Team vs team edges for spread, total, and moneyline—including sharp/handle signals.",
  },
  {
    title: "Player Analysis",
    description:
      "Prop edges using season stats, recent form, opponent context, and injury impact.",
  },
  {
    title: "Betting Knowledge Architecture",
    description:
      "LLM guidance that answers like a sharp bettor—strategy, EV optimization, and risk.",
  },
];

const projections = [
  { month: 1, mrr: "$18,230", pro: 300, unlimited: 30, proAnnual: 100, unlimitedAnnual: 20, b2b: 1000 },
  { month: 2, mrr: "$31,570", pro: 500, unlimited: 50, proAnnual: 200, unlimitedAnnual: 40, b2b: 2000 },
  { month: 3, mrr: "$48,800", pro: 750, unlimited: 80, proAnnual: 350, unlimitedAnnual: 60, b2b: 3000 },
  { month: 4, mrr: "$68,850", pro: 1000, unlimited: 120, proAnnual: 500, unlimitedAnnual: 90, b2b: 4000 },
  { month: 5, mrr: "$90,800", pro: 1300, unlimited: 160, proAnnual: 700, unlimitedAnnual: 120, b2b: 5000 },
  { month: 6, mrr: "$112,750", pro: 1600, unlimited: 200, proAnnual: 900, unlimitedAnnual: 150, b2b: 6000 },
  { month: 7, mrr: "$135,700", pro: 1900, unlimited: 240, proAnnual: 1100, unlimitedAnnual: 180, b2b: 8000 },
  { month: 8, mrr: "$158,650", pro: 2200, unlimited: 280, proAnnual: 1300, unlimitedAnnual: 210, b2b: 10000 },
  { month: 9, mrr: "$181,600", pro: 2500, unlimited: 320, proAnnual: 1500, unlimitedAnnual: 240, b2b: 12000 },
  { month: 10, mrr: "$204,550", pro: 2800, unlimited: 360, proAnnual: 1700, unlimitedAnnual: 270, b2b: 14000 },
  { month: 11, mrr: "$227,500", pro: 3100, unlimited: 400, proAnnual: 1900, unlimitedAnnual: 300, b2b: 16000 },
  { month: 12, mrr: "$250,450", pro: 3400, unlimited: 440, proAnnual: 2100, unlimitedAnnual: 330, b2b: 18000 },
];

const competitors = [
  { name: "OddsJam", status: "Acquired for $160M", note: "Closest comp; strong line shopping" },
  { name: "Pine Sports / Jaxon AI", status: "AI-driven", note: "Most similar to Delta's LLM" },
  { name: "Action Network", status: "Acquired for $240M", note: "Media + data hybrid" },
  { name: "Unabated", status: "Premium tools", note: "High complexity and pricing" },
  { name: "Betstamp", status: "Pick marketplace", note: "Missing deep analytics" },
];

const goToMarket = [
  "Influencer partnerships with equity-style incentives to keep CAC low and authentic.",
  "Affiliate rails plus promo inventory that matches market events and playoffs spikes.",
  "UGC and Twitter thought-leadership content focused on prediction markets and live edges.",
  "B2B outreach to operators, syndicates, and betting communities for custom builds.",
  "Community-led onboarding: templates, live model showcases, and transparent track records.",
];

const investmentBreakdown = [
  { label: "Product & infra", amount: "$25k" },
  { label: "GTM & distribution", amount: "$50k" },
  { label: "Enterprise enablement", amount: "$10k" },
  { label: "Founder runway", amount: "$15k" },
];

function Section({
  id,
  title,
  eyebrow,
  description,
  children,
}: {
  id?: string;
  title: string;
  eyebrow: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section id={id}>
      <div className="section-head">
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="section-title">{title}</h2>
      </div>
      {description ? <p className="section-description">{description}</p> : null}
      {children}
    </section>
  );
}

function Card({ title, description }: { title: string; description: string }) {
  return (
    <div className="card">
      <p className="card-title">{title}</p>
      <p className="card-body">{description}</p>
    </div>
  );
}

export default function Page() {
  return (
    <main className="main">
      <section className="hero">
        <div className="hero-inner">
          <div>
            <div className="badge-row">
              <span className="logo-mark">Δ</span>
              <span className="pill accent">Delta Sports</span>
              <span className="pill">Beta · NBA</span>
            </div>
            <h1 className="hero-title">Delta Sports: the intelligence layer of sports betting</h1>
            <p className="hero-sub">
              Interactive, LLM-powered deck that blends premium betting tools with a consumer-first
              experience. Built for the next wave of profitable bettors across sportsbooks,
              prediction markets, and peer-to-peer exchanges.
            </p>
            <div className="cta-row">
              <button className="button">Request a demo</button>
              <button className="button secondary">View traction</button>
            </div>
          </div>
          <div className="grid-two">
            <div className="kpi">
              <strong>$112B → 3x</strong>
              <span>Sports betting TAM (2025 to 10-year outlook)</span>
            </div>
            <div className="kpi">
              <strong>80% volume</strong>
              <span>Prediction markets driven by sports liquidity</span>
            </div>
            <div className="kpi">
              <strong>2–3% profitable</strong>
              <span>Sports bettors vs 1–3% day traders—software gap remains</span>
            </div>
            <div className="kpi">
              <strong>Fraud-heavy picks</strong>
              <span>95% of pick-sellers lack an edge—Delta flips trust with tools</span>
            </div>
          </div>
        </div>
      </section>

      <Section
        id="problem"
        eyebrow="Problem"
        title="Sports betting UX is predatory, fragmented, and priced out"
        description="Books tilt odds, pick-sellers lack edge, and pro-grade tools are expensive and complex, leaving casual bettors without a trustworthy path to profitability."
      >
        <div className="card-grid">
          <Card
            title="House tilt"
            description="Bookmakers limit winners and skew margins; casual bettors lose by design."
          />
          <Card
            title="Low-trust info market"
            description="50k+ pick-sellers; ~95% deliver no real edge, eroding user trust."
          />
          <Card
            title="Tooling too dense"
            description="Pro tools are complex and pricey; average users are priced out and overwhelmed."
          />
          <Card
            title="Market shift"
            description="Prediction markets and peer-to-peer exchanges are rising—power users need agile software."
          />
        </div>
      </Section>

      <Section
        id="solution"
        eyebrow="Solution"
        title="Delta blends AI tutoring with pro-grade betting infrastructure"
        description="A consumer-first experience that wraps sharp workflows, live modeling, and guidance into one interface."
      >
        <div className="card-grid">
          {features.map((feature) => (
            <Card key={feature.title} title={feature.title} description={feature.description} />
          ))}
        </div>
      </Section>

      <Section
        id="market"
        eyebrow="Market size"
        title="Sports data infra meets prediction markets and LLM UX"
      >
        <div className="grid-two">
          <div className="card">
            <p className="card-title">Industry momentum</p>
            <p className="card-body">
              Sports betting is ~$112B in 2025 and expected to nearly triple in the next decade. Sports
              markets account for ~80% of prediction-market trading volume, and users expect LLM-grade
              simplicity.
            </p>
          </div>
          <div className="card">
            <p className="card-title">Data & tooling gap</p>
            <p className="card-body">
              Picks/analytics market is ~$500M with 50k sellers, mostly low-signal. SaaS tools are ~1/3 that
              size yet remain valued 10x lower than day-trading software despite similar profitability bands
              (2–3% bettors vs 1–3% day traders).
            </p>
          </div>
        </div>
      </Section>

      <Section
        id="business-model"
        eyebrow="Business model"
        title="Two-speed revenue: subscriptions + enterprise builds"
      >
        <div className="card-grid">
          <div className="card">
            <p className="card-title">Subscription</p>
            <p className="card-body">
              Pro: $29/mo (25 messages/day) or $9/mo annual. Unlimited: $199/mo or $83/mo annual with
              custom ML model creation and unlimited messaging.
            </p>
            <div className="mini-badges">
              <span className="mini-badge">LLM copilot</span>
              <span className="mini-badge">Live models</span>
              <span className="mini-badge">Line shopping</span>
            </div>
          </div>
          <div className="card">
            <p className="card-title">B2B builds</p>
            <p className="card-body">
              Custom AI systems for influencers, syndicates, and communities: $25k–$100k per build, monthly
              or annual contracts, priced by complexity and seat count.
            </p>
            <div className="mini-badges">
              <span className="mini-badge">Automation</span>
              <span className="mini-badge">Syndicate ops</span>
              <span className="mini-badge">Embedded AI</span>
            </div>
          </div>
        </div>
      </Section>

      <Section
        id="founder"
        eyebrow="Founder"
        title="Adnan Yonathan — sports, data, and operator DNA"
      >
        <div className="grid-two">
          <div className="card">
            <p className="card-title">Background</p>
            <ul className="clean-list">
              <li>NJIT Data Science & Information Systems.</li>
              <li>Former pro Madden/CFB player (top 40), ~$40k earnings; 818 Madden partnerships & socials.</li>
              <li>Twitch streamer (~40 avg viewers for 3 months) and D2D sales (2025).</li>
              <li>Founder, OpsPilot Legal (automation consulting) before shifting to Delta.</li>
            </ul>
          </div>
          <div className="card">
            <p className="card-title">Edge & network</p>
            <p className="card-body">
              Deep ties to successful Madden players turned cappers provide instant influencer access and
              industry relationships—fueling GTM partnerships and B2B deal flow.
            </p>
            <div className="mini-badges">
              <span className="mini-badge">Influencer rails</span>
              <span className="mini-badge">Sharp network</span>
              <span className="mini-badge">Operator ready</span>
            </div>
          </div>
        </div>
      </Section>

      <Section
        id="traction"
        eyebrow="Current traction"
        title="Early signal with documented live performance"
      >
        <div className="card-grid">
          <div className="card">
            <p className="card-title">Beta launch</p>
            <p className="card-body">Soft launch on Reddit (12/26) with 5 high-intent members (card on file).</p>
          </div>
          <div className="card">
            <p className="card-title">Live model</p>
            <p className="card-body">Live betting projection model: 3-0 documented wins.</p>
          </div>
          <div className="card">
            <p className="card-title">Matchup analysis</p>
            <p className="card-body">Matchup analysis tool: 4-1 record, publicly documented.</p>
          </div>
          <div className="card">
            <p className="card-title">Community flywheel</p>
            <p className="card-body">Transparent records and live showcases to onboard sharp-curious bettors.</p>
          </div>
        </div>
      </Section>

      <Section
        id="competitors"
        eyebrow="Competitive set"
        title="OddsJam is closest; Delta wins on UX + live AI guidance"
      >
        <div className="card-grid">
          {competitors.map((competitor) => (
            <div key={competitor.name} className="card">
              <p className="card-title">{competitor.name}</p>
              <p className="card-body">{competitor.note}</p>
              <div className="mini-badges">
                <span className="mini-badge">{competitor.status}</span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="gtm"
        eyebrow="GTM plan"
        title="Influencer-first, data-backed growth"
      >
        <div className="card">
          <ul className="clean-list">
            {goToMarket.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="divider" />
          <div className="pills">
            <span className="pill accent">Low CAC</span>
            <span className="pill">Equity-aligned partners</span>
            <span className="pill">Prediction-market native</span>
            <span className="pill">B2B upsell motion</span>
          </div>
        </div>
      </Section>

      <Section
        id="financials"
        eyebrow="Financial projections"
        title="12-month ramp with dual revenue streams"
        description="Balanced consumer subscriptions and B2B build-outs drive compounding MRR."
      >
        <div className="card">
          <table className="table">
            <thead>
              <tr>
                <th>Month</th>
                <th>MRR</th>
                <th>Pro</th>
                <th>Unlimited</th>
                <th>Pro Annual</th>
                <th>Unlimited Annual</th>
                <th>B2B Users</th>
              </tr>
            </thead>
            <tbody>
              {projections.map((row) => (
                <tr key={row.month}>
                  <td>Month {row.month}</td>
                  <td>{row.mrr}</td>
                  <td>{row.pro}</td>
                  <td>{row.unlimited}</td>
                  <td>{row.proAnnual}</td>
                  <td>{row.unlimitedAnnual}</td>
                  <td>{row.b2b.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section
        id="investment"
        eyebrow="Investment request"
        title="Raising $100k for 10% to capture the sports data inflection"
      >
        <div className="grid-two">
          <div className="card">
            <p className="card-title">Use of funds</p>
            <ul className="clean-list">
              {investmentBreakdown.map((item) => (
                <li key={item.label}>
                  {item.label}: <strong>{item.amount}</strong>
                </li>
              ))}
            </ul>
          </div>
          <div className="card">
            <p className="card-title">Why now</p>
            <p className="card-body">
              Prediction markets are colliding with booming sports betting, and LLM-native UX is resetting
              expectations. Delta is the bridge between power-user tooling and approachable guidance—ready to
              scale with low infra cost and influencer-driven distribution.
            </p>
            <div className="cta-row">
              <button className="button">Join the round</button>
              <button className="button secondary">Open data room</button>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
