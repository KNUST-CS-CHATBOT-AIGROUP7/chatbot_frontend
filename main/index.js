const chat = document.getElementById("chat");
const text = document.getElementById("text");
const enter = document.getElementById("enter");
const options = document.getElementById("option");
const faq = document.querySelectorAll(".faq");

const answer = [
  "Hey, I am the CS Bot how can I help you? Hey, I am the CS Bot how can I help you Hey, I am the CS Bot how can I help you Hey, I am the CS Bot how can I help you Hey, I am the CS Bot how can I help you Hey, I am the CS Bot how can I help you Hey, I am the CS Bot how can I help you Hey, I am the CS Bot how can I help you",
];

function displayBotMessage(message) {
  const words = message.split(" ");
  let index = 0;

  const AIrespond = document.createElement("span");
  AIrespond.className = "message bot";
  chat.appendChild(AIrespond);

  const botImage = document.createElement("img");
  botImage.src = "./images/logo.png";
  botImage.className = "w-8 h-8 rounded-full mr-2";
  AIrespond.appendChild(botImage);

  const messageContent = document.createElement("span");
  AIrespond.appendChild(messageContent);

  const timer = setInterval(() => {
    if (index < words.length) {
      messageContent.textContent += words[index] + " "; // Add space between words
      index++;
      chat.scrollTop = chat.scrollHeight;
    } else {
      clearInterval(timer);
    }
  }, 100); // Adjust the delay here (milliseconds)
}

enter.addEventListener("click", () => {
  const userInput = text.value.trim();
  if (userInput.length > 0) {
  options.style.display = "none";
  const userMessage = text.value;
  const userMessageElement = document.createElement("span");
  userMessageElement.className = "message user";
  userMessageElement.innerHTML = '<img src="./images/userr.png" class="w-8 h-8 rounded-full ml-2" />' + userMessage;
  chat.appendChild(userMessageElement);
  text.value = "";

  let i = 0;
  function displayAnswers() {
    if (i < answer.length) {
      displayBotMessage(answer[i]);
      i++;
      setTimeout(displayAnswers, 100);
    }
  }

  displayAnswers();
}
});

text.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    e.preventDefault();
    options.style.display = "none";
    const userMessage = text.value;
    const userMessageElement = document.createElement("div");
    userMessageElement.className = "message user";
    userMessageElement.innerHTML = '<img src="./images/userr.png" class="w-8 h-7 rounded-full ml-2" />' + userMessage;
    chat.appendChild(userMessageElement);
    text.value = "";

    let i = 0;
    function displayAnswers() {
      if (i < answer.length) {
        displayBotMessage(answer[i]);
        i++;
        setTimeout(displayAnswers, 100);
      }
    }

    displayAnswers();
  }
});

for (let i = 0; i < faq.length; i++) {
  faq[i].addEventListener("click", (e) => {
    const res = faq[i].innerText;
    options.style.display = "none";
    const userMessageElement = document.createElement("div");
    userMessageElement.className = "message user";
    userMessageElement.innerHTML = '<img src="./images/userr.png" class="w-8 h-7 rounded-full ml-2" />' + res;
    chat.appendChild(userMessageElement);

    let j = 0;
    function displayAnswers() {
      if (j < answer.length) {
        displayBotMessage(answer[j]);
        j++;
        setTimeout(displayAnswers, 100);
      }
    }

    displayAnswers();
  });
}

// Function to enable or disable the enter button and icon based on the text input value
function toggleEnterButtonState() {
  const userInput = text.value.trim();
  if (userInput.length > 0) {
    enter.removeAttribute("disabled");
  } else {
    enter.setAttribute("disabled", "true");
  }
}

// Call the function initially to set the initial state
toggleEnterButtonState();

// Listen for input event on the text input
text.addEventListener("input", () => {
  toggleEnterButtonState();
});


// Function to handle keydown event on the text input
text.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const userInput = text.value.trim();
    if (userInput.length > 0) {
      e.preventDefault();
      enter.click();
    }
  }
});