// "use client"
// import { useRouter } from 'next/navigation'; // Import useRouter from next/navigation

// export default function Page() {
//     const router = useRouter(); // Initialize the router

//     return (
//         <div
//             style={{
//                 height: "100vh",
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 backgroundColor: "black",
//                 cursor: "pointer", // Makes the page clickable
//             }}
//             onClick={() => router.push('/scene12')} // Navigate to /scene2 when clicked
//         >
//             <img
//                 src="/14.GIF"
//                 style={{
//                     maxHeight: "100vh",
//                     height: "auto",
//                     width: "auto",
//                     maxWidth: "100%",
//                 }}
//             />
//         </div>
//     );
// }


"use client";

import { useRouter } from 'next/navigation'; // Import useRouter from next/navigation
import { useState, useEffect } from 'react'; // Import useState and useEffect for state and lifecycle handling

export default function Page() {
    const router = useRouter(); // Initialize the router
    const [visible, setVisible] = useState(false); // State to control button visibility
    const [clickable, setClickable] = useState(false); // State to control whether clicking is allowed

    // UseEffect to control visibility and clickability after the GIF's duration
    useEffect(() => {
        const gifDuration = 20000; // Set the GIF duration in milliseconds (e.g., 32000ms = 32 seconds)
        const timer = setTimeout(() => {
            setVisible(true); // Make the button visible after GIF ends
            setClickable(true); // Enable clicking after GIF ends
        }, gifDuration);

        return () => clearTimeout(timer); // Cleanup the timer
    }, []);

    return (
        <div
            style={{
                height: "100vh", // Full viewport height
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "black",
                position: "relative", // Allows the button to stay inside the GIF frame
            }}
        >
            {/* Wrapper for the GIF and the button */}
            <div
                style={{
                    position: "relative",
                    height: "100%", // Makes the container occupy full height
                    width: "auto", // Maintains aspect ratio of GIF
                }}
            >
                {/* Display the GIF */}
                <img
                    src="/14.GIF"
                    style={{
                        maxHeight: "100%", // Occupy full container height
                        height: "auto", // Keep proportions
                        width: "auto",
                        maxWidth: "100%", // Prevent overflow
                        display: "block", // Prevent inline space below the GIF
                    }}
                />

                {/* Button to navigate (only clickable after GIF finishes) */}
                <img
                    src="/next.png"
                    alt="Next"
                    style={{
                        position: "absolute",
                        bottom: "25px", // Align button to the bottom of the GIF frame
                        right: "20px", // Align button to the right corner
                        cursor: clickable ? "pointer" : "not-allowed", // Change cursor based on clickable state
                        opacity: visible ? 1 : 0, // Control visibility with opacity
                        transition: "opacity 1s ease-in-out", // Smooth fading effect
                        width: "60px", // Set button size
                        height: "auto",
                    }}
                    onClick={() => {
                        if (clickable) {
                            router.push('/scene12'); // Navigate only if clickable is true
                        }
                    }}
                />
            </div>
        </div>
    );
}
