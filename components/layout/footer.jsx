import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa6";
import styles from './footer.module.css';
import Image from 'next/image';

const QUICK_LINKS = [
    {
        name: 'Inicio',
        href: '#inicio'
    },
    {
        name: 'Proceso',
        href: '#proceso'
    },
    {
        name: 'Productos',
        href: '#productos'
    },
    {
        name: 'Artesanía',
        href: '#artesania'
    },
    {
        name: 'Platos típicos',
        href: '#platos'
    },
    {
        name: 'Lugares turísticos',
        href: '#turismo'
    },
    {
        name: 'Ubicación',
        href: '#ubicacion'
    },
    {
        name: 'Galería',
        href: '#galeria'
    },
    {
        name: 'Contacto',
        href: '#contacto'
    },
];

export default function Footer() {
    return (
        <footer id="contacto" className={styles.footerContainer}>
            <div className={styles.footerContent}>

                <div className={styles.brandSection}>
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        width={150}
                        height={100}
                        className={styles.footerLogo}
                    />
                    <div className={styles.socialIcons}>
                        <a href="#" aria-label="Facebook">
                            <FaFacebook />
                        </a>

                        <a href="#" aria-label="Instagram">
                            <FaInstagram />
                        </a>

                        <a href="#" aria-label="TikTok">
                            <FaTiktok />
                        </a>
                    </div>
                </div>

                <div className={styles.linkSection}>
                    <h3 className={styles.titles}>Enlaces rápidos</h3>
                    <ul>
                        {QUICK_LINKS.map((link, index) => (
                            <li key={index}>
                                <a href={link.href}>{link.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={styles.linkSection}>
                    <h3 className={styles.titles}>Información</h3>
                    <ul>
                        <li><a href="#nosotros">Sobre nosotros</a></li>
                        <li><a href="#terminos">Términos y condiciones</a></li>
                        <li><a href="#privacidad">Política de privacidad</a></li>
                    </ul>
                </div>

                <div className={styles.contactSection}>
                    <h3 className={styles.titles}>Contacto</h3>
                    <p>📞 +51 987 654 321</p>
                    <p>📧 TurTraInfor@org.com.pe</p>
                    <p>📍 Cajamarca, Perú</p>
                </div>
            </div>

            <div className={styles.copyright}>
                <p>© 2026 TurTraInfor. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}