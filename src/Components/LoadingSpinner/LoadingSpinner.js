import React from "react";
import "./LoadingSpinner.css";

export default function LoadingSpinner() {
  const handleFetch = () => {
    setIsLoading(true);
  };
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <div className="spinner-container">
      <div className="loading-spinner">
        <button style={{ color: "black" }} onClick={handleFetch}>Fetch Users</button>
      </div>
    </div>
  );
}