import { Box, Container, CssBaseline, ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import React, { useCallback, useEffect, useState } from "react";
import Email from "../components/Contacts/Email";
import Socials from "../components/Contacts/Socials";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import theme from "../theme";

function MyApp({ Component, pageProps }: AppProps) {
  const [resized, setResized] = useState<undefined | boolean>(undefined);

  const resize = useCallback(() => {
    if (window.innerWidth < 900 && resized !== undefined) {
      setResized(false);
    } else if (window.innerWidth > 900 && resized !== true) {
      setResized(true);
    }
  }, [resized]);

  useEffect(() => {
    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, [resize]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth={false}>
          <Navigation />
          <Box component="main" flex={1} position="relative">
            <Component {...pageProps} />
            <Socials resized={resized} />
            <Email resized={resized} />
          </Box>
          <Footer />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
