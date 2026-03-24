import { motion } from "framer-motion";
import { Mail, Phone, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm tracking-widest mb-3">// contato</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            Vamos conversar<span className="text-primary">?</span>
          </h2>
          <p className="text-secondary-foreground text-lg max-w-xl mx-auto mb-12 leading-relaxed">
            Estou aberto a novas oportunidades e projetos interessantes.
            Sinta-se à vontade para entrar em contato!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6"
        >
          <a
            href="mailto:fillipivillani2024@gmail.com"
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-heading text-sm font-semibold hover:opacity-90 transition-opacity glow-box"
          >
            <Mail className="w-4 h-4" />
            E-mail
          </a>
          <a
            href="https://wa.me/5547996277454"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-lg border border-glow text-foreground font-heading text-sm font-semibold hover:bg-secondary transition-colors"
          >
            <Phone className="w-4 h-4" />
            WhatsApp
          </a>
          <a
            href="https://www.linkedin.com/in/fstiehler"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-lg border border-glow text-foreground font-heading text-sm font-semibold hover:bg-secondary transition-colors"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-20 font-mono text-muted-foreground text-xs"
        >
          &lt;/&gt; Feito com dedicação &amp; café ☕
        </motion.p>
      </div>
    </section>
  );
};

export default Contact;
