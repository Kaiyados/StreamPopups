//This function is directly responsible for showing the popup message object.
function showElement(vObject, animation, animationTime, timeShown)  
{
    $(vObject).show(animation, animationTime * 1000).delay(timeShown * 1000).hide(animation, animationTime * 1000);
}

//This function loops displaying single popup object, except when minutesToShow is "once." "once" tells this function
//to display only one time.
function loopPopup(vObject, animation, animationTime, timeShown, minutesToShow) 
{
    var now = new Date();
    var nowMinute = now.getMinutes();
    var showOnce = 0;
    
    if( typeof minutesToShow == "string")
    {
        if(minutesToShow.toLowerCase() == "all" || minutesToShow.toLowerCase() == "once")
        {
            showElement(vObject, animation, animationTime, timeShown);
        }
        
        if(minutesToShow.toLowerCase() == "once")
        {
            showOnce = 1;
        }
    }
    else
    {
        if(minutesToShow.indexOf(nowMinute) >= 0)
        {
            showElement(vObject, animation, animationTime, timeShown);
        }
    }    
    
    if(showOnce = 0)
    {
        setTimeout(function() {loopPopup(vObject,animation, animationTime, timeShown, minutesToShow); }, 60000);
    }
}

//This function loops displaying a popup object with random messages, except when minutesToShow is "once." "once" tells
//this function to display only one time.
function loopRandomMessage(vObject, animation, animationTime, timeShown, minutesToShow, messages) 
{
    var now = new Date();
    var nowMinute = now.getMinutes();
    var showOnce = 0;
    
    if( typeof minutesToShow == "string")
    {
        if(minutesToShow.toLowerCase() == "all" || minutesToShow.toLowerCase() == "once")
        {
            vObject.find($("#messageText")).html(messages[Math.floor(Math.random() * messages.length)]);
            showElement(vObject, animation, animationTime, timeShown);
        }
        
        if(minutesToShow.toLowerCase() == "once")
        {
            showOnce = 1;
        }
    }
    else
    {
        if(minutesToShow.indexOf(nowMinute) >= 0)
        {
            vObject.find($("#messageText")).html(messages[Math.floor(Math.random() * messages.length)]);
            showElement(vObject, animation, animationTime, timeShown);
        }
    }
    
    if(showOnce = 0)
    {
        setTimeout(function() {loopRandomMessage(vObject,animation, animationTime, timeShown, minutesToShow, messages); }, 60000);
    }
}

//This function loops multiple popup objects (expecting vObject to be an array of objects). This displays the array of popup objects
// in a loop, except when minutesToShow is "once." "once" tells this function to show the objects one time.
function loopMultiple(vObject, animation, animationTime, timeShown, minutesToShow) 
{
    var now = new Date();
    var nowMinute = now.getMinutes();
    var showOnce = 0;
    
    if( typeof minutesToShow == "string")
    {
        if(minutesToShow.toLowerCase() == "all" || minutesToShow.toLowerCase() == "once")
        {
            vObject.forEach(function (item, index)
            {
                if(index == 0)
                {
                    showElement(item, animation, animationTime, timeShown);
                }
                else
                {
                    setTimeout(function() { showElement(item,animation,animationTime,timeShown); }, ((((animationTime * 2) + timeShown) * 1000) + 300) * index) ;
                }
            });
        }
        
        if(minutesToShow.toLowerCase() == "once")
        {
            showOnce = 1;
        }
    }
    else
    {
        if(minutesToShow.indexOf(nowMinute) >= 0)
        {
            vObject.forEach(function (item, index)
            {
                if(index == 0)
                {
                    showElement(item, animation, animationTime, timeShown);
                }
                else
                {
                    setTimeout(function() { showElement(item,animation,animationTime,timeShown); }, ((((animationTime * 2) + timeShown) * 1000) + 300) * index) ;
                }
            });
        }
    }
    
    if(showOnce = 0)
    {
        setTimeout(function() { loopMultiple(vObject, animation, animationTime, timeShown, minutesToShow); }, 60000);
    }
}