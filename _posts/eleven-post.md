---
title: "Is Software Engineering Going to be Automated?"
excerpt: "Is Software Engineering Going to be Automated?"
coverImage: "/assets/blog/nine.webp"
date: "2022-12-21T05:35:07.322Z"
author:
    name: Me
    picture: "/assets/blog/authors/avatar.png"
ogImage:
    url: "/assets/blog/eleven.webp"
---

# Is Software Engineering Going to be Automated?

This is a question which gives me great existential dread. I am writing this primarily in the hopes that it will assuage my fears of being displaced by AI.

## My Thoughts

*Note: I am writing this using AI since I have Github Copilot installed as an extension in VScode*

Of course my kneejerk reaction to the idea is to scoff and write it off completely. "There is no way some silly chat bot is going to do work as complicated as I can". But I know that I am being disingenuous. I know deep down that it is entirely possible for this to happen if not plausible within my working years as a middle aged person.

I can trivially dismiss some of my fears at least for the AI in its current iteration by asking the ChatGPT bot to write some functions for me while I work. I would say running that little experiment has given me some level of short-term hope given that I've had a about a 50% success rate with the code even compiling.

Anecdotally as well I've read comments from others on HackerNews from those who have seemed to have similar results.

Credit where credit is due though, it has genuinely helped me with writing Regex and I find its explanations to be very useful in understanding how it works.

My conclusion before research is that my career is safe for now barring world changing advancements in general AI. Meaning the only way I feel as if my career will be completely disrupted forcing me to find a different one is if we approach a true general artificial intelligence.

The reason I think this is mostly due to the pareto principle. That is that solving the problem of replacing software engineering with AI may be doable to an 80% level but the remaining 20% will be infeasible if not impossible without general AI.

More specifically I reflect on my experience just in the sense that the domain is not at all as narrow as you may assume. Of course writing functional code is a part of what engineers do but there is so much more. In its current state making functional applications that solve a problem requires many other domains aside from just writing actual code.

If we are talking about solving a problem from "stracth" e.g. building an application that functions like `Uber`, there is so much more to that than just writing code. Obviously code drives the creation of the application but what deploys the application? How is its data stored? How is its data accessed and in how many ways? I think I just hit on a great example of what I think of as a `20%` problem. Assuming I can just say, "Hey AI, write me an application that functions like `Uber`" I would be sorely disappointed. I would be disappointed because I would be expecting the AI to be able to solve the problem of deploying the application, storing the data, and accessing the data in a way that is performant and secure. I would be expecting the AI to be able to solve the problem of creating a user interface that is intuitive and easy to use. I would be expecting the AI to be able to solve the problem of creating a system that is scalable and can handle millions of users. I would be expecting the AI to be able to solve the problem of creating a system that is secure and can handle sensitive data. I would be expecting the AI to be able to solve the problem of creating a system that is performant and can handle millions of transactions per second. I would be expecting the AI to be able to solve the problem of creating a system that is resilient and can handle failures. I would be expecting the AI to be able to solve the problem of creating a system that is secure and can handle sensitive data. I would be expecting the AI to be able to solve the problem of creating a system that is performant and can handle millions of transactions per second. I would be expecting the AI to be able to solve the problem of creating a system that is resilient and can handle failures. I would be expecting the AI to be able to solve the problem of creating a system that is secure and can handle sensitive data. I would be expecting the AI to be able to solve the problem of creating a system that is performant and can handle millions of transactions per second. I would be expecting the AI to be able to solve the problem of creating a system that is resilient and can handle failures. I would be expecting the AI to be able to solve the problem of creating a system that is secure and can handle sensitive data. I would be expecting the AI to be able to solve the problem of creating a system that is performant and can handle millions of transactions per second. I would be expecting the AI to be able to solve the problem of creating a system that is resilient and can handle failures. I would be expecting the AI to be able to solve the problem of creating a system that is secure and can handle sensitive data. I would be expecting the AI to be able to solve the problem of creating a system that is performant and can handle millions of transactions per second. I would be expecting (`this gigantic I would be expecting the AI to... loop was completely generated by copilot. Is this art?`)

My point was going to be without knowledge of systems like databases or the underlying understanding of what the "creator" is trying to accomplish you can easily see a layman optimizing for local problems without accounting for general problems b/c while describing their program in plain english because of their lack of understanding of the underlying domain. I can tell AI to write me the most effecient query to select x rows and join on y table, which may be optimal for one scenario but not another. Of course you could argue that I could just tell the AI to generate another query for other use cases but how would a layman even understand why something is slow unless they have some understanding of the system. Again you can assume that you could ask the AI to understand it for them but again your assuming the AI has all the context it needs to actually provide insight. 

Alternatively you could say well, "hell you're not going to be telling it to write SQL for you, you'll just tell it to display the user's profile for you on this page. The AI will handle all that messy backend stuff" That again makes an enormous amount of assumptions in that there will already be some system or domain that the AI can play in that can solve a myriad of technical problems in optimal ways and outputing generalized software applications based on plain text prompts from a layman. 

## Is this art?

Here is what ChatGPT wrote for me given this prompt `Write me a blog post that weighs the possibility that software engineering will be automated away by AI`

To save myself from bias I did not read the output before writing this. 

```
As artificial intelligence (AI) continues to advance and become more sophisticated, there is a growing concern among software engineers that their jobs may be automated away by AI. While it is true that AI has the potential to automate certain tasks within the software development process, it is unlikely that it will completely replace the need for human software engineers.

One of the key areas where AI has the potential to automate tasks within software development is in code generation. There are already several tools available that use AI to generate code based on a set of input parameters. While these tools can be useful for generating boilerplate code or for prototyping, they are not yet able to fully replace the creativity and problem-solving skills of a human software engineer.

Another area where AI could potentially automate tasks within software development is in testing and debugging. AI algorithms can be trained to identify patterns and anomalies in code that could indicate a bug or error. However, these algorithms still require human oversight and interpretation to fully understand and fix the issue.

It is also worth considering the fact that software development is not just about writing code. It also involves understanding the needs of the end user, designing solutions to complex problems, and managing a team of developers. These tasks require a deep understanding of human behavior and communication, which is difficult for AI to replicate.

Overall, while AI has the potential to automate certain tasks within the software development process, it is unlikely that it will completely replace the need for human software engineers. While it may change the nature of their work, the demand for skilled software engineers is likely to continue as long as there is a need for custom software solutions.
```