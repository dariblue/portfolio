const projects = [
    {
        id: 1,
        title: 'MediTime',
        description: 'Ganador Hackathon UFV 2025. Aplicación IoT para monitoreo de salud.',
        images: [
            '/placeholder.svg?height=300&width=400',
            '/placeholder.svg?height=300&width=400',
            '/placeholder.svg?height=300&width=400',
        ],
        tags: ['IoT', 'Hackathon', 'React']
    },
    {
        id: 2,
        title: 'Servidor de Juegos Online',
        description: 'Infraestructura para servidor con más de 1000 jugadores activos.',
        images: [
            '/placeholder.svg?height=300&width=400',
            '/placeholder.svg?height=300&width=400',
            '/placeholder.svg?height=300&width=400',
        ],
        tags: ['Backend', 'Networking', 'Scalability']
    },
    {
        id: 3,
        title: 'Meditime (Proyecto Universitario)',
        description: 'Aplicación para gestión de datos de salud y consultas médicas.',
        images: [
            '/placeholder.svg?height=300&width=400',
            '/placeholder.svg?height=300&width=400',
            '/placeholder.svg?height=300&width=400',
        ],
        tags: ['Full-stack', 'Database', 'Healthcare']
    },
    {
        id: 4,
        title: 'MundoMotor',
        description: 'Plataforma de gestión de información automotriz y vehículos.',
        images: [
            '/placeholder.svg?height=300&width=400',
            '/placeholder.svg?height=300&width=400',
            '/placeholder.svg?height=300&width=400',
        ],
        tags: ['Web', 'Database', 'UI/UX']
    },
    {
        id: 5,
        title: 'FlatOut Homologaciones',
        description: 'Sistema técnico para gestión de procesos de homologación de vehículos.',
        images: [
            '/placeholder.svg?height=300&width=400',
            '/placeholder.svg?height=300&width=400',
            '/placeholder.svg?height=300&width=400',
        ],
        tags: ['StartUp', 'Backend', 'Business']
    },
];

function initProjectCards() {
    const grid = document.getElementById('projectsGrid');
    if (!grid) return;

    grid.innerHTML = projects.map(project => `
        <div class="project-card-wrapper">
            <div class="project-card-image">
                <img src="${project.images[0]}" alt="${project.title}" class="current-image">
                <div class="carousel-controls">
                    <button class="carousel-arrow prev-arrow" onclick="prevImage(this, ${project.id})">
                        <i class="fas fa-chevron-left"></i>
                    </button>
                    <span class="image-counter">
                        <span class="current-index">1</span> / <span class="total-images">${project.images.length}</span>
                    </span>
                    <button class="carousel-arrow next-arrow" onclick="nextImage(this, ${project.id})">
                        <i class="fas fa-chevron-right"></i>
                    </button>
                </div>
            </div>
            <div class="project-info">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

function nextImage(button, projectId) {
    const card = button.closest('.project-card-wrapper');
    const image = card.querySelector('.current-image');
    const counter = card.querySelector('.current-index');
    const project = projects.find(p => p.id === projectId);
    
    let currentIndex = parseInt(counter.textContent);
    currentIndex = (currentIndex % project.images.length) + 1;
    
    image.src = project.images[currentIndex - 1];
    counter.textContent = currentIndex;
}

function prevImage(button, projectId) {
    const card = button.closest('.project-card-wrapper');
    const image = card.querySelector('.current-image');
    const counter = card.querySelector('.current-index');
    const project = projects.find(p => p.id === projectId);
    
    let currentIndex = parseInt(counter.textContent);
    currentIndex = currentIndex === 1 ? project.images.length : currentIndex - 1;
    
    image.src = project.images[currentIndex - 1];
    counter.textContent = currentIndex;
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initProjectCards);
} else {
    initProjectCards();
}
