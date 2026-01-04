import { Package, GlassWater, Cog, FileText, Milk, Trash2, Factory, Recycle, Leaf, Sparkles, CheckCircle, XCircle, ListChecks, Globe, ArrowRight } from "lucide-react";

const wasteClasses = {
  cardboard: {
    name: "Cardboard",
    icon: Package,
    color: "from-amber-500/20 to-amber-600/10",
    borderColor: "border-amber-500/30",
    iconBg: "bg-amber-500/10",
    recyclable: true,
    description: "Corrugated boxes, packaging materials, and cardboard sheets.",
    industries: ["Packaging Industry", "Paper Mills", "Furniture Manufacturing"],
    uses: ["New cardboard boxes", "Paperboard products", "Egg cartons", "Building insulation"],
    recyclingSteps: [
      "Remove any tape, staples, or plastic packaging",
      "Flatten all cardboard boxes to save space",
      "Keep cardboard dry - wet cardboard cannot be recycled",
      "Place in recycling bin or take to local recycling center"
    ],
    realWorldUses: [
      { product: "Cereal Boxes", description: "Made from 100% recycled cardboard" },
      { product: "Shoe Boxes", description: "Recycled cardboard reduces manufacturing costs" },
      { product: "Paper Towel Rolls", description: "Inner tubes from recycled cardboard" }
    ],
    environmentalImpact: {
      stat: "1 ton of recycled cardboard saves 17 trees",
      details: "Also saves 7,000 gallons of water and 4,100 kWh of energy"
    }
  },
  glass: {
    name: "Glass",
    icon: GlassWater,
    color: "from-sky-500/20 to-sky-600/10",
    borderColor: "border-sky-500/30",
    iconBg: "bg-sky-500/10",
    recyclable: true,
    description: "Bottles, jars, and glass containers of all colors.",
    industries: ["Beverage Industry", "Construction", "Art & Crafts"],
    uses: ["New glass containers", "Fiberglass insulation", "Road construction", "Decorative tiles"],
    recyclingSteps: [
      "Rinse containers to remove food residue",
      "Remove metal lids and caps (recycle separately)",
      "No need to remove paper labels",
      "Sort by color if required by your local facility"
    ],
    realWorldUses: [
      { product: "New Bottles", description: "Glass can be recycled infinitely" },
      { product: "Countertops", description: "Crushed glass creates beautiful surfaces" },
      { product: "Road Base", description: "Used as aggregate in road construction" }
    ],
    environmentalImpact: {
      stat: "Recycling glass reduces CO2 emissions by 50%",
      details: "Glass is 100% recyclable and can be recycled endlessly without quality loss"
    }
  },
  metal: {
    name: "Metal",
    icon: Cog,
    color: "from-slate-400/20 to-slate-500/10",
    borderColor: "border-slate-400/30",
    iconBg: "bg-slate-400/10",
    recyclable: true,
    description: "Aluminum cans, steel containers, and metal scraps.",
    industries: ["Automotive Industry", "Construction", "Electronics"],
    uses: ["Car parts", "Building materials", "New cans", "Machinery components"],
    recyclingSteps: [
      "Empty and rinse containers",
      "Crush cans to save space (optional)",
      "Separate aluminum from steel if possible",
      "Remove any non-metal attachments"
    ],
    realWorldUses: [
      { product: "Beverage Cans", description: "Can be back on shelves in 60 days" },
      { product: "Car Parts", description: "75% of all aluminum ever made is still in use" },
      { product: "Aircraft Components", description: "Recycled aluminum maintains full strength" }
    ],
    environmentalImpact: {
      stat: "Recycling aluminum saves 95% of energy",
      details: "Making new aluminum from recycled cans uses 95% less energy than from raw materials"
    }
  },
  paper: {
    name: "Paper",
    icon: FileText,
    color: "from-emerald-500/20 to-emerald-600/10",
    borderColor: "border-emerald-500/30",
    iconBg: "bg-emerald-500/10",
    recyclable: true,
    description: "Newspapers, magazines, office paper, and paper bags.",
    industries: ["Publishing", "Packaging", "Hygiene Products"],
    uses: ["Recycled paper", "Tissue products", "Newsprint", "Cardboard boxes"],
    recyclingSteps: [
      "Remove any plastic windows or coatings",
      "Keep paper clean and dry",
      "Shred confidential documents before recycling",
      "Bundle newspapers and magazines together"
    ],
    realWorldUses: [
      { product: "Newspapers", description: "Often contain 40% recycled content" },
      { product: "Toilet Paper", description: "Made from recycled office paper" },
      { product: "Egg Cartons", description: "Molded from recycled paper pulp" }
    ],
    environmentalImpact: {
      stat: "Each ton of recycled paper saves 3.3 cubic yards of landfill",
      details: "Also conserves 17 trees, 380 gallons of oil, and 7,000 gallons of water"
    }
  },
  plastic: {
    name: "Plastic",
    icon: Milk,
    color: "from-blue-500/20 to-blue-600/10",
    borderColor: "border-blue-500/30",
    iconBg: "bg-blue-500/10",
    recyclable: true,
    description: "Bottles, containers, bags, and plastic packaging.",
    industries: ["Textile Industry", "Furniture", "Construction"],
    uses: ["Polyester fabric", "Plastic lumber", "Containers", "Playground equipment"],
    recyclingSteps: [
      "Check the recycling number (1-7) on the bottom",
      "Rinse containers to remove food residue",
      "Remove caps and lids (often different plastic type)",
      "Flatten bottles to save space"
    ],
    realWorldUses: [
      { product: "Fleece Jackets", description: "25 recycled bottles make 1 jacket" },
      { product: "Outdoor Furniture", description: "Durable plastic lumber from recycled plastic" },
      { product: "Carpeting", description: "PET bottles become carpet fibers" }
    ],
    environmentalImpact: {
      stat: "Recycling 1 plastic bottle saves enough energy to power a light bulb for 3 hours",
      details: "Only 9% of plastic ever made has been recycled - every bottle counts"
    }
  },
  trash: {
    name: "Trash",
    icon: Trash2,
    color: "from-rose-500/20 to-rose-600/10",
    borderColor: "border-rose-500/30",
    iconBg: "bg-rose-500/10",
    recyclable: false,
    description: "Non-recyclable waste that requires proper disposal.",
    industries: ["Waste Management", "Energy Production"],
    uses: ["Waste-to-energy plants", "Landfill management", "Composting (organic)", "Incineration"],
    recyclingSteps: [
      "Double-check if any components can be recycled",
      "Separate any organic waste for composting",
      "Place in general waste bin",
      "Consider if the item can be repaired or donated"
    ],
    realWorldUses: [
      { product: "Electricity", description: "Waste-to-energy plants generate power" },
      { product: "Landfill Gas", description: "Captured methane powers generators" },
      { product: "Compost", description: "Organic waste becomes nutrient-rich soil" }
    ],
    environmentalImpact: {
      stat: "Reducing waste is better than any disposal method",
      details: "Consider the 5 R's: Refuse, Reduce, Reuse, Repurpose, then Recycle"
    }
  }
};

const WasteClassDetails = ({ predictedClass, uploadedImage }) => {
  if (!predictedClass) {
    return (
      <div className="mt-8 p-6 bg-card border border-border rounded-xl text-center">
        <div className="p-3 bg-muted rounded-full w-fit mx-auto mb-4">
          <Sparkles className="w-6 h-6 text-muted-foreground" />
        </div>
        <h3 className="text-lg font-medium text-foreground mb-2">Recycling Information</h3>
        <p className="text-sm text-muted-foreground">
          Upload an image to see detailed recycling information and industry uses for the identified waste type.
        </p>
      </div>
    );
  }

  const waste = wasteClasses[predictedClass.toLowerCase()];

  if (!waste) {
    return null;
  }

  const IconComponent = waste.icon;

  return (
    <div className="mt-8 space-y-6">
      {/* Header with Image and Classification */}
      <div className={`bg-gradient-to-br ${waste.color} border ${waste.borderColor} rounded-xl p-6 transition-all duration-500 animate-fade-in`}>
        <div className="flex flex-col md:flex-row gap-6">
          {/* Uploaded Image Section */}
          {uploadedImage && (
            <div className="relative flex-shrink-0">
              <div className="w-full md:w-48 h-48 rounded-lg overflow-hidden border-2 border-border/50">
                <img 
                  src={uploadedImage} 
                  alt="Analyzed waste" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className={`absolute -bottom-2 -right-2 px-3 py-1.5 rounded-full text-sm font-medium flex items-center gap-1.5 ${
                waste.recyclable 
                  ? 'bg-green-500 text-white' 
                  : 'bg-rose-500 text-white'
              }`}>
                {waste.recyclable ? (
                  <>
                    <CheckCircle className="w-4 h-4" />
                    Recyclable
                  </>
                ) : (
                  <>
                    <XCircle className="w-4 h-4" />
                    Non-Recyclable
                  </>
                )}
              </div>
            </div>
          )}
          
          {/* Classification Info */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <div className={`p-3 ${waste.iconBg} rounded-xl`}>
                <IconComponent className="w-6 h-6 text-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">{waste.name}</h3>
                <p className="text-sm text-muted-foreground">Identified Waste Category</p>
              </div>
            </div>
            <p className="text-muted-foreground">{waste.description}</p>
          </div>
        </div>
      </div>

      {/* How to Recycle Section */}
      <div className="bg-card border border-border rounded-xl p-6 animate-fade-in" style={{ animationDelay: '100ms' }}>
        <div className="flex items-center gap-2 mb-4">
          <ListChecks className="w-5 h-5 text-primary" />
          <h4 className="text-lg font-semibold text-foreground">How to Recycle</h4>
        </div>
        <div className="space-y-3">
          {waste.recyclingSteps.map((step, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-medium flex items-center justify-center">
                {index + 1}
              </div>
              <p className="text-muted-foreground">{step}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Industries and Recycled Products Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Industries Section */}
        <div className="bg-card border border-border rounded-xl p-6 animate-fade-in" style={{ animationDelay: '200ms' }}>
          <div className="flex items-center gap-2 mb-4">
            <Factory className="w-5 h-5 text-primary" />
            <h4 className="text-lg font-semibold text-foreground">Where It's Used</h4>
          </div>
          <div className="space-y-2">
            {waste.industries.map((industry) => (
              <div
                key={industry}
                className="flex items-center gap-2 px-3 py-2 bg-secondary rounded-lg"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-sm text-secondary-foreground">{industry}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Recycled Into Section */}
        <div className="bg-card border border-border rounded-xl p-6 animate-fade-in" style={{ animationDelay: '250ms' }}>
          <div className="flex items-center gap-2 mb-4">
            <Recycle className="w-5 h-5 text-primary" />
            <h4 className="text-lg font-semibold text-foreground">Recycled Into</h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {waste.uses.map((use) => (
              <span
                key={use}
                className="px-3 py-1.5 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
              >
                {use}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Real World Applications */}
      <div className="bg-card border border-border rounded-xl p-6 animate-fade-in" style={{ animationDelay: '300ms' }}>
        <div className="flex items-center gap-2 mb-4">
          <ArrowRight className="w-5 h-5 text-primary" />
          <h4 className="text-lg font-semibold text-foreground">Real-World Applications</h4>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {waste.realWorldUses.map((item, index) => (
            <div key={index} className="bg-secondary/50 rounded-lg p-4 border border-border/50">
              <h5 className="font-medium text-foreground mb-1">{item.product}</h5>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Environmental Impact */}
      <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/5 border border-green-500/20 rounded-xl p-6 animate-fade-in" style={{ animationDelay: '350ms' }}>
        <div className="flex items-center gap-2 mb-4">
          <Globe className="w-5 h-5 text-green-600" />
          <h4 className="text-lg font-semibold text-foreground">Environmental Impact</h4>
        </div>
        <p className="text-lg font-medium text-foreground mb-2">{waste.environmentalImpact.stat}</p>
        <p className="text-muted-foreground">{waste.environmentalImpact.details}</p>
      </div>

      {/* Eco tip */}
      <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg border border-primary/10 animate-fade-in" style={{ animationDelay: '400ms' }}>
        <Leaf className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
        <p className="text-sm text-muted-foreground">
          {predictedClass.toLowerCase() === 'trash' 
            ? "While this item may not be recyclable, consider if any parts can be separated for recycling or if it can be repurposed."
            : `Recycling ${waste.name.toLowerCase()} helps conserve natural resources and reduces landfill waste. Make sure to clean and sort before recycling!`
          }
        </p>
      </div>
    </div>
  );
};

export default WasteClassDetails;
