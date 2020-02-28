import React from "react";
import "antd/dist/antd.css";
import "./About.css";
import { Avatar, Carousel, Card, Typography, Row, Col } from "antd";
import GitHubButton from "react-github-btn";
import { Flex, Box } from "reflexbox";
const { Text } = Typography;

const Title = (
    <div className="header">
      <h1>
        <Text type="secondary">Finally,</Text> <br />
        see all your exam schedules <Text mark>effortlessly</Text>
      </h1>
    </div>
  );
  const Motivation = (
    <Card hoverable title="Why did we build this?">
      <p>
        Searching for exams in a PDF is painful. We feel it. While some existing
        tools allow you to type to search, we wanted to simplify it even more --
        Can we do it without search bars? Without typing five course numbers?
        After hard work, we made this, for you❤️.
      </p>
    </Card>
  );
  
  const Safety = (
    <Card hoverable title="Is it safe?">
      This tool does not store your credentials. It transmit your credentials in a
      secure way to the McGill LDAP API, to query your courses. The API only
      allows us to know the courses you're enrolled, not your grade or any kind of
      personal privacy. You can review the source code{" "}
      <a href="https://github.com/deerhound579/my-exams">here</a>.
    </Card>
  );
  
  const StarButton = (
    <GitHubButton
      href="https://github.com/deerhound579/my-exams"
      data-color-scheme="no-preference: dark; light: dark; dark: light;"
      data-size="large"
      data-show-count="true"
      aria-label="Star deerhound579/my-exams on GitHub"
    >
      Star
    </GitHubButton>
  );
  
  const SixianAvatar = (
    <Avatar
      size={128}
      src="https://sixian.li/static/0b34fa8d493d6163c9b21018d2e4f848/beea6/avatar.jpg"
    />
  );
  
  const SixianGithub = (
    <GitHubButton
      href="https://github.com/deerhound579"
      data-color-scheme="no-preference: dark; light: dark; dark: light;"
      data-size="large"
      data-show-count="true"
      aria-label="Follow @deerhound579 on GitHub"
    >
      Follow Sixian
    </GitHubButton>
  );
  
  const JiahaoAvatar = (
    <Avatar
      size={128}
      src="https://avatars2.githubusercontent.com/u/8275280?s=400&u=813739c4eb71be225a93c7e135ae7ff99f7b8485"
    />
  );
  
  const JiahaoGithub = (
    <GitHubButton
      href="https://github.com/jhcccc"
      data-color-scheme="no-preference: dark; light: dark; dark: light;"
      data-size="large"
      data-show-count="true"
      aria-label="Follow @jhcccc on GitHub"
    >
      Follow Jiahao
    </GitHubButton>
  );
  
  const pictures = [
    {
      src:
        "https://user-images.githubusercontent.com/8275280/75503527-d4072200-59a3-11ea-91d0-0cbc81188720.png",
      text: "Log in with McGill account to see exams"
    },
    {
      src:
        "https://user-images.githubusercontent.com/8275280/75503521-d23d5e80-59a3-11ea-8db4-5b222c346e63.png",
      text: "See Your Schedule without searching"
    },
    {
      src:
        "https://user-images.githubusercontent.com/8275280/75503515-d0739b00-59a3-11ea-8178-87f2b973a94d.png",
      text: "Export to any Calendar"
    },
    {
      src:
        "https://user-images.githubusercontent.com/8275280/75503480-bcc83480-59a3-11ea-917d-72c182b964b6.png",
      text: "We'll let you know when there's conflict"
    }
  ];
  
  //Carousel add margin and padding and maybe boarder, center
  const Cards = (
    <Box>
      <Carousel style={{ maxWidth: "70vmax" }} autoplay>
        {pictures.map(p => (
          <Card hoverable cover={<img alt="example" src={p.src} />}>
            {p.text}
          </Card>
        ))}
      </Carousel>
    </Box>
  );

export default () => {
    return(
    <div className="page">
    {Title}
    <Flex flexWrap="wrap" justifyContent="center" alignItems="center">
      <Box flex="1 1 600px">{Cards}</Box>
      <Box flex="1 1.5 100px">
        <Flex flexDirection="column" alignItems="center">
          <Box py={3}>{StarButton}</Box>
          <Box py={2}>{SixianAvatar}</Box>
          {SixianGithub}
          <Box py={2}>{JiahaoAvatar}</Box>
          {JiahaoGithub}
        </Flex>
      </Box>
    </Flex>
    <Row gutter={[16, 16]}>
      <Col xs={24} md={12}>
        {Motivation}
      </Col>
      <Col xs={24} md={12}>
        {Safety}
      </Col>
    </Row>
  </div>
    )
}
