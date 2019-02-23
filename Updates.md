#### 2/20/2019
Big style update.

Updates for styles are listed below, but a quick note on updating files you may have already customized. "user_custom.css" was added for custom styles to go in. I suggest copying all of your altered styles into "user_custom.css," bring in the new "streampopups.css" file, and leave it untouched. You don't have to follow this suggestion if you are comfortable with css code. If you are, you can just pick and choose what you want to update.

+ Added new css selectors.
    + left, right, btm - these selectors are specifically for "messageBox." It allows you to move the messageBox around the screen. The default is left, so you won't need to type that out if you don't want to. "btm" with combination of "left" or "right" will push the the messageBox toward the bottom of the screen.
    + fab - "fab" is actually a Font Awesome selector, but added some styles in steampopups.css so you can control size of the icons within messageBox or hdrContainer independently.
+ Added "user_custom.css"
    + This file is to house any custom styles you would like to add; just in case anyone isn't comfortable altering the default styles in "streampopups.css."
    + Comes with example/pre-existing code that already overrides things. You may find some of them to be quite helpful.
    + This file is already linked at the end of "streampopups.css" so you don't have to worry about linking this new file in each of your existing HTML pages.
+ Various cleanup
    + By adding "fab" selector to streampopups.css, some of the styles were removed from example.html; such as controlling the size or color of the icon.
    + Cleaned up the confusing font arrangement in "streampopups.css"; it didn't work and wasn't linked correctly. Changed font to a Google Font. This can easily be overridden to use a different Google Font.
    + Removed "fonts" folder since it's only linking a Google Font now.
+ Altered the examples of messageBox in "example.html" to show off the updated styles. This also includes the use of the example overriden styles in "user_custom.css."
+ More notes about styles added to README file.


#### 9/1/2018
More options again.

+ Added variables to functions to allow you to have a different animation for showing and hiding.
+ Added variables to functions to allow you to decide what directions the popups will animate to or from during hiding and showing.
+ README.md: Functions, Variable Definitions, and Examples updated to cover these details.


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
+ Styles - Just a reminder, you can customize styles to your preference
    + Added subtle rounded corners to messageBox.
	+ Removed hardcoded heights from messageBox and messageBoxNoBG in example.html. After the conversion to Bootstrap 4 and Font Awesome, these hardcoded heights for each popup was no longer necessary. They were there to prevent visual glitches during animation.
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