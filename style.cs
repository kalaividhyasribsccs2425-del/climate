/* General Page Styling */
body {
    font-family: Arial, sans-serif;
    background: linear-gradient(to right, #4facfe, #00f2fe);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

/* Chat Container */
.chat-container {
    width: 400px;
    background: #ffffff;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    overflow: hidden;
}

/* Header */
.chat-header {
    background: #007BFF;
    color: white;
    padding: 15px;
    text-align: center;
    font-size: 18px;
    font-weight: bold;
}

/* Chat Messages Area */
.chat-box {
    height: 300px;
    padding: 10px;
    overflow-y: auto;
    border-bottom: 1px solid #ddd;
}

/* Messages */
.chat-box p {
    margin: 8px 0;
    padding: 8px;
    border-radius: 6px;
    max-width: 75%;
}

/* User Message */
.user {
    background-color: #d1e7ff;
    text-align: right;
    margin-left: auto;
    color: #003366;
}

/* Bot Message */
.bot {
    background-color: #e2f7e2;
    text-align: left;
    margin-right: auto;
    color: #006600;
}

/* Input Section */
.chat-input {
    display: flex;
}

/* Input Field */
.chat-input input {
    flex: 1;
    padding: 10px;
    border: none;
    outline: none;
}

/* Send Button */
.chat-input button {
    padding: 10px 15px;
    border: none;
    background: #007BFF;
    color: white;
    cursor: pointer;
    transition: 0.3s;
}

.chat-input button:hover {
    background: #0056b3;
}
