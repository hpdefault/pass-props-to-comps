import UniButton from "./Button";

function ButtonWrap() {
  const handleClick = () => {
    alert('Button clicked from parent!');
  };

  const buttonData = {
    label: 'Click Me',
    onClick: handleClick,
    className: 'primary'
  };

  return (
    <div>
      <UniButton
        label={buttonData.label}
        onClick={buttonData.onClick}
        className={buttonData.className}
      />
    </div>
  );
}

export default ButtonWrap;