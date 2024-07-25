import React, { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    const loadScript = () => {
      const script = document.createElement('script');
      script.defer = true;
      script.type = 'module';
      script.src = 'https://aichatbot.sendbird.com/index.js';
      
      const div = document.createElement('div');
      div.id = 'aichatbot';
      document.body.appendChild(div);
      
      script.onload = () => {
        window.chatbotConfig = ['21FCC960-8E43-4EBF-BE7F-66FFA59B35DD', 'onboarding_bot', {
          apiHost: 'https://api-cf-ap-8.sendbird.com',
        }];
      };

      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(script, firstScriptTag);
    };

    loadScript();

    // Cleanup function to remove the script and chatbot div when the component is unmounted
    return () => {
      const chatbotDiv = document.getElementById('aichatbot');
      if (chatbotDiv) {
        chatbotDiv.remove();
      }

      const script = document.querySelector('script[src="https://aichatbot.sendbird.com/index.js"]');
      if (script) {
        script.remove();
      }
    };
  }, []);

  return null; // This component does not render anything itself
};

export default Chatbot;
