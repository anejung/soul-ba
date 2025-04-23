
"use client";

import { useRouter } from 'next/navigation'; // Import useRouter from next/navigation
import { useState, useEffect } from 'react';

export default function Page() {
    const router = useRouter(); // Initialize the router
    const [visible, setVisible] = useState(false); // State to control button visibility
    const [clickable, setClickable] = useState(false); 

    return (
        <div
            style={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white",
                color: "black", // Text color
                fontFamily: "'Anuphan', sans-serif", // Font styling
                cursor: "pointer", // Makes the page clickable
                textAlign: "center", // Centers the text horizontally
                padding: "20px", // Adds padding to the text
            }}
            // onClick={() => router.push('/scene3')} // Navigate to /scene3 when clicked
        >
            {/* Text Content */}
            <p style={{ fontSize: "1rem", lineHeight: "2rem" }}>
                ในตำนานเล่าว่า บนยอดเขาโจโจ <br />
                มีปรมาจารย์โซบะผู้สามารถปรุงโซบะ <br />
                ที่สะท้อนถึงจิตวิญญาณของผู้กินได้
            </p>

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
                            router.push('/scene2'); // Navigate only if clickable is true
                        }
                    }}
                />
        </div>
    );
}

// // "use client";

// // import { useRouter } from 'next/navigation'; // Import useRouter from next/navigation
// // import { useState, useEffect } from 'react';

// // export default function Page() {
// //     const router = useRouter(); // Initialize the router
// //     const [visible, setVisible] = useState(false); // State to control button visibility
// //     const [clickable, setClickable] = useState(false); // State to control button clickability

// //     useEffect(() => {
// //         // Trigger the visibility and clickability of the button after a 2-second delay
// //         const timer = setTimeout(() => {
// //             setVisible(true); // Make the button visible
// //             setClickable(true); // Enable clicking
// //         }, 2000); // 2-second delay

// //         return () => clearTimeout(timer); // Cleanup timer to prevent memory leaks
// //     }, []);

// //     return (
// //         <div
// //             style={{
// //                 height: "100vh",
// //                 display: "flex",
// //                 justifyContent: "center",
// //                 alignItems: "center",
// //                 backgroundColor: "white",
// //                 color: "black", // Text color
// //                 fontFamily: "'Anuphan', sans-serif", // Font styling
// //                 textAlign: "center", // Centers the text horizontally
// //                 padding: "20px", // Adds padding to the text
// //                 position: "relative", // Required for button placement
// //             }}
// //         >
// //             {/* Text Content */}
// //             <p style={{ fontSize: "1rem", lineHeight: "2rem" }}>
// //                 ในตำนานเล่าว่า บนยอดเขาโจโจ <br />
// //                 มีปรมาจารย์โซบะผู้สามารถปรุงโซบะ <br />
// //                 ที่สะท้อนถึงจิตวิญญาณของผู้กินได้
// //             </p>

// //             {/* Button to navigate */}
// //             <img
// //                 src="/next.png"
// //                 alt="Next"
// //                 style={{
// //                     position: "absolute",
// //                     bottom: "25px", // Align button to the bottom of the frame
// //                     right: "20px", // Align button to the right corner
// //                     cursor: clickable ? "pointer" : "not-allowed", // Change cursor based on clickable state
// //                     opacity: visible ? 1 : 0, // Visibility based on the `visible` state
// //                     transition: "opacity 1s ease-in-out", // Smooth fade-in effect
// //                     width: "60px", // Set button size
// //                     height: "auto",
// //                 }}
// //                 onClick={() => {
// //                     if (clickable) {
// //                         router.push('/scene2'); // Navigate only if clickable is true
// //                     }
// //                 }}
// //             />
// //         </div>
// //     );
// // }

// "use client";

// import { useRouter } from 'next/navigation'; // Import useRouter from next/navigation
// import { useState, useEffect } from 'react';

// export default function Page() {
//     const router = useRouter(); // Initialize the router
//     const [visible, setVisible] = useState(false); // State to control button visibility
//     const [clickable, setClickable] = useState(false); // State to control button clickability

//     useEffect(() => {
//         // Trigger the visibility and clickability of the button after a 2-second delay
//         const timer = setTimeout(() => {
//             setVisible(true); // Make the button visible
//             setClickable(true); // Enable clicking
//         }, 2000); // 2-second delay for button

//         return () => clearTimeout(timer); // Cleanup timer to prevent memory leaks
//     }, []);

//     return (
//         <div
//             style={{
//                 height: "100vh", // Full viewport height
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 backgroundColor: "white", // Frame background color
//             }}
//         >
//             {/* Frame to match the required dimensions */}
//             <div
//                 style={{
//                     position: "relative",
//                     width: "1572px", // Frame width
//                     height: "3408px", // Frame height
//                     backgroundColor: "black", // Frame background (optional for styling)
//                 }}
//             >
//                 {/* Text inside the frame */}
//                 <div
//                     style={{
//                         position: "absolute",
//                         top: "10%", // Adjust placement inside the frame
//                         left: "50%",
//                         transform: "translateX(-50%)", // Center text horizontally
//                         color: "white", // Text color
//                         textAlign: "center", // Center-align text
//                         fontFamily: "'Anuphan', sans-serif", // Font styling
//                         fontSize: "1.5rem", // Text size
//                         lineHeight: "2.5rem", // Line spacing
//                     }}
//                 >
//                     ในตำนานเล่าว่า บนยอดเขาโจโจ <br />
//                     มีปรมาจารย์โซบะผู้สามารถปรุงโซบะ <br />
//                     ที่สะท้อนถึงจิตวิญญาณของผู้กินได้
//                 </div>

//                 {/* Button to navigate */}
//                 <img
//                     src="/next.png"
//                     alt="Next"
//                     style={{
//                         position: "absolute",
//                         bottom: "25px", // Align button to the bottom of the frame
//                         right: "20px", // Align button to the right corner
//                         cursor: clickable ? "pointer" : "not-allowed", // Change cursor based on clickable state
//                         opacity: visible ? 1 : 0, // Visibility based on the `visible` state
//                         transition: "opacity 1s ease-in-out", // Smooth fade-in effect
//                         width: "100px", // Button size
//                         height: "auto",
//                     }}
//                     onClick={() => {
//                         if (clickable) {
//                             router.push('/scene2'); // Navigate only if clickable is true
//                         }
//                     }}
//                 />
//             </div>
//         </div>
//     );
// }
