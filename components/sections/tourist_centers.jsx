"use client";
import React from "react";
import { motion } from 'framer-motion';
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import styles from "./tourist_centers.module.css";
import Image from "next/image";

const TOURIST_DATA = [
    {
        id: "banos",
        title: "Baños del Inca",
        description: "Aguas termales históricas utilizadas por el Inca Atahualpa.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFWn99GacJ7mMFEptDwrYyuOLXlaCaKqOX4w&s"
    },
    {
        id: "plaza",
        title: "Plaza de Armas",
        description: "Corazón de la ciudad, rodeada de historia y hermosa arquitectura.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxVE6WikXafrfKhUYShhsHMcpjT_ztjzy6Iw&s"
    },
    {
        id: "ventanas",
        title: "Ventanas de Otuzco",
        description: "Impresionantes formaciones rocosas con vistas únicas del valle.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9mVh2DSPz6y_bCCDxIpmw87TuaRY5C-z3fg&s"
    },
    {
        id: "cumbe-mayo",
        title: "Complejo Arqueológico de Cumbe Mayo",
        description: "Antiguas construcciones y canales preincas llenos de misterio.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1NMISocG7iyjhk6uOPVC6VFH-13_WbO2Y7A&s"
    },
    {
        id: "llacanora",
        title: "Santa Apolonia",
        description: "Naturaleza en su máximo esplendor a pocos minutos de la ciudad.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Bc16RjglM9DDgHOV4N2BJINCeuycLe3N0A&s"
    },
    {
        id: "atahualpa",
        title: "Cuarto de Rescate",
        description: "Símbolo de nuestra historia y cultura incaica que nos enorgullece.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvPj1KX87S2mfrzwHTcmaVzBUMyU1xdQh2uQ&s"
    }
];

export default function TouristCenters() {
    const [emblaRef] = useEmblaCarousel({ loop: true, align: "start", dragFree: true }, [
        AutoScroll({ speed: 1, direction: "backward", stopOnInteraction: false })
    ]);

    return (
        <motion.section
            id="turismo"
            className={styles.container}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
        >
            <div className={styles.header}>
                <span className={styles.subtitle}>Lugares Turísticos Imperdibles</span>
                <h2 className={styles.title}>Conoce lo mejor de Cajamarca</h2>
            </div>

            <div className={styles.embla} ref={emblaRef}>
                <div className={styles.emblaContainer}>
                    {[...TOURIST_DATA, ...TOURIST_DATA].map((item, index) => (
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
