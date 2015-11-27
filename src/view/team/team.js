





var allDiv = document.createElement("div");
allDiv.className = "flex-container";
var car =[

          {
          name:"Ben Yao",
          major:"Aerospace Engineering ‘16",
          title:"Team Captain",
          pic:"img/team/ben.png",
          bio:"Ben is a Senior Aerospace Engineering student who is passionate about space exploration. NASA Student Launch allows Ben to explore his interests through the design and research of a project based on NASA’s journey to Mars. This is his third year on the Notre Dame Rocketry Team, and as team captain, he wants to expand and share his knowledge of rocketry with new members. His goal is to establish a strong foundation for future years of NDRT, help his team succeed in this year’s competition, and to spread his passion for space exploration. In his free time, Ben enjoys rock climbing, reading, and watching movies. "
        },

          {
          name:"Benjamin Richmond",
          major:"Electrical Engineering ‘17",
          title:"Lead, Communications Squad",
          bio:"Benny is a junior studying Electrical Engineering at Notre Dame, and a third year member of the rocketry team. In past years he has designed and built parts of a Hazard Scanning Payload, worked with communications, and been in charge of designing and building the Ground Station. This year he is a squad leader for the communications payload, and will be involved with all the electronic systems on the rocket. Benny is a member of Air Force ROTC, and plans to be a developmental engineer or cyber warfare officer after college. He is also involved in many other clubs at Notre Dame, including the Sailing Team, Air Force Honor Guard, lacrosse club, and RC Aircraft club.",
          pic:"img/team/benny.png"
        },

          {
            name:"Madeline Oelerich",
            major:"Aerospace Engineering ‘16",
            title:"Co-Lead, Vehicles Squad; Lead, Educational Outreach",
            pic:"img/team/mad.jpg",
            bio:"Madeline is a senior studying aerospace engineering. This is her second year on the Notre Dame Rocketry Team and she is eager to serve as the Educational Outreach Lead this year. Ever since her trip to Space Camp in Huntsville, AL in seventh grade, she fell in love with space and dreamt of a career in the space industry. She enjoys tea, running, and Chicago sports teams especially the Blackhawks and Cubs."
          },
        //   {
        //   name:"Christopher Jarocki",
        //   major:"Aerospace Engineering ‘17",
        //   title:"Member, Vehicles Squad",
        //   pic:"",
        //   bio:"A junior Aerospace Engineering major from Duluth, MN, this is Christopher's first year on the Notre Dame Rocketry Team, and a great fit for him as he is passionate about space exploration. His love for rockets started with small Estes rockets with his brothers, and watching October Sky as a small child. Outside of the workshop, he can be found on just about any interhall roster, including broomball, baseball, volleyball and hockey. He can also be found passionately rooting for any Notre Dame team, as well as his odd mix of favorite teams, including the Cowboys, Broncos and the Minnesota Wild. "
        // },

        {
        name:"Chris Mulholland",
        major:"Computer Engineering ‘19",
        title:"Member, Communications Squad",
        pic:"img/team/chrismulhollanf.png",
        bio:"Chris is a Freshman studying Computer Engineering. This is his first year on the team, and he hopes to learn from the team's veterans about rocketry and the NASA competition. He is on the Electronics Team to explore the uses of computer programming in rocketry as well as build up experience. He is excited to see how the year will go and plans to become more involved as the season progresses. Chris plays the Baritone in the Marching Band and also plays the Electric Bass."
      },
        {
        name:"Diego Rayas",
        major:"Aerospace Engineering ‘16",
        title:"Lead, Vehicles Squad",
        pic:"img/team/diego.png",
        bio:"Diego is a senior aerospace engineering student from Minnesota. This is his third year on the Notre Dame Rocketry Team and is the vehicle squad lead for this year's competition. He has been on the vehicle design teams in the past and will draw on his prior knowledge and help from his squad to design and construct this year's rocket. He is passionate about rocketry and wants to work in the space industry in the future. Diego graduated from Officer Candidate School last summer and will commission in the United States Marine Corps as a 2nd Lieutenant after his senior year. He will be a Student Naval Aviator and hopes to fly F/A-18s or F-35s."
      },
      {
      name:"Anna McMahon",
      major:"CS",
      title:"Website developer",
      pic:"img/team/anna.jpg",
      bio:"Web dev"
        },
        {
        name:"Monica Ochoa",
        major:"Aerospace Engineering",
        title:"Vehicle Design Team Member",
        pic:"img/team/monica.jpg",
        bio:"Monica is a sophomore aerospace engineering major. This is her first year on the Notre Dame Rocketry Team, and she is very excited to be a part of the Vehicle Design Team. Monica has always had a fascination with space and the idea of flight. When she visited the Jet Propulsion Laboratory in Pasadena, California, she came to the solid conclusion that the aerospace field was what she was passionate about. Her goal is to one day return to JPL, but instead of returning as a visitor, returning as an aerospace engineer with a focus on space exploration. On campus, she is part of the STEM Leadership Committee and heavily involved with the Latino community. During her free time, she enjoys watching movies, playing soccer and drawing."
          },
         ]
;
car.forEach(logArrayElements);

function logArrayElements(element, index, array) {
  var peopleDiv = document.createElement("div");
  var h = document.createElement("h1");
  var sname = document.createElement("span");
  var stitle = document.createElement("span");
  var pplImg = document.createElement("img");
  var bio = document.createElement("p");

  peopleDiv.className = "peopleItems";
  sname.id = "name";
  stitle.id = "title";
  bio.id = "paragraph";


  sname.textContent = element.name;
  stitle.textContent = element.title;
  bio.textContent = element.bio;
  pplImg.src = element.pic;
  bio.style.display = 'none';

//  bio.textContent = element.bio;

  h.appendChild(sname);
  h.appendChild(stitle);
  peopleDiv.appendChild(h);
  peopleDiv.appendChild(pplImg);
  peopleDiv.appendChild(bio);

  peopleDiv.onmouseover = function() {
    // do something like for example change the class of a div to change its color :
    console.log("YES");
    //pplImg.style.display='';
    pplImg.setAttribute('width', '220');
    peopleDiv.style.width = '500px';
    bio.style.display = 'block';


    //document.getElementById('myDivId').className = 'otherColor';
  };
  peopleDiv.onmouseleave = function() {
    // do something like for example change the class of a div to change its color :
    console.log("YES");
    pplImg.style.display='block';

    bio.style.display = 'none';

      //document.getElementById('myDivId').className = 'otherColor';
  };
  allDiv.appendChild(peopleDiv);
}

document.getElementById("team").appendChild(allDiv);

function init() {

$('div.peopleItems').mouseenter(function(){
    var image= $(this).find('img'),
        caption = $(this).find('div');

    caption.width(image.width());
    caption.height(image.height());
    caption.fadeIn();
}).mouseleave(function(){
     var image= $(this).find('img'),
        caption = $(this).find('div');

    caption.width(image.width());
    caption.height(image.height());
    caption.fadeOut();
});
$('div.peopleItems').mousedown(function(){
    var peopleDiv = document.createElement("div");
    peopleDiv.className= largeDiv;

})

}
