"use client";
import React from "react";
import { motion } from 'framer-motion';
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import styles from "./typical_dishes.module.css";
import Image from "next/image";

const DISHES_DATA = [
    {
        id: "cuy",
        title: "Cuy Chactado",
        description: "Plato emblema de Cajamarca: cuy frito en manteca, crujiente por fuera y jugoso por dentro, servido con papas y ají.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiFbAL8PS9LXnyqC5noPKY9UN-8XGC7Eigvw&s"
    },
    {
        id: "caldo-verde",
        title: "Caldo Verde",
        description: "Reconfortante caldo de papa, leche fresca y hierbas andinas. El desayuno tradicional de las familias cajamarquinas.",
        image: "https://static.wixstatic.com/media/1f3a90_50cefd78355f404cbb0989aaa04f57ab~mv2.jpg/v1/fill/w_1000,h_525,al_c,q_85,usm_0.66_1.00_0.01/1f3a90_50cefd78355f404cbb0989aaa04f57ab~mv2.jpg"
    },
    {
        id: "chicharron",
        title: "Chicharrón con Mote",
        description: "Cerdo frito hasta lograr una piel crujiente y dorada, acompañado de mote blanco cocido. Contundente y sabroso.",
        image: "https://3.bp.blogspot.com/-OAYQA8DLAAk/WOz77JLiCKI/AAAAAAAAA-4/v1GXUyhRVgcr12i-mxtqQW4LM9LNc7JrwCEw/s1600/DSC00070-1.jpg"
    },
    {
        id: "chochoca",
        title: "Sopa de Chochoca",
        description: "Sopa tradicional cajamarquina elaborada con maíz seco molido, papas, hierbas aromáticas y carne. Infaltable en carnavales.",
        image: "https://buenazo.cronosmedia.glr.pe/original/2023/08/31/64f0e60854f05d7a311f755a.jpg"
    },
    {
        id: "quesillo-miel",
        title: "Quesillo con Miel",
        description: "Quesillo fresco artesanal bañado en miel de caña de azúcar. Postre sencillo, auténtico y orgullo de la región.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnBYbF0frBWvuVSVLP1_TZ6aDqvhBoPfpHMg&s"
    },
    {
        id: "chicha",
        title: "Chicha de Jora",
        description: "Bebida ancestral de maíz fermentado, preparada en fiestas de carnaval. Símbolo vivo de nuestra identidad cultural.",
        image: "https://buenazo.cronosmedia.glr.pe/original/2021/08/06/610de777fcd1e73a204df010.jpg"
    }
];

export default function TypicalDishes() {
    // "direccion a la izquierda" = los elementos se mueven hacia la izquierda (dirección forward)
    const [emblaRef] = useEmblaCarousel({ loop: true, align: "start", dragFree: true }, [
        AutoScroll({ speed: 1, direction: "forward", stopOnInteraction: false })
    ]);

    return (
        <motion.section
            id="platos"
            className={styles.container}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
        >
            <div className={styles.header}>
                <span className={styles.subtitle}>Platos Típicos Cajamarquinos</span>
                <h2 className={styles.title}>Sabores que conquistan</h2>
            </div>

            <div className={styles.embla} ref={emblaRef}>
                <div className={styles.emblaContainer}>
                    {[...DISHES_DATA, ...DISHES_DATA].map((item, index) => (
                        <div key={`${item.id}-${index}`} className={styles.card}>
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={300}
                                    height={200}
                                    unoptimized={true}
                                />
                            </div>
                            <div className={styles.cardInfo}>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}