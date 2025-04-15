"use client"

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
                cursor: "pointer", 
            }}
            onClick={() => router.push('/scene7')} 
        >
            <img
                src="/10_1.GIF"
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
