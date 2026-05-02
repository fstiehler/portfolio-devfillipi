import { motion } from "framer-motion";
import fillipiPhoto from "@/assets/fillipi-photo.jpg";

const About = () => {
  return (
    <section id="sobre" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm tracking-widest mb-3">// sobre mim</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">
            Quem sou eu<span className="text-primary">.</span>
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-center md:items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex-shrink-0"
          >
            <div className="relative group">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-primary/30 to-primary/10 blur-sm group-hover:blur-md transition-all duration-300" />
              <img
                src={fillipiPhoto}
                alt="Fillipi Villani Stiehler"
                className="relative w-48 h-48 md:w-56 md:h-56 rounded-xl object-cover border-2 border-primary/20"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-5 text-secondary-foreground leading-relaxed text-base sm:text-lg"
          >
            <p>
              Tenho <span className="text-primary font-semibold">19 anos</span> e sou apaixonado por desenvolvimento de software,
              com foco principal em <span className="text-primary font-semibold">Front-End</span>. Minha jornada na programação
              começou cedo e hoje construo interfaces web modernas, responsivas e focadas na experiência do usuário.
            </p>
            <p>
              Trabalho com <span className="text-foreground">JavaScript, React, TypeScript, HTML e CSS</span>, criando
              componentes reutilizáveis e estruturando aplicações de forma escalável. Também possuo experiência
              com backend em <span className="text-foreground">Golang</span> e <span className="text-foreground">Nest.js</span>,
              o que me permite ter uma visão mais completa das aplicações.
            </p>
            <p>
              Acredito que um bom código é aquele que resolve problemas de forma elegante e que outros
              desenvolvedores conseguem entender e manter facilmente.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
