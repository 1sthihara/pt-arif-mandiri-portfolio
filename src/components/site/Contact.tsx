import { MapPin, Phone, Mail, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields.");
      return;
    }
    toast.success("Message sent! We'll get back to you shortly.");
    setForm({ name: "", email: "", message: "" });
  };

  const mapsQuery = "Batam Center Mall (BCM), Blok A2/12A, Batam, Kepulauan Riau";
  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapsQuery)}`;
  const mapsEmbed = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63824.66235294419!2d104.00503191335268!3d1.1307254999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d989031788ed4d%3A0x8a2c987a6dd8a5!2sBatam%20Centre%20Mall!5e0!3m2!1sid!2sid!4v1777300562731!5m2!1sid!2sid";
  const items = [
    {
      icon: MapPin,
      label: "Address",
      value: "Batam Center Mall (BCM), Blok A2/12A, Batam, Kepulauan Riau, Indonesia",
      href: mapsHref,
    },
    { icon: Phone, label: "Phone", value: "+62 812 6841 8987", href: "tel:+6281268418987" },
    { icon: Mail, label: "Email", value: "pt.arifmandiri@gmail.com", href: "mailto:pt.arifmandiri@gmail.com" },
  ];

  return (
    <section id="contact" className="section-py bg-background">
      <div className="container-px max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Contact Us
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Let's Build Together
          </h2>
          <p className="mt-4 text-muted-foreground">
            Have a project in mind? Reach out and our team will respond within one business day.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-5 gap-8 items-stretch">
          {/* Info */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((it) => {
              const Icon = it.icon;
              const Inner = (
                <div className="flex items-start gap-4 bg-card rounded-2xl p-6 border border-border shadow-soft hover:shadow-card hover:border-primary/30 transition-smooth">
                  <div className="w-12 h-12 rounded-xl bg-primary-soft flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
                      {it.label}
                    </div>
                    <div className="mt-1 text-foreground font-semibold">{it.value}</div>
                  </div>
                </div>
              );
              return it.href ? (
                <a key={it.label} href={it.href} className="block">
                  {Inner}
                </a>
              ) : (
                <div key={it.label}>{Inner}</div>
              );
            })}

            {/* Google Map Embed */}
            <div className="rounded-2xl overflow-hidden border border-border shadow-soft bg-card">
              <a
                href={mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative aspect-[16/10] group"
                aria-label="Open location in Google Maps"
              >
                <iframe
                  title="PT. Arif Mandiri location on Google Maps"
                  src={mapsEmbed}
                  className="absolute inset-0 w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
                <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card/95 backdrop-blur text-xs font-semibold text-primary shadow-soft border border-border opacity-0 group-hover:opacity-100 transition-smooth">
                  <MapPin size={14} /> Open in Maps
                </span>
              </a>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={onSubmit}
            className="lg:col-span-3 bg-card rounded-2xl p-8 md:p-10 border border-border shadow-card"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-foreground/70">
                  Name
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-2 w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-smooth"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-foreground/70">
                  Email
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="mt-2 w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-smooth"
                  placeholder="your@company.com"
                />
              </div>
            </div>
            <div className="mt-5">
              <label className="text-xs font-semibold uppercase tracking-wider text-foreground/70">
                Message
              </label>
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="mt-2 w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-smooth resize-none min-h-[340px] h-full"
              placeholder="Tell us about your project..."
            />
            </div>
            <button
              type="submit"
              className="mt-6 inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold shadow-soft hover:bg-primary-dark hover:shadow-card transition-smooth"
            >
              Send Message
              <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
