export const substances = [
  // 🟢 Cannabinoide
  {
    name: "Cannabis",
    image: "https://imgs.search.brave.com/1nRJl5jKWvyvzkCnksNJ5GH9TtYGPoHGBUosYTLR7SE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvODc3/MTg3OTE0L2RlL2Zv/dG8vbG92ZS10YWJs/ZXR0ZS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9RlU0TUVu/RHhic0xuWXpOWWxS/VlhjdEUtak1tTGtM/eUlleWhZMDNLc3Fi/TT0",
    slug: "cannabis",
    category: "Cannabinoid",
    activeSubstance: "THC (Tetrahydrocannabinol)"
  },

  // 🔵 Depressiva
  {
    name: "Alkohol",
    image: "https://imgs.search.brave.com/1nRJl5jKWvyvzkCnksNJ5GH9TtYGPoHGBUosYTLR7SE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvODc3/MTg3OTE0L2RlL2Zv/dG8vbG92ZS10YWJs/ZXR0ZS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9RlU0TUVu/RHhic0xuWXpOWWxS/VlhjdEUtak1tTGtM/eUlleWhZMDNLc3Fi/TT0",
    slug: "alkohol",
    category: "Depressivum",
    activeSubstance: "Ethanol"
  },
  {
    name: "Benzodiazepine",
    image: "https://imgs.search.brave.com/1nRJl5jKWvyvzkCnksNJ5GH9TtYGPoHGBUosYTLR7SE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvODc3/MTg3OTE0L2RlL2Zv/dG8vbG92ZS10YWJs/ZXR0ZS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9RlU0TUVu/RHhic0xuWXpOWWxS/VlhjdEUtak1tTGtM/eUlleWhZMDNLc3Fi/TT0",
    slug: "benzodiazepine",
    category: "Depressivum",
    activeSubstance: "z. B. Diazepam"
  },
  {
    name: "GHB / GBL",
    image: "https://imgs.search.brave.com/1nRJl5jKWvyvzkCnksNJ5GH9TtYGPoHGBUosYTLR7SE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvODc3/MTg3OTE0L2RlL2Zv/dG8vbG92ZS10YWJs/ZXR0ZS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9RlU0TUVu/RHhic0xuWXpOWWxS/VlhjdEUtak1tTGtM/eUlleWhZMDNLc3Fi/TT0",
    slug: "ghb-gbl",
    category: "Depressivum",
    activeSubstance: "Gamma-Hydroxybuttersäure"
  },

  // 🔴 Stimulanzien
  {
    name: "Kokain",
    image: "https://imgs.search.brave.com/1nRJl5jKWvyvzkCnksNJ5GH9TtYGPoHGBUosYTLR7SE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvODc3/MTg3OTE0L2RlL2Zv/dG8vbG92ZS10YWJs/ZXR0ZS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9RlU0TUVu/RHhic0xuWXpOWWxS/VlhjdEUtak1tTGtM/eUlleWhZMDNLc3Fi/TT0",
    slug: "kokain",
    category: "Stimulans",
    activeSubstance: "Kokainhydrochlorid"
  },
  {
    name: "Amphetamin",
    extra: "(Speed)",
    image: "https://imgs.search.brave.com/1nRJl5jKWvyvzkCnksNJ5GH9TtYGPoHGBUosYTLR7SE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvODc3/MTg3OTE0L2RlL2Zv/dG8vbG92ZS10YWJs/ZXR0ZS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9RlU0TUVu/RHhic0xuWXpOWWxS/VlhjdEUtak1tTGtM/eUlleWhZMDNLc3Fi/TT0",
    slug: "amphetamin",
    category: "Stimulans",
    activeSubstance: "Amphetamin"
  },
  {
    name: "Methamphetamin",
    extra: "(Crystal Meth)",
    image: "https://imgs.search.brave.com/1nRJl5jKWvyvzkCnksNJ5GH9TtYGPoHGBUosYTLR7SE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvODc3/MTg3OTE0L2RlL2Zv/dG8vbG92ZS10YWJs/ZXR0ZS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9RlU0TUVu/RHhic0xuWXpOWWxS/VlhjdEUtak1tTGtM/eUlleWhZMDNLc3Fi/TT0",
    slug: "methamphetamin",
    category: "Stimulans",
    activeSubstance: "Methamphetamin"
  },
  {
    name: "MDMA",
    extra: "(Ecstasy)",
    image: "https://imgs.search.brave.com/1nRJl5jKWvyvzkCnksNJ5GH9TtYGPoHGBUosYTLR7SE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvODc3/MTg3OTE0L2RlL2Zv/dG8vbG92ZS10YWJs/ZXR0ZS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9RlU0TUVu/RHhic0xuWXpOWWxS/VlhjdEUtak1tTGtM/eUlleWhZMDNLc3Fi/TT0",
    slug: "mdma",
    category: "Stimulans",
    activeSubstance: "MDMA"
  },

  // 🟣 Halluzinogene
  {
    name: "LSD",
    image: "https://imgs.search.brave.com/1nRJl5jKWvyvzkCnksNJ5GH9TtYGPoHGBUosYTLR7SE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvODc3/MTg3OTE0L2RlL2Zv/dG8vbG92ZS10YWJs/ZXR0ZS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9RlU0TUVu/RHhic0xuWXpOWWxS/VlhjdEUtak1tTGtM/eUlleWhZMDNLc3Fi/TT0",
    slug: "lsd",
    category: "Halluzinogen",
    activeSubstance: "Lysergsäurediethylamid"
  },
  {
    name: "Psilocybin",
    extra: "(Magic Mushrooms)",
    image: "https://imgs.search.brave.com/1nRJl5jKWvyvzkCnksNJ5GH9TtYGPoHGBUosYTLR7SE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvODc3/MTg3OTE0L2RlL2Zv/dG8vbG92ZS10YWJs/ZXR0ZS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9RlU0TUVu/RHhic0xuWXpOWWxS/VlhjdEUtak1tTGtM/eUlleWhZMDNLc3Fi/TT0",
    slug: "psilocybin",
    category: "Halluzinogen",
    activeSubstance: "Psilocybin"
  },

  // 🟠 Dissoziativa
  {
    name: "Ketamin",
    image: "https://imgs.search.brave.com/1nRJl5jKWvyvzkCnksNJ5GH9TtYGPoHGBUosYTLR7SE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvODc3/MTg3OTE0L2RlL2Zv/dG8vbG92ZS10YWJs/ZXR0ZS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9RlU0TUVu/RHhic0xuWXpOWWxS/VlhjdEUtak1tTGtM/eUlleWhZMDNLc3Fi/TT0",
    slug: "ketamin",
    category: "Dissoziativum",
    activeSubstance: "Ketamin"
  },
  {
    name: "DXM",
    image: "https://imgs.search.brave.com/1nRJl5jKWvyvzkCnksNJ5GH9TtYGPoHGBUosYTLR7SE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvODc3/MTg3OTE0L2RlL2Zv/dG8vbG92ZS10YWJs/ZXR0ZS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9RlU0TUVu/RHhic0xuWXpOWWxS/VlhjdEUtak1tTGtM/eUlleWhZMDNLc3Fi/TT0",
    slug: "dxm",
    category: "Dissoziativum",
    activeSubstance: "Dextromethorphan"
  },

  // ⚫ Opioide
  {
    name: "Heroin",
    image: "https://imgs.search.brave.com/1nRJl5jKWvyvzkCnksNJ5GH9TtYGPoHGBUosYTLR7SE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvODc3/MTg3OTE0L2RlL2Zv/dG8vbG92ZS10YWJs/ZXR0ZS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9RlU0TUVu/RHhic0xuWXpOWWxS/VlhjdEUtak1tTGtM/eUlleWhZMDNLc3Fi/TT0",
    slug: "heroin",
    category: "Opioid",
    activeSubstance: "Diacetylmorphin"
  },
  {
    name: "Morphin",
    image: "https://imgs.search.brave.com/1nRJl5jKWvyvzkCnksNJ5GH9TtYGPoHGBUosYTLR7SE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvODc3/MTg3OTE0L2RlL2Zv/dG8vbG92ZS10YWJs/ZXR0ZS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9RlU0TUVu/RHhic0xuWXpOWWxS/VlhjdEUtak1tTGtM/eUlleWhZMDNLc3Fi/TT0",
    slug: "morphin",
    category: "Opioid",
    activeSubstance: "Morphin"
  },
  {
    name: "Fentanyl",
    image: "https://imgs.search.brave.com/1nRJl5jKWvyvzkCnksNJ5GH9TtYGPoHGBUosYTLR7SE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvODc3/MTg3OTE0L2RlL2Zv/dG8vbG92ZS10YWJs/ZXR0ZS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9RlU0TUVu/RHhic0xuWXpOWWxS/VlhjdEUtak1tTGtM/eUlleWhZMDNLc3Fi/TT0",
    slug: "fentanyl",
    category: "Opioid",
    activeSubstance: "Fentanyl"
  },

  // 🧪 NPS (Neue psychoaktive Substanzen)
  {
    name: "Spice",
    extra: "(synthetische Cannabinoide)",
    image: "https://imgs.search.brave.com/1nRJl5jKWvyvzkCnksNJ5GH9TtYGPoHGBUosYTLR7SE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvODc3/MTg3OTE0L2RlL2Zv/dG8vbG92ZS10YWJs/ZXR0ZS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9RlU0TUVu/RHhic0xuWXpOWWxS/VlhjdEUtak1tTGtM/eUlleWhZMDNLc3Fi/TT0",
    slug: "spice",
    category: "NPS",
    activeSubstance: "synthetische Cannabinoide"
  },
  {
    name: "Badesalze",
    extra: "(synthetische Cannabinoide)",
    image: "https://imgs.search.brave.com/1nRJl5jKWvyvzkCnksNJ5GH9TtYGPoHGBUosYTLR7SE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvODc3/MTg3OTE0L2RlL2Zv/dG8vbG92ZS10YWJs/ZXR0ZS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9RlU0TUVu/RHhic0xuWXpOWWxS/VlhjdEUtak1tTGtM/eUlleWhZMDNLc3Fi/TT0",
    slug: "badesalze",
    category: "NPS",
    activeSubstance: "z. B. Mephedron"
  }
];