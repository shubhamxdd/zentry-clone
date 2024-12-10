import gsap from "gsap";
import { useEffect, useRef } from "react";

interface AnimatedTitleProps {
  title: string;
  containerClass: string;
  sectionId?: string
}

const AnimatedTitle = ({ title, containerClass,sectionId }: AnimatedTitleProps) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const gsapContext = gsap.context(() => {
      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "100 bottom",
          end: "center bottom",
          toggleActions: "play none none reverse",
        },
      });
      titleAnimation.to(".animated-word", {
        opacity: 1,
        transform: "translate3d(0,0,0) rotateY(0deg) rotateX(0deg)",
        ease: "power2.inOut",
        stagger: 0.02,
      });
    }, containerRef);

    return () => gsapContext.revert();
  }, []);

  return (
    <div className={`animated-title ${containerClass}`} ref={containerRef}>
      {title.split("<br />").map((line, index) => (
        <div
          className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3"
          key={index}
        >
          {line.split(" ").map((word, index) => (
            <span
              className="animated-word"
              dangerouslySetInnerHTML={{ __html: word }}
              key={index}
            ></span>
          ))}
        </div>
      ))}
    </div>
  );
};

export default AnimatedTitle;
