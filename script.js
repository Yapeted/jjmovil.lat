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
            question: '¿Puedo lavar mi auto después del polarizado?',
            answer: 'Recomendamos esperar al menos 3 días antes de lavar el vehículo para permitir que la película se adhiera completamente. Después de ese período, puedes lavar tu auto normalmente.'
        }
    ]
};

// Cargar configuración
function loadConfig() {
    const savedConfig = localStorage.getItem('siteConfig');
    return savedConfig ? JSON.parse(savedConfig) : defaultConfig;
}

// Aplicar configuración
function applyConfig() {
    const config = loadConfig();

    // Aplicar textos
    document.getElementById('nav-company-name').textContent = config.companyName;
    document.getElementById('hero-title').textContent = config.heroTitle;
    document.getElementById('hero-subtitle').textContent = config.heroSubtitle;
    document.getElementById('about-title').textContent = config.aboutTitle;
    document.getElementById('about-description').textContent = config.aboutDescription;
    document.getElementById('feature-1').textContent = config.feature1;
    document.getElementById('feature-2').textContent = config.feature2;
    document.getElementById('feature-3').textContent = config.feature3;
    document.getElementById('contact-address').textContent = config.contactAddress;
    document.getElementById('contact-phone').textContent = config.contactPhone;
    document.getElementById('contact-email').textContent = config.contactEmail;
    document.getElementById('contact-hours').textContent = config.contactHours;
    document.getElementById('footer-text').textContent = config.footerText;

    // Aplicar imágenes
    if (config.logo && config.showLogo !== false) {
        document.getElementById('nav-logo-img').src = config.logo;
        document.getElementById('nav-logo-img').style.display = 'block';
    } else {
        document.getElementById('nav-logo-img').style.display = 'none';
    }

    if (config.aboutImage) {
        document.getElementById('about-img').src = config.aboutImage;
    }

    if (config.heroBg) {
        document.querySelector('.hero').style.backgroundImage = `url(${config.heroBg})`;
    }

    // Aplicar colores
    document.documentElement.style.setProperty('--primary-color', config.primaryColor);
    document.documentElement.style.setProperty('--secondary-color', config.secondaryColor);
    document.documentElement.style.setProperty('--accent-color', config.accentColor);

    // Aplicar redes sociales
    const whatsappLink = document.getElementById('social-whatsapp');
    if (config.socialWhatsapp && config.socialWhatsapp !== '#') {
        whatsappLink.href = `https://wa.me/${config.socialWhatsapp.replace(/[^0-9]/g, '')}`;
    }
    
    document.getElementById('social-facebook').href = config.socialFacebook || '#';
    document.getElementById('social-instagram').href = config.socialInstagram || '#';

    // Cargar servicios
    loadServices(config.services);

    // Cargar galería
    loadGallery(config.gallery);

    // Cargar precios
    loadPrices(config.prices);

    // Cargar FAQs
    loadFAQs(config.faqs);
}

// Cargar servicios
function loadServices(services) {
    const container = document.getElementById('services-container');
    container.innerHTML = '';

    services.forEach(service => {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'service-card';
        serviceCard.innerHTML = `
            <i class="fas ${service.icon}"></i>
            <h3>${service.title}</h3>
            <p>${service.description}</p>
            <ul>
                ${service.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
        `;
        container.appendChild(serviceCard);
    });
}

// Cargar galería
function loadGallery(gallery) {
    const container = document.getElementById('gallery-container');
    container.innerHTML = '';

    gallery.forEach(item => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <div class="gallery-overlay">
                <h4>${item.title}</h4>
            </div>
        `;
        container.appendChild(galleryItem);
    });
}

// Cargar precios
function loadPrices(prices) {
    const container = document.getElementById('pricing-container');
    container.innerHTML = '';

    prices.forEach(price => {
        const priceCard = document.createElement('div');
        priceCard.className = `pricing-card ${price.featured ? 'featured' : ''}`;
        priceCard.innerHTML = `
            <h3>${price.name}</h3>
            <div class="price">${price.price}<span>/vehículo</span></div>
            <ul>
                ${price.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
            <a href="#contacto" class="btn-primary">Solicitar</a>
        `;
        container.appendChild(priceCard);
    });
}

// Cargar FAQs
function loadFAQs(faqs) {
    const container = document.getElementById('faq-container');
    container.innerHTML = '';

    faqs.forEach((faq, index) => {
        const faqItem = document.createElement('div');
        faqItem.className = 'faq-item';
        faqItem.innerHTML = `
            <div class="faq-question">
                <span>${faq.question}</span>
                <i class="fas fa-chevron-down"></i>
            </div>
            <div class="faq-answer">
                <p>${faq.answer}</p>
            </div>
        `;
        container.appendChild(faqItem);

        // Agregar evento de clic
        faqItem.querySelector('.faq-question').addEventListener('click', () => {
            faqItem.classList.toggle('active');
        });
    });
}

// Navegación móvil
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Formulario de contacto
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
    e.target.reset();
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    }
});

// Funciones del Modal de Login
function toggleModalPassword(inputId, button) {
    const input = document.getElementById(inputId);
    const icon = button.querySelector('i');
    
    if (input.type === 'password') {
        input.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        input.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
}

function showLoginAlert(message, type) {
    const alert = document.getElementById('loginAlertMessage');
    const alertText = document.getElementById('loginAlertText');
    const icon = alert.querySelector('i');
    
    alertText.textContent = message;
    alert.className = `login-alert ${type} show`;
    
    if (type === 'success') {
        icon.className = 'fas fa-check-circle';
    } else {
        icon.className = 'fas fa-exclamation-circle';
    }
    
    setTimeout(() => {
        alert.classList.remove('show');
    }, 5000);
}

function hideLoginAlert() {
    const alert = document.getElementById('loginAlertMessage');
    alert.classList.remove('show');
}

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    applyConfig();
    
    // Modal de Login
    const loginModal = document.getElementById('loginModal');
    const loginMenuBtn = document.getElementById('loginMenuBtn');
    const closeLoginModal = document.getElementById('closeLoginModal');
    
    // Abrir modal
    if (loginMenuBtn) {
        loginMenuBtn.addEventListener('click', (e) => {
            e.preventDefault();
            loginModal.classList.add('show');
            document.body.style.overflow = 'hidden';
        });
    }
    
    // Cerrar modal
    if (closeLoginModal) {
        closeLoginModal.addEventListener('click', () => {
            loginModal.classList.remove('show');
            document.body.style.overflow = 'auto';
            hideLoginAlert();
        });
    }
    
    // Cerrar al hacer clic fuera del modal
    loginModal.addEventListener('click', (e) => {
        if (e.target === loginModal) {
            loginModal.classList.remove('show');
            document.body.style.overflow = 'auto';
            hideLoginAlert();
        }
    });
    
    // Tabs del modal
    document.querySelectorAll('.login-tab-button').forEach(button => {
        button.addEventListener('click', () => {
            const tab = button.dataset.tab;
            
            // Actualizar botones
            document.querySelectorAll('.login-tab-button').forEach(btn => {
                btn.classList.remove('active');
            });
            button.classList.add('active');
            
            // Actualizar contenido
            document.querySelectorAll('.login-tab-content').forEach(content => {
                content.classList.remove('active');
            });
            document.getElementById(`modal-${tab}-form`).classList.add('active');
            
            // Limpiar alerta
            hideLoginAlert();
        });
    });
    
    // Manejar login
    document.getElementById('modalLoginForm').addEventListener('submit', (e) => {
        e.preventDefault();
        
        const username = document.getElementById('modal-login-username').value.trim();
        const password = document.getElementById('modal-login-password').value;
        
        const submitBtn = e.target.querySelector('.login-btn-submit');
        submitBtn.classList.add('loading');
        
        setTimeout(() => {
            const result = auth.login(username, password);
            
            submitBtn.classList.remove('loading');
            
            if (result.success) {
                showLoginAlert('¡Inicio de sesión exitoso! Redirigiendo...', 'success');
                setTimeout(() => {
                    window.location.href = 'admin.html';
                }, 1000);
            } else {
                showLoginAlert(result.message, 'error');
            }
        }, 500);
    });
    
    // Manejar registro
    document.getElementById('modalRegisterForm').addEventListener('submit', (e) => {
        e.preventDefault();
        
        const username = document.getElementById('modal-register-username').value.trim();
        const password = document.getElementById('modal-register-password').value;
        const confirmPassword = document.getElementById('modal-register-password-confirm').value;
        
        if (password !== confirmPassword) {
            showLoginAlert('Las contraseñas no coinciden', 'error');
            return;
        }
        
        const submitBtn = e.target.querySelector('.login-btn-submit');
        submitBtn.classList.add('loading');
        
        setTimeout(() => {
            const result = auth.register(username, password);
            
            submitBtn.classList.remove('loading');
            
            if (result.success) {
                showLoginAlert(result.message + ' Ahora puedes iniciar sesión.', 'success');
                e.target.reset();
                
                setTimeout(() => {
                    document.querySelector('[data-tab="login"]').click();
                    document.getElementById('modal-login-username').value = username;
                }, 2000);
            } else {
                showLoginAlert(result.message, 'error');
            }
        }, 500);
    });
    
    // Limpiar alertas al escribir
    document.querySelectorAll('.login-form-group input').forEach(input => {
        input.addEventListener('input', hideLoginAlert);
    });
});
