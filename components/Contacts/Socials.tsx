import { Box, Divider, keyframes, Link } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const lineAnimation = keyframes`
  0% {
    height: 0px;
  }

  100% {
    height: 300px;
  }
`;

const socialsAnimation = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

const socialsBoxSx = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  opacity: 0,
  animation: `${socialsAnimation} 1s`,
  animationDelay: "3.7s",
  animationFillMode: "forwards",
};

const socialsSx = {
  display: "inline-block",
  textDecoration: "none",
  color: "inherit",
  transition: "0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-5px)",
  },
};

const dividerSx = {
  height: 0,
  animation: `${lineAnimation} 1s`,
  animationDelay: "3.5s",
  animationFillMode: "forwards",
};

interface ISocials {
  resized: boolean | undefined;
}

const Socials = ({ resized }: ISocials) => {
  return (
    <Box
      position="fixed"
      bottom={10}
      display={{ xs: "none", md: "flex" }}
      flexDirection="column"
      alignItems="center"
    >
      <Box sx={{ ...socialsBoxSx, animationDelay: resized ? 0 : "3.7s" }}>
        <Link
          href="https://www.linkedin.com/in/dasma/"
          rel="noopener noreferrer"
          sx={socialsSx}
          id="profile-link"
        >
          <LinkedInIcon fontSize="large" />
        </Link>
        <Link
          href="https://github.com/DasGMA"
          rel="noopener noreferrer"
          sx={socialsSx}
        >
          <GitHubIcon fontSize="large" />
        </Link>
      </Box>
      <Divider
        orientation="vertical"
        sx={{ ...dividerSx, animationDelay: resized ? 0 : "3.5s" }}
      />
    </Box>
  );
};

export default Socials;
