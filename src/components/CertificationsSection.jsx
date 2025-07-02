import { AlignCenterVertical as Certificate, ExternalLink, Calendar, CheckCircle } from "lucide-react";
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
    logo: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2"
  },
  {
    id: 2,
    name: "Google Cloud Professional Developer",
    issuer: "Google Cloud",
    date: "2023",
    credentialId: "GCP-PD-2023-045",
    verifyUrl: "#",
    skills: ["GCP Services", "Kubernetes", "DevOps", "Microservices"],
    logo: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2"
  },
  {
    id: 3,
    name: "Meta Frontend Developer Professional",
    issuer: "Meta (Facebook)",
    date: "2023",
    credentialId: "META-FE-2023-789",
    verifyUrl: "#",
    skills: ["React", "JavaScript", "HTML/CSS", "UI/UX"],
    logo: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2"
  },
  {
    id: 4,
    name: "MongoDB Certified Developer",
    issuer: "MongoDB University",
    date: "2022",
    credentialId: "MDB-DEV-2022-456",
    verifyUrl: "#",
    skills: ["NoSQL", "Database Design", "Aggregation", "Performance"],
    logo: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2"
  },
  {
    id: 5,
    name: "Certified Kubernetes Administrator",
    issuer: "Cloud Native Computing Foundation",
    date: "2022",
    credentialId: "CKA-2022-123",
    verifyUrl: "#",
    skills: ["Kubernetes", "Container Orchestration", "DevOps", "Linux"],
    logo: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2"
  },
  {
    id: 6,
    name: "Certified Ethical Hacker",
    issuer: "EC-Council",
    date: "2021",
    credentialId: "CEH-2021-987",
    verifyUrl: "#",
    skills: ["Cybersecurity", "Penetration Testing", "Network Security", "Risk Assessment"],
    logo: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2"
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
                boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
              }}
              className="group bg-card rounded-xl overflow-hidden shadow-lg border border-border/50 hover:border-primary/30 transition-all duration-300"
            >
              {/* Header with logo and verify button */}
              <div className="relative p-6 pb-4">
                <div className="flex items-start justify-between mb-4">
                  <motion.div 
                    className="w-12 h-12 rounded-lg overflow-hidden bg-secondary/50 flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Certificate className="h-6 w-6 text-primary" />
                  </motion.div>
                  <motion.a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="h-4 w-4" />
                  </motion.a>
                </div>

                <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors leading-tight">
                  {cert.name}
                </h3>
                <p className="text-primary font-semibold mb-1">{cert.issuer}</p>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Calendar className="h-4 w-4" />
                  <span>Issued {cert.date}</span>
                  <CheckCircle className="h-4 w-4 text-green-500 ml-auto" />
                </div>

                <div className="text-xs text-muted-foreground bg-secondary/30 px-3 py-1 rounded-full inline-block">
                  ID: {cert.credentialId}
                </div>
              </div>

              {/* Skills section */}
              <div className="px-6 pb-6">
                <h4 className="font-semibold text-sm mb-3">Skills Validated:</h4>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20 hover:bg-primary/20 transition-colors cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Hover effect overlay */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                initial={false}
              />
            </motion.div>
          ))}
        </div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <motion.div 
              className="text-3xl font-bold text-primary mb-2"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {certifications.length}+
            </motion.div>
            <p className="text-muted-foreground">Active Certifications</p>
          </div>
          <div className="text-center">
            <motion.div 
              className="text-3xl font-bold text-primary mb-2"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              4
            </motion.div>
            <p className="text-muted-foreground">Technology Domains</p>
          </div>
          <div className="text-center">
            <motion.div 
              className="text-3xl font-bold text-primary mb-2"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              100%
            </motion.div>
            <p className="text-muted-foreground">Verification Rate</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};