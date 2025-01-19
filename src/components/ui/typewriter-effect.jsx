import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
}) => {
  // Split text into an array of words and capitalize the first letter
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text
        .split(" ")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1)),
    };
  });

  const renderWords = () => {
    return (
      <div className="flex space-x-2">
        {" "}
        {/* Adding space between words */}
        {wordsArray.map((word, idx) => (
          <div key={`word-${idx}`} className="inline-block">
            {word.text.map((char, index) => (
              <span
                key={`char-${index}`}
                className={cn("text-white", word.className)}
              >
                {char}{" "}
              </span>
            ))}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className={cn("flex items-center md:my-6 my-10 ", className)}>
      <motion.div
        className="overflow-hidden pb-2"
        initial={{
          width: "0%",
        }}
        whileInView={{
          width: "fit-content",
        }}
        transition={{
          duration: 2,
          ease: "linear",
          delay: 1,
        }}
      >
        <div
          className="sm:text-base uppercase text-md lg:text-3xl xl:text-5xl font-bold"
          style={{
            whiteSpace: "nowrap",
          }}
        >
          {renderWords()}{" "}
        </div>
      </motion.div>
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "block rounded-sm w-[4px] h-4 sm:h-6 xl:h-12 bg-blue-500",
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};
