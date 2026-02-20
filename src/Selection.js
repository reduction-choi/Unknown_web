function Selection({ onSelect }) {
    const images = Array.from({ length: 24 }, (_, i) => i + 1);

    return (
        <div
            style={{
                marginTop: "20px",
                display: "grid",
                gridTemplateColumns: "repeat(6, 80px)",
                gap: "10px"
            }}
        >
            {images.map((num) => (
                <img
                    key={num}
                    src={require(`../images/${num}.png`)}
                    alt={`img-${num}`}
                    onClick={() => onSelect(num)}
                    style={{
                        width: "80px",
                        height: "80px",
                        objectFit: "cover",
                        border: "1px solid black",
                        cursor: "pointer"
                    }}
                />
            ))}
        </div>
    );
}
export default Selection;