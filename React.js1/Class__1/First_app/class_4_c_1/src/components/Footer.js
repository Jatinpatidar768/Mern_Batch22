import React from 'react'

function Footer() {
    const styles = {
        footer: {
            backgroundColor: "#1e293b",
            color: "#ffffff",
            padding: "20px 24px",
            marginTop: "auto",
        },
        container: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "10px",
        },
        text: {
            fontSize: "14px",
        },
        links: {
            display: "flex",
            gap: "16px",
        },
        link: {
            color: "#ffffff",
            textDecoration: "none",
            fontSize: "14px",
            cursor: "pointer",
        },
    };

    return (
        <footer style={styles.footer}>
            <div style={styles.container}>
                <div style={styles.text}>
                    © {new Date().getFullYear()} MyApp. All rights reserved.
                </div>

                <div style={styles.links}>
                    <a style={styles.link}>Privacy</a>
                    <a style={styles.link}>Terms</a>
                    <a style={styles.link}>Support</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer