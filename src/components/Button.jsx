import '../css/Button.css';

function UniButton({ label, onClick, type = "button", className = "" }) {
  return (
    <button type={type} className={`reusable-btn ${className}`} onClick={onClick}>
      {label}
    </button>
  );
}

export default UniButton;