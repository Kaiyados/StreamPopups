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
Bootstrap Grid System: http://getbootstrap.com/css/#grid
Bootstrap Glyphicons: http://getbootstrap.com/components/#glyphicons
Font Squirrel: https://www.fontsquirrel.com
Google Fonts: https://fonts.google.com/
0to255: http://www.0to255.com/

Within the code, there is a place defined as animation style. To find the animation style that you like, visit JQueryUI (https://jqueryui.com/effect/) to test the different animations. Just replace "fade" or "fold" with your choice of animation.

##### Editor
It would be very helpful to use a nice editor to edit and test your popup overlays. You could use Notepad, but it's not very great for editing .html or .css files. Here are some suggestions:

Notepad++ https://notepad-plus-plus.org/
Komodo Edit https://www.activestate.com/komodo-edit
Brackets http://brackets.io/ - I personally like this one. I explain why in the video.

### Setup

##### Hosting (Optional)
I've done everything I can to make this work right away. However, sometimes you can't just open the example.html in a browser and it work. However, please check update 5/13/2018 below. Through some testing (with OBS at least) you can use "Local file" in a Browser source and it should work without a web server.

Sometimes, however, some browsers won't interpret javascript out of the box. So it may have to be hosted locally. Again, my video should help with this. Here are some tools to help:

WAMP http://www.wampserver.com/en/
IIS Express https://www.microsoft.com/en-us/download/details.aspx?id=48264

I like IIS Express. Both are simple to setup, but IIS Express is a smaller footprint. Once more, my video goes through IIS Express setup also.

##### Stream Software - Browser Source
This should be pretty straight forward. If you are already streaming, and you have used something like Stream Labs, then you should easily point to the html file that you just set up hosting for.

#### Updates
#### 12/2/2017
Added the ability to pass in the string "once" in to the variable 'minutesToShow' in order to accompany one time messages. An example use of this would be to have one browser source in streaming software that, once set to visible, will show the message only once. If you forget to hide the source after it displays, then it won't embarrassingly show multiple times in a loop.

Removed "Random Messages" array from example.html, created randomMessages.js, and referenced randomMessages.js in example.html for organizational purposes. It may get lost in a the middle of other code, so putting the array of messages in it's own file makes it easier to find and update when needed. If you need different sets of randome messages, then you can either create another file to reference, or add them to randomMessages.js as a new differently named variable.

#### 5/13/2018
Through some random testing, I've found that it's not necessary to have a local web server to host this tiny website, at least if you are using OBS. I'm unsure if this is due to a change in OBS and/or if it was just a problem with pathing on the stylesheets and scripts. BTW, it was definitely partly due to the pathing. Leading forward-slash on paths were removed. You should be able to just use "Local file" when you use a Browser source.