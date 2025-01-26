# Prof. Mosquito: Intelligent Chatbot for Mosquito-Related Consultation

Prof. Mosquito is a cutting-edge AI-powered chatbot designed to provide professional and user-friendly consultations regarding mosquito-related topics. The chatbot uses advanced machine learning technologies to answer user queries based on a dataset while simulating a conversation with a knowledgeable and friendly doctor.

---

## Features

- **Interactive Chat Interface**: Engage in a natural and professional conversation.
- **Dataset-Specific Knowledge**: Provides accurate information solely based on its dataset.
- **Memory Retention**: Stores conversation history for context-aware replies.
- **Customizable Responses**: Trained to act as a professional and approachable expert.
- **Efficient Search**: Retrieves relevant information using vectorized embeddings.

---

## Tech Stack

### Frameworks & Libraries
- **Flask**: Backend framework for routing and API handling.
- **LangChain**: For creating LLM (Large Language Model) chains and memory integration.
- **Chroma**: Vector database for efficient similarity-based searches.
- **HuggingFace Transformers**: Embedding generation for vectorized search queries.
- **Google Generative AI**: For generating conversational responses using `gemini-1.5-flash`.
- **dotenv**: For managing environment variables.

### Frontend
- HTML templates rendered through Flask.

---

## Installation

### Prerequisites
- Python 3.8 or later
- Virtual environment (optional but recommended)

### Steps
1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/prof-mosquito.git
   cd prof-mosquito
   ```

2. Create and activate a virtual environment:
   ```bash
   python3 -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install the dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Set up environment variables in a `.env` file:
   ```env
   GOOGLE_API_KEY=<your-google-api-key>
   SECRET_KEY=<your-flask-secret-key>
   ```

5. Start the application:
   ```bash
   flask run
   ```

6. Access the application in your browser at `http://127.0.0.1:5000`.

---

## Usage

1. **Chat with Prof. Mosquito**: Navigate to the homepage and enter your queries.
2. **Manage History**:
   - **View History**: Displays past interactions.
   - **Clear History**: Clears session-specific chat history.

---

## Code Structure

```plaintext
prof-mosquito/
├── app.py                # Main application file
├── templates/            # HTML templates for the frontend
│   ├── index.html        # Homepage
│   └── skinthinc.html    # Additional static page
├── requirements.txt      # Python dependencies
├── data/                 # Directory for stored vector embeddings
├── .env                  # Environment variables
└── README.md             # Project documentation
```

---

## Prompts & Customizations

Prof. Mosquito has been customized with the following characteristics:
- It avoids responses with bold formatting (`**bold**`) or quotes.
- The chatbot explicitly states that its knowledge is limited to its dataset.
- Responses are concise and easy to understand.
- It introduces itself as "Prof. Mosquito" and maintains a professional yet approachable tone.

---

## API Endpoints

### GET `/get`
- **Description**: Handles user queries and returns a chatbot response.
- **Parameters**:
  - `msg`: User's query message.
- **Response**: JSON object with the chatbot's response.

### GET `/load_history`
- **Description**: Fetches the conversation history from the session.
- **Response**: JSON array of past interactions.

### POST `/clear_history`
- **Description**: Clears the conversation history and memory.
- **Response**: JSON status message.

---

## Future Enhancements

- **Multilingual Support**: Extend support for multiple languages.
- **Advanced Dataset Integration**: Enable dynamic updates to the dataset.
- **Enhanced Frontend**: Add animations and interactive elements.
- **Mobile App Version**: Develop a mobile app for wider accessibility.

---

## Contributions

We welcome contributions! If you have ideas or suggestions, feel free to open an issue or submit a pull request.

---

## License

This project is licensed under the MIT License. See `LICENSE` for more details.

---

## Acknowledgements

Special thanks to the creators and maintainers of:
- LangChain
- HuggingFace
- Flask
- Google Generative AI

---

Happy coding with **Prof. Mosquito**!

