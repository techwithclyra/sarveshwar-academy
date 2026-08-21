// Rule-based FAQ assistant (no external AI/LLM calls — static-site safe)
const aiTab = document.getElementById('aiTab');
const aiPanel = document.getElementById('aiPanel');
const aiMsgs = document.getElementById('aiMsgs');
const aiChips = document.getElementById('aiChips');
const aiInput = document.getElementById('aiInput');
const aiSend = document.getElementById('aiSend');

const topics = [
  {
    keys: ['program', 'programs', 'course', 'courses'],
    label: 'Programs',
    text: 'We offer School Programs, College FDPs, Corporate Training, Language Training, Mentorship, and Courses & Services — designed to take learners from classroom to industry-ready.',
    action: { label: 'View Programs', href: '#programs' }
  },
  {
    keys: ['corporate', 'enterprise training', 'upskill'],
    label: 'Corporate Training',
    text: 'Our Corporate Training delivers high-impact workshops that upskill enterprise tech teams in applied AI, data analytics, and modern engineering practice.',
    action: { label: 'Explore Corporate Training', href: '#programs' }
  },
  {
    keys: ['case study', 'case studies', 'success stor', 'impact'],
    label: 'Case Studies',
    text: 'From the ₹1 Rupee Scheme to Institutional Transformation — explore real, measurable outcomes across our case studies.',
    action: { label: 'View Case Studies', href: '#case-studies' }
  },
  {
    keys: ['fdp', 'faculty development'],
    label: 'Faculty Development Programs',
    text: 'Our Faculty Development Programs train college faculty in Applied & Generative AI, supporting NAAC & NBA accreditation goals.',
    action: { label: 'View FDP Details', href: '#programs' }
  },
  {
    keys: ['school', 'school initiative'],
    label: 'School Initiatives',
    text: 'Our School Programs cover Vedic Speed Maths, Young Innovators AI Labs, and competitive exam coaching for school students.',
    action: { label: 'View School Programs', href: '#programs' }
  },
  {
    keys: ['ai workshop', 'workshop', 'generative ai'],
    label: 'AI Workshops',
    text: 'Our AI Workshops are hands-on sessions covering applied Generative AI, data analytics, and real-world workflows for students and enterprises.',
    action: { label: 'Explore AI Workshops', href: '#programs' }
  },
  {
    keys: ['partner', 'partnership', 'collaborat'],
    label: 'Partnerships',
    text: 'We partner with institutions, enterprises, and governments to co-build future-ready talent ecosystems.',
    action: { label: 'Schedule a Meeting', mailto: true }
  },
  {
    keys: ['invest', 'investor', 'funding'],
    label: 'Investment Opportunities',
    text: 'Sarveshwar Academy is building the bridge between education and industry through AI-driven training, innovation consulting, and institutional partnerships. We’d love to walk you through our vision.',
    action: { label: 'Schedule a Meeting', mailto: true }
  },
  {
    keys: ['intern', 'internship'],
    label: 'Internships',
    text: 'Yes — we do offer internship and live-project opportunities, run through our College Programs and Mentorship track alongside active industry mentors.',
    action: { label: 'View Programs', href: '#programs' }
  },
  {
    keys: ['mentor', 'mentorship', 'guidance'],
    label: 'Mentorship',
    text: 'Our Mentorship track pairs learners one-on-one with 127+ industry experts for career guidance, mock interviews, and live project reviews.',
    action: { label: 'View Programs', href: '#programs' }
  },
  {
    keys: ['language', 'japanese', 'german', 'french', 'hindi'],
    label: 'Language Training',
    text: 'Yes — we run native-level Language Training in Japanese, German, French, and Spoken Hindi to support global career mobility.',
    action: { label: 'View Programs', href: '#programs' }
  },
  {
    keys: ['placement', 'job', 'hiring', 'recruit'],
    label: 'Placements',
    text: 'Yes — our placement preparation, aptitude training, and live interview simulations are built to get learners hiring-ready, backed by our 127+ industry mentor network.',
    action: { label: 'View Programs', href: '#programs' }
  },
  {
    keys: ['contact', 'email', 'phone', 'address', 'reach you'],
    label: 'Contact Information',
    text: 'Email: ceo@sarveshwaracademy.com<br>Phone: +91 73055 90888 / +91 73055 91888<br>Office: Thudiyalur, Coimbatore – 641034',
    action: { label: 'Contact Page', href: 'https://www.sarveshwaracademy.com' }
  }
];

const fallbackText = "I don't have specific details on that here — please contact our team and they'll get back to you shortly. Thanks for your patience!";

function addMsg(html, who) {
  const div = document.createElement('div');
  div.className = 'ai-msg ' + who;
  div.innerHTML = html;
  aiMsgs.appendChild(div);
  aiMsgs.scrollTop = aiMsgs.scrollHeight;
}

function actionLink(action) {
  if (!action) return '';
  if (action.mailto) return `<br><a href="mailto:ceo@sarveshwaracademy.com?subject=${encodeURIComponent(action.label)}">${action.label} →</a>`;
  if (action.contact) return `<br><a href="#" class="js-contact-chat">${action.label} →</a>`;
  return `<br><a href="${action.href}">${action.label} →</a>`;
}

function respond(query) {
  const q = query.toLowerCase();
  const match = topics.find(t => t.keys.some(k => q.includes(k)));
  if (match) {
    addMsg(match.text + actionLink(match.action), 'bot');
  } else {
    addMsg(fallbackText + actionLink({ contact: true, label: 'Contact Our Team' }), 'bot');
  }
  bindChatLinks();
}

function bindChatLinks() {
  aiMsgs.querySelectorAll('.js-contact-chat').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      if (typeof openContact === 'function') openContact();
    });
  });
}

function renderChips() {
  aiChips.innerHTML = '';
  topics.forEach(t => {
    const chip = document.createElement('div');
    chip.className = 'ai-chip';
    chip.textContent = t.label;
    chip.addEventListener('click', () => {
      addMsg(t.label, 'user');
      respond(t.keys[0]);
    });
    aiChips.appendChild(chip);
  });
}

const aiClose = document.getElementById('aiClose');
let aiStarted = false;
function closeAiPanel() { aiPanel.classList.remove('open'); }
aiTab.addEventListener('click', () => {
  aiPanel.classList.toggle('open');
  if (aiPanel.classList.contains('open')) startAiIfNeeded();
});
aiClose.addEventListener('click', e => { e.stopPropagation(); closeAiPanel(); });

function startAiIfNeeded() {
  if (!aiStarted) {
    aiStarted = true;
    addMsg(
      `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-3px;margin-right:4px"><path d="M18 8a6 6 0 1 0-12 0c0 4-2 5-2 5h16s-2-1-2-5"/><path d="M9 21a3 3 0 0 0 6 0"/></svg>` +
      `Hello! I'm <b>Sarveshwar AI</b>, your virtual assistant.<br><br>I can help you with Programs, Corporate Training, Case Studies, Faculty Development Programs, School Initiatives, AI Workshops, Partnerships, Investment Opportunities, and Contact Information. Tap a topic below or type your question.`,
      'bot'
    );
    renderChips();
  }
}

aiSend.addEventListener('click', sendMessage);
aiInput.addEventListener('keydown', e => { if (e.key === 'Enter') sendMessage(); });
function sendMessage() {
  const val = aiInput.value.trim();
  if (!val) return;
  addMsg(val, 'user');
  aiInput.value = '';
  respond(val);
}
