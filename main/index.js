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

  const timer = setInterval(() => {
    if (index < words.length) {
      AIrespond.textContent += words[index] + " "; // Add space between words
      index++;
      chat.scrollTop = chat.scrollHeight;

    } else {
      clearInterval(timer);
    }
  }, 100); // Adjust the delay here (milliseconds)
}
enter.addEventListener("click", () => {
  options.style.display = "none";
  const userMessage = text.value;
  const userMessageElement = document.createElement("span");
  userMessageElement.className = "message user";
  userMessageElement.textContent = userMessage;
  chat.appendChild(userMessageElement);
  text.value = "";

  // Scroll to the bottom of the chat area
  // chat.scrollTop = chat.scrollHeight;

  let i = 0;
  function displayAnswers() {
    if (i < answer.length) {
      displayBotMessage(answer[i]);
      i++;
      setTimeout(displayAnswers, 100);
    }
  }

  displayAnswers();
});

text.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    e.preventDefault();
    options.style.display = "none";
    const userMessage = text.value;
    const userMessageElement = document.createElement("div");
    userMessageElement.className = "message user";
    userMessageElement.textContent = userMessage;
    chat.appendChild(userMessageElement);
    text.value = "";

    // Scroll to the bottom of the chat area
    // chat.scrollTop = chat.scrollHeight;

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
    userMessageElement.textContent = res;
    chat.appendChild(userMessageElement);

    // Scroll to the bottom of the chat area
    // chat.scrollTop = chat.scrollHeight;

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
