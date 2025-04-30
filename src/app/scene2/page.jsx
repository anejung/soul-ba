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
//                             router.push('/scene3'); // Navigate only if clickable is true
//                         }
//                     }}
//                 />
//         </div>
//     );
// }


"use client";

import { useRouter } from 'next/navigation'; // Import useRouter from next/navigation

export default function Page() {
    const router = useRouter(); // Initialize the router

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
            onClick={() => router.push('/scene3')} // Navigate to /scene3 when clicked
        >
            {/* Text Content */}
            <p style={{ fontSize: "1rem", lineHeight: "2rem" }}>
                ในตำนานเล่าว่า บนยอดเขาโจโจ <br />
                มีปรมาจารย์โซบะผู้สามารถปรุงโซบะ <br />
                ที่สะท้อนถึงจิตวิญญาณของผู้กินได้
            </p>
        </div>
    );
}
