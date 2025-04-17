"use client"
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
                backgroundColor: "black",
                cursor: "pointer", // Makes the page clickable
            }}
            onClick={() => router.push('/scene12')} // Navigate to /scene2 when clicked
        >
            <img
                src="/14.GIF"
                style={{
                    maxHeight: "100vh",
                    height: "auto",
                    width: "auto",
                    maxWidth: "100%",
                }}
            />
        </div>
    );
}

// "use client";

// import { useRouter } from 'next/navigation';
// import { useState } from 'react';

// export default function Page() {
//     const router = useRouter(); // Initialize the router
//     const [showContinue, setShowContinue] = useState(false); // State to control button visibility

//     return (
//         <div
//             style={{
//                 height: "100vh",
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 backgroundColor: "black",
//                 position: "relative", // Allows positioning elements like the button
//             }}
//         >
//             {/* Video for GIF */}
//             <video
//                 src="/1.GIF"
//                 style={{
//                     maxHeight: "100vh",
//                     height: "auto",
//                     width: "auto",
//                     maxWidth: "100%",
//                 }}
//                 autoPlay
//                 loop={false} // Plays the GIF once
//                 muted
//                 onEnded={() => setTimeout(() => setShowContinue(true), 1000)} // Waits 1 second after the video ends
//             ></video>

//             {/* "Continue" Text */}
//             {showContinue && (
//                 <div
//                     onClick={() => router.push('/scene2')} // Navigate to scene2 only when the text is clicked
//                     style={{
//                         position: "absolute",
//                         bottom: "10px",
//                         right: "10px",
//                         color: "white",
//                         fontSize: "16px",
//                         cursor: "pointer",
//                         padding: "5px",
//                         backgroundColor: "#007BFF",
//                         borderRadius: "5px",
//                     }}
//                 >
//                     Continue
//                 </div>
//             )}
//         </div>
//     );
// }
