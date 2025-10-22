import './App.css';

function App() {
  return (
    <div className="App">
      <header className="hero">
        <h1>Erik Conradie</h1>
        <p>Web & App Developer</p>
        <a href="mailto:youremail@example.com">Contact Me</a>
      </header>

      <section className="projects">
        <h2>Projects</h2>
        <div className="card">
          <h3>Patch</h3>
          <p>Platform connecting freelance devs with clients for small projects.</p>
        </div>
        <div className="card">
          <h3>ESP32 RC Boat</h3>
          <p>IoT-driven RC boat with wireless control and failsafe systems.</p>
        </div>
      </section>

      <footer>
        © 2025 Erik Conradie — Built with React ⚛️
      </footer>
    </div>
  );
}

export default App;
