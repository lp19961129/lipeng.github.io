// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 移动菜单切换
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        // 切换图标
        const icon = menuToggle.querySelector('i');
        if (icon.classList.contains('fa-bars')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // 导航栏滚动效果
    const navbar = document.getElementById('navbar');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // 导航栏滚动变化
        if (scrollTop > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // 隐藏/显示返回顶部按钮
        const backToTop = document.getElementById('back-to-top');
        if (scrollTop > 300) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
        
        lastScrollTop = scrollTop;
    });

    // 返回顶部功能
    const backToTop = document.getElementById('back-to-top');
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // 平滑滚动到锚点
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 关闭移动菜单（如果打开）
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // 更新活动链接
                updateActiveLink(targetId);
            }
        });
    });

    // 更新活动链接
    function updateActiveLink(targetId) {
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === targetId) {
                link.classList.add('active');
            }
        });
    }

    // 滚动动画效果
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('[data-aos]');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.classList.add('aos-animate');
            }
        });
    };

    // 初始调用一次
    animateOnScroll();
    
    // 滚动时触发动画
    window.addEventListener('scroll', animateOnScroll);

    // 表单提交处理
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 模拟表单提交
            const submitButton = this.querySelector('button[type="submit"]');
            const originalText = submitButton.innerHTML;
            
            submitButton.disabled = true;
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 发送中...';
            
            // 模拟API请求延迟
            setTimeout(() => {
                submitButton.innerHTML = '<i class="fas fa-check"></i> 发送成功';
                
                // 重置表单
                this.reset();
                
                // 恢复按钮状态
                setTimeout(() => {
                    submitButton.disabled = false;
                    submitButton.innerHTML = originalText;
                }, 2000);
            }, 1500);
        });
    }

    // 为博客文章添加悬停效果增强
    const blogPosts = document.querySelectorAll('.blog-post');
    blogPosts.forEach(post => {
        post.addEventListener('mouseenter', function() {
            const title = this.querySelector('.post-title');
            title.style.transition = 'color 0.3s ease';
            title.style.color = 'var(--primary-color)';
        });
        
        post.addEventListener('mouseleave', function() {
            const title = this.querySelector('.post-title');
            title.style.color = '';
        });
    });

    // 添加页面加载动画
    const fadeInElements = () => {
        const elements = document.querySelectorAll('.hero-content, .about-content, .blog-grid, .contact-content');
        elements.forEach((element, index) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = `opacity 0.6s ease, transform 0.6s ease`;
            
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, 100 * (index + 1));
        });
    };
    
    // 执行页面加载动画
    fadeInElements();

    // 实现图片懒加载
    const lazyLoadImages = () => {
        const images = document.querySelectorAll('img');
        
        images.forEach(img => {
            // 为所有图片添加淡入效果
            img.style.opacity = '0';
            img.style.transition = 'opacity 0.5s ease';
            
            // 加载完成后显示
            img.onload = function() {
                this.style.opacity = '1';
            };
            
            // 确保已经加载的图片也显示
            if (img.complete) {
                img.style.opacity = '1';
            }
        });
    };
    
    // 执行图片懒加载
    lazyLoadImages();

    // 为社交链接添加弹跳效果
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            this.style.transform = 'scale(0.9)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 100);
        });
    });

    // 实现加载更多博客文章功能
    const loadMoreBtn = document.querySelector('.load-more .btn');
    if (loadMoreBtn) {
        // 模拟更多博客文章数据
        const morePosts = [
            {
                id: 4,
                title: "前端性能优化实战指南",
                excerpt: "性能优化是前端开发中的重要一环，本文将分享一些实用的性能优化技巧，帮助你构建更快、更流畅的Web应用...",
                date: "2023-03-25",
                category: "性能优化",
                image: "images/blog1.svg",
                url: "blog/performance-optimization-guide.html"
            },
            {
                id: 5,
                title: "TypeScript高级类型系统详解",
                excerpt: "TypeScript的类型系统非常强大，掌握其高级特性可以让你的代码更加健壮。本文深入探讨TypeScript的泛型、联合类型等高级概念...",
                date: "2023-02-18",
                category: "TypeScript",
                image: "images/blog2.svg",
                url: "blog/typescript-advanced-types.html"
            },
            {
                id: 6,
                title: "响应式设计原则与实践",
                excerpt: "响应式设计已经成为现代Web开发的标准。本文将介绍响应式设计的核心原则，并通过实际案例展示如何构建适配各种设备的界面...",
                date: "2023-01-30",
                category: "UI/UX",
                image: "images/blog3.svg",
                url: "blog/responsive-design-guide.html"
            }
        ];
        
        let postsLoaded = 0;
        const blogGrid = document.querySelector('.blog-grid');
        const loadMoreContainer = document.querySelector('.load-more');
        
        loadMoreBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 显示加载状态
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 加载中...';
            this.disabled = true;
            
            // 模拟网络请求延迟
            setTimeout(() => {
                // 创建并添加新文章
                morePosts.slice(postsLoaded, postsLoaded + 3).forEach((post, index) => {
                    const postElement = document.createElement('article');
                    postElement.className = 'blog-post';
                    postElement.setAttribute('data-aos', 'fade-up');
                    postElement.setAttribute('data-aos-delay', (index * 100).toString());
                    
                    postElement.innerHTML = `
                        <div class="post-image">
                            <img src="${post.image}" alt="博客封面">
                        </div>
                        <div class="post-content">
                            <div class="post-meta">
                                <span class="post-date">${post.date}</span>
                                <span class="post-category">${post.category}</span>
                            </div>
                            <h3 class="post-title"><a href="${post.url}">${post.title}</a></h3>
                            <p class="post-excerpt">${post.excerpt}</p>
                            <a href="${post.url}" class="read-more">阅读更多 <i class="fas fa-arrow-right"></i></a>
                        </div>
                    `;
                    
                    blogGrid.appendChild(postElement);
                    
                    // 为新添加的文章添加悬停效果
                    postElement.addEventListener('mouseenter', function() {
                        const title = this.querySelector('.post-title');
                        title.style.transition = 'color 0.3s ease';
                        title.style.color = 'var(--primary-color)';
                    });
                    
                    postElement.addEventListener('mouseleave', function() {
                        const title = this.querySelector('.post-title');
                        title.style.color = '';
                    });
                    
                    // 为新添加的文章添加淡入效果
                    postElement.style.opacity = '0';
                    postElement.style.transform = 'translateY(20px)';
                    postElement.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                    
                    setTimeout(() => {
                        postElement.style.opacity = '1';
                        postElement.style.transform = 'translateY(0)';
                        // 触发AOS动画
                        animateOnScroll();
                    }, 100 * (index + 1));
                });
                
                postsLoaded += 3;
                
                // 检查是否还有更多文章
                if (postsLoaded >= morePosts.length) {
                    loadMoreContainer.innerHTML = '<p class="no-more-posts">没有更多文章了</p>';
                } else {
                    // 恢复按钮状态
                    this.innerHTML = '加载更多';
                    this.disabled = false;
                }
            }, 1000);
        });
    }
});

// 监听窗口大小变化，调整响应式布局
window.addEventListener('resize', function() {
    const navLinks = document.querySelector('.nav-links');
    const menuToggle = document.getElementById('menu-toggle');
    
    // 如果窗口宽度大于768px，确保菜单是收起的
    if (window.innerWidth > 768 && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        const icon = menuToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});