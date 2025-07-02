import { Award, Trophy, Star, Medal, Calendar, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const awards = [
  {
    id: 1,
    title: "Best Developer Portfolio 2024",
    organization: "TechCrunch Awards",
    year: "2024",
    description: "Recognized for outstanding design and technical implementation in portfolio development.",
    icon: Trophy,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
    borderColor: "border-yellow-500/20",
    verifyUrl: "#"
  },
  {
    id: 2,
    title: "Innovation in Web Design",
    organization: "Awwwards",
    year: "2023",
    description: "Honored for creative use of animations and user experience design.",
    icon: Star,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
    verifyUrl: "#"
  },
  {
    id: 3,
    title: "Outstanding Achievement in Frontend",
    organization: "Frontend Masters",
    year: "2023",
    description: "Excellence in modern frontend development practices and performance optimization.",
    icon: Award,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
    verifyUrl: "#"
  },
  {
    id: 4,
    title: "Community Choice Award",
    organization: "Dev.to",
    year: "2022",
    description: "Most helpful contributor in the React and JavaScript community.",
    icon: Medal,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/20",
    verifyUrl: "#"
  }
];

export const AwardsSection = () => {
  return (
    <section id="awards" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Awards & <span className="text-primary">Honours</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Recognition for excellence in web development, design innovation, and community contributions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {awards.map((award, index) => {
            const IconComponent = award.icon;
            return (
              <motion.div
                key={award.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
                  y: -5
                }}
                className={`group bg-card rounded-xl p-6 shadow-lg border-2 ${award.borderColor} hover:border-opacity-50 transition-all duration-500 relative overflow-hidden`}
              >
                {/* Background gradient overlay */}
                <div className={`absolute inset-0 ${award.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-start gap-4">
                    <motion.div 
                      className={`p-4 rounded-full ${award.bgColor} group-hover:scale-110 transition-all duration-300 border-2 ${award.borderColor}`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <IconComponent className={`h-8 w-8 ${award.color}`} />
                    </motion.div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="font-bold text-lg group-hover:text-primary transition-colors duration-300 leading-tight">
                          {award.title}
                        </h3>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full border">
                            {award.year}
                          </span>
                          <motion.a
                            href={award.verifyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors opacity-0 group-hover:opacity-100"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <ExternalLink className="h-4 w-4" />
                          </motion.a>
                        </div>
                      </div>
                      <p className="text-primary font-semibold mb-3 flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {award.organization}
                      </p>
                      <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                        {award.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
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
            { number: awards.length, label: "Awards Received", suffix: "+" },
            { number: 4, label: "Years of Recognition", suffix: "" },
            { number: 100, label: "Recognition Rate", suffix: "%" }
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