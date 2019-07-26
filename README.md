# Week 4 - Autocomplete website/widget: you-speak-newspeak
## (the repo name references Newspeak from 1984, but we changed the project to use Nadsat from A Clockwork Orange)
## BFNJ - Emmanuel, Jack, Georgia and Colette

<img src="https://sourcemaking.com/files/sm/images/spagett.jpg"></img>

## Task
Build a site which will update as you type (an autocompleter).

[Here is the task for this week on GitHub](https://github.com/foundersandcoders/master-reference/blob/master/coursebook/week-4/project.md)

## Requirements:
* A website that enables users to quickly find and select words from a list of suggestions, as they type.
* The list is dynamically generated from a pre-populated list of values (i.e. a dictionary file), leveraging searching and filtering.
* A large data file is required to search through - consider the best data structure for this (e.g. .txt or .json).
* Consider how implementation affects user experience and web performance (e.g. time to load and search through the data file).

## Goals: 
- [ ] We expect back-end testing using tape (test as many components as you can).
- [ ] Basic front-end testing. Please note that we expect tests on pure functions and not on the router or the DOM.
- [x] Host your project on heroku, see resource.
- [ ] Use module.exports and require to break a single large server file into smaller modules.
- [x] Consider what would be a good server file structure based on what we have discussed over the week.

## What's gone well (or perhaps better phrased as what's not gone too badly)
* Deploying on Heroku wasn't as difficult as we expected (once we got the hang of it!)
* Agreeing on a file structure - one of the first things we did
* Setting up correctly - installing on our dependencies etc from the beginning of the project!
* Spending a lot of time mobbing together - this week has been really difficult and working through everything slowly together seems to have been more productive than working in pairs. 

## What's gone less well
* Testing - pretty non existent!
* Getting our heads around the relationship between back end and front end. 
* Getting our handlers to work and understanding why js and css files need paths even though they're not files the user would ever navigate to. 

## What have we learnt?
* That Node.js is not our friend... yet. And it's &^%$%£@ difficult to get your head around!
* But hopefully we all feel a tiny bit more confident with Node.
* We've managed to set up our handlers and get our pages AND our CSS and JS files working. Woohoo!!
* Our JS is a bit messy and still needs work but it's doing stuff... if only we could have another day...

## What can our website actually do so far?
* Enter a word to translate (but it won't translate yet)
* Autocomplete results from a test object appear (the object's keys are the English words, while the values are the Nadsat words)
* Currently they appear as text, but there is a commented out version that makes them appear as separate buttons - that version is likely closer to the final, functioning version, but it is unfinished and has an issue that needs ironing out
* There is an event listener checking for if the enter button is pressed - this links up to the function that takes the input as an argument and returns the translation - however, the translation is not shown yet
* The submit button does not have the same event listener yet
* Clicking the autocomplete suggestions does not do anything yet (in either version of the code that shows the suggestions on the screen)

