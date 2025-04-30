"use client";
import { useRouter } from 'next/navigation';

export default function Page() {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "20px",
                backgroundColor: "#f5f5f5", // Light background color
                fontFamily: "'Anuphan', sans-serif", // Font styling
                minHeight: "100vh", // Ensures it fills the entire viewport height
            }}
        >
            {/* Header */}
            <h1 style={{ fontSize: "1.5rem", color: "black", marginBottom: "20px" }}>
                เมนูของคุณคือ
            </h1>

            {/* Image */}
            <img
            src="/food.png" // Path to your food image
            alt="Food"
            style={{
                width: "300px", // Fixed width
                height: "auto", // Maintains the original ratio
                marginBottom: "20px",
            }}
            />


            {/* Subtitle */}
            <h2 style={{ fontSize: "2rem", color: "#333", marginBottom: "20px" }}>
                โซบะเย็นเส้นธรรมดาพร้อมกุ้งเทมปุระ
            </h2>

            {/* Description Box */}
            <div
                style={{
                    backgroundColor: "white",
                    color: "black",
                    padding: "20px",
                    borderRadius: "0px",
                    maxWidth: "600px", // Maximum width
                    textAlign: "center",
                    marginBottom: "20px",
                    border: "1px solid black",
                }}
            >
                คุณเป็นคนที่กล้าหาญและพร้อมเผชิญหน้ากับอุปสรรคโดยตรง แสดงถึงจิตใจที่มั่นคงและความสามารถในการตั้งสติเพื่อแก้ไขปัญหา คุณมีความเฉียบคมและไม่กลัวที่จะเผชิญหน้ากับสิ่งที่ท้าทายหรือยากลำบาก ในขณะเดียวกัน คุณยังมีด้านที่สงบและรอบคอบ ชอบหยุดพักเพื่อเชื่อมโยงตัวเองกับสิ่งที่มีความหมายรอบตัว คุณเป็นคนที่มีสมดุลระหว่างความมุ่งมั่น พลังงาน และความละเอียดอ่อนต่อชีวิต
                <br />
                <strong>
                    ชามนี้จะช่วยคุณเริ่มต้นใหม่ด้วยจิตใจที่โล่งและพลังที่พร้อมก้าวต่อไป!
                </strong>
            </div>

            {/* Disabled Button */}
            <button
                style={{
                    backgroundColor: "black", // Light gray background for disabled button
                    color: "white",
                    border: "none",
                    padding: "10px 20px",
                    borderRadius: "20px",
                    cursor: "not-allowed", // Disabled cursor
                    fontFamily: "'Anuphan', sans-serif", // Explicitly set fontFamily for button
                    
                }}
                disabled // Disables the button
            >
                Save Image
            </button>
        </div>
    );
}
