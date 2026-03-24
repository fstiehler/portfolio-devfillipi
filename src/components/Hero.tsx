import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Download } from "lucide-react";

const TypewriterText = ({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) => {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    if (displayed.length >= text.length) return;
    const timeout = setTimeout(() => {
      setDisplayed(text.slice(0, displayed.length + 1));
    }, 60);
    return () => clearTimeout(timeout);
  }, [displayed, started, text]);

  return (
    <span className={className}>
      {displayed}
      {displayed.length < text.length && started && (
        <span className="animate-blink text-primary">|</span>
      )}
    </span>
  );
};
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(hsl(175 80% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(175 80% 50%) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-6">
            &lt;Desenvolvedor Frontend /&gt;
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-heading text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
        >
          <ScrambleText text="Olá, eu sou" className="text-foreground" />
          <br />
          <ScrambleText text="Fillipi Villani Stiehler" className="text-gradient" />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="font-body text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Desenvolvedor de software com foco em <span className="text-primary">Front-End</span>,
          criando interfaces modernas, responsivas e com ótima experiência do usuário.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contato"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-primary text-primary-foreground font-heading text-sm font-semibold tracking-wide hover:opacity-90 transition-opacity glow-box"
          >
            Entre em contato
          </a>
          <a
            href="/curriculo-fillipi.pdf"
            download
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg border border-glow text-foreground font-heading text-sm font-semibold tracking-wide hover:bg-secondary transition-colors"
          >
            <Download className="w-4 h-4" />
            Currículo
          </a>
          <a
            href="#experiencia"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg border border-glow text-foreground font-heading text-sm font-semibold tracking-wide hover:bg-secondary transition-colors"
          >
            Minha experiência
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 font-mono text-muted-foreground text-xs"
        >
          <span className="text-primary">const</span> idade = <span className="text-primary">18</span>;
          <span className="animate-blink ml-0.5">|</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
