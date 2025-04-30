
// export default function Page() {
//     return <div>
//     <p>This is my final project for TECHNOLOGY FOR DESIGN EXPERIMENT 2502243 (2024/2).
//     Inspired by "Eat That Frog," this project turns life's challenges into energy for growth. 
//     Through soba, we reflect on our experiences, clear our minds, and restart with purpose. 
//     At Jojo Soba, every bite symbolizes 
//     a fresh start—balancing reflection, renewal, and readiness for what's next.</p>
//     <p>
//         <a href="/scene1">start your journey!</a>
//     </p>
//     </div>
// }

"use client";

import { useRouter } from 'next/navigation';

export default function Page() {
    const router = useRouter();

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
                color: "white",
                textAlign: "center", //ให้text อยู่ตรงกลาง
                padding: "20px", 
            }}
        >
            {/* Main content */}
            <p style={{ marginBottom: "20px" }}>
                This is my final project for TECHNOLOGY FOR DESIGN EXPERIMENT 2502243 (2024/2).
                Inspired by "Eat That Frog," this project turns life's challenges into energy for growth.
                Through soba, we reflect on our experiences, clear our minds, and restart with purpose.
                At Jojo Soba, every bite symbolizes a fresh start—balancing reflection, renewal, and readiness for what's next.
            </p>

            {/* Button */}
            <button
                onClick={() => router.push('/scene1')}
                style={{
                    backgroundColor: "white",
                    color: "black",
                    border: "1px solid black",
                    padding: "10px 20px",
                    cursor: "pointer",
                    fontFamily: 'Anuphan, sans-serif',
                    fontSize: "16px",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // มีเงา แต่ไม่เหนเพราะสีดำ
                    transition: "transform 0.2s, box-shadow 0.2s", // Animation effect
                }}
                onMouseOver={(e) => { //พอเม้าเข้าใหญ่ขึ้น,shadow ใหญ่ขึ้น
                    e.currentTarget.style.transform = "scale(1.05)";
                    e.currentTarget.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.3)";
                }}
                onMouseOut={(e) => {
                    e.currentTarget.style.transform = "scale(1)"; //พอเม้าออกกลับไปเป็นเหมือนเดิม
                    e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
                }}
            >
                Start Your Journey!
            </button>
        </div>
    );
}
