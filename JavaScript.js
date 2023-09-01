const chatLog = document.getElementById('chat-log');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

sendButton.addEventListener('click', function() {
  const userQuestion = userInput.value;
  if (userQuestion.trim() !== '') {
    addUserMessage(userQuestion);
    getBotResponse(userQuestion);
    userInput.value = '';
  }
});

function addUserMessage(message) {
  const userMessage = document.createElement('div');
  userMessage.className = 'user-message';
  userMessage.textContent = 'You: ' + message;
  chatLog.appendChild(userMessage);
}

function addBotMessage(message) {
  const botMessage = document.createElement('div');
  botMessage.className = 'bot-message';
  botMessage.textContent = 'Chatbot: ' + message;
  chatLog.appendChild(botMessage);
}

function getBotResponse(userQuestion) {
  // Replace this with your chatbot logic
  const botResponse = generateBotResponse(userQuestion);
  addBotMessage(botResponse);
}

function generateBotResponse(userQuestion) {
  // This is a simple example; you can replace it with more complex logic or an API call
  const responses = {
    'hello': 'Hello there! How can I assist you?',
    'how are you': 'I am just a bot, but I am here to help!',
    'what is your name': 'You can call me ChatBot.',
    'bye': 'Goodbye! Feel free to come back anytime.',
    'Hey': 'h',
    'default': "I'm sorry, I didn't understand that. It may be your gramma or wrong spelling.",
    "directions to admin":"From main gate, go straight, you'll pass bhekuzulu hall.The first tall building after atm's is your Admin",
    
  };

  const normalizedQuestion = userQuestion.toLowerCase();
  return responses[normalizedQuestion] || responses['default'];
}
chatInput.addEventListener("keydown", (e) => {
  // If Enter key is pressed without Shift key and the window 
  // width is greater than 800px, handle the chat
  if(e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
      e.preventDefault();
      handleChat();
  }
});
