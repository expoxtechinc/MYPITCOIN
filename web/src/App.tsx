import { useState } from 'react'

type IconName = 'arrow' | 'blocks' | 'eye' | 'shield' | 'book' | 'github' | 'pulse' | 'chevron'

const iconPaths: Record<IconName, string> = {
  arrow: 'M5 12h14M13 6l6 6-6 6',
  blocks: 'm12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Zm0 0v9m8-4.5-8 4.5m-8-4.5 8 4.5',
  eye: 'M2.5 12s3.3-5 9.5-5 9.5 5 9.5 5-3.3 5-9.5 5-9.5-5-9.5-5Zm9.5 2.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z',
  shield: 'M12 3 19 6v5c0 4.5-2.9 8.1-7 10-4.1-1.9-7-5.5-7-10V6l7-3Zm-3 9 2 2 4-4',
  book: 'M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5v-15Zm0 0v15m0 0A2.5 2.5 0 0 1 6.5 18H20',
  github: 'M15 22v-4.1c.1-1.4-.4-2.5-1.3-3.2 4.3-.5 8.8-2.1 8.8-9.2 0-2-.7-3.6-1.9-4.9.2-.5.8-2.4-.2-4.8 0 0-1.6-.5-5.2 1.9a18 18 0 0 0-9.5 0C2.1-.7.5-.2.5-.2c-1 2.4-.4 4.3-.2 4.8C-.9 5.9-1.6 7.5-1.6 9.5c0 7.1 4.5 8.7 8.8 9.2-.9.7-1.4 1.8-1.3 3.2V22',
  pulse: 'M3 12h4l2.2-7 5.6 14 2.2-7H21',
  chevron: 'm9 18 6-6-6-6',
}

function Icon({ name, size = 18 }: { name: IconName; size?: number }) {
  return <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d={iconPaths[name]} /></svg>
}

const bars = [42, 58, 45, 68, 54, 76, 60, 84, 66, 92, 74, 88, 70, 96, 80, 90, 77, 99]

function App() {
  const [activeTab, setActiveTab] = useState<'overview' | 'activity'>('overview')
  const [copied, setCopied] = useState(false)

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  const copyEndpoint = async () => {
    await navigator.clipboard?.writeText('https://api.mypitcoin.example/v1')
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  return (
    <main>
      <nav className="nav shell">
        <a className="brand" href="#top" aria-label="MYPITCOIN home"><span className="brand-mark">₿</span><span>MYPITCOIN</span></a>
        <div className="nav-links"><a href="#network">Network</a><a href="#learn">Learn</a><a href="#about">About</a></div>
        <button className="nav-cta" onClick={() => scrollTo('network')}>Open dashboard <Icon name="arrow" size={15} /></button>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span className="live-dot" /> Network clarity, without the noise</div>
          <h1>See the <em>signal</em><br />in the network.</h1>
          <p className="hero-sub">MYPITCOIN makes Bitcoin easier to understand. Follow blocks, explore activity, and build your confidence with a calm, transparent interface.</p>
          <div className="hero-actions"><button className="button button-primary" onClick={() => scrollTo('network')}>Explore the network <Icon name="arrow" size={17} /></button><a className="button button-ghost" href="https://github.com/expoxtechinc/MYPITCOIN" target="_blank" rel="noreferrer"><Icon name="github" size={17} /> View source</a></div>
          <div className="trust-row"><div className="avatar-stack"><span>R</span><span>S</span><span>A</span><span>+</span></div><span>Built for curious minds and serious nodes.</span></div>
        </div>
        <div className="hero-art" aria-label="Illustration of a glowing Bitcoin network">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit orbit-three" />
          <div className="coin-glow" /><div className="coin"><span>₿</span></div>
          <div className="float-card float-card-top"><span className="mini-icon"><Icon name="pulse" size={15} /></span><span><small>Network pulse</small><strong>Healthy</strong></span><b className="spark">↗ 12%</b></div>
          <div className="float-card float-card-bottom"><span className="mini-icon orange"><Icon name="blocks" size={15} /></span><span><small>Latest block</small><strong>#907,321</strong></span><Icon name="chevron" size={17} /></div>
          <div className="node node-a" /><div className="node node-b" /><div className="node node-c" /><div className="node node-d" />
        </div>
      </section>

      <section className="ticker"><div className="ticker-track"><span>OPEN SOURCE</span><i>✦</i><span>VERIFY EVERYTHING</span><i>✦</i><span>FOLLOW THE BLOCKS</span><i>✦</i><span>OPEN SOURCE</span><i>✦</i><span>VERIFY EVERYTHING</span><i>✦</i><span>FOLLOW THE BLOCKS</span><i>✦</i></div></section>

      <section className="network-section shell" id="network">
        <div className="section-heading"><div><div className="eyebrow">01 / The network, at a glance</div><h2>Know what is happening<br /><span>right now.</span></h2></div><p>A focused view of the signals that matter. This dashboard is ready for a live Bitcoin Core RPC/API connection when your backend is in place.</p></div>
        <div className="dashboard">
          <div className="dashboard-top"><div className="dash-title"><span className="status-pill"><span className="live-dot" /> Demo feed</span><h3>Network overview</h3></div><div className="tabs"><button className={activeTab === 'overview' ? 'active' : ''} onClick={() => setActiveTab('overview')}>Overview</button><button className={activeTab === 'activity' ? 'active' : ''} onClick={() => setActiveTab('activity')}>Activity</button></div></div>
          {activeTab === 'overview' ? <>
            <div className="metrics"><div><span>BLOCK HEIGHT</span><strong>907,321</strong><small className="positive">+ 6 blocks / hr</small></div><div><span>MEMPOOL</span><strong>12.8k</strong><small>transactions waiting</small></div><div><span>PEERS ONLINE</span><strong>14</strong><small className="positive">all connections stable</small></div><div><span>AVG. FEE</span><strong>7.2 <sup>sat/vB</sup></strong><small>sample data</small></div></div>
            <div className="chart-area"><div className="chart-label"><span>Transaction activity</span><span>Last 24 hours <Icon name="chevron" size={13} /></span></div><div className="chart"><div className="chart-grid"><span /><span /><span /><span /></div><div className="bars">{bars.map((height, index) => <span key={index} style={{ height: `${height}%` }} className={index > 13 ? 'hot' : ''} />)}</div><div className="chart-axis"><span>00:00</span><span>06:00</span><span>12:00</span><span>18:00</span><span>NOW</span></div></div></div>
          </> : <div className="activity-list"><div><span className="activity-icon orange"><Icon name="blocks" size={17} /></span><span><b>Block #907,321 mined</b><small>2 minutes ago · 2,840 transactions</small></span><strong>+0.0012 BTC</strong></div><div><span className="activity-icon"><Icon name="shield" size={17} /></span><span><b>Peer connection verified</b><small>7 minutes ago · mainnet</small></span><strong>stable</strong></div><div><span className="activity-icon"><Icon name="pulse" size={17} /></span><span><b>Network activity rising</b><small>18 minutes ago · last 24 hours</small></span><strong>+12%</strong></div></div>}
          <div className="dashboard-foot"><span><span className="tiny-dot" /> Last synced just now</span><button onClick={copyEndpoint}>{copied ? 'Endpoint copied' : 'Copy API endpoint'} <Icon name="arrow" size={14} /></button></div>
        </div>
      </section>

      <section className="feature-section shell" id="about"><div className="section-heading compact"><div><div className="eyebrow">02 / Why MYPITCOIN</div><h2>Less speculation.<br /><span>More understanding.</span></h2></div><p>We are building an open, approachable layer on top of the technology that powers Bitcoin.</p></div><div className="feature-grid"><article><span className="feature-number">01</span><span className="feature-icon"><Icon name="eye" size={23} /></span><h3>Observe clearly</h3><p>Replace the wall of tabs with a calm view of blocks, peers, fees, and activity.</p><a href="#network">Explore the view <Icon name="arrow" size={14} /></a></article><article><span className="feature-number">02</span><span className="feature-icon orange"><Icon name="shield" size={23} /></span><h3>Verify, don't guess</h3><p>Make the source visible. Connect your own data and keep the path from node to screen understandable.</p><a href="https://github.com/expoxtechinc/MYPITCOIN" target="_blank" rel="noreferrer">Read the source <Icon name="arrow" size={14} /></a></article><article><span className="feature-number">03</span><span className="feature-icon"><Icon name="book" size={23} /></span><h3>Learn as you go</h3><p>Plain-language context is built into the experience, so every metric teaches you something useful.</p><a href="#learn">See the approach <Icon name="arrow" size={14} /></a></article></div></section>

      <section className="learn-section shell" id="learn"><div className="learn-card"><div><div className="eyebrow">03 / Start here</div><h2>Curiosity is a<br /><em>good first step.</em></h2><p>Whether you are checking your first block or running a full node, MYPITCOIN is designed to make the network feel legible.</p><button className="button button-primary" onClick={() => scrollTo('network')}>Take the tour <Icon name="arrow" size={17} /></button></div><div className="steps"><div><span>01</span><p><b>Connect</b><br />Bring your node or API online.</p></div><div><span>02</span><p><b>Explore</b><br />Read the network in context.</p></div><div><span>03</span><p><b>Understand</b><br />Make informed observations.</p></div></div></div></section>

      <footer className="footer shell"><a className="brand" href="#top"><span className="brand-mark">₿</span><span>MYPITCOIN</span></a><span>Open source interface for an open network.</span><div><a href="https://github.com/expoxtechinc/MYPITCOIN" target="_blank" rel="noreferrer">GitHub</a><a href="#learn">Docs</a><a href="#top">Back to top ↑</a></div></footer>
      <div className="disclaimer shell">MYPITCOIN is an interface concept and does not provide financial advice, custody, or investment recommendations. Dashboard values shown above are illustrative demo data until a live data source is connected.</div>
    </main>
  )
}

export default App
