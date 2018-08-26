# StreamPopups

### Description
Collection of HTML, CSS, Bootstrap, JQuery/Javascript for use of displaying custom popups through streaming software with "Browser Source" capabilities.

The following content assumes that you may not have knowledge of web development. That is why I'm providing links to resources to help. I even created a video to go through the following items.

Tutorial Video: https://youtu.be/_SM66rUIT5o

### Personalizing/Customizing
If you would like to customize the popup overlays with different designs, then I suggest that you should have some knowledge of HTML, CSS, Javascript/JQuery. However, this is completely **optional**. I do suggest that you at least watch my video to see the key points of editing.

HTML Tutorial: https://www.w3schools.com/html/
CSS Tutorial: https://www.w3schools.com/html/html_css.asp
Javascript Tutorial: https://www.w3schools.com/html/html_scripts.asp
Bootstrap Grid System: https://getbootstrap.com/docs/4.1/layout/grid/
Font Awesome: https://fontawesome.com/icons?d=gallery&m=free
Font Squirrel: https://www.fontsquirrel.com
Google Fonts: https://fonts.google.com/
0to255: http://www.0to255.com/

Within the code, there is a place defined as animation style. To find the animation style that you like, visit JQueryUI (https://jqueryui.com/effect/) to test the different animations. Just replace "fade" or "fold" with your choice of animation.

##### Editor
It would be very helpful to use a nice editor to edit and test your popup overlays. You could use Notepad, but it's not very great for editing .html or .css files. Here are some suggestions:

Notepad++ https://notepad-plus-plus.org/
Komodo Edit https://www.activestate.com/komodo-edit
Brackets http://brackets.io/ - I personally like this one. I explain why in the video.

##### Functions and Definitions

###### Functions
```javascript
showPopup(popupElement, animationStyle, animationLength, displayLength);
loopPopup(popupElement, animationStyle, animationLength, displayLength, minutesToShow, showAtTopOfMinute);

showMultiple(popupElements, animationStyle, animationLength, displayLength);
loopMultiple(popupElements, animationStyle, animationLength, displayLength, minutesToShow, showAtTopOfMinute);

showRandomMessage(popupElement, animationStyle, animationLength, displayLength, randomMessages);
loopRandomMessage(popupElement, animationStyle, animationLength, displayLength, minutesToShow, showAtTopOfMinute, randomMessages);
```

###### Variable Definitions
These are the different variables used in a function and what they mean.
+ **popupElement** - (string) the string ID of the html element (usually a div) that will show.
+ **popupElements** - (array of strings) an array of string IDs of the html elements.
+ **animationStyle** - (string) the effect of how the popupElement will show and hide. The different styles can be found at (https://jqueryui.com/effect/)
+ **animationLength** - (decimal) the amount of time the animation will use to show or hide the popup element.
+ **displayLength** - (decimal) the amount of time the popupElement will display aside from the animation.
+ **minutesToShow** - (string or an array of integers) "all" will diplay the popup every minute while an array of integers will display the popup on the minute marks that those integers represent (0 - 59) every hour.
	+ [1,3,5,7] : will display 5:01, 5:03, 5:05, 5:07, 6:01, 6:03, 6:05, 6:07, 7:01, 7:03, etc.
+ **showAtTopOfMinute ** - (true/false) If set true, popup will display (still based on minutesToShow) when the minute changes. If set false, popup will display based on minutesToShow and when the web page was loaded.
	+ true: if minutesToShow is [1,3], popup will display at 2:01:00 (2:01 & zero seconds), 2:03:00, 3:01:00, etc.
	+ false: if minutesToShow is [25,27] and page was opened at 12:26:37 (12:26 & 37 seconds), popup will display at 12:27:37.
+ **randomMessages** - (array of strings) an array of strings for use of displaying random messages from.


###### Function Examples

```javascript
showPopup("box1", "fold", 1.5, 7);
loopPopup("box1", "fold", 1.5, 7, "all", false);

showMultiple(["box2", "box3"],"fold", 1.5, 7);
loopMultiple(["box2", "box3"],"fold", 1.5, 7, [0,1,2,3,4,5], true);               

showRandomMessage("rndmBox", "fold", 1.5, 7, messages);
loopRandomMessage("rndmBox", "fold", 1.5, 7, [6,7,8,9,10], false, messages);
```

### Setup

##### Hosting (Optional)
I've done everything I can to make this work right away. However, sometimes you can't just open the example.html in a browser and it work. However, please check update 5/13/2018 below. Through some testing (with OBS at least) you can use "Local file" in a Browser source and it should work without a web server.

Sometimes, however, some browsers won't interpret javascript out of the box. So it may have to be hosted locally. Again, my video should help with this. Here are some tools to help:

WAMP http://www.wampserver.com/en/
IIS Express https://www.microsoft.com/en-us/download/details.aspx?id=48264

I like IIS Express. Both are simple to setup, but IIS Express is a smaller footprint. Once more, my video goes through IIS Express setup also.

##### Stream Software - Browser Source
This should be pretty straight forward. If you are already streaming, and you have used something like Stream Labs, then you should easily point to the html file that you just set up hosting for.