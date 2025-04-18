
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
            onClick={() => router.push('/scene4')} // Navigate to /scene3 when clicked
        >
            {/* Text Content */}
            <p style={{ fontSize: "1rem", lineHeight: "2rem" }}>
                แต่การเดินทางไปถึงยอดเขาไม่ใช่เรื่องง่าย <br />
                คุณจะต้องฝ่าฟันอุปสรรคในป่าลึก <br />
                ที่เต็มไปด้วยบททดสอบและการค้นพบตัวตน
            </p>
        </div>
    );
}
