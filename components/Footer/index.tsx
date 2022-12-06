import { Container, Grid, Link, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer: React.FC = () => {
  const year: number = new Date().getFullYear();

  return (
    <Grid component="footer" mt={10}>
      <Container maxWidth="sm">
        <Typography textAlign="center">Designed & Created By Das Ma</Typography>
        <Typography textAlign="center">&copy; {year}</Typography>
        <Grid
          container
          justifyContent="center"
          gap={2}
          mt={1}
          display={{ xs: "flex", md: "none " }}
        >
          <Link
            href="https://www.linkedin.com/in/dasma/"
            rel="noopener noreferrer"
            color="inherit"
          >
            <LinkedInIcon fontSize="large" />
          </Link>
          <Link
            href="https://github.com/DasGMA"
            rel="noopener noreferrer"
            color="inherit"
          >
            <GitHubIcon fontSize="large" />
          </Link>
        </Grid>
        <Grid
          container
          justifyContent="center"
          gap={2}
          mt={1}
          display={{ xs: "flex", md: "none " }}
        >
          <Typography
            variant="h6"
            component="a"
            href="mailto:dasgrigoma@gmail.com"
            color="inherit"
            sx={{ textDecoration: "none" }}
          >
            dasgrigoma@gmail.com
          </Typography>
        </Grid>
      </Container>
    </Grid>
  );
};

export default Footer;
