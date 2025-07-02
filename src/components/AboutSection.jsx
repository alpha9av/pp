import { Briefcase, Code, User } from "lucide-react";
import { motion } from "framer-motion";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About <span className="text-primary">Me</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold">
              Passionate Web Developer & Tech Creator
            </h3>

            <p className="text-muted-foreground">
              With over 5 years of experience in web development, I specialize
              in creating responsive, accessible, and performant web
              applications using modern technologies.
            </p>

            <p className="text-muted-foreground">
              I'm passionate about creating elegant solutions to complex
              problems, and I'm constantly learning new technologies and
              techniques to stay at the forefront of the ever-evolving web
              landscape.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <motion.a 
                href="#contact" 
                className="enhanced-button bg-primary text-primary-foreground hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] hover:scale-105 active:scale-95 transition-all duration-300"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>

              <motion.a
                href=""
                className="enhanced-button border-2 border-primary text-primary hover:bg-primary/10 hover:shadow-[0_10px_30px_rgba(139,92,246,0.3)] hover:scale-105 active:scale-95 transition-all duration-300"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Download CV
              </motion.a>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            {[
              {
                icon: Code,
                title: "Web Development",
                description: "Creating responsive websites and web applications with modern frameworks.",
                color: "text-blue-500",
                bgColor: "bg-blue-500/10",
                borderColor: "border-blue-500/20"
              },
              {
                icon: User,
                title: "UI/UX Design",
                description: "Designing intuitive user interfaces and seamless user experiences.",
                color: "text-purple-500",
                bgColor: "bg-purple-500/10",
                borderColor: "border-purple-500/20"
              },
              {
                icon: Briefcase,
                title: "Project Management",
                description: "Leading projects from conception to completion with agile methodologies.",
                color: "text-green-500",
                bgColor: "bg-green-500/10",
                borderColor: "border-green-500/20"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-xl border-2 ${item.borderColor} bg-card hover:bg-gradient-to-br hover:from-card hover:to-${item.bgColor} transition-all duration-500 group cursor-pointer`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  y: -5
                }}
              >
                <div className="flex items-start gap-4">
                  <motion.div 
                    className={`p-3 rounded-full ${item.bgColor} group-hover:scale-110 transition-all duration-300`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <item.icon className={`h-6 w-6 ${item.color}`} />
                  </motion.div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg group-hover:text-primary transition-colors duration-300">{item.title}</h4>
                    <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};