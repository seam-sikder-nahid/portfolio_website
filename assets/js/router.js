// Router for Single Page Application
class Router {
    constructor() {
        this.routes = {};
        this.currentPage = '';
        this.contentElement = document.getElementById('content');
        this.init();
    }

    init() {
        // Listen for hash changes
        window.addEventListener('hashchange', () => this.handleRoute());
        window.addEventListener('load', () => this.handleRoute());
        
        // Register all routes
        this.registerRoutes();
    }

    registerRoutes() {
        const pages = [
            'home', 'about', 'education', 'skills', 'projects', 
            'blog', 'portfolio', 'timeline', 'business', 
            'gallery', 'journal', 'resume', 'contact'
        ];

        pages.forEach(page => {
            this.routes[page] = `pages/${page}.html`;
        });
    }

    async handleRoute() {
        // Get current hash without #
        let hash = window.location.hash.slice(1) || 'home';
        
        // If route doesn't exist, default to home
        if (!this.routes[hash]) {
            hash = 'home';
            window.location.hash = 'home';
        }

        // Don't reload if already on this page
        if (this.currentPage === hash) return;

        this.currentPage = hash;

        // Update active nav link
        this.updateActiveNav(hash);

        // Load the page
        await this.loadPage(hash);

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    async loadPage(page) {
        try {
            // Show loading state
            this.contentElement.style.opacity = '0';

            // Fetch the page content
            const response = await fetch(this.routes[page]);
            
            if (!response.ok) {
                throw new Error(`Failed to load page: ${page}`);
            }

            const html = await response.text();

            // Wait for fade out
            await new Promise(resolve => setTimeout(resolve, 200));

            // Update content
            this.contentElement.innerHTML = html;

            // Execute any scripts in the loaded content
            this.executeScripts();

            // Fade in new content
            this.contentElement.style.opacity = '1';

            // Initialize page-specific functionality
            this.initPageFunctionality(page);

        } catch (error) {
            console.error('Error loading page:', error);
            this.contentElement.innerHTML = `
                <div class="section" style="min-height: 60vh; display: flex; align-items: center; justify-content: center;">
                    <div style="text-align: center;">
                        <h2 style="color: var(--accent-color); margin-bottom: 20px;">Page Not Found</h2>
                        <p style="color: var(--text-secondary); margin-bottom: 30px;">The page you're looking for doesn't exist yet.</p>
                        <a href="#home" class="btn btn-primary">Go Home</a>
                    </div>
                </div>
            `;
            this.contentElement.style.opacity = '1';
        }
    }

    executeScripts() {
        const scripts = this.contentElement.querySelectorAll('script');
        scripts.forEach(script => {
            const newScript = document.createElement('script');
            newScript.textContent = script.textContent;
            script.parentNode.replaceChild(newScript, script);
        });
    }

    updateActiveNav(currentHash) {
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            const linkHash = link.getAttribute('href').slice(1);
            if (linkHash === currentHash) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    initPageFunctionality(page) {
        switch(page) {
            case 'skills':
                this.initSkillsPage();
                break;
            case 'projects':
                this.initProjectsPage();
                break;
            case 'blog':
                this.initBlogPage();
                break;
            case 'contact':
                this.initContactForm();
                break;
            case 'timeline':
                this.initTimelinePage();
                break;
            case 'business':
                this.initBusinessPage();
                break;
            default:
                break;
        }
    }

    initSkillsPage() {
        // Render skills dynamically
        const categories = ['cybersecurity', 'technical', 'business', 'leadership'];
        const titles = {
            cybersecurity: 'Cybersecurity',
            technical: 'Technical Skills',
            business: 'Business & Strategy',
            leadership: 'Leadership & Soft Skills'
        };

        categories.forEach(category => {
            const container = document.getElementById(`${category}-skills`);
            if (container && websiteData.skills[category]) {
                container.innerHTML = websiteData.skills[category]
                    .map(skill => `<span class="skill-tag">${skill}</span>`)
                    .join('');
            }
        });
    }

    initProjectsPage() {
        const container = document.getElementById('projects-grid');
        if (container && websiteData.projects) {
            container.innerHTML = websiteData.projects.map(project => `
                <div class="card">
                    <div class="card-content">
                        <div class="card-icon"><i class="fas fa-project-diagram"></i></div>
                        <h3 class="card-title">${project.title}</h3>
                        <p class="card-description">${project.description}</p>
                        <div style="margin-top: 15px;">
                            ${project.technologies.map(tech => 
                                `<span class="skill-tag" style="font-size: 0.85rem; padding: 5px 12px;">${tech}</span>`
                            ).join(' ')}
                        </div>
                        <div style="margin-top: 20px; display: flex; gap: 10px;">
                            <a href="${project.link}" class="btn btn-primary" style="padding: 8px 16px; font-size: 0.9rem;">View</a>
                            <a href="${project.github}" class="btn btn-secondary" style="padding: 8px 16px; font-size: 0.9rem;">GitHub</a>
                        </div>
                    </div>
                </div>
            `).join('');
        }
    }

    initBlogPage() {
        const container = document.getElementById('blog-grid');
        if (container && websiteData.blog) {
            container.innerHTML = websiteData.blog.map(post => `
                <div class="card">
                    <div class="card-content">
                        <div style="color: var(--primary-color); font-size: 0.9rem; margin-bottom: 10px;">
                            ${post.date} • ${post.readTime}
                        </div>
                        <h3 class="card-title">${post.title}</h3>
                        <p class="card-description">${post.excerpt}</p>
                        <div style="margin-top: 20px;">
                            <a href="#" class="btn btn-primary" style="padding: 8px 16px; font-size: 0.9rem;">Read More</a>
                        </div>
                    </div>
                </div>
            `).join('');
        }
    }

    initTimelinePage() {
        const container = document.getElementById('timeline-container');
        if (container && websiteData.timeline) {
            container.innerHTML = websiteData.timeline.map((item, index) => `
                <div class="timeline-item">
                    <div class="timeline-dot"></div>
                    <div class="timeline-content">
                        <div class="timeline-date">${item.year}</div>
                        <h3 class="timeline-title">${item.title}</h3>
                        <p class="timeline-description">${item.description}</p>
                    </div>
                </div>
            `).join('');
        }
    }

    initBusinessPage() {
        const container = document.getElementById('business-grid');
        if (container && websiteData.businessPlans) {
            container.innerHTML = websiteData.businessPlans.map(plan => `
                <div class="card">
                    <div class="card-content">
                        <div style="display: inline-block; padding: 5px 15px; background: rgba(0, 212, 255, 0.1); border-radius: 20px; color: var(--primary-color); font-size: 0.85rem; margin-bottom: 15px;">
                            ${plan.status}
                        </div>
                        <h3 class="card-title">${plan.title}</h3>
                        <p class="card-description">${plan.description}</p>
                        <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid rgba(255, 255, 255, 0.05);">
                            <p style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 5px;">
                                <strong>Target:</strong> ${plan.targetMarket}
                            </p>
                            <p style="color: var(--text-secondary); font-size: 0.9rem;">
                                <strong>Goal:</strong> ${plan.goal}
                            </p>
                        </div>
                    </div>
                </div>
            `).join('');
        }
    }

    initContactForm() {
        const form = document.getElementById('contact-form');
        if (form) {
            form.addEventListener('submit', (e) => {
                // Netlify will handle the form submission
                // You can add custom validation or success messages here
                console.log('Form submitted');
            });
        }
    }
}

// Initialize router when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.router = new Router();
});
