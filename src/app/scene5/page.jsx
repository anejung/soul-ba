// "use client";

// import { useRouter } from 'next/navigation'; // Import useRouter
// import { useState, useEffect } from 'react'; // Import useState and useEffect

// export default function Page() {
//     const router = useRouter(); // Initialize router
//     const [showButtons, setShowButtons] = useState(false); // State to control button visibility

//     // Show buttons after 2 seconds
//     useEffect(() => {
//         const timer = setTimeout(() => {
//             setShowButtons(true);
//         }, 2000); // 2 seconds delay
//         return () => clearTimeout(timer); // Cleanup timer on unmount
//     }, []);

//     return (
//         <div
//             style={{
//                 height: "100vh",
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 backgroundColor: "black",
//                 position: "relative",
//                 flexDirection: "column", // Stack items vertically
//             }}
//         >
//             {/* Display GIF */}
//             <img
//                 src="/10.gif"
//                 style={{
//                     maxHeight: "100vh",
//                     height: "auto",
//                     width: "auto",
//                     maxWidth: "100%",
//                 }}
//             />

//             {/* Buttons displayed after 2 seconds */}
//             {showButtons && (
//                 <div
//                     style={{
//                         position: "absolute",
//                         display: "flex",
//                         flexDirection: "column", // Stack buttons vertically
//                         gap: "10px", // Space between buttons
//                         backgroundColor: "black",
//                         padding: "10px",
//                         borderRadius: "5px",
//                     }}
//                 >
//                     {/* First Button */}
//                     <button
//                         style={{
//                             backgroundColor: "#333",
//                             color: "white",
//                             border: "none",
//                             padding: "10px",
//                             cursor: "not-allowed", // Makes button unclickable
//                             opacity: 0.7,
//                         }}
//                         disabled
//                     >
//                         เมื่อคุณเจอทางแยก
//                         ทางหนึ่งเป็นทางชันแต่ตรง อีกทางหนึ่งคดเคี้ยวแต่ราบเรียบ
//                         คุณจะเลือกทางไหน?
//                     </button>

//                     {/* Second Button (Clickable) */}
//                     <button
//                         onClick={() => router.push('/scene6')} // Navigate to scene6
//                         style={{
//                             backgroundColor: "#007BFF",
//                             color: "white",
//                             border: "none",
//                             padding: "10px",
//                             cursor: "pointer",
//                             borderRadius: "5px",
//                         }}
//                     >
//                         ทางชัน—เพราะอยากเผชิญหน้า
//                         กับอุปสรรคตรงๆ
//                     </button>

//                     {/* Third Button */}
//                     <button
//                         style={{
//                             backgroundColor: "#333",
//                             color: "white",
//                             border: "none",
//                             padding: "10px",
//                             cursor: "not-allowed", // Makes button unclickable
//                             opacity: 0.7,
//                         }}
//                         disabled
//                     >
//                         ทางราบ—เพราะอยากใช้เวลา
//                         ไตร่ตรองระหว่างทาง
//                     </button>
//                 </div>
//             )}
//         </div>
//     );
// }

"use client";

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Page() {
    const router = useRouter();
    const [showButtons, setShowButtons] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowButtons(true);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            style={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "black",
                position: "relative",
                flexDirection: "column",
                fontFamily: 'Anuphan, sans-serif', // Apply Anuphan font
            }}
        >
            {/* Display GIF */}
            <img
                src="/10.gif"
                style={{
                    maxHeight: "100vh",
                    height: "auto",
                    width: "auto",
                    maxWidth: "100%",
                }}
            />

            {/* Buttons displayed after 2 seconds */}
            {showButtons && (
                <div
                    style={{
                        position: "absolute",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                        padding: "10px",
                        opacity: showButtons ? 1 : 0, // Control visibility
                        transition: "opacity 1s ease-in-out", // Fading effect
                    }}
                >
                    {/* First Button */}
                    <button
                        style={{
                            backgroundColor: "#333",
                            color: "white",
                            border: "1px solid white", // Add stroke
                            padding: "10px",
                            cursor: "not-allowed",
                            opacity: 1,
                            fontFamily: 'Anuphan, sans-serif',
                        }}
                        disabled
                    >
                        เมื่อคุณเจอทางแยก
                        ทางหนึ่งเป็นทางชันแต่ตรง อีกทางหนึ่งคดเคี้ยวแต่ราบเรียบ
                        คุณจะเลือกทางไหน?
                    </button>

                    {/* Second Button (Clickable) */}
                    <button
                        onClick={() => router.push('/scene6')}
                        style={{
                            backgroundColor: "#FFD700", // Change to yellow
                            color: "black", // Adjust text color for visibility
                            border: "1px solid black", // Add stroke
                            padding: "10px",
                            cursor: "pointer",
                            fontFamily: 'Anuphan, sans-serif',
                        }}
                    >
                        ทางชัน—เพราะอยากเผชิญหน้า
                        กับอุปสรรคตรงๆ
                    </button>

                    {/* Third Button */}
                    <button
                        style={{
                            backgroundColor: "white",
                            color: "black",
                            border: "1px solid black", // Add stroke
                            padding: "10px",
                            cursor: "not-allowed",
                            opacity: 1,
                            fontFamily: 'Anuphan, sans-serif',
                        }}
                        disabled
                    >
                        ทางราบ—เพราะอยากใช้เวลา
                        ไตร่ตรองระหว่างทาง
                    </button>
                </div>
            )}
        </div>
    );
}
