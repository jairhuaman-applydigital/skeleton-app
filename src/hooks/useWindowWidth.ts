import { useState, useEffect } from "react";

export default function useWindowWidth() {
    const [width, setWidth] = useState<number | undefined>(undefined);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const handleResize = () => setWidth(window.innerWidth);

            setWidth(window.innerWidth);

            window.addEventListener("resize", handleResize);

            return () => window.removeEventListener("resize", handleResize);
        }
    }, []);

    return width;
}
