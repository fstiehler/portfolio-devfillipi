import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Villani Estética Automotiva",
    description:
      "Website completo para estética automotiva, com catálogo de serviços, galeria, integração com WhatsApp e design responsivo focado em conversão.",
    tags: ["React", "TypeScript", "Responsive Design", "SEO"],
    url: "https://esteticavillani.com.br",
  },
  {
    title: "System Fluids",
    description:
      "Plataforma web desenvolvida para a System Fluids, com foco em apresentação institucional e catálogo de produtos industriais.",
    tags: ["React", "TypeScript", "Material UI"],
    url: "https://www.systemfluids.com.br",
  },
  {
    title: "EKO GF",
    description:
      "Website institucional para a EKO GF, com design moderno, responsivo e otimizado para performance e SEO.",
    tags: ["React", "TypeScript", "Responsive Design"],
    url: "https://ekogf.com",
  },
];

const Projects = () => {
  return (
    <section id="projetos" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm tracking-widest mb-3">
            // projetos
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-12">
            O que eu construí<span className="text-primary">.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group block rounded-xl border border-border bg-card p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_-10px_hsl(var(--primary)/0.3)]"
            >
              <div className="flex items-center gap-3 mb-3">
                <h3 className="font-heading text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs px-3 py-1 rounded-full bg-secondary text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
