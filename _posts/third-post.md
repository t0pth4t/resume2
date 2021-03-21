---
title: "Building a React Typescript App With Auth0 Update March 20, 2021"
excerpt: "Building a landing page"
coverImage: "/assets/blog/thirdpost.jpeg"
date: "2021-03-20T05:35:07.322Z"
author:
  name: Me
  picture: "/assets/blog/authors/avatar.png"
ogImage:
  url: "/assets/blog/thirdpost.jpeg"
---

# Trying to a design a "modern" startup landing page

I probably took the wrong approach here in building the landing page first but I find my motivation wanes early if I do not feel like I am working on a realistic product.

I have been using material-ui as a component framework for this project. My initial impressions were that it was somewhat lacking in prebuilt components. The majority of my frontend component library experience is with Bootstrap which I felt was much more opinionated and easy to use.

As I continue to work with material-ui I am starting to figure it out. I wouldn't say it was growing on me but I am at least able to manipulate it enough to build a half-way decent looking landing page.

Some of the things that I find odd are if you want to use the built in spacing syntactic sugar you need to wrap the component in a `<Box>` component. For example if you want to put padding around a button without having to write a custom padding class or inline style you would have to do something like this.

```
<Box p={5}>
    <Button></Button>
</Box>
```

Putting material-ui aside, I did find a super cool code highlighting library <https://www.npmjs.com/package/react-syntax-highlighter/>. It has a awesome code them called `synthwave84` which I really need to get into my IDEs.

That's all I got for this Saturday night.
