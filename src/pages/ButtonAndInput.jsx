import UniButton from "../components/Button"
import { useState } from "react"
function ButtonInputChng() {
  const [inputValue, setInputValue] = useState('');
  const [buttonLabel, setButtonLabel] = useState('Click Me'); // initial button label

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    setButtonLabel(inputValue || 'Click Me'); // fallback to default if input is empty
  };

  return (
    <div>
      <p>Type a new label and click the button to update it:</p>

      <input
        type="text"
        placeholder="Enter new button label"
        value={inputValue}
        onChange={handleInputChange}
      />

      <UniButton label={buttonLabel} onClick={() => setButtonLabel(inputValue || 'Click Me')} />
    </div>
  );
}



export default ButtonInputChng