const messagesContainer = document.getElementById("messages");
    const chatContainer = document.getElementById("chatContainer");

    // Responses that Jungkook can give based on input
    const responses = {
      "hello": "Hello there! How's your day going?",
      "how are you": "I'm doing great, thanks for asking! How about you?",
      "favorite song": "That's a tough one! I love so many songs. Do you have a favorite of mine?",
      "tell me something fun": "Did you know I love playing video games? What about you?",
      "what are you up to": "Just hanging out and chatting with you! What about you?",
      "do you have any hobbies": "I enjoy painting and playing music in my free time. How about you?",
      "what do you like to eat": "I love trying different foods, but I have a soft spot for Korean BBQ!",
      "do you miss the fans": "Absolutely! You guys are my motivation. I miss you all so much!",
      "dream collaboration": "I'd love to work with Ed Sheeran or Ariana Grande! They're incredible artists.",
      "how do you stay positive": "I focus on the love from my fans and try to spread positivity wherever I go!",
      "can you sing for me": "I wish I could! But I’ll just sing in my heart for you!",
      "favorite movie": "I love watching action movies! They keep me on the edge of my seat.",
      "do you like traveling": "Yes! I love exploring new places and meeting new people. What's your favorite travel spot?",
      "what inspires your music": "My experiences and the love from my fans inspire me every day!",
      "best advice": "To always stay true to yourself and follow your dreams. It’s helped me so much!",
      "do you play any instruments": "I play the guitar and piano! They’re such beautiful instruments.",
      "what do you do to relax": "I love to listen to music and watch some good shows to unwind.",
      "what makes you happy": "Seeing my fans smile and knowing I can make a difference in your lives!",
      "do you have any pets": "I wish I did! I love animals. Do you have any pets?",
      "funny story": "Once, I tried to cook for the members and almost set the kitchen on fire! Now I stick to ordering food!"
    };

    // to show the initial message on page load
    window.onload = function() {
      receiveMessage("Are you ready to craft an amazing path with us, ARMY?");
    };

    function sendMessage() {
      const messageInput = document.getElementById("messageInput");
      const messageText = messageInput.value;

      if (messageText.trim()) {
        // Display the sent message
        const messageElement = createMessageElement(messageText, "You", "https://img.freepik.com/premium-vector/vector-flat-illustration-grayscale-avatar-user-profile-person-icon-profile-picture-business-profile-woman-suitable-social-media-profiles-icons-screensavers-as-templatex9xa_719432-1307.jpg", "sent");
        messagesContainer.appendChild(messageElement);

        // to clear input
        messageInput.value = "";

        // scrolling to the latest message
        scrollToBottom();

        // Simulate receiving a reply
        setTimeout(() => receiveMessage(messageText), 1000);
      }
    }

    function receiveMessage(userMessage) {
      let replyText = "I’m not sure what you mean, but I’m here for you!";

      // Check for keywords to provide a relevant response
      for (let key in responses) {
        if (userMessage.toLowerCase().includes(key)) {
          replyText = responses[key];
          break;
        }
      }

      const messageElement = createMessageElement(replyText, "Jungkook", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ79rKX_zHyVVvDNRft6_98Nd373KDxhmArug&s", "received");
      messagesContainer.appendChild(messageElement);

      // scrolling to the latest message
      scrollToBottom();
    }

    function createMessageElement(text, name, profilePic, type) {
      const messageElement = document.createElement("div");
      messageElement.className = `message ${type}`;

      const profileImg = document.createElement("img");
      profileImg.src = profilePic;
      profileImg.alt = name;
      profileImg.className = "profile-pic";

      const messageContent = document.createElement("div");
      messageContent.className = "message-content";
      messageContent.innerText = text;

      messageElement.appendChild(profileImg);
      messageElement.appendChild(messageContent);

      return messageElement;
    }

    function scrollToBottom() {
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    function checkEnter(event) {
      if (event.key === "Enter") {
        sendMessage();
      }
    }

    function closeChat() {
      chatContainer.style.display = "none"; // Hides chat on close
    }
    const gameContainer = document.querySelector('.game-container');

function autoScroll(event) {
    const scrollThreshold = 20; // Pixels from edge to trigger scroll
    const scrollSpeed = 5; // Speed of scrolling

    // Calculate distances to edges
    const { top, bottom } = gameContainer.getBoundingClientRect();

    if (event.clientY < top + scrollThreshold) {
        // Scroll up
        gameContainer.scrollTop -= scrollSpeed;
    } else if (event.clientY > bottom - scrollThreshold) {
        // Scroll down
        gameContainer.scrollTop += scrollSpeed;
    }
}

// Attach the event listeners for dragging
document.addEventListener('dragover', autoScroll);
