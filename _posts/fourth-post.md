---
title: "Random things I learned"
excerpt: "Random things I learned"
coverImage: "/assets/blog/fourthpost.jpeg"
date: "2021-03-22T05:35:07.322Z"
author:
  name: Me
  picture: "/assets/blog/authors/avatar.png"
ogImage:
  url: "/assets/blog/fourthpost.jpeg"
---

# Random things I ran into today

useEffect(() => {},[]) is how you call an API on component mount in React. The [] is essential to prevent an infinite loop.

The most popular JWT package for go isn't maintained and has security vulnerabilities. The replacement also doesn't seem like its really maintained either.
I also couldn't get my audience validation to work because Auth0 has multiple audiences in the token. Some guy posted a work around that worked for me. <https://github.com/form3tech-oss/jwt-go/issues/7#issuecomment-757982587/>

Publishing a new version of an npm package is as simple as running `npm publish` as long as your auth is set up correctly