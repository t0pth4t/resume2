---
title: "(Even More) Random things I learned"
excerpt: "(Even More) Random things I learned"
coverImage: "/assets/blog/six.jpeg"
date: "2021-03-25T05:35:07.322Z"
author:
    name: Me
    picture: "/assets/blog/authors/avatar.png"
ogImage:
    url: "/assets/blog/six.jpeg"
---

# Mostly golang learnings

- As long as vars are declared in the same package they can be accessed in any file
- `:=` is for creation & assignment
- you can write multiple statement if clauses with variable assignment
    `if parseError := c.ShouldBindJSON(&logMessage); parseError != nil {`

## Gin

- You can group routes with `router.Group` which is good for versioning
- With the JWT middleware I had to do some weird stuff to get access to the user object. It apparently sets it on the request context.
`user := c.Request.Context().Value("user")`
- If you do use that `router.Group` make sure subgroups don't double up the `/` or it will do a redirect on every request

## Redis

- Looks like redis data can be persisted two ways. Periodic backups and a write only log. You can use both to completely prevent data loss.
