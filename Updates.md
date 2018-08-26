#### 8/25/2018
This is the biggest update so far.

+ Upgraded to Bootstrap 4
    + With this upgrade, structures set up with Bootstrap 3 had to be changed.
	+ Bootstrap 4 no longer includes Glyphicons by default. Removed Glyphicon files and added refrence to Font Awesome since it is easier to use (personal opinion) and has brand icons. A link to how to use Font Awesome is included the README file or GitHub Wiki.
+ Updated streampopus.js
    + Split functions into two versions. There are now showPopup, showMultiple, showRandomMessage functions to handle showing a popup one time.
	+ Updated the ease of writing a function. For example, to pass in the popup div you can just use "div1" rather than $("#div1").
	+ Added option to show popups at start of minute, or based on time the page is rendered.
	+ Added "Functions and Definitions" section in the README file and GitHub Wiki to detail how functions work and what variables mean.
+ Styles - Just a remeinder, you can customize styles to your preference
    + Added subtle rounded corners to messageBox.
	+ Removed hardcoded heights from messageBox and messageBoxNoBG in example.html. After the conversion to Bootstrap 4 and Font Awesome, these hardcoded heights for each popup was no longer necessary. They were there to prevent visual glitches during animation.
	+ Removed widths from
+ Removed other unnecessary files.
+ Added an images folder. Although it's empty, it makes setup easier when custom images need to be used.
+ Updated example.html to reflect all the changes.
+ Other Notes
    + In example.html I included the example of an "object" which is like an embed or iframe (more html lingo). This gives the ability display an external html source. I personally used it for displaying Stream Labs' Event List, but only when I want it shown. However, it doesn't work for every webpage. It's based on whether that webpage prevents the functionality or not. It seems that Stream Labs has started preventing embedding. However, I've still left the code in case you find a use for it elsewhere.

#### 5/13/2018
Through some random testing, I've found that it's not necessary to have a local web server to host this tiny website, at least if you are using OBS. I'm unsure if this is due to a change in OBS and/or if it was just a problem with pathing on the stylesheets and scripts. BTW, it was definitely partly due to the pathing. Leading forward-slash on paths were removed. You should be able to just use "Local file" when you use a Browser source.	

#### 12/2/2017
Added the ability to pass in the string "once" in to the variable 'minutesToShow' in order to accompany one time messages. An example use of this would be to have one browser source in streaming software that, once set to visible, will show the message only once. If you forget to hide the source after it displays, then it won't embarrassingly show multiple times in a loop.

Removed "Random Messages" array from example.html, created randomMessages.js, and referenced randomMessages.js in example.html for organizational purposes. It may get lost in a the middle of other code, so putting the array of messages in it's own file makes it easier to find and update when needed. If you need different sets of randome messages, then you can either create another file to reference, or add them to randomMessages.js as a new differently named variable.