import * as React from "react";
import { motion } from "motion/react";

interface RevealProps extends React.PropsWithChildren {
  delay?: number;
  as?: React.ElementType;
  className?: string;
}

export function Reveal({ children, delay = 0, as: Comp = "div", className }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.75, delay }}
      className={className}
      as={Comp}
    >
      {children}
    </motion.div>
  );
}

interface RevealTextProps extends React.PropsWithChildren<{
  text: string;
  as?: React.ElementType;
  className?: string;
}> {}

export function RevealText({ text, as: Comp = "h2", className }: RevealTextProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.75, delay: 0.1 }}
      className={className}
      as={Comp}
    >
      {text}
    </motion.div>
  );
}
