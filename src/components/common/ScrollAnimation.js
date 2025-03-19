import React from 'react';
import { motion } from 'framer-motion';

// 기본 애니메이션 변형
const defaultVariants = {
  hidden: { 
    opacity: 0,
    y: 50
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

// 스크롤 애니메이션 컴포넌트
const ScrollAnimation = ({ 
  children, 
  variants = defaultVariants,
  delay = 0,
  margin = "0px",
  once = true,
  className = ""
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ 
        once, 
        margin,
        amount: "some" // 요소가 하나라도 보일 때 애니메이션 시작
      }}
      variants={{
        ...variants,
        visible: {
          ...variants.visible,
          transition: {
            ...variants.visible.transition,
            delay
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation; 