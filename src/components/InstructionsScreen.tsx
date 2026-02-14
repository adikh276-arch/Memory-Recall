import { motion } from "framer-motion";

interface Props {
  onNext: () => void;
}

const InstructionsScreen = ({ onNext }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="text-center space-y-8"
    >
      <div className="space-y-3">
        <p className="text-sm font-light tracking-[0.2em] uppercase text-muted-foreground">
          Activity
        </p>
        <h1 className="text-5xl md:text-6xl font-light italic text-foreground leading-tight">
          Memory Recall
        </h1>
      </div>

      <div className="bg-card rounded-2xl p-8 md:p-10 text-left space-y-5 border border-border/50">
        <h2 className="text-2xl font-light text-foreground">
          Reading & Recall
        </h2>
        <div className="space-y-4 text-muted-foreground font-light leading-relaxed">
          <p>
            You will read a short passage on the next screen. Please read it
            carefully and try to remember as many details as you can.
          </p>
        </div>
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={onNext}
        className="bg-primary text-primary-foreground px-10 py-3.5 rounded-full font-light tracking-wide text-sm transition-colors hover:opacity-90"
      >
        Next
      </motion.button>
    </motion.div>
  );
};

export default InstructionsScreen;
