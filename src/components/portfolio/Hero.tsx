import { Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/Richard.png";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,theme(colors.primary/15),transparent_60%)]" />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 md:grid-cols-2 md:py-28">
        <div className="animate-fade-in">
          <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            Available for new XR projects
          </span>
          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Ricardo Sánchez Medina
          </h1>
          <p className="mt-3 text-lg font-medium text-primary">
            XR Developer | Unity Engineer | AR/VR Solutions | Interactive Training Systems
          </p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            I design and build immersive AR, VR and simulation systems for
            enterprise — from industrial training simulators to interactive
            experiences used by thousands of people.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a href="src/assets/Ricardo_Sanchez_Medina_Unity_Developer_2026.pdf" download>
                <Download className="mr-2 size-4" /> Download CV
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#contact">
                <Mail className="mr-2 size-4" /> Contact
              </a>
            </Button>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-md animate-scale-in">
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-primary/30 to-primary/0 blur-2xl" />
          <div className="overflow-hidden rounded-3xl border border-border shadow-2xl">
            <img
              src={heroImg}
              alt="Ricardo Sánchez Medina wearing a VR headset"
              width={1024}
              height={1024}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
