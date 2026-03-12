import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, FileText, Image, Palette } from "lucide-react";

export default function Downloads() {
  const packages = [
    {
      id: "social-media",
      name: "Social Media Package",
      description:
        "Optimized assets for Instagram, LinkedIn, Twitter, and Facebook. Includes profile pictures, post templates, and banner sizes.",
      icon: Image,
      color: "#00C4CC",
      assets: [
        {
          name: "Logo - Square (1024x1024px)",
          format: "PNG",
          use: "Profile pictures, app icons, avatars",
          url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663389086229/XtgagN3HETV9XJF7AZnqCd/propelai_logo_square_1024-c8kHXHPapCkBb7jVsgkuyv.png",
        },
        {
          name: "Social Media Template (1080x1080px)",
          format: "PNG",
          use: "Instagram posts, content templates",
          url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663389086229/XtgagN3HETV9XJF7AZnqCd/propelai_social_media_template-53pDRAY3EtjHgWJfRsQckH.png",
        },
        {
          name: "Color Palette Swatch",
          format: "PNG",
          use: "Social media graphics, design reference",
          url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663389086229/XtgagN3HETV9XJF7AZnqCd/propelai_color_palette_print-3CVc6eADNNr8PuKgGtWaWS.png",
        },
      ],
    },
    {
      id: "print",
      name: "Print Package",
      description:
        "High-resolution assets for print materials including business cards, brochures, letterheads, and promotional items.",
      icon: FileText,
      color: "#D4AF37",
      assets: [
        {
          name: "Logo - High Resolution",
          format: "PNG (300 DPI)",
          use: "Print materials, large format printing",
          url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663389086229/XtgagN3HETV9XJF7AZnqCd/propelai_logo_square_1024-c8kHXHPapCkBb7jVsgkuyv.png",
        },
        {
          name: "Color Palette - Print Edition",
          format: "PNG",
          use: "Print guidelines, color reference with CMYK values",
          url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663389086229/XtgagN3HETV9XJF7AZnqCd/propelai_color_palette_print-3CVc6eADNNr8PuKgGtWaWS.png",
        },
        {
          name: "Typography Guide",
          format: "PDF",
          use: "Font specifications, sizing guidelines for print",
          url: "#",
        },
      ],
    },
    {
      id: "web",
      name: "Web Package",
      description:
        "Optimized assets for websites, web applications, and digital platforms. Includes responsive logos and web-ready graphics.",
      icon: Palette,
      color: "#0A2E4A",
      assets: [
        {
          name: "Logo - Horizontal (1920x1080px)",
          format: "PNG",
          use: "Website headers, hero sections, banners",
          url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663389086229/XtgagN3HETV9XJF7AZnqCd/propelai_logo_horizontal_1920-NhWT2yDxWeKkV6qekH7qWY.png",
        },
        {
          name: "Web Header Banner (1920x400px)",
          format: "PNG",
          use: "Website headers, landing page banners",
          url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663389086229/XtgagN3HETV9XJF7AZnqCd/propelai_web_header_banner-5i77tdjT6JVDEstER8XKTB.png",
        },
        {
          name: "Logo - Square (1024x1024px)",
          format: "PNG",
          use: "Favicons, app icons, small web graphics",
          url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663389086229/XtgagN3HETV9XJF7AZnqCd/propelai_logo_square_1024-c8kHXHPapCkBb7jVsgkuyv.png",
        },
        {
          name: "Brand Guidelines",
          format: "PDF",
          use: "Web design standards, color codes, typography",
          url: "#",
        },
      ],
    },
  ];

  const handleDownload = (url: string, filename: string) => {
    if (url === "#") {
      alert("This file will be available soon. Please check back later.");
      return;
    }
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
                Download Brand Assets
              </p>
            </div>
          </div>
          <nav className="hidden md:flex gap-8">
            <a
              href="/"
              className="text-sm font-heading text-propel-blue hover:text-propel-teal transition"
            >
              Back to Portal
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-propel-blue to-blue-900 text-white py-16">
        <div className="container">
          <h2 className="text-4xl font-display mb-4">Download Brand Assets</h2>
          <p className="text-lg font-body text-blue-100 max-w-2xl">
            Choose from our curated asset packages tailored for social media,
            print, and web use. All files are optimized and ready to use.
          </p>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {packages.map((pkg) => {
              const IconComponent = pkg.icon;
              return (
                <Card
                  key={pkg.id}
                  className="overflow-hidden border-0 shadow-sm hover:shadow-md transition"
                >
                  <div
                    className="h-2"
                    style={{ backgroundColor: pkg.color }}
                  />
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="p-3 rounded-lg"
                        style={{ backgroundColor: `${pkg.color}20` }}
                      >
                        <IconComponent
                          size={24}
                          style={{ color: pkg.color }}
                        />
                      </div>
                      <h3 className="text-xl font-heading text-propel-blue">
                        {pkg.name}
                      </h3>
                    </div>
                    <p className="font-body text-gray-700 mb-6">
                      {pkg.description}
                    </p>
                    <Button
                      className="w-full bg-propel-teal text-propel-blue hover:bg-cyan-400 font-heading"
                      onClick={() => {
                        const element = document.getElementById(pkg.id);
                        element?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      View Assets
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Detailed Asset Lists */}
          {packages.map((pkg) => (
            <div key={pkg.id} id={pkg.id} className="mb-20">
              <div className="mb-8">
                <h2 className="text-3xl font-display text-propel-blue mb-2">
                  {pkg.name}
                </h2>
                <div
                  className="w-16 h-1"
                  style={{ backgroundColor: pkg.color }}
                />
              </div>

              <div className="grid gap-6">
                {pkg.assets.map((asset, idx) => (
                  <Card key={idx} className="p-6 border-0 shadow-sm">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                      <div className="flex-1">
                        <h3 className="text-lg font-heading text-propel-blue mb-2">
                          {asset.name}
                        </h3>
                        <div className="space-y-1">
                          <p className="text-sm font-body text-gray-600">
                            <span className="font-body-bold">Format:</span>{" "}
                            {asset.format}
                          </p>
                          <p className="text-sm font-body text-gray-600">
                            <span className="font-body-bold">Use:</span>{" "}
                            {asset.use}
                          </p>
                        </div>
                      </div>
                      <Button
                        className="bg-propel-teal text-propel-blue hover:bg-cyan-400 font-heading flex items-center gap-2"
                        onClick={() =>
                          handleDownload(asset.url, asset.name)
                        }
                      >
                        <Download size={18} />
                        Download
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Guidelines Section */}
      <section className="bg-gray-50 py-20">
        <div className="container">
          <h2 className="text-3xl font-display text-propel-blue mb-12">
            Usage Guidelines
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border-0 shadow-sm">
              <h3 className="text-xl font-heading text-propel-blue mb-4">
                Social Media Best Practices
              </h3>
              <ul className="space-y-3 font-body text-gray-700">
                <li className="flex gap-3">
                  <span className="text-propel-teal font-heading">•</span>
                  <span>Use the square logo for profile pictures and avatars</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-propel-teal font-heading">•</span>
                  <span>Maintain minimum padding around the logo</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-propel-teal font-heading">•</span>
                  <span>Apply consistent color palette across all posts</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-propel-teal font-heading">•</span>
                  <span>Use Montserrat for headlines and Lora for body text</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 border-0 shadow-sm">
              <h3 className="text-xl font-heading text-propel-blue mb-4">
                Print & Web Best Practices
              </h3>
              <ul className="space-y-3 font-body text-gray-700">
                <li className="flex gap-3">
                  <span className="text-propel-teal font-heading">•</span>
                  <span>Use high-resolution files for print (300 DPI minimum)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-propel-teal font-heading">•</span>
                  <span>Ensure sufficient contrast between text and background</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-propel-teal font-heading">•</span>
                  <span>Maintain brand color hierarchy in all applications</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-propel-teal font-heading">•</span>
                  <span>Test responsive design on mobile and desktop</span>
                </li>
              </ul>
            </Card>
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
                  <a href="/" className="hover:text-propel-teal transition">
                    Brand Portal
                  </a>
                </li>
                <li>
                  <a href="#social-media" className="hover:text-propel-teal transition">
                    Social Media
                  </a>
                </li>
                <li>
                  <a href="#print" className="hover:text-propel-teal transition">
                    Print
                  </a>
                </li>
                <li>
                  <a href="#web" className="hover:text-propel-teal transition">
                    Web
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
              © 2026 PropelAI. All rights reserved. Brand Portal v1.1
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
