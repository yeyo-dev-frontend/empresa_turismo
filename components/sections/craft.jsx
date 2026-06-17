"use client";
import React from "react";
import { motion } from 'framer-motion';
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import styles from "./craft.module.css";
import Image from "next/image";

const CRAFT_DATA = [
    {
        id: "tejidos",
        title: "Tejidos de Alpaca",
        description: "Prendas elaboradas a mano con fibra natural de alpaca, suaves y abrigadoras, con diseños geométricos andinos.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=600&auto=format&fit=crop"
    },
    {
        id: "ceramica",
        title: "Cerámica",
        description: "Piezas únicas moldeadas y pintadas a mano por artesanos cajamarquinos, inspiradas en la iconografía prehispánica.",
        image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=600&auto=format&fit=crop"
    },
    {
        id: "filigrana",
        title: "Filigrana de Oro",
        description: "Técnica orfebre ancestral que crea joyas delicadas trenzando hilos finos de oro y plata, reconocida en todo el Perú.",
        image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=600&auto=format&fit=crop"
    },
    {
        id: "textil",
        title: "Textilería Andina",
        description: "Tapices y mantas tejidos en telar de cintura con lana de oveja teñida con plantas naturales, conservando técnicas milenarias.",
        image: "https://images.unsplash.com/photo-1581783898377-1c85bf937427?q=80&w=600&auto=format&fit=crop"
    },
    {
        id: "pulseras",
        title: "Joyería Artesanal",
        description: "Collares, pulseras y aretes confeccionados con semillas, turquesa y plata. Cada pieza refleja la cosmovisión andina cajamarquina.",
        image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=600&auto=format&fit=crop"
    },
    {
        id: "tallado",
        title: "Tallado en Piedra",
        description: "Esculturas y bajorrelieves tallados en piedra de Cajamarca, representando la fauna local, escenas cotidianas y héroes regionales.",
        image: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=600&auto=format&fit=crop"
    }
];

export default function Craft() {
    const [emblaRef] = useEmblaCarousel({ loop: true, align: "start", dragFree: true }, [
        AutoScroll({ speed: 1, direction: "backward", stopOnInteraction: false })
    ]);

    return (
        <motion.section 
            id="artesania" 
            className={styles.container}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
        >
            <div className={styles.header}>
                <span className={styles.subtitle}>Artesanía Cajamarquina</span>
                <h2 className={styles.title}>Arte que lleva nuestra identidad</h2>
            </div>

            <div className={styles.embla} ref={emblaRef}>
                <div className={styles.emblaContainer}>
                    {[...CRAFT_DATA, ...CRAFT_DATA].map((item, index) => (
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
