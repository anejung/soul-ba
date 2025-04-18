
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
            onClick={() => router.push('/scene13')} // Navigate to /scene3 when clicked
        >
            {/* Text Content */}
            <p style={{ fontSize: "1rem", lineHeight: "2rem" }}>
                
                ทุกการตัดสินใจของคุณได้สร้าง<br />
                ชามโซบะที่สะท้อนถึงตัวตนของคุณเอง <br />
                <br />
                นี่คือโซบะที่เหมาะสมที่สุด <br />
                มันจะช่วยล้างความเหนื่อยล้า <br />
                และเติมพลังให้คุณ<br />
                พร้อมก้าวต่อไปในวันพรุ่งนี้<br />
            </p>
        </div>
    );
}
