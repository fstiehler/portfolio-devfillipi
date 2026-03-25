import { motion } from "framer-motion";

const skills = [
  { name: "HTML & CSS", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "React.js", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "Material UI", category: "frontend" },
  { name: "Git", category: "tools" },
  { name: "GitHub", category: "tools" },
  { name: "GitLab", category: "tools" },
  { name: "ClickUp", category: "tools" },
  { name: "Jira", category: "tools" },
  { name: "Golang", category: "backend" },
  { name: "Nest.js", category: "backend" },
];

const SkillTag = ({ name, index }: { name: string; index: number }) => (
  <motion.span
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.3, delay: index * 0.05 }}
    className="font-mono text-sm px-4 py-2 rounded-full border border-border bg-secondary text-foreground hover:border-primary hover:text-primary transition-colors cursor-default"
  >
    {name}
  </motion.span>
);

const Skills = () => {
  const frontend = skills.filter((s) => s.category === "frontend");
  const other = skills.filter((s) => s.category !== "frontend");

  return (
    <section id="skills" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm tracking-widest mb-3">// habilidades</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-12">
            Tecnologias<span className="text-primary">.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="font-mono text-primary text-xs tracking-widest uppercase mb-6">Front-End</h3>
            <div className="flex flex-wrap gap-3">
              {frontend.map((skill, i) => (
                <SkillTag key={skill.name} name={skill.name} index={i} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-mono text-primary text-xs tracking-widest uppercase mb-6">Back-End & Ferramentas</h3>
            <div className="flex flex-wrap gap-3">
              {other.map((skill, i) => (
                <SkillTag key={skill.name} name={skill.name} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
