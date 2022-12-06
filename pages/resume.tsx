import { Container, Divider, Typography } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Cv from "../components/Cv";
import About from "../components/Homepage/About";
import Intro from "../components/Homepage/Intro";
import Work from "../components/Homepage/Work";

const Resume: NextPage = () => {
  return (
    <>
      <Head>
        <title>Resume | Das Ma | Software Developer</title>
        <meta name="title" content="Resume | Das Ma | Software Developer" />
        <meta name="description" content="Work and Education history" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container
        maxWidth="lg"
        disableGutters
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Cv />
      </Container>
    </>
  );
};

export default Resume;
