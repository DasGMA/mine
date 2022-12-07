import { Button, Grid, Typography } from "@mui/material";

const textSx = { maxWidth: { xs: "100%", md: 600 }, width: "100%", mt: 3 };

const Intro = () => {
  return (
    <>
      <Grid
        id="welcome-section"
        container
        justifyContent="center"
        alignItems="center"
        sx={{ height: "100vh" }}
        px={{ xs: 0, md: 8 }}
      >
        <Grid container direction="column" alignItems="flex-start">
          <Typography variant="h2">Hello, my name is</Typography>
          <Typography variant="h1">Das Ma.</Typography>
          <Typography variant="h3" color="textSecondary" mt={3}>
            I build front-end and back-end things.
          </Typography>

          <Typography sx={textSx}>
            I am a{" "}
            <Typography component="span" color="info.main">
              Fullstack Software Developer
            </Typography>{" "}
            and{" "}
            <Typography component="span" color="info.main">
              QA Automation Engineer
            </Typography>
            , specializing in building and testing Web based solutions.
            Currently, I am focusing on Testing frameworks and methodologies.
          </Typography>
          <Button
            variant="contained"
            component="a"
            href="mailto:dasgrigoma@gmail.com?subject=Let's talk coding!"
            sx={{ mt: 4, height: 60, width: { xs: "100%", sm: 200 } }}
          >
            Let&apos;s talk coding
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Intro;
