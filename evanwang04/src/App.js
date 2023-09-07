import './App.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import DescriptionIcon from '@mui/icons-material/Description';
import EmailIcon from '@mui/icons-material/Email';

function App() {
  return (
    <div class="app-container">
      {/* <div class="header title">
        Welcome to my digital corner!
      </div> */}
      <div class="welcome-container">
        <div class="welcome-title title">
          Welcome!
        </div>
        <div class="welcome-content content">
          Thanks for stopping by and welcome to my digital corner!
        </div>
      </div>
      <div class="about-container">
        <div class="about-title title">
          Who Am I?
        </div>
        <div class="about-content content">
          Hey, I'm Evan 👋
          <br></br>
          <br></br>
          I'm a software engineering student at the University of Waterloo, currently on a study term and seeking Winter 2024 internships.
          <br></br>
          <br></br>
          I'm focused on building software that genuinely makes a difference. It's not just about coding, but about how these tools can positively impact people's lives.          <br></br>
          <br></br>
          Interested to know more, collaborate, or just chat about tech and life? Don't hesitate to connect!
        </div>
      </div>
      <div class="links-container">
        <div class="links-title title">
          Find me on
        </div>
        <div class="links-content content">
          <a class="link-item" href="https://www.linkedin.com/in/evanwang04/" target="_blank" rel="noreferrer"><LinkedInIcon fontSize='small'></LinkedInIcon><span class="underline">LinkedIn</span></a>
          <a class="link-item" href="https://github.com/EvanWang04" target="_blank" rel="noreferrer"><GitHubIcon fontSize='small'></GitHubIcon><span class="underline">GitHub</span></a>
          <a class="link-item" href="mailto:exwang@uwaterloo.ca" target="_blank" rel="noreferrer"><EmailIcon fontSize='small'></EmailIcon><span class="underline">Email</span></a>
        </div>
      </div>
    </div>
  );
}

export default App;
