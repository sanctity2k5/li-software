import React from 'react';
import Image from 'next/image';
import styles from './banner.module.css';
import illustration from '@/assets/Illustration.png';
import play from '@/assets/play.png';

function Banner() {
  return (
    <div className={styles.container}>
        <div className={styles.bannerText}>
        <h1 className={styles.bannerTitle}>Unleashing the Power of LU Software: Your Gateway to Enhanced Productivity</h1>
        <h3 className={styles.bannerSubtitle}> Deep Dive into Harnessing Advanced Tools, Innovative Features, and Cutting-Edge Technologies for Optimal Performance and Efficiency in the Digital Age</h3>
        <div className={styles.buttons}>
            <button className={styles.watch}><Image src={play} className={styles.play} alt="play" /> Watch Video</button>
            <button className={styles.getStarted}>Get Started</button>
        </div>
        </div>
        <div className="w-full flex justify-center lg:justify-end">
            <Image src={illustration} className={styles.illustration} alt="illustration" />
        </div>
    </div>
  )
}

export default Banner;