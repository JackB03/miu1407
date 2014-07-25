var currentWindow = Ti.UI.currentWindow;

var signupTitle = Titanium.UI.createLabel({
			 backgroundColor:'purple',
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
  keyboardType: Titanium.UI.KEYBOARD_NUMBERS_PUNCTUATION,
  returnKeyType: Ti.UI.RETURNKEY_DONE,
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
  keyboardType: Titanium.UI.KEYBOARD_NUMBERS_PUNCTUATION,
  returnKeyType: Ti.UI.RETURNKEY_DONE,
  textAlign: 'left',
  value: 'Email',
  top: nameArea.top + nameArea.height + 0,
  left: 0,
  width: '100%', 
  height : 40
});

var passwordArea = Ti.UI.createTextArea({
  borderWidth: 2,
  borderColor: '#bbb',
  borderRadius: 5,
  color: '#000',
  font: {fontSize:14, fontWeight:'bold'},
  keyboardType:Titanium.UI.KEYBOARD_NUMBERS_PUNCTUATION,
  returnKeyType: Ti.UI.RETURNKEY_DONE,
  textAlign: 'left',
  value: 'Password',
  top: emailArea.top + emailArea.height + 0,
  left: 0,
  width: '100%', 
  height : 40
});

var confirmArea = Ti.UI.createTextArea({
  borderWidth: 2,
  borderColor: '#bbb',
  borderRadius: 5,
  color: '#000',
  font: {fontSize:14, fontWeight:'bold'},
  keyboardType:Titanium.UI.KEYBOARD_NUMBERS_PUNCTUATION,
  returnKeyType: Ti.UI.RETURNKEY_DONE,
  textAlign: 'left',
  value: 'Confirm',
  top: passwordArea.top + passwordArea.height + 0,
  left: 0,
  width: '100%', 
  height : 40
});

var signupButton = Titanium.UI.createLabel({
	color:"purple",
	backgroundColor:"#000",
	text:'Submit',
	textAlign:'center',
	top:350,
	height:45,
	width:150,
	borderWidth:1,
	borderColor:'#fff'
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

var thankYou = function(){
	var thankyouWindow = Ti.UI.createWindow({
			backgroundColor:'#A4A4A4',
			statusBarStyle: Titanium.UI.iPhone.StatusBar.DARK_CONTENT,
	});
	
	var thankyouText = Ti.UI.createLabel({
		text:"Thank You For Signing Up. A Confirmation email will be sent shortly.",
		textAlign:'center',
		color:'#fff',
		backgroundColor:"purple",
		height:250,
		width: 250,
		top: 65,
		borderWidth: 1,
		borderColor:'#000'
	});
	
	var okButton = Ti.UI.createLabel({
		text:"OK",
		color:"purple",
		textAlign:"center",
		backgroundColor:"#fff",
		height:55,
		width:75,
		top:thankyouText.top + thankyouText.height + 25,
		borderWidth: 1,
		borderColor:'#000'
	});
	
	thankyouWindow.add(thankyouText, okButton);
	
	var opensignUp = function(){
	var signupWindow = Ti.UI.createWindow({
			backgroundColor: 'A4A4A4',
			statusBarStyle: Titanium.UI.iPhone.StatusBar.DARK_CONTENT,
			 url: "signup.js"
	});
	
	signupWindow.open();
	
};

okButton.addEventListener("click", opensignUp);
	
	
	thankyouWindow.open();
};


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
			 url: "app.js"
		
		});
	
	homeWindow.open();  //It's not letting me do anything once I get to the Home Page. Not sure why?
};

var opensignUp = function(){
	var signupWindow = Ti.UI.createWindow({
			backgroundColor: 'A4A4A4',
			statusBarStyle: Titanium.UI.iPhone.StatusBar.DARK_CONTENT,
			 url: "signup.js"
	});
	
	signupWindow.open();
	
};


signupButton.addEventListener("click", thankYou);
therosterIcon.addEventListener("click", openRoster);
thehomeIcon.addEventListener("click", openHome);
thesignupIcon.addEventListener("click", opensignUp);


currentWindow.add(signupTitle, heading, nameArea, emailArea, passwordArea, confirmArea, signupButton, therosterIcon, thehomeIcon, thesignupIcon);