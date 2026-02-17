# Email Writer SB

An AI-powered email writing assistant that generates professional email replies using the Groq API. Features a Spring Boot backend, React frontend, and Chrome extension for Gmail integration.

## Project Structure

```
email-writer-sb/
├── email-writer-ext/          # Chrome extension for Gmail integration
│   ├── content.js
│   ├── content.css
│   └── manifest.json
├── frontend/                   # React + Vite frontend
│   ├── src/
│   │   ├── App.jsx
│   │   ├── api.js
│   │   ├── main.jsx
│   │   └── styles.css
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── src/                        # Spring Boot backend
│   ├── main/java/app/
│   │   ├── AppConfig.java
│   │   ├── EmailGeneratorController.java
│   │   ├── EmailGeneratorService.java
│   │   ├── EmailRequest.java
│   │   └── EmailWriterSbApplication.java
│   └── main/resources/
│       └── application.properties
├── pom.xml                     # Maven configuration
└── mvnw / mvnw.cmd           # Maven wrapper scripts
```

## Features

- **AI Email Generation**: Uses Groq's Llama 3.1 8B model to generate email replies
- **Tone Selection**: Choose from Professional, Casual, Friendly, Formal, or Concise tones
- **Web Interface**: Clean React-based UI for composing and generating emails
- **Gmail Integration**: Chrome extension to inject AI Reply button in Gmail
- **RESTful API**: Spring Boot backend with `/api/email/generate` endpoint

## Prerequisites

- **Java**: 21+
- **Node.js**: 16+
- **npm**: 8+
- **Maven**: 3.9+
- **Groq API Key**: Get one free at [https://console.groq.com](https://console.groq.com)

## Setup & Installation

### 1. Backend Setup

```bash
cd email-writer-sb

# Configure Groq API
# Edit: src/main/resources/application.properties
# Add your Groq API key:
# groq.api.url=https://api.groq.com/openai/v1/chat/completions
# groq.api.key=YOUR_GROQ_API_KEY

# Start the Spring Boot application
./mvnw spring-boot:run
```

The backend will run on `http://localhost:8080`

### 2. Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

The frontend will be available at `http://localhost:5173` and proxies API requests to `http://localhost:8080`

### 3. Chrome Extension Setup

1. Open Chrome and go to `chrome://extensions/`
2. Enable **Developer mode** (toggle in top right)
3. Click **Load unpacked**
4. Navigate to and select the `email-writer-ext/` folder
5. The extension will appear in your extension list

## Usage

### Web Interface

1. Start both backend and frontend (see setup above)
2. Open `http://localhost:5173` in your browser
3. Select a tone for your email
4. Paste the original email or write a brief prompt
5. Click **Generate Email**
6. Copy the generated response

### Gmail Integration (Chrome Extension)

1. Install the extension (see setup above)
2. Open Gmail and read an email
3. Click the **AI Reply** button in the toolbar
4. The generated reply will appear in your compose box
5. Edit as needed and send

## API Endpoint

### POST `/api/email/generate`

Generates an email reply based on the input.

**Request Body:**
```json
{
  "emailContent": "Original email text",
  "tone": "Professional"
}
```

**Response:**
```
Generated email reply text
```

**Tone Options:**
- Professional
- Casual
- Friendly
- Formal
- Concise

## Technology Stack

- **Backend**: Spring Boot 4.0.2, Java 21, Groq API, WebFlux
- **Frontend**: React 18.2, Vite 5.0, Axios, CSS
- **Extension**: JavaScript, Chrome Extensions API
- **Build**: Maven, npm

## Building for Production

### Backend
```bash
cd email-writer-sb
./mvnw clean package
java -jar target/email-writer-sb-0.0.1-SNAPSHOT.jar
```

### Frontend
```bash
cd frontend
npm run build
# Output in dist/ directory
```


