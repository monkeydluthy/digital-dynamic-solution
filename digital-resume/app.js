let about = document.getElementById('about-target');
let summary = document.getElementById('summary');

about.addEventListener('click', function() {
    if (summary.style.display === "block") {
      summary.style.display = "none";
    } else {
      summary.style.display = "block";
    }
  });

let education = document.getElementById('education-target');
let schools = document.getElementById('schools');

education.addEventListener('click', function() {
    if (schools.style.display === "flex") {
      schools.style.display = "none";
    } else {
      schools.style.display = "flex";
    }
  });

let interest = document.getElementById('interests');
let list = document.getElementById('interests-1');

interest.addEventListener('click', function() {
    if (list.style.display === "block") {
      list.style.display = "none";
    } else {
      list.style.display = "block";
    }
  });

let awards = document.getElementById('awards');
let awardLists = document.getElementById('awards-lists');

awards.addEventListener('click', function() {
    if (awardLists.style.display === "none") {
      awardLists.style.display = "block";
    } 
    else {
      awardLists.style.display = "none";
    }
  });

  let performance = document.getElementById('performance-target');
  let performanceList = document.getElementById('performance-list');
  
  performance.addEventListener('click', function(e) {
    e.stopPropagation();
      if (performanceList.style.display === "block") {
        performanceList.style.display = "none";
      } else {
        performanceList.style.display = "block";
      }
    });

let partnership = document.getElementById('partnership-target');
let partnershipList = document.getElementById('partnership-list');
  
  partnership.addEventListener('click', function(e) {
    e.stopPropagation();
      if (partnershipList.style.display === "block") {
        partnershipList.style.display = "none";
      } else {
        partnershipList.style.display = "block";
      }
    });

let communication = document.getElementById('communication-target');
let communicationList = document.getElementById('communication-list');
  
communication.addEventListener('click', function() {
      if (communicationList.style.display === "block") {
        communicationList.style.display = "none";
      } else {
        communicationList.style.display = "block";
      }
    });

let business = document.getElementById('business-target');
let businessList = document.getElementById('business-list');
      
business.addEventListener('click', function() {
          if (businessList.style.display === "block") {
            businessList.style.display = "none";
          } else {
            businessList.style.display = "block";
          }
        });

let tech = document.getElementById('tech-target');
let techList = document.getElementById('tech-list');
               tech.addEventListener('click', function() {
            if  (techList.style.display === "block") {
         techList.style.display = "none";
            } else {
         techList.style.display = "block";
            }
        });

let problemsolving = document.getElementById('problemsolving-target');
let problemsolvingList = document.getElementById('problemsolving-list');
              
problemsolving.addEventListener('click', function() {
            if (problemsolvingList.style.display === "block") {
            problemsolvingList.style.display = "none";
            } else {
            problemsolvingList.style.display = "block";
            }
        });

let creativity = document.getElementById('creativity-target');
let creativityList = document.getElementById('creativity-list');
                       creativity.addEventListener('click', function() {
            if  (creativityList.style.display === "block") {
            creativityList.style.display = "none";
            } else {
            creativityList.style.display = "block";
            }
        });

let cert = document.getElementById('cert-target');
let certPic = document.getElementById('cert-pics');
                        cert.addEventListener('click', function() {
            if  (certPic.style.display === "block") {
            certPic.style.display = "none";
            } else {
            certPic.style.display = "block";
            }
        });

let course = document.getElementById('course-target');
let courseList = document.getElementById('course-list');
                        course.addEventListener('click', function() {
            if  (courseList.style.display === "block") {
            courseList.style.display = "none";
            } else {
            courseList.style.display = "block";
            }
        });

let verizon = document.getElementById('verizon-target');
let verizonList = document.getElementById('verizon-list');
                        verizon.addEventListener('click', function() {
            if  (verizonList.style.display === "block") {
            verizonList.style.display = "none";
            } else {
            verizonList.style.display = "block";
            }
        });

let cb = document.getElementById('cb-target');
let cbList = document.getElementById('cb-list');
                        cb.addEventListener('click', function() {
            if  (cbList.style.display === "block") {
            cbList.style.display = "none";
            } else {
            cbList.style.display = "block";
            }
        });

let sliders = document.getElementById('sliders-target');
let slidersList = document.getElementById('sliders-list');
                        sliders.addEventListener('click', function() {
            if  (slidersList.style.display === "block") {
            slidersList.style.display = "none";
            } else {
            slidersList.style.display = "block";
            }
        });

let lavish = document.getElementById('lavish-target');
let lavishList = document.getElementById('lavish-list');
                        lavish.addEventListener('click', function() {
            if  (lavishList.style.display === "block") {
            lavishList.style.display = "none";
            } else {
            lavishList.style.display = "block";
            }
        });
