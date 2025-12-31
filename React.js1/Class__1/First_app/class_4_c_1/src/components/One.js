
import Second from './Second.js'
function One() {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column", // VBox
                gap: "12px",
                padding: "16px",
                backgroundColor: "#f1f5f9",
                borderRadius: "8px",
                width: "300px",
            }}
        >
            <h3 style={{ margin: 0 }}>VBox Title</h3>

            <p style={{ margin: 0, color: "#334155" }}>
                This is some content inside a VBox layout.
            </p>

            <button
                style={{
                    padding: "8px",
                    backgroundColor: "#38bdf8",
                    border: "none",
                    borderRadius: "6px",
                    cursor: "pointer",
                    fontWeight: "bold",
                }}
            >
                Click Me One
            </button>
        </div>

    )
}
export default One;




