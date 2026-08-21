/**
 * Side projects. Facts (language, star count) taken from the GitHub API
 * on 2026-08-21, descriptions written from each repo's own README.
 * Stars go stale; refresh them when you next touch this file.
 */
export interface Project {
  /** stable id, used for the DOM anchor */
  slug: string;
  name: string;
  /** one line, 90 chars or fewer */
  tagline: string;
  /** one or two sentences, 40 words or fewer */
  blurb: string;
  /** public repo URL, omitted when the repo is private */
  repo?: string;
  language: string;
  /** GitHub stars as of 2026-08-21 */
  stars: number;
  tags: string[];
  /** internal deep dive, when one exists */
  link?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: 'claudetv',
    name: 'ClaudeTV',
    tagline: 'My Claude usage on a $15 WiFi desk clock',
    blurb:
      'Open firmware for the GeekMagic SmallTV-Ultra that shows the session percentage, the weekly percentage, the model-scoped limit and the reset times, plus weather and a clock. Optional email, Discord and Slack alerts.',
    repo: 'https://github.com/latticelabs-au/ClaudeTV',
    language: 'Python',
    stars: 3,
    tags: ['esp8266', 'firmware', 'claude-code', 'hardware'],
    featured: true,
  },
  {
    slug: 'traymirror',
    name: 'traymirror',
    tagline: 'Puts the Windows 11 system tray on my second monitor',
    blurb:
      'A borderless topmost window on each secondary display renders a live DWM thumbnail of the primary tray strip. No polling, no screenshot loop, nothing injected into Explorer.',
    repo: 'https://github.com/latticelabs-au/traymirror',
    language: '.NET 10 WPF',
    stars: 0,
    tags: ['windows', 'wpf', 'dwm', 'desktop'],
    featured: true,
  },
  {
    slug: 'tailscale-pia-exit',
    name: 'tailscale-pia-exit',
    tagline: 'A Tailscale exit node whose egress runs through a PIA tunnel',
    blurb:
      'Two containers: one holds the Private Internet Access WireGuard tunnel, the other advertises itself to the tailnet as an exit node and routes out through it.',
    repo: 'https://github.com/latticelabs-au/tailscale-pia-exit',
    language: 'Shell',
    stars: 2,
    tags: ['tailscale', 'wireguard', 'docker', 'homelab'],
    featured: true,
  },
  {
    slug: 'webobsidian',
    name: 'webobsidian',
    tagline: 'Self-hosted web app for an Obsidian-compatible Markdown vault',
    blurb:
      'A CodeMirror editor, wikilinks, a graph view, search, GitHub sync and an agent API, all sitting on top of a plain Markdown vault so the notes stay ordinary files.',
    repo: 'https://github.com/latticelabs-au/webobsidian',
    language: 'TypeScript',
    stars: 0,
    tags: ['obsidian', 'markdown', 'self-hosted', 'codemirror'],
  },
  {
    slug: 'fable-babysitter',
    name: 'fable-babysitter',
    tagline: 'Auto-dismisses Fable safeguard false-flags in Claude Code on Windows',
    blurb:
      'A PowerShell watcher with a JSONL scroll gate, automatic compaction and a live TUI, so a long unattended run stops stalling on a false flag.',
    repo: 'https://github.com/latticelabs-au/fable-babysitter',
    language: 'PowerShell',
    stars: 1,
    tags: ['powershell', 'claude-code', 'windows', 'tui'],
  },
  {
    slug: 'logan',
    name: 'Logan',
    tagline: 'Multi-agent security remediation that fixes what Shannon audits find',
    blurb:
      'A pipeline of specialised agents works the vulnerability queue from a Shannon audit, applies the fixes, then re-runs the audit to check each fix actually held.',
    repo: 'https://github.com/latticelabs-au/logan',
    language: 'TypeScript',
    stars: 3,
    tags: ['security', 'multi-agent', 'claude', 'devsecops'],
    link: '/work/logan',
  },
  {
    slug: 'vae-gnn',
    name: 'EarlyBuild VAE-GNN',
    tagline: 'Capstone neural building generator with multi-objective search',
    blurb:
      'A VAE-GNN inference engine paired with an NSGA-III pipeline that scores generated building layouts on construction cost, operating cost, embodied carbon and floor area.',
    language: 'Python',
    stars: 0,
    tags: ['pytorch', 'gnn', 'nsga-iii', 'capstone'],
    link: '/work/vae-gnn',
  },
  {
    slug: 'colorgirl',
    name: 'ColorGirl',
    tagline: 'AI product-catalogue scraper to WooCommerce-ready CSV',
    blurb:
      'Crawls a supplier e-commerce site, normalises the products it finds, and writes a CSV that a WooCommerce store can import directly.',
    repo: 'https://github.com/latticelabs-au/colorgirl',
    language: 'TypeScript',
    stars: 1,
    tags: ['scraper', 'woocommerce', 'playwright', 'cli'],
  },
  {
    slug: 'intrusion-detection',
    name: 'intrusionDetection',
    tagline: 'Machine-learning intrusion detection on the KDD Cup 99 dataset',
    blurb:
      'Trains classifiers on KDD Cup 99 network connection records and sorts traffic into normal or one of the attack classes, driven from a CLI.',
    repo: 'https://github.com/addievo/intrusionDetection',
    language: 'Python',
    stars: 8,
    tags: ['machine-learning', 'security', 'random-forest', 'cli'],
  },
  {
    slug: 'phishing-detection',
    name: 'phishingDetection',
    tagline: 'Flask app that classifies phishing URLs with machine learning',
    blurb:
      'URL feature extraction, a trained random-forest classifier, and a small Flask front end that scores a pasted link.',
    repo: 'https://github.com/addievo/phishingDetection',
    language: 'Python',
    stars: 5,
    tags: ['flask', 'machine-learning', 'security', 'python'],
  },
  {
    slug: 'secure-chat-app',
    name: 'secureChatApp',
    tagline: 'Web chat that encrypts messages with asymmetric crypto',
    blurb:
      'A Flask chat app split into auth, encryption, database and routing layers, with signed sessions and asymmetric encryption doing the message security.',
    repo: 'https://github.com/addievo/secureChatApp',
    language: 'Python',
    stars: 2,
    tags: ['flask', 'cryptography', 'python', 'web'],
  },
  {
    slug: 'discord-record',
    name: 'discordRecord',
    tagline: 'Records Discord call pop-outs with OBS and Selenium',
    blurb:
      'Selenium watches for a Discord call pop-out window, tells OBS over its websocket to start recording, and stops again when the pop-out closes.',
    repo: 'https://github.com/addievo/discordRecord',
    language: 'Python',
    stars: 0,
    tags: ['obs', 'selenium', 'discord', 'automation'],
  },
  {
    slug: 'rpsml',
    name: 'rpsml',
    tagline: 'Rock paper scissors that reads your patterns and beats you',
    blurb:
      'A Nuxt and Tailwind game that watches the sequence you play, spots the repeating pattern, and picks the throw that wins. Archived, but it still works.',
    repo: 'https://github.com/addievo/rpsml',
    language: 'Vue',
    stars: 0,
    tags: ['nuxt', 'vue', 'tailwind', 'game'],
  },
  {
    slug: 'gtavi-countdown',
    name: 'GTAVICountdown',
    tagline: 'A countdown page to GTA VI, because priorities',
    blurb: 'A single page that counts down to GTA VI. That is the whole feature list.',
    repo: 'https://github.com/addievo/GTAVICountdown',
    language: 'HTML',
    stars: 0,
    tags: ['html', 'javascript', 'fun'],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const otherProjects = projects.filter((p) => !p.featured);
