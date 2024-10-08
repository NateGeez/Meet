# Meet

This app will be a serverless PWA (progressive web application). It has a responsive design with instant loading, offline support, and a home screen shortcut. The app will be able to display events by location with visualization charts.

## Show/Hide Event Details

As a user, I would like to have access to the details of an event with the click of a button so that I can easily open and close immediate details.

Given: That all events contain details that are hidden by default
When: Clicks on the event details button
Then: Details of the event is displayed

## Specify Number of Events

As a user, I would like to know how many events there are going on and be able to display a smaller number of events so that I can easily sort through the events.

Given: That there is a long list of events
When: A user specifies a total number of events to display
Then: The users desired number of events will display

## Use the App When Offline

As a user, I would like to be able to use this app even when offline so that even if I don't have internet access I can still use the app.

Given: The user may not always have internet access
When: The app is used when offline
Then: Cached data will display, but an error message will display when search settings change

## Add a Shortcut to Home Screen

As a user, I would like to have easy access to the app so that I can open the app from the home screen with the click of a button.

Given: That the user would like to easily quickly access the app
When: The user opens the home screen
Then: An app shortcut will display

## Display Charts Visualizing Event Details

As a user, I would like to see a chart with the number of upcoming events in each city by clicking a button so that I can see a visual representation of the

Given: That the user would like a visual representation of events in each city
When: The user clicks on view charts button
Then: A chart will display with details of the cities events
