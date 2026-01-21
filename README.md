Scheduler for classes that calculates every possible schedule given a list of classes and their time periods. Just a little project I wanted to try for my future schedules (｡· v ·｡)

# Planning bs (pls ignore)
## Part 1: class/timetable json logging
main goal is to be able to create classes to add to a masterlist of classes (timetable.json) that can be easily referenced to add/remove, then log chosen classes/sections to classes.json; this separation prevents having to delete classes and re-enter them, instead they can pick from this masterlist/timetable. Technically a secondary feature but necessary to start with for functions/testing
- html to log classes (Course, ID, time start/end)
- js log classes to timetable.json
- display all classes (sort by Course then id)
    - filter classes by course, time, etc*
- log/add/remove classes from classes.json
- add/remove classes from timetable.json
- edit courses in timetable.json, communicate chnages to classes.json
## Part 1.5: fight with electron
Tried to do this at one point but gave up :< gonna have to implement it after this point tho
## Part 2: the fun part
implement scheduler algo yayyyyyyyyyuuuughhhhhh
take a list of unique course ids and calculate every possible schedule of courses
RULES:
1. one ID per course; no double-enrolling
2. times can't overlap obviously
valid schedules are stored in schedules.json, objects with an id number and an array of schedules. People should be able to save schedules they like in savedschedules.json. If a class in a saved schedule is deleted, the schedule can still exist but has to display a warning that a certain ID isn't going to show up (or just throw an error ig, probably easier)
how exactly this works depends on what i decide the html's gonna look like to create schedules
- html mockup
- JS algo
    - rules and logic blah blah blah it's 12 am idfc
    - log schedules into 
- display "schedules" (course id time start/end)

* optional, may implement once everything else works