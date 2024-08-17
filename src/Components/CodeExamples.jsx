export default function CodeExamples() {
    const removeIndentation = (code) => {
      const lines = code.split('\n');
      const indentLength = lines[1] ? lines[1].search(/\S|$/) - 4 : 0;
      return lines.map((line) => line.slice(indentLength)).join('\n');
    };
    const pythonCode = removeIndentation(`
              import requests
  
              API_KEY = "your_api_key_here"
              API_ENDPOINT = "https://tryBookAI.com/api/generate-book"
  
              headers = {
                  "Content-Type": "application/json",
                  "X-API-Key": API_KEY
              }
  
              data = {
                  "api": "openai",
                  "model": "gpt-3.5-turbo",
                  "topic": "The Future of Artificial Intelligence",
                  "language": "English",
                  "word_count": 5000
              }
  
              response = requests.post(API_ENDPOINT, json=data, headers=headers)
  
              if response.status_code == 200:
                  result = response.json()
                  print(f"Book generation started. Job ID: {result['job_id']}")
              else:
                  print(f"Error: {response.status_code} - {response.text}")
              `);
  
    const javascriptCode = removeIndentation(`
              const axios = require('axios');
  
              const API_KEY = 'your_api_key_here';
              const API_ENDPOINT = 'https://tryBookAI.com/api/generate-book';
  
              const headers = {
                  'Content-Type': 'application/json',
                  'X-API-Key': API_KEY
              };
  
              const data = {
                  api: 'openai',
                  model: 'gpt-3.5-turbo',
                  topic: 'The Future of Artificial Intelligence',
                  language: 'English',
                  word_count: 5000
              };
  
              axios.post(API_ENDPOINT, data, { headers })
                  .then(response => {
                      console.log(\`Book generation started. Job ID: \${response.data.job_id}\`);
                  })
                  .catch(error => {
                      console.error('Error:', error.response ? error.response.data : error.message);
                  });
              `);
  
    return (
      <section id="code-examples" aria-labelledby="code-examples-heading">
        <h2 id="code-examples-heading">Code Examples</h2>
  
        <h3>Python</h3>
        <pre>
          <code dangerouslySetInnerHTML={{ __html: pythonCode }} />
        </pre>
  
        <h3>JavaScript (Node.js)</h3>
        <pre>
          <code dangerouslySetInnerHTML={{ __html: javascriptCode }} />
        </pre>
      </section>
    );
  }
  