import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps {
  title: string;
  children: React.ReactNode[];
  autoScroll?: boolean;
  autoScrollInterval?: number;
}

const Carousel = ({ 
  title, 
  children, 
  autoScroll = false, 
  autoScrollInterval = 5000 
}: CarouselProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  
  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10); // 10px threshold
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", checkScrollButtons);
      checkScrollButtons();
      return () => scrollContainer.removeEventListener("scroll", checkScrollButtons);
    }
  }, []);

  useEffect(() => {
    if (autoScroll && canScrollRight) {
      const interval = setInterval(() => {
        if (scrollContainerRef.current && canScrollRight) {
          scrollRight();
        } else if (scrollContainerRef.current) {
          // Reset to start when reached the end
          scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
        }
      }, autoScrollInterval);
      
      return () => clearInterval(interval);
    }
  }, [autoScroll, autoScrollInterval, canScrollRight]);

  return (
    <div className="w-full py-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">{title}</h2>
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            size="icon" 
            onClick={scrollLeft}
            disabled={!canScrollLeft}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button 
            variant="outline" 
            size="icon" 
            onClick={scrollRight}
            disabled={!canScrollRight}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        onScroll={checkScrollButtons}
      >
        {children.map((child, index) => (
          <div key={index} className="snap-start flex-shrink-0">
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
