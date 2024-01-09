"use client";

import { useState } from "react";
import Image from "next/image";
import logo from "../../assets/logos/main-logo.png";
import styles from "./nav.module.css";
import { IoSettingsOutline } from "react-icons/io5";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.mainContainer}>
      {/* Mobile Nav */}

      <div className={styles.mobileNav}>
      <Image src={logo} alt="logo" width={50} height={50} />
        {isOpen && (
          <div className="flex flex-col w-full items-start h-[100vh] absolute left-0 right-0 top-0 bg-[#B3AFAF] text-black px-6 py-4">
            {isOpen && (
              <IoMdClose
                className="w-8 h-8 absolute top-6 right-6"
                onClick={() => setIsOpen(!isOpen)}
              />
            )}
            <Link href="/" className={styles.logo}>
          <Image src={logo} alt="logo" width={50} height={50} />
        </Link>
            <ul className={styles.mobileNavList}>
              <li className={styles.mobileNavItems}>Features</li>
              <li className={styles.mobileNavItems}>Pricing</li>
              <li className={styles.mobileNavItems}>News & Event</li>
              <li className={styles.mobileNavItems}>Contact</li>
            </ul>
            <div className={styles.mobileButtons}>
              <button className={styles.login}>SIGN IN</button>
              <button className={styles.register}>REGISTER</button>
              <IoSettingsOutline className={styles.settingsIcon} />
            </div>
          </div>
        )}

        {!isOpen && (
          <CiMenuFries className="w-8 h-8" onClick={() => setIsOpen(!isOpen)} />
        )}
      </div>

      {/* //Desktop Nav */}
      <div className={styles.navbar}>
        <h1 className={styles.logo}>
          <Image src={logo} alt="logo" width={50} height={50} />
        </h1>
        <ul className={styles.navList}>
          <li className={styles.navItems}>Features</li>
          <li className={styles.navItems}>Pricing</li>
          <li className={styles.navItems}>News & Event</li>
          <li className={styles.navItems}>Contact</li>
        </ul>
      </div>
      <div className={styles.buttons}>
        <button className={styles.login}>SIGN IN</button>
        <button className={styles.register}>REGISTER</button>
        <IoSettingsOutline className={styles.settingsIcon} />
      </div>
    </nav>
  );
}

export default Navbar;
