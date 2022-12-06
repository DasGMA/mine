import { Container } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/Homepage/About";
import Intro from "../components/Homepage/Intro";
import Work from "../components/Homepage/Work";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Das Ma | Software Developer</title>
        <meta name="title" content="Das Ma | Software Developer" />
        <meta
          name="description"
          content="I am a software developer and QA automation engineer specializing in building and testing Web based solutions. Currently, I am focusing on Testing frameworks and methodologies."
        />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Container maxWidth="lg" disableGutters>
        <Intro />
        <About />
        <Work />
      </Container>
    </>
  );
};

export default Home;
