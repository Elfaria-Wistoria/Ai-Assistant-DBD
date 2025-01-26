# Prof. Mosquito - Dengue Fever Consultation Chatbot

Prof. Mosquito is an AI-powered chatbot designed to provide professional and friendly consultations regarding dengue fever. This project leverages state-of-the-art natural language processing technologies and memory management systems to deliver accurate, dataset-driven responses in a conversational style.

## Features

- **Conversational Expertise**: Prof. Mosquito emulates a professional doctor with a friendly demeanor, focusing on delivering accurate, dataset-based information.
- **Memory Integration**: Maintains conversational context with a memory buffer for seamless interactions.
- **Vectorstore Retriever**: Utilizes vector similarity search to retrieve the most relevant information from the dataset.
- **Customizable Prompts**: Includes tailored prompts for specific chatbot behavior.
- **Web Integration**: Fully functional Flask-based web interface.

## Project Structure

- `app.py`: The main application file containing the Flask routes and chatbot logic.
- `templates/`: Directory containing HTML templates for the web interface.
- `data/`: Directory containing preprocessed dataset files for the vectorstore.
- `.env`: Environment variables for configuration.

## Installation

Follow the steps below to set up the project:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repository/prof-mosquito.git
   cd prof-mosquito
   ```

2. Create a virtual environment and activate it:
   ```bash
   python3 -m venv venv
   source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
   ```

3. Install the required dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Set up environment variables in a `.env` file:
   ```env
   FLASK_APP=app.py
   FLASK_ENV=development
   SECRET_KEY=your_secret_key
   ```

5. Start the Flask server:
   ```bash
   flask run
   ```

The application will be available at `http://127.0.0.1:5000/`.

## How It Works

1. **Dataset Retrieval**: The chatbot uses a vectorstore (powered by Chroma and HuggingFace Embeddings) to retrieve information based on the user's queries.
2. **Language Model**: It utilizes the Google Generative AI (Gemini-1.5-flash) for generating responses.
3. **Memory Management**: Conversation history is maintained using `ConversationBufferMemory`, ensuring coherent and contextual responses.
4. **Custom Prompting**: Tailored prompts guide the chatbot to provide dataset-specific, professional, and concise answers.

## Key Flask Routes

- `/`: Renders the homepage.
- `/get`: Handles user queries and returns chatbot responses.
- `/load_history`: Retrieves the conversation history.
- `/clear_history`: Clears the conversation history.

## Example Usage

### User Query
> What are the symptoms of dengue fever?

### Prof. Mosquito's Response
> Dengue fever typically presents with a high fever, severe headaches, pain behind the eyes, joint and muscle pain, rash, and mild bleeding. Please consult a healthcare professional for an accurate diagnosis.

## Future Enhancements

- **Improved Dataset Integration**: Expand the dataset for broader and more detailed responses.
- **Multilingual Support**: Enable responses in multiple languages.
- **Mobile App**: Develop a mobile version for easier accessibility.

## Contribution

Contributions are welcome! Please fork the repository, make your changes, and submit a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

Feel free to reach out for support or inquiries. Together, let's spread awareness and combat dengue fever with the power of AI!
