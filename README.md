Scheduler for classes that calculates every possible schedule given a list of classes and their time periods. Just a little project I wanted to try for my future schedules (｡· v ·｡)

# Coding/structure notes
## Classes
Classes and class periods are created by user and stored in timetables.json. Classes/periods that are being used to create a schedule are stored in classes.json. This separation means classes can still be stored/recorded even when not in use.

Structure:
- Class
    - Name
    - Time periods
        - Period 1
           - Days
           - Time start
           - Time end
        - Period 2...
        - Periods with multiple times (i.e. labs) are created as their own period with the same course ID