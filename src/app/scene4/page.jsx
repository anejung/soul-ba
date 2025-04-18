
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
            onClick={() => router.push('/scene5')} // Navigate to /scene3 when clicked
        >
            {/* Text Content */}
            <p style={{ fontSize: "1rem", lineHeight: "2rem" }}>
            เพื่อจะได้ลิ้มรสโซบะในตำนานซึ่งจะมอบพลัง <br/>
            ให้คุณก้าวข้ามทุกความเหนื่อยล้าของชีวิต <br/>
            </p>
        </div>
    );
}
