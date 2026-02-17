function createAIButton() {
  const button = document.createElement('div');
  button.className = 'T-I J-J5-Ji ao0 v7 T-I-atl L3';
  button.style.marginRight = '8px';
  button.innerHTML = 'AI Reply';
  button.setAttribute('role', 'button');
  button.setAttribute('data-tooltip', 'Generate AI Reply');
  return button;
}

function getEmailContent() {
  const emailBody = document.querySelector('.a3s.aiL');
  return emailBody ? emailBody.innerText : '';
}

function injectButton() {
  const toolbar = document.querySelector('.btC');
  
  if (toolbar && !document.querySelector('[data-tooltip="Generate AI Reply"]')) {
    const button = createAIButton();
    
    button.addEventListener('click', async () => {
      try {
        button.innerHTML = 'Generating...';
        button.disabled = true;
        button.style.opacity = '0.5';

        const emailContent = getEmailContent();
        
        const response = await fetch('http://localhost:8080/api/email/generate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            emailContent: emailContent,
            tone: "professional"
          })
        });

        if (!response.ok) {
          throw new Error('API Request Failed');
        }

        const generatedReply = await response.text();
        
        const composeBox = document.querySelector('[role="textbox"][g_editable="true"]');
        
        if (composeBox) {
          composeBox.focus();
          document.execCommand('insertText', false, generatedReply);
        } else {
          console.error('Compose box was not found');
          alert('Please open a compose window first');
        }

      } catch (err) {
        console.error('Error:', err);
        alert('Failed to generate reply: ' + err.message);
      } finally {
        button.innerHTML = 'AI Reply';
        button.disabled = false;
        button.style.opacity = '1';
      }
    });
    
    toolbar.appendChild(button);
  }
}

const observer = new MutationObserver(() => {
  injectButton();
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});

setTimeout(injectButton, 2000);