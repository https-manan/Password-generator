// PassGen.jsx
import { useCallback, useState, useEffect } from "react";

export default function PassGen() {
  const [length, setLength] = useState(16);
  const [numAllow, setNumAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState("");

  const passGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllow) str += "0123456789";
    if (charAllow) str += "!@#$%^&*()_+-*/";

    for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random() * str.length);
      pass += str[index];
    }

    setPassword(pass);
  }, [length, numAllow, charAllow]);

  useEffect(() => {
    passGenerator();
  }, [length, numAllow, charAllow, passGenerator]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert("Password copied!");
  };

  return (
    <div className="passgen-container">
      <div className="passgen-box">
        <input
          type="text"
          value={password}
          readOnly
          className="passgen-input"
        />
        <button className="copy-btn" onClick={copyToClipboard}>
          copy
        </button>
      </div>

      <div className="passgen-controls">
        <input
          type="range"
          min={6}
          max={50}
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
        />
        <span className="label">Length ({length})</span>

        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={numAllow}
            onChange={() => setNumAllow(!numAllow)}
          />
          <span>Numbers</span>
        </label>

        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={charAllow}
            onChange={() => setCharAllow(!charAllow)}
          />
          <span>Characters</span>
        </label>
      </div>
    </div>
  );
}
