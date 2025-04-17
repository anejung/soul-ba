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
                src="/13.gif"
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
                        ยามค่ำคืนในป่า คุณเห็นท้องฟ้าที่เต็มไปด้วยดวงดาว เสียงหนึ่งถามคุณว่า “เมื่อทุกอย่างมืดมิดลง คุณจะยึดมั่นในสิ่งใด?”
                    </button>

                    {/* Second Button (Clickable) */}
                    <button
                        onClick={() => router.push('/scene10')}
                        style={{
                            backgroundColor: "black",
                            color: "white",
                            border: "1px solid white",
                            padding: "10px",
                            cursor: "pointer",
                            fontFamily: 'Anuphan, sans-serif',
                        }}
                    >
                        ประกายสดชื่นของดอกไม้ที่ปลุกพลังชีวิต
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
                        แสงบริสุทธิ์ที่ส่องทางของคุณ
                    </button>

                

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
                        จังหวะที่มั่นคงนำทางคุณไปข้างหน้า
                    </button>
                </div>
            )}
        </div>
    );
}
