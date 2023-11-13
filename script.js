const delayFunction = async () => {
        const textInput = document.getElementById('text').value;
        const delayInput = document.getElementById('delay').value;

        if (!textInput || !delayInput) {
          alert('Please provide both text and delay values.');
          return;
        }

        const outputDiv = document.getElementById('output');
        outputDiv.innerHTML = 'Waiting...';

        try {
          const delay = parseInt(delayInput);
          await new Promise(resolve => setTimeout(resolve, delay));
          outputDiv.innerHTML = textInput;
        } catch (error) {
          console.error('Error:', error);
        }
      };

      document.getElementById('btn').addEventListener('click', delayFunction);
