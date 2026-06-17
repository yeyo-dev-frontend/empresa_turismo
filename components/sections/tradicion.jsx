"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './tradicion.module.css';
import { FaLeaf, FaUserGroup } from "react-icons/fa6";
import { GiCow } from "react-icons/gi";

const BENEFICIOS = [
    {
        titulo: 'Producción artesanal',
        desc: 'Métodos tradicionales que garantizan sabor y calidad.',
        icon:  <GiCow />
    },
    {
        titulo: '100% Natural',
        desc: 'Leche fresca de vacas alimentadas en pastos naturales.',
        icon: <FaLeaf />
    },
    {
        titulo: 'Experiencia turística',
        desc: 'Conecta con nuestra cultura, historia y forma de vida.',
        icon: <FaUserGroup />
    }
];

export default function Tradicion() {
    return (
        <motion.section 
            id="recorrido" 
            className={styles.sectionContainer}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
        >
            <div className={styles.contentWrapper}>
                
                <div className={styles.imageCol}>
                    <div className={styles.imageFrame}>
                        <Image 
                            src="/ordeña.jpg" 
                            alt="Productor de leche en Cajamarca"
                            width={500}
                            height={450}
                            className={styles.img}
                        />
                    </div>
                </div>

                <div className={styles.textCol}>
                    <span className={styles.subtitle}>NUESTRA TRADICIÓN</span>
                    <h2 className={styles.title}>
                        Tradición láctea <br />
                        <span>cajamarquina</span>
                    </h2>
                    <p className={styles.mainDescription}>
                        Generaciones de familias dedicadas a la producción de lácteos de alta calidad, 
                        manteniendo vivas las técnicas artesanales que nos identifican.
                    </p>

                    <div className={styles.featuresGrid}>
                        {BENEFICIOS.map((item, index) => (
                            <div key={index} className={styles.featureItem}>
                                <div className={styles.iconCircle}>{item.icon}</div>
                                <div className={styles.featureText}>
                                    <h4>{item.titulo}</h4>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </motion.section>
    );
}