export default function Page() {
    return (
        <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" ,backgroundColor: "white"}}>
            <img
                src="/2.GIF"
                style={{
                    maxHeight: "100vh", // Ensures the image height fits the viewport
                    height: "auto",
                    width: "auto",      // Keeps the aspect ratio intact
                    maxWidth: "100%",   // Prevents the image from overflowing horizontally

                }}
            />
        </div>
    );
}
