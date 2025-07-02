import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export const ScrollIndicator = () => {
  return (
    <motion.div 
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex flex-col items-center cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
      onClick={() => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
      }}
    >
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="flex flex-col items-center gap-2"
      >
        <motion.span 
          className="text-sm font-medium text-muted-foreground bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full border border-border/50 shadow-lg"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          👉 Scroll down to explore
        </motion.span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="p-2 rounded-full bg-primary/10 border border-primary/20"
        >
          <ChevronDown className="h-4 w-4 text-primary" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};