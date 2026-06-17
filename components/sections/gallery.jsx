"use client";
import React from "react";
import { motion } from 'framer-motion';
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import styles from "./gallery.module.css";
import Image from "next/image";

const GALLERY_DATA = [
    {
        id: "cows",
        title: "Ganadería",
        image: "https://images.unsplash.com/photo-1546445317-29f4545e9d53?q=80&w=600&auto=format&fit=crop"
    },
    {
        id: "cheese-shelves",
        title: "Maduración",
        image: "https://us.123rf.com/450wm/jackf/jackf1710/jackf171004828/88091119-colecci%C3%B3n-de-queso-en-el-mostrador-de-la-tienda-de-comestibles.jpg?ver=6"
    },
    {
        id: "making-cheese",
        title: "Elaboración",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcUUYzNffTw2a5G0GYuEk2PfWW_a-WNyG1VQ&s"
    },
    {
        id: "cheeses",
        title: "Productos",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjd-d3BxQFanPAm81QVewifm438QSa8Q6nZw&s"
    },
    {
        id: "landscape",
        title: "Nuestra Tierra",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/cc/2e/6e/vista-de-la-plaza-de.jpg?w=1200&h=1200&s=1"
    },
    {
        id: "person",
        title: "Nuestra Gente",
        image: "https://portal.andina.pe/EDPfotografia/Thumbnail/2015/01/31/000279852W.jpg"
    }
];

export default function Gallery() {
    const [emblaRef] = useEmblaCarousel({ loop: true, align: "start", dragFree: true }, [
        AutoScroll({ speed: 1, direction: "forward", stopOnInteraction: false })
    ]);

    return (
        <motion.section 
            id="galeria" 
            className={styles.container}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
        >
            <div className={styles.header}>
                <span className={styles.subtitle}>Galería</span>
                <h2 className={styles.title}>Momentos de nuestra tradición</h2>
            </div>

            <div className={styles.embla} ref={emblaRef}>
                <div className={styles.emblaContainer}>
                    {[...GALLERY_DATA, ...GALLERY_DATA].map((item, index) => (
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
                        </div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}