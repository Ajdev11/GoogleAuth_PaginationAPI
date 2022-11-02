import React from 'react';
import "./styles/ErrorTest.css";


function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Opps!! There is an error with your Codes:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}
export default ErrorFallback;
