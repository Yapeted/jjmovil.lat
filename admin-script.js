// Configuración por defecto
const defaultConfig = {
    companyName: 'Mi Taller de Polarizado',
    heroTitle: 'Taller de Polarizado Profesional',
    heroSubtitle: 'Protección y estilo para tu vehículo',
    aboutTitle: 'Expertos en Polarizado Automotriz',
    aboutDescription: 'Somos un taller especializado en la instalación de películas de polarizado para vehículos. Con años de experiencia, ofrecemos servicios de calidad garantizada utilizando las mejores marcas del mercado. Nuestro equipo de profesionales está capacitado para brindarte el mejor servicio y asesoramiento personalizado.',
    feature1: 'Garantía de Calidad',
    feature2: 'Personal Capacitado',
    feature3: 'Servicio Rápido',
    contactAddress: 'Calle Principal #123, Ciudad',
    contactPhone: '+1 234 567 890',
    contactEmail: 'info@tallerpolarizado.com',
    contactHours: 'Lun - Sáb: 9:00 AM - 6:00 PM',
    footerText: '© 2024 Taller de Polarizado. Todos los derechos reservados.',
    socialFacebook: '#',
    socialInstagram: '#',
    socialWhatsapp: '#',
    logo: '',
    aboutImage: '',
    heroBg: '',
    primaryColor: '#2563eb',
    secondaryColor: '#1e40af',
    accentColor: '#f59e0b',
    showLogo: true,
    services: [
        {
            icon: 'fa-car',
            title: 'Polarizado de Vehículos',
            description: 'Instalación profesional de películas de polarizado para todo tipo de vehículos',
            features: ['Protección UV 99%', 'Garantía incluida', 'Instalación profesional', 'Varios tonos disponibles']
        },
        {
            icon: 'fa-home',
            title: 'Polarizado Residencial',
            description: 'Polarizado para casas y edificios, control de temperatura y privacidad',
            features: ['Ahorro de energía', 'Privacidad total', 'Protección UV', 'Reducción de calor']
        },
        {
            icon: 'fa-ship',
            title: 'Polarizado para Yates',
            description: 'Servicio especializado para embarcaciones y yates',
            features: ['Resistente al agua salada', 'Protección marina', 'Instalación especializada', 'Garantía extendida']
        },
        {
            icon: 'fa-truck',
            title: 'Servicio a Domicilio',
            description: 'Llevamos nuestro servicio hasta tu ubicación',
            features: ['Instalación en tu hogar', 'Sin costo adicional en zona', 'Agenda tu cita', 'Servicio profesional']
        }
    ],
    gallery: [
        {
            image: 'https://via.placeholder.com/400x300?text=Trabajo+1',
            title: 'Trabajo Realizado 1'
        },
        {
            image: 'https://via.placeholder.com/400x300?text=Trabajo+2',
            title: 'Trabajo Realizado 2'
        },
        {
            image: 'https://via.placeholder.com/400x300?text=Trabajo+3',
            title: 'Trabajo Realizado 3'
        }
    ],
    prices: [
        {
            name: 'Básico',
            price: '$150',
            features: ['Vidrios laterales', 'Película estándar', 'Garantía 1 año', 'Instalación incluida'],
            featured: false
        },
        {
            name: 'Premium',
            price: '$300',
            features: ['Todos los vidrios', 'Película premium', 'Garantía 3 años', 'Instalación certificada', 'Mantenimiento gratis'],
            featured: true
        },
        {
            name: 'Completo',
            price: '$450',
            features: ['Todos los vidrios', 'Película de seguridad', 'Garantía 5 años', 'Instalación certificada', 'Mantenimiento gratis', 'Servicio a domicilio'],
            featured: false
        }
    ],
    faqs: [
        {
            question: '¿Cuánto tiempo tarda la instalación?',
            answer: 'El tiempo de instalación varía según el tipo de vehículo, pero generalmente toma entre 2 a 4 horas. Nuestro equipo trabaja con precisión para garantizar un acabado perfecto.'
        },
        {
            question: '¿Qué garantía ofrecen?',
            answer: 'Ofrecemos garantías que van desde 1 hasta 5 años dependiendo del tipo de película seleccionada. La garantía cubre defectos de fabricación y problemas de instalación.'
        },
        {
            question: '¿Es legal el polarizado?',
            answer: 'Sí, trabajamos con películas que cumplen con las regulaciones locales. Te asesoramos sobre los porcentajes permitidos según la legislación de tu zona.'
        },
        {
            question: '¿Hacen servicio a domicilio?',
            answer: 'Sí, ofrecemos servicio a domicilio sin costo adicional dentro de nuestra zona de cobertura. Llevamos todo el equipo necesario para realizar la instalación en tu ubicación.'
        }
    ]
};

let currentConfig = {};

// Cargar configuración guardada o usar la por defecto
function loadConfig() {
    const savedConfig = localStorage.getItem('siteConfig');
    currentConfig = savedConfig ? JSON.parse(savedConfig) : { ...defaultConfig };
    populateForm();
}

// Poblar formulario con datos guardados
function populateForm() {
    // Sección General
    document.getElementById('company-name').value = currentConfig.companyName;
    document.getElementById('hero-title').value = currentConfig.heroTitle;
    document.getElementById('hero-subtitle').value = currentConfig.heroSubtitle;
    document.getElementById('about-title').value = currentConfig.aboutTitle;
    document.getElementById('about-description').value = currentConfig.aboutDescription;
    document.getElementById('feature-1').value = currentConfig.feature1;
    document.getElementById('feature-2').value = currentConfig.feature2;
    document.getElementById('feature-3').value = currentConfig.feature3;

    // Imágenes
    if (currentConfig.logo) {
        showImagePreview('logo-preview', currentConfig.logo);
    }
    if (currentConfig.aboutImage) {
        showImagePreview('about-image-preview', currentConfig.aboutImage);
    }
    if (currentConfig.heroBg) {
        showImagePreview('hero-bg-preview', currentConfig.heroBg);
    }

    // Contacto
    document.getElementById('contact-address').value = currentConfig.contactAddress;
    document.getElementById('contact-phone').value = currentConfig.contactPhone;
    document.getElementById('contact-email').value = currentConfig.contactEmail;
    document.getElementById('contact-hours').value = currentConfig.contactHours;
    document.getElementById('social-facebook').value = currentConfig.socialFacebook;
    document.getElementById('social-instagram').value = currentConfig.socialInstagram;
    document.getElementById('social-whatsapp').value = currentConfig.socialWhatsapp;
    document.getElementById('footer-text').value = currentConfig.footerText;

    // Diseño
    document.getElementById('primary-color').value = currentConfig.primaryColor;
    document.getElementById('secondary-color').value = currentConfig.secondaryColor;
    document.getElementById('accent-color').value = currentConfig.accentColor;

    // Cargar listas dinámicas
    renderServices();
    renderGallery();
    renderPrices();
    renderFAQs();
}

// Mostrar vista previa de imagen
function showImagePreview(elementId, imageSrc) {
    const preview = document.getElementById(elementId);
    preview.innerHTML = `<img src="${imageSrc}" alt="Preview">`;
}

// Convertir imagen a Base64
function imageToBase64(file, callback) {
    const reader = new FileReader();
    reader.onload = (e) => callback(e.target.result);
    reader.readAsDataURL(file);
}

// Configurar upload de imágenes
function setupImageUpload(inputId, previewId, configKey) {
    const input = document.getElementById(inputId);
    input.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            imageToBase64(file, (base64) => {
                currentConfig[configKey] = base64;
                showImagePreview(previewId, base64);
            });
        }
    });
}

// Renderizar servicios
function renderServices() {
    const container = document.getElementById('services-list');
    container.innerHTML = '';

    currentConfig.services.forEach((service, index) => {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'item-card';
        serviceCard.innerHTML = `
            <div class="item-header">
                <h4>Servicio ${index + 1}</h4>
                <button class="btn-delete" onclick="deleteService(${index})">
                    <i class="fas fa-trash"></i> Eliminar
                </button>
            </div>
            <div class="item-fields">
                <div class="form-group">
                    <label>Icono (Font Awesome)</label>
                    <input type="text" value="${service.icon}" onchange="updateService(${index}, 'icon', this.value)" placeholder="Ej: fa-car">
                    <small>Visita <a href="https://fontawesome.com/icons" target="_blank">Font Awesome</a> para ver iconos disponibles</small>
                </div>
                <div class="form-group">
                    <label>Título</label>
                    <input type="text" value="${service.title}" onchange="updateService(${index}, 'title', this.value)">
                </div>
                <div class="form-group">
                    <label>Descripción</label>
                    <textarea rows="2" onchange="updateService(${index}, 'description', this.value)">${service.description}</textarea>
                </div>
                <div class="form-group">
                    <label>Características (una por línea)</label>
                    <textarea rows="4" onchange="updateServiceFeatures(${index}, this.value)">${service.features.join('\n')}</textarea>
                </div>
            </div>
        `;
        container.appendChild(serviceCard);
    });
}

function updateService(index, field, value) {
    currentConfig.services[index][field] = value;
}

function updateServiceFeatures(index, value) {
    currentConfig.services[index].features = value.split('\n').filter(f => f.trim());
}

function deleteService(index) {
    if (confirm('¿Estás seguro de eliminar este servicio?')) {
        currentConfig.services.splice(index, 1);
        renderServices();
    }
}

function addService() {
    currentConfig.services.push({
        icon: 'fa-star',
        title: 'Nuevo Servicio',
        description: 'Descripción del servicio',
        features: ['Característica 1', 'Característica 2']
    });
    renderServices();
}

// Renderizar galería
function renderGallery() {
    const container = document.getElementById('gallery-list');
    container.innerHTML = '';

    currentConfig.gallery.forEach((item, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-admin-item';
        galleryItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <button class="btn-delete" onclick="deleteGalleryItem(${index})">
                <i class="fas fa-trash"></i>
            </button>
            <input type="text" value="${item.title}" onchange="updateGalleryTitle(${index}, this.value)" placeholder="Título">
        `;
        container.appendChild(galleryItem);
    });
}

function updateGalleryTitle(index, value) {
    currentConfig.gallery[index].title = value;
}

function deleteGalleryItem(index) {
    if (confirm('¿Estás seguro de eliminar esta imagen?')) {
        currentConfig.gallery.splice(index, 1);
        renderGallery();
    }
}

function addGalleryImage() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (e) => {
        const file = e.target.files[0];
        if (file) {
            imageToBase64(file, (base64) => {
                currentConfig.gallery.push({
                    image: base64,
                    title: 'Nuevo Trabajo'
                });
                renderGallery();
            });
        }
    };
    input.click();
}

// Renderizar precios
function renderPrices() {
    const container = document.getElementById('prices-list');
    container.innerHTML = '';

    currentConfig.prices.forEach((price, index) => {
        const priceCard = document.createElement('div');
        priceCard.className = 'item-card';
        priceCard.innerHTML = `
            <div class="item-header">
                <h4>Plan ${index + 1}</h4>
                <button class="btn-delete" onclick="deletePrice(${index})">
                    <i class="fas fa-trash"></i> Eliminar
                </button>
            </div>
            <div class="item-fields">
                <div class="form-group">
                    <label>Nombre del Plan</label>
                    <input type="text" value="${price.name}" onchange="updatePrice(${index}, 'name', this.value)">
                </div>
                <div class="form-group">
                    <label>Precio</label>
                    <input type="text" value="${price.price}" onchange="updatePrice(${index}, 'price', this.value)" placeholder="Ej: $150">
                </div>
                <div class="form-group">
                    <label>
                        <input type="checkbox" ${price.featured ? 'checked' : ''} onchange="updatePrice(${index}, 'featured', this.checked)">
                        Plan Destacado
                    </label>
                </div>
                <div class="form-group">
                    <label>Características (una por línea)</label>
                    <textarea rows="5" onchange="updatePriceFeatures(${index}, this.value)">${price.features.join('\n')}</textarea>
                </div>
            </div>
        `;
        container.appendChild(priceCard);
    });
}

function updatePrice(index, field, value) {
    currentConfig.prices[index][field] = value;
}

function updatePriceFeatures(index, value) {
    currentConfig.prices[index].features = value.split('\n').filter(f => f.trim());
}

function deletePrice(index) {
    if (confirm('¿Estás seguro de eliminar este plan?')) {
        currentConfig.prices.splice(index, 1);
        renderPrices();
    }
}

function addPrice() {
    currentConfig.prices.push({
        name: 'Nuevo Plan',
        price: '$0',
        features: ['Característica 1', 'Característica 2'],
        featured: false
    });
    renderPrices();
}

// Renderizar FAQs
function renderFAQs() {
    const container = document.getElementById('faq-list');
    container.innerHTML = '';

    currentConfig.faqs.forEach((faq, index) => {
        const faqCard = document.createElement('div');
        faqCard.className = 'item-card';
        faqCard.innerHTML = `
            <div class="item-header">
                <h4>Pregunta ${index + 1}</h4>
                <button class="btn-delete" onclick="deleteFAQ(${index})">
                    <i class="fas fa-trash"></i> Eliminar
                </button>
            </div>
            <div class="item-fields">
                <div class="form-group">
                    <label>Pregunta</label>
                    <input type="text" value="${faq.question}" onchange="updateFAQ(${index}, 'question', this.value)">
                </div>
                <div class="form-group">
                    <label>Respuesta</label>
                    <textarea rows="4" onchange="updateFAQ(${index}, 'answer', this.value)">${faq.answer}</textarea>
                </div>
            </div>
        `;
        container.appendChild(faqCard);
    });
}

function updateFAQ(index, field, value) {
    currentConfig.faqs[index][field] = value;
}

function deleteFAQ(index) {
    if (confirm('¿Estás seguro de eliminar esta pregunta?')) {
        currentConfig.faqs.splice(index, 1);
        renderFAQs();
    }
}

function addFAQ() {
    currentConfig.faqs.push({
        question: 'Nueva pregunta',
        answer: 'Respuesta a la pregunta'
    });
    renderFAQs();
}

// Guardar configuración
function saveConfig() {
    // Recopilar datos del formulario
    currentConfig.companyName = document.getElementById('company-name').value;
    currentConfig.heroTitle = document.getElementById('hero-title').value;
    currentConfig.heroSubtitle = document.getElementById('hero-subtitle').value;
    currentConfig.aboutTitle = document.getElementById('about-title').value;
    currentConfig.aboutDescription = document.getElementById('about-description').value;
    currentConfig.feature1 = document.getElementById('feature-1').value;
    currentConfig.feature2 = document.getElementById('feature-2').value;
    currentConfig.feature3 = document.getElementById('feature-3').value;
    currentConfig.contactAddress = document.getElementById('contact-address').value;
    currentConfig.contactPhone = document.getElementById('contact-phone').value;
    currentConfig.contactEmail = document.getElementById('contact-email').value;
    currentConfig.contactHours = document.getElementById('contact-hours').value;
    currentConfig.socialFacebook = document.getElementById('social-facebook').value;
    currentConfig.socialInstagram = document.getElementById('social-instagram').value;
    currentConfig.socialWhatsapp = document.getElementById('social-whatsapp').value;
    currentConfig.footerText = document.getElementById('footer-text').value;
    currentConfig.primaryColor = document.getElementById('primary-color').value;
    currentConfig.secondaryColor = document.getElementById('secondary-color').value;
    currentConfig.accentColor = document.getElementById('accent-color').value;

    // Guardar en localStorage
    localStorage.setItem('siteConfig', JSON.stringify(currentConfig));

    // Mostrar mensaje de éxito
    showAlert('¡Cambios guardados exitosamente!', 'success');
}

// Mostrar alerta
function showAlert(message, type) {
    const alert = document.getElementById('alertMessage');
    alert.textContent = message;
    alert.className = `alert ${type}`;
    alert.style.display = 'flex';

    setTimeout(() => {
        alert.style.display = 'none';
    }, 3000);
}

// Navegación entre secciones
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Actualizar navegación activa
        document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
        item.classList.add('active');

        // Mostrar sección correspondiente
        const sectionId = item.dataset.section;
        document.querySelectorAll('.admin-section').forEach(section => section.classList.remove('active'));
        document.getElementById(`section-${sectionId}`).classList.add('active');
    });
});

// Event Listeners
document.getElementById('saveAll').addEventListener('click', saveConfig);
document.getElementById('add-service').addEventListener('click', addService);
document.getElementById('add-gallery-image').addEventListener('click', addGalleryImage);
document.getElementById('add-price').addEventListener('click', addPrice);
document.getElementById('add-faq').addEventListener('click', addFAQ);

// Función para eliminar logo
function clearLogo() {
    if (confirm('¿Estás seguro de eliminar el logo?')) {
        currentConfig.logo = '';
        document.getElementById('logo-preview').innerHTML = `
            <i class="fas fa-image"></i>
            <p>Haz clic para subir el logo</p>
        `;
        showAlert('Logo eliminado. No olvides guardar los cambios.', 'success');
    }
}

// Configurar uploads de imágenes
setupImageUpload('logo-upload', 'logo-preview', 'logo');
setupImageUpload('about-image-upload', 'about-image-preview', 'aboutImage');
setupImageUpload('hero-bg-upload', 'hero-bg-preview', 'heroBg');

// Configurar checkbox de mostrar logo
document.getElementById('show-logo').addEventListener('change', (e) => {
    currentConfig.showLogo = e.target.checked;
});

// Función de logout
function handleLogout() {
    if (confirm('¿Estás seguro de que deseas cerrar sesión?')) {
        auth.logout();
        window.location.href = 'login.html';
    }
}

// Mostrar información del usuario actual
function displayCurrentUser() {
    const user = auth.getCurrentUser();
    if (user) {
        const usernameElement = document.getElementById('currentUsername');
        if (usernameElement) {
            usernameElement.textContent = user.username;
        }
    }
}

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    // Verificar autenticación
    if (!auth.isAuthenticated()) {
        window.location.href = 'login.html';
        return;
    }
    
    // Mostrar usuario actual
    displayCurrentUser();
    
    // Configurar botón de logout
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', handleLogout);
        
        // Agregar efecto hover
        logoutBtn.addEventListener('mouseenter', function() {
            this.style.background = '#c82333';
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 4px 8px rgba(220, 53, 69, 0.3)';
        });
        
        logoutBtn.addEventListener('mouseleave', function() {
            this.style.background = '#dc3545';
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    }
    
    loadConfig();
    // Cargar estado del checkbox
    if (currentConfig.showLogo !== undefined) {
        document.getElementById('show-logo').checked = currentConfig.showLogo;
    }
});
