# Pockit AI: Your Intelligent Second Brain, Right in Your Browser

> **"Never forget, always organized, ready when you are."**

Pockit AI is a 100% private, browser-based "Secondary Pocket" for developers. Inspired by the "Fourth-Dimensional Pocket," it allows you to **toss** in code fragments, notes, and technical snippets casually and **pull** them out with AI-powered semantic precision. 

**Zero Cloud. Zero Latency. Zero Privacy Risks.**

---

## ⚡ Why Pockit AI?

Current note-taking tools are either too heavy or rely on cloud AI, which poses security risks for sensitive code. Pockit AI solves this by running state-of-the-art Small Language Models (SLM) directly in your browser using **WebGPU acceleration**.

- **Privacy First:** 100% Local execution. Your data never leaves your machine.
- **Semantic Intelligence:** Find what you need by *meaning*, not just keywords.
- **Developer Centric:** Optimized for code snippets, technical documentation, and rapid-fire learning notes.

---

## 🛠️ Feature Roadmap

Pockit AI is built in modular, functional phases:

- **Phase 1: The "Digital Pocket" (Local Persistence & Smart Storage)**
  - [ ] Reliable private storage for code/text using **Dexie.js**.
  - [ ] **"Quick Toss"** Input Area: Smart detection of Markdown and Code blocks.
- **Phase 2: "Deep Retrieval" (Semantic Search & Discovery)**
  - [ ] **Transformers.js** Integration: Local vectorization of every saved fragment.
  - [ ] **Conceptual Search**: Find fragments by meaning, not just keywords.
- **Phase 3: "In-Browser Intelligence" (SLM-Powered Insights)**
  - [ ] **WebLLM** Integration: Local **Phi-3.5-mini** execution.
  - [ ] **"Insight Panel"**: Locally-generated AI summaries and action item extraction.
- **Phase 4: "Synthesis Engine" (Topic Mapping & Knowledge Canvas)**
  - [ ] **Auto-Clustering**: Automated grouping of related fragments.
  - [ ] **Topic Canvas**: Dedicated workspace for clustered ideas and AI-generated guides.

---

## 🏗️ Technical Architecture & Compatibility

Selected for maximum privacy and modern browser performance:

- **Frontend:** [Next.js 14 (App Router)](https://nextjs.org/) + [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) + [Framer Motion](https://www.framer.com/motion/) (For premium micro-interactions)
- **Local DB:** [Dexie.js](https://dexie.org/) (IndexedDB wrapper)
- **AI Engines:** [Transformers.js](https://huggingface.co/docs/transformers.js/index) + [WebLLM](https://webllm.mlc-ai.org/)
- **Core Model:** Phi-3.5-mini-instruct (3.8B, 4-bit)

### 💻 Hardware Support
- **Recommended (Premium):** RTX 3060+ (6GB VRAM) / RX 6600+ (8GB) / Apple M1 Pro+ (16GB RAM).
- **Minimum (Functional):** GTX 1060 (6GB) / RX 580 (8GB) / Apple M1 (8GB).
- **Acceleration:** Native **WebGPU** (Default) with WebAssembly (WASM) fallback.

---

## 🔒 Security & Privacy

Privacy is not a feature; it's the core philosophy.
- No backend API calls for AI processing.
- No tracking or telemetry.
- Models are cached locally using the Browser Cache API.

---

## 🚀 Getting Started (Development)

*This project is currently under active development.*

```bash
# Clone the repository
git clone https://github.com/your-username/pockit.git

# Install dependencies
npm install

# Run the development server
npm run dev
```

---

## 👤 Author

**[Shan-Yu Chou / Shanyueel]**
- Personal Portfolio: [https://portfolio-shanyu-chou.vercel.app/](https://portfolio-shanyu-chou.vercel.app/)
- LinkedIn: [https://www.linkedin.com/in/shan-yu-chou/](https://www.linkedin.com/in/shan-yu-chou/)

---

*Project created as a showcase of modern web capabilities and local-first AI architecture.*
