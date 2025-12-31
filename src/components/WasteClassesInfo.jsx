import { Package, GlassWater, Cog, FileText, Milk, Trash2, Leaf, Factory, Recycle } from "lucide-react";

const wasteClasses = [
  {
    name: "Cardboard",
    icon: Package,
    color: "from-amber-500/20 to-amber-600/10",
    borderColor: "border-amber-500/30",
    description: "Corrugated boxes, packaging materials, and cardboard sheets.",
    industries: ["Packaging Industry", "Paper Mills", "Furniture Manufacturing"],
    uses: ["New cardboard boxes", "Paperboard products", "Egg cartons", "Building insulation"]
  },
  {
    name: "Glass",
    icon: GlassWater,
    color: "from-sky-500/20 to-sky-600/10",
    borderColor: "border-sky-500/30",
    description: "Bottles, jars, and glass containers of all colors.",
    industries: ["Beverage Industry", "Construction", "Art & Crafts"],
    uses: ["New glass containers", "Fiberglass insulation", "Road construction", "Decorative tiles"]
  },
  {
    name: "Metal",
    icon: Cog,
    color: "from-slate-400/20 to-slate-500/10",
    borderColor: "border-slate-400/30",
    description: "Aluminum cans, steel containers, and metal scraps.",
    industries: ["Automotive Industry", "Construction", "Electronics"],
    uses: ["Car parts", "Building materials", "New cans", "Machinery components"]
  },
  {
    name: "Paper",
    icon: FileText,
    color: "from-emerald-500/20 to-emerald-600/10",
    borderColor: "border-emerald-500/30",
    description: "Newspapers, magazines, office paper, and paper bags.",
    industries: ["Publishing", "Packaging", "Hygiene Products"],
    uses: ["Recycled paper", "Tissue products", "Newsprint", "Cardboard boxes"]
  },
  {
    name: "Plastic",
    icon: Milk,
    color: "from-blue-500/20 to-blue-600/10",
    borderColor: "border-blue-500/30",
    description: "Bottles, containers, bags, and plastic packaging.",
    industries: ["Textile Industry", "Furniture", "Construction"],
    uses: ["Polyester fabric", "Plastic lumber", "Containers", "Playground equipment"]
  },
  {
    name: "Trash",
    icon: Trash2,
    color: "from-rose-500/20 to-rose-600/10",
    borderColor: "border-rose-500/30",
    description: "Non-recyclable waste that requires proper disposal.",
    industries: ["Waste Management", "Energy Production"],
    uses: ["Waste-to-energy plants", "Landfill management", "Composting (organic)", "Incineration"]
  }
];

const WasteClassesInfo = () => {
  return (
    <section className="mt-16">
      <div className="text-center mb-10">
        <div className="flex items-center justify-center gap-2 mb-3">
          <Leaf className="w-6 h-6 text-primary" />
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Waste Categories & Recycling</h2>
        </div>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Learn about different waste types and how they can be recycled and reused across various industries.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {wasteClasses.map((waste) => (
          <div
            key={waste.name}
            className={`bg-gradient-to-br ${waste.color} border ${waste.borderColor} rounded-xl p-5 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg`}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-card rounded-lg">
                <waste.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{waste.name}</h3>
            </div>
            
            <p className="text-sm text-muted-foreground mb-4">{waste.description}</p>
            
            <div className="space-y-3">
              <div>
                <div className="flex items-center gap-1.5 mb-1.5">
                  <Factory className="w-3.5 h-3.5 text-primary" />
                  <span className="text-xs font-medium text-foreground">Industries</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {waste.industries.map((industry) => (
                    <span
                      key={industry}
                      className="px-2 py-0.5 bg-secondary text-secondary-foreground text-xs rounded-full"
                    >
                      {industry}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <div className="flex items-center gap-1.5 mb-1.5">
                  <Recycle className="w-3.5 h-3.5 text-primary" />
                  <span className="text-xs font-medium text-foreground">Recycled Into</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {waste.uses.map((use) => (
                    <span
                      key={use}
                      className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                    >
                      {use}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Eco Message */}
      <div className="mt-10 p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl border border-primary/20 text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Leaf className="w-5 h-5 text-primary" />
          <span className="font-semibold text-foreground">Every Item Recycled Matters</span>
        </div>
        <p className="text-sm text-muted-foreground max-w-xl mx-auto">
          Proper waste classification helps reduce landfill waste, conserve natural resources, 
          and create a sustainable future for our planet. Start classifying your waste today!
        </p>
      </div>
    </section>
  );
};

export default WasteClassesInfo;
