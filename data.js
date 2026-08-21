// ===== CASE STUDIES =====
// Order: lead with hard business outcomes (placements, corporate, institutional,
// student wins) before the legacy social-impact/press stories.
const caseStudies = [
  {
    id:'placement',
    title:'Placement Success',
    cover:'assets/events/srieshwar-preplacement.jpg',
    blurb:'Readiness that converts to offers.',
    desc:'Pre-placement training and live interview simulations giving final-year students a measurable edge.',
    body:'Our pre-placement talks, live interview simulations, and aptitude training give final-year students a measurable edge with recruiters. At Sri Eshwar College and beyond, structured placement preparation has consistently improved interview conversion and offer rates for partner campuses.',
    stats:[['127+','Industry Mentors'],['12+','Partner Institutions'],['High','Interview Conversion']],
    gallery:['assets/events/srieshwar-preplacement.jpg','assets/events/sathyabama-audience.jpg']
  },
  {
    id:'corporate',
    title:'Corporate Success Stories',
    cover:'assets/events/psg-datareveal.jpg',
    blurb:'Applied AI, real commercial capability.',
    desc:'High-impact corporate workshops upskilling enterprise tech teams in applied AI and data analytics.',
    body:'Beyond campuses, Sarveshwar delivers high-impact corporate workshops that upskill enterprise tech teams in applied AI, data analytics, and modern engineering practice — translating academic depth into real commercial capability for partner organizations.',
    stats:[['Live','Industry Workshops'],['Applied AI','Core Focus'],['Enterprise','Delivery Model']],
    gallery:['assets/events/psg-datareveal.jpg','assets/events/sathyabama-genai.jpg']
  },
  {
    id:'institution',
    title:'Institutional Transformation',
    cover:'assets/events/kiot-fdp.jpg',
    blurb:'Upgrading faculty, upgrading outcomes.',
    desc:'Faculty Development Programs helping colleges modernize curriculum delivery and accreditation readiness.',
    body:'Through multi-day Faculty Development Programs in Applied and Generative AI, Sarveshwar has helped partner institutions like KIOT and Adhiparasakthi Engineering College strengthen faculty capability, modernize curriculum delivery, and move closer to NAAC and NBA accreditation goals.',
    stats:[['12+','Institutions Engaged'],['Multi-day','FDP Format'],['NAAC/NBA','Accreditation Support']],
    gallery:['assets/events/kiot-fdp.jpg','assets/events/kiot-visit.jpg','assets/events/adhiparasakthi-faculty.jpg']
  },
  {
    id:'student',
    title:'Student Success Stories',
    cover:'assets/naanum-oru-sathanayalan/nos-12.jpeg',
    blurb:'Hidden potential, public recognition.',
    desc:'First-generation achievers turning mentorship and training into stage-felicitated success.',
    body:'From first-year hesitation to stage-felicitated achievement — students across our partner campuses have used Sarveshwar’s mentoring, technical training, and motivational platforms to break through academic and economic barriers. Each story reinforces the same truth: with the right guidance, any student can become a champion.',
    stats:[['1000+','Students Trained'],['50+','Achievers Awarded'],['12+','Partner Campuses']],
    gallery:['assets/naanum-oru-sathanayalan/nos-12.jpeg','assets/naanum-oru-sathanayalan/nos-27.jpeg','assets/naanum-oru-sathanayalan/nos-08.jpeg']
  },
  {
    id:'nos',
    title:'Naanum Oru Sathanayalan',
    cover:'assets/naanum-oru-sathanayalan/nos-01.jpeg',
    blurb:'"I can become a champion too."',
    desc:'A motivational movement identifying, training, and publicly celebrating high-potential students across two editions.',
    body:'A high-intensity motivational and empowerment movement dedicated to identifying, training, and awarding high-potential students. Across two historic editions, Sarveshwar has located raw, hidden talent, paired them with elite industry mentors, and celebrated their excellence on grand public stages — proving that background can never stop anyone from becoming a champion.',
    stats:[['2','Editions Completed'],['25,000+','Students Motivated'],['127+','Mentors Engaged']],
    gallery:['assets/naanum-oru-sathanayalan/nos-01.jpeg','assets/naanum-oru-sathanayalan/nos-10.jpeg','assets/naanum-oru-sathanayalan/nos-20.jpeg']
  },
  {
    id:'hindu-penny',
    title:'The Hindu — "Each Penny Counts"',
    cover:'assets/case-studies/case-study-1.png',
    blurb:'National press: a Re. 1 coin a day, multiplied by collective heart.',
    desc:'The Hindu features students of Sri Eshwar College dropping a Re. 1 coin every day to fund grassroots social service in Coimbatore.',
    body:'Featured in The Hindu on 07.03.2012, the "Each Penny Counts" movement showed how students of Sri Eshwar College of Engineering drop a Re. 1 coin every single day into a community drop-box. Channelled through the Sri Eshwar Students Social Welfare Association, these daily micro-contributions are pooled to carry out real social service activities across Coimbatore — proving that monumental change doesn\'t require massive wealth, just massive heart and consistency.',
    stats:[['07.03.2012','Featured in The Hindu'],['₹1 / day','Per Student'],['Coimbatore','Social Welfare Drive']],
    gallery:['assets/case-studies/case-study-1.png']
  },
  {
    id:'hindu-surgery',
    title:'The Hindu — Student-Funded Surgery',
    cover:'assets/case-studies/case-study-2.png',
    blurb:'Micro-contributions that funded a life-changing surgery.',
    desc:'The Hindu reports how student contributions funded a first-of-its-kind surgery at KMC Hospital, Coimbatore.',
    body:'Featured in The Hindu on 06.04.2012, this story captured the real-world impact of student micro-contributions: a first-of-its-kind surgery at KMC Hospital, Coimbatore, funded by the collective giving of college students. The Dean of the hospital, Ramkumar Raghupathy, praised it as a fantastic effort, noting it would enable the hospital to perform surgeries for more needy persons — and urged more students to step forward into such activities. It stands as proof that consistent, socially-minded student action translates directly into lives changed.',
    stats:[['06.04.2012','Featured in The Hindu'],['KMC Hospital','Surgery Funded'],['First','Of Its Kind']],
    gallery:['assets/case-studies/case-study-2.png']
  },
  {
    id:'rupee',
    title:'₹1 Rupee Scheme',
    cover:'assets/case-studies/one-rupee-scheme.jpeg',
    blurb:'Massive heart, not massive wealth.',
    desc:'Micro-contributions of just one rupee, an initiative started by C. Sylendra Babu IPS, fund real social welfare programs across the region.',
    body:'Monumental change doesn’t require massive wealth — just massive heart. The ₹1 Rupee Scheme was started by C. Sylendra Babu IPS, whose vision showed that gathering a single rupee from passionate contributors at scale could fund real, lasting social impact. Channelled through the Sarveshwar community, these micro-contributions have funded emergency medical aid, welfare drives, and education sponsorships for underprivileged children. What began as a small community gesture has grown into a sustained movement proving that consistent micro-contributions can create structural societal impact.',
    stats:[['C. Sylendra Babu IPS','Scheme Founder'],['25,000+','Lives Touched'],['100%','Funds to Welfare']],
    gallery:['assets/case-studies/one-rupee-scheme.jpeg']
  },
  {
    id:'man-of-humanity',
    title:'Founder Honoured — "Man of Humanity 2013"',
    cover:'assets/case-studies/man-of-humanity.jpeg',
    blurb:'Recognized for a decade of grassroots social impact.',
    desc:'Sarveshwar Academy\'s Founder, Sakthikumaran K, was honoured with the "Man of Humanity 2013" award for his contributions to community welfare and social entrepreneurship.',
    body:'In 2013, Sarveshwar Academy\'s Founder, Sakthikumaran K, was conferred the "Man of Humanity" award in recognition of his sustained commitment to grassroots social welfare — from student-led micro-contribution movements to community medical aid and education sponsorships for underprivileged children. The honour reflects a career built on the belief that true leadership is measured by impact on the most vulnerable, a philosophy that continues to shape Sarveshwar Academy\'s mission today.',
    stats:[['2013','Year Honoured'],['Man of Humanity','Award Title'],['Community Impact','Recognition For']],
    gallery:['assets/case-studies/man-of-humanity.jpeg']
  }
];

// ===== EVENTS =====
const upcomingEvents = [
  {
    type:'Placement Training',
    title:'KIOT — Hexaware Prompt Engineering Round',
    date:'July 2026',
    desc:'Placement training for final-year students at Knowledge Institute of Technology (KIOT) for the Prompt Engineering round of the Hexaware hiring process.',
    blurb:'Prepping KIOT students for Hexaware\'s Prompt Engineering hiring round.',
    body:'Sarveshwar Academy ran a focused placement training program at Knowledge Institute of Technology (KIOT), preparing final-year students for the Prompt Engineering round of the Hexaware hiring process.',
    cover:'assets/events/kiot-hexaware-placement-5.jpg',
    gallery:[
      'assets/events/kiot-hexaware-placement-5.jpg',
      'assets/events/kiot-hexaware-placement-1.jpg',
      'assets/events/kiot-hexaware-placement-2.jpg',
      'assets/events/kiot-hexaware-placement-3.jpg',
      'assets/events/kiot-hexaware-placement-4.jpg',
      'assets/events/kiot-hexaware-placement-6.jpg',
      'assets/events/kiot-hexaware-placement-7.jpg'
    ]
  },
  {
    type:'GenAI & Technical Workshops',
    title:'MCET — Two-Day Hands-on Training on Prompt Engineering',
    date:'19–20 August 2026',
    desc:'A two-day hands-on training program on Prompt Engineering for students at Dr. Mahalingam College of Engineering and Technology (MCET).',
    blurb:'Two days of hands-on Prompt Engineering practice at MCET.',
    body:'Sarveshwar Academy ran a two-day, lab-based training program on Prompt Engineering for students at Dr. Mahalingam College of Engineering and Technology (MCET) — building practical, hands-on fluency with modern AI tools through guided exercises.',
    cover:'assets/events/mcet-prompt-engineering-1.jpg',
    gallery:[
      'assets/events/mcet-prompt-engineering-1.jpg',
      'assets/events/mcet-prompt-engineering-2.jpg',
      'assets/events/mcet-prompt-engineering-3.jpg'
    ]
  },
  {
    type:'GenAI & Technical Workshops',
    title:'Annapoorana Engineering College, Salem — Training on AI, Generative AI & Prompt Engineering',
    date:'13 August 2026',
    desc:'A two-day training program on AI, Generative AI, and Prompt Engineering for students at Annapoorana Engineering College, Salem.',
    blurb:'Two days going hands-on with AI, GenAI, and Prompt Engineering at Annapoorana.',
    body:'Sarveshwar Academy delivered a two-day training program on AI, Generative AI, and Prompt Engineering to a packed auditorium of students at Annapoorana Engineering College, Salem — pairing live demonstrations with guided practice.',
    cover:'assets/events/annapoorna-ai-workshop-1.jpg',
    gallery:[
      'assets/events/annapoorna-ai-workshop-1.jpg',
      'assets/events/annapoorna-ai-workshop-2.jpg',
      'assets/events/annapoorna-ai-workshop-3.jpg'
    ]
  },
  {
    type:'Faculty Development Programs',
    title:'KIOT — Faculty Development Programme on Emerging AI Technologies',
    date:'6-Day Programme',
    desc:'A six-day Faculty Development Programme (FDP) on emerging AI technologies for faculty at Knowledge Institute of Technology (KIOT).',
    blurb:'Six days upskilling KIOT faculty on emerging AI technologies.',
    body:'Sarveshwar Academy ran a six-day Faculty Development Programme (FDP) on emerging AI technologies for faculty at Knowledge Institute of Technology (KIOT), building the technical depth needed to bring modern AI into the classroom.',
    cover:null,
    gallery:[]
  },
  {
    type:'Career Readiness',
    title:'Sarveshwar Academy — Resume Building Workshop',
    date:'15 August 2026 · Online',
    desc:'An online Resume Building Workshop open to students, covering how to structure and write a resume that gets noticed by recruiters.',
    blurb:'A live online workshop on writing a resume recruiters actually notice.',
    body:'Sarveshwar Academy hosted an online Resume Building Workshop, walking students through how to structure, write, and polish a resume that stands out to recruiters — from formatting fundamentals to framing real project and internship experience.',
    cover:null,
    gallery:[]
  },
  {
    type:'GenAI & Technical Workshops',
    title:'KIOT — AI Tools Exploration Programme for First-Year Students',
    date:'For First-Year Students',
    desc:'An AI Tools Exploration Programme introducing first-year students at Knowledge Institute of Technology (KIOT) to practical, everyday AI tooling.',
    blurb:'Introducing KIOT\'s first-years to practical, everyday AI tooling.',
    body:'Sarveshwar Academy ran an AI Tools Exploration Programme for first-year students at Knowledge Institute of Technology (KIOT), giving them an early, hands-on introduction to the AI tools that now shape modern engineering workflows.',
    cover:null,
    gallery:[]
  }
];

// ===== TESTIMONIALS =====
// SAMPLE/ILLUSTRATIVE content — these names and quotes were written to show the
// intended tone and level of detail. Swap them for verified, real student
// testimonials (with permission) before this site goes live, so nothing
// published reads as a real endorsement that wasn't actually given.
const testimonials = [
  {
    name:'Priyadharshini R',
    designation:'Final Year, B.Tech CSE, Sri Eshwar College of Engineering',
    story:'Sarveshwar\'s mock interview panels put me through real pressure, then broke down every answer afterward. I walked into my actual placement interview calm — and got the offer.'
  },
  {
    name:'Arun Kumar S',
    designation:'Graduate, Mechanical Engineering, PSG College of Technology',
    story:'As a core mechanical student, I never thought AI and data analytics were "for me" — one workshop changed that. We built on real datasets from day one, and it opened up a whole new career path.'
  },
  {
    name:'Divya Bharathi M',
    designation:'B.Tech AI & Data Science, Sathyabama Institute of Science and Technology',
    story:'The GenAI sessions actually kept up with the industry instead of teaching outdated material. We shipped a working prototype, and I referenced that same project in every interview I gave.'
  },
  {
    name:'Karthik Raja V',
    designation:'Final Year, ECE, Karpagam Academy of Higher Education',
    story:'Sarveshwar folded placement prep and UPSC prelims prep into one campus schedule, so I stopped choosing between them. Cleared prelims and reached my final placement round the same semester.'
  },
  {
    name:'Swetha Ramesh',
    designation:'B.Tech IT, SSN College of Engineering',
    story:'The language training was my real unlock — from basic Japanese to passing JLPT N4, alongside the technical mentorship. An overseas career finally felt realistic, not just someday-maybe.'
  }
];

// ===== GENERIC AUTO-ADVANCING CAROUSEL =====
// Builds the slides from `items`, wires arrows + dots, and auto-rotates with a
// time delay. Each slide opens the full-story modal by default (Cancel option
// included), or pass `slideHtml`/`onClick` to customize markup and click behavior.
function buildCarousel(opts){
  const track=document.getElementById(opts.trackId);
  const dotsEl=document.getElementById(opts.dotsId);
  const carEl=document.getElementById(opts.carId);
  const items=opts.items;
  let index=0,timer;

  items.forEach((it,i)=>{
    const slide=document.createElement('div');
    slide.className='car-slide';
    slide.innerHTML = opts.slideHtml ? opts.slideHtml(it) : `
      <img src="${it.cover||it.gallery[0]}" alt="${it.title}" loading="lazy">
      <div class="catalog-label"><span class="dot"></span>Fig. ${String(i+1).padStart(2,'0')}</div>
      <div class="cinfo"><h3>${it.title}</h3><p>${it.desc||''}</p></div>`;
    slide.addEventListener('click',()=>{
      if(opts.onClick)opts.onClick(it);
      else openModal(opts.toModal?opts.toModal(it):it);
    });
    track.appendChild(slide);
  });

  function visCount(){const w=carEl.clientWidth||innerWidth;return w<700?1:w<1000?2:3;}
  function maxIndex(){return Math.max(0,items.length-visCount());}
  function render(){
    const pct=100/visCount();
    [...track.children].forEach(s=>s.style.flex=`0 0 ${pct}%`);
    // Fewer items than a full row (e.g. just one event so far): center them
    // instead of leaving them stuck against the left edge. No-ops once
    // enough items exist to fill the row on their own.
    track.style.justifyContent = items.length < visCount() ? 'center' : '';
    if(index>maxIndex())index=maxIndex();
    track.style.transform=`translateX(-${index*pct}%)`;
    dotsEl.innerHTML='';
    for(let i=0;i<=maxIndex();i++){
      const dot=document.createElement('span');
      if(i===index)dot.classList.add('active');
      dot.addEventListener('click',()=>go(i));
      dotsEl.appendChild(dot);
    }
  }
  function go(i){const mi=maxIndex();index=i<0?mi:i>mi?0:i;render();restart();}
  function next(){go(index+1>maxIndex()?0:index+1);}
  function prev(){go(index-1<0?maxIndex():index-1);}
  function restart(){clearInterval(timer);timer=setInterval(next,opts.delay||4500);}
  document.getElementById(opts.nextId).addEventListener('click',e=>{e.stopPropagation();next();});
  document.getElementById(opts.prevId).addEventListener('click',e=>{e.stopPropagation();prev();});
  addEventListener('resize',render);
  render();restart();
}

// ===== CASE STUDIES CAROUSEL (auto-rotating, click for full story) =====
buildCarousel({
  items:caseStudies,
  trackId:'caseTrack',dotsId:'caseDots',carId:'caseCarousel',
  prevId:'casePrev',nextId:'caseNext',delay:5000
});

// ===== EVENTS CAROUSEL =====
// Events with a cover photo show the photo and open the full-story gallery
// modal on click; placeholder cards (no photo yet) keep the icon badge and
// click through to the contact form.
buildCarousel({
  items:upcomingEvents,
  trackId:'carTrack',dotsId:'carDots',carId:'carousel',
  prevId:'carPrev',nextId:'carNext',delay:4000,
  slideHtml:ev=>`
    <div class="evt-thumb">
      <span class="evt-type">${ev.type}</span>
      ${ev.cover
        ? `<img src="${ev.cover}" alt="${ev.title}" loading="lazy">`
        : `<svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="3"/><path d="M3 9h18M8 2v4M16 2v4"/></svg>`}
    </div>
    <div class="cinfo"><h3>${ev.title}</h3><p>${ev.date}</p><p style="margin-top:4px">${ev.desc}</p></div>`,
  onClick:(ev)=>{
    if(ev.cover) openModal(ev);
    else if(typeof openContact==='function') openContact();
  }
});

// ===== TESTIMONIALS CAROUSEL (text quote cards — name & message, no video) =====
buildCarousel({
  items:testimonials,
  trackId:'testimonialTrack',dotsId:'testimonialDots',carId:'testimonialCarousel',
  prevId:'testimonialPrev',nextId:'testimonialNext',delay:5000,
  slideHtml:t=>`
    <div class="tst-card">
      <svg class="tst-quote-mark" viewBox="0 0 24 24" width="30" height="30" fill="currentColor"><path d="M7 7h5v5c0 3-2 5-5 5H6v-2h1c2 0 3-1 3-3H7V7zm9 0h5v5c0 3-2 5-5 5h-1v-2h1c2 0 3-1 3-3h-3V7z"/></svg>
      <p class="tst-story">"${t.story}"</p>
      <div class="tst-foot">
        <div class="tst-avatar">${(t.name||'?').trim().charAt(0).toUpperCase()}</div>
        <div>
          <h3 class="tst-name">${t.name}</h3>
          ${t.designation?`<p class="tst-role">${t.designation}</p>`:''}
        </div>
      </div>
    </div>`,
  onClick:()=>{}
});

// ===== MODAL =====
const modal=document.getElementById('modal');
const modalHero=document.getElementById('modalHero');
const modalTitle=document.getElementById('modalTitle');
const modalBlurb=document.getElementById('modalBlurb');
const modalBody=document.getElementById('modalBody');
const modalStats=document.getElementById('modalStats');
const modalGallery=document.getElementById('modalGallery');

function openModal(item){
  modalHero.src=item.cover||item.gallery[0];
  modalTitle.textContent=item.title;
  modalBlurb.textContent=item.blurb||'';
  modalBlurb.style.display=item.blurb?'block':'none';
  modalBody.textContent=item.body;
  modalStats.innerHTML='';
  (item.stats||[]).forEach(([num,lbl])=>{
    const d=document.createElement('div');
    d.innerHTML=`<b>${num}</b><small>${lbl}</small>`;
    modalStats.appendChild(d);
  });
  modalStats.style.display=(item.stats&&item.stats.length)?'grid':'none';
  modalGallery.innerHTML='';
  (item.gallery||[]).forEach(src=>{
    const img=document.createElement('img');
    img.src=src;img.loading='lazy';
    img.addEventListener('click',()=>{modalHero.src=src;});
    modalGallery.appendChild(img);
  });
  modal.classList.add('open');
}
document.getElementById('modalClose').addEventListener('click',()=>modal.classList.remove('open'));
document.getElementById('modalCancel').addEventListener('click',()=>modal.classList.remove('open'));
modal.addEventListener('click',e=>{if(e.target===modal)modal.classList.remove('open');});
addEventListener('keydown',e=>{if(e.key==='Escape')modal.classList.remove('open');});

// ===== PROGRAM DETAILS (for "Learn More" popups) =====
const programDetails = {
  school: {
    tag: 'The Early Genius & Civil Services Ecosystem',
    title: 'Future-Proof Your Campus with Early Tech Dominance & Civil Services Foundations',
    body: 'The Core Problem: Traditional schooling prepares kids for yesterday, ignoring both the AI revolution and hyper-competitive national examinations like IAS, IPS, or IIT-JEE. Parents are forced to send their children to external weekend tuition centers, and schools without an on-campus edge risk losing their premium market standing.',
    points: [
      { name: 'Young Innovators AI Labs', desc: 'Hands-on, age-appropriate AI, robotics, and coding ecosystems built right into your school.' },
      { name: 'Civil Services & Olympiad Foundations', desc: 'Early-stage mental aptitude, general awareness, and logical reasoning modules.' },
      { name: 'Vedic Speed Maths & Cognitive Edge', desc: 'Advanced mental calculation frameworks and problem-solving drills.' }
    ],
    why: "We don't just sell tools; we co-brand your school as the ultimate modern tech academy and administrative grooming hub in your region."
  },
  college: {
    tag: 'The Tier-1 Employability & Civil Services Hub',
    title: 'Transform Your Institution into a High-Tier Placement Hub & Civil Services Academy',
    body: "The Core Problem: Declining campus placement rates and flatlining competitive exam crack rates damage your institution's prestige. Students are constantly distracted, balancing college degrees with external coaching classes for corporate jobs or government exams, resulting in poor career outcomes across the board.",
    points: [
      { name: 'Integrated Civil Services Engine', desc: 'Comprehensive, campus-embedded coaching tracks for UPSC, State PSC, and elite government exams seamlessly built into the weekly schedule.' },
      { name: '720-Hour Curated Placement Track', desc: 'Intensive technical, coding, and corporate aptitude mastery.' },
      { name: '3-Phase Transformation Model', desc: 'Institutional roadmap covering faculty upskilling (FDPs) and curriculum optimization to secure top NAAC & NBA accreditations.' }
    ],
    why: 'We turn traditional colleges into elite launchpads that deliver verifiable corporate placements and prestigious national exam selections.'
  },
  corporate: {
    tag: 'Next-Gen Enterprise Upskilling',
    title: 'Turn Your Engineering Workforce into Elite Tech Architects',
    body: 'The Core Problem: A rapidly aging tech stack stalls product delivery. Wasting thousands of dollars on slow, passive training videos leaves your engineering teams conceptually aware but practically incapable of executing at speed, delaying crucial deployment cycles and hurting your market agility.',
    points: [
      { name: 'Enterprise AI & GenAI Deep-Dives', desc: 'Hyper-focused training to help your workforce deploy production-grade AI models securely within your infrastructure.' },
      { name: 'Active Industry Practitioners', desc: 'Workshops designed and led exclusively by working engineers facing active, real-world tech challenges.' },
      { name: 'Custom Stack Sprints', desc: "Tailored bootcamps completely aligned with your company's specific cloud architectures and project pipelines." }
    ],
    why: 'We deliver direct technical ROI, drastically shrinking your deployment cycles and maximizing your workforce output.'
  },
  professional: {
    tag: 'Global Career Acceleration',
    title: 'Break the Income Ceiling with High-Demand Skills & Global Mobility',
    body: 'The Core Problem: Hard work and basic technical skills mean very little if you are trapped in a saturated, localized job market. Without niche expertise and cross-border capabilities, your career growth plateaus while inflation outpaces your salary increments.',
    points: [
      { name: 'Applied AI Technical Mastery', desc: 'Hands-on training in Generative AI engineering, advanced data systems, and cloud architecture.' },
      { name: 'Cross-Border Language Pathways', desc: 'Native-level training in Japanese (JLPT mapping), German, and French to prep you for direct global relocation.' },
      { name: '1-on-1 Executive Mentorship', desc: 'Direct career mapping, technical resume optimization, and mock panels led by our elite network of tech leaders.' }
    ],
    why: 'We bridge the exact gap standing between you and a premium, high-paying global technical career.'
  },
  incubator: {
    tag: 'The Campus R&D Engine',
    title: 'The Campus AI Incubator & Shareholding Ecosystem',
    body: 'The Core Problem: Most engineering campuses are filled with throwaway, copy-pasted student projects that serve zero commercial value. This lack of practical, production-level exposure leaves students radically unprepared for real engineering environments upon graduation, hurting your institutional ranking.',
    points: [
      { name: 'Live Industry Project Pipelines', desc: 'Connecting student cohorts directly with live, software and AI requirements from real enterprises.' },
      { name: 'Train, Build & Deploy Framework', desc: 'End-to-end guidance from initial system architecture to live server deployment.' },
      { name: 'Joint Commercialization & Equity Model', desc: 'A powerful framework where the host college retains full intellectual property (IP) and ownership of the developed products. Sarveshwar then builds and executes a global Go-to-Market (GTM) strategy to commercialize these products, sharing the profits back with the college while retaining a small equity/revenue percentage for its global market-entry services.' }
    ],
    why: "We create a self-sustaining technical ecosystem that turns a college lab into a commercial software house. By combining your students' development power with Sarveshwar's global market reach, we convert standard academic projects into high-value institutional IP and recurring global revenue streams for your college."
  },
  enterprise: {
    tag: 'The Rapid Scaling Engine',
    title: 'Scale Your Product from Blueprint to Deployment',
    body: 'The Core Problem: Finding vetted, high-quality technical talent is an expensive, time-consuming nightmare. Bad engineering hires, fragmented architectural decisions, and mismanaged MVP timelines can kill a product before it ever reaches the market.',
    points: [
      { name: 'Elite Tech Team Provisioning', desc: "We source, vet, and train dedicated development squads tailored specifically to your company's product demands." },
      { name: 'MVP & Product Co-Development', desc: 'End-to-end architecture design, rapid prototyping, and scalable product engineering overseen by senior technical heads.' },
      { name: 'Agile Knowledge Transfer', desc: 'Seamlessly handing over the complete code base, architectural documentation, and operational workflows to your internal team.' }
    ],
    why: 'We handle the technical friction so you can focus entirely on market validation, scaling operations, and hitting your product deadlines on budget.'
  }
};
