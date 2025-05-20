export default function Card({ children }) {
  return (
    <div
      className="card"
      style={{
        display: 'flex',
        textAlign: 'justify',
        backgroundColor: "#f9f9f9",
        border: "1px solid black",
        borderRadius: "8px",
        padding: "20px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
      >
      {children}
      </div>
  );
}