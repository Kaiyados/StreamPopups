//This function is directly responsible for showing the popup message object.
function showElement(vObject, animationStyle, animationLength, displayLength)  
{
    $(vObject).show(animationStyle, animationLength * 1000).delay(displayLength * 1000).hide(animationStyle, animationLength * 1000);
}

//This function displays a single popup object one time.
function showPopup(popupElement, animationStyle, animationTime, displayLength) 
{    
    showElement($("#" + popupElement), animationStyle, animationTime, displayLength);  
}

//This function loops displaying single popup object.
function loopPopup(popupElement, animationStyle, animationLength, displayLength, minutesToShow, showAtTopOfMinute) 
{
	var show = false;
	var now = new Date();
    var nowMinute = now.getMinutes();
	var nowSecond = now.getSeconds();
	var timeOutSeconds = 60;
	
	if(showAtTopOfMinute == true)
	{
		timeOutSeconds = 1;
		
		if( typeof minutesToShow == "string" && minutesToShow.toLowerCase() == "all" && nowSecond == 0)
		{
			show = true;
		}
		else if(minutesToShow.indexOf(nowMinute) >= 0 && nowSecond == 0)
		{
			show = true;
		}
	}
	else
	{
		if( typeof minutesToShow == "string" && minutesToShow.toLowerCase() == "all")
		{
			show = true;
		}
		else if(minutesToShow.indexOf(nowMinute) >= 0)
		{
			show = true;
		}
	}
	
	if(show == true)
	{
		showElement($("#" + popupElement), animationStyle, animationLength, displayLength);
	}
    
    setTimeout(function() {loopPopup(popupElement,animationStyle, animationLength, displayLength, minutesToShow, showAtTopOfMinute); }, (timeOutSeconds * 1000));    
}

//This function displays a popup object with a random message one time.
function showRandomMessage(popupElement, animationStyle, animationLength, displayLength, randomMessages) 
{
	var foundObj = $("#" + popupElement);
    foundObj.find($("#messageText")).html(randomMessages[Math.floor(Math.random() * randomMessages.length)]);
    showElement(foundObj, animationStyle, animationLength, displayLength);    
}

//This function loops displaying a popup object with random messages.
function loopRandomMessage(popupElement, animationStyle, animationLength, displayLength, minutesToShow, showAtTopOfMinute, randomMessages) 
{
    var show = false;
	var now = new Date();
    var nowMinute = now.getMinutes();
	var nowSecond = now.getSeconds();
	var timeOutSeconds = 60;
    
    if(showAtTopOfMinute == true)
	{
		timeOutSeconds = 1;
		
		if( typeof minutesToShow == "string" && minutesToShow.toLowerCase() == "all" && nowSecond == 0)
		{
			show = true;
		}
		else if(minutesToShow.indexOf(nowMinute) >= 0 && nowSecond == 0)
		{
			show = true;
		}
	}
	else
	{
		if( typeof minutesToShow == "string" && minutesToShow.toLowerCase() == "all")
		{
			show = true;
		}
		else if(minutesToShow.indexOf(nowMinute) >= 0)
		{
			show = true;
		}
	}
	
	if(show == true)
	{
		var foundObj = $("#" + popupElement);
		foundObj.find($("#messageText")).html(randomMessages[Math.floor(Math.random() * randomMessages.length)]);
		showElement(foundObj, animationStyle, animationLength, displayLength);
	}
	
	setTimeout(function() {loopRandomMessage(popupElement,animationStyle, animationLength, displayLength, minutesToShow, showAtTopOfMinute, randomMessages); }, (timeOutSeconds * 1000));
}

//This function displays an array of objects, but only showing each of them one time.
function showMultiple(popupElements, animationStyle, animationLength, displayLength, minutesToShow) 
{   
	popupElements.forEach(function (item, index)
	{
		if(index == 0)
		{
			showElement($("#" + item), animationStyle, animationLength, displayLength);
		}
		else
		{
			setTimeout(function() { showElement($("#" + item),animationStyle,animationLength,displayLength); }, ((((animationLength * 2) + displayLength) * 1000) + 300) * index) ;
		}
	});
}

//This function loops displaying an array of popup objects.
function loopMultiple(popupElements, animationStyle, animationLength, displayLength, minutesToShow, showAtTopOfMinute) 
{
   	var show = false;
	var now = new Date();
    var nowMinute = now.getMinutes();
	var nowSecond = now.getSeconds();
	var timeOutSeconds = 60;
	
    if(showAtTopOfMinute == true)
	{
		timeOutSeconds = 1;
		
		if( typeof minutesToShow == "string" && minutesToShow.toLowerCase() == "all" && nowSecond == 0)
		{
			show = true;
		}
		else if(minutesToShow.indexOf(nowMinute) >= 0 && nowSecond == 0)
		{
			show = true;
		}
	}
	else
	{
		if( typeof minutesToShow == "string" && minutesToShow.toLowerCase() == "all")
		{
			show = true;
		}
		else if(minutesToShow.indexOf(nowMinute) >= 0)
		{
			show = true;
		}
	}
	
	if(show == true)
	{
		popupElements.forEach(function (item, index)
		{
			if(index == 0)
			{
				showElement($("#" + item), animationStyle, animationLength, displayLength);
			}
			else
			{
				setTimeout(function() { showElement($("#" + item),animationStyle,animationLength,displayLength); }, ((((animationLength * 2) + displayLength) * 1000) + 300) * index) ;
			}
		});
	}
    
    setTimeout(function() {loopMultiple(popupElements, animationStyle, animationLength, displayLength, minutesToShow, showAtTopOfMinute); }, (timeOutSeconds * 1000));
}