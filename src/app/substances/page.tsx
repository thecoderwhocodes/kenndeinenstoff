import React from 'react'
import styles from './page.module.css'
import { substances } from '@/data/substances'
import Link from 'next/link'

export default function Substances() {
  return (
    <div className="pageContainer">
        <section>
            <div className={styles.header}>
                <h1 className={styles.title}>Alle Substanzen</h1>
            </div>
            <div className={styles.content}>
                {substances.map((substance) => (
                    <Link key={substance.slug} href={`/substances/${substance.slug}`}>
                        <div className={styles.elementHeader}>
                            <img src={substance.image} alt="drug" />
                        </div>
                        <div className={styles.elementFooter}>
                            <span className={styles.name}>{substance.name}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    </div>
  )
}
