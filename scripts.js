// Aguardar o carregamento do DOM
document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    const preloader = document.getElementById('preloader');
    if (preloader) {
        window.addEventListener('load', function() {
            preloader.style.opacity = '0';
            setTimeout(function() {
                preloader.style.display = 'none';
            }, 500);
        });
    }

    // Header Scroll Effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.querySelector('.nav-links'); // usa a classe agora

if (mobileMenuBtn && navLinks) {
  mobileMenuBtn.addEventListener('click', function () {
    navLinks.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active'); // ativa o botão para animação
    document.body.classList.toggle('menu-open'); // opcional para bloquear scroll
  });
}

    // Smooth Scrolling para links de ancoragem
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Fechar menu mobile se estiver aberto
                if (navLinks && navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    mobileMenuBtn.textContent = '☰';
                }
                
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Testimonials Slider
    const testimonialsSlider = document.getElementById('testimonialsSlider');
    const prevTestimonial = document.getElementById('prevTestimonial');
    const nextTestimonial = document.getElementById('nextTestimonial');
    
    if (testimonialsSlider && prevTestimonial && nextTestimonial) {
        prevTestimonial.addEventListener('click', function() {
            testimonialsSlider.scrollBy({
                left: -330,
                behavior: 'smooth'
            });
        });
        
        nextTestimonial.addEventListener('click', function() {
            testimonialsSlider.scrollBy({
                left: 330,
                behavior: 'smooth'
            });
        });
    }

    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    
    if (faqItems.length > 0) {
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            const answer = item.querySelector('.faq-answer');
            const toggle = item.querySelector('.faq-toggle');
            
            question.addEventListener('click', function() {
                // Fechar outros itens
                faqItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('active')) {
                        otherItem.classList.remove('active');
                        otherItem.querySelector('.faq-answer').style.maxHeight = '0px';
                        otherItem.querySelector('.faq-toggle').textContent = '+';
                    }
                });
                
                // Abrir/fechar o item atual
                item.classList.toggle('active');
                
                if (item.classList.contains('active')) {
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                    toggle.textContent = '-';
                } else {
                    answer.style.maxHeight = '0px';
                    toggle.textContent = '+';
                }
            });
        });
    }

    // Back to Top Button - Modificado para estilo WhatsApp em posição diferente
    const backToTopBtn = document.createElement('div');
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.innerHTML = '↑';
    document.body.appendChild(backToTopBtn);
    
    // Estilizando o botão para parecer com o do WhatsApp mas em posição diferente
    backToTopBtn.style.position = 'fixed';
    backToTopBtn.style.bottom = '20px';
    backToTopBtn.style.left = '20px'; // Posicionado no canto inferior esquerdo em vez do direito
    backToTopBtn.style.width = '50px';
    backToTopBtn.style.height = '50px';
    backToTopBtn.style.borderRadius = '50%';
    backToTopBtn.style.backgroundColor = 'rgba(14, 66, 90, 0.5)'; // Verde WhatsApp
    backToTopBtn.style.color = '#fff';
    backToTopBtn.style.display = 'flex';
    backToTopBtn.style.justifyContent = 'center';
    backToTopBtn.style.alignItems = 'center';
    backToTopBtn.style.fontSize = '24px';
    backToTopBtn.style.cursor = 'pointer';
    backToTopBtn.style.boxShadow = '0 4px 10px rgba(14, 66, 90, 0.6)';
    backToTopBtn.style.transition = 'all 0.3s ease';
    backToTopBtn.style.opacity = '0';
    backToTopBtn.style.visibility = 'hidden';
    backToTopBtn.style.zIndex = '1000';
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            backToTopBtn.style.opacity = '1';
            backToTopBtn.style.visibility = 'visible';
        } else {
            backToTopBtn.style.opacity = '0';
            backToTopBtn.style.visibility = 'hidden';
        }
    });
    
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Form Submission
const quoteForm = document.getElementById('quoteForm');

if (quoteForm) {
    quoteForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Criar mensagem de sucesso
        const formMessage = document.createElement('div');
        formMessage.className = 'form-message success';
        formMessage.textContent = 'Sua solicitação foi enviada com sucesso! Entraremos em contato em breve.';
        
        // Estilizar a mensagem sem afetar outros elementos
        Object.assign(formMessage.style, {
            display: 'block',
            backgroundColor: 'rgba(87, 197, 182, 0.1)',
            color: 'var(--accent)',
            padding: '15px 20px',
            borderRadius: '10px',
            marginBottom: '20px',
            borderLeft: '4px solid var(--accent)',
            fontSize: '1.1rem',
            transition: 'opacity 0.5s ease'
        });
        
        // Inserir antes do formulário
        quoteForm.parentNode.insertBefore(formMessage, quoteForm);
        
        // Resetar formulário
        quoteForm.reset();
        
        // Scroll para a mensagem
        formMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Remover mensagem após alguns segundos
        setTimeout(function() {
            formMessage.style.opacity = '0';
            setTimeout(function() {
                formMessage.remove();
            }, 500);
        }, 5000);
    });
}

    // Cookie Consent
    const cookieConsent = document.createElement('div');
    cookieConsent.className = 'cookie-consent';
    cookieConsent.innerHTML = `
        <p class="cookie-text">Utilizamos cookies para melhorar sua experiência em nosso site. Ao continuar navegando, você concorda com nossa <a href="#">Política de Privacidade</a>.</p>
        <div class="cookie-buttons">
            <button class="cookie-btn accept-cookies">Aceitar</button>
            <button class="cookie-btn decline-cookies">Recusar</button>
        </div>
    `;
    
    // Verificar se já foi aceito
    if (!localStorage.getItem('cookieConsent')) {
        setTimeout(function() {
            document.body.appendChild(cookieConsent);
            cookieConsent.style.display = 'block';
        }, 2000);
    }
    
    // Event listeners para os botões
    if (cookieConsent) {
        cookieConsent.querySelector('.accept-cookies').addEventListener('click', function() {
            localStorage.setItem('cookieConsent', 'accepted');
            cookieConsent.style.opacity = '0';
            setTimeout(function() {
                cookieConsent.remove();
            }, 500);
        });
        
        cookieConsent.querySelector('.decline-cookies').addEventListener('click', function() {
            localStorage.setItem('cookieConsent', 'declined');
            cookieConsent.style.opacity = '0';
            setTimeout(function() {
                cookieConsent.remove();
            }, 500);
        });
    }

    // Animação de Fade-In para elementos quando aparecem na tela
    const fadeElements = document.querySelectorAll('.fadeIn');
    
    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                fadeInObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    fadeElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        fadeInObserver.observe(element);
    });

    // Portfolio Filtering
    const portfolioTabs = document.querySelectorAll('.portfolio-tab');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    if (portfolioTabs.length > 0 && portfolioItems.length > 0) {
        portfolioTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                // Remover classe active de todos os tabs
                portfolioTabs.forEach(t => t.classList.remove('active'));
                
                // Adicionar classe active ao tab clicado
                tab.classList.add('active');
                
                const filter = tab.getAttribute('data-filter');
                
                // Filtrar itens
                portfolioItems.forEach(item => {
                    if (filter === 'all') {
                        item.style.display = 'block';
                    } else {
                        if (item.classList.contains(filter)) {
                            item.style.display = 'block';
                        } else {
                            item.style.display = 'none';
                        }
                    }
                });
            });
        });
    }

    // Contador para destacar números importantes
    const counters = document.querySelectorAll('.counter');
    
    if (counters.length > 0) {
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = entry.target;
                    const countTo = parseInt(target.getAttribute('data-count'));
                    let count = 0;
                    const updateCount = () => {
                        const increment = countTo / 60; // Duração de aproximadamente 1 segundo
                        if (count < countTo) {
                            count += increment;
                            target.textContent = Math.ceil(count);
                            setTimeout(updateCount, 16.7); // ~60fps
                        } else {
                            target.textContent = countTo;
                        }
                    };
                    updateCount();
                    counterObserver.unobserve(target);
                }
            });
        }, {
            threshold: 0.5
        });
        
        counters.forEach(counter => {
            counterObserver.observe(counter);
        });
    }

    // Adiciona hover effects em cards
    const cards = document.querySelectorAll('.service-card, .template-card, .portfolio-item, .team-member');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 25px 50px rgba(0,0,0,0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
    });

    // Adicionar parallax effect no hero
    const hero = document.querySelector('.hero');
    
    if (hero) {
        window.addEventListener('scroll', function() {
            const scrollPosition = window.scrollY;
            if (scrollPosition < window.innerHeight) {
                hero.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
            }
        });
    }
});


 // Detecta elementos ao entrar na tela
 const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.15 });

  // Aplica a todos os elementos marcados
  document.querySelectorAll(".fade-in-up").forEach(el => {
    observer.observe(el);
  });

  // Aplica fade-in para quase tudo dentro de main
document.querySelectorAll("section, .container, .service-card, .template-card, .team-member, .testimonial-item")
.forEach(el => {
  el.classList.add("fade-in-up");
  observer.observe(el);
});



