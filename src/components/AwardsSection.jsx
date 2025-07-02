import { Award, Trophy, Star, Medal } from "lucide-react";
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
    bgColor: "bg-yellow-500/10"
  },
  {
    id: 2,
    title: "Innovation in Web Design",
    organization: "Awwwards",
    year: "2023",
    description: "Honored for creative use of animations and user experience design.",
    icon: Star,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10"
  },
  {
    id: 3,
    title: "Outstanding Achievement in Frontend",
    organization: "Frontend Masters",
    year: "2023",
    description: "Excellence in modern frontend development practices and performance optimization.",
    icon: Award,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10"
  },
  {
    id: 4,
    title: "Community Choice Award",
    organization: "Dev.to",
    year: "2022",
    description: "Most helpful contributor in the React and JavaScript community.",
    icon: Medal,
    color: "text-green-500",
    bgColor: "bg-green-500/10"
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
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                }}
                className="group bg-card rounded-xl p-6 shadow-sm border border-border/50 hover:border-primary/20 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <motion.div 
                    className={`p-3 rounded-full ${award.bgColor} group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <IconComponent className={`h-6 w-6 ${award.color}`} />
                  </motion.div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                        {award.title}
                      </h3>
                      <span className="text-sm text-muted-foreground bg-secondary/50 px-2 py-1 rounded-full">
                        {award.year}
                      </span>
                    </div>
                    <p className="text-primary font-medium mb-2">{award.organization}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {award.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};