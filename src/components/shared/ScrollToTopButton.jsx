import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTopButton() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`
        fixed bottom-6 right-6 z-50
        w-10  h-10  flex justify-center items-center rounded-full
        bg-primary text-white
        shadow-lg
        transition-all duration-300 ease-in-out
        hover:scale-110 hover:bg-primary/80 cursor-pointer
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"}
      `}
            aria-label="Scroll to top"
        >
            <ArrowUp size={22} />
        </button>
    );
}
