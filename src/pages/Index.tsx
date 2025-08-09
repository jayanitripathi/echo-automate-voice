import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";

import { Mic, Puzzle, FileText, Brain, Chrome, CheckCircle2 } from "lucide-react";

const Index = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Echo",
    applicationCategory: "BrowserExtension",
    operatingSystem: "Chrome",
    description:
      "Echo is a voice-powered Chrome extension that automates web tasks hands-free.",
    offers: {
      "@type": "Offer",
      url: "https://echo.app/",
      price: "0",
      priceCurrency: "USD",
    },
    potentialAction: {
      "@type": "InstallAction",
      target: "https://echo.app/download",
    },
  };

  return (
    <div>
      <SEO
        title="Echo — Voice-Powered Web Automation"
        description="Automate tasks, save time, and streamline your workflow with Echo—your AI-powered, hands-free Chrome extension."
        canonical="https://echo.app/"
        jsonLd={jsonLd}
      />

      <header className="border-b">
        <nav className="container flex items-center justify-between py-4">
          <a href="#" className="flex items-center gap-2 font-display text-lg">
            <span className="inline-block h-3 w-3 rounded-full bg-[hsl(var(--brand))]" aria-hidden />
            <span>Echo</span>
          </a>
          <div className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#features" className="story-link">Features</a>
            <a href="#how-it-works" className="story-link">How it works</a>
            <a href="#benefits" className="story-link">Benefits</a>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" asChild>
              <a href="#how-it-works">Get Started</a>
            </Button>
            <Button variant="hero" asChild>
              <a href="#download">Download Echo</a>
            </Button>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-primary opacity-20" aria-hidden />
          <div className="container grid gap-10 py-20 md:gap-12 md:py-28">
            <article className="flex flex-col justify-center">
              <h1 className="font-display text-4xl leading-tight md:text-5xl lg:text-6xl animate-enter">
                Echo: Your Voice-Powered Assistant for Seamless Web Automation
              </h1>
              <p className="mt-4 text-lg text-muted-foreground md:text-xl animate-fade-in">
                Automate tasks, save time, and streamline your workflow with Echo—your AI-powered, hands-free Chrome extension.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button size="lg" variant="hero" className="hover-scale" asChild>
                  <a href="#download">Download Echo</a>
                </Button>
                <Button size="lg" variant="outline" className="hover-scale" asChild>
                  <a href="#how-it-works">Get Started</a>
                </Button>
              </div>
            </article>

          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="border-t">
          <div className="container py-16 md:py-20">
            <header className="mb-10 text-center">
              <h2 className="font-display text-3xl md:text-4xl">Powerful features that work hands-free</h2>
              <p className="mt-3 text-muted-foreground">Designed for speed, precision, and seamless integration.</p>
            </header>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <article className="rounded-lg border bg-card p-6 shadow-sm transition hover:shadow-md">
                <Mic className="text-[hsl(var(--brand))]" />
                <h3 className="mt-4 font-semibold">Voice Command Task Automation</h3>
                <p className="mt-2 text-sm text-muted-foreground">Automate tasks like ordering products, applying for jobs, and generating leads using just your voice.</p>
              </article>
              <article className="rounded-lg border bg-card p-6 shadow-sm transition hover:shadow-md">
                <Puzzle className="text-[hsl(var(--brand))]" />
                <h3 className="mt-4 font-semibold">Seamless Integration</h3>
                <p className="mt-2 text-sm text-muted-foreground">Integrates with platforms like Amazon, LinkedIn, and CRMs for smooth, hands-free interaction.</p>
              </article>
              <article className="rounded-lg border bg-card p-6 shadow-sm transition hover:shadow-md">
                <FileText className="text-[hsl(var(--brand))]" />
                <h3 className="mt-4 font-semibold">SEO Content Generation</h3>
                <p className="mt-2 text-sm text-muted-foreground">Automatically create SEO-optimized content for platforms like Reddit to boost your presence.</p>
              </article>
              <article className="rounded-lg border bg-card p-6 shadow-sm transition hover:shadow-md">
                <Brain className="text-[hsl(var(--brand))]" />
                <h3 className="mt-4 font-semibold">Real-Time Feedback & Adaptability</h3>
                <p className="mt-2 text-sm text-muted-foreground">Echo learns from your commands and adapts to your needs, optimizing continuously.</p>
              </article>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="border-t">
          <div className="container py-16 md:py-20">
            <header className="mb-10 text-center">
              <h2 className="font-display text-3xl md:text-4xl">How it works</h2>
              <p className="mt-3 text-muted-foreground">Three simple steps to automate your web tasks.</p>
            </header>
            <div className="grid gap-6 md:grid-cols-3">
              <article className="rounded-lg border bg-card p-6">
                <Chrome />
                <h3 className="mt-4 font-semibold">Install the Echo Chrome Extension</h3>
                <p className="mt-2 text-sm text-muted-foreground">Add Echo to Chrome in seconds and start automating instantly.</p>
              </article>
              <article className="rounded-lg border bg-card p-6">
                <Mic />
                <h3 className="mt-4 font-semibold">Speak your commands</h3>
                <p className="mt-2 text-sm text-muted-foreground">Say: "Order from Amazon", "Apply for the Data Science job", and more.</p>
              </article>
              <article className="rounded-lg border bg-card p-6">
                <CheckCircle2 />
                <h3 className="mt-4 font-semibold">Echo executes automatically</h3>
                <p className="mt-2 text-sm text-muted-foreground">Hands-free execution with real-time feedback and confirmations.</p>
              </article>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="border-t">
          <div className="container py-16 md:py-20">
            <header className="mb-10 text-center">
              <h2 className="font-display text-3xl md:text-4xl">Benefits for everyone</h2>
              <p className="mt-3 text-muted-foreground">Built to save time and elevate productivity across the board.</p>
            </header>
            <div className="grid gap-6 md:grid-cols-3">
              <article className="rounded-lg border bg-card p-6">
                <h3 className="font-semibold">For Busy Professionals</h3>
                <p className="mt-2 text-sm text-muted-foreground">Save time and reduce repetitive tasks by letting Echo handle web work while you focus on what matters.</p>
              </article>
              <article className="rounded-lg border bg-card p-6">
                <h3 className="font-semibold">For Businesses</h3>
                <p className="mt-2 text-sm text-muted-foreground">Streamline lead generation, data entry, and job applications to boost productivity and efficiency.</p>
              </article>
              <article className="rounded-lg border bg-card p-6">
                <h3 className="font-semibold">For Everyone</h3>
                <p className="mt-2 text-sm text-muted-foreground">Make your web experience smarter and faster with the power of voice.</p>
              </article>
            </div>

            <div id="download" className="mt-12 flex items-center justify-center">
              <Button size="lg" variant="hero" className="hover-scale">Download Echo</Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container py-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Echo. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Index;
