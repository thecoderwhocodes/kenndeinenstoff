import { createClient } from "@/lib/supabase/server";

// Typ für params (NEUES Next.js Verhalten)
type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function SubstancePage({ params }: Props) {
  const { slug } = await params;

  const supabase = createClient();

  const { data } = await supabase
    .from("substances")
    .select("*")
    .eq("slug", slug)
    .single();

  return (
    <div className="pageContainer">
      {/* Titel */}
      <h1 className="text-3xl font-bold">{data?.name}</h1>

      {/* Kategorie */}
      <div className="text-sm text-gray-500">
        Kategorie: {data?.category}
      </div>

      {/* Wirkstoff */}
      <div className="p-4 rounded-xl bg-gray-100">
        <h2 className="font-semibold mb-2">Wirkstoff</h2>
        <p>{data?.active_substance}</p>
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