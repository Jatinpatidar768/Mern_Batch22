import React from 'react'

function Header() {
    const styles = {
        navbar: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "12px 24px",
            backgroundColor: "#1e293b",
            color: "#ffffff",
        },
        logo: {
            fontSize: "20px",
            fontWeight: "bold",
            cursor: "pointer",
        },
        navLinks: {
            display: "flex",
            gap: "20px",
        },
        link: {
            textDecoration: "none",
            color: "#ffffff",
            fontSize: "16px",
            cursor: "pointer",
        },
        button: {
            padding: "8px 14px",
            backgroundColor: "#38bdf8",
            border: "none",
            borderRadius: "6px",
            color: "#000",
            fontWeight: "bold",
            cursor: "pointer",
        },
    };

    return (
        <nav style={styles.navbar}>
            <div style={styles.logo}>MyApp</div>

            <div style={styles.navLinks}>
                <a style={styles.link}>Home</a>
                <a style={styles.link}>About</a>
                <a style={styles.link}>Contact</a>
            </div>

            <button style={styles.button}>Login</button>
        </nav>
    );
}

export default Header