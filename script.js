/**
 * 1. Dados dos Serviços
 */
const dadosServicos = {
    'web-design': {
        titulo: 'Analista de dados',
        descricao: 'Desenvolvimento de dashboards inteligentes e fluxos de dados otimizados que traduzem métricas em oportunidades de crescimento para o negócio.',
        skills: ['Python (Pandas/NumPy)', 'SQL', 'Machine Learning', 'Power BI', 'Excel Avançado']
    },
    'web-dev': {
        titulo: 'Web Developer',
        descricao: 'Desenvolvimento de sistemas e sites robustos com foco em performance, SEO e código limpo.',
        skills: ['HTML5 / CSS3', 'JavaScript ES6', 'React.js', 'Git / GitHub', 'APIs REST']
    },
    'photography': {
        titulo: 'Designer',
        descricao: 'Captura e edição de imagens profissionais para produtos, eventos e branding pessoal.',
        skills: ['Lightroom', 'Photoshop', 'Composição', 'Iluminação', 'Tratamento de Cor']
    },
    'seo': {
        titulo: 'SEO Analyst',
        descricao: 'Otimização de sites para mecanismos de busca, aumentando a visibilidade orgânica e o tráfego qualificado.',
        skills: ['Google Analytics', 'Search Console', 'Keyword Research', 'On-Page SEO', 'Backlinks']
    },
    'creative': {
        titulo: 'Software Developer',
        descricao: 'Desenvolvimento de sistemas de alta performance e soluções de baixo nível, focando em otimização de recursos, estabilidade e arquitetura de software eficiente."',
        skills: ['C / C++', 'Gerenciamento de Memória (Ponteiros)', 'Estruturas de Dados', 'Multithreading (Pthreads)']
    },
    'ux-ui': {
        titulo: 'UX/UI Design',
        descricao: 'Design focado na experiência do usuário, criando jornadas intuitivas e interfaces de alta conversão.',
        skills: ['User Flow', 'Wireframes', 'Teste de Usabilidade', 'Design System', 'Arquitetura de Info']
    }
};

/**
 * 2. Dados dos Projetos
 * DICA: Para o Finance App, usei "imagens" (plural) com uma lista [].
 */
const dadosProjetos = [
    {
        titulo: "Nasa Explorer",
        descricao: "Uma plataforma interativa de exploração espacial que utiliza dados em tempo real das APIs da NASA para monitorar asteroides e revelar as maravilhas do cosmos.",
        skills: ["HTML", "CSS", "JS", "NeoWS"],
        imagens: ["img/Nasa.png", "img/Nasa2.png", "img/Nasa3.png"] 
    },
    {
        titulo: "ERP",
        descricao: "Sistema Web de gestão empresarial com gráficos interativos, exportação de relatórios e autenticação segura. Focado nas atividades básicas de uma empresa, sendo Cadastro de Produtos, Cadastro de Clientes, Busca de CNPJ, Relatórios Financeiros, Controle de Caixa e sistema de vendas (PDV). Integração com IA para identificação automática de produtos visando suprir a necessidade de um cadastro manual e demorado.",
        skills: ["Python", "Node.js", "PHP", "Flask"],
        // Agora suporta múltiplas imagens em uma lista
        imagens: ["img/Sage1.jpeg", "img/Sagepdv.jpeg"] 
    },
    {
        titulo: "Dashboard PowerBI",
        descricao: "Dashboard interativo desenvolvido para análise exploratória de dados astronômicos, com foco em exoplanetas descobertos ao longo dos anos.",
        skills: ["PowerBI", "Data Analytics"],
        imagens: ["img/Dashboard.png"] 
    }
];

/**
 * 3. Funções da Janela Modal
 */
function abrirModalServico(tipo) {
    const modal = document.getElementById('modal-container');
    const body = document.getElementById('modal-body');
    const info = dadosServicos[tipo];

    if (!info) return;

    body.innerHTML = `
        <div class="modal-body">
            <h2>${info.titulo}</h2>
            <p>${info.descricao}</p>
            <div class="habilidades-grid">
                ${info.skills.map(skill => `<div class="skill-tag">${skill}</div>`).join('')}
            </div>
        </div>
    `;

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

/**
 * Abre o projeto no layout lateral (Suporta uma ou várias imagens)
 */
function abrirModalProjeto(index) {
    const modal = document.getElementById('modal-container');
    const body = document.getElementById('modal-body');
    const projeto = dadosProjetos[index];

    if (!projeto) return;

    // Lógica para verificar se há uma lista de imagens ou apenas uma
    let htmlImagens = "";
    if (projeto.imagens && Array.isArray(projeto.imagens)) {
        // Se for uma lista, cria uma tag para cada imagem
        htmlImagens = projeto.imagens.map(img => `<img src="${img}" alt="${projeto.titulo}" style="margin-bottom: 15px; display: block; border-radius: 8px;">`).join('');
    } else {
        // Se for apenas a string antiga, mostra apenas ela
        htmlImagens = `<img src="${projeto.imagem}" alt="${projeto.titulo}" style="border-radius: 8px;">`;
    }

    body.innerHTML = `
        <div class="modal-body-v2">
            <div class="project-details-text">
                <h2>${projeto.titulo}</h2>
                <p>${projeto.descricao}</p>
                <div class="habilidades-grid" style="margin-top:25px;">
                    ${projeto.skills.map(skill => `<div class="skill-tag">${skill}</div>`).join('')}
                </div>
            </div>
            <div class="project-details-image" style="max-height: 70vh; overflow-y: auto;">
                ${htmlImagens}
            </div>
        </div>
    `;

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function fecharModal() {
    const modal = document.getElementById('modal-container');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

window.addEventListener('click', (event) => {
    const modal = document.getElementById('modal-container');
    if (event.target === modal) fecharModal();
});

/**
 * 4. Efeito Máquina de Escrever
 */
function ativaLetra(elemento) {
    const arrayTexto = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    arrayTexto.forEach((letra, i) => {
        setTimeout(() => {
            elemento.innerHTML += letra;
        }, 75 * i);
    });
}

/**
 * 5. Tradução
 */
function toggleLanguage(lang) {
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

/**
 * 6. SlideShow do Currículo
 */
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

/**
 * 7. Menu Mobile
 */
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

/**
 * 8. Scroll Observer
 */
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

/**
 * 9. CARROSSEL COM EFEITO DE PROFUNDIDADE
 */
let currentCarouselIndex = 0;
const carouselItems = document.querySelectorAll('.carousel-item');
const totalItems = carouselItems.length;

function atualizarCarrossel() {
    const track = document.getElementById('carouselTrack');
    const container = document.querySelector('.carousel-container');
    
    if (!track || !container) return;

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
    if (carouselItems.length > 0) {
        atualizarCarrossel();
    }
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') carrosselAnterior();
    if (e.key === 'ArrowRight') carrosselProximo();
});