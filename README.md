# To-Do-List-2.0
https://abhijithalder.github.io/To-Do-List-2.0/


Uses HTml,
Uses Css,
Uses javascript,
Uses DOM api,
Uses GEOLOCATION api,
Uses OPENWEATHERMAP api,

#Functionality -
	1. Asks user for location access on Load
	2. Shows user current weather temperature, feels-like temperature, location with a icon.
	3. Lets user type in strings and displays input as an unordered list item upon submission.
	4. Alerts user with texts upon empty submission trial.  
	5. Every list element contains a checkBox and a delete button.
	6. List items are separated with 2 diffenent color.
	7. Hovering over list changes color to slightly darker color .
	8. Checking checkboxes adds a checked status, changes color and moves checked list item to bottom.
	9. Hovering over delete button changes button color to red.
	10. Clicking delete button removes clicked list item.

#Includes -
	Index file(index.html)- header contains title, link to stylesheets and scripts
				body contains section for weather data, section for user input, section for list view

	Stylesheet(main.css)  - contains basic styling for index.

	Javascript(main.js)   - creates,deletes list items based on user input
				prevents page from reloading upon input submission
				checks if input is empty or not, if empty throws an alert
				resets input field upon input submission
				toggles between checked/unchecked attributes upon checkbox interaction

	Javascript(weather.js)- on load asks for permission to access location
				checks if document has access to location, if not shows an error text
				passes location(latitude,longitude) data to Url used for requesting data from openweathermap
				json response is stored in an array and passes on
	
	Text file(README.txt) - contain code review

#Optimization/Update -
	1. created new function createList
	   all functinality that are used to create list view are moved into createList
	2. changed all onlclick events to addEventListener
	3. changed some variable names for better unserstading
	4. implementation of WEBSTORAGE api ongoing. codes are commented(main.js). if uncommented, page will save input to localstorage
	   page will look for saved data on load. if any are found, a list view will be created for each saved data.
								
