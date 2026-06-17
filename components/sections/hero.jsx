"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './hero.module.css';

export default function Hero() {
    return (
        <motion.section 
            id="inicio" 
            className={styles.heroContainer}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <div className={styles.backgroundWrapper}>
                <Image
                    src="/vacuno-hero.avif"
                    alt="Valles verdosos de Cajamarca con una vaca pastando"
                    fill
                    priority 
                    className={styles.backgroundImage}
                />
                <div className={styles.overlay} />
            </div>

            <div className={styles.heroContent}>
                <h1>
                    Descubre el sabor auténtico de{' '}
                    <span className={styles.acentoCajamarca}>Cajamarca</span>
                </h1>
                <p>
                    Conoce el proceso artesanal detrás de nuestros productos lácteos tradicionales.
                </p>
                <a href="#recorrido" className={styles.btnHero}>
                    Iniciar recorrido <span>→</span>
                </a>
            </div>
        </motion.section>
    );
}