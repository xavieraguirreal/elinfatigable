// ========================================
// elINFATIGABLE - Theme Switcher
// Selector flotante para que el cliente elija combinación
// Una vez elegida, se quita este archivo y se deja el tema fijo
// ========================================

const themes = [
    {
        name: 'Oscuro Naranja',
        id: 'dark-orange',
        mode: 'dark',
        colors: {
            primary: '#FF6B35',
            primaryDark: '#E85A24',
            primaryLight: '#FF8F5E',
            dark: '#0D0D0D',
            dark2: '#1A1A1A',
            dark3: '#2A2A2A',
            gray: '#888888',
            grayLight: '#B0B0B0',
            white: '#FFFFFF',
            offWhite: '#F5F5F0',
            bodyBg: '#0D0D0D',
            bodyColor: '#FFFFFF',
            cardBg: '#1A1A1A',
            cardBorder: 'rgba(255,255,255,0.05)',
            inputBg: '#1A1A1A',
            inputBorder: 'rgba(255,255,255,0.1)',
            navScrolledBg: 'rgba(13,13,13,0.95)',
            heroGradient: 'linear-gradient(135deg, #0D0D0D 0%, #1a0a00 50%, #0D0D0D 100%)',
            sectionAlt: '#1A1A1A',
            footerBg: '#0D0D0D',
        },
        swatch: ['#0D0D0D', '#FF6B35']
    },
    {
        name: 'Oscuro Dorado',
        id: 'dark-gold',
        mode: 'dark',
        colors: {
            primary: '#D4A542',
            primaryDark: '#B8892E',
            primaryLight: '#E8C46A',
            dark: '#0D0D0D',
            dark2: '#1A1A1A',
            dark3: '#2A2A2A',
            gray: '#888888',
            grayLight: '#B0B0B0',
            white: '#FFFFFF',
            offWhite: '#F5F5F0',
            bodyBg: '#0D0D0D',
            bodyColor: '#FFFFFF',
            cardBg: '#1A1A1A',
            cardBorder: 'rgba(255,255,255,0.05)',
            inputBg: '#1A1A1A',
            inputBorder: 'rgba(255,255,255,0.1)',
            navScrolledBg: 'rgba(13,13,13,0.95)',
            heroGradient: 'linear-gradient(135deg, #0D0D0D 0%, #1a1200 50%, #0D0D0D 100%)',
            sectionAlt: '#1A1A1A',
            footerBg: '#0D0D0D',
        },
        swatch: ['#0D0D0D', '#D4A542']
    },
    {
        name: 'Oscuro Azul',
        id: 'dark-blue',
        mode: 'dark',
        colors: {
            primary: '#3B82F6',
            primaryDark: '#2563EB',
            primaryLight: '#60A5FA',
            dark: '#0A0E1A',
            dark2: '#141B2D',
            dark3: '#1E293B',
            gray: '#64748B',
            grayLight: '#94A3B8',
            white: '#FFFFFF',
            offWhite: '#F1F5F9',
            bodyBg: '#0A0E1A',
            bodyColor: '#FFFFFF',
            cardBg: '#141B2D',
            cardBorder: 'rgba(255,255,255,0.05)',
            inputBg: '#141B2D',
            inputBorder: 'rgba(255,255,255,0.1)',
            navScrolledBg: 'rgba(10,14,26,0.95)',
            heroGradient: 'linear-gradient(135deg, #0A0E1A 0%, #0a1628 50%, #0A0E1A 100%)',
            sectionAlt: '#141B2D',
            footerBg: '#0A0E1A',
        },
        swatch: ['#0A0E1A', '#3B82F6']
    },
    {
        name: 'Oscuro Esmeralda',
        id: 'dark-emerald',
        mode: 'dark',
        colors: {
            primary: '#10B981',
            primaryDark: '#059669',
            primaryLight: '#34D399',
            dark: '#0A1A14',
            dark2: '#0F2519',
            dark3: '#1A3328',
            gray: '#6B8F7B',
            grayLight: '#9AB5A5',
            white: '#FFFFFF',
            offWhite: '#F0FDF4',
            bodyBg: '#0A1A14',
            bodyColor: '#FFFFFF',
            cardBg: '#0F2519',
            cardBorder: 'rgba(255,255,255,0.05)',
            inputBg: '#0F2519',
            inputBorder: 'rgba(255,255,255,0.1)',
            navScrolledBg: 'rgba(10,26,20,0.95)',
            heroGradient: 'linear-gradient(135deg, #0A1A14 0%, #061a0e 50%, #0A1A14 100%)',
            sectionAlt: '#0F2519',
            footerBg: '#0A1A14',
        },
        swatch: ['#0A1A14', '#10B981']
    },
    {
        name: 'Oscuro Rojo',
        id: 'dark-red',
        mode: 'dark',
        colors: {
            primary: '#EF4444',
            primaryDark: '#DC2626',
            primaryLight: '#F87171',
            dark: '#1A0A0A',
            dark2: '#2D1414',
            dark3: '#3B1E1E',
            gray: '#8B6B6B',
            grayLight: '#B09090',
            white: '#FFFFFF',
            offWhite: '#FEF2F2',
            bodyBg: '#1A0A0A',
            bodyColor: '#FFFFFF',
            cardBg: '#2D1414',
            cardBorder: 'rgba(255,255,255,0.05)',
            inputBg: '#2D1414',
            inputBorder: 'rgba(255,255,255,0.1)',
            navScrolledBg: 'rgba(26,10,10,0.95)',
            heroGradient: 'linear-gradient(135deg, #1A0A0A 0%, #2a0505 50%, #1A0A0A 100%)',
            sectionAlt: '#2D1414',
            footerBg: '#1A0A0A',
        },
        swatch: ['#1A0A0A', '#EF4444']
    },
    {
        name: 'Claro Naranja',
        id: 'light-orange',
        mode: 'light',
        colors: {
            primary: '#E8581C',
            primaryDark: '#D44A10',
            primaryLight: '#FF7A45',
            dark: '#FFFFFF',
            dark2: '#F7F7F5',
            dark3: '#ECECEA',
            gray: '#888888',
            grayLight: '#666666',
            white: '#1A1A1A',
            offWhite: '#111111',
            bodyBg: '#FFFFFF',
            bodyColor: '#1A1A1A',
            cardBg: '#F7F7F5',
            cardBorder: 'rgba(0,0,0,0.08)',
            inputBg: '#F7F7F5',
            inputBorder: 'rgba(0,0,0,0.15)',
            navScrolledBg: 'rgba(255,255,255,0.95)',
            heroGradient: 'linear-gradient(135deg, #FFF8F5 0%, #FFF0E8 50%, #FFF8F5 100%)',
            sectionAlt: '#F7F7F5',
            footerBg: '#1A1A1A',
        },
        swatch: ['#FFFFFF', '#E8581C']
    },
    {
        name: 'Claro Azul',
        id: 'light-blue',
        mode: 'light',
        colors: {
            primary: '#2563EB',
            primaryDark: '#1D4ED8',
            primaryLight: '#3B82F6',
            dark: '#FFFFFF',
            dark2: '#F0F4FF',
            dark3: '#E0E8F5',
            gray: '#6B7280',
            grayLight: '#4B5563',
            white: '#111827',
            offWhite: '#0F172A',
            bodyBg: '#FFFFFF',
            bodyColor: '#111827',
            cardBg: '#F0F4FF',
            cardBorder: 'rgba(0,0,0,0.08)',
            inputBg: '#F0F4FF',
            inputBorder: 'rgba(0,0,0,0.15)',
            navScrolledBg: 'rgba(255,255,255,0.95)',
            heroGradient: 'linear-gradient(135deg, #F0F4FF 0%, #E0ECFF 50%, #F0F4FF 100%)',
            sectionAlt: '#F0F4FF',
            footerBg: '#111827',
        },
        swatch: ['#FFFFFF', '#2563EB']
    },
    {
        name: 'Claro Esmeralda',
        id: 'light-emerald',
        mode: 'light',
        colors: {
            primary: '#059669',
            primaryDark: '#047857',
            primaryLight: '#10B981',
            dark: '#FFFFFF',
            dark2: '#F0FDF4',
            dark3: '#DCFCE7',
            gray: '#6B7280',
            grayLight: '#4B5563',
            white: '#111827',
            offWhite: '#0F172A',
            bodyBg: '#FFFFFF',
            bodyColor: '#111827',
            cardBg: '#F0FDF4',
            cardBorder: 'rgba(0,0,0,0.08)',
            inputBg: '#F0FDF4',
            inputBorder: 'rgba(0,0,0,0.15)',
            navScrolledBg: 'rgba(255,255,255,0.95)',
            heroGradient: 'linear-gradient(135deg, #F0FDF4 0%, #DCFCE7 50%, #F0FDF4 100%)',
            sectionAlt: '#F0FDF4',
            footerBg: '#111827',
        },
        swatch: ['#FFFFFF', '#059669']
    },
    {
        name: 'Claro Violeta',
        id: 'light-violet',
        mode: 'light',
        colors: {
            primary: '#7C3AED',
            primaryDark: '#6D28D9',
            primaryLight: '#8B5CF6',
            dark: '#FFFFFF',
            dark2: '#F5F3FF',
            dark3: '#EDE9FE',
            gray: '#6B7280',
            grayLight: '#4B5563',
            white: '#111827',
            offWhite: '#0F172A',
            bodyBg: '#FFFFFF',
            bodyColor: '#111827',
            cardBg: '#F5F3FF',
            cardBorder: 'rgba(0,0,0,0.08)',
            inputBg: '#F5F3FF',
            inputBorder: 'rgba(0,0,0,0.15)',
            navScrolledBg: 'rgba(255,255,255,0.95)',
            heroGradient: 'linear-gradient(135deg, #F5F3FF 0%, #EDE9FE 50%, #F5F3FF 100%)',
            sectionAlt: '#F5F3FF',
            footerBg: '#111827',
        },
        swatch: ['#FFFFFF', '#7C3AED']
    },
    {
        name: 'Oscuro Teal',
        id: 'dark-teal',
        mode: 'dark',
        colors: {
            primary: '#14B8A6',
            primaryDark: '#0D9488',
            primaryLight: '#2DD4BF',
            dark: '#0A1A1A',
            dark2: '#0F2626',
            dark3: '#163333',
            gray: '#6B8A8A',
            grayLight: '#99B3B3',
            white: '#FFFFFF',
            offWhite: '#F0FDFA',
            bodyBg: '#0A1A1A',
            bodyColor: '#FFFFFF',
            cardBg: '#0F2626',
            cardBorder: 'rgba(255,255,255,0.05)',
            inputBg: '#0F2626',
            inputBorder: 'rgba(255,255,255,0.1)',
            navScrolledBg: 'rgba(10,26,26,0.95)',
            heroGradient: 'linear-gradient(135deg, #0A1A1A 0%, #061a18 50%, #0A1A1A 100%)',
            sectionAlt: '#0F2626',
            footerBg: '#0A1A1A',
        },
        swatch: ['#0A1A1A', '#14B8A6']
    },
];

function applyTheme(theme) {
    const root = document.documentElement;
    const c = theme.colors;

    root.style.setProperty('--primary', c.primary);
    root.style.setProperty('--primary-dark', c.primaryDark);
    root.style.setProperty('--primary-light', c.primaryLight);
    root.style.setProperty('--dark', c.dark);
    root.style.setProperty('--dark-2', c.dark2);
    root.style.setProperty('--dark-3', c.dark3);
    root.style.setProperty('--gray', c.gray);
    root.style.setProperty('--gray-light', c.grayLight);
    root.style.setProperty('--white', c.white);
    root.style.setProperty('--off-white', c.offWhite);

    // Body
    document.body.style.background = c.bodyBg;
    document.body.style.color = c.bodyColor;

    // Hero
    const hero = document.querySelector('.hero');
    if (hero) hero.style.background = c.heroGradient;

    // Navbar scrolled
    root.style.setProperty('--nav-scrolled-bg', c.navScrolledBg);

    // Light mode specific overrides
    if (theme.mode === 'light') {
        document.body.classList.add('theme-light');
        document.body.classList.remove('theme-dark');
    } else {
        document.body.classList.add('theme-dark');
        document.body.classList.remove('theme-light');
    }

    // Update glow color
    root.style.setProperty('--glow-color', c.primary + '26');

    // Save to localStorage
    localStorage.setItem('elinfatigable-theme', theme.id);

    // Update active swatch
    document.querySelectorAll('.ts-swatch').forEach(s => {
        s.classList.toggle('active', s.dataset.theme === theme.id);
    });
}

function createSwitcher() {
    const switcher = document.createElement('div');
    switcher.className = 'theme-switcher';
    switcher.innerHTML = `
        <button class="ts-toggle" id="tsToggle" aria-label="Selector de colores">
            <span class="ts-toggle-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 2a10 10 0 0 1 0 20"/>
                </svg>
            </span>
            <span class="ts-toggle-text">COLOR</span>
        </button>
        <div class="ts-panel" id="tsPanel">
            <div class="ts-label-row">
                <span class="ts-label">OSCUROS</span>
            </div>
            <div class="ts-swatches ts-dark-row">
                ${themes.filter(t => t.mode === 'dark').map(t => `
                    <button class="ts-swatch" data-theme="${t.id}" title="${t.name}" aria-label="${t.name}">
                        <span class="swatch-half left" style="background:${t.swatch[0]}"></span>
                        <span class="swatch-half right" style="background:${t.swatch[1]}"></span>
                    </button>
                `).join('')}
            </div>
            <div class="ts-label-row">
                <span class="ts-label">CLAROS</span>
            </div>
            <div class="ts-swatches ts-light-row">
                ${themes.filter(t => t.mode === 'light').map(t => `
                    <button class="ts-swatch" data-theme="${t.id}" title="${t.name}" aria-label="${t.name}">
                        <span class="swatch-half left" style="background:${t.swatch[0]}; border: 1px solid rgba(0,0,0,0.15);border-radius: 50% 0 0 50%;"></span>
                        <span class="swatch-half right" style="background:${t.swatch[1]}"></span>
                    </button>
                `).join('')}
            </div>
        </div>
    `;

    document.body.appendChild(switcher);

    // Toggle panel
    const toggle = document.getElementById('tsToggle');
    const panel = document.getElementById('tsPanel');

    toggle.addEventListener('click', () => {
        switcher.classList.toggle('open');
    });

    // Swatch clicks
    switcher.querySelectorAll('.ts-swatch').forEach(btn => {
        btn.addEventListener('click', () => {
            const theme = themes.find(t => t.id === btn.dataset.theme);
            if (theme) applyTheme(theme);
        });
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
        if (!switcher.contains(e.target)) {
            switcher.classList.remove('open');
        }
    });
}

// Init
document.addEventListener('DOMContentLoaded', () => {
    createSwitcher();

    // Restore saved theme
    const saved = localStorage.getItem('elinfatigable-theme');
    if (saved) {
        const theme = themes.find(t => t.id === saved);
        if (theme) applyTheme(theme);
    } else {
        // Default: Claro Violeta
        const defaultTheme = themes.find(t => t.id === 'light-violet');
        if (defaultTheme) applyTheme(defaultTheme);
    }
});
