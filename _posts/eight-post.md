---
title: "Speed Running Agile Learning (Continued)"
excerpt: "How fast can I learn to Agile"
coverImage: "/assets/blog/eight.webp"
date: "2021-12-27T05:35:07.322Z"
author:
    name: Me
    picture: "/assets/blog/authors/avatar.png"
ogImage:
    url: "/assets/blog/eight.webp"
---

# Speed Running Agile Learning (Continued)

As I am reading through all of this information I am starting to get a little jaded about it. Reading through the DAD article on WIKI, there is a section where it says 

>"People, and the way they interact with each other, are the primary determinant of success for a solution delivery team."

And as I am reading that I am sort of just shrugging my shoulders and thinking so what? Give me something implementable or actionable.

My hazy understanding of what agile truly means is as follows (highly biased based on what I just read. My hope is to refine and improve this as my understanding becomes more clear)

- We want to create software faster, of higher quality (fewer bugs), that makes our customers happy and want to give us money.
- "Waterfall" doesn't work most of the time because we don't know what our customers want, they don't even know what they want, and the more time between gathering requirements/desires/features and delivering working software increases risks in many ways
  - The longer it takes to get the software to a customer the more likely they will move on to another product
  - The longer it takes to deliver the larger the product often becomes. Increased complexity means increased bugs not just in the software but in the release of the software
  - Responding to feedback takes a long time
  - It is worth noting that in rare cases a "waterfall" like approach can be better. Like when the problem space is extremely well defined or failure is not an option. I am thinking in the context of NASA software or flight control software
- So how do we reduce the length of time to deliver without reducing quality? **AGILE**
- You're saying how can I start breaking down my customer's problems into small deliverables such that they can still make our customers happy/increase our market share/whatever without cutting corners of the traditional SDLC?
  - sure we could release faster if we never tested or tested less, or spent less time gathering requirements, etc...
- At the heart of it Agile feels like:
  - small deliverables
    - small = reduced complexity = fewer bugs
    - small = less time to develop
    - small = easier and faster to test
    - small = easier to deploy (in theory)
    - small = easier to reason about
    - small = less change surface area (in theory) = lower likelihood of unintended consequences
    - small = less sunk cost and easier to change if the customer doesn't like it
    - small means you can bake the entire process into a period of a few days/weeks (plan, dev, test, release, documentation, whatever else)
  - working closely with the customer
    - fast feedback means customers complaints can be addressed quickly
    - better understanding of customer = better features (in theory)

That is honestly all I can think of. Everything else seems like B.S. to me or tangentially related. Like a lot of the tenants of XP like pairing. Sure pairing can have benefits in software quality but it can be a good practice on its own. It doesn't need to be wrapped in the "Agile" blanket to be a good idea.

Same with estimation strategies, if anything estimates should mean less in the Agile context. It honestly should be, hey do you think it is going to be possible to get this done in a few days, or is this something that needs to be broken down more, or do you just have no idea and it needs to be researched more.

For me putting a lot of weight on estimates is a bad smell. Estimates are the tools of planners, and plans are nearly antithetical to agile, especially in the context of planning "future" work whatever that means. Think of it this way, even if an entire team, that includes QA, BAs, and Developers, were able to generate highly accurate estimates, and you were to plan future work based on those estimates, your plans should go completely to shit the next time you interact with your customers (which should be all the time!). There is of course some work that has to be done no matter what the customer says like regulatory changes or upgrading code from an unsupported XYZ that is about to be sunset but that can just be forced into sprints when needed. Again estimates provide some value here at least in prioritization of the immediate basket of tasks at hand but no more than that.

Back on the topic of Agile in general, just because I boiled it down to two key points does not mean doing either of those is easy in any way, shape, or form. Breaking down tasks into small deliverables that provide some value to a wide swath of customers is an art and science wrapped into one. That is where I think you can start picking and choosing from all these different ideas to help in executing the Agile ideal.

I think going all-in on a full-featured methodology like SCRUM is probably a great idea for an inexperienced organization. The key is to always be evaluating what is working and not working and be willing to throw what is not working away. I think the inability to toss certain ideas from frameworks like SCRUM is what drives a lot of the hate for Agile from developers. It can be very easy to put all your faith in a process without considering what you're trying to accomplish with the process. Are daily stand-ups allowing us to deliver small high quality less bug-prone features to our customers faster all while making them want to continue to give us money or even give us more money? No? Then throw them away.


## More info from Agile Wiki

>Development methods exist on a continuum from adaptive to predictive. Agile software development methods lie on the adaptive side of this continuum.

On this continuum, there are some "smell-test" type things that you can use to determine if "value-driven" or agile development is appropriate over plan-driven development.

Things like having requirements that change often and a culture that responds to change are often better suited to an agile environment.

### Agile vs. Waterfall

A lot of great stuff in this section.

- The entire Software Development Lifecycle lives in a single iteration vs. projects moving through distinct planning, development, testing, releases phases, where everything in each phase must be done or it's left out
- plan-do-check-act (PDCA)
  - the work is planned done (developed + tested + released), checked (by customer), and any changes are acted upon
- shift from a project to product mindset
  - We're developing a product that is improved, refined, and constantly adapted to meet the customer's needs.
  - As opposed to we're doing project X, it will have features Y & Z and we will release it to our customers and we think it will meet their needs

### On Documentation

- just-barely-good-enough (JBGE) documentation
  - highly detailed docs are less trustworthy because it's highly likely they have diverged from the code
  - it also takes a large amount of time & effort to maintain documentation w/ questionable benefits
  - what would you want to know if you joined the team tomorrow

### Many different practices/methodologies

- Adaptive Software Development
  - speculate collaborate and learn cycles
- Agile Unified Process
  - your staff know what they are doing, they aren't going to read through extremely detailed docs but they want some high-level docs or training from time to time.
- Disciplined agile delivery (DAD)
  - moving beyond SCRUM.

### Product Backlog

>The product backlog is "what is needed, ordered by when it is needed" and is visible to everyone but may only be changed with consent of the product owner, who is responsible for managing and maintaining the product backlog items.

>Story points define the effort in a time-box, so they do not change with time. For instance, in one hour an individual can walk, run, or climb, but the effort expended is clearly different.

>The product owner is responsible for maximizing the value of the product. The product owner gathers input and takes feedback from, and is lobbied by, many people but ultimately has the final decision about what gets built.

### Standups

>One of the crucial features is that the meeting is a communication opportunity among team members and not a status update to management or stakeholders.

### Scrum

>It is designed for teams of ten or fewer members, who break their work into goals that can be completed within time-boxed iterations, called sprints, no longer than one month and most commonly two weeks. 

>the sprint review which demonstrates the work done to stakeholders to elicit feedback, and sprint retrospective which enables the team to reflect and improve.

>A key principle of scrum is the dual recognition that customers will change the scope of what is wanted (often called requirements volatility) and that there will be unpredictable challenges — for which a predictive or planned approach is not suited. These changes come from a variety of sources, but according to scrum, understanding why is irrelevant, and change should simply be accepted, embraced and analyzed for benefits.

>As such, scrum adopts an evidence-based empirical approach – accepting that the problem cannot be fully understood or defined up front, and instead focusing on how to maximize the team's ability to deliver quickly, to respond to emerging requirements, and to adapt to evolving technologies and changes in market conditions.

Scrum master is a servant leader. They are there to shield the team from impediments. They also are supposed to be the SCRUM subject matter expert and chief proselytizer.

Purpose of sprint planning is:

- Agree on sprint goal
- select backlog items
- form a sprint backlog by discussing items

Sprint review is mostly a demo with stakeholders. Should make sure to invite and solicit feedback from the stakeholders. Recommendation is that incomplete work is not demoed and that it should be no longer than 2 hours.

Retro:

- What went well
- what did not go well
- what could we do differently next sprint

Backlog refinement is an important part of the process to make sure the team is adapting to constantly changing requirements. It does not need to be a scheduled event for mature teams.

