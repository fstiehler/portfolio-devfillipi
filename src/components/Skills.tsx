import { motion } from "framer-motion";

const skills = [
  { name: "React.js", level: 90, category: "frontend" },
  { name: "TypeScript", level: 95, category: "frontend" },
  { name: "JavaScript", level: 100, category: "frontend" },
  { name: "Next.js", level: 75, category: "frontend" },
  { name: "HTML & CSS", level: 100, category: "frontend" },
  { name: "Material UI", level: 100, category: "frontend" },
  { name: "Git", level: 100, category: "tools" },
  { name: "Golang", level: 45, category: "backend" },
  { name: "Nest.js", level: 50, category: "backend" },
];

const SkillBar = ({ name, level, index }: { name: string; level: number; index: number }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.07 }}
    className="group"
  >
    <div className="flex justify-between items-center mb-2">
      <span className="font-mono text-sm text-foreground">{name}</span>
      <span className="font-mono text-xs text-muted-foreground">{level}%</span>
    </div>
    <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: index * 0.07 + 0.2, ease: "easeOut" }}
        className="h-full rounded-full bg-primary"
      />
    </div>
  </motion.div>
);

const Skills = () => {
  const frontend = skills.filter(s => s.category === "frontend");
  const other = skills.filter(s => s.category !== "frontend");

  return (
    <section id="skills" className="py-24 px-6">
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
            <div className="space-y-5">
              {frontend.map((skill, i) => (
                <SkillBar key={skill.name} {...skill} index={i} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-mono text-primary text-xs tracking-widest uppercase mb-6">Back-End & Ferramentas</h3>
            <div className="space-y-5">
              {other.map((skill, i) => (
                <SkillBar key={skill.name} {...skill} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
