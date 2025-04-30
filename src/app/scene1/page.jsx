"use client";

import { useRouter } from 'next/navigation'; // ใช้เปลี่ยนหน้า ภายในnext.js
import { useState, useEffect } from 'react'; // ใช้จัดการstate ของปุ่มที่ซ่อนอยู่ , ใช้ควบคุมช่วงเวลา ที่ปุ่มจะปรากฏขึ้นหลัง GIF เล่นจบ

export default function Page() {
    const router = useRouter(); // Initialize the router
    const [visible, setVisible] = useState(false); // เซท visibility ของปุ่ม
    const [clickable, setClickable] = useState(false); // State to control whether clicking is allowed

    // UseEffect จัดการ visibility , clickability หลังจาก เวลา GIF จบ
    useEffect(() => {
        const gifDuration = 30000; 
        const timer = setTimeout(() => {
            setVisible(true); // Make the button visible after GIF ends
            setClickable(true); // Enable clicking after GIF ends
        }, gifDuration);

        return () => clearTimeout(timer); // Cleanup the timer
    }, []);

    return (
        <div
            style={{ //เซทให้ทุกอย่างอยู่ตรงกลาง
                height: "100vh", 
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "black",
                position: "relative", // Allows the button to stay inside the GIF frame
            }}
        >
            {/* สร้างกรอบสำหรับ GIF และปุ่ม */}
            <div
                style={{ 
                    position: "relative",
                    height: "100%", // Makes the container occupy full height
                    width: "auto", // Maintains aspect ratio of GIF
                }}
            >
                {/* แสดง GIF ในกรอบ */}
                <img
                    src="/1.GIF"
                    style={{
                        maxHeight: "100%", // ทำให้ GIF ขยายเต็มความสูงของกรอบ
                        height: "auto", // รักษาสัดส่วนเดิมของ GIF
                        width: "auto",
                        maxWidth: "100%", // Prevent overflow
                        display: "block", // Prevent inline space below the GIF
                    }}
                />

                {/* วางปุ่ม "Next" ให้อยู่ตรงมุม GIF (only clickable after GIF finishes) */}
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
        </div>
    );
}
