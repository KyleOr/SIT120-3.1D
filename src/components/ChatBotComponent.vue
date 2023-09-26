<template>
  <div class="ChatbotHelper">
    <h2>Your Personal AI Kitchen Assistant</h2>
    <div class="chat-container">
      <div class="chat-messages">
        <div v-for="(message, index) in chatMessages" :key="index" :class="message.type">
          {{ message.text }}
        </div>
      </div>
      <div class="chat-input">
        <input
          type="text"
          v-model="userMessage"
          @keyup.enter="sendMessage"
          placeholder="Type your message..."
        />
        <button @click="sendMessage">Send</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChatbotHelper',
  props: {
    apiKey: String, // Define a prop for the API key
  },
  data() {
    return {
      chatMessages: [], // Initialize an empty array for chat messages
      userMessage: '', // Initialize user message input
    };
  },

  methods: {
    sendMessage() {
      const userMessage = this.userMessage;
      this.userMessage = '';

      // Add user message to chat
      this.addUserMessage(userMessage);

      setTimeout(() => {
        const botResponse = 'Please provide an active API key from EssentialDialogueFlow to overrule this messages';
        this.addBotMessage(botResponse);
      }, 500);
    },

    addUserMessage(message) {
      // Add user message to chat messages
      this.chatMessages.push({
        text: message,
        type: 'user-message',
      });
    },

    addBotMessage(message) {
      // Add bot message to chat messages
      this.chatMessages.push({
        text: message,
        type: 'bot-message',
      });
    },
  },
};
</script>
  
<style scoped>
.ChatbotHelper {
  border: 1px solid #ccc;
  padding: 20px;
}

.chat-messages {
  max-height: 200px;
  overflow-y: auto;
}

.user-message {
  background-color: #f0f0f0;
  padding: 5px;
  margin: 5px;
  border-radius: 5px;
  text-align: right;
}

.bot-message {
  background-color: #007BFF;
  color: white;
  padding: 5px;
  margin: 5px;
  border-radius: 5px;
  text-align: left;
}

.chat-input {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}

.chat-input input {
  flex-grow: 1;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.chat-input button {
  margin-left: 10px;
  padding: 10px 20px; 
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>