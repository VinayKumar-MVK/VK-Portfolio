import { useEffect, useState } from "react";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { TiltCard } from "@/components/ui/TiltCard";
import { motion } from "framer-motion";
import {
  Download,
  Mail,
  MapPin,
  Github,
  Linkedin,
  GraduationCap,
  Briefcase,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { useFinePointer } from "@/hooks/use-fine-pointer";

export const RESUME_PDF_PATH = "/assets/documents/VkCV.pdf";
const RESUME_DOWNLOAD_NAME = "Vinay_Kumar_Resume.pdf";

const SKILLS = {
  "Frontend & Web": ["React", "TypeScript", "Next.js", "HTML/CSS", "UI/UX Design"],
  "Backend & Data": ["Node.js", "Java", "MySQL", "MariaDB", "Docker"],
  "Mobile & Desktop": ["Flutter", "JavaFX", "Android"],
  Tools: ["Git", "GitHub", "Postman", "Linux", "Blender", "DaVinci Resolve", "n8n"],
};

const EXPERIENCE = [
  {
    period: "2026 — Present",
    role: "Freelancing",
    detail: "Delivering full-stack web, mobile, and design projects for clients globally.",
  },
  {
    period: "2025",
    role: "Web Development",
    detail: "React-based dynamic web applications and interactive product experiences.",
  },
  {
    period: "2024",
    role: "Full Stack Expansion",
    detail: "Flutter, Java, UI/UX, and visual effects in the delivery pipeline.",
  },
  {
    period: "2023",
    role: "Mobile Application Development",
    detail: "Android Studio and Flutter cross-platform applications.",
  },
  {
    period: "2022",
    role: "Java Development",
    detail: "Core programming fundamentals and application logic with Java.",
  },
];

function ResumeWebView() {
  return (
    <div className="space-y-6 sm:space-y-8 text-sm sm:text-base">
      <section>
        <h2 className="text-lg sm:text-xl font-black font-display text-primary mb-3 flex items-center gap-2">
          <Sparkles className="w-4 h-4" /> Professional Summary
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Multi-disciplinary Full Stack Developer and UI/UX Designer with experience building web applications,
          mobile apps, and desktop software. I engineer digital experiences that captivate, convert, and inspire —
          from React frontends to Flutter mobile and JavaFX desktop solutions.
        </p>
      </section>

      <section>
        <h2 className="text-lg sm:text-xl font-black font-display text-secondary mb-3 flex items-center gap-2">
          <GraduationCap className="w-4 h-4" /> Education
        </h2>
        <div className="glassmorphism rounded-xl border border-white/10 p-4 sm:p-5">
          <p className="font-bold text-white">B.Tech — Computer Science & Engineering</p>
          <p className="text-muted-foreground text-sm mt-1">Giet Engineering College</p>
        </div>
      </section>

      <section>
        <h2 className="text-lg sm:text-xl font-black font-display text-accent mb-3 flex items-center gap-2">
          <Briefcase className="w-4 h-4" /> Experience
        </h2>
        <ul className="space-y-3">
          {EXPERIENCE.map((item) => (
            <li
              key={item.period + item.role}
              className="glassmorphism rounded-xl border border-white/10 p-4 sm:p-5"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                <span className="font-bold text-white">{item.role}</span>
                <span className="text-xs font-semibold text-primary uppercase tracking-wide">{item.period}</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.detail}</p>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-lg sm:text-xl font-black font-display text-white mb-3">Technical Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {Object.entries(SKILLS).map(([group, items]) => (
            <div key={group} className="glassmorphism rounded-xl border border-white/10 p-4">
              <p className="text-xs font-bold uppercase tracking-wider text-secondary mb-2">{group}</p>
              <div className="flex flex-wrap gap-1.5">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="text-[11px] sm:text-xs px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-white/90"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default function Resume() {
  const hasFinePointer = useFinePointer();
  const [pdfAvailable, setPdfAvailable] = useState<boolean | null>(null);
  const [viewMode, setViewMode] = useState<"pdf" | "web">("pdf");

  useEffect(() => {
    fetch(RESUME_PDF_PATH, { method: "HEAD" })
      .then((res) => {
        const ok = res.ok;
        setPdfAvailable(ok);
        if (!ok) setViewMode("web");
      })
      .catch(() => {
        setPdfAvailable(false);
        setViewMode("web");
      });
  }, []);

  const contactItems = [
    { icon: MapPin, label: "India" },
    { icon: Mail, label: "vinaykumarmvk17@gmail.com", href: "mailto:vinaykumarmvk17@gmail.com" },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/vinay-kumar-moturi-a4a554268/",
    },
    { icon: Github, label: "GitHub", href: "https://github.com/VinayKumar-MVK" },
  ];

  return (
    <PageWrapper>
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-6 sm:mb-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-6xl font-black mb-3 sm:mb-4"
          >
            My <span className="text-primary">Resume</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed px-1"
          >
            Vinay Kumar — Full Stack Developer, UI/UX Designer & Application Developer
          </motion.p>
        </div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12 }}
          className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center gap-3 mb-6 sm:mb-8"
        >
          <a
            href={RESUME_PDF_PATH}
            download={RESUME_DOWNLOAD_NAME}
            className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm sm:text-base border border-primary/50 text-primary glassmorphism btn-touch touch-manipulation ${
              hasFinePointer
                ? "hover:neon-glow-primary hover:bg-primary/10"
                : "active:bg-primary/10 active:neon-glow-primary"
            } ${pdfAvailable === false ? "pointer-events-none opacity-50" : ""}`}
            aria-disabled={pdfAvailable === false}
            title={pdfAvailable === false ? "Add PDF to public/assets/documents/vinay-kumar-resume.pdf" : "Download resume PDF"}
          >
            <Download className="w-4 h-4 sm:w-5 sm:h-5" />
            Download PDF
          </a>

          {pdfAvailable && (
            <div className="flex rounded-xl border border-white/10 overflow-hidden glassmorphism p-1 gap-1">
              <button
                type="button"
                onClick={() => setViewMode("pdf")}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all btn-touch ${
                  viewMode === "pdf" ? "bg-primary text-background" : "text-muted-foreground hover:text-white active:text-white"
                }`}
              >
                PDF Preview
              </button>
              <button
                type="button"
                onClick={() => setViewMode("web")}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all btn-touch ${
                  viewMode === "web" ? "bg-secondary text-background" : "text-muted-foreground hover:text-white active:text-white"
                }`}
              >
                Web View
              </button>
            </div>
          )}

          {pdfAvailable === false && (
            <p className="text-center sm:text-left text-xs text-muted-foreground max-w-md">
              Add your file at{" "}
              <code className="text-primary/90 bg-white/5 px-1 rounded">public/assets/documents/vinay-kumar-resume.pdf</code>{" "}
              to enable PDF preview and download.
            </p>
          )}
        </motion.div>

        {/* Contact strip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.16 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8"
        >
          {contactItems.map(({ icon: Icon, label, href }) =>
            href ? (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glassmorphism border border-white/10 text-xs sm:text-sm text-muted-foreground hover:text-primary active:text-primary transition-colors btn-touch"
              >
                <Icon className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate max-w-[180px] sm:max-w-none">{label}</span>
                {href.startsWith("http") && <ExternalLink className="w-3 h-3 opacity-60" />}
              </a>
            ) : (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glassmorphism border border-white/10 text-xs sm:text-sm text-muted-foreground"
              >
                <Icon className="w-3.5 h-3.5" />
                {label}
              </span>
            )
          )}
        </motion.div>

        {/* Main viewer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <TiltCard
            maxTilt={6}
            glareOpacity={0.15}
            className="border-white/10 hover:border-primary/30 active:border-primary/30 bg-background/40 overflow-hidden"
          >
            <div className="p-4 sm:p-6 md:p-8">
              {viewMode === "pdf" && pdfAvailable ? (
                <div className="rounded-xl overflow-hidden border border-white/10 bg-black/40 shadow-inner">
                  <iframe
                    title="Vinay Kumar Resume PDF"
                    src={`${RESUME_PDF_PATH}#toolbar=0&navpanes=0`}
                    className="w-full h-[65vh] sm:h-[75vh] min-h-[420px] bg-white/5"
                  />
                  <div className="px-4 py-2 border-t border-white/10 flex justify-end">
                    <a
                      href={RESUME_PDF_PATH}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-primary font-semibold flex items-center gap-1 hover:underline active:underline"
                    >
                      Open in new tab <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ) : (
                <ResumeWebView />
              )}
            </div>
          </TiltCard>
        </motion.div>
      </div>
    </PageWrapper>
  );
}
