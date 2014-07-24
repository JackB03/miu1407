
var rosters = {
	"players": {
		"theInformation": [
			{
				"name": "Landon Ammerman",
				"weight": "52 lbs",
				"height": "4'7",
				"age": "8",
				"country": 'USA',
				"position": "First Base",
				"throwing": "Left",
				"hitting": "Left",
				"battingavg": '.720',
				"errors": "1",
				"tob": "15.9s",
				"strengths": "Can catch better than most people his age. He is able to scoop balls off the ground and has a high baseball IQ.",
				"weakness": "Batting has been sluggish. A lot of infield grounders instead of line drives to the outfield.",
				"image": "Landon.jpg" 
			},
			{
				"name": "Peyton Bonner",
				"weight": "52 lbs",
				"height": "4'7",
				"age": "8",
				"country": 'USA',
				"position": "First Base",
				"throwing": "Left",
				"hitting": "Left",
				"battingavg": '.720',
				"errors": "1",
				"tob": "15.9s",
				"strengths": "Can catch better than most people his age. He is able to scoop balls off the ground and has a high baseball IQ.",
				"weakness": "Batting has been sluggish. A lot of infield grounders instead of line drives to the outfield.",
				"image": "cather7u.jpg"
			},
			{
				"name": "Conner Helms",
				"weight": "52 lbs",
				"height": "4'7",
				"age": "8",
				"country": 'USA',
				"position": "First Base",
				"throwing": "Left",
				"hitting": "Left",
				"battingavg": '.720',
				"errors": "1",
				"tob": "15.9s",
				"strengths": "Can catch better than most people his age. He is able to scoop balls off the ground and has a high baseball IQ.",
				"weakness": "Batting has been sluggish. A lot of infield grounders instead of line drives to the outfield.",
				"image": "Chelms.jpg"
			},
			{
				"name": "Peyton Muma",
				"weight": "52 lbs",
				"height": "4'7",
				"age": "8",
				"country": 'USA',
				"position": "First Base",
				"throwing": "Left",
				"hitting": "Left",
				"battingavg": '.720',
				"errors": "1",
				"tob": "15.9s",
				"strengths": "Can catch better than most people his age. He is able to scoop balls off the ground and has a high baseball IQ.",
				"weakness": "Batting has been sluggish. A lot of infield grounders instead of line drives to the outfield.",
				"image": "Pmuma.jpg"
			},
			{
				"name": "Riley Ward",
				"weight": "52 lbs",
				"height": "4'7",
				"age": "8",
				"country": 'USA',
				"position": "First Base",
				"throwing": "Left",
				"hitting": "Left",
				"battingavg": '.720',
				"errors": "1",
				"tob": "15.9s",
				"strengths": "Can catch better than most people his age. He is able to scoop balls off the ground and has a high baseball IQ.",
				"weakness": "Batting has been sluggish. A lot of infield grounders instead of line drives to the outfield.",
				"image": "Rward.jpg"
			},
			
		]		
	}
};	


var currentWindow = Ti.UI.currentWindow;

var rosterTitle = Titanium.UI.createLabel({
			 backgroundColor:'purple',
			 height:50,
			 top: 0,
			 width:'100%',
			 borderWidth: 1
});

var rosterTitle2 = Titanium.UI.createLabel({
			text:'Roster',
			textAlign:'center',
			color:'#000',
			top:25
});


rosterTitle.add(rosterTitle2);


 
var dataBorder = Ti.UI.createView({
	backgroundColor: '#fff',
	height: 0,
	top: rosterTitle.height + rosterTitle.top + 0
});
		
var myInformation = Ti.UI.createTableView({
	top: dataBorder.height + dataBorder.top,
	backgroundColor: "#000"
});


myInformation.style = Ti.UI.iPhone.TableViewStyle.GROUPED;


var infoSection = Ti.UI.createTableViewSection({
	headerTitle: "Top Players"
});



var getDetail = function(dataSource){
	var detailWindow = Ti.UI.createWindow({
		backgroundColor: "#1C1C1C",
			title: dataSource.title,
			barColor: 'purple',
			titleAttributes:  {
		        color:'#fff',
		        font: {fontFamily:'Times', fontSize:23},
		        shadow:{color:'#000', offset:{width:1,height:1}}
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
	
		
		var theWeight = Ti.UI.createLabel({
			text:'Weight: ' + dataSource.desc,
			color: "#BDBDBD",
			font: {fontFamily: "helvetica", fontSize: 12, fontStyle: 'italic'},
			top: 30,
			textAlign: 'left',
			left: 15
			
		});
		
		var theHeight = Ti.UI.createLabel({
			text: 'Height: ' + dataSource.tall,
			color: "#BDBDBD",
			font: {fontFamily: "helvetica", fontSize: 12, fontStyle: 'italic'},
			top: 45,
			textAlign: 'left',
			left: 15
			
		});
		
		var theAge = Ti.UI.createLabel({
			text: 'Age: ' + dataSource.dob,
			color: "#BDBDBD",
			font: {fontFamily: "helvetica", fontSize: 12, fontStyle: 'italic'},
			top: 60,
			textAlign: 'left',
			left: 15
			
		});
		
		var theCountry = Ti.UI.createLabel({
			text: 'Country: ' + dataSource.nation,
			color: "#BDBDBD",
			font: {fontFamily: "helvetica", fontSize: 12, fontStyle: 'italic'},
			top: 75,
			textAlign: 'left',
			left: 15
			
		});
		
		var thePosition = Ti.UI.createLabel({
			text: 'Position: ' + dataSource.pos,
			color: "#BDBDBD",
			font: {fontFamily: "helvetica", fontSize: 12, fontStyle: 'italic'},
			top: 90,
			textAlign: 'left',
			left: 15
			
		});
		
		var throwing = Ti.UI.createLabel({
			text: 'Throwing: ' + dataSource.thro,
			color: "#BDBDBD",
			font: {fontFamily: "helvetica", fontSize: 12, fontStyle: 'italic'},
			top: 105,
			textAlign: 'left',
			left: 15
			
		});
		
		var hitting = Ti.UI.createLabel({
			text: 'Hitting: ' + dataSource.hit,
			color: "#BDBDBD",
			font: {fontFamily: "helvetica", fontSize: 12, fontStyle: 'italic'},
			top: 120,
			textAlign: 'left',
			left: 15
			
		});
		
		var thebatAvg = Ti.UI.createLabel({
			text: 'Bat Avg.: ' + dataSource.bavg,
			color: "#BDBDBD",
			font: {fontFamily: "helvetica", fontSize: 12, fontStyle: 'italic'},
			top: 135,
			textAlign: 'left',
			left: 15
			
		});
		
		var theErrors = Ti.UI.createLabel({
			text: 'Errors: ' + dataSource.er,
			color: "#BDBDBD",
			font: {fontFamily: "helvetica", fontSize: 12, fontStyle: 'italic'},
			top: 150,
			textAlign: 'left',
			left: 15
			
		});
		
		var theTOB = Ti.UI.createLabel({
			text: 'Time Around Bases: ' + dataSource.time,
			color: "#BDBDBD",
			font: {fontFamily: "helvetica", fontSize: 12, fontStyle: 'italic'},
			top: 165,
			textAlign: 'left',
			left: 15
			
		});
		
		var theStrengths = Ti.UI.createLabel({
			text: 'Strengths: ' + dataSource.str,
			color: "#BDBDBD",
			font: {fontFamily: "helvetica", fontSize: 12, fontStyle: 'italic'},
			top: theTOB.top + 45,
			textAlign: 'left',
			left: 15
			
		});
		
		var theWeakness = Ti.UI.createLabel({
			text: 'Weakness: ' + dataSource.weak,
			color: "#BDBDBD",
			font: {fontFamily: "helvetica", fontSize: 12, fontStyle: 'italic'},
			top: theStrengths.top + 65,
			textAlign: 'left',
			left: 15
			
		});
		
		var playerImages = Ti.UI.createImageView({
 			image: dataSource.img,
 			top: 30,
 			left: 165,
 			height: 150,
 			width: 150
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
	
	
	detailWindow.add(detailBorder, theWeight, theHeight, theAge, theCountry, thePosition, throwing, hitting, thebatAvg, theErrors, theTOB, theStrengths, theWeakness, playerImages, backButton);
	nav2.open();
		
};


for(var i=0, j=rosters.players.theInformation.length; i<j; i++){
	var theRow = Ti.UI.createTableViewRow({
		title: rosters.players.theInformation[i].name,
		desc: rosters.players.theInformation[i].weight,
		tall: rosters.players.theInformation[i].height,
		dob: rosters.players.theInformation[i].age,
		nation: rosters.players.theInformation[i].country,
		pos: rosters.players.theInformation[i].position,
		thro: rosters.players.theInformation[i].throwing,
		hit: rosters.players.theInformation[i].hitting,
		bavg: rosters.players.theInformation[i].battingavg,
		er: rosters.players.theInformation[i].errors,
		time: rosters.players.theInformation[i].tob,
		str: rosters.players.theInformation[i].strengths,
		weak: rosters.players.theInformation[i].weakness,
		img: rosters.players.theInformation[i].image,
		hasChild: true,
		backgroundColor: '#585858',
		color: '#fff'
	});
	
	infoSection.add(theRow);
	
	
}

var myInfoSection = [infoSection];

myInformation.setData(myInfoSection);

myInformation.addEventListener("click", function(event){
	getDetail(event.source);
	// console.log(event.source.title);
});

var therosterIcon = Titanium.UI.createLabel({
	color:"#fff",
	backgroundColor:"purple",
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

therosterIcon.addEventListener("click", openRoster);
thehomeIcon.addEventListener("click", openHome);
thesignupIcon.addEventListener("click", opensignUp);



currentWindow.add(rosterTitle, dataBorder, myInformation, therosterIcon, thehomeIcon, thesignupIcon);




