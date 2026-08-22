const projects = {
  sage: {
    index: '01', accent: '#8ae5ff', name: 'SAGE', type: 'ERP / BUSINESS OPS', code: 'SYS.001', status: 'CORE OPERATIONAL SYSTEM', images: ['img/SAGE.png', 'img/Sage1.jpeg', 'img/Sagepdv.jpeg'],
    pt: { node: 'Sistema de gestão', description: 'Um sistema de gestão empresarial pensado para conectar os pontos da operação — produtos, clientes, financeiro e ponto de venda — em um só ambiente.', modules: ['Cadastro inteligente', 'Consulta de CNPJ', 'Financeiro', 'PDV', 'Relatórios'], stack: ['Python', 'Node.js', 'PHP', 'Flask'], action: 'ABRIR DOSSIÊ COMPLETO', screenshot: 'VISÃO GERAL / ERP', modalTitle: 'SAGE — gestão que conversa com a operação', modalCopy: 'O SAGE é uma plataforma de gestão empresarial que reúne cadastro de produtos e clientes, consulta de CNPJ, relatórios financeiros e PDV. O projeto explora uma visão integrada da rotina empresarial, incluindo recursos de identificação automática de produtos.' },
    en: { node: 'Management system', description: 'A business management system designed to connect the moving parts of operations — products, customers, finances and point of sale — in one environment.', modules: ['Smart records', 'CNPJ lookup', 'Finance', 'POS', 'Reports'], stack: ['Python', 'Node.js', 'PHP', 'Flask'], action: 'OPEN FULL DOSSIER', screenshot: 'OVERVIEW / ERP', modalTitle: 'SAGE — management connected to operations', modalCopy: 'SAGE is a business-management platform that brings together product and customer records, CNPJ lookup, financial reports and POS. The project explores an integrated view of the business routine, including automatic product-identification features.' }
  },
  nasa: {
    index: '02', accent: '#d1bcff', name: 'NASA Explorer', type: 'WEB APP / DATA API', code: 'EXP.002', status: 'ORBITAL DATA INTERFACE', images: ['img/Nasalogo.png', 'img/Nasa.png', 'img/Nasa2.png', 'img/Nasa3.png'],
    pt: { node: 'Exploração espacial', description: 'Uma experiência de exploração espacial que aproxima dados da NASA de uma interface curiosa, visual e navegável.', modules: ['APIs da NASA', 'Asteroides', 'Interface exploratória', 'Dados em tempo real'], stack: ['HTML', 'CSS', 'JavaScript', 'NeoWS'], action: 'ABRIR DOSSIÊ COMPLETO', screenshot: 'INTERFACE / EXPLORER', modalTitle: 'NASA Explorer — dados orbitando em uma interface', modalCopy: 'Uma plataforma interativa de exploração espacial que utiliza dados de APIs da NASA para acompanhar asteroides e tornar descobertas astronômicas mais próximas. O foco está em transformar informação científica em uma experiência de navegação acessível.' },
    en: { node: 'Space exploration', description: 'A space-exploration experience that brings NASA data closer through a curious, visual and navigable interface.', modules: ['NASA APIs', 'Asteroids', 'Exploratory UI', 'Real-time data'], stack: ['HTML', 'CSS', 'JavaScript', 'NeoWS'], action: 'OPEN FULL DOSSIER', screenshot: 'INTERFACE / EXPLORER', modalTitle: 'NASA Explorer — data orbiting in an interface', modalCopy: 'An interactive space-exploration platform that uses NASA API data to follow asteroids and bring astronomical discoveries closer. Its focus is turning scientific information into an approachable browsing experience.' }
  },
  powerbi: {
    index: '03', accent: '#ffb39a', name: 'Exoplanet Observatory', type: 'ANALYTICS / POWER BI', code: 'DAT.003', status: 'DISCOVERY DATA LAYER', images: ['img/images.png', 'img/Dashboard.png'],
    pt: { node: 'Observatório de dados', description: 'Uma camada analítica para explorar dados de exoplanetas e transformar uma base extensa em perguntas respondíveis.', modules: ['Análise exploratória', 'Visualização', 'Linha do tempo', 'Descobertas'], stack: ['Power BI', 'Data Analytics', 'Data Modeling'], action: 'ABRIR DOSSIÊ COMPLETO', screenshot: 'DASHBOARD / ANALYTICS', modalTitle: 'Exoplanet Observatory — descobertas em perspectiva', modalCopy: 'Dashboard interativo desenvolvido para análise exploratória de dados astronômicos, com foco em exoplanetas descobertos ao longo dos anos. A interface organiza a informação para facilitar filtros, comparações e leitura de padrões.' },
    en: { node: 'Data observatory', description: 'An analytics layer for exploring exoplanet data and turning an extensive dataset into answerable questions.', modules: ['Exploratory analysis', 'Visualization', 'Timeline', 'Discoveries'], stack: ['Power BI', 'Data Analytics', 'Data Modeling'], action: 'OPEN FULL DOSSIER', screenshot: 'DASHBOARD / ANALYTICS', modalTitle: 'Exoplanet Observatory — discoveries in perspective', modalCopy: 'An interactive dashboard developed for exploratory astronomical-data analysis, focusing on exoplanets discovered over the years. The interface organizes information to make filtering, comparison and pattern reading easier.' }
  }
};

const copy = {
  pt: {
    'nav.profile':'Perfil','nav.expertise':'Expertise','nav.projects':'Projetos','nav.journey':'Trajetória','nav.contact':'Contato','nav.workana':'Workana',
    'hero.status':'PORTFÓLIO · 2026','hero.eyebrow':'PORTFÓLIO / 2026 / UBÁ — MG','hero.titleTop':'Deivid','hero.titleAccent':'Almeida.','hero.titleBottom':'Software, dados<br>&amp; design.','hero.description':'Desenvolvo produtos e sistemas empresariais que funcionam de verdade: arquitetura, dados, automação e uma interface que as pessoas querem usar.','hero.ctaProjects':'Explorar projetos','hero.ctaResume':'Baixar currículo',
    'identity.roleLabel':'ATUALMENTE','identity.role':'Desenvolvedor','identity.focusLabel':'EM PARALELO','identity.focus':'Analista de Dados · Designer','identity.footer':'SISTEMAS · DADOS · DESIGN',
    'profile.kicker':'PERFIL PROFISSIONAL','profile.title':'Construo soluções<br>que movem operações.','profile.dossier':'DOSSIÊ PROFISSIONAL','profile.copy':'Atualmente trabalho na SimpleSoft — Sistemas de Informação, contribuindo para o desenvolvimento, manutenção e otimização de soluções ERP, estruturas de banco de dados, pipelines de ETL, dashboards analíticos e aplicações críticas para o negócio.','profile.copy2':'Entrego soluções escaláveis e eficientes, alinhadas aos objetivos da organização e às necessidades da operação.','profile.expertiseLabel':'ESPECIALIDADES TÉCNICAS','profile.skillOne':'<span>01</span> Desenvolvimento: Delphi, C#, .NET, Python','profile.skillTwo':'<span>02</span> Banco de dados: Oracle, PL/SQL, otimização SQL e modelagem','profile.skillThree':'<span>03</span> Cloud e dados: AWS, Power BI, ETL, visualização e reporting','profile.skillFour':'<span>04</span> Engenharia: POO, integração de APIs, Git e arquitetura de sistemas','profile.skillFive':'<span>05</span> Enterprise: ERP, automação, suporte técnico e análise de sistemas','profile.closing':'Sou apaixonado por engenharia de software, bancos de dados, cloud e decisões orientadas por dados — sempre buscando expandir repertório e gerar valor mensurável para o negócio.','profile.factOneKey':'FORMAÇÃO','profile.factOneValue':'Ciência da Computação · 8º período','profile.factTwoKey':'ATUAÇÃO','profile.factTwoValue':'ERP, Dados &amp; Produto','profile.stackLabel':'STACK PROFISSIONAL','profile.note':'Gosto do ponto onde engenharia encontra design: regras de negócio robustas, dados que explicam decisões e interfaces que diminuem o atrito do trabalho.',
    'capabilities.kicker':'NÚCLEOS DE ATUAÇÃO','capabilities.title':'Tecnologia com<br>visão de operação.','capabilities.cardOneTitle':'Sistemas que sustentam o negócio','capabilities.cardOneText':'Arquitetura, regras e integrações para transformar rotinas em operações confiáveis.','capabilities.cardTwoTitle':'Dados que contam a história','capabilities.cardTwoText':'Modelagem, consultas e visualizações que revelam o que os dados têm a dizer.','capabilities.cardThreeTitle':'Interfaces que respeitam pessoas','capabilities.cardThreeText':'Design de produto e soluções web que tornam sistemas complexos claros, agradáveis e fáceis de usar.',
    'projects.kicker':'PROJECT ATLAS','projects.title':'Projetos não são cards.<br>São sistemas vivos.','projects.intro':'Navegue pelos módulos. Cada projeto é apresentado como um dossiê: contexto, peças que o compõem e telas do produto.','projects.navigatorLabel':'MAPA DE MISSÕES','projects.selectHint':'SELECIONE UM NÓ','projects.consoleStatus':'EM EXIBIÇÃO',
    'journey.kicker':'LINHA DO TEMPO','journey.title':'Construindo repertório<br>em cada versão.','journey.now':'AGORA','journey.currentType':'SIMPLESOFT · SISTEMAS DE INFORMAÇÃO','journey.currentTitle':'Desenvolvedor','journey.currentText':'Desenvolvimento, manutenção e otimização de soluções ERP e aplicações empresariais críticas.','journey.dataType':'SIMPLESOFT · SISTEMAS DE INFORMAÇÃO','journey.dataTitle':'Analista de Dados','journey.dataText':'Estruturas de banco, ETL, dashboards de analytics e dados a serviço das decisões do negócio.','journey.freelanceType':'PROJETOS INDEPENDENTES','journey.freelanceTitle':'Desenvolvimento &amp; Design · Workana','journey.freelanceText':'Projetos conduzidos de ponta a ponta: entendimento, arquitetura, desenvolvimento, interface e evolução.','journey.educationType':'FORMAÇÃO','journey.educationTitle':'Ciência da Computação · UNIFAGOC','journey.educationText':'8º período, aprofundando a base de software, algoritmos, dados e sistemas computacionais.',
    'contact.kicker':'PRÓXIMA CONEXÃO','contact.title':'Tem um problema<br>interessante?','contact.status':'ABERTO A NOVAS CONEXÕES'
  },
  en: {
    'nav.profile':'Profile','nav.expertise':'Expertise','nav.projects':'Projects','nav.journey':'Journey','nav.contact':'Contact','nav.workana':'Workana',
    'hero.status':'PORTFOLIO · 2026','hero.eyebrow':'PORTFOLIO / 2026 / UBÁ — MG','hero.titleTop':'Deivid','hero.titleAccent':'Almeida.','hero.titleBottom':'Software, data<br>&amp; design.','hero.description':'I build enterprise products and systems that truly work: architecture, data, automation and an interface that people want to use.','hero.ctaProjects':'Explore projects','hero.ctaResume':'Download résumé',
    'identity.roleLabel':'CURRENTLY','identity.role':'Developer','identity.focusLabel':'ALSO WORKING AS','identity.focus':'Data Analyst · Designer','identity.footer':'SYSTEMS · DATA · DESIGN',
    'profile.kicker':'PROFESSIONAL PROFILE','profile.title':'I build solutions<br>that move operations.','profile.dossier':'PROFESSIONAL DOSSIER','profile.copy':'Currently working at SimpleSoft — Information Systems, contributing to the development, maintenance and optimization of ERP solutions, database structures, ETL pipelines, analytics dashboards and business-critical applications.','profile.copy2':'Experienced in delivering scalable and efficient solutions aligned with organizational objectives and operational requirements.','profile.expertiseLabel':'TECHNICAL EXPERTISE','profile.skillOne':'<span>01</span> Software Development: Delphi, C#, .NET, Python','profile.skillTwo':'<span>02</span> Databases: Oracle Database, PL/SQL, SQL Optimization, Data Modeling','profile.skillThree':'<span>03</span> Cloud &amp; Data: AWS, Power BI, ETL, visualization and reporting','profile.skillFour':'<span>04</span> Engineering: OOP, API Integration, Git and system architecture','profile.skillFive':'<span>05</span> Enterprise: ERP, business process automation, support and system analysis','profile.closing':'Passionate about software engineering, database technologies, cloud infrastructure and data-driven decision making — continuously expanding technical expertise to create measurable business value.','profile.factOneKey':'EDUCATION','profile.factOneValue':'Computer Science · 8th semester','profile.factTwoKey':'FOCUS','profile.factTwoValue':'ERP, Data &amp; Product','profile.stackLabel':'PROFESSIONAL STACK','profile.note':'I enjoy the point where engineering meets design: robust business rules, data that explains decisions and interfaces that reduce friction at work.',
    'capabilities.kicker':'CORE EXPERTISE','capabilities.title':'Technology with<br>an operational view.','capabilities.cardOneTitle':'Systems that support the business','capabilities.cardOneText':'Architecture, rules and integrations that turn routines into reliable operations.','capabilities.cardTwoTitle':'Data that tells the story','capabilities.cardTwoText':'Modeling, queries and visualizations that reveal what data has to say.','capabilities.cardThreeTitle':'Interfaces that respect people','capabilities.cardThreeText':'Product design and web solutions that make complex systems clear, enjoyable and easy to use.',
    'projects.kicker':'PROJECT ATLAS','projects.title':'Projects are not cards.<br>They are living systems.','projects.intro':'Navigate the modules. Each project is shown as a dossier: context, its components and product screens.','projects.navigatorLabel':'MISSION MAP','projects.selectHint':'SELECT A NODE','projects.consoleStatus':'NOW SHOWING',
    'journey.kicker':'TIMELINE','journey.title':'Building range<br>in every version.','journey.now':'NOW','journey.currentType':'SIMPLESOFT · INFORMATION SYSTEMS','journey.currentTitle':'Developer','journey.currentText':'Development, maintenance and optimization of ERP solutions and business-critical applications.','journey.dataType':'SIMPLESOFT · INFORMATION SYSTEMS','journey.dataTitle':'Data Analyst','journey.dataText':'Database structures, ETL, analytics dashboards and data in service of business decisions.','journey.freelanceType':'INDEPENDENT PROJECTS','journey.freelanceTitle':'Development &amp; Design · Workana','journey.freelanceText':'End-to-end projects: understanding, architecture, development, interface and evolution.','journey.educationType':'EDUCATION','journey.educationTitle':'Computer Science · UNIFAGOC','journey.educationText':'8th semester, deepening a foundation in software, algorithms, data and computer systems.',
    'contact.kicker':'NEXT CONNECTION','contact.title':'Have an interesting<br>problem?','contact.status':'OPEN TO NEW CONNECTIONS'
  }
};

let currentLanguage = 'pt';
let selectedProject = 'sage';
const projectNodes = document.getElementById('projectNodes');
const projectCanvas = document.getElementById('projectCanvas');
const modal = document.getElementById('projectModal');
const modalBody = document.getElementById('modalBody');

function renderProjectNodes() {
  projectNodes.innerHTML = Object.entries(projects).map(([id, project]) => {
    const content = project[currentLanguage];
    return `<button type="button" class="project-node ${id === selectedProject ? 'active' : ''}" data-project="${id}" style="--node-color:${project.accent}"><span class="project-node-index">${project.index}</span><span class="node-text"><strong>${project.name}</strong><small>${content.node.toUpperCase()}</small></span><span class="node-signal"></span></button>`;
  }).join('');
}

function renderProjectCanvas() {
  const project = projects[selectedProject];
  const content = project[currentLanguage];
  const sideVisuals = project.images.slice(1, 3).map((image, index) => `<div class="project-thumbnail"><img src="${image}" alt="Tela do projeto ${project.name}"><span>0${index + 2}</span></div>`).join('');
  projectCanvas.innerHTML = `<div class="project-canvas" style="--active-color:${project.accent}"><div class="project-dossier-top"><div><span class="project-index">${project.index}</span><span class="project-type"> / ${project.type}</span><h3 class="project-title">${project.name}</h3><p class="project-description">${content.description}</p></div><div class="project-code"><span>MODULE</span><strong>${project.code}</strong><span>${project.status}</span></div></div><div class="project-showcase"><div class="project-main-visual"><img src="${project.images[0]}" alt="Imagem principal do projeto ${project.name}"><span class="visual-label">${content.screenshot}</span></div><div class="project-side-visuals">${sideVisuals}</div></div><div class="project-lower"><div><p class="module-heading">MODULES</p><div class="project-modules">${content.modules.map(module => `<span>${module}</span>`).join('')}</div></div><div><p class="module-heading">SYSTEM STACK</p><div class="project-stack">${content.stack.map(skill => `<span>${skill}</span>`).join('')}</div></div></div><button class="project-open" type="button" data-open-project><span>${content.action}</span><i class="fa-solid fa-arrow-up-right-from-square"></i></button></div>`;
}

function renderProject() { renderProjectNodes(); renderProjectCanvas(); }

function openProjectModal() {
  const project = projects[selectedProject]; const content = project[currentLanguage];
  modalBody.innerHTML = `<div class="modal-project" style="--active-color:${project.accent}"><p class="eyebrow"><span>${project.index}.</span> ${project.type}</p><h2 class="modal-title" id="modalTitle">${content.modalTitle}</h2><p class="modal-copy">${content.modalCopy}</p><div class="modal-meta">${content.stack.map(skill => `<span>${skill}</span>`).join('')}</div><div class="modal-gallery">${project.images.map(image => `<img src="${image}" alt="Tela do projeto ${project.name}">`).join('')}</div></div>`;
  modal.classList.add('open'); modal.setAttribute('aria-hidden', 'false'); document.body.classList.add('modal-open');
}

function closeProjectModal() { modal.classList.remove('open'); modal.setAttribute('aria-hidden', 'true'); document.body.classList.remove('modal-open'); }
function applyLanguage() {
  document.documentElement.lang = currentLanguage === 'pt' ? 'pt-BR' : 'en';
  document.title = currentLanguage === 'pt' ? 'Deivid Almeida — Sistemas & Dados' : 'Deivid Almeida — Systems & Data';
  document.querySelectorAll('[data-i18n]').forEach(element => { const value = copy[currentLanguage][element.dataset.i18n]; if (value) element.innerHTML = value; });
  document.querySelectorAll('.language-button').forEach(button => button.classList.toggle('active', button.dataset.language === currentLanguage));
  renderProject();
}
function closeMobileMenu() {
  const menu = document.querySelector('.mobile-menu'); const toggle = document.querySelector('.menu-toggle');
  menu.classList.remove('open'); menu.setAttribute('aria-hidden', 'true'); toggle.setAttribute('aria-expanded', 'false'); toggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
}

document.addEventListener('click', event => {
  const language = event.target.closest('[data-language]'); if (language) { currentLanguage = language.dataset.language; applyLanguage(); }
  const project = event.target.closest('[data-project]'); if (project) { selectedProject = project.dataset.project; renderProject(); }
  if (event.target.closest('[data-open-project]')) openProjectModal();
  if (event.target.closest('[data-close-modal]')) closeProjectModal();
  if (event.target.closest('.mobile-menu a')) closeMobileMenu();
});
document.querySelector('.menu-toggle').addEventListener('click', () => {
  const menu = document.querySelector('.mobile-menu'); const toggle = document.querySelector('.menu-toggle'); const open = !menu.classList.contains('open');
  menu.classList.toggle('open', open); menu.setAttribute('aria-hidden', String(!open)); toggle.setAttribute('aria-expanded', String(open)); toggle.innerHTML = open ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
});
document.addEventListener('keydown', event => { if (event.key === 'Escape') { closeProjectModal(); closeMobileMenu(); } });
const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }), { threshold:.12 });
document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
document.getElementById('year').textContent = new Date().getFullYear();
renderProject();

const scrollMeter = document.getElementById('scrollMeter');
function updateScrollMeter() {
  const maximum = document.documentElement.scrollHeight - window.innerHeight;
  const progress = maximum > 0 ? (window.scrollY / maximum) * 100 : 0;
  scrollMeter.style.transform = `scaleY(${Math.max(progress / 100, 0.015)})`;
}
window.addEventListener('scroll', updateScrollMeter, { passive: true });
window.addEventListener('resize', updateScrollMeter);
updateScrollMeter();

const sidebarLinks = [...document.querySelectorAll('.main-nav a[data-section]')];
const navigationObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    sidebarLinks.forEach(link => link.classList.toggle('current', link.dataset.section === entry.target.id));
  });
}, { rootMargin: '-30% 0px -55% 0px', threshold: 0 });

sidebarLinks.forEach(link => {
  const target = document.getElementById(link.dataset.section);
  if (target) navigationObserver.observe(target);
});
