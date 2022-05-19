import "./App.css";
import Container from "./components/Container";
import { ThemeProvider } from "./context/ThemeContext";
import { ChatProvider } from "./context/ChatContext";

function App() {
  return (
    <ThemeProvider>
      <ChatProvider>
        <Container />
      </ChatProvider>
    </ThemeProvider>
  );
}

export default App;
