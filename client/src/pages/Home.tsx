import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Copy, Check } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const handleCopyColor = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedColor(hex);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  const colors = [
    {
      name: "Deep Ocean Blue",
      hex: "#0A2E4A",
      rgb: "R:10 G:46 B:74",
      usage: "Primary color for professionalism & trust",
    },
    {
      name: "Electric Teal",
      hex: "#00C4CC",
      rgb: "R:0 G:196 B:204",
      usage: "Secondary color for innovation & efficiency",
    },
    {
      name: "Warm Gold",
      hex: "#D4AF37",
      rgb: "R:212 G:175 B:55",
      usage: "Accent color for value & human touch",
    },
    {
      name: "Light Gray",
      hex: "#F2F2F2",
      rgb: "R:242 G:242 B:242",
      usage: "Neutral for backgrounds & secondary text",
    },
    {
      name: "Charcoal Gray",
      hex: "#333333",
      rgb: "R:51 G:51 B:51",
      usage: "Neutral for body text & contrast",
    },
  ];

  const fonts = [
    {
      name: "Montserrat",
      type: "Sans-serif",
      usage: "Headings, subheadings, digital interfaces",
      weights: "400, 500, 600, 700, 800",
      rationale:
        "Modern, geometric, excellent readability. Conveys efficiency and clarity.",
      preview: "Montserrat Font",
    },
    {
      name: "Lora",
      type: "Serif",
      usage: "Body text, detailed reports, print materials",
      weights: "400, 500, 600",
      rationale:
        "Elegant, contemporary, offers authority and trustworthiness.",
      preview: "Lora Font",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="container py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663389086229/XtgagN3HETV9XJF7AZnqCd/propelai_logo_main_7b784946.png"
              alt="PropelAI Logo"
              className="h-12 w-12"
            />
            <div>
              <h1 className="text-2xl font-display text-propel-blue">
                PropelAI
              </h1>
              <p className="text-sm text-gray-600 font-body">
                Brand Portal & Guidelines
              </p>
            </div>
          </div>
          <nav className="hidden md:flex gap-8">
            <a
              href="#overview"
              className="text-sm font-heading text-propel-blue hover:text-propel-teal transition"
            >
              Overview
            </a>
            <a
              href="#colors"
              className="text-sm font-heading text-propel-blue hover:text-propel-teal transition"
            >
              Colors
            </a>
            <a
              href="#typography"
              className="text-sm font-heading text-propel-blue hover:text-propel-teal transition"
            >
              Typography
            </a>
            <a
              href="#assets"
              className="text-sm font-heading text-propel-blue hover:text-propel-teal transition"
            >
              Assets
            </a>
            <a
              href="/downloads"
              className="text-sm font-heading text-propel-blue hover:text-propel-teal transition"
            >
              Downloads
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="overview" className="bg-gradient-to-br from-propel-blue to-blue-900 text-white py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h2 className="text-5xl font-display mb-6 leading-tight">
              PropelAI Brand Identity
            </h2>
            <p className="text-xl font-body mb-8 text-blue-100">
              A comprehensive guide to our brand's visual identity, colors,
              typography, and design principles. Use this portal to access all
              brand assets and ensure consistency across all platforms.
            </p>
            <div className="flex gap-4">
              <Button
                className="bg-propel-teal text-propel-blue hover:bg-cyan-400 font-heading"
                onClick={() =>
                  document
                    .getElementById("colors")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Explore Brand
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-propel-blue font-heading"
              >
                Download Guidelines
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 border-0 shadow-sm bg-white">
              <h3 className="text-lg font-heading text-propel-blue mb-3">
                Brand Name
              </h3>
              <p className="font-body text-gray-700">
                <span className="font-body-bold text-propel-blue">PropelAI</span>{" "}
                combines "Propel" (advancement, efficiency) with "AI"
                (artificial intelligence) to reflect our mission of accelerating
                real estate through technology.
              </p>
            </Card>
            <Card className="p-8 border-0 shadow-sm bg-white">
              <h3 className="text-lg font-heading text-propel-blue mb-3">
                Core Mission
              </h3>
              <p className="font-body text-gray-700">
                Transform the real estate sector through innovative AI automation
                solutions that drive efficiency, trust, and forward-thinking
                professionalism.
              </p>
            </Card>
            <Card className="p-8 border-0 shadow-sm bg-white">
              <h3 className="text-lg font-heading text-propel-blue mb-3">
                Brand Values
              </h3>
              <p className="font-body text-gray-700">
                Trust, Intelligence, Innovation, Efficiency, and a commitment to
                positioning PropelAI as a leader in AI-driven real estate
                automation.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Color Palette Section */}
      <section id="colors" className="py-20">
        <div className="container">
          <h2 className="text-4xl font-display text-propel-blue mb-4">
            Color Palette
          </h2>
          <p className="text-lg font-body text-gray-700 mb-12 max-w-2xl">
            Our carefully selected color palette conveys trust, technological
            sophistication, efficiency, and a connection to the real estate
            industry.
          </p>

          <div className="grid gap-8">
            {colors.map((color) => (
              <Card key={color.hex} className="overflow-hidden border-0 shadow-sm">
                <div className="flex flex-col md:flex-row">
                  <div
                    className="w-full md:w-48 h-48 md:h-auto flex-shrink-0"
                    style={{ backgroundColor: color.hex }}
                  />
                  <div className="flex-1 p-8 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-heading text-propel-blue mb-2">
                        {color.name}
                      </h3>
                      <p className="font-body text-gray-600 mb-4">
                        {color.usage}
                      </p>
                      <div className="space-y-2">
                        <p className="font-body text-sm text-gray-700">
                          <span className="font-body-bold">Hex:</span> {color.hex}
                        </p>
                        <p className="font-body text-sm text-gray-700">
                          <span className="font-body-bold">RGB:</span> {color.rgb}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleCopyColor(color.hex)}
                      className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition font-heading text-sm text-propel-blue"
                    >
                      {copiedColor === color.hex ? (
                        <>
                          <Check size={16} />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy size={16} />
                          Copy Hex
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Typography Section */}
      <section id="typography" className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-4xl font-display text-propel-blue mb-4">
            Typography
          </h2>
          <p className="text-lg font-body text-gray-700 mb-12 max-w-2xl">
            Our typography selection balances modern appeal with classic
            professionalism, ensuring optimal readability across all platforms.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {fonts.map((font) => (
              <Card key={font.name} className="p-8 border-0 shadow-sm">
                <h3 className="text-3xl font-display text-propel-blue mb-2">
                  {font.name}
                </h3>
                <p className="text-sm font-heading text-propel-teal mb-6">
                  {font.type}
                </p>

                <div className="space-y-4 mb-8">
                  <div>
                    <p className="text-xs font-heading text-gray-600 uppercase tracking-wide mb-2">
                      Usage
                    </p>
                    <p className="font-body text-gray-700">{font.usage}</p>
                  </div>
                  <div>
                    <p className="text-xs font-heading text-gray-600 uppercase tracking-wide mb-2">
                      Available Weights
                    </p>
                    <p className="font-body text-gray-700">{font.weights}</p>
                  </div>
                  <div>
                    <p className="text-xs font-heading text-gray-600 uppercase tracking-wide mb-2">
                      Rationale
                    </p>
                    <p className="font-body text-gray-700">{font.rationale}</p>
                  </div>
                </div>

                <div className="bg-gray-100 p-6 rounded-lg">
                  <p
                    className="text-2xl text-propel-blue"
                    style={{
                      fontFamily:
                        font.name === "Montserrat" ? "Montserrat" : "Lora",
                    }}
                  >
                    {font.preview}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Logo & Assets Section */}
      <section id="assets" className="py-20">
        <div className="container">
          <h2 className="text-4xl font-display text-propel-blue mb-4">
            Brand Assets
          </h2>
          <p className="text-lg font-body text-gray-700 mb-12 max-w-2xl">
            Our comprehensive visual identity includes the logo, brand visuals,
            and marketing materials that showcase the PropelAI brand.
          </p>

          <Tabs defaultValue="logo" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-gray-100 p-1 rounded-lg mb-8">
              <TabsTrigger
                value="logo"
                className="font-heading text-propel-blue data-[state=active]:bg-white data-[state=active]:text-propel-blue"
              >
                Logo
              </TabsTrigger>
              <TabsTrigger
                value="brand"
                className="font-heading text-propel-blue data-[state=active]:bg-white data-[state=active]:text-propel-blue"
              >
                Brand Visual
              </TabsTrigger>
              <TabsTrigger
                value="marketing"
                className="font-heading text-propel-blue data-[state=active]:bg-white data-[state=active]:text-propel-blue"
              >
                Marketing
              </TabsTrigger>
            </TabsList>

            <TabsContent value="logo">
              <Card className="p-12 border-0 shadow-sm bg-gray-50 flex flex-col items-center">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663389086229/XtgagN3HETV9XJF7AZnqCd/propelai_logo_main_7b784946.png"
                  alt="PropelAI Logo"
                  className="max-w-md h-auto mb-8"
                />
                <div className="text-center max-w-2xl">
                  <h3 className="text-2xl font-heading text-propel-blue mb-4">
                    PropelAI Logo
                  </h3>
                  <p className="font-body text-gray-700 mb-6">
                    The PropelAI logo features a stylized 'P' that integrates an
                    upward-pointing arrow (representing growth and forward
                    momentum) and a house roofline (signifying real estate focus).
                    The primary colors are Deep Ocean Blue and Electric Teal,
                    conveying trust, technology, and dynamism.
                  </p>
                  <Button className="bg-propel-teal text-propel-blue hover:bg-cyan-400 font-heading">
                    Download Logo
                  </Button>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="brand">
              <Card className="p-12 border-0 shadow-sm bg-gray-50 flex flex-col items-center">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663389086229/XtgagN3HETV9XJF7AZnqCd/propelai_brand_visual_f3e39723.png"
                  alt="PropelAI Brand Visual"
                  className="max-w-4xl w-full h-auto mb-8"
                />
                <div className="text-center max-w-2xl">
                  <h3 className="text-2xl font-heading text-propel-blue mb-4">
                    Complete Brand Visual
                  </h3>
                  <p className="font-body text-gray-700 mb-6">
                    This comprehensive brand visual showcases the logo, color
                    palette, typography, and geometric patterns that form the
                    foundation of the PropelAI brand identity.
                  </p>
                  <Button className="bg-propel-teal text-propel-blue hover:bg-cyan-400 font-heading">
                    Download Brand Visual
                  </Button>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="marketing">
              <Card className="p-12 border-0 shadow-sm bg-gray-50 flex flex-col items-center">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663389086229/XtgagN3HETV9XJF7AZnqCd/propelai_marketing_mockup_ed228074.png"
                  alt="PropelAI Marketing Mockup"
                  className="max-w-4xl w-full h-auto mb-8"
                />
                <div className="text-center max-w-2xl">
                  <h3 className="text-2xl font-heading text-propel-blue mb-4">
                    Marketing Materials
                  </h3>
                  <p className="font-body text-gray-700 mb-6">
                    Professional mockup showing the PropelAI brand applied to
                    website landing pages and business cards, demonstrating how
                    the brand identity translates across digital and print media.
                  </p>
                  <Button className="bg-propel-teal text-propel-blue hover:bg-cyan-400 font-heading">
                    Download Mockup
                  </Button>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Design Principles Section */}
      <section className="py-20 bg-gradient-to-br from-propel-blue to-blue-900 text-white">
        <div className="container">
          <h2 className="text-4xl font-display mb-12">Design Principles</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-heading mb-4 text-propel-teal">
                Geometric Shapes
              </h3>
              <p className="font-body text-blue-100 mb-4">
                Hexagons and interlocking geometric forms represent connection,
                integration, and the seamless automation of complex processes.
                These shapes evoke structure, data networks, and artificial
                intelligence.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-heading mb-4 text-propel-teal">
                Architectural Elements
              </h3>
              <p className="font-body text-blue-100 mb-4">
                Subtle, abstract representations of rooflines and building
                outlines maintain a clear connection to the real estate sector
                without being overly literal.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-heading mb-4 text-propel-teal">
                Data Flow Motifs
              </h3>
              <p className="font-body text-blue-100 mb-4">
                Visualizations of interconnected lines and nodes symbolize data
                flow, AI's analytical capabilities, and efficient automation
                workflows.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-heading mb-4 text-propel-teal">
                Clean Lines & Grids
              </h3>
              <p className="font-body text-blue-100 mb-4">
                Consistent use of clean lines and structured grids reinforces
                precision, order, and efficiency across all brand applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-propel-blue text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-heading text-lg mb-4">PropelAI</h4>
              <p className="font-body text-blue-100">
                AI automation agency transforming real estate through innovative
                technology.
              </p>
            </div>
            <div>
              <h4 className="font-heading text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2 font-body text-blue-100">
                <li>
                  <a href="#overview" className="hover:text-propel-teal transition">
                    Overview
                  </a>
                </li>
                <li>
                  <a href="#colors" className="hover:text-propel-teal transition">
                    Colors
                  </a>
                </li>
                <li>
                  <a href="#typography" className="hover:text-propel-teal transition">
                    Typography
                  </a>
                </li>
                <li>
                  <a href="#assets" className="hover:text-propel-teal transition">
                    Assets
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading text-lg mb-4">Brand Colors</h4>
              <div className="flex gap-3">
                <div
                  className="w-10 h-10 rounded-lg border-2 border-white"
                  style={{ backgroundColor: "#0A2E4A" }}
                />
                <div
                  className="w-10 h-10 rounded-lg border-2 border-white"
                  style={{ backgroundColor: "#00C4CC" }}
                />
                <div
                  className="w-10 h-10 rounded-lg border-2 border-white"
                  style={{ backgroundColor: "#D4AF37" }}
                />
              </div>
            </div>
          </div>

          <div className="border-t border-blue-700 pt-8">
            <p className="font-body text-blue-100 text-center">
              © 2026 PropelAI. All rights reserved. Brand Portal v1.0
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
