function showElement(vObject, animation, animationTime, timeShown)  
{
    $(vObject).show(animation, animationTime * 1000).delay(timeShown * 1000).hide(animation, animationTime * 1000);
}

function loopPopup(vObject, animation, animationTime, timeShown, minutesToShow) 
{
    var now = new Date();
    var nowMinute = now.getMinutes();
    if(minutesToShow.indexOf(nowMinute) >= 0 || minutesToShow == "all")
    {
        showElement(vObject, animation, animationTime, timeShown);
    }
    
    setTimeout(function() {loopPopup(vObject,animation, animationTime, timeShown, minutesToShow); }, 60000);
}

function loopRandomMessage(vObject, animation, animationTime, timeShown, minutesToShow, messages) 
{
    var now = new Date();
    var nowMinute = now.getMinutes();
    if(minutesToShow.indexOf(nowMinute) >= 0 || minutesToShow == "all")
    {
        vObject.find($("#messageText")).html(messages[Math.floor(Math.random() * messages.length)]);
        showElement(vObject, animation, animationTime, timeShown);
    }
    
    setTimeout(function() {loopRandomMessage(vObject,animation, animationTime, timeShown, minutesToShow, messages); }, 60000);
}


function loopMultiple(vObject, animation, animationTime, timeShown, minutesToShow) 
{
    var now = new Date();
    var nowMinute = now.getMinutes();
    if(minutesToShow.indexOf(nowMinute) >= 0 || minutesToShow == "all")
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
    
    setTimeout(function() { loopMultiple(vObject, animation, animationTime, timeShown, minutesToShow); }, 60000);
}