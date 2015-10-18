/*
This is empty on purpose! Your code to build the resume will go here.
 */
var name = "Sonny Yue";
var role = "Web developer";

var contactInfo = {
	"mobile" :
	    "(123)456-0789",
	"email" :
	    "sonny.yue@gmail.com",
	"github"  :
	    "https://github.com/sonny189",
	"twitter" :
	    "",
	"location" :
	    "Burlington, MA"
};

var substitute = function(html, str) {
    return html.replace("%data%", str);
}

var skills = ["javascript", "java", "c++", "python", "php"];

var bio = {
	"name" : name,
	"role" : role,
	"contacts" : contactInfo,
	"welcomeMessage" :
	 	"welcome you",
	"skills" : skills,
	"biopic" :
		"images/my-photo.jpg",
};

bio.display = function() {
	$("#header").prepend(substitute(HTMLheaderRole, this.role));
	$("#header").prepend(substitute(HTMLheaderName, this.name));

	$("#topContacts").append(substitute(HTMLmobile, this.contacts.mobile));
	$("#topContacts").append(substitute(HTMLemail, this.contacts.email));
	$("#topContacts").append(substitute(HTMLgithub, this.contacts.github));
	$("#topContacts").append(substitute(HTMLtwitter, this.contacts.twitter));
	$("#topContacts").append(substitute(HTMLlocation, this.contacts.location));

	$("#header").append(substitute(HTMLbioPic, this.biopic));
	$("#header").append(substitute(HTMLwelcomeMsg, this.welcomeMessage));

	if(this.skills) {
		$("#header").append(HTMLskillsStart);

		for(var i=0; i<this.skills.length; i++) {
			$("#skills").append(substitute(HTMLskills, this.skills[i]));
		}
	}

};

bio.display();

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

work.display = function() {
	for(var job in this.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = substitute(HTMLworkEmployer, work.jobs[job].employer);
		var formattedTitle = substitute(HTMLworkTitle, work.jobs[job].title);
		var formattedDates = substitute(HTMLworkDates, work.jobs[job].dates);
		var formattedLocation = substitute(HTMLworkLocation, work.jobs[job].location);
		var formattedDescription = substitute(HTMLworkDescription, work.jobs[job].description);
		$(".work-entry:last").append(formattedEmployer + formattedTitle + formattedDates + formattedLocation + formattedDescription);
	}
};

work.display();

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

var education = {
	"schools": [
	  {
		"name": "University of Boston",
		"location": "Boston, MA",
		"degree": "Bachelor",
		"majors": ["Computer Engineering"],
		"dates": "2006-2010",
		"url": "http://www.bu.edu"
	  },{
	  	"name": "New York Univeristy",
		"location": "New York, NY",
		"degree": "Master",
		"majors": ["Software Engineering"],
		"dates": "2010-2012",
		"url": "http://www.nyu.edu"
	  }],
	"onlineCourses": [
	  {
		"title": "Web Design",
		"school": "Udacity",
		"date": "2013",
		"url": "https://www.udacity.com"
	  },{
		"title": "Statistics",
		"school": "UMA",
		"date": "2013",
		"url": "https://www.uma.edu"
	  }
	]
};

education.display = function() {
    for(var idx in this.schools) {
    	var school = this.schools[idx];

    	$("#education").append(HTMLschoolStart);

		$(".education-entry:last").append(
			  substitute(HTMLschoolName, school.name)
			+ substitute(HTMLschoolDegree, school.degree)
			+ substitute(HTMLschoolDates, school.dates)
			+ substitute(HTMLschoolLocation, school.location)
			);

		$(".education-entry:last a").attr("href", school.url);

		for(var major in school.majors) {
			$(".education-entry:last").append(
				substitute(HTMLschoolMajor, school.majors[major])
				);
		}
    }

    if (this.onlineCourses) {
    	$("#education").append(HTMLonlineClasses);
    }

    for(var idx in this.onlineCourses) {
    	var course = this.onlineCourses[idx];

		$("#education").append(HTMLschoolStart);

		$(".education-entry:last").append(
			  substitute(HTMLonlineTitle, course.title)
			+ substitute(HTMLonlineSchool, course.school)
			+ substitute(HTMLonlineDates, course.date)
			+ substitute(HTMLonlineURL, course.url)
			);
    }
};

education.display();

$("#mapDiv").append(googleMap);
