const projects = [
  {
    name: "CeloPayAgent",
    emoji: "🤖",
    tagline: "AI-Powered Payment Agent on Celo",
    grant: "Celo Hackathon — $5K",
    color: "from-yellow-400 to-orange-400",
    border: "border-yellow-500/30 hover:border-yellow-500/60",
    contract: "0x5032320210Acf0133F8eAb5c4351E7a275556FEb",
    chain: "Celo Sepolia",
    tests: 28, coverage: "100%",
    features: ["Payment splitting (basis points)", "Scheduled recurring payments", "Group expense management", "AI agent authorization with spending caps", "ERC-8004 agent identity (ID: 0)"],
    github: "https://github.com/bigguybobby/celo-pay-agent",
    tech: ["Solidity", "Foundry", "Next.js", "wagmi", "ERC-8004"],
  },
  {
    name: "PrivateAudit",
    emoji: "🔒",
    tagline: "Privacy-Preserving Smart Contract Audits",
    grant: "COTI Builders — up to $100K",
    color: "from-purple-400 to-blue-400",
    border: "border-purple-500/30 hover:border-purple-500/60",
    contract: "0x1CaA18014F4AafEC6aC439E1b848484b6A368Db0",
    chain: "Celo Sepolia",
    tests: 24, coverage: "100%",
    features: ["Encrypted audit reports on-chain", "Public 0-100 trust scores", "Selective finding disclosure", "Auditor reputation system", "Severity breakdown (Critical/High/Med/Low/Info)"],
    github: "https://github.com/bigguybobby/coti-private-audit",
    tech: ["Solidity", "Foundry", "Next.js", "wagmi", "COTI MPC"],
  },
  {
    name: "ScrollSentinel",
    emoji: "🛡️",
    tagline: "On-Chain Security Monitoring & Alerting",
    grant: "Scroll Security Subsidy",
    color: "from-emerald-400 to-cyan-400",
    border: "border-emerald-500/30 hover:border-emerald-500/60",
    contract: "0x7197846b689e2FfF2825f7fa62D08ba504933409",
    chain: "Celo Sepolia",
    tests: 18, coverage: "100%",
    features: ["Register contracts for monitoring", "Alert system (reentrancy, flash loans, etc.)", "Dynamic 0-100 security score", "Alert acknowledgement workflow", "Batch score queries"],
    github: "https://github.com/bigguybobby/scroll-sentinel",
    tech: ["Solidity", "Foundry", "Next.js", "wagmi", "ConnectKit"],
  },
  {
    name: "PredictMarket",
    emoji: "🔮",
    tagline: "Binary Prediction Markets",
    grant: "Polygon Prediction Markets Program",
    color: "from-indigo-400 to-violet-400",
    border: "border-indigo-500/30 hover:border-indigo-500/60",
    contract: "0x9Aa87Cff875c671af7EDE5d750d0Ea747ABC23F0",
    chain: "Celo Sepolia",
    tests: 31, coverage: "98%",
    features: ["Create YES/NO markets", "Proportional payouts from winning pool", "Real-time odds calculation", "Invalid market refunds", "2% configurable protocol fee"],
    github: "https://github.com/bigguybobby/polygon-predict",
    tech: ["Solidity", "Foundry", "Next.js", "wagmi", "ConnectKit"],
  },
  {
    name: "TokenGuard",
    emoji: "🛡️",
    tagline: "Compliance-Ready ERC20 with Built-In Audit Trail",
    grant: "SURGE × Moltbook Hackathon — $50K",
    color: "from-emerald-400 to-teal-400",
    border: "border-emerald-500/30 hover:border-emerald-500/60",
    contract: "0x932d47Dc16429aF18a471C3929a06e389664e755",
    chain: "Celo Sepolia",
    tests: 52, coverage: "100%",
    features: ["4-tier KYC identity attestation", "Allowlist-only transfer mode", "Jurisdiction restriction & sanctions", "Daily spending limits with auto-reset", "On-chain audit trail for every transfer"],
    github: "https://github.com/bigguybobby/token-guard",
    tech: ["Solidity", "Foundry", "Next.js", "wagmi", "ConnectKit"],
  },
  {
    name: "AuditVault",
    emoji: "🔐",
    tagline: "On-Chain Smart Contract Audit Registry",
    grant: "Optimism Season 9 Audit Grants",
    color: "from-orange-400 to-red-400",
    border: "border-orange-500/30 hover:border-orange-500/60",
    contract: "0x5e1024891C900c757Eb3a60f11A1A6Dcb8341C7F",
    chain: "Celo Sepolia",
    tests: 37, coverage: "100%",
    features: ["Auditor registration & verification", "IPFS-backed audit reports", "5-severity finding management", "Reputation scoring system", "Per-contract security scores"],
    github: "https://github.com/bigguybobby/audit-vault",
    tech: ["Solidity", "Foundry", "Next.js", "wagmi", "ConnectKit"],
  },
  {
    name: "GasGuard",
    emoji: "⛽",
    tagline: "On-Chain Gas Price Oracle & Budget Manager",
    grant: "Gitcoin GG24 Dev Tooling",
    color: "from-green-400 to-emerald-400",
    border: "border-green-500/30 hover:border-green-500/60",
    contract: "0x09C79695c58b9de0fdFb7c074274aB6bc9781765",
    chain: "Celo Sepolia",
    tests: 32, coverage: "100%",
    features: ["Gas price reporting & history", "Configurable gas budgets", "Contract gas profiling", "Cost estimation at current rates", "Average gas price queries"],
    github: "https://github.com/bigguybobby/gas-guard",
    tech: ["Solidity", "Foundry", "Next.js", "wagmi", "ConnectKit"],
  },
  {
    name: "MultiSig",
    emoji: "🔐",
    tagline: "Lightweight Multi-Signature Wallet",
    grant: "DAO & Security Infrastructure",
    color: "from-amber-400 to-yellow-400",
    border: "border-amber-500/30 hover:border-amber-500/60",
    contract: "Ready to deploy",
    chain: "Any EVM",
    tests: 37, coverage: "100%",
    features: ["Propose/confirm/revoke/execute pattern", "Configurable threshold (M-of-N)", "ETH + ERC20 + arbitrary calls", "Self-governance (add/remove owners)", "No external dependencies"],
    github: "https://github.com/bigguybobby/multi-sig",
    tech: ["Solidity", "Foundry"],
  },
  {
    name: "Timelock",
    emoji: "⏰",
    tagline: "Governance Timelock Controller",
    grant: "DAO & Governance Infrastructure",
    color: "from-indigo-400 to-blue-400",
    border: "border-indigo-500/30 hover:border-indigo-500/60",
    contract: "Ready to deploy",
    chain: "Any EVM",
    tests: 45, coverage: "100%",
    features: ["Queue/execute/cancel with configurable delay", "Proposer/executor role separation", "Grace period (14d expiry)", "Self-governance via timelock calls", "Pairs with MultiSig"],
    github: "https://github.com/bigguybobby/timelock",
    tech: ["Solidity", "Foundry"],
  },
  {
    name: "Governor",
    emoji: "🏛️",
    tagline: "On-Chain DAO Governance",
    grant: "DAO & Governance Infrastructure",
    color: "from-violet-400 to-purple-400",
    border: "border-violet-500/30 hover:border-violet-500/60",
    contract: "Ready to deploy",
    chain: "Any EVM",
    tests: 42, coverage: "100%",
    features: ["Token-weighted For/Against/Abstain voting", "Configurable quorum & proposal threshold", "Multi-action proposals", "Snapshot total supply at creation", "Completes governance trilogy"],
    github: "https://github.com/bigguybobby/governor",
    tech: ["Solidity", "Foundry"],
  },
  {
    name: "StakeVault",
    emoji: "🏦",
    tagline: "ERC20 Staking with Rewards",
    grant: "DeFi Infrastructure",
    color: "from-emerald-400 to-teal-400",
    border: "border-emerald-500/30 hover:border-emerald-500/60",
    contract: "Ready to deploy",
    chain: "Any EVM",
    tests: 35, coverage: "100%",
    features: ["Synthetix-style reward distribution", "Proportional rewards per second", "Cooldown-based unstaking", "Extendable reward periods", "Owner-managed reward funding"],
    github: "https://github.com/bigguybobby/stake-vault",
    tech: ["Solidity", "Foundry"],
  },
  {
    name: "VestingVault",
    emoji: "🔒",
    tagline: "Token Vesting with Cliff & Linear Release",
    grant: "DeFi Infrastructure",
    color: "from-rose-400 to-pink-400",
    border: "border-rose-500/30 hover:border-rose-500/60",
    contract: "Ready to deploy",
    chain: "Any EVM",
    tests: 35, coverage: "100%",
    features: ["Cliff + linear vesting schedules", "Revocable with fair beneficiary payout", "Multiple schedules per beneficiary", "Any ERC20 token support", "Full schedule info views"],
    github: "https://github.com/bigguybobby/vesting-vault",
    tech: ["Solidity", "Foundry"],
  },
  {
    name: "FlashLoan",
    emoji: "⚡",
    tagline: "Minimal Flash Loan Pool",
    grant: "DeFi Infrastructure",
    color: "from-yellow-400 to-orange-400",
    border: "border-yellow-500/30 hover:border-yellow-500/60",
    contract: "Ready to deploy",
    chain: "Any EVM",
    tests: 31, coverage: "100%",
    features: ["Uncollateralized same-tx loans", "0.09% fee with minimum 1 wei", "Reentrancy guard protection", "Multi-token liquidity pools", "Fee collection for owner"],
    github: "https://github.com/bigguybobby/flash-loan",
    tech: ["Solidity", "Foundry"],
  },
  {
    name: "SecurityGuard",
    emoji: "🤖",
    tagline: "AI Security Agent for Smart Contracts",
    grant: "Warden Agent Builder — $1M",
    color: "from-red-400 to-pink-400",
    border: "border-red-500/30 hover:border-red-500/60",
    contract: "LangGraph AI Agent",
    chain: "API",
    tests: 0, coverage: "N/A",
    features: ["Reads on-chain audit data via AuditVault", "5 security analysis tools", "GPT-4o-mini powered reasoning", "HTTP API (POST /invoke)", "Warden Studio compatible"],
    github: "https://github.com/bigguybobby/warden-security-agent",
    tech: ["TypeScript", "LangGraph", "viem", "GPT-4o-mini", "Node.js"],
  },
];

const stats = [
  { label: "Projects", value: "14", icon: "📦" },
  { label: "Tests Passing", value: "447", icon: "✅" },
  { label: "Contracts", value: "13", icon: "📜" },
  { label: "GitHub Repos", value: "16", icon: "🔗" },
  { label: "Frontends", value: "7", icon: "🖥️" },
  { label: "Grant Targets", value: "$1.5M+", icon: "💰" },
];

const experience = [
  "Smart contract security auditing: Pinto, Alchemix, Threshold, SSV Network",
  "Active bug bounty hunter on Immunefi",
  "Full-stack: Next.js + TypeScript + Solidity + Foundry + Supabase",
  "Deep DeFi expertise across multiple ecosystems",
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-gray-950 to-purple-900/20" />
        <div className="relative mx-auto max-w-6xl px-6 py-20 text-center">
          <h1 className="mb-4 text-5xl font-bold md:text-6xl">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">bigguybobby</span>
          </h1>
          <p className="mx-auto mb-2 max-w-2xl text-xl text-gray-300">
            Web3 Builder & Smart Contract Security Researcher
          </p>
          <p className="mx-auto mb-8 max-w-xl text-gray-500">
            Building public goods, security tools, and DeFi infrastructure. Shipping code, not slides.
          </p>
          <div className="flex items-center justify-center gap-4">
            <a href="https://github.com/bigguybobby" target="_blank" rel="noopener noreferrer" className="rounded-lg bg-white/10 border border-white/20 px-6 py-2.5 font-medium transition hover:bg-white/20">GitHub</a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {stats.map((s) => (
            <div key={s.label} className="rounded-xl border border-gray-800 bg-gray-900/50 p-4 text-center">
              <div className="text-2xl mb-1">{s.icon}</div>
              <div className="text-2xl font-bold">{s.value}</div>
              <div className="text-xs text-gray-500">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="mb-8 text-3xl font-bold text-center">Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <div key={p.name} className={`rounded-xl border bg-gray-900/30 p-6 transition ${p.border}`}>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{p.emoji}</span>
                  <div>
                    <h3 className={`text-xl font-bold bg-gradient-to-r ${p.color} bg-clip-text text-transparent`}>{p.name}</h3>
                    <p className="text-sm text-gray-400">{p.tagline}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-green-500/10 border border-green-500/30 px-2 py-0.5 text-xs text-green-400">{p.tests}/{p.tests} ✅</span>
                  <span className="rounded-full bg-blue-500/10 border border-blue-500/30 px-2 py-0.5 text-xs text-blue-400">{(p as any).coverage}</span>
                </div>
              </div>
              <div className="text-xs text-gray-500 mb-3">🎯 {p.grant}</div>
              <ul className="space-y-1 mb-4">
                {p.features.map((f) => (
                  <li key={f} className="text-sm text-gray-400">• {f}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {p.tech.map((t) => (
                  <span key={t} className="rounded-full bg-gray-800 px-2 py-0.5 text-xs text-gray-400">{t}</span>
                ))}
              </div>
              <div className="flex items-center justify-between text-xs">
                <code className="text-gray-600">{p.contract.slice(0, 10)}...{p.contract.slice(-4)}</code>
                <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">View Code →</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="mb-6 text-3xl font-bold text-center">Experience</h2>
        <div className="mx-auto max-w-2xl rounded-xl border border-gray-800 bg-gray-900/50 p-6">
          <ul className="space-y-3">
            {experience.map((e) => (
              <li key={e} className="flex items-start gap-3 text-gray-300">
                <span className="text-blue-400 mt-0.5">▸</span> {e}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 text-center text-sm text-gray-500">
        Built by{" "}
        <a href="https://github.com/bigguybobby" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">bigguybobby</a>
        {" "}— Shipping Web3 grants since 2026
      </footer>
    </main>
  );
}
