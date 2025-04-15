"use client"
// export default function Page() {
//     return (
//         <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" ,backgroundColor: "white"}}>
//             <img
//                 src="/1.GIF"
//                 style={{
//                     maxHeight: "100vh", // Ensures the image height fits the viewport
//                     height: "auto",
//                     width: "auto",      // Keeps the aspect ratio intact
//                     maxWidth: "100%",   // Prevents the image from overflowing horizontally

//                 }}
//             />
//         </div>
//     );
// }
import { useRouter } from 'next/navigation'; // Import the useRouter hook

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
                cursor: "pointer", // Changes cursor to pointer to indicate clickable area
            }}
            onClick={() => router.push('/scene2')} // Navigate to /scene2 when clicked
        >
            <img
                src="/1.GIF"
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
