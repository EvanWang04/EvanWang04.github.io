import './App.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

function App() {
  return (
    <div class="app-container">
      <div class="content">
        <div class="welcome-title">
          Hi, I'm Evan Wang
        </div>
        <div class="welcome-content">
          I'm a software engineering student at the University of Waterloo, seeking Fall 2024 internships (September 2024 - December 2024).
          <br/><br/>
          Previously, I've interned at <a href="https://www.bankonloop.com/" target="_blank" rel="noreferrer">Loop Financial</a>, <a href="https://www.ford.ca/" target="_blank" rel="noreferrer">Ford Motor Company</a>, and the <a href="https://www.rbcroyalbank.com" target="_blank" rel="noreferrer">Royal Bank of Canada</a>.
          <br/><br/>
          Interested to know more, collaborate, or just chat? Don't hesitate to connect.
        </div>
        <div class="links-container">
          <a class="link-item" href="https://www.linkedin.com/in/evanwang04/" target="_blank" rel="noreferrer"><LinkedInIcon fontSize='small'></LinkedInIcon><span class="underline">LinkedIn</span></a>
          <a class="link-item" href="https://github.com/EvanWang04" target="_blank" rel="noreferrer"><GitHubIcon fontSize='small'></GitHubIcon><span class="underline">GitHub</span></a>
          <a class="link-item" href="mailto:evan.wang@uwaterloo.ca" target="_blank" rel="noreferrer"><EmailIcon fontSize='small'></EmailIcon><span class="underline">Email</span></a>
        </div>
      </div>
    </div>
  );
}

export default App;
