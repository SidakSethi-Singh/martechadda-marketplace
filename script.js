document.addEventListener("DOMContentLoaded", () => {

    /* ---------- Theme Toggle (Dark/Light Mode) ---------- */
    const themeToggleBtn = document.getElementById("themeToggleBtn");
    const htmlElement = document.documentElement;
    const sunIcon = themeToggleBtn.querySelector(".sun-icon");
    const moonIcon = themeToggleBtn.querySelector(".moon-icon");

    // Check saved theme or user preference
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
        document.body.style.overflow = "hidden"; // Prevent background scroll
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
        
        // Close drawer when a link is clicked
        const drawerLinks = mobileDrawer.querySelectorAll(".drawer-link");
        drawerLinks.forEach(link => {
            link.addEventListener("click", closeMobileMenu);
        });
    }

    /* ---------- Scroll-reveal for cards / sections ---------- */
    const revealEls = document.querySelectorAll(".reveal");

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                // slight stagger for a natural cascade
                setTimeout(() => entry.target.classList.add("in-view"), i * 60);
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.10, rootMargin: "0px 0px -20px 0px" });

    revealEls.forEach((el) => revealObserver.observe(el));

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
            // ease-out cubic
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

    /* ---------- Services Filtering ---------- */
    const pills = document.querySelectorAll(".pill");
    const dropdownItems = document.querySelectorAll(".dropdown-menu .dropdown-item");
    const servicesGrid = document.getElementById("servicesGrid");
    const cards = servicesGrid.querySelectorAll(".card");

    function applyFilter(filterValue) {
        // Toggle filter-active class on grid to adapt columns when filtering
        if (filterValue === "all") {
            servicesGrid.classList.remove("filter-active");
        } else {
            servicesGrid.classList.add("filter-active");
        }

        cards.forEach((card) => {
            const category = card.dataset.category;
            if (filterValue === "all" || category === filterValue) {
                card.classList.remove("filtered-out");
            } else {
                card.classList.add("filtered-out");
            }
        });

        // Trigger reveal scroll check again for visible cards
        revealEls.forEach((el) => {
            const rect = el.getBoundingClientRect();
            const inViewport = (rect.top <= window.innerHeight && rect.bottom >= 0);
            if (inViewport) {
                el.classList.add("in-view");
            }
        });
    }

    // Connect pill clicks
    pills.forEach((pill) => {
        pill.addEventListener("click", () => {
            pills.forEach((p) => p.classList.remove("pill-active"));
            pill.classList.add("pill-active");
            
            const filterValue = pill.dataset.filter;
            applyFilter(filterValue);
            
            // Sync active pill state in dropdowns if applicable
            dropdownItems.forEach((item) => {
                if (item.dataset.filter === filterValue) {
                    item.style.fontWeight = "bold";
                } else {
                    item.style.fontWeight = "";
                }
            });
        });
    });

    // Connect sub-nav dropdown clicks
    dropdownItems.forEach((item) => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            const filterValue = item.dataset.filter;
            
            // Sync filter pills
            pills.forEach((p) => {
                if (p.dataset.filter === filterValue) {
                    p.classList.add("pill-active");
                } else {
                    p.classList.remove("pill-active");
                }
            });

            applyFilter(filterValue);
            
            // Scroll to services grid
            const servicesSection = document.getElementById("services");
            if (servicesSection) {
                servicesSection.scrollIntoView({ behavior: "smooth" });
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
        // Clamp index
        if (index < 0) {
            currentTestimonialIndex = testimonialCards.length - 1;
        } else if (index >= testimonialCards.length) {
            currentTestimonialIndex = 0;
        } else {
            currentTestimonialIndex = index;
        }

        // Toggle classes on cards
        testimonialCards.forEach((card, i) => {
            if (i === currentTestimonialIndex) {
                card.classList.add("active");
            } else {
                card.classList.remove("active");
            }
        });

        // Toggle classes on dots
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

    /* ---------- Load More Services Demo ---------- */
    const loadMoreBtn = document.querySelector(".load-more-wrap .btn-outline");
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener("click", () => {
            loadMoreBtn.textContent = "Loading…";
            loadMoreBtn.disabled = true;
            setTimeout(() => {
                loadMoreBtn.textContent = "Load More Services";
                loadMoreBtn.disabled = false;
                alert("This is a demo. All 8 currently featured core services have already been loaded!");
            }, 900);
        });
    }

    /* ---------- Subtle 3D tilt on the featured card ---------- */
    const featured = document.querySelector(".card-featured");
    if (featured && window.matchMedia("(pointer: fine)").matches) {
        featured.addEventListener("mousemove", (e) => {
            const rect = featured.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            featured.style.transform = `translateY(-6px) scale(1.012) rotateX(${(-y * 3).toFixed(2)}deg) rotateY(${(x * 3).toFixed(2)}deg)`;
        });
        featured.addEventListener("mouseleave", () => {
            featured.style.transform = "";
        });
    }

});