interface ButtonProps {
  label: string;
  onClick: () => void;
  imageUrl: string; // New property for the image URL
  style?: React.CSSProperties; // Agregar propiedades de estilo opcionales

}

export default function Button(props: ButtonProps) {
  // Inline CSS for the button background
  const buttonStyle = {
    backgroundImage: `url(${props.imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    border: 'none',
    borderRadius: '45px', // Adjust as needed to match the rounded corners in your image
    padding: '10px 20px', // Adjust the padding as needed
    color: 'transparent', // Adjust the text color as needed
    fontSize: '16px', // Adjust the font size as needed
    fontWeight: 'bold', // Adjust the font weight as needed
    textShadow: '0px 1px 3px rgba(0, 0, 0, 0.3)', // Adjust the text shadow as needed
    //boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)', // Adjust the box shadow to match your image
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '80px', // Adjust the height as needed
    width: 'auto', // Adjust the width as needed or set a specific width
  };

  return (
    <button style={buttonStyle} onClick={props.onClick}>
      {props.label}
    </button>
  );
}
