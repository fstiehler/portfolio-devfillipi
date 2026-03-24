import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  return (
    <section id="experiencia" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm tracking-widest mb-3">// experiência</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-12">
            Onde trabalhei<span className="text-primary">.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative border-l-2 border-glow pl-8 ml-4"
        >
          {/* Timeline dot */}
          <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary glow-box" />

          <div className="mb-2 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
            <Briefcase className="w-4 h-4 text-primary hidden sm:block" />
            <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground">
              Assistente de Desenvolvedor Frontend
            </h3>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-6">
            <span className="font-mono text-primary text-sm font-semibold">Evoluinfo Tecnologias</span>
            <span className="text-muted-foreground">·</span>
            <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
              <Calendar className="w-3.5 h-3.5" />
              <span>Ago 2023 — Presente</span>
            </div>
          </div>

          <ul className="space-y-3 text-secondary-foreground leading-relaxed">
            <li className="flex gap-3">
              <span className="text-primary mt-1.5 text-xs">▸</span>
              <span>Desenvolvimento de interfaces web modernas, responsivas e focadas na experiência do usuário com <span className="text-foreground">React, TypeScript, JavaScript, HTML e CSS</span>.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary mt-1.5 text-xs">▸</span>
              <span>Criação de componentes reutilizáveis e estruturação de aplicações de forma escalável utilizando <span className="text-foreground">Material UI</span>.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary mt-1.5 text-xs">▸</span>
              <span>Integração com APIs e consumo de dados do backend, utilizando <span className="text-foreground">Postman</span> para testes e validações.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary mt-1.5 text-xs">▸</span>
              <span>Contribuição no desenvolvimento e integração de APIs com <span className="text-foreground">Golang</span> no backend.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary mt-1.5 text-xs">▸</span>
              <span>Participação ativa na evolução dos projetos, implementando novas funcionalidades e garantindo qualidade e desempenho.</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
