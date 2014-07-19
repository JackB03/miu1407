

var myData = {
	"personal": {
		"theInformation": [
			{
				"question": "What is your name?",
				"answer": "Jack Bonner"
			},
			{
				"question": "What is your chat user name?",
				"answer": "I use iMessage. The apple ID I use is 'jackb03@fullsail.edu'"
			},
			{
				"question": "What is your time zone?",
				"answer": "Central Standard Time"
			},
			{
				"question": "Why are you in the MDP?",
				"answer": "I used to do web sites for fun, for events, leagues, etc... Apps have probably been my favorite thing since the iPhone appeared in 2007. I decided to turn a hobby into a career."
			},
			{
				"question": "Comfortable with Javascript?",
				"answer": "I'm somewhat comfortable. I try and create apps, in my spare time, to get used to it better and experiment. When I do not code for awhile, I have my apps to look back on to remind myself."
			},
			{
				"question": "Comfortable with Titanium?",
				"answer": "I'm very comfortable with Titanium. I love the software a lot. I have yet to experiment much with Android and the Mobile Web so I am looking forward to that in the future."
			},
			{
				"question": "What is your favorite food?",
				"answer": "I love cooking and experimenting with ingredients, so I don't have a particular favorite. My favorite restaurant is in Dallas, Tx called 'Capitol Grille'. It is a 5-star restaurant and very high class. I always get the fire-raosted cherry calamari then steak with lobster.  "
			},
			{
				"question": "What is your favorite sport?",
				"answer": "Soccer was my life since I was 3 years old. I traveled to play in England, France and Ireland during high school. I was offered a contract but turned in down because I was home sick. I quit playing when I met my wife and had kids. My son plays baseball so now that is my favorite sport."
			},
			{
				"question": "Do you have a family?",
				"answer": "I have a wife of 10 years and 3 children. Paige(9 Years Old), Peyton(7 Years Old), Brooklyn(4 Years Old)."
			},
			{
				"question": "Do you have any pets?",
				"answer": "We have a teacup yorkie named Koda. He will be 2 years old in September. It is my wife's dog but everyone knows he likes me best."
			},
			{
				"question": "What is your favorite TV show?",
				"answer": "Game Of Thrones without a doubt."
			},
			{
				"question": "What kind of work do you do?",
				"answer": "You are looking at it. I go to school full-time. I used to work with my grandfather and dad but back in 2012, my grandfather died in April and my dad died the same year, in July, with Stage 4 cancer. The business was left to me but I closed the doors. It was already in debt and was not my passion. The good thing that came out of it, was me finally figuring out what I wanted to do in life."
			},
		]		
	}
};	

		
var currentWindow = Ti.UI.currentWindow;
 
var dataBorder = Ti.UI.createView({
	backgroundColor: '#fff',
	height: 1,
	top: 1
});
		
var myInformation = Ti.UI.createTableView({
	top: dataBorder.height + dataBorder.top,
	backgroundColor: "#000"
});


myInformation.style = Ti.UI.iPhone.TableViewStyle.GROUPED;


var rosterSection = Ti.UI.createTableViewSection({
	headerTitle: "About Me Questions"
});



var getDetail = function(dataSource){
	var detailWindow = Ti.UI.createWindow({
		backgroundColor: "#2E2E2E",
			title: dataSource.title,
			barColor: '#1C1C1C',
			titleAttributes:  {
		        color:'#fff',
		        font: {fontFamily:'Times', fontSize:23},
		        shadow:{color:'#0404B4', offset:{width:1,height:1}}
		   },
			borderWidth: 1,
			statusBarStyle: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT
	});
	
		var nav2 = Ti.UI.iOS.createNavigationWindow({
			window: detailWindow
		});
		
		var detailBorder = Ti.UI.createView({
			backgroundColor: '#fff',
			height: 1,
			top: 1
	});
	
		
		var playerInfo = Ti.UI.createLabel({
			text: dataSource.desc,
			color: "#fff",
			font: {fontFamily: "helvetica", fontSize: 22, fontStyle: 'italic'},
			shadowColor: 'blue',
			shadowOffset: {x:1, y:1},
			shadowRadius: 2,
			top: detailBorder.top + detailBorder.height + 75,
			textAlign: 'center',
			left: 15,
			right: 15
			
		});
		
		
		
		var backButton = Ti.UI.createLabel({
			text: "Back",
			color: '#000',
			backgroundColor: "#fff",
			height: 50,
			borderRadius: 5,
			borderWidth: 2,
			borderColor: "#000",
			font: {fontFamily: "Times", fontSize: 22},
			width: '100%',
			bottom: 0,
			textAlign: "center"
		});
		
	
	var back = function(){
		nav2.close();
	};
	
	backButton.addEventListener("click", back);
	
	// Couldnt figure out how to make the NAV variable come from the app.js
	detailWindow.add(detailBorder, playerInfo, backButton);
	nav2.open();
		
};


for(var i=0, j=myData.personal.theInformation.length; i<j; i++){
	var theRow = Ti.UI.createTableViewRow({
		title: myData.personal.theInformation[i].question,
		desc: myData.personal.theInformation[i].answer,
		hasChild: true,
		backgroundColor: '#585858',
		color: '#fff'
	});
	
	rosterSection.add(theRow);
	
	
}

var playerSection = [rosterSection];

myInformation.setData(playerSection);

myInformation.addEventListener("click", function(event){
	getDetail(event.source);
	// console.log(event.source.title);
});


currentWindow.add(dataBorder, myInformation);




