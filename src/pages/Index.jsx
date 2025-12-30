import { useState } from "react";
import ImageUploader from "../components/ImageUploader.jsx";
import PredictionResult from "../components/PredictionResult.jsx";
import Header from "../components/Header.jsx";

const Index = () => {
  const [prediction, setPrediction] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleClassify = async (file) => {
    setIsLoading(true);
    setPrediction(null);

    const formData = new FormData();
    formData.append("image", file);

    try {
      // Update this URL to your Flask API endpoint
      const response = await fetch("http://localhost:5000/predict", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Classification failed");
      }

      const result = await response.json();
      setPrediction(result);
    } catch (error) {
      console.error("Error classifying image:", error);
      setPrediction({
        error: true,
        message: "Failed to classify image. Make sure the Flask API is running.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleImageUpload = (file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setUploadedImage(reader.result);
    };
    reader.readAsDataURL(file);
    handleClassify(file);
  };

  const handleReset = () => {
    setPrediction(null);
    setUploadedImage(null);
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        <Header />

        <main className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="gradient-text">Waste Classification</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Upload an image of waste and our ML model will classify it as cardboard, glass, metal, paper, plastic, or trash.
              </p>
              <div className="flex flex-wrap justify-center gap-2 mt-6">
                {["Cardboard", "Glass", "Metal", "Paper", "Plastic", "Trash"].map((label) => (
                  <span key={label} className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full border border-border">
                    {label}
                  </span>
                ))}
              </div>
            </div>

            {/* Main Content */}
            <div className="grid gap-8 md:grid-cols-2">
              <ImageUploader
                onImageUpload={handleImageUpload}
                uploadedImage={uploadedImage}
                isLoading={isLoading}
                onReset={handleReset}
              />
              <PredictionResult
                prediction={prediction}
                isLoading={isLoading}
              />
            </div>

            {/* Instructions */}
            <div className="mt-16 p-6 bg-card rounded-xl border border-border">
              <h2 className="text-xl font-semibold mb-4 text-foreground">How to Connect the Backend</h2>
              <div className="space-y-3 text-muted-foreground text-sm font-mono">
                <p>1. Save your trained model as <code className="text-primary">model.h5</code> or <code className="text-primary">model.keras</code></p>
                <p>2. Create the Flask API using the code provided below</p>
                <p>3. Run: <code className="text-primary">python app.py</code></p>
                <p>4. The API will be available at <code className="text-primary">http://localhost:5000</code></p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
