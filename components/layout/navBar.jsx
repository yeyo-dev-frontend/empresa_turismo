"use client"

import { useState, useEffect } from 'react';
import styles from './navBar.module.css';
import Image from 'next/image';

// Inline SVG Flag Components for maximum performance and sharpness
const SpainFlag = () => (
    <svg className={styles.flagSvg} viewBox="0 0 3 2" xmlns="http://www.w3.org/2000/svg">
        <rect width="3" height="2" fill="#c60b1e"/>
        <rect width="3" height="1" y="0.5" fill="#ffc400"/>
        <circle cx="1" cy="1" r="0.25" fill="#c60b1e" opacity="0.8"/>
    </svg>
);

const UKFlag = () => (
    <svg className={styles.flagSvg} viewBox="0 0 60 40" xmlns="http://www.w3.org/2000/svg">
        <rect width="60" height="40" fill="#00247d"/>
        <path d="M0,0 L60,40 M60,0 L0,40" stroke="#fff" strokeWidth="6"/>
        <path d="M0,0 L60,40 M60,0 L0,40" stroke="#cf142b" strokeWidth="4"/>
        <path d="M30,0 L30,40 M0,20 L60,20" stroke="#fff" strokeWidth="10"/>
        <path d="M30,0 L30,40 M0,20 L60,20" stroke="#cf142b" strokeWidth="6"/>
    </svg>
);

const FranceFlag = () => (
    <svg className={styles.flagSvg} viewBox="0 0 3 2" xmlns="http://www.w3.org/2000/svg">
        <rect width="1" height="2" fill="#0055A5"/>
        <rect width="1" height="2" x="1" fill="#FFFFFF"/>
        <rect width="1" height="2" x="2" fill="#E70020"/>
    </svg>
);

const PortugalFlag = () => (
    <svg className={styles.flagSvg} viewBox="0 0 3 2" xmlns="http://www.w3.org/2000/svg">
        <rect width="1.2" height="2" fill="#006600"/>
        <rect width="1.8" height="2" x="1.2" fill="#FF0000"/>
        <circle cx="1.2" cy="1" r="0.25" fill="#FFFF00"/>
    </svg>
);

const GermanyFlag = () => (
    <svg className={styles.flagSvg} viewBox="0 0 3 2" xmlns="http://www.w3.org/2000/svg">
        <rect width="3" height="0.66" fill="#000000"/>
        <rect width="3" height="0.66" y="0.66" fill="#FF0000"/>
        <rect width="3" height="0.68" y="1.32" fill="#FFCC00"/>
    </svg>
);

const NAV_LINKS = [
    {
        name: 'Inicio',
        href: '#inicio',
        id: 'inicio'
    },
    {
        name: 'Productos',
        href: '#productos',
        id: 'productos'
    },
    {
        name: 'Proceso',
        href: '#proceso',
        id: 'proceso'
    },
    {
        name: 'Artesanía',
        href: '#artesania',
        id: 'artesania'
    },
    {
        name: 'Gastronomía',
        href: '#platos',
        id: 'platos'
    },
    {
        name: 'Turismo',
        href: '#turismo',
        id: 'turismo'
    },
    {
        name: 'Ubicación',
        href: '#ubicacion',
        id: 'ubicacion'
    },
    {
        name: 'Galería',
        href: '#galeria',
        id: 'galeria'
    },
    {
        name: 'Contacto',
        href: '#contacto',
        id: 'contacto'
    },
];

export default function NavBar() {
    const [activeSection, setActiveSection] = useState('inicio');
    const [menuOpen, setMenuOpen] = useState(false);
    const [langOpen, setLangOpen] = useState(false);
    const [activeLang, setActiveLang] = useState('es');
    const [scrolled, setScrolled] = useState(false);

    const LANGUAGES = [
        { code: 'es', name: 'Español', flag: <SpainFlag /> },
        { code: 'en', name: 'English', flag: <UKFlag /> },
        { code: 'fr', name: 'Français', flag: <FranceFlag /> },
        { code: 'pt', name: 'Português', flag: <PortugalFlag /> },
        { code: 'de', name: 'Deutsch', flag: <GermanyFlag /> },
    ];

    const currentLang = LANGUAGES.find(l => l.code === activeLang);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }

            const scrollPosition = window.scrollY + 150;

            NAV_LINKS.forEach(({ id }) => {
                const element = document.getElementById(id);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(id);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLinkClick = (id) => {
        setActiveSection(id);
        setMenuOpen(false);
    };

    return (
        <nav className={`${styles.navContainer} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.logoWrapper}>
                <a href="#inicio" className={styles.linkLogo} onClick={() => handleLinkClick('inicio')}>
                    <Image
                        src="/logo.png"
                        alt="Logo Ruta Láctea Cajamarca"
                        className={styles.imgLogo}
                        height={45}
                        width={60}
                        priority
                    />
                </a>
            </div>

            {/* Desktop Links */}
            <ul className={styles.navLinks}>
                {NAV_LINKS.map((link) => (
                    <li key={link.id}>
                        <a
                            href={link.href}
                            className={activeSection === link.id ? styles.active : ''}
                            onClick={() => handleLinkClick(link.id)}
                        >
                            {link.name}
                        </a>
                    </li>
                ))}
            </ul>

            {/* Desktop Actions */}
            <div className={styles.navActions}>
                <div className={styles.langSelectorContainer}>
                    <button 
                        className={styles.langSelectorBtn} 
                        onClick={() => setLangOpen(!langOpen)}
                        aria-expanded={langOpen}
                        aria-label="Seleccionar idioma"
                    >
                        {currentLang.flag}
                        <span className={styles.langCode}>{currentLang.code.toUpperCase()}</span>
                        <span className={`${styles.arrow} ${langOpen ? styles.arrowOpen : ''}`}>▼</span>
                    </button>
                    {langOpen && (
                        <ul className={styles.langDropdown}>
                            {LANGUAGES.map((lang) => (
                                <li key={lang.code}>
                                    <button 
                                        className={`${styles.langItem} ${activeLang === lang.code ? styles.activeLang : ''}`}
                                        onClick={() => {
                                            setActiveLang(lang.code);
                                            setLangOpen(false);
                                        }}
                                    >
                                        {lang.flag}
                                        <span>{lang.name}</span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                <button className={styles.btnLogin}>Iniciar Sesión</button>
            </div>

            {/* Mobile Hamburger Button */}
            <button 
                className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`} 
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Abrir menú"
                aria-expanded={menuOpen}
            >
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
            </button>

            {/* Mobile Drawer Menu */}
            <div className={`${styles.mobileDrawer} ${menuOpen ? styles.drawerOpen : ''}`}>
                <ul className={styles.mobileNavLinks}>
                    {NAV_LINKS.map((link) => (
                        <li key={link.id}>
                            <a
                                href={link.href}
                                className={activeSection === link.id ? styles.activeMobile : ''}
                                onClick={() => handleLinkClick(link.id)}
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className={styles.mobileActions}>
                    <div className={styles.mobileLangTitle}>Idioma</div>
                    <div className={styles.mobileLangGrid}>
                        {LANGUAGES.map((lang) => (
                            <button
                                key={lang.code}
                                className={`${styles.mobileLangBtn} ${activeLang === lang.code ? styles.activeMobileLang : ''}`}
                                onClick={() => {
                                    setActiveLang(lang.code);
                                    setMenuOpen(false);
                                }}
                            >
                                {lang.flag}
                                <span className={styles.mobileLangCode}>{lang.code.toUpperCase()}</span>
                            </button>
                        ))}
                    </div>

                    <button className={styles.btnMobileLogin} onClick={() => setMenuOpen(false)}>
                        Iniciar Sesión
                    </button>
                </div>
            </div>

            {/* Overlay Background when drawer is open */}
            {menuOpen && <div className={styles.backdrop} onClick={() => setMenuOpen(false)} />}
        </nav>
    );
}