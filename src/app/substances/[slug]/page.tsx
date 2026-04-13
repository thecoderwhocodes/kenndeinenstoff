import { createClient } from "@/lib/supabase/server";
import { notFound } from "next/navigation";
import styles from './page.module.css'
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from "react";

// Typ für params (NEUES Next.js Verhalten)
type Props = {
  params: Promise<{
    slug: string;
  }>;
};

// 🔹 Types für jsonb Felder
type Risks = {
  short_term?: string[];
  long_term?: string[];
};

type Effects = {
  positive?: string[];
  negative?: string[];
  physical?: string[];
  mental?: string[];
};

type Duration = {
  onset?: string;
  duration?: string;
  after_effects?: string;
};

export default async function SubstancePage({ params }: Props) {
  const { slug } = await params;

  const supabase = createClient();

  const { data, error } = await supabase
    .from("substances")
    .select("*")
    .eq("slug", slug)
    .single();

    // ❗ Fehler oder kein Ergebnis → 404
    if (error || !data) {
        notFound();
    }

  // 🔹 Casting jsonb Felder
  const risks = data.risks as Risks | null;
  const effects = data.effects as Effects | null;
  const duration = data.duration as Duration | null;

  return (
    <div className="pageContainer">
        <section id={styles.overview}>
            <div className={styles.overviewHeader}>
              <div>
                <img src={data.image} alt="drug" className={styles.overviewImage}/>
              </div>
              <div>
                <h1 className={styles.overviewTitle}>{data.name}</h1>
                <div className={styles.overviewInfoGrid}>
                  <div className={styles.overviewInfoLabel}>Slang:</div>
                  <div className={styles.overviewInfoValue}>
                    {data.alternative_names?.join(", ") || "-"}
                  </div>

                  <div className={styles.overviewInfoLabel}>Kategorie:</div>
                  <div className={styles.overviewInfoValue}>
                    {data.category || "-"}
                  </div>

                  <div className={styles.overviewInfoLabel}>Aktive Substanz:</div>
                  <div className={styles.overviewInfoValue}>
                    {data.active_substance || "-"}
                  </div>

                  <div className={styles.overviewInfoLabel}>Reinheitsgehalt:</div>
                  <div className={styles.overviewInfoValue}>
                    {data.declared_purity || "-"}
                  </div>

                  <div className={styles.overviewInfoLabel}>Risikobewertung:</div>
                  <div className={styles.overviewInfoValue}>
                    {data.risk_assessment || "-"}
                  </div>
                </div>
              </div>
            </div>
        </section>
    </div>
  );
}