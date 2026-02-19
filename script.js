const dadosServicos = {
    'web-design': {
        pt: { titulo: 'Analista de Dados', descricao: 'Desenvolvimento de dashboards inteligentes e fluxos de dados otimizados que traduzem métricas em oportunidades de crescimento para o negócio.' },
        en: { titulo: 'Data Analyst', descricao: 'Development of intelligent dashboards and optimized data flows that translate metrics into business growth opportunities.' },
        skills: ['Python (Pandas/NumPy)', 'SQL', 'Machine Learning', 'Power BI', 'Excel Avançado']
    },
    'web-dev': {
        pt: { titulo: 'Web Developer', descricao: 'Desenvolvimento de sistemas e sites robustos com foco em performance, SEO e código limpo.' },
        en: { titulo: 'Web Developer', descricao: 'Development of robust systems and websites with a focus on performance, SEO, and clean code.' },
        skills: ['HTML5 / CSS3', 'JavaScript ES6', 'React.js', 'Git / GitHub', 'APIs REST']
    },
    'photography': {
        pt: { titulo: 'Designer', descricao: 'Criação de identidades visuais e interfaces modernas para produtos, eventos e branding pessoal.' },
        en: { titulo: 'Designer', descricao: 'Creation of visual identities and modern interfaces for products, events, and personal branding.' },
        skills: ['Figma', 'Photoshop', 'Adobe XD', 'Illustrator', 'Design System']
    },
    'seo': {
        pt: { titulo: 'Analista SEO', descricao: 'Otimização de sites para mecanismos de busca, aumentando a visibilidade orgânica e o tráfego qualificado.' },
        en: { titulo: 'SEO Analyst', descricao: 'Search engine optimization, increasing organic visibility and qualified traffic.' },
        skills: ['Google Analytics', 'Search Console', 'Keyword Research', 'On-Page SEO', 'Backlinks']
    },
    'creative': {
        pt: { titulo: 'Software Developer', descricao: 'Desenvolvimento de sistemas de alta performance e soluções de baixo nível, focando em otimização de recursos, estabilidade e arquitetura de software eficiente.' },
        en: { titulo: 'Software Developer', descricao: 'Development of high-performance systems and low-level solutions, focusing on resource optimization, stability, and efficient software architecture.' },
        skills: ['C / C++', 'Gerenciamento de Memória', 'Estruturas de Dados', 'Multithreading', '.NET']
    }
};


const dadosProjetos = [
    {
        pt: { titulo: "Nasa Explorer", descricao: "Uma plataforma interativa de exploração espacial que utiliza dados em tempo real das APIs da NASA para monitorar asteroides e revelar as maravilhas do cosmos." },
        en: { titulo: "Nasa Explorer", descricao: "An interactive space exploration platform that uses real-time data from NASA APIs to monitor asteroids and reveal the wonders of the cosmos." },
        skills: ["HTML", "CSS", "JS", "NeoWS"],
        imagens: ["img/Nasa.png", "img/Nasa2.png", "img/Nasa3.png"] 
    },
    {
        pt: { titulo: "SAGE - ERP", descricao: "Sistema Web de gestão empresarial completo. Focado em Cadastro de Produtos, Clientes, Busca de CNPJ, Relatórios Financeiros e PDV. Integração com IA para identificação automática de produtos." },
        en: { titulo: "SAGE - ERP", descricao: "Complete business management web system. Focused on Product/Client Registration, CNPJ Search, Financial Reports, and POS. AI integration for automatic product identification." },
        skills: ["Python", "Node.js", "PHP", "Flask"],
        imagens: ["img/Sage1.jpeg", "img/Sagepdv.jpeg"] 
    },
    {
        pt: { titulo: "Dashboard PowerBI", descricao: "Dashboard interativo desenvolvido para análise exploratória de dados astronômicos, com foco em exoplanetas descobertos ao longo dos anos." },
        en: { titulo: "PowerBI Dashboard", descricao: "Interactive dashboard developed for exploratory analysis of astronomical data, focusing on exoplanets discovered over the years." },
        skills: ["PowerBI", "Data Analytics"],
        imagens: ["img/Dashboard.png"] 
    }
];

let currentLang = 'pt';


function abrirModalServico(tipo) {
    const modal = document.getElementById('modal-container');
    const body = document.getElementById('modal-body');
    const info = dadosServicos[tipo];

    if (!info) return;

    const langInfo = info[currentLang];

    body.innerHTML = `
        <div class="modal-body">
            <h2>${langInfo.titulo}</h2>
            <p>${langInfo.descricao}</p>
            <div class="habilidades-grid">
                ${info.skills.map(skill => `<div class="skill-tag">${skill}</div>`).join('')}
            </div>
        </div>
    `;

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function abrirModalProjeto(index) {
    const modal = document.getElementById('modal-container');
    const body = document.getElementById('modal-body');
    const projeto = dadosProjetos[index];

    if (!projeto) return;

    const langProj = projeto[currentLang];

    let htmlImagens = projeto.imagens.map(img => `<img src="${img}" alt="${langProj.titulo}" style="margin-bottom: 15px; display: block; border-radius: 8px; width: 100%;">`).join('');

    body.innerHTML = `
        <div class="modal-body-v2">
            <div class="project-details-text">
                <h2>${langProj.titulo}</h2>
                <p>${langProj.descricao}</p>
                <div class="habilidades-grid">
                    ${projeto.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                </div>
            </div>
            <div class="project-details-image">
                ${htmlImagens}
            </div>
        </div>
    `;

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function fecharModal() {
    const modal = document.getElementById('modal-container');
    if (modal) modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

window.addEventListener('click', (event) => {
    const modal = document.getElementById('modal-container');
    if (event.target === modal) fecharModal();
});


function ativaLetra(elemento) {
    const arrayTexto = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    arrayTexto.forEach((letra, i) => {
        setTimeout(() => {
            elemento.innerHTML += letra;
        }, 75 * i);
    });
}


function toggleLanguage(lang) {
    currentLang = lang;
    const btnPt = document.getElementById('btn-pt');
    const btnEn = document.getElementById('btn-en');
    
    if (btnPt && btnEn) {
        btnPt.classList.toggle('active', lang === 'pt');
        btnEn.classList.toggle('active', lang === 'en');
    }

    const elementosTraducao = document.querySelectorAll('[data-pt]');
    elementosTraducao.forEach(el => {
        const novoTexto = lang === 'en' ? el.getAttribute('data-en') : el.getAttribute('data-pt');
        el.innerHTML = novoTexto;
        if (el.classList.contains('digitando')) ativaLetra(el);
    });
}


function sobremim() {
    const divExperiencia = document.querySelectorAll('.experience_content div');
    const liExperiencia = document.querySelectorAll('.experience_content ul li');
    const divEducation = document.querySelectorAll('.education_content div');
    const liEducation = document.querySelectorAll('.education_content ul li');

    function slideShowExp(index) {
        divExperiencia.forEach((div) => div.classList.remove('ativo'));
        liExperiencia.forEach((li) => li.classList.remove('ativo'));
        if (divExperiencia[index]) divExperiencia[index].classList.add('ativo');
        if (liExperiencia[index]) liExperiencia[index].classList.add('ativo');
    }

    function slideShowEdu(index) {
        divEducation.forEach((div) => div.classList.remove('ativo'));
        liEducation.forEach((li) => li.classList.remove('ativo'));
        if (divEducation[index]) divEducation[index].classList.add('ativo');
        if (liEducation[index]) liEducation[index].classList.add('ativo');
    }

    liExperiencia.forEach((item, index) => {
        item.addEventListener('click', () => slideShowExp(index));
    });

    liEducation.forEach((item, index) => {
        item.addEventListener('click', () => slideShowEdu(index));
    });

    slideShowExp(0);
    slideShowEdu(0);
}


function menuMobol() {
    const ativaMenu = document.querySelector('.fa-bars');
    const navMenu = document.querySelector('header .navegacao-primaria');

    if (ativaMenu && navMenu) {
        ativaMenu.addEventListener('click', () => {
            ativaMenu.classList.toggle('fa-x');
            navMenu.classList.toggle('ativado');
        });
    }
}


function observaScroll() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.reveal, .imagem-lateral').forEach(el => observer.observe(el));
}


let currentCarouselIndex = 0;
let carouselItems = [];
let totalItems = 0;

function atualizarCarrossel() {
    const track = document.getElementById('carouselTrack');
    const container = document.querySelector('.carousel-container');
    
    if (!track || !container) return;

    carouselItems = document.querySelectorAll('.carousel-item');
    totalItems = carouselItems.length;

    carouselItems.forEach((item, index) => {
        item.classList.remove('active', 'next', 'prev');
        
        if (index === currentCarouselIndex) {
            item.classList.add('active');
        } else if (index === (currentCarouselIndex + 1) % totalItems) {
            item.classList.add('next');
        } else if (index === (currentCarouselIndex - 1 + totalItems) % totalItems) {
            item.classList.add('prev');
        }
    });
    
    const itemWidth = carouselItems[0].offsetWidth;
    const itemMargin = 40; 
    const containerWidth = container.offsetWidth;
    
    const centerOffset = (containerWidth / 2) - (itemWidth / 2) - 20; 
    const totalOffset = centerOffset - (currentCarouselIndex * (itemWidth + itemMargin));
    
    track.style.transform = `translateX(${totalOffset}px)`;
}

window.addEventListener('resize', atualizarCarrossel);

function carrosselProximo() {
    currentCarouselIndex = (currentCarouselIndex + 1) % totalItems;
    atualizarCarrossel();
}

function carrosselAnterior() {
    currentCarouselIndex = (currentCarouselIndex - 1 + totalItems) % totalItems;
    atualizarCarrossel();
}

function inicializarCarrossel() {
    carouselItems = document.querySelectorAll('.carousel-item');
    totalItems = carouselItems.length;
    if (totalItems > 0) {
        atualizarCarrossel();
    }
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') carrosselAnterior();
    if (e.key === 'ArrowRight') carrosselProximo();
});

/**
 * Inicialização Global
 */
window.onload = () => {
    const titulo = document.querySelector('.digitando');
    if (titulo) ativaLetra(titulo);
    
    observaScroll();
    sobremim();
    menuMobol();
    inicializarCarrossel();
}