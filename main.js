document.getElementById("user-input").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
      sendMessage();
  }
});
document.getElementById("user-input").addEventListener("keypress", function(event) {
  console.log("Key pressed:", event.key); // Debugging
  if (event.key === "Enter") {
      console.log("Enter key detected!"); // Debugging
      sendMessage();
  }
});

function sendMessage() {
  const userInput = document.getElementById("user-input").value;
  if (userInput.trim() !== "") {
      console.log("Sending message:", userInput); // Debugging
      appendMessage("user", userInput);
      generateBotResponse(userInput);
      document.getElementById("user-input").value = ""; // Clear input field
  }
}


function sendMessage() {
  const userInput = document.getElementById("user-input").value;
  if (userInput.trim() !== "") {
      appendMessage("user", userInput);
      generateBotResponse(userInput);
      document.getElementById("user-input").value = ""; // Clear input field
  }
}

function appendMessage(sender, message) {
  const chatBox = document.getElementById("chat-box");
  const messageElement = document.createElement("div");
  messageElement.className = `message ${sender}-message`;
  messageElement.innerText = message;
  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
}

function generateBotResponse(userInput) {
  let botResponse = "I'm not sure how to respond to that.";

  // Check if the input is an equation
  if (isEquation(userInput)) {
      botResponse = solveEquation(userInput);
  } else {
      // Expanded predefined responses
      if (userInput.toLowerCase().includes("hello")) {
          botResponse = "Hello! How can I assist you today?";
      } else if (userInput.toLowerCase().includes("how are you")) {
          botResponse = "I'm just a bot, but I'm here to help!";
      } else if (userInput.toLowerCase().includes("your name")) {
          botResponse = "I'm your friendly chatbot!";}
          else if (userInput === "what is your name" , "What is your name") {
            botResponse = "I'm your friendly chatbot!";}
            else if (userInput.includes("hello" , "your name")) {
              botResponse = "Hello! I'm your friendly chatbot!";
      } else if (userInput.toLowerCase().includes("bye")) {
          botResponse = "Goodbye! Have a great day!";
      } else if (userInput.toLowerCase().includes("issue")) {
          botResponse = "Please describe your issue, and I'll do my best to help.";
      } else if (userInput.toLowerCase().includes("weather")) {
          botResponse = "I'm not connected to the internet, so I can't check the weather right now.";
      } else if (userInput.toLowerCase().includes("joke")) {
          botResponse = "Why don't programmers like nature? It has too many bugs!";
      } else if (userInput.toLowerCase().includes("time")) {
          botResponse = `The current time is ${new Date().toLocaleTimeString()}.`;
      } else if (userInput.toLowerCase().includes("day")) {
          botResponse = `Today is ${new Date().toLocaleDateString()}.`;
      } else {
          botResponse = handleIssue(userInput);
      }
  }

  appendMessage("bot", botResponse);
}

function isEquation(input) {
  // Simple regex to detect basic arithmetic operations
  const equationPattern = /^[0-9+\-*/().\s]+$/;
  return equationPattern.test(input);
}

function solveEquation(equation) {
  try {
      // Evaluate the equation safely
      const result = eval(equation);
      return `The result is ${result}`;
  } catch (error) {
      return "There was an error solving the equation. Please check your input.";
  }
}

function handleIssue(userInput) {
  let solution = "I couldn't quite understand the issue. Could you please provide more details?";

  if (userInput.toLowerCase().includes("password")) {
      solution = "If you're having trouble with your password, try resetting it using the 'Forgot Password' option.";
  } else if (userInput.toLowerCase().includes("login")) {
      solution = "If you can't log in, make sure your username and password are correct. If you're still having trouble, try clearing your browser's cache.";
  } else if (userInput.toLowerCase().includes("internet")) {
      solution = "If you're having internet connectivity issues, try restarting your router or checking your connection settings.";
  } else if (userInput.toLowerCase().includes("error")) {
      solution = "If you're seeing an error message, try restarting the application or checking for updates.";
  }

  return solution;
}
