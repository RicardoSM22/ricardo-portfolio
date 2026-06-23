const stats = [
  { value: "8+", label: "Years of experience" },
  { value: "30+", label: "Shipped projects" },
  { value: "10+", label: "Enterprise clients" },
];

export function About() {
  return (
    <section id="about" className="border-t border-border/60 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="md:col-span-1">
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              About me
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Building immersive systems that solve real problems.
            </h2>
          </div>
          <div className="md:col-span-2">
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                I'm a Unity developer with 8+ years of experience focused on
                AR, VR, XR and simulation systems. I've helped enterprise
                clients ship training simulators, industrial visualizations,
                interactive applications and large-scale immersive experiences.
              </p>
              <p>
                My work bridges software, 3D content and hardware — integrating
                Arduino-driven peripherals, IoT sensors and custom controllers
                with carefully optimized Unity runtimes. I care about
                performance, polish and shipping things that actually get used.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-border bg-card p-4 text-center"
                >
                  <div className="text-2xl font-bold text-primary sm:text-3xl">
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground sm:text-sm">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
