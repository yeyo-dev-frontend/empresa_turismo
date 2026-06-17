"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import PRODUCTOS_DATA from '@/data/productos.json';
import * as GiIcons from "react-icons/gi";
import * as FiIcons from "react-icons/fi";
import * as RiIcons from "react-icons/ri";
import styles from "./productoYProceso.module.css";
import Image from "next/image";

export default function ProductoYProceso() {
    const [selectedId, setSelectedId] = useState("mantecoso");

    const allProducts = PRODUCTOS_DATA.categorias.flatMap(cat => cat.productos);
    const productoActivo = allProducts.find(p => p.id === selectedId) || allProducts[0];

    const renderIcon = (iconName) => {
        const IconComponent = GiIcons[iconName] || FiIcons[iconName] || RiIcons[iconName];
        if (!IconComponent) {
            console.warn(`Icono no encontrado: ${iconName}`);
            return <GiIcons.GiCow />;
        }
        return <IconComponent />;
    };

    return (
        <motion.section
            id="productos"
            className={styles.container}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
        >
            <div className={styles.header}>
                <span className={styles.subtitle}>NUESTROS PRODUCTOS</span>
                <h2 className={styles.title}>Sabores que nos representan</h2>
            </div>

            <div className={styles.splitLayout}>
                <div className={styles.leftPanel}>
                    {PRODUCTOS_DATA.categorias.map((cat) => (
                        <div key={cat.id} className={styles.categoryGroup}>
                            <h3 className={styles.categoryLabel}>{cat.etiqueta}</h3>
                            <div className={styles.productList}>
                                {cat.productos.map((prod) => (
                                    <div
                                        key={prod.id}
                                        className={`${styles.productItem} ${selectedId === prod.id ? styles.activeProduct : ""}`}
                                        onClick={() => setSelectedId(prod.id)}
                                    >
                                        <div className={styles.productImageWrapper}>
                                            {prod.imagen && (
                                                <Image
                                                    src={prod.imagen}
                                                    alt={prod.nombre}
                                                    fill
                                                    sizes="60px"
                                                    className={styles.productThumb}
                                                />
                                            )}
                                        </div>
                                        <div className={styles.productInfo}>
                                            <h4>{prod.nombre}</h4>
                                            <p>{prod.descripcion}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.rightPanel}>
                    <span className={styles.processSubtitle}>NUESTRO PROCESO</span>
                    <h3 className={styles.processTitle}>
                        Así elaboramos nuestro <span className={styles.productName}>{productoActivo.nombre}</span>
                    </h3>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={productoActivo.id}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.5 }}
                            className={styles.stepsContainer}
                        >
                            {productoActivo.proceso.map((paso, index) => (
                                <div key={index} className={styles.stepItem}>
                                    <div className={styles.stepTimeline}>
                                        <div className={styles.numberBadge}>{paso.paso}</div>
                                        {index < productoActivo.proceso.length - 1 && (
                                            <div className={styles.verticalConnector} />
                                        )}
                                    </div>
                                    <div className={styles.iconCircle}>
                                        {renderIcon(paso.icon)}
                                    </div>
                                    <div className={styles.textWrapper}>
                                        <h4>{paso.titulo}</h4>
                                        <p>{paso.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </motion.section>
    );
}
