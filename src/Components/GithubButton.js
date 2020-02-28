import React from 'react'
import GitHubButton from "react-github-btn";

export const StarButton = props => (
  <GitHubButton
    href="https://github.com/deerhound579/my-exams"
    data-color-scheme={`no-preference: ${props.color}; light: ${props.color}; dark: ${props.color};`}
    data-size="large"
    data-show-count="true"
    aria-label="Star deerhound579/my-exams on GitHub"
  >
    Star
  </GitHubButton>
);

export const FollowButton = props => (
    <GitHubButton
      href={`https://github.com/${props.user}`}
      data-color-scheme="no-preference: dark; light: dark; dark: light;"
      data-size="large"
      data-show-count="true"
      aria-label={`Follow @${props.user} on GitHub`}
    >
      Follow {props.name}
    </GitHubButton>
  );
