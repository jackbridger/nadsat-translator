# Week 4 - Autocomplete website/widget: you-speak-newspeak
## Translate English to Nadsat (from the book/movie 'A Clockwork Orange')

<img src="https://is4-ssl.mzstatic.com/image/thumb/Video22/v4/ef/49/de/ef49de27-5a84-9dc2-80be-d51560ae8d68/mzm.tcjamxoj.lsr/268x0w.png"></img>

## Task
Build a site which will update as you type (an autocompleter).

[Here is the task for this week on GitHub](https://github.com/foundersandcoders/master-reference/blob/master/coursebook/week-4/project.md)

## Requirements:
* A website that enables users to quickly find and select words from a list of suggestions, as they type.
* The list is dynamically generated from a pre-populated list of values (i.e. a dictionary file), leveraging searching and filtering.
* A large data file is required to search through - consider the best data structure for this (e.g. .txt or .json).
* Consider how implementation affects user experience and web performance (e.g. time to load and search through the data file).

## Goals: 
- [X] We expect back-end testing using tape (test as many components as you can).
- [ ] Basic front-end testing. Please note that we expect tests on pure functions and not on the router or the DOM.
- [x] Host your project on heroku, see resource.
- [X] Use module.exports and require to break a single large server file into smaller modules.
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
* How to make API requests on the front end and respond via Nodejs
* We've managed to set up our handlers and get our pages AND our CSS and JS files working. Woohoo!!

## What is our site supposed to do?
It's supposed to translate English words into their [Nadsat](https://en.wikipedia.org/wiki/Nadsat) equivalent. The user types in an English word, which autocompletes if it has an equivalent in the file, and then the html page will load the translation for you.

## What can our website actually do?
* Enter a word to translate
* Autocomplete suggested words from the backend
