/**
 * Aether Nexus - Core Interactive Script
 * Author: Antigravity AI
 */

document.addEventListener('DOMContentLoaded', () => {
    // ==========================================================================
    // 1. STATE & UTILITIES
    // ==========================================================================
    const state = {
        theme: localStorage.getItem('aether-theme') || 'dark-theme',
        customizer: {
            selectedComponents: new Set(['ai-engine', 'realtime-sync']),
            traffic: 250000,
            support: false
        },
        nodes: {
            '1': { name: 'US-East', ping: '12ms', traffic: '4.2 TB/s', status: 'Optimal' },
            '2': { name: 'EU-Central', ping: '24ms', traffic: '2.8 TB/s', status: 'Stable' },
            '3': { name: 'AP-South', ping: '41ms', traffic: '1.9 TB/s', status: 'Active' },
            '4': { name: 'SA-East', ping: '53ms', traffic: '0.8 TB/s', status: 'Synchronizing' }
        },
        cards: {
            '1': {
                title: 'Cognitive Synapse',
                category: 'AI Core',
                desc: 'An advanced AI reasoning engine capable of interpreting human-machine telemetry vectors. It deploys sub-networks dynamically to handle spike demands, caching predictive states locally at edge nodes.',
                spec1: '99.98%',
                spec2: 'High',
                spec3: 'v4.2-α'
            },
            '2': {
                title: 'Nimbus Cluster',
                category: 'Cloud Compute',
                desc: 'Decentralized cloud containers designed to instantiate instantly on request routing. Built with serverless structures that execute lightweight binary targets, eliminating the standard cold boot delay.',
                spec1: '99.99%',
                spec2: 'Variable',
                spec3: 'v8.1-stable'
            },
            '3': {
                title: 'Prism Interface',
                category: 'Interface UI',
                desc: 'A premium layout module designed for responsive, liquid rendering. Compiles directly into high-efficiency client-side engines that guarantee 120 FPS operations, even on aging mobile architectures.',
                spec1: '100.00%',
                spec2: 'Low',
                spec3: 'v2.0.4'
            },
            '4': {
                title: 'Sentinel Vault',
                category: 'Cloud Ledger',
                desc: 'Cryptographically secured auditing layer that logs every transaction. Uses zero-knowledge proofs to verify identities and database edits without exposing raw client information to transit networks.',
                spec1: '99.99%',
                spec2: 'Medium',
                spec3: 'v1.6-secure'
            }
        }
    };

    // Initialize Page Theme on load
    document.body.className = state.theme;

    // ==========================================================================
    // 2. THEME TOGGLER
    // ==========================================================================
    const themeToggleBtn = document.getElementById('theme-toggle');
    
    themeToggleBtn.addEventListener('click', () => {
        if (document.body.classList.contains('dark-theme')) {
            document.body.classList.replace('dark-theme', 'light-theme');
            state.theme = 'light-theme';
        } else {
            document.body.classList.replace('light-theme', 'dark-theme');
            state.theme = 'dark-theme';
        }
        localStorage.setItem('aether-theme', state.theme);
        createGlowEffect();
    });

    // ==========================================================================
    // 3. NAVIGATION & MOBILE DRAWER
    // ==========================================================================
    const navbar = document.getElementById('navbar');
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Sticky Navbar shadow & blur on Scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 10px 30px var(--shadow-color)';
            navbar.style.padding = '5px 0';
        } else {
            navbar.style.boxShadow = 'none';
            navbar.style.padding = '0';
        }
    });

    // Toggle Mobile Drawer Menu
    mobileToggle.addEventListener('click', () => {
        mobileToggle.classList.toggle('open');
        navMenu.classList.toggle('open');
    });

    // Close mobile menu when a nav link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileToggle.classList.remove('open');
            navMenu.classList.remove('open');
        });
    });

    // Active Navigation Highlighting on Scroll (ScrollSpy)
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', () => {
        let current = '';
        const scrollPosition = window.scrollY + 120; // offset navbar height

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // ==========================================================================
    // 4. HERO SECTION INTERACTIVE TILT EFFECT
    // ==========================================================================
    const heroCard = document.getElementById('hero-visual-card');
    
    if (heroCard) {
        heroCard.addEventListener('mousemove', (e) => {
            const rect = heroCard.getBoundingClientRect();
            const x = e.clientX - rect.left; // x position within element
            const y = e.clientY - rect.top;  // y position within element
            
            // Calculate tilt angles (-10 to 10 degrees)
            const rotateY = ((x / rect.width) - 0.5) * 20; 
            const rotateX = -((y / rect.height) - 0.5) * 20;
            
            heroCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });
        
        heroCard.addEventListener('mouseleave', () => {
            heroCard.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
    }

    // ==========================================================================
    // 5. CORE PILLARS TAB SYSTEM & LIVE INTERACTION WIDGETS
    // ==========================================================================
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active classes
            tabBtns.forEach(b => {
                b.classList.remove('active');
                b.setAttribute('aria-selected', 'false');
            });
            tabPanes.forEach(pane => pane.classList.remove('active'));

            // Add active class to selected tab button
            btn.classList.add('active');
            btn.setAttribute('aria-selected', 'true');

            // Show matching content pane
            const targetTab = btn.getAttribute('data-tab');
            const targetPane = document.getElementById(targetTab);
            targetPane.classList.add('active');
        });
    });

    // --- Tab 1 (Immersive UI) Interactive Scale Slider ---
    const demoSlider = document.getElementById('demo-slider');
    const demoObject = document.getElementById('demo-interactive-object');
    const sliderValBadge = document.getElementById('slider-val');

    if (demoSlider && demoObject && sliderValBadge) {
        demoSlider.addEventListener('input', (e) => {
            const scale = e.target.value;
            sliderValBadge.textContent = `${scale}x`;
            
            // Perform DOM manipulation - transform style properties
            demoObject.style.transform = `scale(${scale})`;
            demoObject.style.borderRadius = `${(1.5 - scale) * 24}px`;
            demoObject.style.opacity = `${0.3 + (scale * 0.5)}`;
        });
    }

    // --- Tab 2 (Cognitive AI) Terminal Telemetry Simulator ---
    const runTelemetryBtn = document.getElementById('run-telemetry');
    const consoleLogs = document.getElementById('console-logs');
    let isSimulatingLogs = false;

    if (runTelemetryBtn && consoleLogs) {
        const queryLogs = [
            '[SYS] Establishing pipeline handshake...',
            '[SYS] Handshake acknowledged. Stream active.',
            '[DATA] Parsing client telemetry package (x86_64)',
            '[AI] Running predictive neural pass (depth: 24 layers)...',
            '[AI] Match probability: 98.41%',
            '[SYS] Pre-rendering target viewport cache matrix',
            '[SUCCESS] Task completed in 12.8ms. System status: Optimal.'
        ];

        runTelemetryBtn.addEventListener('click', () => {
            if (isSimulatingLogs) return;
            isSimulatingLogs = true;
            runTelemetryBtn.disabled = true;
            runTelemetryBtn.textContent = 'Processing...';

            consoleLogs.innerHTML = '';
            let lineIndex = 0;

            const printLine = () => {
                if (lineIndex < queryLogs.length) {
                    const log = queryLogs[lineIndex];
                    let lineClass = 'console-line';
                    if (log.startsWith('[SYS]')) lineClass += ' system';
                    if (log.startsWith('[SUCCESS]')) lineClass += ' success';
                    if (log.startsWith('[AI]') || log.startsWith('[DATA]')) lineClass += ' action';

                    const p = document.createElement('p');
                    p.className = lineClass;
                    p.textContent = log;
                    consoleLogs.appendChild(p);

                    // Auto-scroll terminal console
                    consoleLogs.scrollTop = consoleLogs.scrollHeight;

                    lineIndex++;
                    setTimeout(printLine, 600);
                } else {
                    isSimulatingLogs = false;
                    runTelemetryBtn.disabled = false;
                    runTelemetryBtn.textContent = 'Execute Query';
                }
            };

            printLine();
        });
    }

    // --- Tab 3 (Cloud Core) Node Switcher ---
    const nodeElements = document.querySelectorAll('.nodes-grid .node');
    const nodeInfoText = document.getElementById('node-info-text');

    nodeElements.forEach(nodeEl => {
        nodeEl.addEventListener('click', () => {
            // Remove active status
            nodeElements.forEach(el => el.classList.remove('active'));
            
            // Set active
            nodeEl.classList.add('active');
            
            // Retrieve node metadata and update details dynamically
            const nodeId = nodeEl.getAttribute('data-node');
            const data = state.nodes[nodeId];

            if (data && nodeInfoText) {
                nodeInfoText.innerHTML = `
                    <strong>Node:</strong> ${data.name} &nbsp;|&nbsp; 
                    <strong>Latency:</strong> <span class="text-cyan">${data.ping}</span><br>
                    <strong>Throughput:</strong> <span class="text-magenta">${data.traffic}</span> &nbsp;|&nbsp; 
                    <strong>Status:</strong> ${data.status}
                `;
            }
        });
    });

    // ==========================================================================
    // 6. TECHNICAL DETAILS ACCORDION (SHOW/HIDE TOGGLE)
    // ==========================================================================
    const toggleSpecsBtn = document.getElementById('toggle-specs-btn');
    const specsTableContent = document.getElementById('specs-table-content');

    if (toggleSpecsBtn && specsTableContent) {
        toggleSpecsBtn.addEventListener('click', () => {
            const isOpen = specsTableContent.classList.contains('open');
            
            if (isOpen) {
                specsTableContent.classList.remove('open');
                toggleSpecsBtn.querySelector('span').textContent = 'Show Detailed System Specs';
                toggleSpecsBtn.querySelector('i').className = 'fa-solid fa-chevron-down';
            } else {
                specsTableContent.classList.add('open');
                toggleSpecsBtn.querySelector('span').textContent = 'Hide Detailed System Specs';
                toggleSpecsBtn.querySelector('i').className = 'fa-solid fa-chevron-up';
                
                // Smooth scroll down to view table nicely on mobile
                setTimeout(() => {
                    specsTableContent.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }, 300);
            }
        });
    }

    // ==========================================================================
    // 7. GALLERY FILTER SYSTEM
    // ==========================================================================
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryCards = document.querySelectorAll('.gallery-card');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active class on filter buttons
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            galleryCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                
                // Add fade out effect
                card.style.opacity = '0';
                card.style.transform = 'scale(0.8) translateY(10px)';

                setTimeout(() => {
                    if (filterValue === 'all' || cardCategory === filterValue) {
                        card.style.display = 'flex';
                        // Trigger reflow to restart animation
                        void card.offsetWidth; 
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1) translateY(0)';
                    } else {
                        card.style.display = 'none';
                    }
                }, 300);
            });
        });
    });

    // ==========================================================================
    // 8. CARD DETAILED SPECS MODAL & DIAGNOSTIC SIMULATION
    // ==========================================================================
    const modal = document.getElementById('card-modal');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const cardActionButtons = document.querySelectorAll('.btn-card-action');
    
    // Modal nodes to populate
    const modalBadge = document.getElementById('modal-badge');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const modalSpec1 = document.getElementById('modal-spec-1');
    const modalSpec2 = document.getElementById('modal-spec-2');
    const modalSpec3 = document.getElementById('modal-spec-3');
    
    // Diagnostic elements inside Modal
    const runTestBtn = document.getElementById('modal-run-test-btn');
    const testResultsContainer = document.getElementById('modal-test-results');

    // Open Modal and populate data
    cardActionButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const cardId = btn.getAttribute('data-card-id');
            const data = state.cards[cardId];

            if (data) {
                // Populate contents dynamically
                modalTitle.textContent = data.title;
                modalBadge.textContent = data.category;
                modalDesc.textContent = data.desc;
                modalSpec1.textContent = data.spec1;
                modalSpec2.textContent = data.spec2;
                modalSpec3.textContent = data.spec3;

                // Reset diagnostic section
                testResultsContainer.innerHTML = '';
                testResultsContainer.classList.remove('active');
                runTestBtn.disabled = false;
                runTestBtn.textContent = 'Execute Diagnostic Test';

                // Assign matching badge styles
                modalBadge.className = 'badge';
                if (data.category.includes('AI')) modalBadge.style.color = 'var(--accent-magenta)';
                else if (data.category.includes('Compute')) modalBadge.style.color = 'var(--accent-cyan)';
                else if (data.category.includes('Interface')) modalBadge.style.color = 'var(--accent-purple)';
                else modalBadge.style.color = '#10b981';

                // Display Modal
                modal.classList.add('open');
                modal.setAttribute('aria-hidden', 'false');
                document.body.style.overflow = 'hidden'; // Lock background scrolling
            }
        });
    });

    // Close Modal
    const closeModal = () => {
        modal.classList.remove('open');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = ''; // Restore scroll
    };

    modalCloseBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    // Close Modal on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('open')) {
            closeModal();
        }
    });

    // Simulated Diagnostic Test Inside Modal
    if (runTestBtn && testResultsContainer) {
        let isTesting = false;

        runTestBtn.addEventListener('click', () => {
            if (isTesting) return;
            isTesting = true;
            runTestBtn.disabled = true;
            runTestBtn.textContent = 'Running Telemetry Check...';
            testResultsContainer.classList.add('active');

            const moduleName = modalTitle.textContent.toUpperCase();
            const diagnosticLines = [
                `[INIT] Testing connectivity matrix for [${moduleName}]...`,
                `[PING] Edge Node Response: 12ms (Target: <20ms) - Passed`,
                `[AUTH] Authenticating cryptographic handshake token... Approved.`,
                `[LOAD] Node load telemetry: 34.2% capacity.`,
                `[DONE] ${moduleName} systems check: 100% operational.`
            ];

            testResultsContainer.innerHTML = '';
            let lineIndex = 0;

            const printDiagnosticLine = () => {
                if (lineIndex < diagnosticLines.length) {
                    const lineText = diagnosticLines[lineIndex];
                    const p = document.createElement('div');
                    p.className = lineText.includes('[DONE]') ? 'test-line done' : 'test-line load';
                    p.textContent = lineText;
                    testResultsContainer.appendChild(p);

                    // Auto scroll
                    testResultsContainer.scrollTop = testResultsContainer.scrollHeight;
                    lineIndex++;
                    setTimeout(printDiagnosticLine, 500);
                } else {
                    isTesting = false;
                    runTestBtn.textContent = 'Diagnostic Complete';
                }
            };

            printDiagnosticLine();
        });
    }

    // ==========================================================================
    // 9. ECOSYSTEM TECH CUSTOMIZER (LIVE PRICING / BLUEPRINT CALCULATOR)
    // ==========================================================================
    const toggleCards = document.querySelectorAll('.toggle-card');
    const trafficSlider = document.getElementById('traffic-slider');
    const trafficDisplay = document.getElementById('traffic-display');
    const supportCheckbox = document.getElementById('support-checkbox');
    
    // Result displays
    const totalPriceEl = document.getElementById('total-price');
    const totalLatencyEl = document.getElementById('total-latency');
    const totalThroughputEl = document.getElementById('total-throughput');
    
    // Progress Bars
    const priceBar = document.querySelector('.price-bar');
    const latencyBar = document.querySelector('.latency-bar');
    const throughputBar = document.querySelector('.throughput-bar');
    
    // Manifest list
    const manifestList = document.getElementById('manifest-list');
    const deployBlueprintBtn = document.getElementById('deploy-blueprint-btn');

    // Click handler for ecosystem option cards
    toggleCards.forEach(card => {
        card.addEventListener('click', () => {
            const componentId = card.getAttribute('data-component');
            
            if (state.customizer.selectedComponents.has(componentId)) {
                // If it is the only one selected, prevent removing all of them to look better
                if (state.customizer.selectedComponents.size > 1) {
                    state.customizer.selectedComponents.delete(componentId);
                    card.classList.remove('active');
                }
            } else {
                state.customizer.selectedComponents.add(componentId);
                card.classList.add('active');
            }

            calculateEcosystemMetrics();
        });
    });

    // Slider input change handler
    if (trafficSlider) {
        trafficSlider.addEventListener('input', (e) => {
            const rawVal = parseInt(e.target.value);
            state.customizer.traffic = rawVal;
            
            // Format number cleanly (e.g., 250,000)
            if (trafficDisplay) {
                trafficDisplay.textContent = rawVal.toLocaleString();
            }

            calculateEcosystemMetrics();
        });
    }

    // Switch checkbox change handler
    if (supportCheckbox) {
        supportCheckbox.addEventListener('change', (e) => {
            state.customizer.support = e.target.checked;
            calculateEcosystemMetrics();
        });
    }

    // Function to calculate and update UI metrics
    function calculateEcosystemMetrics() {
        // --- BASE VALUES ---
        let price = 20; // base license
        let latency = 30; // base latency in ms
        let throughput = 50; // base capacity in k reqs/s

        // Clean out manifest list
        manifestList.innerHTML = `<li><i class="fa-solid fa-square-check text-cyan"></i> Core Cluster License</li>`;

        // --- COMPONENT FACTORS ---
        toggleCards.forEach(card => {
            const componentId = card.getAttribute('data-component');
            const isActive = state.customizer.selectedComponents.has(componentId);
            
            if (isActive) {
                const cost = parseInt(card.getAttribute('data-cost'));
                const speedEffect = parseInt(card.getAttribute('data-speed'));
                const tpEffect = parseInt(card.getAttribute('data-throughput'));
                const compName = card.querySelector('.toggle-header span').textContent;

                price += cost;
                latency += speedEffect;
                throughput += tpEffect;

                // Add to visible manifest list
                const li = document.createElement('li');
                li.innerHTML = `<i class="fa-solid fa-square-check text-cyan"></i> ${compName} Enabled`;
                manifestList.appendChild(li);
            }
        });

        // --- TRAFFIC FACTOR ---
        const trafficFactor = state.customizer.traffic / 100000;
        price += Math.round(trafficFactor * 10);
        latency += Math.round(trafficFactor * 0.8);
        throughput = Math.round(throughput + (trafficFactor * 25));

        // --- SUPPORT FACTOR ---
        if (state.customizer.support) {
            price += 99;
            latency = Math.max(2, latency - 2); // slight edge routing boost

            // Add support to manifest list
            const li = document.createElement('li');
            li.innerHTML = `<i class="fa-solid fa-square-check text-magenta"></i> Platinum SLA Route`;
            manifestList.appendChild(li);
        }

        // --- DOM MANIPULATION & UI RENDERING ---
        // Animate price display
        totalPriceEl.textContent = price;
        totalLatencyEl.textContent = latency;
        totalThroughputEl.textContent = throughput;

        // Update progress bars widths
        // Max values for visual references
        const maxPrice = 300;
        const maxLatency = 60;
        const maxThroughput = 1200;

        const pricePercentage = Math.min(100, (price / maxPrice) * 100);
        const latencyPercentage = Math.min(100, (latency / maxLatency) * 100);
        const throughputPercentage = Math.min(100, (throughput / maxThroughput) * 100);

        priceBar.style.width = `${pricePercentage}%`;
        latencyBar.style.width = `${latencyPercentage}%`;
        throughputBar.style.width = `${throughputPercentage}%`;
    }

    // Deploy built system triggers simulation alert
    if (deployBlueprintBtn) {
        deployBlueprintBtn.addEventListener('click', () => {
            deployBlueprintBtn.disabled = true;
            deployBlueprintBtn.innerHTML = 'Connecting Cluster <i class="fa-solid fa-spin fa-circle-notch"></i>';

            setTimeout(() => {
                // Show floating telemetry success
                alert(`SUCCESS: Blueprint deployment initiated!\n- Active Nodes: US-East, EU-Central\n- Target Throughput: ${totalThroughputEl.textContent}K reqs/s\n- Budget Authorization: $${totalPriceEl.textContent}/mo\n- Remote cluster synchronization started.`);
                
                deployBlueprintBtn.disabled = false;
                deployBlueprintBtn.innerHTML = 'Deploy Built Ecosystem <i class="fa-solid fa-circle-nodes"></i>';
            }, 1200);
        });
    }

    // Initialize customizer metrics on script load
    calculateEcosystemMetrics();

    // ==========================================================================
    // 10. NEWSLETTER FORM CLIENT VALIDATION & DYNAMIC FEEDBACK
    // ==========================================================================
    const newsletterForm = document.getElementById('newsletter-form');
    const subNameInput = document.getElementById('subscriber-name');
    const subEmailInput = document.getElementById('subscriber-email');
    const formAlert = document.getElementById('form-alert');
    const closeAlertBtn = document.getElementById('close-alert-btn');
    const btnSubmit = document.getElementById('btn-submit');

    // Email address formatting regex validator
    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(String(email).toLowerCase());
    }

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent default page refresh
            
            let isNameValid = false;
            let isEmailValid = false;

            // Validate Operator Name
            const nameVal = subNameInput.value.trim();
            const nameGroup = subNameInput.closest('.form-group');
            if (nameVal.length >= 2) {
                nameGroup.classList.remove('invalid');
                isNameValid = true;
            } else {
                nameGroup.classList.add('invalid');
                isNameValid = false;
            }

            // Validate Email address format
            const emailVal = subEmailInput.value.trim();
            const emailGroup = subEmailInput.closest('.form-group');
            if (validateEmail(emailVal)) {
                emailGroup.classList.remove('invalid');
                isEmailValid = true;
            } else {
                emailGroup.classList.add('invalid');
                isEmailValid = false;
            }

            // If form is valid, trigger successful interactive submit
            if (isNameValid && isEmailValid) {
                btnSubmit.disabled = true;
                btnSubmit.innerHTML = 'Establishing Routing Link <i class="fa-solid fa-spin fa-circle-notch"></i>';

                setTimeout(() => {
                    // Update alert messages dynamically
                    const alertTitle = document.getElementById('alert-title');
                    const alertBody = document.getElementById('alert-body');
                    
                    if (alertTitle && alertBody) {
                        alertTitle.textContent = 'Link Established!';
                        alertBody.innerHTML = `Welcome operator <strong>${nameVal}</strong>. Core terminal alerts routed to <em>${emailVal}</em>.`;
                    }

                    // Hide form container elements and open success message
                    newsletterForm.classList.add('hidden');
                    formAlert.classList.add('open');
                    
                    // Reset input elements
                    subNameInput.value = '';
                    subEmailInput.value = '';
                    btnSubmit.disabled = false;
                    btnSubmit.innerHTML = 'Establish Link <i class="fa-solid fa-link"></i>';
                }, 1500);
            }
        });

        // Close Alert success banner and show form back
        if (closeAlertBtn) {
            closeAlertBtn.addEventListener('click', () => {
                formAlert.classList.remove('open');
                newsletterForm.classList.remove('hidden');
            });
        }
    }

    // ==========================================================================
    // 11. SCROLL-TO-TOP BUTTON
    // ==========================================================================
    const scrollTopBtn = document.getElementById('scroll-to-top-btn');

    if (scrollTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        });

        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ==========================================================================
    // 12. DYNAMIC DECORATIVE BACKGROUND PARTICLES
    // ==========================================================================
    function createGlowEffect() {
        const existingGlow = document.querySelector('.hero-bg-glow');
        if (existingGlow) {
            const hue = state.theme === 'dark-theme' ? 260 : 270; // shift purples slightly
            existingGlow.style.background = `radial-gradient(circle, rgba(139, 92, 246, ${state.theme === 'dark-theme' ? 0.15 : 0.08}) 0%, rgba(0,0,0,0) 70%)`;
        }
    }
    
    createGlowEffect();
});
