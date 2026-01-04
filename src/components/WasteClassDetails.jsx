import { 
  Package, GlassWater, Cog, FileText, Milk, Trash2, Factory, Recycle, Leaf, 
  Sparkles, CheckCircle, XCircle, ListChecks, Globe, ArrowRight, Lightbulb,
  Clock, Repeat, Trophy, TreePine, Droplets, Zap, Wind, MapPin, Scissors,
  Box, ScrollText, Egg, BookOpen, Sofa, Truck, Building, ShoppingBag, Shirt,
  Car, Plane, Info
} from "lucide-react";

const wasteClasses = {
  cardboard: {
    name: "Cardboard",
    icon: Package,
    color: "from-amber-500/20 to-amber-600/10",
    borderColor: "border-amber-500/30",
    iconBg: "bg-amber-500/10",
    recyclable: true,
    grade: "A",
    description: "Corrugated boxes, packaging materials, and cardboard sheets.",
    quickFacts: [
      { text: "Can be recycled up to 7 times", icon: Repeat, highlight: "7x" },
      { text: "Takes only 2 months to decompose", icon: Clock, highlight: "2 months" },
      { text: "Most recycled material in the US", icon: Trophy, highlight: "#1" }
    ],
    industries: ["Packaging Industry", "Paper Mills", "Furniture Manufacturing"],
    uses: ["New cardboard boxes", "Paperboard products", "Egg cartons", "Building insulation"],
    recyclingSteps: [
      { step: "Remove any tape, staples, or plastic packaging", icon: Scissors, tip: "Use warm water to soften adhesive tape", time: "2-3 min" },
      { step: "Flatten all cardboard boxes to save space", icon: Box, tip: "Saves up to 75% storage space in your bin", time: "1 min" },
      { step: "Keep cardboard dry - wet cardboard cannot be recycled", icon: Droplets, tip: "Store indoors if rain is expected", time: "—" },
      { step: "Place in recycling bin or take to local recycling center", icon: Truck, tip: "Check local collection schedules", time: "—" }
    ],
    recyclingJourney: [
      { stage: "Collection", description: "Picked up from your recycling bin", icon: Truck },
      { stage: "Sorting", description: "Separated at material recovery facility", icon: Building },
      { stage: "Processing", description: "Pulped with water, cleaned of ink", icon: Droplets },
      { stage: "Manufacturing", description: "Pressed into new cardboard sheets", icon: Factory },
      { stage: "New Product", description: "Back in stores as new packaging", icon: ShoppingBag }
    ],
    realWorldUses: [
      { product: "Cereal Boxes", category: "Food Packaging", icon: Package, description: "Made from 100% recycled cardboard" },
      { product: "Shoe Boxes", category: "Retail", icon: Box, description: "Recycled cardboard reduces costs" },
      { product: "Paper Towel Rolls", category: "Household", icon: ScrollText, description: "Inner tubes from recycled cardboard" },
      { product: "Egg Cartons", category: "Food Packaging", icon: Egg, description: "Molded from recycled pulp" },
      { product: "Book Covers", category: "Publishing", icon: BookOpen, description: "Hardcovers use recycled board" },
      { product: "Furniture Padding", category: "Manufacturing", icon: Sofa, description: "Protective packaging material" }
    ],
    environmentalStats: [
      { label: "Trees Saved", value: "17", icon: TreePine, unit: "per ton", color: "text-green-600" },
      { label: "Water Saved", value: "7,000", icon: Droplets, unit: "gallons", color: "text-blue-500" },
      { label: "Energy Saved", value: "4,100", icon: Zap, unit: "kWh", color: "text-yellow-500" },
      { label: "CO₂ Reduced", value: "1.5", icon: Wind, unit: "tons", color: "text-emerald-600" }
    ],
    disposalInfo: {
      binType: "Blue recycling bin",
      binColor: "bg-blue-500",
      specialNotes: "Keep dry - wet cardboard should go in compost",
      prepRequired: true
    },
    comparison: {
      decompositionTime: "2 months in landfill",
      recyclingRate: "92% recyclable",
      energySavings: "75% less energy than new production"
    }
  },
  glass: {
    name: "Glass",
    icon: GlassWater,
    color: "from-sky-500/20 to-sky-600/10",
    borderColor: "border-sky-500/30",
    iconBg: "bg-sky-500/10",
    recyclable: true,
    grade: "A+",
    description: "Bottles, jars, and glass containers of all colors.",
    quickFacts: [
      { text: "100% recyclable infinitely", icon: Repeat, highlight: "∞" },
      { text: "Takes 1 million years to decompose", icon: Clock, highlight: "1M years" },
      { text: "One of the oldest recyclable materials", icon: Trophy, highlight: "Ancient" }
    ],
    industries: ["Beverage Industry", "Construction", "Art & Crafts"],
    uses: ["New glass containers", "Fiberglass insulation", "Road construction", "Decorative tiles"],
    recyclingSteps: [
      { step: "Rinse containers to remove food residue", icon: Droplets, tip: "A quick rinse is enough, no need for soap", time: "1 min" },
      { step: "Remove metal lids and caps (recycle separately)", icon: Scissors, tip: "Metal caps go in metal recycling", time: "30 sec" },
      { step: "No need to remove paper labels", icon: ScrollText, tip: "Labels burn off during processing", time: "—" },
      { step: "Sort by color if required by your local facility", icon: Box, tip: "Clear, green, and brown are common categories", time: "1 min" }
    ],
    recyclingJourney: [
      { stage: "Collection", description: "Collected from recycling bins", icon: Truck },
      { stage: "Sorting", description: "Separated by color and type", icon: Building },
      { stage: "Crushing", description: "Broken into small pieces called cullet", icon: Factory },
      { stage: "Melting", description: "Heated to 2,800°F to form molten glass", icon: Zap },
      { stage: "Molding", description: "Shaped into new containers", icon: GlassWater }
    ],
    realWorldUses: [
      { product: "New Bottles", category: "Beverages", icon: GlassWater, description: "Glass recycled infinitely" },
      { product: "Countertops", category: "Home Decor", icon: Box, description: "Crushed glass surfaces" },
      { product: "Road Base", category: "Construction", icon: Truck, description: "Aggregate in roads" },
      { product: "Fiberglass", category: "Insulation", icon: Building, description: "Home insulation material" },
      { product: "Decorative Tiles", category: "Art", icon: Sparkles, description: "Beautiful mosaic tiles" },
      { product: "Sandblasting", category: "Industrial", icon: Factory, description: "Abrasive material" }
    ],
    environmentalStats: [
      { label: "CO₂ Reduced", value: "50%", icon: Wind, unit: "less emissions", color: "text-emerald-600" },
      { label: "Energy Saved", value: "30%", icon: Zap, unit: "per batch", color: "text-yellow-500" },
      { label: "Raw Materials", value: "100%", icon: Globe, unit: "conserved", color: "text-blue-500" },
      { label: "Landfill Space", value: "9%", icon: TreePine, unit: "reduced", color: "text-green-600" }
    ],
    disposalInfo: {
      binType: "Glass recycling bin or container",
      binColor: "bg-green-600",
      specialNotes: "Never put broken glass directly in bin - wrap safely first",
      prepRequired: true
    },
    comparison: {
      decompositionTime: "1 million+ years in landfill",
      recyclingRate: "100% recyclable",
      energySavings: "30% less energy than new production"
    }
  },
  metal: {
    name: "Metal",
    icon: Cog,
    color: "from-slate-400/20 to-slate-500/10",
    borderColor: "border-slate-400/30",
    iconBg: "bg-slate-400/10",
    recyclable: true,
    grade: "A",
    description: "Aluminum cans, steel containers, and metal scraps.",
    quickFacts: [
      { text: "Aluminum can be recycled forever", icon: Repeat, highlight: "Forever" },
      { text: "Can be back on shelf in 60 days", icon: Clock, highlight: "60 days" },
      { text: "75% of all aluminum ever made is still in use", icon: Trophy, highlight: "75%" }
    ],
    industries: ["Automotive Industry", "Construction", "Electronics"],
    uses: ["Car parts", "Building materials", "New cans", "Machinery components"],
    recyclingSteps: [
      { step: "Empty and rinse containers", icon: Droplets, tip: "Remove food residue to prevent contamination", time: "1 min" },
      { step: "Crush cans to save space (optional)", icon: Box, tip: "Crushed cans take up 80% less space", time: "30 sec" },
      { step: "Separate aluminum from steel if possible", icon: Cog, tip: "Use a magnet - steel sticks, aluminum doesn't", time: "1 min" },
      { step: "Remove any non-metal attachments", icon: Scissors, tip: "Plastic labels and caps should be removed", time: "1 min" }
    ],
    recyclingJourney: [
      { stage: "Collection", description: "Gathered from recycling points", icon: Truck },
      { stage: "Sorting", description: "Separated by metal type using magnets", icon: Cog },
      { stage: "Shredding", description: "Broken into small pieces", icon: Factory },
      { stage: "Melting", description: "Heated in large furnaces", icon: Zap },
      { stage: "Reforming", description: "Cast into new metal products", icon: Car }
    ],
    realWorldUses: [
      { product: "Beverage Cans", category: "Packaging", icon: Box, description: "Back on shelf in 60 days" },
      { product: "Car Parts", category: "Automotive", icon: Car, description: "Engine and body components" },
      { product: "Aircraft Components", category: "Aerospace", icon: Plane, description: "Maintains full strength" },
      { product: "Appliances", category: "Electronics", icon: Cog, description: "Washing machines, fridges" },
      { product: "Construction Steel", category: "Building", icon: Building, description: "Structural beams" },
      { product: "Bicycle Frames", category: "Transport", icon: Truck, description: "Lightweight and strong" }
    ],
    environmentalStats: [
      { label: "Energy Saved", value: "95%", icon: Zap, unit: "for aluminum", color: "text-yellow-500" },
      { label: "CO₂ Reduced", value: "9", icon: Wind, unit: "tons per ton", color: "text-emerald-600" },
      { label: "Water Saved", value: "40%", icon: Droplets, unit: "less used", color: "text-blue-500" },
      { label: "Landfill Saved", value: "100%", icon: TreePine, unit: "diversion", color: "text-green-600" }
    ],
    disposalInfo: {
      binType: "Metal recycling bin",
      binColor: "bg-gray-500",
      specialNotes: "Aerosol cans should be empty before recycling",
      prepRequired: true
    },
    comparison: {
      decompositionTime: "200-500 years in landfill",
      recyclingRate: "Infinitely recyclable",
      energySavings: "95% less energy than mining new ore"
    }
  },
  paper: {
    name: "Paper",
    icon: FileText,
    color: "from-emerald-500/20 to-emerald-600/10",
    borderColor: "border-emerald-500/30",
    iconBg: "bg-emerald-500/10",
    recyclable: true,
    grade: "A-",
    description: "Newspapers, magazines, office paper, and paper bags.",
    quickFacts: [
      { text: "Can be recycled 5-7 times", icon: Repeat, highlight: "5-7x" },
      { text: "Takes 2-6 weeks to decompose", icon: Clock, highlight: "2-6 weeks" },
      { text: "Most recycled material by weight", icon: Trophy, highlight: "By weight" }
    ],
    industries: ["Publishing", "Packaging", "Hygiene Products"],
    uses: ["Recycled paper", "Tissue products", "Newsprint", "Cardboard boxes"],
    recyclingSteps: [
      { step: "Remove any plastic windows or coatings", icon: Scissors, tip: "Window envelopes need the plastic removed", time: "1 min" },
      { step: "Keep paper clean and dry", icon: Droplets, tip: "Wet or greasy paper cannot be recycled", time: "—" },
      { step: "Shred confidential documents before recycling", icon: FileText, tip: "Shredded paper is still recyclable", time: "2 min" },
      { step: "Bundle newspapers and magazines together", icon: Box, tip: "Keep different paper types separate if possible", time: "1 min" }
    ],
    recyclingJourney: [
      { stage: "Collection", description: "Picked up from recycling bins", icon: Truck },
      { stage: "Sorting", description: "Separated by paper grade", icon: Building },
      { stage: "Pulping", description: "Mixed with water to create slurry", icon: Droplets },
      { stage: "De-inking", description: "Ink and impurities removed", icon: Sparkles },
      { stage: "Pressing", description: "Formed into new paper sheets", icon: FileText }
    ],
    realWorldUses: [
      { product: "Newspapers", category: "Publishing", icon: FileText, description: "40% recycled content" },
      { product: "Toilet Paper", category: "Hygiene", icon: ScrollText, description: "From office paper" },
      { product: "Egg Cartons", category: "Packaging", icon: Egg, description: "Molded paper pulp" },
      { product: "Paper Bags", category: "Retail", icon: ShoppingBag, description: "Shopping bags" },
      { product: "Notebooks", category: "Stationery", icon: BookOpen, description: "Recycled notebooks" },
      { product: "Packaging Material", category: "Shipping", icon: Package, description: "Protective packaging" }
    ],
    environmentalStats: [
      { label: "Trees Saved", value: "17", icon: TreePine, unit: "per ton", color: "text-green-600" },
      { label: "Water Saved", value: "7,000", icon: Droplets, unit: "gallons", color: "text-blue-500" },
      { label: "Oil Saved", value: "380", icon: Zap, unit: "gallons", color: "text-yellow-500" },
      { label: "Landfill Space", value: "3.3", icon: Wind, unit: "cubic yards", color: "text-emerald-600" }
    ],
    disposalInfo: {
      binType: "Paper recycling bin",
      binColor: "bg-blue-500",
      specialNotes: "Avoid recycling paper contaminated with food grease",
      prepRequired: true
    },
    comparison: {
      decompositionTime: "2-6 weeks in landfill",
      recyclingRate: "68% recycled nationally",
      energySavings: "70% less energy than virgin paper"
    }
  },
  plastic: {
    name: "Plastic",
    icon: Milk,
    color: "from-blue-500/20 to-blue-600/10",
    borderColor: "border-blue-500/30",
    iconBg: "bg-blue-500/10",
    recyclable: true,
    grade: "B+",
    description: "Bottles, containers, bags, and plastic packaging.",
    quickFacts: [
      { text: "Only 9% of plastic ever made is recycled", icon: Info, highlight: "9%" },
      { text: "Takes 450+ years to decompose", icon: Clock, highlight: "450+ years" },
      { text: "8 million tons enter oceans yearly", icon: Trophy, highlight: "8M tons" }
    ],
    industries: ["Textile Industry", "Furniture", "Construction"],
    uses: ["Polyester fabric", "Plastic lumber", "Containers", "Playground equipment"],
    recyclingSteps: [
      { step: "Check the recycling number (1-7) on the bottom", icon: Info, tip: "#1 and #2 plastics are most recyclable", time: "30 sec" },
      { step: "Rinse containers to remove food residue", icon: Droplets, tip: "Food contamination can ruin entire batches", time: "1 min" },
      { step: "Remove caps and lids (often different plastic type)", icon: Scissors, tip: "Check if your facility accepts caps separately", time: "30 sec" },
      { step: "Flatten bottles to save space", icon: Box, tip: "Leave labels on - they're removed during processing", time: "30 sec" }
    ],
    recyclingJourney: [
      { stage: "Collection", description: "Gathered from recycling bins", icon: Truck },
      { stage: "Sorting", description: "Separated by resin type (1-7)", icon: Building },
      { stage: "Shredding", description: "Cut into small flakes", icon: Factory },
      { stage: "Washing", description: "Cleaned and purified", icon: Droplets },
      { stage: "Pelletizing", description: "Melted into new pellets", icon: Box }
    ],
    realWorldUses: [
      { product: "Fleece Jackets", category: "Clothing", icon: Shirt, description: "25 bottles = 1 jacket" },
      { product: "Outdoor Furniture", category: "Home", icon: Sofa, description: "Durable plastic lumber" },
      { product: "Carpeting", category: "Flooring", icon: Box, description: "PET bottle fibers" },
      { product: "Playground Equipment", category: "Recreation", icon: Sparkles, description: "Safe and durable" },
      { product: "Containers", category: "Packaging", icon: Package, description: "New food containers" },
      { product: "Automotive Parts", category: "Transport", icon: Car, description: "Bumpers and panels" }
    ],
    environmentalStats: [
      { label: "Energy Saved", value: "66%", icon: Zap, unit: "vs new plastic", color: "text-yellow-500" },
      { label: "CO₂ Reduced", value: "1.5", icon: Wind, unit: "tons per ton", color: "text-emerald-600" },
      { label: "Oil Saved", value: "16", icon: Droplets, unit: "barrels per ton", color: "text-blue-500" },
      { label: "Landfill Space", value: "7.4", icon: TreePine, unit: "cubic yards", color: "text-green-600" }
    ],
    disposalInfo: {
      binType: "Plastic recycling bin",
      binColor: "bg-yellow-500",
      specialNotes: "Only recycle #1 and #2 plastics unless your facility accepts more",
      prepRequired: true
    },
    comparison: {
      decompositionTime: "450+ years in landfill",
      recyclingRate: "9% recycled globally",
      energySavings: "66% less energy than new plastic"
    }
  },
  trash: {
    name: "Trash",
    icon: Trash2,
    color: "from-rose-500/20 to-rose-600/10",
    borderColor: "border-rose-500/30",
    iconBg: "bg-rose-500/10",
    recyclable: false,
    grade: "N/A",
    description: "Non-recyclable waste that requires proper disposal.",
    quickFacts: [
      { text: "Average person generates 4.5 lbs daily", icon: Info, highlight: "4.5 lbs" },
      { text: "Only 34% of waste is recycled in US", icon: Clock, highlight: "34%" },
      { text: "Reducing is better than recycling", icon: Trophy, highlight: "Reduce" }
    ],
    industries: ["Waste Management", "Energy Production"],
    uses: ["Waste-to-energy plants", "Landfill management", "Composting (organic)", "Incineration"],
    recyclingSteps: [
      { step: "Double-check if any components can be recycled", icon: Info, tip: "Many items have recyclable parts", time: "2 min" },
      { step: "Separate any organic waste for composting", icon: Leaf, tip: "Food scraps and yard waste can be composted", time: "1 min" },
      { step: "Place in general waste bin", icon: Trash2, tip: "Tie bags securely to prevent spills", time: "30 sec" },
      { step: "Consider if the item can be repaired or donated", icon: Repeat, tip: "Extend product life before disposal", time: "—" }
    ],
    recyclingJourney: [
      { stage: "Collection", description: "Picked up by waste services", icon: Truck },
      { stage: "Transfer", description: "Taken to transfer station", icon: Building },
      { stage: "Processing", description: "Sorted for any recyclables", icon: Factory },
      { stage: "Disposal", description: "Sent to landfill or incinerator", icon: Globe },
      { stage: "Management", description: "Long-term site management", icon: TreePine }
    ],
    realWorldUses: [
      { product: "Electricity", category: "Energy", icon: Zap, description: "Waste-to-energy plants" },
      { product: "Landfill Gas", category: "Energy", icon: Wind, description: "Captured methane power" },
      { product: "Compost", category: "Gardening", icon: Leaf, description: "Nutrient-rich soil" },
      { product: "Construction Fill", category: "Building", icon: Building, description: "Inert waste fill" },
      { product: "Art Materials", category: "Creative", icon: Sparkles, description: "Upcycled art" },
      { product: "Learning Tools", category: "Education", icon: BookOpen, description: "Waste awareness" }
    ],
    environmentalStats: [
      { label: "Daily Waste", value: "4.5", icon: Trash2, unit: "lbs/person", color: "text-rose-500" },
      { label: "Landfill Methane", value: "14%", icon: Wind, unit: "of emissions", color: "text-amber-600" },
      { label: "Recovery Rate", value: "34%", icon: Recycle, unit: "recycled", color: "text-blue-500" },
      { label: "Reduce Goal", value: "50%", icon: TreePine, unit: "by 2030", color: "text-green-600" }
    ],
    disposalInfo: {
      binType: "General waste bin",
      binColor: "bg-gray-700",
      specialNotes: "Consider the 5 R's: Refuse, Reduce, Reuse, Repurpose, Recycle",
      prepRequired: false
    },
    comparison: {
      decompositionTime: "Varies by material",
      recyclingRate: "Not recyclable",
      energySavings: "Prevention is the best strategy"
    }
  }
};

const SectionHeader = ({ number, title, icon: Icon, subtitle }) => (
  <div className="flex items-center gap-4 mb-6">
    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary font-bold text-lg">
      {number}
    </div>
    <div className="flex-1">
      <div className="flex items-center gap-2">
        <Icon className="w-5 h-5 text-primary" />
        <h4 className="text-lg font-semibold text-foreground">{title}</h4>
      </div>
      {subtitle && <p className="text-sm text-muted-foreground mt-0.5">{subtitle}</p>}
    </div>
  </div>
);

const SectionDivider = () => (
  <div className="flex items-center gap-4 my-8">
    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    <Leaf className="w-4 h-4 text-primary/40" />
    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
  </div>
);

const WasteClassDetails = ({ predictedClass, uploadedImage }) => {
  if (!predictedClass) {
    return (
      <div className="mt-8 p-8 bg-card border border-border rounded-xl text-center">
        <div className="p-4 bg-muted rounded-full w-fit mx-auto mb-4">
          <Sparkles className="w-8 h-8 text-muted-foreground" />
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2">Recycling Information</h3>
        <p className="text-muted-foreground max-w-md mx-auto">
          Upload an image to see detailed recycling information, environmental impact, and industry uses for the identified waste type.
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
      {/* Section 1: Analysis Result Header */}
      <div className={`bg-gradient-to-br ${waste.color} border ${waste.borderColor} rounded-2xl p-6 transition-all duration-500 animate-fade-in`}>
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Uploaded Image with Confidence Ring */}
          {uploadedImage && (
            <div className="relative flex-shrink-0">
              <div className="w-full lg:w-56 h-56 rounded-xl overflow-hidden border-4 border-background shadow-lg relative">
                <img 
                  src={uploadedImage} 
                  alt="Analyzed waste" 
                  className="w-full h-full object-cover"
                />
                {/* Decorative corner badge */}
                <div className="absolute top-2 left-2 px-2 py-1 rounded-md bg-background/90 backdrop-blur-sm text-xs font-medium text-foreground">
                  Your Image
                </div>
              </div>
              {/* Recyclability badge */}
              <div className={`absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 shadow-lg ${
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
          <div className="flex-1 pt-2">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className={`p-4 ${waste.iconBg} rounded-2xl`}>
                  <IconComponent className="w-8 h-8 text-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{waste.name}</h3>
                  <p className="text-sm text-muted-foreground">Identified Waste Category</p>
                </div>
              </div>
              {/* Grade badge */}
              <div className="px-4 py-2 bg-background/80 backdrop-blur-sm rounded-xl border border-border/50">
                <div className="text-xs text-muted-foreground">Grade</div>
                <div className="text-2xl font-bold text-primary">{waste.grade}</div>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">{waste.description}</p>
            
            {/* Quick Stats Bar */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-background/60 backdrop-blur-sm rounded-lg px-3 py-2 text-center border border-border/30">
                <div className="text-xs text-muted-foreground">Decomposition</div>
                <div className="text-sm font-semibold text-foreground">{waste.comparison.decompositionTime.split(' ')[0]}</div>
              </div>
              <div className="bg-background/60 backdrop-blur-sm rounded-lg px-3 py-2 text-center border border-border/30">
                <div className="text-xs text-muted-foreground">Recyclability</div>
                <div className="text-sm font-semibold text-foreground">{waste.comparison.recyclingRate.split(' ')[0]}</div>
              </div>
              <div className="bg-background/60 backdrop-blur-sm rounded-lg px-3 py-2 text-center border border-border/30">
                <div className="text-xs text-muted-foreground">Energy Savings</div>
                <div className="text-sm font-semibold text-foreground">{waste.comparison.energySavings.split(' ')[0]}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SectionDivider />

      {/* Section 2: Quick Facts */}
      <div className="animate-fade-in" style={{ animationDelay: '100ms' }}>
        <SectionHeader number="1" title="Quick Facts" icon={Lightbulb} subtitle="Key information about this material" />
        <div className="grid gap-4 md:grid-cols-3">
          {waste.quickFacts.map((fact, index) => {
            const FactIcon = fact.icon;
            return (
              <div key={index} className="bg-card border border-border rounded-xl p-5 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <FactIcon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-2xl font-bold text-primary">{fact.highlight}</span>
                </div>
                <p className="text-sm text-muted-foreground">{fact.text}</p>
              </div>
            );
          })}
        </div>
      </div>

      <SectionDivider />

      {/* Section 3: How to Recycle */}
      <div className="animate-fade-in" style={{ animationDelay: '150ms' }}>
        <SectionHeader number="2" title="How to Recycle" icon={ListChecks} subtitle="Step-by-step preparation guide" />
        <div className="space-y-4">
          {waste.recyclingSteps.map((stepData, index) => {
            const StepIcon = stepData.icon;
            return (
              <div key={index} className="bg-card border border-border rounded-xl p-5 hover:border-primary/30 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <StepIcon className="w-4 h-4 text-muted-foreground" />
                        <span className="font-medium text-foreground">{stepData.step}</span>
                      </div>
                      {stepData.time !== "—" && (
                        <span className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground">
                          <Clock className="w-3 h-3 inline mr-1" />
                          {stepData.time}
                        </span>
                      )}
                    </div>
                    <div className="flex items-start gap-2 mt-2 p-3 bg-primary/5 rounded-lg border border-primary/10">
                      <Lightbulb className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{stepData.tip}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <SectionDivider />

      {/* Section 4: Recycling Journey */}
      <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
        <SectionHeader number="3" title="The Recycling Journey" icon={ArrowRight} subtitle="From your bin to new products" />
        <div className="relative">
          {/* Desktop: Horizontal journey */}
          <div className="hidden md:flex items-start justify-between gap-2 overflow-x-auto pb-4">
            {waste.recyclingJourney.map((stage, index) => {
              const StageIcon = stage.icon;
              return (
                <div key={index} className="flex-1 min-w-0 relative">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center mb-3 relative z-10">
                      <StageIcon className="w-7 h-7 text-primary" />
                    </div>
                    <h5 className="font-semibold text-foreground text-sm mb-1">{stage.stage}</h5>
                    <p className="text-xs text-muted-foreground px-2">{stage.description}</p>
                  </div>
                  {/* Connector arrow */}
                  {index < waste.recyclingJourney.length - 1 && (
                    <div className="absolute top-8 left-[calc(50%+2rem)] right-0 h-0.5 bg-gradient-to-r from-primary/30 to-primary/10 -z-0">
                      <ArrowRight className="absolute -right-1 -top-1.5 w-4 h-4 text-primary/30" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          
          {/* Mobile: Vertical journey */}
          <div className="md:hidden space-y-4">
            {waste.recyclingJourney.map((stage, index) => {
              const StageIcon = stage.icon;
              return (
                <div key={index} className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center">
                      <StageIcon className="w-5 h-5 text-primary" />
                    </div>
                    {index < waste.recyclingJourney.length - 1 && (
                      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-0.5 h-4 bg-primary/20" />
                    )}
                  </div>
                  <div>
                    <h5 className="font-semibold text-foreground text-sm">{stage.stage}</h5>
                    <p className="text-xs text-muted-foreground">{stage.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <SectionDivider />

      {/* Section 5: Environmental Impact */}
      <div className="animate-fade-in" style={{ animationDelay: '250ms' }}>
        <SectionHeader number="4" title="Environmental Impact" icon={Globe} subtitle="The positive difference recycling makes" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {waste.environmentalStats.map((stat, index) => {
            const StatIcon = stat.icon;
            return (
              <div key={index} className="bg-gradient-to-br from-green-500/10 to-emerald-500/5 border border-green-500/20 rounded-xl p-5 text-center hover:shadow-md transition-shadow">
                <div className={`w-12 h-12 mx-auto rounded-full bg-background flex items-center justify-center mb-3 ${stat.color}`}>
                  <StatIcon className="w-6 h-6" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm font-medium text-foreground">{stat.label}</div>
                <div className="text-xs text-muted-foreground">{stat.unit}</div>
              </div>
            );
          })}
        </div>
      </div>

      <SectionDivider />

      {/* Section 6: Where to Recycle */}
      <div className="animate-fade-in" style={{ animationDelay: '300ms' }}>
        <SectionHeader number="5" title="Where to Recycle" icon={MapPin} subtitle="Disposal guidelines for this material" />
        <div className="bg-card border border-border rounded-xl p-6">
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex items-center gap-4">
              <div className={`w-16 h-16 ${waste.disposalInfo.binColor} rounded-xl flex items-center justify-center shadow-lg`}>
                <Trash2 className="w-8 h-8 text-white" />
              </div>
              <div>
                <h5 className="font-semibold text-foreground text-lg">{waste.disposalInfo.binType}</h5>
                {waste.disposalInfo.prepRequired && (
                  <span className="text-xs px-2 py-0.5 bg-amber-100 text-amber-700 rounded-full">Preparation required</span>
                )}
              </div>
            </div>
            <div className="flex-1 bg-muted/50 rounded-lg p-4">
              <div className="flex items-start gap-2">
                <Info className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">{waste.disposalInfo.specialNotes}</p>
              </div>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-border">
            <button className="w-full sm:w-auto px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
              <MapPin className="w-4 h-4" />
              Find Recycling Centers Near You
            </button>
          </div>
        </div>
      </div>

      <SectionDivider />

      {/* Section 7: Real-World Uses */}
      <div className="animate-fade-in" style={{ animationDelay: '350ms' }}>
        <SectionHeader number="6" title="What It Becomes" icon={Recycle} subtitle="Real products made from recycled materials" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {waste.realWorldUses.map((item, index) => {
            const ItemIcon = item.icon;
            return (
              <div key={index} className="bg-card border border-border rounded-xl p-5 hover:border-primary/30 hover:shadow-md transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl flex-shrink-0">
                    <ItemIcon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <span className="text-xs px-2 py-0.5 bg-muted rounded-full text-muted-foreground">{item.category}</span>
                    <h5 className="font-semibold text-foreground mt-2">{item.product}</h5>
                    <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <SectionDivider />

      {/* Section 8: Industries */}
      <div className="grid gap-6 md:grid-cols-2 animate-fade-in" style={{ animationDelay: '400ms' }}>
        <div className="bg-card border border-border rounded-xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <Factory className="w-5 h-5 text-primary" />
            <h4 className="text-lg font-semibold text-foreground">Industries Using This Material</h4>
          </div>
          <div className="space-y-2">
            {waste.industries.map((industry) => (
              <div
                key={industry}
                className="flex items-center gap-3 px-4 py-3 bg-secondary rounded-lg"
              >
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm text-secondary-foreground">{industry}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-card border border-border rounded-xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <Recycle className="w-5 h-5 text-primary" />
            <h4 className="text-lg font-semibold text-foreground">Recycled Products</h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {waste.uses.map((use) => (
              <span
                key={use}
                className="px-4 py-2 bg-primary/10 text-primary text-sm rounded-full border border-primary/20 hover:bg-primary/20 transition-colors"
              >
                {use}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Eco Tip */}
      <div className="flex items-start gap-4 p-5 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl border border-primary/20 animate-fade-in" style={{ animationDelay: '450ms' }}>
        <div className="p-2 bg-primary/20 rounded-lg flex-shrink-0">
          <Leaf className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h5 className="font-semibold text-foreground mb-1">Eco Tip</h5>
          <p className="text-sm text-muted-foreground">
            {predictedClass.toLowerCase() === 'trash' 
              ? "While this item may not be recyclable, consider if any parts can be separated for recycling or if it can be repurposed. Remember the 5 R's: Refuse, Reduce, Reuse, Repurpose, then Recycle."
              : `Recycling ${waste.name.toLowerCase()} helps conserve natural resources and reduces landfill waste. ${waste.comparison.energySavings} compared to producing new materials. Make sure to clean and sort before recycling!`
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default WasteClassDetails;