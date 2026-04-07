import { substances } from "@/data/substances";

// Typ für params (NEUES Next.js Verhalten)
type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function SubstancePage({ params }: Props) {
  const { slug } = await params;

  const substance = substances.find((s) => s.slug === slug);

  if (!substance) {
    return (
      <div className="p-6">
        <h1 className="text-xl font-semibold">Nicht gefunden</h1>
        <p>Diese Substanz existiert nicht.</p>
      </div>
    );
  }

  return (
    <div className="pageContainer">
      {/* Titel */}
      <h1 className="text-3xl font-bold">{substance.name}</h1>

      {/* Kategorie */}
      <div className="text-sm text-gray-500">
        Kategorie: {substance.category}
      </div>

      {/* Wirkstoff */}
      <div className="p-4 rounded-xl bg-gray-100">
        <h2 className="font-semibold mb-2">Wirkstoff</h2>
        <p>{substance.activeSubstance}</p>
      </div>

      {/* Platzhalter für später */}
      <div className="p-4 rounded-xl border">
        <h2 className="font-semibold mb-2">Beschreibung</h2>
        <p>
          Hier kommen später Wirkung, Risiken und weitere Informationen hin.
        </p>
      </div>
    </div>
  );
}