var bio = {
  'name': 'Matthew Hanson',
  'role': 'Sr. Specialist - Network Design Engineer',
  'contacts': {
    'mobile': '530-613-7801',
    'email': 'matthanson34@gmail.com',
    'twitter': '@mhanson34',
    'location': 'Sacramento'
  },
  'welcomeMessage': '"If you can dream it, you can do it." - Walt Disney',
  'skills': ['MS Office', 'Critical Thinking', 'Problem Solving', 'Radio Frequency Engineering'],
  'bioPic': 'images/Striper Fishing.jpg',

  display: function() {
    var finalName = HTMLheaderName.replace('%data%', bio.name);
    var finalRole = HTMLheaderRole.replace('%data%', bio.role);
    var finalContactMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
    var finalContactEmail = HTMLemail.replace('%data%', bio.contacts.email);
    var finalContactTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
    var finalContactLocation = HTMLlocation.replace('%data%', bio.contacts.location);
    var finalBioPic = HTMLbioPic.replace('%data%', bio.bioPic);
    var finalWelcomeMessage = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
    $('#topContacts').append(finalContactMobile);
    $('#topContacts').append(finalContactEmail);
    $('#topContacts').append(finalContactTwitter);
    $('#topContacts').append(finalContactLocation);
    $('#header').prepend(finalRole);
    $('#header').prepend(finalName);
    $('#header').append(finalWelcomeMessage);
    $('#header').append(finalBioPic);
    if (bio.skills.length > 0) {
      $('#header').append(HTMLskillsStart);
      for (var i = 0; i < bio.skills.length; i++) {
        var finalSkills = HTMLskills.replace('%data%', bio.skills[i])
        $('#skills').append(finalSkills);
      }
    }
  }
};

bio.display();


var education = {
  'schools': [{
    'name': 'University of Nevada, Reno',
    'location': 'Reno, NV',
    'degree': 'Bachelor of Science',
    'majors': 'Mechanical Engineering',
    'dates': 'Aug 2009 - Dec 2013',
    'url': 'https://www.unr.edu/'
  }],
  'onlineCourses': [{
    'title': 'Front-End Web Developer',
    'school': 'Udacity',
    'dates': 'Apr 2017 - Present',
    'url': 'https://www.udacity.com/'
  }]
};
education.display = function() {
  for (var i = 0; i < education.schools.length; i++) {
    $("#education").append(HTMLschoolStart);
    var finalSchoolName = HTMLschoolName.replace('%data%', education.schools[i].name);
    var finalDegree = HTMLschoolDegree.replace('%data%', education.schools[i].degree);
    var finalSchoolDates = HTMLschoolDates.replace('%data%', education.schools[i].dates);
    var finalSchoolLocation = HTMLschoolLocation.replace('%data%', education.schools[i].location);
    var finalSchoolMajor = HTMLschoolMajor.replace('%data%', education.schools[i].majors);
    $('.education-entry:last').append(finalSchoolName + finalDegree);
    $('.education-entry:last').append(finalSchoolDates);
    $('.education-entry:last').append(finalSchoolMajor);
    $('.education-entry:last').append(finalSchoolLocation);
  }
  $("#education").append(HTMLonlineClasses);
  for (var k = 0; k < education.onlineCourses.length; k++) {
    $("#education").append(HTMLschoolStart);
    var finalonlineTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[k].title);
    var finalOnlineSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[k].school);
    var finalOnlineDates = HTMLonlineDates.replace('%data%', education.onlineCourses[k].dates);
    var finalOnlineURL = HTMLonlineURL.replace('%data%', education.onlineCourses[k].url);
    $(".education-entry:last").append(finalonlineTitle + finalOnlineSchool);
    $(".education-entry:last").append(finalOnlineDates);
    $(".education-entry:last").append(finalOnlineURL);
  }
};
education.display();

var work = {
  'jobs': [{
    'employer': 'AT&T',
    'title': 'Sr. Specialist - Network Design Engineer',
    'location': 'Sacramento, CA',
    'dates': 'July 2013 to Present',
    'description': 'Design and Engineer the  Microwave Radio routes for AT&T Wireline Network'
  },
  {
    'employer': 'Aerojet-Rocketdyne',
    'title': 'Associate Industrial Engineer',
    'location': 'Racnho Cordova, CA',
    'dates': 'April 2013 to July 2013',
    'description': 'Data collection and analysis for lean manufacturing cell design (Six Sigma applications',
  }]
};
work.display = function() {
  for (var l = 0; l < work.jobs.length; l++) {
    $("#workExperience").append(HTMLworkStart);
    var finalWorkEmployer = HTMLworkEmployer.replace('%data%', work.jobs[l].employer);
    var finalWorkTitle = HTMLworkTitle.replace('%data%', work.jobs[l].title);
    var finalWorkLocation = HTMLworkLocation.replace('%data%', work.jobs[l].location);
    var finalWorkDates = HTMLworkDates.replace('%data%', work.jobs[l].dates);
    var finalWorkDescription = HTMLworkDescription.replace('%data%', work.jobs[l].description);
    $('.work-entry:last').append(finalWorkEmployer + finalWorkTitle);
    $('.work-entry:last').append(finalWorkLocation);
    $('.work-entry:last').append(finalWorkDates);
    $('.work-entry:last').append(finalWorkDescription);
  }
};
work.display();

var Projects = {
  'project': [{
    'title':'CSO Metrics Dashboard',
    'dates':'Sept 2015-Feb 2016',
    'description':'Create an automated and dynamic metrics dashboard fed by several independent data sources',
    'images':['images/dashboard.jpg'],
  }]
};
Projects.display = function() {
  for (var m = 0; m < work.jobs.length; m++) {
    $("#projects").append(HTMLprojectStart);
    var finalProjectTitle = HTMLprojectTitle.replace('%data%', Projects.project[m].title);
    var finalProjectDates = HTMLprojectDates.replace('%data%', Projects.project[m].dates);
    var finalProjectDescription = HTMLprojectDescription.replace('%data%', Projects.project[m].description);
    var finalProjectImages = HTMLprojectImage.replace('%data%', Projects.project[m].images);
    $('.project-entry:last').append(finalProjectTitle);
    $('.project-entry:last').append(finalProjectDates);
    $('.project-entry:last').append(finalProjectDescription);
    $('.project-entry:last').append(finalProjectImages);
  }
};
Projects.display();

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);
