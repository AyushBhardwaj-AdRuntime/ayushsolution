export const blogPosts = [
  {
    id: 'building-real-time-ai-interviewer',
    title: "Building a Real-Time AI Interviewer with Gemini",
    category: "AI Engineering",
    date: "September 2026",
    excerpt: "Integrating the Gemini Live API with WebSockets for autonomous, real-time voice interviews.",
    image: "/real_time_audio_processing_1789703508131.jpg",
    content: `
      <p>Traditional technical interviews are time-consuming and notoriously difficult to scale. To solve this, I set out to build an autonomous AI interviewer capable of holding a fluid, real-time technical conversation with a candidate. The result was MockHire AI.</p>
      
      <p>The core engineering challenge was delivering a low-latency, autonomous interviewing experience. To achieve this, I leveraged the <strong>Gemini Live API</strong>.</p>
      
      <h3>Why Gemini Live?</h3>
      <p>The Gemini Live API allows for native audio-in/audio-out streaming directly via bi-directional WebSockets. This bypasses the need for intermediary processing steps, streaming audio chunks directly and reducing round-trip latency to enable real-time candidate evaluation.</p>

      <img src="/real_time_audio_processing_1789703508131.jpg" alt="Real-Time Audio Waveforms" style="width:100%; height:auto; border-radius:8px; margin:40px 0; border:1px solid rgba(255,255,255,0.1);" />

      <h3>Implementation Approach</h3>
      <p>Using React and TypeScript on the frontend alongside a Node.js backend, I established a direct WebSocket connection. The system captures the user's voice, streams the audio chunks to the Gemini Live API, and processes the model's audio stream back to the user.</p>
      
      <p>Once the audio pipeline was active, the focus shifted to <strong>Prompt Engineering</strong>. I injected the candidate's parsed resume into the system context before the session began. The prompt constraints ensured the AI acted as a strict but constructive technical interviewer, dynamically generating responses to continue the interview flow.</p>
    `,
    isFeatured: true
  },
  {
    id: 'building-mock-hire-pipeline',
    title: "Building Mock Hire: From Resume to AI-Powered Assessment",
    category: "Architecture",
    date: "August 2026",
    excerpt: "An end-to-end look at Mock Hire's product pipeline, from parsing resumes to generating dynamic technical evaluations.",
    image: "/ai_pipeline_flow_1789703493654.jpg",
    content: `
      <p>MockHire isn't just a wrapper around an LLM; it's a complete assessment pipeline capable of generating technical scores and hiring recommendations. Here is how I built the data flow.</p>
      
      <img src="/ai_pipeline_flow_1789703493654.jpg" alt="Mock Hire AI Pipeline Architecture" style="width:100%; height:auto; border-radius:8px; margin:40px 0; border:1px solid rgba(255,255,255,0.1);" />
      
      <h3>The Pipeline Architecture</h3>
      <ul>
        <li style="margin-bottom: 10px;"><strong>Phase 1: Ingestion.</strong> The candidate uploads a resume. The system parses the extracted text to isolate key skills and past experiences.</li>
        <li style="margin-bottom: 10px;"><strong>Phase 2: Context Generation.</strong> The extracted data is fed into the Gemini Live API to assemble the system instructions, ensuring the AI knows exactly who it is interviewing.</li>
        <li style="margin-bottom: 10px;"><strong>Phase 3: The Interview.</strong> A WebSocket session is established. The user communicates via real-time audio. The AI conducts the technical screen based on the specific skills found in the resume.</li>
        <li><strong>Phase 4: Evaluation.</strong> Once the conversation ends, the LLM checks the candidate's performance against a rubric. A final summary generates a technical score and hiring recommendation, which is then stored securely in <strong>MongoDB</strong>.</li>
      </ul>

      <h3>Evaluating the Candidate</h3>
      <p>To ensure consistency, the LLM evaluation process parses the extracted conversation and grades it. In testing, this evaluation rubric approach achieved a 98% accuracy score against manual benchmarks.</p>
      
      <p>Storing these structured results in MongoDB allows recruiters to efficiently track and manage candidate evaluations over time.</p>
    `
  },
  {
    id: 'how-i-built-mockhire-agent',
    title: "How I Built the AI Agent Behind Mock Hire",
    category: "Technical",
    date: "July 2026",
    excerpt: "Engineering a dual-WebSocket architecture to handle low-latency audio transmission and LLM streaming simultaneously.",
    image: "/dual_websocket_architecture_1789703482771.jpg",
    content: `
      <p>The technical crux of MockHire was managing the real-time audio streams securely and efficiently. To accomplish this, I architected a <strong>Dual-WebSocket Design</strong>.</p>
      
      <img src="/dual_websocket_architecture_1789703482771.jpg" alt="Dual WebSocket Architecture" style="width:100%; height:auto; border-radius:8px; margin:40px 0; border:1px solid rgba(255,255,255,0.1);" />

      <h3>The Dual-WebSocket Data Flow</h3>
      <p>The backend Node.js server acts as an orchestrator between the user's browser and the Gemini AI API.</p>

      <ol>
        <li style="margin-bottom: 10px;"><strong>Client-to-Server Socket:</strong> The React frontend captures the user's voice and streams the data over a WebSocket connection (0% data frame loss in optimal conditions) to the Node.js backend.</li>
        <li style="margin-bottom: 10px;"><strong>Server-to-Gemini Socket:</strong> The Node.js server maintains a separate secure WebSocket connection to the Google Gemini Live API, streaming the audio chunks directly to the LLM for inference.</li>
      </ol>

      <p>When Gemini generates a response, the audio flows in reverse: Gemini streams audio chunks to the Node.js server, which immediately pipes them down to the React frontend for playback.</p>

      <h3>Managing the State</h3>
      <p>By keeping the LLM connection isolated on the backend, I was able to protect API keys while still leveraging the speed of bi-directional WebSockets. The system architecture proved scalable and robust enough to handle the active stream of audio chunks required for real-time candidate evaluation.</p>
    `
  }
];

export const categories = [
  "AI Engineering",
  "Architecture",
  "Technical",
  "Career",
  "Philosophy",
  "Story"
];