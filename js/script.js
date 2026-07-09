
(function () {
    'use strict';

    // ===== بيانات الوصفات =====
    let recipes = [
        {
            id: 1,
            name: 'الكبسة',
            category: 'الوجبات الرئيسية',
            time: '45 دقيقة',
            serves: 4,
            difficulty: 'متوسط',
            img: 'images/دجاج بسة.jpg',
            desc: 'أشهر طبق خليجي بالأرز والدجاج',
            ingredients: ['500 غرام أرز بسمتي', '1 كيلو دجاج', 'بهارات مشكلة', 'بصل', 'زيت', 'ملح'],
            steps: ['اغسل الأرز وانقعه', 'حضر الدجاج بالبهارات', 'اطبخ الأرز مع المرق', 'قدم الطبق ساخناً'],
            prepTime: '20 دقيقة',
            cookTime: '40 دقيقة',
            calories: 550,
            servings: 4
        },
        {
            id: 2,
            name: 'المقلوبة',
            category: 'الوجبات الرئيسية',
            time: '60 دقيقة',
            serves: 6,
            difficulty: 'صعب',
            img: 'images/مقلوبة.jpg',
            desc: 'طبق فلسطيني مميز بالخضار والأرز',
            ingredients: ['أرز', 'لحم أو دجاج', 'باذنجان', 'بطاطا', 'بهارات'],
            steps: ['اقلي الخضار', 'اطبخ اللحم', 'رتب الطبقات', 'اقلب الطبق'],
            prepTime: '30 دقيقة',
            cookTime: '50 دقيقة',
            calories: 620,
            servings: 6
        },
        {
            id: 3,
            name: 'المنسف',
            category: 'الوجبات الرئيسية',
            time: '90 دقيقة',
            serves: 8,
            difficulty: 'صعب',
            img: 'images/منسف1.jpg',
            desc: 'الطبق الأردني الوطني باللحم واللبن',
            ingredients: ['لحم خروف', 'جميد', 'أرز', 'لوز', 'بقدونس'],
            steps: ['اسلق اللحم', 'حضر الجميد', 'اطبخ الأرز', 'وزع اللحم'],
            prepTime: '40 دقيقة',
            cookTime: '70 دقيقة',
            calories: 780,
            servings: 8
        },
        {
            id: 4,
            name: 'الشاورما',
            category: 'الوجبات الرئيسية',
            time: '30 دقيقة',
            serves: 4,
            difficulty: 'سهل',
            img: 'images/شاورما.jpg',
            desc: 'شاورما الدجاج بالخبز العربي',
            ingredients: ['دجاج', 'خبز', 'مخلل', 'ثومية', 'بهارات'],
            steps: ['تبل الدجاج', 'اشوي الدجاج', 'جهز الخبز', 'لف الشاورما'],
            prepTime: '15 دقيقة',
            cookTime: '20 دقيقة',
            calories: 480,
            servings: 4
        },
        {
            id: 5,
            name: 'الحمص',
            category: 'المقبلات',
            time: '15 دقيقة',
            serves: 6,
            difficulty: 'سهل',
            img: 'images/حمص.jpg',
            desc: 'الحمص بالطحينة أشهر مقبلات',
            ingredients: ['حمص مسلوق', 'طحينة', 'ليمون', 'ثوم', 'زيت زيتون'],
            steps: ['اهرس الحمص', 'أضف الطحينة', 'اعصر الليمون', 'زين بالزيت'],
            prepTime: '10 دقيقة',
            cookTime: '5 دقيقة',
            calories: 220,
            servings: 6
        },
        {
            id: 6,
            name: 'المتبل',
            category: 'المقبلات',
            time: '20 دقيقة',
            serves: 4,
            difficulty: 'سهل',
            img: 'images/المتبل.jpg',
            desc: 'متبل الباذنجان المشوي',
            ingredients: ['باذنجان', 'لبن', 'ثوم', 'نعناع', 'زيت'],
            steps: ['شوي الباذنجان', 'اهرس اللب', 'امزج المكونات', 'قدم بارداً'],
            prepTime: '15 دقيقة',
            cookTime: '10 دقيقة',
            calories: 180,
            servings: 4
        },
        {
            id: 7,
            name: 'الفتوش',
            category: 'المقبلات',
            time: '15 دقيقة',
            serves: 4,
            difficulty: 'سهل',
            img: 'images/فتوش.jpg',
            desc: 'سلطة الفتوش اللبنانية',
            ingredients: ['خس', 'خيار', 'طماطم', 'خبز محمص', 'خل', 'زيت'],
            steps: ['قطع الخضار', 'حمص الخبز', 'اخلط السلطة', 'أضف الخل'],
            prepTime: '10 دقيقة',
            cookTime: '0',
            calories: 150,
            servings: 4
        },
        {
            id: 8,
            name: 'التبولة',
            category: 'المقبلات',
            time: '20 دقيقة',
            serves: 4,
            difficulty: 'سهل',
            img: 'images/تبولة.jpg',
            desc: 'تبولة البرغل الطازجة',
            ingredients: ['برغل', 'بقدونس', 'نعناع', 'طماطم', 'ليمون'],
            steps: ['انقع البرغل', 'قطع الخضار', 'اخلط الكل', 'قدم مع الخس'],
            prepTime: '15 دقيقة',
            cookTime: '0',
            calories: 170,
            servings: 4
        },
        {
            id: 9,
            name: 'الكنافة',
            category: 'الحلويات',
            time: '40 دقيقة',
            serves: 6,
            difficulty: 'متوسط',
            img: 'images/الكنافة.jpg',
            desc: 'الكنافة النابلسية بالجبن',
            ingredients: ['كنافة', 'جبنة موزريلا', 'سمن', 'قطر', 'فستق'],
            steps: ['فتت الكنافة', 'وزع الجبن', 'اخبز حتى الذهبي', 'اسق بالقطر'],
            prepTime: '20 دقيقة',
            cookTime: '25 دقيقة',
            calories: 420,
            servings: 6
        },
        {
            id: 10,
            name: 'البقلاوة',
            category: 'الحلويات',
            time: '60 دقيقة',
            serves: 8,
            difficulty: 'صعب',
            img: 'images/بقلاوة.jpg',
            desc: 'بقلاوة بالفستق والقطر',
            ingredients: ['عجينة فيلو', 'فستق', 'سمن', 'قطر', 'ماء ورد'],
            steps: ['رتب العجين', 'وزع المكسرات', 'اخبز', 'اسق بالقطر'],
            prepTime: '30 دقيقة',
            cookTime: '40 دقيقة',
            calories: 550,
            servings: 8
        },
        {
            id: 11,
            name: 'المعمول',
            category: 'الحلويات',
            time: '50 دقيقة',
            serves: 10,
            difficulty: 'متوسط',
            img: 'images/المعمول.jpg',
            desc: 'معمول التمر أو الفستق',
            ingredients: ['سميد', 'سمن', 'تمر', 'فستق', 'سكر'],
            steps: ['اعجن السميد', 'حشو التمر', 'شكل المعمول', 'اخبز'],
            prepTime: '30 دقيقة',
            cookTime: '20 دقيقة',
            calories: 380,
            servings: 10
        },
        {
            id: 12,
            name: 'أم علي',
            category: 'الحلويات',
            time: '30 دقيقة',
            serves: 6,
            difficulty: 'سهل',
            img: 'images/أم_علي.jpg',
            desc: 'حلوى أم علي المصرية',
            ingredients: ['خبز', 'حليب', 'سكر', 'مكسرات', 'زبيب'],
            steps: ['فتت الخبز', 'اسكب الحليب', 'أضف المكسرات', 'اخبز حتى ذهبي'],
            prepTime: '10 دقيقة',
            cookTime: '25 دقيقة',
            calories: 420,
            servings: 6
        }
    ];

    // ===== عناصر DOM =====
    const modal = document.getElementById('recipeModal');
    const modalBody = document.getElementById('modalBody');
    const modalClose = document.getElementById('modalClose');
    const backBtn = document.getElementById('backTop');
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    // ===== دالة إنشاء بطاقة وصفة =====
    function createCardHTML(recipe) {
        return `
      <div class="recipe-card" data-id="${recipe.id}">
        <img src="${recipe.img}" alt="${recipe.name}" loading="lazy">
        <div class="card-body">
          <h3>${recipe.name}</h3>
          <div class="card-meta">
            <span><i class="far fa-clock"></i> ${recipe.time}</span>
            <span><i class="fas fa-users"></i> ${recipe.serves} أشخاص</span>
            <span class="badge">${recipe.category}</span>
          </div>
          <p>${recipe.desc}</p>
          <button class="btn-card" data-id="${recipe.id}">عرض الوصفة</button>
        </div>
      </div>
    `;
    }

    // ===== عرض الوصفات في الصفحة الرئيسية =====
    function renderFeatured() {
        const container = document.getElementById('featuredRecipes');
        if (!container) return;
        const featured = recipes.slice(0, 6);
        container.innerHTML = featured.map(r => createCardHTML(r)).join('');
    }

    // ===== عرض جميع الوصفات في صفحة الوصفات =====
    function renderAllRecipes(filteredRecipes) {
        const container = document.getElementById('allRecipes');
        if (!container) return;
        const data = filteredRecipes || recipes;
        container.innerHTML = data.map(r => createCardHTML(r)).join('');
    }

    // ===== المودال =====
    function openModal(recipeId) {
        const recipe = recipes.find(r => r.id === recipeId);
        if (!recipe) return;

        modalBody.innerHTML = `
      <h2>${recipe.name}</h2>
      <img src="${recipe.img}" alt="${recipe.name}" loading="lazy">
      <div class="modal-grid">
        <span><i class="far fa-clock"></i> تحضير: ${recipe.prepTime}</span>
        <span><i class="fas fa-fire"></i> طبخ: ${recipe.cookTime}</span>
        <span><i class="fas fa-bolt"></i> سعرات: ${recipe.calories}</span>
        <span><i class="fas fa-users"></i> حصص: ${recipe.servings}</span>
      </div>
      <h4>المكونات</h4>
      <ul>${recipe.ingredients.map(i => `<li>${i}</li>`).join('')}</ul>
      <h4>طريقة التحضير</h4>
      <ol>${recipe.steps.map((s, idx) => `<li>${s}</li>`).join('')}</ol>
    `;

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    // ===== أحداث المودال =====
    document.addEventListener('click', function (e) {
        const btn = e.target.closest('.btn-card');
        if (btn) {
            const id = parseInt(btn.dataset.id);
            openModal(id);
        }
    });

    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', function (e) {
        if (e.target === modal) closeModal();
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeModal();
    });

    // ===== هامبرغر =====
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function () {
            navLinks.classList.toggle('open');
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function () {
                navLinks.classList.remove('open');
            });
        });
    }

    // ===== زر العودة للأعلى =====
    window.addEventListener('scroll', function () {
        if (window.scrollY > 400) {
            backBtn.style.display = 'block';
        } else {
            backBtn.style.display = 'none';
        }
    });

    backBtn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // ===== تفعيل الرابط النشط =====
    function setActiveNav() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === currentPage) {
                link.classList.add('active');
            }
        });
    }
    setActiveNav();

    // ===== البحث والفلترة (صفحة الوصفات) =====
    function setupSearchAndFilter() {
        const searchInput = document.getElementById('searchInput');
        const filterButtons = document.querySelectorAll('.filter-btn');
        const container = document.getElementById('allRecipes');
        if (!container || !searchInput) return;

        let currentFilter = 'all';
        let currentSearch = '';

        function filterAndRender() {
            let filtered = recipes;

            // تصفية حسب التصنيف
            if (currentFilter !== 'all') {
                filtered = filtered.filter(r => r.category === currentFilter);
            }

            // تصفية حسب البحث
            if (currentSearch.trim() !== '') {
                const query = currentSearch.trim().toLowerCase();
                filtered = filtered.filter(r =>
                    r.name.includes(query) ||
                    r.desc.includes(query) ||
                    r.category.includes(query)
                );
            }

            renderAllRecipes(filtered);
        }

        // البحث الفوري
        searchInput.addEventListener('input', function () {
            currentSearch = this.value;
            filterAndRender();
        });

        // أزرار الفلترة
        filterButtons.forEach(btn => {
            btn.addEventListener('click', function () {
                filterButtons.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                currentFilter = this.dataset.filter;
                filterAndRender();
            });
        });
    }

    // ===== التحقق من نموذج التواصل =====
    function setupContactForm() {
        const form = document.getElementById('contactForm');
        if (!form) return;

        form.addEventListener('submit', function (e) {
            e.preventDefault();
            let isValid = true;

            // الاسم
            const name = document.getElementById('name');
            const nameError = document.getElementById('nameError');
            if (!name.value.trim()) {
                name.classList.add('error');
                nameError.classList.add('show');
                isValid = false;
            } else {
                name.classList.remove('error');
                nameError.classList.remove('show');
            }

            // البريد الإلكتروني
            const email = document.getElementById('email');
            const emailError = document.getElementById('emailError');
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email.value.trim())) {
                email.classList.add('error');
                emailError.classList.add('show');
                isValid = false;
            } else {
                email.classList.remove('error');
                emailError.classList.remove('show');
            }

            // الموضوع
            const subject = document.getElementById('subject');
            const subjectError = document.getElementById('subjectError');
            if (!subject.value.trim()) {
                subject.classList.add('error');
                subjectError.classList.add('show');
                isValid = false;
            } else {
                subject.classList.remove('error');
                subjectError.classList.remove('show');
            }

            // الرسالة
            const message = document.getElementById('message');
            const messageError = document.getElementById('messageError');
            if (message.value.trim().length < 20) {
                message.classList.add('error');
                messageError.classList.add('show');
                isValid = false;
            } else {
                message.classList.remove('error');
                messageError.classList.remove('show');
            }

            if (isValid) {
                alert('تم إرسال رسالتك بنجاح! شكراً لتواصلك معنا.');
                form.reset();
            }
        });

        // إزالة الأخطاء عند الكتابة
        document.querySelectorAll('#contactForm input, #contactForm textarea').forEach(field => {
            field.addEventListener('input', function () {
                this.classList.remove('error');
                const errorId = this.id + 'Error';
                const errorEl = document.getElementById(errorId);
                if (errorEl) errorEl.classList.remove('show');
            });
        });
    }

    // ===== التهيئة =====
    renderFeatured();
    renderAllRecipes();
    setupSearchAndFilter();
    setupContactForm();

    // ===== دعم التحميل البطيء للصور (Lazy Loading) =====
    if ('loading' in HTMLImageElement.prototype) {
        document.querySelectorAll('img[loading="lazy"]').forEach(img => {
            img.loading = 'lazy';
        });
    }

    // ===== تأثير الظهور عند التمرير (Scroll Animation) =====
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    document.addEventListener('DOMContentLoaded', function () {
        document.querySelectorAll('.recipe-card, .about-blurb, .why-us, .categories-section').forEach(el => {
            observer.observe(el);
        });
    });

})();