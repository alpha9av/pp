import { GraduationCap, Calendar, MapPin, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

const education = [
  {
    id: 1,
    degree: "Master of Computer Science",
    institution: "Stanford University",
    location: "Stanford, CA",
    period: "2020 - 2022",
    gpa: "3.9/4.0",
    description: "Specialized in Human-Computer Interaction and Web Technologies. Thesis on 'Modern Frontend Architecture Patterns'.",
    achievements: [
      "Dean's List for 4 consecutive semesters",
      "Graduate Research Assistant",
      "Published 2 papers on web performance optimization"
    ]
  },
  {
    id: 2,
    degree: "Bachelor of Software Engineering",
    institution: "University of British Columbia",
    location: "Vancouver, BC",
    period: "2016 - 2020",
    gpa: "3.8/4.0",
    description: "Comprehensive study in software development, algorithms, and system design with focus on web technologies.",
    achievements: [
      "Summa Cum Laude graduate",
      "President of Computer Science Society",
      "Winner of Annual Hackathon 2019"
    ]
  },
  {
    id: 3,
    degree: "Web Development Bootcamp",
    institution: "Lambda School",
    location: "Remote",
    period: "2015 - 2016",
    gpa: "Top 5%",
    description: "Intensive full-stack web development program covering modern frameworks and industry best practices.",
    achievements: [
      "Top performer in cohort",
      "Mentored 15+ junior developers",
      "Built 10+ production-ready applications"
    ]
  }
];

export const EducationSection = () => {
  return (
    <section id="education" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            My <span className="text-primary">Education</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Academic journey and continuous learning that shaped my expertise in web development and computer science.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent transform md:-translate-x-0.5"></div>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:gap-8`}
              >
                {/* Timeline dot */}
                <motion.div 
                  className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full transform md:-translate-x-2 z-10 shadow-lg"
                  whileHover={{ scale: 1.5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75"></div>
                </motion.div>

                {/* Content card */}
                <motion.div 
                  className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                    index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-card rounded-xl p-6 shadow-lg border border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-xl">
                    <div className="flex items-start gap-3 mb-4">
                      <motion.div 
                        className="p-2 rounded-lg bg-primary/10"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <GraduationCap className="h-5 w-5 text-primary" />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="font-bold text-xl mb-1 hover:text-primary transition-colors">
                          {edu.degree}
                        </h3>
                        <p className="text-primary font-semibold">{edu.institution}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {edu.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {edu.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <BookOpen className="h-4 w-4" />
                        GPA: {edu.gpa}
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {edu.description}
                    </p>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {edu.achievements.map((achievement, i) => (
                          <motion.li 
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: i * 0.1 }}
                            className="text-sm text-muted-foreground flex items-start gap-2"
                          >
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            {achievement}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};