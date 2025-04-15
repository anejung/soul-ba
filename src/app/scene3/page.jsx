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
            onClick={() => router.push('/scene4')} // Navigate to /scene2 when clicked
        >
            <img
                src="/8.png"
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