jQuery(document).ready(function($) {
	//var url = window.location.href + "/json/";
	//console.log(url);
	var url = "http://mpatlas.org/mpa/sites/8338/json/"
	getNomStatus(url);
	
});

function getNomStatus(url){

 		var queryURL = url;

 			$.ajax({
 				url: queryURL, 
 				method: 'GET',
 				headers:{'Content-Type':'application/x-www-form-urlencoded'}
 			}).done(function(response){

 				console.log(response)

 				gotNomStatus(response);
 			});


 	}

function gotNomStatus(response){
 		//this.status = response.is_point;
 		//this.status = response.country;
 		this.status = response.fishing;
 		console.log(status)
 		if (status === "No"){
 			displaySurvey(response);
 			console.log("display survey");
 		}
 		else if (status === "USA"){
 			displayComplete(response);
 			console.log("complete")
 		}
 		else{
 			displayComment(response);
 			console.log("display comment");
 		}
 	}



function displaySurvey(response){
 		var navP = $("<p>")
 			navP.text("This site has not been nominated yet.")
 		 	$("#statusDiv").prepend(navP)
 		 	var id = response.mpa_id;

 		 	getSiteInfo(id);
 	}

function displayComment(response){
	var navP = $("<p>")
 			navP.text("This site has already been nominated.")
 		 	$('#statusDiv').prepend(navP)
 		 	var id = response.mpa_id;

 		 	getCommentInfo(id);
 	}

 function displayComplete(response){
 	var navP = $("<p>")
 		navP.text("The site nomination process is complete.")
 		$('#statusDiv').prepend(navP)
 }

function getSiteInfo(id){
 		console.log(id);
 		var queryURL = "http://mpatlas.org/mpa/sites/" + id + "/json/";

 			$.ajax({
 				url: queryURL, 
 				method: 'GET', 
 				headers:{'Content-Type':'application/x-www-form-urlencoded'}
 			}).done(function(response){gotSiteInfo(response);});
 	}

function gotSiteInfo(response){
	var name = response.name;
	// 	//var onbn = 
	var cy = response.country
	var id = response.mpa_id;
	// 	//var bdv =
	var yr = response.status_year
	var surveyURL = "http://www.surveygizmo.com/s3/2829308/Global-Ocean-Refuge-System-provisional-nomination?name=" + name +"&cy=" + cy + "&id=" + id + "&yr=" + yr + "/"
	console.log(surveyURL)
	var navLink = $("<a>");
 	navLink.text("Nominate this Site");
 	navLink.attr('href', surveyURL);
 	$('#statusDiv').append(navLink)
 }

 function getCommentInfo(id){
 		console.log(id)
 		var queryURL = "http://mpatlas.org/mpa/sites/" + id + "/json/";

 			$.ajax({
 				url: queryURL, 
 				method: 'GET', 
 				headers:{'Content-Type':'application/x-www-form-urlencoded'}
 			}).done(function(response){gotCommentInfo(response);});
 	}

function gotCommentInfo(response){
	var name = response.name;
	var id = response.mpa_id;
	var surveyURL = "http://www.surveygizmo.com/s3/3421706/GLORES-Evaluation-Report-Comment?name=" + name + "&id=" + id
	console.log(surveyURL);
	var navLink = $("<a>");
 	navLink.text("Add a Comment");
 	navLink.attr('href', surveyURL);
 	$('#statusDiv').append(navLink)
 }