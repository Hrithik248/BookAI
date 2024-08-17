import { useState } from 'react';

export default function Authentication() {
  const [apiKey, setApiKey] = useState('');

  function generateApiKey(e) {
    e.preventDefault();
    fetch('/generate-api-key', {
      method: 'POST',
    })
      .then((response) => response.json())
      .then((data) => {
        setApiKey(`Your API Key: <strong>${data.api_key}</strong>`);
      })
      .catch((error) => {
        console.error('Error:', error);
        setApiKey('Error generating API key');
      });
  }

  return (
    <section id="authentication" aria-labelledby="authentication-heading">
      <h2 id="authentication-heading">Authentication</h2>
      <p>To use the API, you need to include your API key in the header of each request:</p>
      <pre>
        <code>X-API-Key: YOUR_API_KEY</code>
      </pre>
      <p>To generate an API key, use the button below:</p>
      <button id="generateApiKey" onClick={generateApiKey} aria-controls="apiKeyDisplay">
        Generate API Key
      </button>
      <div id="apiKeyDisplay" aria-live="polite">
        {apiKey}
      </div>
    </section>
  );
}