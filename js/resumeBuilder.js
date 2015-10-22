/*
This is empty on purpose! Your code to build the resume will go here.
 */

var substitute = function(html, str) {
    return html.replace('%data%', str);
}

var bio = {
	'name' : 'Sonny Yue',
	'role' : 'Web developer',
	'contacts' : {
		'mobile' : '(123)456-0789',
		'email' : 'sonny.yue@gmail.com',
		'github' : 'https://github.com/sonny189',
		'twitter' : 'https://twitter.com/mytwitter',
		'location' : 'Burlington, VT'
		},
	'welcomeMessage' : 'Thank you very much for reviewing my resume',
	'skills' : ['HTML', 'CSS', 'Javascript', 'JQuery', 'PHP'],
	'biopic' : 'images/fry.jpg',
};

bio.display = function() {
	$('.navbar-brand').append(this.name);
	$('#header').prepend(substitute(HTMLheaderRole, this.role));
	$('#header').prepend(substitute(HTMLheaderName, this.name));

	$('#topContacts').append(substitute(HTMLmobile, this.contacts.mobile));
	$('#topContacts').append(substitute(HTMLemail, this.contacts.email));
	$('#topContacts').append(substitute(HTMLgithub, this.contacts.github));
	$('#topContacts').append(substitute(HTMLtwitter, this.contacts.twitter));
	$('#topContacts').append(substitute(HTMLlocation, this.contacts.location));

	$('#header').append(substitute(HTMLbioPic, this.biopic));
	$('#header').append(substitute(HTMLwelcomeMsg, this.welcomeMessage));

	if(this.skills.length>0) {
		$('#header').append(HTMLskillsStart);
		$('#skills').addClass('skill-column');

		for(var i=0, len=this.skills.length; i<len; i++) {
			$('#skills').append(substitute(HTMLskills, this.skills[i]));
		}
	}
};

bio.display();

var work = {
	'jobs': [{
		'employer': 'ABC Company',
		'title': 'Software Engineer',
		'location': 'Burlington, VT',
		'dates': '2012-2015',
		'description': 'Software developing, documents and demonstrates solutions by developing documentation, flowcharts, layouts, diagrams, charts, code comments and clear code.'
	},{
		'employer': 'Apex Software',
		'title': 'IT Consultant',
		'location': 'Rochester, NY',
		'dates': '2010-2012',
		'description': 'Advise, plan, design and install information technology systems for their clients.'
	}]
};

work.display = function() {
	for(var i=0, len=this.jobs.length; i<len; i++) {
		var job = this.jobs[i];
		$('#workExperience').append(HTMLworkStart);
		var formattedEmployer = substitute(HTMLworkEmployer, job.employer);
		var formattedTitle = substitute(HTMLworkTitle, job.title);
		var formattedDates = substitute(HTMLworkDates, job.dates);
		var formattedLocation = substitute(HTMLworkLocation, job.location);
		var formattedDescription = substitute(HTMLworkDescription, job.description);
		$('.work-entry:last').append(formattedEmployer + formattedTitle + formattedDates + formattedLocation + formattedDescription);
	}
};

work.display();

var projects = {
	'projects': [{
		'title': 'appify',
		'dates': '2010-2013',
		'description': "This is app store description, which makes buy app more quick, easy and more cheap. It's not real, just for the online resume homework.",
		'images':['images/appify.jpg', 'images/app-store.jpg']
	},{
		'title': 'flowers',
		'dates': '2013-2015',
		'description': 'This is a convenient flowers app, not real neither, just for online resume homework',
		'images':['images/flowers1.jpg', 'images/flowers2.jpg']
	}]
};

projects.display = function() {
	for(var i=0, len=this.projects.length; i<len; i++) {
		var project = this.projects[i];

		$('#projects').append(HTMLprojectStart);
		var formattedTitle = substitute(HTMLprojectTitle, project.title);
		var formattedDates = substitute(HTMLprojectDates, project.dates);
		var formattedDescription = substitute(HTMLprojectDescription, project.description);
		var formattedImage = project.images.map(function(img) {
			return substitute(HTMLprojectImage, img);
		}).join('');

		$('.project-entry:last').append( formattedTitle + formattedDates + formattedDescription + formattedImage);
	}
};

projects.display();

var education = {
	'schools': [{
		'name': 'UMASS Boston',
		'location': 'Boston, MA',
		'degree': 'BA',
		'majors': ['Computer Science', 'Physics'],
		'dates': 2008,
		'url': 'http://www.umb.edu'
	  },{
	  	'name': 'New York Univeristy',
		'location': 'New York, NY',
		'degree': 'Master',
		'majors': ['Applied Physics'],
		'dates': 2010,
		'url': 'http://www.nyu.edu'
	  }],
	'onlineCourses': [{
		'title': 'Web Design',
		'school': 'Udacity',
		'date': 2013,
		'url': 'https://www.udacity.com'
	  },{
		'title': 'Statistics',
		'school': 'UMA',
		'date': 2013,
		'url': 'https://www.uma.edu'
	  }
	]
};

education.display = function() {
    for(var i=0, len= this.schools.length; i<len; i++) {
    	var school = this.schools[i];

    	$('#education').append(HTMLschoolStart);

		$('.education-entry:last').append(
			  substitute(HTMLschoolName, school.name)
			+ substitute(HTMLschoolDegree, school.degree)
			+ substitute(HTMLschoolDates, school.dates)
			+ substitute(HTMLschoolLocation, school.location)
			);

		$('.education-entry:last a').attr('href', school.url);

		$('.education-entry:last').append(
			school.majors.map(function(major) {
				return substitute(HTMLschoolMajor, major);
			}).join('')
		);
    }

    if (this.onlineCourses.length>0) {
    	$('#education').append(HTMLonlineClasses);
    }

    for(i=0, len=this.onlineCourses.length; i<len; i++) {
    	var course = this.onlineCourses[i];

		$('#education').append(HTMLschoolStart);

		$('.education-entry:last').append(
			  substitute(HTMLonlineTitle, course.title)
			+ substitute(HTMLonlineSchool, course.school)
			+ substitute(HTMLonlineDates, course.date)
			+ substitute(HTMLonlineURL, course.url)
			);
    }
};

education.display();

$(document).click(function(loc) {
	console.log(loc.pageX + '  ' + loc.pageY);
});

$('.nav li').on('click', function() {
    $('.nav li').removeClass('active');
    $(this).addClass('active');
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

$('#mapDiv').append(googleMap);