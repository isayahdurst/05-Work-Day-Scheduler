# 05-Work-Day-Scheduler

This application allows a user to plan and manage their workday by adding tasks or appointments to hourly timeblocks and saving those tasks so they can be completed. As working hours pass, the background colors of each block update to let the user know whether the task is in the past (gray), present (red), or future (green).

## Table of contents

-   [Overview](#overview)
    -   [The challenge](#the-challenge)
    -   [Screenshot](#screenshot)
    -   [Links](#links)
-   [My process](#my-process)
    -   [Built with](#built-with)
    -   [What I learned](#what-i-learned)
    -   [Continued development](#continued-development)
    -   [Useful resources](#useful-resources)
-   [Author](#author)
-   [Acknowledgments](#acknowledgments)

## Overview

### The challenge

User Story:

```
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

Acceptance Criteria:

```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with time blocks for standard business hours
WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future
WHEN I click into a time block
THEN I can enter an event
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

### Screenshot

-   Schedule Preview [Schedule](./assets/images/scheduler-screenshot.png?raw=true 'Schedule Preview')

### Links

-   Live Site URL: [Github](https://isayahdurst.github.io/05-Work-Day-Scheduler/)

## My process

I was quite eager to get this project done quickly so I could move onto the next one, so my process for completing this project was not the same as most others. Ultimetely I
ended up rushing through most of the design and didn't read the bootstrap documentation the same way I normally would have. I was able to re-create the design from the mock-up,
but it wasn't exactly the same and, if I'm being honest, I was almost fine with that. I moved onto the JavaScript and creating the logic next, which was quite easy. The data
and time is pulled using Luxon and I set an interval to check for hourly changes every second. This means that the background colors of the time-blocks will automatically update
without the user needing to refresh their browser, which is a feature I couldn't leave out. After coding the logic for the program, I left it alone for about a week and didn't return until I finally decided that I should do my best on these projects even when I don't find them remotely interesting or challenging. I went back through my original HTML file and recreated it using proper Bootstrap classes, which in retrospect was quite simple. I ran into one issue regarding overlap but I was able to solve it with a couple searches on Stackoverflow. Once the design was refurbished, I decided to code a little more functionality into the application. The mock-up shows that after pressing the "save" buttons, a confirmation message is displayed at the top of the screen. I've taken that a step further. The confirmation message in this application is displayed above the time-block which was saved and only appears for two seconds before it is then removed, using JQuery.

### Built with

-   Semantic HTML5 markup
-   CSS
-   JavaScript
-   Bootstrap
-   Luxon

### What I learned

In this project, I learned that it's important to give it your all regardless of how interested you are in the project. In retrospect, because I've finished this project the way that I have, I can submit it and feel proud of the work I've done. I learned a good deal more about Bootstrap and JQuery, which will undoubtedly be helpful to me in the future.

### Continued development

I would like to continue learning more about the Bootstrap CSS framework. I feel like it's convenient for quickly creating a prototype web design and I may use it more often to create mock-ups. Personally, I do enjoy the process of making my own custom CSS more, but I see where Bootstrap can make life easier when you don't want to build something from absolute scratch. Especially if it's very simple. Additionally, I'd like to use Luxon a bit more to get a better feel for it. I feel like this app only really scratched the surface of Luxon and it would be nice to play around with time conversions or time-zones in a future application.

## Author

-   Github - [@isayahdurst](https://www.github.com/isayahdurst)
-   Twitter - [@isayahdurst](https://www.twitter.com/isayahdurst)

## Acknowledgments

Big thank you to Luxon docs, Bootstrap Docs, and a few helpful Stackoverflow articles.
