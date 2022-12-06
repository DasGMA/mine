import React, { useState } from "react";
import {
  AppBar,
  Box,
  Container,
  IconButton,
  keyframes,
  Link as MLink,
  Menu,
  MenuItem,
  Toolbar,
} from "@mui/material";
import Image from "next/image";
import logo from "../../assets/drawing.svg";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";

const animation = keyframes`
  0% {
    opacity: 0
  }

  100% {
    opacity: 1
  }
`;

const appBarSx = {
  bgcolor: "#f8f8f8",
  boxShadow: "none",
  opacity: 0,
  animation: `${animation} 1s`,
  animationDelay: "3.5s",
  animationFillMode: "forwards",
};

const Navigation: React.FC = () => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar id="navbar" position="fixed" sx={appBarSx}>
      <Container maxWidth="lg" disableGutters>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box
            display="inline-flex"
            alignItems="center"
            ml={-1.8}
            sx={{ cursor: "pointer" }}
          >
            <Link href="/" passHref>
              <Image src={logo} alt="Das Ma" width={50} height={50} />
            </Link>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <MenuIcon />
            </IconButton>

            <Menu
              sx={{ mt: 4 }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                <MLink href="/#About" underline="none">
                  About
                </MLink>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <MLink href="/#projects" underline="none">
                  Work
                </MLink>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Link href="/resume" passHref>
                  <MLink underline="none">Resume</MLink>
                </Link>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navigation;
