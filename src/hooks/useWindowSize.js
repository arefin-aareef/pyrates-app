import { useState, useEffect } from "react";

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined
    });

    useEffect(() => {
        // This function will track window size when call in action
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }
        // Calling the function inside useEffect to run at load time
        handleResize();
        // Get values to continue to adjust window size
        window.addEventListener("resize", handleResize);
        // Clean up to prevent memory leak
        const cleanUp = () => {
            console.log('runs if useEffect dependencies changes')
            window.removeEventListener("resize", handleResize);
        }

        return cleanUp;

    }, [])

    return windowSize;
}

export default useWindowSize;