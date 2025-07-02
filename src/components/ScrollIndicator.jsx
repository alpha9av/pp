import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export const ScrollIndicator = () => {
  return (
    <motion.div 
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex flex-col items-center cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.2 }}
      onClick={() => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
      }}
    >
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="flex flex-col items-center gap-3"
      >
        <motion.span 
          className="text-sm font-medium text-muted-foreground bg-background/90 backdrop-blur-md px-4 py-2 rounded-full border-2 border-primary/20 shadow-lg hover:border-primary/40 transition-all duration-300"
          whileHover={{ scale: 1.05, y: -2 }}
          transition={{ duration: 0.2 }}
        >
          <span className="flex items-center gap-2">
            👉 <span className="hidden sm:inline">Scroll down to explore</span>
            <span className="sm:hidden">Explore</span>
          </span>
        </motion.span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="p-3 rounded-full bg-primary/10 border-2 border-primary/30 hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 shadow-lg"
          whileHover={{ scale: 1.1 }}
        >
          <ChevronDown className="h-5 w-5 text-primary" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};