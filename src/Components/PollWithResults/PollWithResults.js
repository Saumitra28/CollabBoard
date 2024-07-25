import React, { useEffect, useState } from "react";
import axios from "axios";

const YOUR_TYPEFORM_URL = "https://8cj7x29yx4z.typeform.com/to/syKlJdIs"; // Replace with your Typeform URL
const YOUR_FORM_ID = "syKlJdIs"; // Replace with your Typeform Form ID
const YOUR_API_KEY =
  "tfp_7oVnq5fdV2dfFo2JmyQoU5nDAuzREYCSbKAcMxAg4t2m_3sqavVgigFuwC4"; // Replace with your Typeform API key

const PollWithResults = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await axios.get(
          `https://api.typeform.com/forms/${YOUR_FORM_ID}/responses`,
          {
            headers: {
              Authorization: `Bearer ${YOUR_API_KEY}`,
            },
          }
        );
        setResults(response.data.items);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching results:", error);
        setLoading(false);
      }
    };

    fetchResults();
  }, []);

  return (
    <div className="h-[530px] border rounded-xl">
      <h1 className="text-black font-semibold text-center text-lg border rounded-t-xl bg-white">
        Poll
      </h1>
      <iframe
        src={YOUR_TYPEFORM_URL}
        width="100%"
        height="1200"
        frameBorder="0"
        allow="camera; microphone; autoplay; encrypted-media;"
        allowFullScreen
      >
        Loading…
      </iframe>

      <div className="text-black font-semibold text-center text-lg border rounded-b-xl bg-white">
        ✌️✌️
      </div>
      {loading ? (
        <div>Loading results...</div>
      ) : (
        <ul>
          {results.map((result, index) => (
            <li key={index}>
              {/* Display results based on your Typeform structure */}
              {result.answers.map((answer, idx) => (
                <div key={idx}>{answer.text}</div>
              ))}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PollWithResults;
