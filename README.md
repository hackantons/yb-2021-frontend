# YB SMART CONTENT CENTER

This project is the winner of the [YB Hackaton](https://hackathon.bscyb.ch/) 2021 by [Jonny Burger](https://github.com/JonnyBurger), [Simon Messerli](https://github.com/simonmesserli), [Jonas Niestroj](https://github.com/JonasNiestroj) and [Nico Martin](https://github.com/nico-martin/).  

> If you go through the code please keep in mind that we had **only 24 hours** and we did not care too much about an elegant architecture or super clean structure. It works. That's all that counts!

## The challenge

The challenge was set by the Swiss sports club [BSC Young Boys](https://www.bscyb.ch/):

> ### YB SMART CONTENT
> 
> Develop a smart, dynamic live content format to use on match days, which is exciting for YB fans on the one hand, and can be used by YB as a digital advertising platform for its partners on the other.
>
> The format is based on live ticker data from matches which are made available (corners, offside, substitutions, etc.). The aim is to combine this event data in a new presentation, and automatically, as well as dynamically, with attractive advertising spaces and suitable partners in each case.
> 
> The integration of further features and non-match-related data (e.g. weather) is possible.

## The problem

If you really want to transport emotions via social media there is now way around videos. But It's quite hard to create instant videos for live events. Right now there is no way around expensive software and complex templates.  
With our solution we wanted to help content managers to create videos as immediate responses to events happening right now in the game.

## The solution

For the user interface we decided to use [NextJS](https://nextjs.org/) together with [TypeScript](https://www.typescriptlang.org/) and [PostCSS](https://postcss.org/). At the core we integrated [Remotion](https://remotion.dev/) and created two templates that could be customized using a set of parameters displayed as an easy to use form.  
All changes are immediately displayed in a [Remotion Player](https://remotion.dev/docs/player) right next to the form.

Afterwards, the remotion videos can be deployed to an AWS Lambda infrastructure, where we can render the videos in a super performant way using a simple API call.

Those videos can then be shared to Twitter, but in the future it would also be possible to add more integrations to social media platforms.
