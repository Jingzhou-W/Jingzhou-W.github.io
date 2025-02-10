document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
  
    burger.addEventListener('click', () => {
      navLinks.classList.toggle('nav-active');
      burger.classList.toggle('toggle');
    });
  
    // Pretend to send message and show an error
    const contactForm = document.querySelector('.contact-content form');
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
  
      // Change the button text to indicate it's "sending"
      const submitButton = contactForm.querySelector('.btn[type="submit"]');
      submitButton.disabled = true;
      submitButton.innerText = 'Sending...';
  
      // Simulate a delay before showing the error
      setTimeout(() => {
        submitButton.disabled = false;
        submitButton.innerText = 'Send Message';
  
        // Show error message
        alert("An error occurred while sending your message. Please send an email instead.");
      }, 2000);
    });
  
    // Language Selector & Translations
  
    // Grab the selector element
    const languageSelect = document.getElementById('language-select');
  
    // Listen for language change
    languageSelect.addEventListener('change', function() {
      const selectedLang = this.value;
      updateLanguage(selectedLang);
    });
  
    // Define the translation strings for English, Chinese, and Arabic
    const translations = {
      en: {
        nav: { home: "Home", about: "About Us", services: "Our Services", contact: "Contact" },
        hero: { title1: "Welcome to HD Tex", title2: "Since 2000", description: "Your trusted partner in global textile trading.", btn: "Learn More" },
        about: { title: "About Us", content: "HD Tex is a leading company specializing in international textile trading since 2000. With a global presence and a commitment to excellence, we bridge markets and deliver unparalleled value to our partners." },
        services: {
          title: "Our Services",
          item1: { title: "International Textile Trading", content: "Connecting businesses worldwide with efficient and reliable textile trading services." },
          item2: { title: "Technology Integration", content: "Offering solutions to enhance your supply chain and streamline operations." },
          item3: { title: "Consulting", content: "Providing expert advice to help your business thrive in the global textile market." }
        },
        contact: { 
          title: "Contact Us", 
          form: { name: "Your Name", email: "Your Email", message: "Your Message", btn: "Send Message" }, 
          info: { address: "JINSHENG BUILDING, NO. 53 SOUTH HAILING ROAD, DONGTAI, JIANGSU, CHINA", email: "info@hdtexes.com", phone: "0086-515-85213779" }
        },
        footer: "© 2024 DONGTAI HONGDA INDUSTRIAL CO.,LTD. All rights reserved."
      },
      zh: {
        nav: { home: "主页", about: "关于我们", services: "我们的服务", contact: "联系我们" },
        hero: { title1: "欢迎来到 HD 纺织", title2: "Since 2000", description: "您可信赖的全球纺织品贸易伙伴。", btn: "了解更多" },
        about: { title: "关于我们", content: "HD Tex 是一家领先的公司，专注于国际纺织品贸易，自2000年起在全球范围内开展业务，致力于卓越的品质，为合作伙伴提供无与伦比的价值。" },
        services: {
          title: "我们的服务",
          item1: { title: "国际纺织品贸易", content: "为全球企业提供高效、可靠的纺织品贸易服务。" },
          item2: { title: "技术整合", content: "提供解决方案以提升您的供应链和简化运营。" },
          item3: { title: "咨询服务", content: "提供专业建议，助您在全球纺织品市场中蓬勃发展。" }
        },
        contact: { 
          title: "联系我们", 
          form: { name: "您的姓名", email: "您的邮箱", message: "您的留言", btn: "发送信息" }, 
          info: { address: "中国江苏省东台市海陵南路53号金盛大厦", email: "info@hdtexes.com", phone: "0086-515-85213779" }
        },
        footer: "© 2024 DONGTAI HONGDA INDUSTRIAL CO.,LTD. All rights reserved."
      },
      ar: {
        nav: { home: "الرئيسية", about: "من نحن", services: "خدماتنا", contact: "اتصل بنا" },
        hero: { title1: "مرحباً بكم في HD Tex", title2: "منذ 2000", description: "شريككم الموثوق في تجارة المنسوجات العالمية.", btn: "اعرف المزيد" },
        about: { title: "من نحن", content: "تعد HD Tex شركة رائدة متخصصة في تجارة المنسوجات الدولية منذ عام 2000. مع حضور عالمي والالتزام بالتميز، نجسر الأسواق ونقدم قيمة لا مثيل لها لشركائنا." },
        services: {
          title: "خدماتنا",
          item1: { title: "تجارة المنسوجات الدولية", content: "ربط الشركات حول العالم من خلال خدمات تجارة المنسوجات الفعالة والموثوقة." },
          item2: { title: "تكامل التكنولوجيا", content: "تقديم حلول لتعزيز سلسلة التوريد لديك وتبسيط العمليات." },
          item3: { title: "الاستشارات", content: "تقديم المشورة الخبيرة لمساعدة عملك على الازدهار في سوق المنسوجات العالمية." }
        },
        contact: { 
          title: "اتصل بنا", 
          form: { name: "اسمك", email: "بريدك الإلكتروني", message: "رسالتك", btn: "أرسل الرسالة" }, 
          info: { address: "مبنى جينشينج، رقم 53 طريق ساوث هيلينغ، دونغتاي، جيانغسو، الصين", email: "info@hdtexes.com", phone: "0086-515-85213779" }
        },
        footer: "© 2024 شركة دونغتاي هونغدا الصناعية المحدودة. كل الحقوق محفوظة."
      }
    };
  
    // Function to update the text on the page based on the selected language
    function updateLanguage(lang) {
      // Update the HTML lang attribute and set text direction for Arabic
      document.documentElement.lang = lang;
      document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
  
      // Update navigation links
      document.getElementById('nav-home').textContent = translations[lang].nav.home;
      document.getElementById('nav-about').textContent = translations[lang].nav.about;
      document.getElementById('nav-services').textContent = translations[lang].nav.services;
      document.getElementById('nav-contact').textContent = translations[lang].nav.contact;
  
      // Update hero section
      document.getElementById('hero-title1').textContent = translations[lang].hero.title1;
      document.getElementById('hero-title2').textContent = translations[lang].hero.title2;
      document.getElementById('hero-description').textContent = translations[lang].hero.description;
      document.getElementById('hero-btn').textContent = translations[lang].hero.btn;
  
      // Update about section
      document.getElementById('about-title').textContent = translations[lang].about.title;
      document.getElementById('about-content').textContent = translations[lang].about.content;
  
      // Update services section
      document.getElementById('services-title').textContent = translations[lang].services.title;
      document.getElementById('service1-title').textContent = translations[lang].services.item1.title;
      document.getElementById('service1-content').textContent = translations[lang].services.item1.content;
      document.getElementById('service2-title').textContent = translations[lang].services.item2.title;
      document.getElementById('service2-content').textContent = translations[lang].services.item2.content;
      document.getElementById('service3-title').textContent = translations[lang].services.item3.title;
      document.getElementById('service3-content').textContent = translations[lang].services.item3.content;
  
      // Update contact section
      document.getElementById('contact-title').textContent = translations[lang].contact.title;
      document.getElementById('contact-name').placeholder = translations[lang].contact.form.name;
      document.getElementById('contact-email').placeholder = translations[lang].contact.form.email;
      document.getElementById('contact-message').placeholder = translations[lang].contact.form.message;
      document.getElementById('contact-btn').textContent = translations[lang].contact.form.btn;
      document.getElementById('contact-info-address').innerHTML = `<i class="fas fa-map-marker-alt"></i> ${translations[lang].contact.info.address}`;
      document.getElementById('contact-info-email').innerHTML = `<i class="fas fa-envelope"></i> ${translations[lang].contact.info.email}`;
      document.getElementById('contact-info-phone').innerHTML = `<i class="fas fa-phone"></i> ${translations[lang].contact.info.phone}`;
  
      // Update footer
      document.getElementById('footer-text').textContent = translations[lang].footer;
    }
  
    // Initialize default language (based on the selector's value)
    updateLanguage(languageSelect.value);
  });
