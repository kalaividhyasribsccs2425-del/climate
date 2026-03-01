// Function to send message
function sendMessage() {

    let inputField = document.getElementById("userInput");
    let chatBox = document.getElementById("chatBox");
    let userText = inputField.value.trim();

    if (userText === "") return;

    // Display user message
    let userMessage = document.createElement("p");
    userMessage.className = "user";
    userMessage.textContent = userText;
    chatBox.appendChild(userMessage);

    // Generate bot response
    let botReply = getBotResponse(userText);

    // Display bot response
    let botMessage = document.createElement("p");
    botMessage.className = "bot";
    botMessage.textContent = botReply;
    chatBox.appendChild(botMessage);

    // Clear input
    inputField.value = "";

    // Auto scroll
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Simple chatbot logic
function getBotResponse(input) {

    input = input.toLowerCase();

    if (input.includes("course")) {
        return "We offer BCA, B.Sc, B.Com, MBA and MCA programs.";
    }
    else if (input.includes("fees")) {
        return "Fees depend on the course. Please visit the admission office or website for exact details.";
    }
    else if (input.includes("admission")) {
        return "Admissions are currently open. You can apply online through our official website.";
    }
    else if (input.includes("contact")) {
        return "You can contact us at +91-9876543210 or email info@college.com.";
    }
    else if (input.includes("location")) {
        return "Our college is located in Tamil Nadu, India.";
    }
    else {
        return "Sorry, I didn’t understand your question. Please ask about courses, fees, admission, or contact details.";
    }
}
