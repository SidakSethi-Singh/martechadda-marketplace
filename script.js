document.addEventListener("DOMContentLoaded", () => {

    /* ---------- Resources Data Model ---------- */
    const resources = [
        {
            id: 1,
            title: "The Ultimate Guide to Modern B2B Branding",
            description: "Learn how to build a unified design system, establish a unique brand voice, and stand out in a crowded marketplace.",
            category: "Guides",
            tag: "Branding",
            readTime: "8 min read",
            publishDate: "June 25, 2026",
            image: "https://images.unsplash.com/photo-1634084462412-b54873c0a56d?w=800&auto=format&fit=crop",
            author: {
                name: "Sarah Jenkins",
                role: "Head of Brand Strategy",
                avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150"
            },
            content: `<h2>Why Brand Identity Matters in B2B</h2><p>Modern B2B purchasing decisions are not purely rational. Trust, consistency, and professional appeal play a vital role.</p><h3>1. Establish a Single Source of Truth</h3><p>A unified design system is your secret weapon.</p><ul><li><strong>Color Palette:</strong> Define primary, secondary, neutral, and accent colors to ensure visual harmony across all dashboards.</li><li><strong>Typography:</strong> Establish clean sans-serif pairs for maximum legibility on mobile and desktop viewports.</li></ul><h3>2. Defining Your Brand Voice</h3><p>A brand voice checklist should guide all copywriters. It builds brand authenticity, authority, and trust over time.</p>`
        },
        {
            id: 2,
            title: "Mastering Strategic Marketing in 2026",
            description: "An in-depth case study on how leading SaaS companies optimized customer acquisition costs and scaled revenue.",
            category: "Case Studies",
            tag: "Strategic Marketing",
            readTime: "12 min read",
            publishDate: "May 18, 2026",
            image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&auto=format&fit=crop",
            author: {
                name: "Marcus Vance",
                role: "Growth Director",
                avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150"
            },
            content: `<h2>The Shift in B2B Customer Acquisition</h2><p>As traditional digital advertising costs climb, SaaS companies are seeking alternative acquisition strategies to build healthy margins.</p><h3>The Strategy: Requirement-First Mapping</h3><ul><li><strong>Cost Optimization:</strong> Achieve up to a 45% decrease in Customer Acquisition Cost (CAC) by aligning marketing spend strictly with high-intent channels.</li><li><strong>Lead Optimization:</strong> Experience an 80% increase in sales-qualified leads (SQLs) through custom lead qualification structures.</li></ul>`
        },
        {
            id: 3,
            title: "Search Engine Optimization: Advanced Rank Tracking",
            description: "Discover actionable techniques to build organic visibility, implement Schema markup, and perform site crawl audits.",
            category: "Articles",
            tag: "Marketing Collateral",
            readTime: "6 min read",
            publishDate: "April 12, 2026",
            image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&auto=format&fit=crop",
            author: {
                name: "Elena Rostova",
                role: "Senior SEO Consultant",
                avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150"
            },
            content: `<h2>Modern SEO is About Experience</h2><p>Google's core algorithms continuously evolve to prioritize user experience (Core Web Vitals) and high-quality structured content.</p><h3>1. Structured Data and Schema Markup</h3><p>Rich snippets and FAQ markups can elevate your search click-through rates by up to 22% by making your results interactive.</p><h3>2. Performing Comprehensive Site Audits</h3><ul><li><strong>Crawl Budget waste:</strong> Block unnecessary parameters, duplicates, and admin paths in robots.txt.</li><li><strong>Error Resolution:</strong> Constantly audit and fix broken redirect loops (5xx errors) and broken 404 links.</li></ul>`
        },
        {
            id: 4,
            title: "The Content Blueprint: Creating Copy that Converts",
            description: "Unlock copywriting methods designed to keep readers engaged, increase email click rates, and convert landing page traffic.",
            category: "Articles",
            tag: "Content Strategy",
            readTime: "5 min read",
            publishDate: "March 30, 2026",
            image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&auto=format&fit=crop",
            author: {
                name: "David Chen",
                role: "Copywriter & Narrative Lead",
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150"
            },
            content: `<h2>The Art of Conversion Copywriting</h2><p>Conversion copywriting prompts a reader to take a specific action, whether it is registering for a webinar, subscribing to a newsletter, or purchasing a subscription.</p><h3>1. The PAS Formula</h3><ul><li><strong>Problem:</strong> Identify the specific issue your prospect is facing and validate their frustration.</li><li><strong>Agitate:</strong> Highlight the pain this problem causes if left unaddressed.</li><li><strong>Solve:</strong> Present your service as the ideal, risk-free solution.</li></ul>`
        },
        {
            id: 5,
            title: "Building a High-Performance Marketing Team",
            description: "An expert panel discussion outlining organizational design, scaling channels, and balancing in-house talent vs. agencies.",
            category: "Videos",
            tag: "Strategic Marketing",
            readTime: "15 min watch",
            publishDate: "February 22, 2026",
            image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop",
            author: {
                name: "Marcus Vance",
                role: "Growth Director",
                avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150"
            },
            content: `<h2>Panel Highlights and Key Takeaways</h2><p>How to design an agile marketing department that remains adaptable under shifting algorithm priorities.</p><h3>Balancing Core Specialties</h3><ul><li><strong>Strategy and Insights:</strong> Analyzing customer research data and scoping campaign frameworks.</li><li><strong>Creative and Brand:</strong> Aligning designers, videographers, and copywriters under a unified identity playbook.</li><li><strong>Performance and Distribution:</strong> Overseeing organic SEO tracks, search ads, and paid media distribution.</li></ul>`
        },
        {
            id: 6,
            title: "Advanced Logo and Brand Identity Playbook",
            description: "A comprehensive digital workbook with exercises for defining color psychology, brand elements, and style sheets.",
            category: "E-books",
            tag: "Branding",
            readTime: "25 min read",
            publishDate: "January 15, 2026",
            image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop",
            author: {
                name: "Sarah Jenkins",
                role: "Head of Brand Strategy",
                avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150"
            },
            content: `<h2>The Core Pillars of a Brand Playbook</h2><p>This playbook guides you step-by-step through a complete visual brand refresh.</p><h3>1. Visual Identity Psychology</h3><p>Warm shades like coral promote excitement and creativity, while cooler colors promote stability and premium trust.</p><h3>2. The Logo Grid System</h3><p>Formulate strict specifications for spacing, margin ratios, and minimum size limits on mobile viewports.</p>`
        },
        {
            id: 7,
            title: "The Technical SEO Audit Checklist",
            description: "An actionable, step-by-step workbook for evaluating website indexing speed, mobile compatibility, and core performance metrics.",
            category: "Checklists",
            tag: "Marketing Collateral",
            readTime: "10 min read",
            publishDate: "December 05, 2025",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
            author: {
                name: "Elena Rostova",
                role: "Senior SEO Consultant",
                avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150"
            },
            content: `<h2>Technical SEO Checklist</h2><p>Before investing in new content, make sure your website indexation status is fully healthy.</p><h3>1. Speed and Vital Scores</h3><ul><li>Minimize JS execution times by deferring secondary scripts.</li><li>Compress all images to WebP format.</li><li>Implement server-side caching or use a globally distributed CDN.</li></ul><h3>2. Indexation and Structure</h3><ul><li>Ensure your XML sitemap is submitted to Google Search Console.</li><li>Eliminate duplicate page variants with canonical tags.</li></ul>`
        },
        {
            id: 8,
            title: "Social Media Growth: Zero to 100k Guide",
            description: "Discover organic growth frameworks, platform-specific content structures, and automation setups that work in 2026.",
            category: "Guides",
            tag: "Content Strategy",
            readTime: "9 min read",
            publishDate: "November 14, 2025",
            image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&auto=format&fit=crop",
            author: {
                name: "David Chen",
                role: "Copywriter & Narrative Lead",
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150"
            },
            content: `<h2>The Framework for Organic Growth</h2><p>Building a social audience is about consistency, templates, and content relevance.</p><h3>1. Select the Right Channels</h3><p>For B2B services, LinkedIn is unmatched. For visual brands, Instagram and TikTok yield the highest returns.</p><h3>2. Focus on Content Templates</h3><p>Structure your social feed with reusable formats: hook, value, and CTA.</p>`
        }
    ];

    /* ---------- Theme Toggle (Dark/Light Mode) ---------- */
    const themeToggleBtn = document.getElementById("themeToggleBtn");
    const htmlElement = document.documentElement;
    const sunIcon = themeToggleBtn.querySelector(".sun-icon");
    const moonIcon = themeToggleBtn.querySelector(".moon-icon");

    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
        htmlElement.setAttribute("data-theme", "dark");
        sunIcon.style.display = "none";
        moonIcon.style.display = "block";
    } else {
        htmlElement.setAttribute("data-theme", "light");
        sunIcon.style.display = "block";
        moonIcon.style.display = "none";
    }

    themeToggleBtn.addEventListener("click", () => {
        const currentTheme = htmlElement.getAttribute("data-theme");
        if (currentTheme === "dark") {
            htmlElement.setAttribute("data-theme", "light");
            localStorage.setItem("theme", "light");
            sunIcon.style.display = "block";
            moonIcon.style.display = "none";
        } else {
            htmlElement.setAttribute("data-theme", "dark");
            localStorage.setItem("theme", "dark");
            sunIcon.style.display = "none";
            moonIcon.style.display = "block";
        }
    });

    /* ---------- Mobile Nav Drawer ---------- */
    const menuToggle = document.getElementById("menuToggle");
    const closeDrawer = document.getElementById("closeDrawer");
    const mobileDrawer = document.getElementById("mobileDrawer");
    const drawerOverlay = document.getElementById("drawerOverlay");

    function openMobileMenu() {
        mobileDrawer.classList.add("active");
        drawerOverlay.classList.add("active");
        document.body.style.overflow = "hidden";
    }

    function closeMobileMenu() {
        mobileDrawer.classList.remove("active");
        drawerOverlay.classList.remove("active");
        document.body.style.overflow = "";
    }

    if (menuToggle && closeDrawer && mobileDrawer && drawerOverlay) {
        menuToggle.addEventListener("click", openMobileMenu);
        closeDrawer.addEventListener("click", closeMobileMenu);
        drawerOverlay.addEventListener("click", closeMobileMenu);
        
        const drawerLinks = mobileDrawer.querySelectorAll(".drawer-link");
        drawerLinks.forEach(link => {
            link.addEventListener("click", closeMobileMenu);
        });
    }

    /* ---------- Dynamic Resources Grid Rendering ---------- */
    const resourcesGrid = document.getElementById("resourcesGrid");

    function renderResources(items) {
        if (!resourcesGrid) return;
        resourcesGrid.innerHTML = "";

        items.forEach((item) => {
            const card = document.createElement("div");
            card.className = "card reveal";
            card.dataset.category = item.category;
            card.dataset.id = item.id;

            card.innerHTML = `
                <div class="card-media">
                    <img src="${item.image}" alt="${item.title}" loading="lazy">
                </div>
                <div class="card-body">
                    <div class="card-meta-row">
                        <span class="card-tag">${item.tag}</span>
                        <span class="card-read-time">${item.readTime}</span>
                    </div>
                    <h3 class="card-title">${item.title}</h3>
                    <p class="card-desc">${item.description}</p>
                    <div class="card-author-block">
                        <img src="${item.author.avatar}" alt="${item.author.name}" class="author-avatar" loading="lazy">
                        <div class="author-details">
                            <span class="author-name">${item.author.name}</span>
                            <span class="author-role">${item.author.role}</span>
                        </div>
                        <span class="card-date">${item.publishDate}</span>
                    </div>
                </div>
            `;

            // Open article modal on card click
            card.addEventListener("click", () => {
                openArticleModal(item);
            });

            resourcesGrid.appendChild(card);
        });

        // Trigger intersection observer reveal
        const revealEls = resourcesGrid.querySelectorAll(".reveal");
        revealEls.forEach((el) => revealObserver.observe(el));
    }

    /* ---------- Article Modal Handlers ---------- */
    const articleModal = document.getElementById("articleModal");
    const modalContent = document.getElementById("modalContent");
    const modalCloseBtn = document.getElementById("modalCloseBtn");

    function openArticleModal(item) {
        if (!articleModal || !modalContent) return;

        modalContent.innerHTML = `
            <div class="modal-article-header">
                <div class="modal-article-meta">
                    <span class="modal-article-tag">${item.tag}</span>
                    <span class="modal-article-date">${item.publishDate} • ${item.readTime}</span>
                </div>
                <h1 class="modal-article-title" id="modalTitle">${item.title}</h1>
                <div class="modal-author-profile">
                    <img src="${item.author.avatar}" alt="${item.author.name}" class="author-avatar" loading="lazy">
                    <div class="author-details">
                        <span class="author-name" style="font-size: 14px; font-weight: 700;">${item.author.name}</span>
                        <span class="author-role" style="font-size: 12px; color: var(--ink-soft);">${item.author.role}</span>
                    </div>
                </div>
            </div>
            <div class="modal-article-body">
                ${item.content}
            </div>
        `;

        articleModal.classList.add("active");
        document.body.classList.add("modal-open");
    }

    function closeArticleModal() {
        if (!articleModal) return;
        articleModal.classList.remove("active");
        document.body.classList.remove("modal-open");
    }

    if (modalCloseBtn) {
        modalCloseBtn.addEventListener("click", closeArticleModal);
    }

    if (articleModal) {
        // Close on background overlay click
        articleModal.addEventListener("click", (e) => {
            if (e.target === articleModal) {
                closeArticleModal();
            }
        });
    }

    // Close on ESC key press
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeArticleModal();
        }
    });

    /* ---------- Scroll-reveal Observer ---------- */
    const revealEls = document.querySelectorAll(".reveal");

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                setTimeout(() => entry.target.classList.add("in-view"), i * 60);
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.10, rootMargin: "0px 0px -20px 0px" });

    revealEls.forEach((el) => revealObserver.observe(el));

    /* ---------- Render Initial resources ---------- */
    renderResources(resources);

    /* ---------- Category Filtering Logic ---------- */
    const pills = document.querySelectorAll(".pill");
    const dropdownItems = document.querySelectorAll(".dropdown-menu .dropdown-item");
    const footerLinks = document.querySelectorAll(".footer-cat-link");

    function applyFilter(filterValue) {
        if (!resourcesGrid) return;
        
        if (filterValue === "all") {
            resourcesGrid.classList.remove("filter-active");
        } else {
            resourcesGrid.classList.add("filter-active");
        }

        const cards = resourcesGrid.querySelectorAll(".card");
        cards.forEach((card) => {
            const category = card.dataset.category;
            if (filterValue === "all" || category === filterValue) {
                card.style.display = "flex";
                // Allow CSS opacity animations
                setTimeout(() => card.classList.remove("filtered-out"), 10);
            } else {
                card.classList.add("filtered-out");
                // Set display none after fade-out transition
                card.style.display = "none";
            }
        });

        // Sync pills
        pills.forEach((p) => {
            if (p.dataset.filter === filterValue) {
                p.classList.add("pill-active");
            } else {
                p.classList.remove("pill-active");
            }
        });

        // Sync dropdown items
        dropdownItems.forEach((item) => {
            if (item.dataset.filter === filterValue) {
                item.style.fontWeight = "bold";
            } else {
                item.style.fontWeight = "";
            }
        });
    }

    // Connect pill event listeners
    pills.forEach((pill) => {
        pill.addEventListener("click", () => {
            const filterValue = pill.dataset.filter;
            applyFilter(filterValue);
        });
    });

    // Connect dropdown event listeners
    dropdownItems.forEach((item) => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            const filterValue = item.dataset.filter;
            applyFilter(filterValue);
            
            const resourcesSection = document.getElementById("resources");
            if (resourcesSection) {
                resourcesSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Connect footer categories event listeners
    footerLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const filterValue = link.dataset.filter;
            applyFilter(filterValue);
            
            const resourcesSection = document.getElementById("resources");
            if (resourcesSection) {
                resourcesSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    /* ---------- Testimonials Slider ---------- */
    const testimonialCards = document.querySelectorAll(".testimonial-card");
    const dots = document.querySelectorAll("#sliderDots .dot");
    const prevBtn = document.getElementById("prevTestimonial");
    const nextBtn = document.getElementById("nextTestimonial");
    let currentTestimonialIndex = 0;

    function showTestimonial(index) {
        if (testimonialCards.length === 0) return;

        if (index < 0) {
            currentTestimonialIndex = testimonialCards.length - 1;
        } else if (index >= testimonialCards.length) {
            currentTestimonialIndex = 0;
        } else {
            currentTestimonialIndex = index;
        }

        testimonialCards.forEach((card, i) => {
            if (i === currentTestimonialIndex) {
                card.classList.add("active");
            } else {
                card.classList.remove("active");
            }
        });

        dots.forEach((dot, i) => {
            if (i === currentTestimonialIndex) {
                dot.classList.add("active");
            } else {
                dot.classList.remove("active");
            }
        });
    }

    if (prevBtn && nextBtn) {
        prevBtn.addEventListener("click", () => {
            showTestimonial(currentTestimonialIndex - 1);
        });

        nextBtn.addEventListener("click", () => {
            showTestimonial(currentTestimonialIndex + 1);
        });

        dots.forEach((dot) => {
            dot.addEventListener("click", () => {
                const targetIdx = parseInt(dot.dataset.index, 10);
                showTestimonial(targetIdx);
            });
        });
    }

    /* ---------- Animated stat counters ---------- */
    const stats = document.querySelectorAll(".stat");

    const animateCount = (el) => {
        const target = parseInt(el.dataset.target, 10);
        const suffix = el.dataset.suffix || "";
        const numEl = el.querySelector(".stat-num");
        const duration = 1400;
        const start = performance.now();

        function tick(now) {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const value = Math.round(eased * target);
            numEl.textContent = value + suffix;
            if (progress < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
    };

    const statObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                animateCount(entry.target);
                statObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.4 });

    stats.forEach((s) => statObserver.observe(s));

});