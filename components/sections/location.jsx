"use client";
import React from "react";
import { motion } from 'framer-motion';
import styles from "./location.module.css";
import Image from "next/image";
import { FiMapPin, FiClock, FiPhone, FiHome } from "react-icons/fi";

const INFO_DATA = [
    {
        id: "granja",
        icon: <FiHome />,
        title: "Lácteos El Valle",
        subtitle: "Granja y planta artesanal"
    },
    {
        id: "ubicacion",
        icon: <FiMapPin />,
        title: "Ubicación",
        subtitle: "Km 1.5, Cajamarca - Baños del Inca"
    },
    {
        id: "horarios",
        icon: <FiClock />,
        title: "Horarios de atención",
        subtitle: "Lunes a Sábado: 8:00 a.m. - 5:00 p.m.\nDomingos: 9:00 a.m. - 1:00 p.m."
    },
    {
        id: "contacto",
        icon: <FiPhone />,
        title: "Contacto",
        subtitle: "+51 987 654 321\nlacteoselvalle@cajamarca.pe"
    }
];

export default function Location() {
    return (
        <motion.section
            id="ubicacion"
            className={styles.section}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
        >
            <div className={styles.overlay}></div>

            <div className={styles.contentWrapper}>
                <div className={styles.glassCard}>
                    <div className={styles.header}>
                        <span className={styles.subtitle}>Visítanos</span>
                        <h2 className={styles.title}>Encuéntranos en Cajamarca</h2>
                    </div>

                    <div className={styles.grid}>
                        {/* Columna 1: Mapa Real (Google Maps Iframe) */}
                        <div className={styles.mapWrapper}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15833.001648017366!2d-78.47250499092497!3d-7.154823126759714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91b25ab9b8a0ebc7%3A0xcb1b51909a366b!2sBa%C3%B1os%20del%20Inca!5e0!3m2!1ses!2spe!4v1700000000000!5m2!1ses!2spe"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>

                        <div className={styles.infoList}>
                            {INFO_DATA.map((item) => (
                                <div key={item.id} className={styles.infoItem}>
                                    <div className={styles.iconWrapper}>
                                        {item.icon}
                                    </div>
                                    <div className={styles.infoText}>
                                        <h4>{item.title}</h4>
                                        <p>{item.subtitle}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className={styles.imageWrapper}>
                            <Image
                                src="https://images.unsplash.com/photo-1559598467-f8b76c8155d0?q=80&w=600&auto=format&fit=crop"
                                alt="Productos lácteos"
                                width={400}
                                height={320}
                                unoptimized={true}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
