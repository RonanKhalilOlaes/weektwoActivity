import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/About.module.css'
import data from '../data/education.json'
import { useState } from 'react'
import Card from '../components/Card'
import Link from 'next/link'

export default function About() {
    return(
        <>
        
        <main className={styles.main}>
            <p className={styles.title}>About page</p>

            <div className={styles.cont}>
                <div className={styles.profile}>
                <Image
                    src="/albert.png"
                    alt="Albert Einstein"
                    width={200}
                    height={200}
                    />
                    <div className={styles.info}>
                        <ul>
                            <li>Albert Einstein</li>
                            <li>Theoretical Physicist</li>
                            <li>1879-1955</li>
                            
                        </ul>
                    </div>
                </div>
                <div className={styles.profile}>
                    <Image
                    src="/madam.png"
                    alt="Madam Curie"
                    width={200}
                    height={200}
                    />                       
                    <div className={styles.info}>
                        <ul>
                            <li>Madam Curie</li>
                            <li>Physicist, Chemist</li>
                            <li>1867-1934</li>
                            
                        </ul>
                    </div>
                </div>
                <div className={styles.profile}>
                <Image
                    src="/rick.png"
                    alt="Rick Sanchez"
                    width={200}
                    height={200}
                    />
                    <div className={styles.info}>
                        <ul>
                            <li>Rick Sanchez</li>
                            <li>Physicist</li>
                            <li>1958-Presesnt</li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </main>
        </>
    )
}