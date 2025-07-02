import { AlignCenterVertical as Certificate, ExternalLink, Calendar, CheckCircle, Award } from "lucide-react";
import { motion } from "framer-motion";

const certifications = [
  {
    id: 1,
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2024",
    credentialId: "AWS-CSA-2024-001",
    verifyUrl: "#",
    skills: ["Cloud Architecture", "AWS Services", "Security", "Scalability"],
    color: "from-orange-500 to-yellow-500"
  },
  {
    id: 2,
    name: "Google Cloud Professional Developer",
    issuer: "Google Cloud",
    date: "2023",
    credentialId: "GCP-PD-2023-045",
    verifyUrl: "#",
    skills: ["GCP Services", "Kubernetes", "DevOps", "Microservices"],
    color: "from-blue-500 to-green-500"
  },
  {
    id: 3,
    name: "Meta Frontend Developer Professional",
    issuer: "Meta (Facebook)",
    date: "2023",
    credentialId: "META-FE-2023-789",
    verifyUrl: "#",
    skills: ["React", "JavaScript", "HTML/CSS", "UI/UX"],
    color: "from-blue-600 to-purple-600"
  },
  {
    id: 4,
    name: "MongoDB Certified Developer",
    issuer: "MongoDB University",
    date: "2022",
    credentialId: "MDB-DEV-2022-456",
    verifyUrl: "#",
    skills: ["NoSQL", "Database Design", "Aggregation", "Performance"],
    color: "from-green-600 to-green-400"
  },
  {
    id: 5,
    name: "Certified Kubernetes Administrator",
    issuer: "Cloud Native Computing Foundation",
    date: "2022",
    credentialId: "CKA-2022-123",
    verifyUrl: "#",
    skills: ["Kubernetes", "Container Orchestration", "DevOps", "Linux"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 6,
    name: "Certified Ethical Hacker",
    issuer: "EC-Council",
    date: "2021",
    credentialId: "CEH-2021-987",
    verifyUrl: "#",
    skills: ["Cybersecurity", "Penetration Testing", "Network Security", "Risk Assessment"],
    color: "from-red-500 to-pink-500"
  }
];

export const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Professional <span className="text-primary">Certifications</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Industry-recognized certifications that validate my expertise in modern technologies and best practices.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.03,
                rotateY: 5,
                boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
                y: -10
              }}
              className="group bg-card rounded-xl overflow-hidden shadow-lg border-2 border-border/50 hover:border-primary/30 transition-all duration-500 relative"
            >
              {/* Header with gradient background */}
              <div className={`relative p-6 pb-4 bg-gradient-to-br ${cert.color} bg-opacity-5`}>
                <div className="flex items-start justify-between mb-4">
                  <motion.div 
                    className="w-14 h-14 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Certificate className="h-7 w-7 text-primary" />
                  </motion.div>
                  <motion.a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-300 border border-primary/20 hover:border-primary/40"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="h-4 w-4" />
                  </motion.a>
                </div>

                <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors leading-tight">
                  {cert.name}
                </h3>
                <p className="text-primary font-semibold mb-2">{cert.issuer}</p>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Calendar className="h-4 w-4" />
                  <span>Issued {cert.date}</span>
                  <CheckCircle className="h-4 w-4 text-green-500 ml-auto" />
                </div>

                <div className="text-xs text-muted-foreground bg-secondary/30 px-3 py-2 rounded-full inline-block border">
                  ID: {cert.credentialId}
                </div>
              </div>

              {/* Skills section */}
              <div className="px-6 pb-6">
                <h4 className="font-semibold text-sm mb-3 flex items-center gap-2">
                  <Award className="h-4 w-4 text-primary" />
                  Skills Validated:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border-2 border-primary/20 hover:bg-primary/20 hover:border-primary/40 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Hover effect overlay */}
              <motion.div 
                className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}
                initial={false}
              />
            </motion.div>
          ))}
        </div>

        {/* Enhanced Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { number: certifications.length, label: "Active Certifications", suffix: "+" },
            { number: 4, label: "Technology Domains", suffix: "" },
            { number: 100, label: "Verification Rate", suffix: "%" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-card rounded-xl border-2 border-border/50 hover:border-primary/30 transition-all duration-500 group"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <motion.div 
                className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                {stat.number}{stat.suffix}
              </motion.div>
              <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};