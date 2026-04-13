import React from 'react'
import styles from './page.module.css'
import { createClient } from "@/lib/supabase/server";
import Link from 'next/link'

export default async function Substances() {
    const supabase = createClient();

    const { data: substances, error } = await supabase
        .from("substances")
        .select("name, slug, image")
    
    if (error) {
    return (
      <div className="p-6">
        <h1 className="text-xl font-semibold">
          Fehler beim Laden
        </h1>
      </div>
    );
  }
  return (
    <div className="pageContainer">
        <section>
            <div className={styles.header}>
                <h1 className={styles.title}>Alle Substanzen</h1>
            </div>
            <div className={styles.content}>
                {substances?.map((s: any) => (
                    <Link key={s.slug} href={`/substances/${s.slug}`}>
                        <div className={styles.elementHeader}>
                            <img src={s.image} alt="drug" />
                        </div>
                        <div className={styles.elementFooter}>
                            <span className={styles.name}>{s.name}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    </div>
  )
}
