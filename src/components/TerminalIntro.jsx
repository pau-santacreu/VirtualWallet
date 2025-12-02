import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function TerminalIntro({ onComplete, config }) {
  const [text, setText] = useState("");
  const fullText = `${config.command}`;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i + 1));
      i++;
      if (i > fullText.length) {
        clearInterval(interval);
        setTimeout(onComplete, 800); // Espera 800ms abans d'obrir la web
      }
    }, 100); // Velocitat d'escriptura
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-black text-green-500 font-mono text-xl">
      <div className="flex items-center gap-2">
        <span>{config.user}@{config.host}:~$</span>
        <span>{text}</span>
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="w-3 h-6 bg-green-500 block"
        />
      </div>
    </div>
  );
}