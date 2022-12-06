import { Box, Divider, keyframes, Typography } from "@mui/material";

const lineAnimation = keyframes`
  0% {
    height: 0px;
  }

  100% {
    height: 200px;
  }
`;

const emailAnimation = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

const typographySx = {
  display: "inline-flex",
  textDecoration: "none",
  color: "inherit",
  opacity: 0,
  animation: `${emailAnimation} 1s`,
  animationDelay: "3.7s",
  animationFillMode: "forwards",
  transition: "transform 0.3s ease-in-out",
  transform: "rotate(90deg) translateX(-100px)",
  "&:hover": {
    transform: "rotate(90deg) translateX(-105px)",
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

const Email = ({ resized }: ISocials) => {
  return (
    <Box
      position="fixed"
      bottom={10}
      right={25}
      display={{ xs: "none", md: "flex" }}
      flexDirection="column"
      alignItems="center"
      width={24}
    >
      <Box mb={1}>
        <Typography
          variant="h6"
          component="a"
          href="mailto:dasgrigoma@gmail.com"
          sx={{ ...typographySx, animationDelay: resized ? 0 : "3.7s" }}
        >
          dasgrigoma@gmail.com
        </Typography>
      </Box>
      <Divider
        orientation="vertical"
        sx={{ ...dividerSx, animationDelay: resized ? 0 : "3.5s" }}
      />
    </Box>
  );
};

export default Email;
