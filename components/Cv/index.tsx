import { Circle } from "@mui/icons-material";
import {
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

const Cv: React.FC = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      px={{ xs: 0, md: 8 }}
      sx={{ mt: (theme) => `calc(${theme.mixins.toolbar.minHeight}px + 30px)` }}
    >
      <Grid container direction="column" rowSpacing={4}>
        <Grid item>
          <Typography variant="h2" color="info.main">
            WORK EXPERIENCE
          </Typography>
          <Typography variant="h5" component="h3" color="primary">
            TRANSCEPTA LLC (2022 - current) - California, Long Beach
          </Typography>
          <Typography color="textSecondary">
            Software Development Engineer in Test
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h5" component="h3" color="primary">
            WORKREACTOR INC. (2020 - 2022) - California, Long Beach
          </Typography>
          <Typography color="textSecondary">Full Stack Developer</Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <Circle />
              </ListItemIcon>
              <ListItemText
                primary="Developed new social media web application from initial design
            through completion, optimizing cross-browser and multi-platform
            compatibility"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Circle />
              </ListItemIcon>
              <ListItemText
                primary="Developed new social media web application from initial design
            through completion, optimizing cross-browser and multi-platform
            compatibility"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Circle />
              </ListItemIcon>
              <ListItemText primary="Cooperated with a team to deploy frontend and backend applications to AWS cloud-based system. Implemented stringent security guidelines and Software Development Life Cycle practices" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Circle />
              </ListItemIcon>
              <ListItemText
                primary="Enhanced user experience and accomplished webpage objectives by
              creating site structure, navigation, page optimization, and graphics
              integration"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Circle />
              </ListItemIcon>
              <ListItemText primary="Performed unit test, system test, functional test, and integration test during each development phases" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Circle />
              </ListItemIcon>
              <ListItemText primary="Deployed bug fixes and implemented enhancements that improved web functionality and responsiveness" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Circle />
              </ListItemIcon>
              <ListItemText primary="Team followed Agile software development process" />
            </ListItem>
          </List>
        </Grid>
        <Grid item>
          <Typography variant="h5" component="h3" color="primary">
            REALM (2019 - 2020) - California, Long Beach / Canada, Victoria
          </Typography>
          <Typography color="textSecondary">React Native Developer</Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <Circle />
              </ListItemIcon>
              <ListItemText primary="Participated in a development of iOS/Android app" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Circle />
              </ListItemIcon>
              <ListItemText
                primary="Utilized FFMPEG technology to resize, convert videos to GIFs preview that
              reduce loading times significantly"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Circle />
              </ListItemIcon>
              <ListItemText
                primary="Applied React Native Animated API, created animated functionalities that
              matched requirements on design and enhanced UI"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Circle />
              </ListItemIcon>
              <ListItemText
                primary="Extensive REDUX usage to centralize, maintain and improve quality of
              code"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Circle />
              </ListItemIcon>
              <ListItemText primary="Worked in Agile environment, collaborated with cross – functional team" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Circle />
              </ListItemIcon>
              <ListItemText primary="Performed unit, and integration testing" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Circle />
              </ListItemIcon>
              <ListItemText primary="Fixed bugs from existing application and implemented enhancements" />
            </ListItem>
          </List>
        </Grid>
        <Grid item>
          <Typography variant="h2" color="info.main">
            SKILLS
          </Typography>
          <Typography variant="h5" component="h3" color="primary">
            FRONT END
          </Typography>
          <Typography mt={1}>
            React, React Native, Redux, JavaScript, ES6, HTML5, CSS3, Flexbox,
            React Router, LESS, SASS, Styled, Bootstrap, Materialize, Canvas,
            Socket.IO, MUIv5
          </Typography>
          <Typography variant="h5" component="h3" color="primary" mt={2}>
            BACK END
          </Typography>
          <Typography mt={1}>
            Node.js, Express, Knex, SQLite, Django, Python, REST APIs, MongoDB,
            Socket.IO
          </Typography>
          <Typography variant="h5" component="h3" color="primary" mt={2}>
            TOOLS
          </Typography>
          <Typography mt={1}>
            Git, VS Code, Xcode, Android Studio, EXPO, C, Java, Postman, MS
            Project, Jira, Linux, Heroku, Netlify, Yarn, Npm, Docker, Google
            Cloud Platform, AWS
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h2" color="info.main">
            EDUCATION
          </Typography>
          <Typography variant="h5" component="h3" color="primary">
            LBCC
          </Typography>
          <Typography color="textSecondary">
            (2022 - current) AS Computer Technologies
          </Typography>

          <Typography variant="h5" component="h3" color="primary" mt={2}>
            LAMBDA SCHOOL
          </Typography>
          <Typography color="textSecondary">
            (2018 - 2019) Full Stack Web Development
          </Typography>
          <Typography mt={1}>
            Computer Science, Algorithms, Authentication, Data Structures,
            Node.js, RestAPIs, Python, JavaScript, C
          </Typography>
          <Typography variant="h5" component="h3" color="primary" mt={2}>
            LSU
          </Typography>
          <Typography color="textSecondary">
            (2001 – 2005) BS Physical Education
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h2" color="info.main">
            CERTIFICATIONS
          </Typography>
          <List>
            <ListItem
              component="a"
              href="https://www.hackerrank.com/certificates/f069d45c39c3"
              rel="noopener noreferrer"
              target="_blank"
              sx={{ color: "rgba(0, 0, 0, 0.87)", px: 0 }}
            >
              JavasCript HackerRank
            </ListItem>
            <ListItem
              component="a"
              href="https://triplebyte.com/tb/das-ma-soywur3/certificate"
              rel="noopener noreferrer"
              target="_blank"
              sx={{ color: "rgba(0, 0, 0, 0.87)", px: 0 }}
            >
              Triplebyte Certified
            </ListItem>
            <ListItem sx={{ px: 0 }}>Python</ListItem>
            <ListItem sx={{ px: 0 }}>
              Professional Agile and Scrum Certification, issued by EXIN
            </ListItem>
            <ListItem sx={{ px: 0 }}>
              PRINCE2, issued by APMG - International, ID 02891362-01-DGTL
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Cv;
