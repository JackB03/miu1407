// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');


var mainWindow = Ti.UI.createWindow({
	backgroundColor: "#1C1C1C",
	barColor: '#1C1C1C',
	title: "ABOUT ME APP",
	titleAttributes:  {
        color:'#0404B4',
        font: {fontFamily:'Roboto', fontSize:24},
        shadow:{color:'#fff', offset:{width:1,height:1}}
   },
	borderWidth: 1,
	statusBarStyle: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT
});

var nav = Titanium.UI.iOS.createNavigationWindow({
	window: mainWindow,
});


var winBorder = Ti.UI.createView({
	backgroundColor: '#fff',
	height: 1,
	top: mainWindow.borderWidth + 0
});

var mainIntro1 = Ti.UI.createLabel({
	text: 'Jack Bonner',
	backgroundColor: "#0B0B61",
	top: winBorder.height + winBorder.top + 105,
	left: 0,
	height: 125,
	width: '100%',
	borderWidth: 1,
	borderColor: '#BDBDBD',
	textAlign: 'center',
	color: '#fff'
});

var mainIntro2 = Ti.UI.createLabel({
	text: 'MIU 1407',
	backgroundColor:'#0B0B61',
	width:'100%',
	borderWidth: 1,
	borderColor: '#BDBDBD',
    height: 125,
	top: mainIntro1.height + mainIntro1.top + 0,
	left: 0,
	textAlign: 'center',
	color: '#fff'
});

var questions = Ti.UI.createLabel({
	text: 'Click Here For Questions',
	backgroundColor:'#fff',
	width:'100%',
    height: 50,
	bottom: 0,
	left: 0,
	width: '100%',
	textAlign: 'center',
	color: '#000'
});

var openWindow = function(){
	var newWindow = Ti.UI.createWindow({
			backgroundColor: "#000",
			title: 'Questions',
			barColor: '#1C1C1C',
			titleAttributes:  {
		        color:'#0404B4',
		        font: {fontFamily:'Times Roman', fontSize:28},
		        shadow:{color:'#fff', offset:{width:1,height:1}}
		   },
			borderWidth: 1,
			statusBarStyle: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT,
			url: "json.js"
	});
	nav.openWindow(newWindow);
};

questions.addEventListener("click", openWindow);

mainWindow.add(winBorder, mainIntro1, mainIntro2, questions);


nav.open();
