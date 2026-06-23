import { Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  {
    icon: Mail,
    label: "Email",
    value: "ricardo@example.com",
    href: "mailto:ricardo@example.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/ricardo",
    href: "https://linkedin.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/ricardo",
    href: "https://github.com",
  },
];

export function Contact() {
  return (
    <section id="contact" className="border-t border-border/60 bg-muted/30 py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <p className="text-sm font-medium uppercase tracking-widest text-primary">
          Contact
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Let's build something immersive.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Open to new XR projects, simulation systems, and enterprise
          collaborations. Reach out via any channel below.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col items-center rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg"
            >
              <l.icon className="size-6 text-primary transition-transform group-hover:scale-110" />
              <p className="mt-3 text-sm font-semibold">{l.label}</p>
              <p className="mt-1 text-xs text-muted-foreground">{l.value}</p>
            </a>
          ))}
        </div>
        <div className="mt-10">
          <Button asChild size="lg">
            <a href="/cv.pdf" download>
              <Download className="mr-2 size-4" /> Download Portfolio / CV
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
