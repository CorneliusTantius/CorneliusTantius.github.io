export const heroContent = {
  name: 'Tantius Cornelius',
  title: 'Backend & Infrastructure Engineer',
  bio: 'Engineer at CekatAI building backend services, infrastructure, and production architecture across AI, travel, fintech, and education. I like turning messy product problems into reliable systems: clean APIs, practical automation, observable services, and the occasional tiny frontend when the UI needs a little love. Linux and open-source enthusiast.',
  skills: [
    { name: 'Python', icon: 'python' }, { name: 'TypeScript', icon: 'ts' },
    { name: 'JavaScript', icon: 'js' }, { name: 'Java', icon: 'java' },
    { name: 'C', icon: 'c' }, { name: 'C++', icon: 'cpp' },
    { name: 'Node.js', icon: 'nodejs' }, { name: 'MongoDB', icon: 'mongodb' },
    { name: 'PostgreSQL', icon: 'postgres' }, { name: 'Redis', icon: 'redis' },
    { name: 'AWS', icon: 'aws' }, { name: 'Azure', icon: 'azure' },
    { name: 'Docker', icon: 'docker' }, { name: 'Git', icon: 'git' },
    { name: 'Linux', icon: 'linux' }, { name: 'Bash', icon: 'bash' },
  ],
  social: {
    email: 'corneliustantius.ct@gmail.com',
    linkedin: 'https://linkedin.com/in/corneliustantius',
    github: 'https://github.com/corneliustantius',
  },
}

export const workExperience = [
  { company: 'CekatAI', role: 'Senior Full Stack Engineer', period: '2026 - Present', description: [
    'Own stability engineering for the main chat product, improving reliability, scalability, and extensibility across core product services.',
    'Lead infrastructure migration and enhancement initiatives to strengthen deployment workflows, operations, and long-term maintainability.',
    'Enhance shared services platform capabilities so product teams can build, integrate, and scale services more safely and efficiently.',
  ] },
  { company: 'SingaPay', role: 'Senior Full Stack Engineer (SDE-3)', period: '2026 - 2026', description: [
    'Implemented major Virtual Account Core generation algorithm enhancement to reduce VA generation process time, latency and database load (2-3 minutes) to less than 1s generation time.',
    'Implemented pending transaction handling to reduce manual operational contact rate up to ~90%.',
    'Created end to end gift checkout web and integrate with payment link gateway.',
  ] },
  { company: 'Traveloka', role: 'Software Engineer (SDE-2)', period: '2024 - 2026', description: [
    'Built and maintain scalable backend services across Ground Transport (airport transfers, car rentals), Travel Activities (attractions, tours, experiences), and Cruise Booking domains all using Java Spring, Terraform & AWS.',
    'Drove technical excellence and cost efficiency by refactoring legacy systems and optimizing existing workflows, allowing less development complexity on 2 major product project and several subprojects (~30% on discoverability and ~20% on buyability).',
    'Designed and developed provider API integration module that allow seamless provider integration (reducing 95% development effort during integration).',
    'Improved information clarity that increase purchase conversion rate to ~10% and reduce customer contact rate ~40%.',
    'Actively maintain project vulnerability issues, manage product domain IAC using terraform.',
  ] },
  { company: 'Kamoro Maxima Integra', role: 'Junior Developer', period: '2023 - 2024', description: [
    'Developed backend system for PT Freeport Indonesia to assist mining operational audit, monitor, and safety protocol to reduce casualty and audit time for mining tools and machines.',
    'Increased operational tracking system capability up to 60%+ at the time allowing operational staff and managers to do less manual audit and increase workload efficiency on mining site.',
    'Ensured scalability, reliability and maintainability of one of most used internal program to allow site-worker to easily access transportation on mining site, allowing site-worker to able to book, schedule and manage their own transport plan.',
  ] },
  { company: 'IT Division - Bina Nusantara University', role: 'Software Engineer (SDE-2)', period: '2020 - 2023', description: [
    'Started off from Associate Member and wave through Junior Software Engineer then Software Engineer throughout college years, internship and after graduate.',
    'Developed backend systems and automation for Zoom API integration during covid, allowing attendance system to shift 100% by system during class, and later scale up the system to enable wifi-attendance checking in campus.',
    'Developed and maintained newbinusmaya project allowing student to access all class resources, class schedule, submitting assignment, scoring, and discussion forum seamlessly from web or mobile app.',
    'Developed internal project DevBees as a platform for internal documentation including API contract, Master & Transaction Database relational, and also general knowledge docs. Allowing internal documentation to have 0 cost',
  ] },
]

export const projects = [
  { name: 'Volundr', featured: true, url: 'https://github.com/CorneliusTantius/volundr', summary: 'Personal AI coding agent stack focused on extensible tools, local-first workflows, and terminal-native developer experience.', highlights: [
    'Built custom agent/runtime workflows for practical coding automation.',
    'Designed extensible tool and provider integration patterns.',
    'Optimized for fast iteration, local control, and low-friction developer UX.',
  ], tags: ['AI Agents', 'CLI', 'TypeScript', 'Developer Tools'] },
  { name: 'pi-tincan', url: 'https://github.com/CorneliusTantius/pi-tincan', summary: 'Companion package extending pi with structured clarification, delegation, and squad-style agent workflows.', highlights: [
    'Added structured decision UX through ask_user_question flows.',
    'Built tincan_squad delegation for multi-agent task execution.',
    'Improved agent communication contracts and orchestration behavior.',
  ], tags: ['Agent Orchestration', 'TypeScript', 'UX', 'Automation'] },
  { name: 'dotfiles', url: 'https://github.com/CorneliusTantius/dotfiles', summary: 'Personal Linux and development environment configuration for repeatable, keyboard-first engineering.', highlights: [
    'Maintains shell, editor, terminal, and workflow configuration.',
    'Optimized for speed, portability, and everyday engineering ergonomics.',
  ], tags: ['Linux', 'Shell', 'Neovim', 'Productivity'] },
]

export const awards = [
  { title: 'Top 7% from 964 Teams', year: '2021', description: 'Shopee Code League - Multi-Channel Contacts' },
  { title: 'Top 12% from 823 Teams', year: '2020', description: 'Shopee Code League - Product Detection 2020' },
  { title: 'Participant', year: '2017', description: 'Province Computer Olympiad - Programming Competition' },
]

export const languages = [
  { name: 'English', level: 'Native' }, { name: 'Indonesian', level: 'Native' },
  { name: 'Korean', level: 'Basic' }, { name: 'Mandarin', level: 'Basic' },
]

export const education = [{
  institution: 'Bina Nusantara University', degree: 'Bachelor of Computer Science', period: '2019-2023',
  description: 'Best Graduate with GPA 3.94/4.0',
}]
