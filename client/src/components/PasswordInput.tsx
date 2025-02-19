import { useState } from "react";
import { Eye, EyeSlash } from "react-bootstrap-icons";
import "../styles/PasswordInput.css";

interface PasswordInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  value,
  onChange,
  placeholder = "Mot de passe",
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="password-input-wrapper">
      <input
        type={isVisible ? "text" : "password"}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="password-input"
      />
        <div className="password-toggle-icon">
          <button
        type="button"
        onClick={toggleVisibility}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            toggleVisibility();
          }
        }}
        aria-label={isVisible ? "Masquer le mot de passe" : "Afficher le mot de passe"}
      >
        {isVisible ? <EyeSlash /> : <Eye />}
      </button>
      </div>
    </div>
  );
};

export default PasswordInput;
