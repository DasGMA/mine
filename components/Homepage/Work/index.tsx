import {
  Box,
  Chip,
  Divider,
  Grid,
  Link,
  Paper,
  Typography,
} from "@mui/material";

import Image from "next/image";

import workreactor from "../../../assets/images/workreactor.png";
import productpage from "../../../assets/images/productpage.png";
import fancysteakhouse from "../../../assets/images/fancysteakhouse.png";
import tribute from "../../../assets/images/tribute.png";
import spaceshootergame from "../../../assets/images/spaceshootergame.png";
import next from "../../../assets/images/next.png";

const imageBoxSx = {
  cursor: "pointer",
  filter: "grayscale(0.5)",
  transition: "all 0.25s linear",
  display: "flex",
  alignIterms: "center",
  "&:hover": {
    filter: "grayscale(0)",
    transform: { xs: "none", md: "scale(1.22)" },
  },
};

const RBoxSx = {
  p: 4,
  ml: { xs: 0, md: -4 },
  zIndex: 10,
  bgcolor: "#eeeeee",
  display: "flex",
  flexDirection: "column",
  boxShadow: 4,
  borderRadius: 1,
  maxWidth: { xs: "100%", md: 430 },
  width: "100%",
};

const LBoxSx = {
  p: 4,
  mr: { xs: 0, md: -4 },
  zIndex: 10,
  bgcolor: "#eeeeee",
  display: "flex",
  flexDirection: "column",
  boxShadow: 4,
  borderRadius: 1,
  maxWidth: { xs: "100%", md: 430 },
  width: "100%",
};

const chipsBoxSx = {
  display: "flex",
  flexWrap: "wrap",
  gap: 1,
};

const Work: React.FC = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      bgcolor="#f8f8f8"
      sx={{
        scrollMarginTop: (theme) => theme.mixins.toolbar.minHeight,
      }}
      px={{ xs: 0, md: 8 }}
      id="projects"
    >
      <Typography variant="h2" textAlign="left" width="100%" mb={4}>
        My Work
      </Typography>
      <Grid container direction="column" alignItems="flex-start">
        <Grid
          id="project-title"
          component={Paper}
          container
          item
          direction={{ xs: "column", md: "row" }}
          alignItems="center"
          flexWrap={{ xs: "wrap", md: "nowrap" }}
          p={{ xs: 2, md: 4 }}
        >
          <Link
            href="https://master.dh8kmgof8txbs.amplifyapp.com/"
            target="_blank"
            rel="noreferrer noopener"
            sx={imageBoxSx}
          >
            <Image
              src={workreactor}
              alt="Work Reactor Inc website"
              width={950}
              height={500}
            />
          </Link>
          <Box sx={RBoxSx}>
            <Typography variant="h4" component="h3" color="info.main">
              Social Network
            </Typography>
            <Typography>
              Social network for startups to connect with investors and find
              workforce.
            </Typography>
            <Divider textAlign="left" sx={{ mb: 1 }}>
              <Typography variant="caption" color="primary">
                Technologies
              </Typography>
            </Divider>
            <Box sx={chipsBoxSx}>
              <Chip
                label={<Typography variant="caption">Next.js</Typography>}
              />
              <Chip
                label={<Typography variant="caption">MongoDB</Typography>}
              />
              <Chip
                label={<Typography variant="caption">Express</Typography>}
              />
              <Chip
                label={<Typography variant="caption">Node.js</Typography>}
              />
              <Chip label={<Typography variant="caption">AWS</Typography>} />
              <Chip label={<Typography variant="caption">Redux</Typography>} />
              <Chip
                label={<Typography variant="caption">Socket.io</Typography>}
              />
              <Chip label={<Typography variant="caption">MUIv5</Typography>} />
            </Box>
          </Box>
        </Grid>
        <Grid
          component={Paper}
          container
          item
          direction={{ xs: "column", md: "row-reverse" }}
          alignItems="center"
          flexWrap={{ xs: "wrap", md: "nowrap" }}
          p={{ xs: 2, md: 4 }}
          mt={10}
        >
          <Link
            href="https://ProductPage.dasma.repl.co"
            target="_blank"
            rel="noreferrer noopener"
            sx={imageBoxSx}
          >
            <Image
              src={productpage}
              alt="BMW electric bike product page"
              width={950}
              height={500}
            />
          </Link>
          <Box sx={LBoxSx}>
            <Typography variant="h4" component="h3" color="info.main">
              Product Page
            </Typography>
            <Typography>
              College work, Product Page, that I have got an inspiration from
              BMW wbsite.
            </Typography>
            <Divider textAlign="left" sx={{ mb: 1 }}>
              <Typography variant="caption" color="primary">
                Technologies
              </Typography>
            </Divider>
            <Box sx={chipsBoxSx}>
              <Chip label={<Typography variant="caption">HTML</Typography>} />
              <Chip label={<Typography variant="caption">CSS</Typography>} />
              <Chip label={<Typography variant="caption">JS</Typography>} />
            </Box>
          </Box>
        </Grid>
        <Grid
          component={Paper}
          container
          item
          direction={{ xs: "column", md: "row" }}
          alignItems="center"
          flexWrap={{ xs: "wrap", md: "nowrap" }}
          p={{ xs: 2, md: 4 }}
          mt={10}
        >
          <Link
            href="https://codepen.io/dasgma-the-typescripter/full/abGmWzr"
            target="_blank"
            rel="noreferrer noopener"
            sx={imageBoxSx}
          >
            <Image
              src={fancysteakhouse}
              alt="Fancy restaurant landing page"
              width={950}
              height={500}
            />
          </Link>

          <Box sx={RBoxSx}>
            <Typography variant="h4" component="h3" color="info.main">
              Fancy Restaurant
            </Typography>
            <Typography>
              College work to create a survey form. I found it not challenging,
              so I decided to build a Steakhouse Home Page with a required
              Survey Form.
            </Typography>
            <Divider textAlign="left" sx={{ mb: 1 }}>
              <Typography variant="caption" color="primary">
                Technologies
              </Typography>
            </Divider>
            <Box sx={chipsBoxSx}>
              <Chip label={<Typography variant="caption">HTML</Typography>} />
              <Chip label={<Typography variant="caption">CSS</Typography>} />
              <Chip label={<Typography variant="caption">JS</Typography>} />
            </Box>
          </Box>
        </Grid>
        <Grid
          component={Paper}
          container
          item
          direction={{ xs: "column", md: "row-reverse" }}
          alignItems="center"
          flexWrap={{ xs: "wrap", md: "nowrap" }}
          p={{ xs: 2, md: 4 }}
          mt={10}
        >
          <Link
            href="https://codepen.io/dasgma-the-typescripter/full/bGMVzxN"
            target="_blank"
            rel="noreferrer noopener"
            sx={imageBoxSx}
          >
            <Image
              src={tribute}
              alt="Nikola Tesla trubute page"
              width={950}
              height={500}
            />
          </Link>

          <Box sx={LBoxSx}>
            <Typography variant="h4" component="h3" color="info.main">
              Tribute Page
            </Typography>
            <Typography>
              College work to create a Tribute Page. I have dedicated it to
              Nikola Tesla.
            </Typography>
            <Divider textAlign="left" sx={{ mb: 1 }}>
              <Typography variant="caption" color="primary">
                Technologies
              </Typography>
            </Divider>
            <Box sx={chipsBoxSx}>
              <Chip label={<Typography variant="caption">HTML</Typography>} />
              <Chip label={<Typography variant="caption">CSS</Typography>} />
            </Box>
          </Box>
        </Grid>
        <Grid
          component={Paper}
          container
          item
          direction={{ xs: "column", md: "row" }}
          alignItems="center"
          flexWrap={{ xs: "wrap", md: "nowrap" }}
          p={{ xs: 2, md: 4 }}
          mt={10}
        >
          <Link
            href="https://guardians-of-the-galaxy-crazy-ugly-space-game.netlify.app/"
            target="_blank"
            rel="noreferrer noopener"
            sx={imageBoxSx}
          >
            <Image
              src={spaceshootergame}
              alt="Space shooting game"
              width={950}
              height={500}
            />
          </Link>
          <Box sx={RBoxSx}>
            <Typography variant="h4" component="h3" color="info.main">
              The Game
            </Typography>
            <Typography>
              A Space Shooter Game created in my early days of coding.
            </Typography>
            <Divider textAlign="left" sx={{ mb: 1 }}>
              <Typography variant="caption" color="primary">
                Technologies
              </Typography>
            </Divider>
            <Box sx={chipsBoxSx}>
              <Chip
                label={<Typography variant="caption">React.js</Typography>}
              />
              <Chip label={<Typography variant="caption">Canvas</Typography>} />
              <Chip label={<Typography variant="caption">OOP</Typography>} />
              <Chip label={<Typography variant="caption">CSS</Typography>} />
            </Box>
          </Box>
        </Grid>
        <Grid
          component={Paper}
          container
          item
          direction={{ xs: "column", md: "row-reverse" }}
          alignItems="center"
          flexWrap={{ xs: "wrap", md: "nowrap" }}
          p={{ xs: 2, md: 4 }}
          mt={10}
        >
          <Link
            href="https://endearing-cajeta-51566a.netlify.app"
            target="_blank"
            rel="noreferrer noopener"
            sx={imageBoxSx}
          >
            <Image
              src={next}
              alt="Next.js documentation page."
              width={950}
              height={500}
            />
          </Link>

          <Box sx={LBoxSx}>
            <Typography variant="h4" component="h3" color="info.main">
              Documentation
            </Typography>
            <Typography>
              College work to create a Documentation Page. I have decided to
              create one for JS framework - Next.js.
            </Typography>
            <Divider textAlign="left" sx={{ mb: 1 }}>
              <Typography variant="caption" color="primary">
                Technologies
              </Typography>
            </Divider>
            <Box sx={chipsBoxSx}>
              <Chip
                label={<Typography variant="caption">Next.js</Typography>}
              />
              <Chip label={<Typography variant="caption">CSS</Typography>} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Work;
