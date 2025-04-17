"use client";

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Page() {
    const router = useRouter();
    const [showButtons, setShowButtons] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowButtons(true);
        }, 2000); // 2 seconds delay
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
                fontFamily: 'Anuphan, sans-serif',
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
                            backgroundColor: "white",
                            color: "black",
                            border: "1px solid black",
                            padding: "50px",
                            cursor: "not-allowed",
                            opacity: 0.9,
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
                            backgroundColor: "black",
                            color: "white",
                            border: "1px solid white",
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
                            
                            
                            backgroundColor: "black",
                            color: "white",
                            border: "1px solid white",
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


// "use client";

// import { useRouter } from 'next/navigation';
// import { useState, useEffect } from 'react';

// export default function Page() {
//     const router = useRouter();
//     const [showButtons, setShowButtons] = useState(false);

//     useEffect(() => {
//         const timer = setTimeout(() => {
//             setShowButtons(true);
//         }, 2000); // Show buttons after 2 seconds
//         return () => clearTimeout(timer);
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
//                 flexDirection: "column",
//                 fontFamily: 'Anuphan, sans-serif',
//             }}
//         >
//             {/* Display GIF */}
//             <img
//                 src="/10.gif"
//                 style={{
//                     maxWidth: "100%", // GIF fills the width of its parent container
//                     height: "auto",
//                 }}
//             />

//             {/* Buttons displayed after 2 seconds */}
//             {showButtons && (
//                 <div
//                     style={{
//                         width: "100%", // Matches parent container width (same as GIF)
//                         display: "flex",
//                         flexDirection: "column", // Stack buttons vertically
//                         gap: "10px",
//                         padding: "10px",
//                         opacity: showButtons ? 1 : 0, // Control visibility
//                         transition: "opacity 1s ease-in-out", // Fading effect
//                         alignItems: "center", // Center buttons horizontally
//                     }}
//                 >
//                     {/* First Button */}
//                     <button
//                         style={{
//                             width: "100%", // Button width matches GIF width
//                             maxWidth: "1572px", // Matches the GIF's maximum width
//                             backgroundColor: "white",
//                             color: "black",
//                             border: "1px solid white",
//                             padding: "10px",
//                             cursor: "not-allowed",
//                             opacity: 1,
//                             fontFamily: 'Anuphan, sans-serif',
//                         }}
//                         disabled
//                     >
//                         เมื่อคุณเจอทางแยก
//                         ทางหนึ่งเป็นทางชันแต่ตรง อีกทางหนึ่งคดเคี้ยวแต่ราบเรียบ
//                         คุณจะเลือกทางไหน?
//                     </button>

//                     {/* Second Button (Clickable) */}
//                     <button
//                         onClick={() => router.push('/scene6')}
//                         style={{
//                             width: "100%", // Button width matches GIF width
//                             maxWidth: "1572px", // Matches the GIF's maximum width
//                             backgroundColor: "#FFD700",
//                             color: "black",
//                             border: "1px solid black",
//                             padding: "10px",
//                             cursor: "pointer",
//                             fontFamily: 'Anuphan, sans-serif',
//                         }}
//                     >
//                         ทางชัน—เพราะอยากเผชิญหน้า
//                         กับอุปสรรคตรงๆ
//                     </button>

//                     {/* Third Button */}
//                     <button
//                         style={{
//                             width: "100%", // Button width matches GIF width
//                             maxWidth: "1572px", // Matches the GIF's maximum width
//                             backgroundColor: "black",
//                             color: "white",
//                             border: "1px solid black",
//                             padding: "10px",
//                             cursor: "not-allowed",
//                             opacity: 1,
//                             fontFamily: 'Anuphan, sans-serif',
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
