# Work-calendar-with-moment.js
<img src="Work Calendar.PNG" width="300">
I first made the html and I made the time block into divs that eaach have a label,textarea and button to save the text in its textarea sibling into local storage with the key that matches the label.
This text is gotten from local storage by two for loops in loadText() and and a get item method for for noon.
The color of the boxes are changed by setTextBoxColor() which again has two for loops one for am hours and for pm hours and a set of if else statements to do noon by itself.
it adds either past present or future as a class to the text area based off of the time.
