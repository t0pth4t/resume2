---
title: "(More) Random things I learned"
excerpt: "(More) Random things I learned"
coverImage: "/assets/blog/five.jpeg"
date: "2021-03-22T05:35:07.322Z"
author:
    name: Me
    picture: "/assets/blog/authors/avatar.png"
ogImage:
    url: "/assets/blog/five.jpeg"
---

# Random things I ran into today

In golang structs the properties need to be capitalized in order to be publicly accessible

Also, I think the `json:` syntax means something, but I can't find documentation on it because I don't know what to google and its not in the standard docs
```golang
type LogInput struct {
	Message string `json:"message" binding:"required"`
	Error LogError `json:"error"`
}
```

In golang Log.Fatal actually kills the program

Switching to mac couldn't get my heroku deploy to work. 
- I had to check in the built golang object and push it to heroku. This doesn't seem right but I don't care enough to fix it.
- Also had to add heroku remote `heroku git:remote -a app-name`
- Had to change the build command so it built a linux executable `env GOOS=linux GOARCH=amd64 go build -o bin/golang-gin-poc -v`

