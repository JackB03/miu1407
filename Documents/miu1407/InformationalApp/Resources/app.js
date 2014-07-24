// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');



var win1 = Titanium.UI.createWindow({  
    backgroundColor:'#A4A4A4',
    statusBarStyle: Titanium.UI.iPhone.StatusBar.DARK_CONTENT
});


var title = Titanium.UI.createLabel({
	backgroundColor:'yellow',
	height:50,
	top: 0,
	width:'100%',
	borderWidth: 1
});

var title2 = Titanium.UI.createLabel({
	text:'Home',
	textAlign:'center',
	color:'#000',
	top:25
});


title.add(title2);


var image = Ti.UI.createImageView({
  image:'WS2014.jpeg',
  top:70,
  width:'75%'
});

var mainText = Titanium.UI.createLabel({
	text:'Welcome To The Home Of The 7U World Series Champions',
	textAlign:'center',
	color:'#000',
	top:image.top + 265,
	width: "75%"
});

var rosterIcon = Titanium.UI.createLabel({
	color:"purple",
	backgroundColor:"#fff",
	text:'Roster',
	textAlign:'center',
	bottom:0,
	left:0,
	height:50,
	width:107,
	borderWidth:1,
	borderColor:'#000'
});

var homeIcon = Titanium.UI.createLabel({
	color:"#fff",
	backgroundColor:"purple",
	text:'Home',
	textAlign:'center',
	bottom:0,
	left:107,
	height:50,
	width:107,
	borderWidth:1,
	borderColor:'#000'
	
});

var signupIcon = Titanium.UI.createLabel({
	color:"purple",
	backgroundColor:"#fff",
	text:'Sign Up',
	textAlign:'center',
	bottom:0,
	left:214,
	height:50,
	width:107,
	borderWidth:1,
	borderColor:'#000'
	
});


var openRoster = function(){
	var rosterWindow = Ti.UI.createWindow({
			 backgroundColor:'#A4A4A4',
    	     statusBarStyle: Titanium.UI.iPhone.StatusBar.DARK_CONTENT,
			 url: "json.js"
	});
	
rosterWindow.open();

};

var opensignUp = function(){
	var signupWindow = Ti.UI.createWindow({
			backgroundColor: 'A4A4A4',
			statusBarStyle: Titanium.UI.iPhone.StatusBar.DARK_CONTENT,
			 url: "signup.js"
	});
	
	signupWindow.open();
	
};

rosterIcon.addEventListener("click", openRoster);
signupIcon.addEventListener("click", opensignUp);




win1.add(title,image, mainText,rosterIcon, homeIcon, signupIcon);



win1.open();
