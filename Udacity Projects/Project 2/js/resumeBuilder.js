
var bio = {
    "name": "Nick Stellitano",
    "role": "Data Analyst",
    "contacts": {
        "mobile": "(601)-616-3816",
        "email": "nstellitano@gmail.com",
        "github": "nstellitano",
        "linkedin": "https://www.linkedin.com/in/nstellitano",
        "location": "Boston, Ma"
    },
    "welcomeMessage": "I am a creative and dynamic thinker who proudly served 12 years in the Marine Corps as a Officer and pilot.  While in the military " +
    "I excelled at managing projects that required qualitative research and analysis of data in the completion of our monthly and yearly missions.  I am " +
    "looking to continue to make an impact in the fields of International and Domestic development through the use of data and data analytics.   As an " +
    "Associate with Education Resource Strategies I am utilizing extensive data sets to help school systems align resources with student needs. /n" +
    "As a lifelong student I continue to learn and develop my skills in the areas of data science.  I have experience with inferential statistical techniques " +
    "and statistical data analysis using R and Python while also developing new and innovative ways to visualize data through HTML/CSS and D3. I am always" +
    "interested in collaborating on new projects.",
    "skills": ['Analytical thinking',' Problem-solving'," Operational Planning", " Leadership", " Stata", " R", " JavaScript", " D3", " C", " C++"],
    "biopic": "images/Stellitano_Profile.jpg",
    "display": function(){
        $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
        $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));

        $("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts["mobile"]));
        $("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts["github"]));
        $("#topContacts").append(HTMLemail.replace("%data%", bio.contacts["email"]));
        $("#topContacts").append(HTMLlinkedin.replace("%data%", bio.contacts["linkedin"]));
        $("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts["location"]));

        $("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts["mobile"]));
        $("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts["github"]));
        $("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts["email"]));
        $("#footerContacts").append(HTMLlinkedin.replace("%data%", bio.contacts["linkedin"]));
        $("#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts["location"]));

        $("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
        $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

    }
};

var work = {
    "jobs": {
        "ERS": {
            "employer": "Education Resource Strategies",
            "title": " Associate",
            "location": "Watertown, MA",
            "dates": "June 2015 - Present",
            "description": "Consult with State education departments and school districts Utilizing extensive data sets to help school " +
                           "systems align resources with student needs"
        },
        "TF": {
            "employer": "Harvard Kennedy School",
            "title": "Graduate Teaching Fellow",
            "location": "Cambridge, MA",
            "dates": "August 2014 - December 2014",
            "description": "Assist in the instruction Politics and Policies: What Can Statistics Tell Us?"
        },
        "DLLC": {
            "employer": "Dillinger LLC",
            "title": "Founder/Consultant",
            "location": "Portsmouth, NH",
            "dates": "December 2011 -  Present",
            "description": "Developed the “Reading Leveler”, a website and mobile application utilized by educators/parents/students to organize and " +
            "identify appropriate grade-level reading material.  Over 8,000 mobile applications were downloaded. " +
            "I also facilitated the creation of a business and marketing plan for CommonLit, an educational nonprofit startup at Harvard’s I-Lab, " +
            "resulting in >20K of seed funding."
        },
        "TBG": {
            "employer": "The Bassiouni Group",
            "title": "Summer Associate",
            "location": "New York, New York",
            "dates": "May 2014 - September 2014",
            "description": "Worked primarily as a research associate identifying over 20 consulting and trade opportunities with the United Nations and " +
            "African Development Bank.  I coordinated, researched and wrote two UN and one African Development Bank bid proposal.  I was also responsible in the" +
            "researching, analyzing, and development of 3 research reports on African national policies and initiatives relating to agribusiness."
        },
        "USMC_XO": {
            "employer": "United States Marine Corps",
            "title": "Executive Officer",
            "location": "Portsmouth, New Hampshire",
            "dates": "May 2010 - May 2013",
            "description": "Provided leadership, instruction, physical training, and supervision to 100 Marines and civilians.  Directly led and supervised " +
            "7 Marines and one civilian contractor on a daily basis while collaborating with a 7 man Command Group that was responsible for the " +
            "strategic planning, operational control, and day-to-day management of Recruiting Station Portsmouth."

        },
        "USMC_OPSO": {
            "employer": "United States Marine Corps",
            "title": "Operation Officer",
            "location": "Portsmouth, New Hampshire",
            "dates": "May 2009 - May 2010",
            "description": "Effectively communicated mission essential tasks and directives to 14 area managers ensuring mission attainment in contracting and " +
            "shipping for 12 consecutive months.  Directly led and supervised 7 Marines on a daily basis while collecting and analyzing data daily and weekly " +
            "to evaluate operational efficiencies.  I developed modeling and evaluation processes to determine the effectiveness of current operational " +
            "activities enabling improvements in specific problem areas."

        },
        "USMC_Pilot": {
            "employer": "United States Marine Corps",
            "title": "Pilot",
            "location": "Yuma, Arizona",
            "dates": "Sep 2006 - May 2009",
            "description": "760.4 hrs flight time in the Harrier Attack Jet leading inexperienced pilots in 100 Combat Sorties. I also " +
            "supervised over 50 Marines in 3 separate maintenance sections."
        }
    },
    "display": function () {
        for (i in work.jobs) {
            $("#workExperience").append(HTMLworkStart);
            $(".work-entry:last").append(HTMLworkEmployer.replace("%data%", work.jobs[i].employer) + HTMLworkTitle.replace("%data%", work.jobs[i].title));
            $(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[i].dates));
            $(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[i].description));
        }
    }
};

var project = {
    "projects": {
        "Migration": {
            "title": "Migration as an Instrument for International Development",
            "dates": "Spring 2015",
            "description": "In 2015, I took CS 171 Data Visualization through Harvard University. As a final project, myself along with a fellow " +
            "classmate, chose to visualize the effects wage differentials have through migration on International Development.",
            "images": "images/migration-300x200_large_300w.jpg",
            "url": "http://adhikarisamik.github.io/"
        },
        "BOEvisualizaiton": {
            "title": "Bank of England Visualization Competition",
            "dates": "Spring 2015",
            "description": "In 2015, the Bank of England ran a visualization competition. They published historical data to be used within a static or " +
            "dynamic visualization. I utilized a Sankey Diagram to help visualize a subset of questions from the House Hold Survey data spanning from 2004 to 2011.",
            "images": "images/boe-300x200_large_300w.jpg",
            "url": "http://boe.competition.s3-website-us-east-1.amazonaws.com/"
        },
        "Citibike": {
            "title": "CitiBike",
            "dates": "Fall 2014",
            "description": "In 2014, I took CS 109 Data Science through Harvard University. As a final project, myself and 3 other classmates chose to analyze " +
            "Citibike, the New York bike system. Through the use of python and D3 we analyzed the make up and behavior of the historical data of Citibike.",
            "images": "images/citibike-300x200_large_300w.jpg",
            "url": "http://team-awesome.s3-website-us-east-1.amazonaws.com/"
        }
    },
    "display": function() {
        for (i in project.projects) {
            $("#projects").append(HTMLprojectStart);
            var title = HTMLprojectTitle.replace("%data%", project.projects[i].title);
            title = title.replace("#", project.projects[i].url);
            $(".project-entry:last").append(title);
            $(".project-entry:last").append(HTMLprojectDates.replace("%data%", project.projects[i].dates));
            $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", project.projects[i].description));
            $(".project-entry:last").append(HTMLprojectImage.replace("%data%", project.projects[i].images));

        }
    }
};

var education = {
    "schools": {
        "GT": {
            "name": "Georgia Institute of Technology",
            "location": "Atlanta, GA",
            "degree": "Masters",
            "majors": "Computer Science",
            "dates": "Sept 2015 - Present",
            "url": "http://www.omscs.gatech.edu/#np-855"
        },
        "HKS": {
            "name": "Harvard Kennedy School of Government",
            "location": "Cambridge, MA",
            "degree": "Masters",
            "majors": "Public Administration in International Development",
            "dates": "Sept 2013 - May 2015",
            "url": "http://www.hks.harvard.edu/degrees/masters/mpa-id"
        },
        "SNHU": {
            "name": "Southern New Hampshire University",
            "location": "Manchester, NH",
            "degree": "Masters",
            "majors": "Business Administration",
            "dates": "July 2010 - June 2012",
            "url": "http://www.snhu.edu/Global-MBA-online.asp"
        },
        "BU": {
            "name": "Boston University",
            "location": "Boston, MA",
            "degree": "Bachelor of Science",
            "majors": "Mechanical Engineering",
            "dates": "September 1998 - May 2002",
            "url": "http://www.bu.edu/academics/eng/programs/mechanical-engineering/bs/"
        }
    },
    "onlineCourses": {
        "Udacity": {
            "title": "Front-End Web Developer Nanodegree",
            "school": "Udacity",
            "dates": "May 2015 - Present ",
            "url": "https://www.udacity.com/"
        },
        "Quantnet": {
            "title": "C++ Programing for Financial Engineering Online Certificate",
            "school": "Baruch MFE program",
            "dates": "May 2013 - August 2013 ",
            "url": "https://www.quantnet.com/cpp/"
        }
    },
    "display": function() {
        for (i in education.schools) {
            $("#education").append(HTMLschoolStart);
            var title = HTMLschoolName.replace("%data%", education.schools[i].name + HTMLschoolDegree.replace("%data%", education.schools[i].degree));
            title = title.replace("#", education.schools[i].url);
            $(".education-entry:last").append(title);
            $(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[i].dates));
            $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[i].location));
            $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[i].majors));
        }

        $(".education-entry:last").append(HTMLonlineClasses);
        for (i in education.onlineCourses) {
            var title = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title) + HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
            title = title.replace("#", education.onlineCourses[i].url);
            $(".education-entry:last").append(title);
            $(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates));
            var url = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
            url = url.replace("#", education.onlineCourses[i].url);
            $(".education-entry:last").append(url);
        }
    }
};

$(function(){
    bio.display();
    work.display();
    project.display();
    education.display();
    $("#mapDiv").append(googleMap);
    buildmap();

    $(document).click(function(loc) {
        logClicks(loc.pageX, loc.pageY)
    });

});


