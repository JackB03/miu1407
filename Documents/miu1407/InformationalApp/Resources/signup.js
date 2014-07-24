var currentWindow = Ti.UI.currentWindow;

var signupTitle = Titanium.UI.createLabel({
			 backgroundColor:'yellow',
			 height:50,
			 top: 0,
			 width:'100%',
			 borderWidth: 1
});

var signupTitle2 = Titanium.UI.createLabel({
			text:'Sign Up',
			textAlign:'center',
			color:'#000',
			top:25
});


signupTitle.add(signupTitle2);


var heading = Titanium.UI.createLabel({
			text:'Thank You For Signing Up!',
			textAlign:'center',
			color:'purple',
			top:85,
			font: {fontSize:18, fontWeight:'bold'}
});


var nameArea = Ti.UI.createTextArea({
  borderWidth: 2,
  borderColor: '#bbb',
  borderRadius: 5,
  color: '#000',
  font: {fontSize:14, fontWeight:'bold'},
  keyboardType: Ti.UI.KEYBOARD_NUMBER_PAD,
  returnKeyType: Ti.UI.RETURNKEY_GO,
  textAlign: 'left',
  value: 'Name',
  top: 150,
  left: 0,
  width: '100%', 
  height : 40
});

var emailArea = Ti.UI.createTextArea({
  borderWidth: 2,
  borderColor: '#bbb',
  borderRadius: 5,
  color: '#000',
  font: {fontSize:14, fontWeight:'bold'},
  keyboardType: Ti.UI.KEYBOARD_NUMBER_PAD,
  returnKeyType: Ti.UI.RETURNKEY_GO,
  textAlign: 'left',
  value: 'Email',
  top: nameArea.top + nameArea.height + 0,
  left: 0,
  width: '100%', 
  height : 40
});


var therosterIcon = Titanium.UI.createLabel({
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

var thehomeIcon = Titanium.UI.createLabel({
	color:"purple",
	backgroundColor:"#fff",
	text:'Home',
	textAlign:'center',
	bottom:0,
	left:107,
	height:50,
	width:107,
	borderWidth:1,
	borderColor:'#000'
	
});

var thesignupIcon = Titanium.UI.createLabel({
	color:"#fff",
	backgroundColor:"purple",
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

var openHome = function(){
	var homeWindow = Ti.UI.createWindow({
			backgroundColor: 'A4A4A4',
			statusBarStyle: Titanium.UI.iPhone.StatusBar.DARK_CONTENT,
			 url: "app.js"
		
		});
	
	homeWindow.open(); //It's not letting me return back to the Home Page. Not sure why?
};

var opensignUp = function(){
	var signupWindow = Ti.UI.createWindow({
			backgroundColor: 'A4A4A4',
			statusBarStyle: Titanium.UI.iPhone.StatusBar.DARK_CONTENT,
			 url: "signup.js"
	});
	
	signupWindow.open();
	
};

therosterIcon.addEventListener("click", openRoster);
thehomeIcon.addEventListener("click", openHome);
thesignupIcon.addEventListener("click", opensignUp);


currentWindow.add(signupTitle, heading, nameArea, emailArea, therosterIcon, thehomeIcon, thesignupIcon);