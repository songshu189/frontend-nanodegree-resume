/*
This is empty on purpose! Your code to build the resume will go here.
 */
var name = "Sonny Yue";
var role = "Web developer";



var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var contactInfo = {
	"mobile" : [HTMLmobile,"(123)456-0789"],
	"email" : [HTMLemail, "sonny.yue@gmail.com"],
	"twitter" : [HTMLtwitter, ""],
	"github"  : [HTMLgithub, "https://github.com/sonny189"],
	"blog"  : [HTMLblog, ""],
	"location" : [HTMLlocation, "Burlington, MA"]
};

var substitute = function(html, str) {
    return html.replace("%data%", str);
}

for (var key in contactInfo) {
	var val = contactInfo[key];
	if(val[1]) {
		$("#topContacts").append(substitute(val[0], val[1]));
	}
}

var skills = ["javascript", "java", "c++", "python", "php"];

var bio = {
	"name" : name,
	"role" : role,
	"contacts" : contactInfo,
	"pictureURL" : "images/my-photo.jpg",
	"welcoemMsg" : "welcome you",
	"skills" : skills
};

$("#header").append(substitute(HTMLbioPic, bio.pictureURL));
$("#header").append(substitute(HTMLwelcomeMsg, bio.welcoemMsg));

if(bio.skills) {
	$("#header").append(HTMLskillsStart);

	for(var i=0; i<skills.length; i++) {
		$("#skills").append(substitute(HTMLskills, bio.skills[i]));
	}
}

var work = {
	"jobs": [{
		"employer": "GE",
		"title": "Software Engineer",
		"location": "Burlington, MA",
		"dates": "2009-2012",
		"description": "Developing algorithm programs"
	},{
		"employer": "IBM",
		"title": "Software Engineer",
		"location": "Essex, MN",
		"dates": "2008-2009",
		"description": "Writing C++ codes"
	}]
};

var displayWork = function(work) {
	for(var job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = substitute(HTMLworkEmployer, work.jobs[job].employer);
		var formattedTitle = substitute(HTMLworkTitle, work.jobs[job].title);
		var formattedDates = substitute(HTMLworkDates, work.jobs[job].dates);
		var formattedLocation = substitute(HTMLworkLocation, work.jobs[job].location);
		var formattedDescription = substitute(HTMLworkDescription, work.jobs[job].description);
		$(".work-entry:last").append(formattedEmployer + formattedTitle + formattedDates + formattedLocation + formattedDescription);
	}
};

displayWork(work);

$(document).click(function(loc) {
	console.log(loc.pageX + "  " + loc.pageY);
});

var locaionizer = function(work_obj) {
	result = [];
	set = {};
	for(var job in work_obj.jobs) {
		var loc = work_obj.jobs[job].location;
		if( !set[loc] ) {
			result.push(loc);
			set[loc] = true;
		}
	}

	return result;
};

var inName = function() {
	var names = name.trim(" ").split(" ");
	names[0] = names[0].toLowerCase();
	names[0] = names[0][0].toUpperCase() + names[0].slice(1);
	names[1] = names[1].toUpperCase();
	return names.join(" ");
};

$("#main").append(internationalizeButton);

var projects = {
	"projects": [{
		"title": "appify",
		"dates": "2008-2009",
		"description": "This is description of appify",
		"images":"images/appify.jpg"
	},{
		"title": "sunflower",
		"dates": "2010-2012",
		"description": "This is description of sunflower",
		"images":"images/sunflower.jpg"
	}, {
		"title": "bokeh",
		"dates": "2012-13",
		"description": "This is description of bokeh",
		"images":"images/bokeh.jpg"
	}]
};

projects.display = function() {
	for(var idx in this.projects) {
		var project = this.projects[idx];

		$("#projects").append(HTMLprojectStart);
		var formattedTitle = substitute(HTMLprojectTitle, project.title);
		var formattedDates = substitute(HTMLprojectDates, project.dates);
		var formattedDescription = substitute(HTMLprojectDescription, project.description);
		var formattedImage = substitute(HTMLprojectImage, project.images);
		$(".project-entry:last").append( formattedTitle + formattedDates + formattedDescription + formattedImage);
	}
};

projects.display();
