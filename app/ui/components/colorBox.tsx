interface ColorBoxProps {
  name: string;
  value: string;
  textLight?: boolean;
}

export const ColorBox = ({ name, value, textLight = false }: ColorBoxProps) => (
  <div
    style={{
      backgroundColor: value,
      padding: "20px",
      borderRadius: "8px",
      color: textLight ? "#fff" : "#000",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    }}
  >
    <strong>{name}</strong>
    <div>{value}</div>
  </div>
);
