import React from 'react';
import { logoObject } from '@/constants';
import Image from 'next/image';
import styles from './patner.module.css';
import returnArrow from '@/assets/icons/android-share.png';
import users from '@/assets/icons/person-stalker.png';
import providers from '@/assets/icons/social-buffer.png';

function Patner() {
  return (
    <div className={styles.container}>
    <div className={styles.patnersLogo}>
      {Object.values(logoObject).map((logo, index) => (
        <div className={styles.logos} key={index}>
          <Image src={logo} alt={`Logo ${index + 1}`} />
        </div>
      ))}
    </div>

    <div className={styles.usageContainer}>
        <div className={styles.month}>
            <h1 className={styles.userContainerTitle}>12 Month</h1>
            <h3 className={styles.usageContainerSubtitle}><Image src={returnArrow} className={styles.icons} alt='return' /> Free Trial</h3>
        </div>
        <hr className={styles.hr} />
        <div className={styles.userContainer}>
        <h1 className={styles.userContainerTitle}>+80M</h1>
        <h3 className={styles.usageContainerSubtitle}><Image src={users} className={styles.icons} alt='users' /> Active Users</h3>
        </div>
        <hr className={styles.hr} />
        <div className={styles.providerContainer}>
        <h1 className={styles.userContainerTitle}>+180k</h1>
        <h3 className={styles.usageContainerSubtitle}><Image src={providers} className={styles.icons} alt='providers' /> Providers</h3>
        </div>
    </div>
    </div>
  );
}

export default Patner;
