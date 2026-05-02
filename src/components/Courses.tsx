import { motion } from "framer-motion";
import { BookOpen, Calendar, GraduationCap } from "lucide-react";

const Courses = () => {
  return (
    <section id="cursos" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm tracking-widest mb-3">// formação</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-12">
            Cursos & Especializações<span className="text-primary">.</span>
          </h2>
        </motion.div>

        <div className="relative border-l-2 border-glow pl-8 ml-4 space-y-12">

          {/* Faculdade */}
          <motion.div className="relative">
            <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-primary glow-box" />

            <div className="flex items-center gap-2 mb-2">
              <GraduationCap className="w-4 h-4 text-primary" />
              <h3 className="font-heading text-lg font-bold text-foreground">
                Engenharia de Software
              </h3>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
              <span className="font-mono text-primary font-semibold">UniCesumar</span>
              <span>·</span>
              <Calendar className="w-3.5 h-3.5" />
              <span>2026 - 2030</span>
            </div>

            <p className="text-secondary-foreground">
              Graduação focada em desenvolvimento de software, arquitetura de sistemas e boas práticas de engenharia.
            </p>
          </motion.div>

          {/* 2026 */}
          <motion.div className="relative">
            <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-primary glow-box" />

            <div className="flex items-center gap-2 mb-2">
              <BookOpen className="w-4 h-4 text-primary" />
              <h3 className="font-heading text-lg font-bold text-foreground">
                Java, Inglês e Empreendedorismo
              </h3>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
              <span className="font-mono text-primary font-semibold">Entra21</span>
              <span>·</span>
              <Calendar className="w-3.5 h-3.5" />
              <span>2026 · 6 meses (duração)</span>
            </div>

            <p className="text-secondary-foreground">
              Formação focada em desenvolvimento backend com Java, comunicação em inglês e visão de negócios aplicada à tecnologia.
            </p>
          </motion.div>

          {/* 2024 */}
          <motion.div className="relative">
            <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-primary glow-box" />

            <div className="flex items-center gap-2 mb-2">
              <BookOpen className="w-4 h-4 text-primary" />
              <h3 className="font-heading text-lg font-bold text-foreground">
                Golang
              </h3>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
              <span className="font-mono text-primary font-semibold">FullCycle</span>
              <span>·</span>
              <Calendar className="w-3.5 h-3.5" />
              <span>2024</span>
            </div>

            <p className="text-secondary-foreground">
              Desenvolvimento de APIs e serviços backend com foco em performance, concorrência e boas práticas de arquitetura.
            </p>
          </motion.div>

          {/* 2023 */}
          <motion.div className="relative">
            <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-primary glow-box" />

            <div className="flex items-center gap-2 mb-2">
              <BookOpen className="w-4 h-4 text-primary" />
              <h3 className="font-heading text-lg font-bold text-foreground">
                JavaScript, React & TypeScript
              </h3>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
              <span className="font-mono text-primary font-semibold">ProWay</span>
              <span>·</span>
              <Calendar className="w-3.5 h-3.5" />
              <span>2023</span>
            </div>

            <p className="text-secondary-foreground">
              Criação de interfaces modernas e escaláveis utilizando React, tipagem com TypeScript e boas práticas de desenvolvimento frontend.
            </p>
          </motion.div>

          {/* 2022 */}
          <motion.div className="relative">
            <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-primary glow-box" />

            <div className="flex items-center gap-2 mb-2">
              <BookOpen className="w-4 h-4 text-primary" />
              <h3 className="font-heading text-lg font-bold text-foreground">
                UI/UX Design
              </h3>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
              <span className="font-mono text-primary font-semibold">ProWay</span>
              <span>·</span>
              <Calendar className="w-3.5 h-3.5" />
              <span>2022</span>
            </div>

            <p className="text-secondary-foreground">
              Princípios de design centrado no usuário, usabilidade e criação de interfaces intuitivas e eficientes.
            </p>
          </motion.div>

          {/* 2021 */}
          <motion.div className="relative">
            <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-primary glow-box" />

            <div className="flex items-center gap-2 mb-2">
              <BookOpen className="w-4 h-4 text-primary" />
              <h3 className="font-heading text-lg font-bold text-foreground">
                HTML & CSS
              </h3>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
              <span className="font-mono text-primary font-semibold">ProWay</span>
              <span>·</span>
              <Calendar className="w-3.5 h-3.5" />
              <span>2021</span>
            </div>

            <p className="text-secondary-foreground">
              Base sólida em estruturação e estilização de páginas web, com foco em responsividade e boas práticas.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Courses;

