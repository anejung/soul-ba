
// "use client";

// import { useRouter } from 'next/navigation'; // Import useRouter from next/navigation
// import { useState, useEffect } from 'react';

// export default function Page() {
//     const router = useRouter(); // Initialize the router
//     const [visible, setVisible] = useState(false); // State to control button visibility
//     const [clickable, setClickable] = useState(false); 

//     return (
//         <div
//             style={{
//                 height: "100vh",
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 backgroundColor: "white",
//                 color: "black", // Text color
//                 fontFamily: "'Anuphan', sans-serif", // Font styling
//                 cursor: "pointer", // Makes the page clickable
//                 textAlign: "center", // Centers the text horizontally
//                 padding: "20px", // Adds padding to the text
//             }}
//             // onClick={() => router.push('/scene3')} // Navigate to /scene3 when clicked
//         >
//             {/* Text Content */}
//             <p style={{ fontSize: "1rem", lineHeight: "2rem" }}>
//                 ในตำนานเล่าว่า บนยอดเขาโจโจ <br />
//                 มีปรมาจารย์โซบะผู้สามารถปรุงโซบะ <br />
//                 ที่สะท้อนถึงจิตวิญญาณของผู้กินได้
//             </p>

//             {/* Button to navigate (only clickable after GIF finishes) */}
//             <img
//                     src="/next.png"
//                     alt="Next"
//                     style={{
//                         position: "absolute",
//                         bottom: "25px", // Align button to the bottom of the GIF frame
//                         right: "20px", // Align button to the right corner
//                         cursor: clickable ? "pointer" : "not-allowed", // Change cursor based on clickable state
//                         opacity: visible ? 1 : 0, // Control visibility with opacity
//                         transition: "opacity 1s ease-in-out", // Smooth fading effect
//                         width: "60px", // Set button size
//                         height: "auto",
//                     }}
//                     onClick={() => {
//                         if (clickable) {
//                             router.push('/scene2'); // Navigate only if clickable is true
//                         }
//                     }}
//                 />
//         </div>
//     );
// }
//////////
// "use client";

// export default function Page() {
//     return (
//         <div
//             style={{
//                 height: "100vh", // Full height of the browser viewport
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 backgroundColor: "white", // Outer background color
//                 margin: 0, // Ensure no external gaps
//                 overflow: "hidden", // Prevent overflow causing scrollbars
//                 position: "relative", // Enable positioning for child frame
//             }}
//         >
//             {/* Second frame with exact 1572:3408 ratio */}
//             <div
//                 style={{
//                     position: "fixed", // Fixed to browser viewport
//                     width: "100vw", // Full width of the viewport
//                     height: "100vh", // Full height of the viewport
//                     display: "flex",
//                     justifyContent: "center",
//                     alignItems: "center",
//                     overflow: "hidden", // Ensure no content overflow
//                 }}
//             >
//                 <div
//                     style={{
//                         width: "auto", // Let the height dictate the scaling
//                         height: "100%", // Full height of the second frame
//                         aspectRatio: "1572 / 3408", // Maintain exact ratio of 1572:3408
//                         backgroundColor: "black", // Frame background color
//                         position: "relative", // Allow absolute positioning for elements inside
//                     }}
//                 >
//                     {/* Text centered inside the second frame */}
//                     <div
//                         style={{
//                             position: "absolute",
//                             top: "50%",
//                             left: "50%",
//                             transform: "translate(-50%, -50%)", // Perfectly center the text
//                             color: "white", // Text color
//                             fontFamily: "'Anuphan', sans-serif", // Font styling
//                             fontSize: "1.5rem", // Text size
//                             textAlign: "center", // Center-align the text
//                             lineHeight: "2.5rem", // Line spacing
//                         }}
//                     >
//                         ในตำนานเล่าว่า บนยอดเขาโจโจ <br />
//                         มีปรมาจารย์โซบะผู้สามารถปรุงโซบะ <br />
//                         ที่สะท้อนถึงจิตวิญญาณของผู้กินได้
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }


//////////////////

"use client";

import { useRouter } from 'next/navigation'; // Import useRouter from next/navigation
import { useState, useEffect } from 'react'; // Import useState and useEffect for state and lifecycle handling

export default function Page() {
    const router = useRouter(); // Initialize the router
    const [visible, setVisible] = useState(false); // State to control button visibility
    const [clickable, setClickable] = useState(false); // State to control whether clicking is allowed

    // UseEffect to control visibility and clickability after the GIF's duration
    useEffect(() => {
        const gifDuration = 1000; // Set the GIF duration in milliseconds (e.g., 32000ms = 32 seconds)
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
                    <div
                    style={{
                        position: "fixed", // Fixed to browser viewport
                        width: "100vw", // Full width of the viewport
                        height: "100vh", // Full height of the viewport
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        overflow: "hidden", // Ensure no content overflow
                    }}
                >
                    <div
                        style={{
                            width: "auto", // Let the height dictate the scaling
                            height: "100%", // Full height of the second frame
                            aspectRatio: "1572 / 3408", // Maintain exact ratio of 1572:3408
                            backgroundColor: "black", // Frame background color
                            position: "relative", // Allow absolute positioning for elements inside
                        }}
                    >
                        {/* Text centered inside the second frame */}
                        <div
                            style={{
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)", // Perfectly center the text
                                color: "white", // Text color
                                fontFamily: "'Anuphan', sans-serif", // Font styling
                                fontSize: "1.5rem", // Text size
                                textAlign: "center", // Center-align the text
                                lineHeight: "2.5rem", // Line spacing
                            }}
                        >
                            ในตำนานเล่าว่า บนยอดเขาโจโจ <br />
                            มีปรมาจารย์โซบะผู้สามารถปรุงโซบะ <br />
                            ที่สะท้อนถึงจิตวิญญาณของผู้กินได้
                        </div>
                    </div>
                </div>

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
                            router.push('/scene3'); // Navigate only if clickable is true
                        }
                    }}
                />
            </div>
        </div>
    );
}
