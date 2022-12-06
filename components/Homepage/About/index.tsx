import { Box, Chip, Divider, Grid, Typography } from "@mui/material";
import Image from "next/image";

import me from "../../../assets/images/me.jpg";

const chipsBoxSx = {
  display: "flex",
  flexWrap: "wrap",
  gap: 1,
};

const About = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{
        minHeight: "100vh",
        scrollMarginTop: (theme) => theme.mixins.toolbar.minHeight,
      }}
      px={{ xs: 0, md: 8 }}
      pt={4}
      id="About"
    >
      <Grid container flexWrap="nowrap" gap={5}>
        <Grid container direction="column" alignItems="flex-start" rowGap={2}>
          <Grid container alignItems="center">
            <Grid
              container
              alignItems="center"
              flexWrap="nowrap"
              justifyContent="space-between"
            >
              <Divider
                textAlign="left"
                sx={{ width: { xs: "85%", md: "100%" } }}
              >
                <Typography variant="h2" color="info.main">
                  About Me
                </Typography>
              </Divider>
              <Box
                sx={{
                  filter: "grayscale(1)",
                  display: { xs: "block", md: "none" },
                }}
              >
                <Image
                  src={me}
                  alt="Das Ma"
                  width={100}
                  height={100}
                  style={{ borderRadius: "50%" }}
                />
              </Box>
            </Grid>
          </Grid>
          <Typography>
            Hello! My name is Das and I love bulding things for the Web and
            Mobile. My interest in software development started back in 2018
            when I decided to try fixing errors in one custom website made for
            IT - iTech LLC company.
          </Typography>
          <Typography>
            Nowadays, a few years later, I had opportunities to work for some
            early startups:{" "}
            <Typography component="span" color="info.main">
              Realm Company
            </Typography>
            ,{" "}
            <Typography component="span" color="info.main">
              Work Reactor Inc.
            </Typography>
            . Currently working at{" "}
            <Typography component="span" color="info.main">
              Transcepta LLC
            </Typography>{" "}
            as a Software Developement Engineer in Test.
          </Typography>
          <Typography>
            Here are some technologies I have worked with:
          </Typography>
          <Box sx={chipsBoxSx}>
            <Chip label={<Typography variant="caption">Next.js</Typography>} />
            <Chip label={<Typography variant="caption">MongoDB</Typography>} />
            <Chip label={<Typography variant="caption">Express</Typography>} />
            <Chip label={<Typography variant="caption">Node.js</Typography>} />
            <Chip label={<Typography variant="caption">AWS</Typography>} />
            <Chip label={<Typography variant="caption">Redux</Typography>} />
            <Chip
              label={<Typography variant="caption">Socket.io</Typography>}
            />
            <Chip label={<Typography variant="caption">MUIv5</Typography>} />
            <Chip label={<Typography variant="caption">Draft.js</Typography>} />
            <Chip
              label={<Typography variant="caption">TypeScript</Typography>}
            />
            <Chip
              label={<Typography variant="caption">React Native</Typography>}
            />
            <Chip label={<Typography variant="caption">Python</Typography>} />
            <Chip label={<Typography variant="caption">Java</Typography>} />
            <Chip label={<Typography variant="caption">HTML</Typography>} />
            <Chip label={<Typography variant="caption">CSS</Typography>} />
            <Chip
              label={<Typography variant="caption">JavaScript</Typography>}
            />
            <Chip label={<Typography variant="caption">SQLite</Typography>} />
            <Chip label={<Typography variant="caption">AWS</Typography>} />
            <Chip label={<Typography variant="caption">Git</Typography>} />
            <Chip
              label={<Typography variant="caption">PostgreSQL</Typography>}
            />
            <Chip label={<Typography variant="caption">Jest</Typography>} />
            <Chip label={<Typography variant="caption">Mocha</Typography>} />
            <Chip label={<Typography variant="caption">Postman</Typography>} />
            <Chip label={<Typography variant="caption">Cypress</Typography>} />
          </Box>
        </Grid>
        <Box
          sx={{
            filter: "grayscale(1)",
            display: { xs: "none", md: "block" },
          }}
        >
          <Image
            src={me}
            alt="Das Ma"
            width={400}
            height={400}
            style={{ borderRadius: "50%" }}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default About;
