console.log("JS loaded!");
document.getElementById("video").style.display = "none";

function load() {
  console.log("Page loaded!");
}

function subjectClick(subject) {

  document.getElementById("gMaths").classList.add("gMathsAnimation");
  document.getElementById("gComp").classList.add("gCompAnimation");
  document.getElementById("programming").classList.add("programmingAnimation");
  document.getElementById("aMaths").classList.add("aMathsAnimation");
  document.getElementById("aFMaths").classList.add("aFMathsAnimation");
  document.getElementById(subject).classList.add("forwardIndex");
  document.getElementById("goback").style.visibility = "visible";
  document.getElementById("goback").style.opacity = 1;
  document.getElementById("displayinfo").style.visibility = "visible";
  document.getElementById("displayinfo").style.opacity = 1;
  document.getElementById("bottomDiv").style.visibility = "hidden";
  document.getElementById("bottomDiv").style.opacity = 0;
  document.getElementById("video").style.visibility = "hidden";
  document.getElementById("video").style.opacity = 0;
  document.getElementById("video").style.display = "";

  if (subject == "gMaths") {
    document.getElementById("subjectInfoHolder").innerText = "Having achieved a grade 8 at GCSE maths, and being currently predicted an A* in both Maths and Further Maths at A level, I have always loved this subject and enjoy mentoring it to others. When teaching Maths, I strive to ensure that students have a deeper understanding of the root concepts of a question, rather than a superficial awareness of the facts and methods needed to obtain an answer. I have experience tutoring a wide array of ages, starting as early as 4 years old right up to the end of A levels at 18.";
    document.getElementById("video").style.visibility = "visible";
    document.getElementById("video").style.opacity = 1;
    document.getElementById('video').src = "https://www.youtube.com/embed/gaeHXHXCByw";
  } else if (subject == "gCompSci") {
    document.getElementById("subjectInfoHolder").innerText = "This where students enter the world of coding, for the most part. Computer Science at GCSE takes a look at computers and coding in big overviews, here you learn how a CPU works and therefore how a computer can produce the results that it does, it also teaching you how to give a computer information and instructions (coding), which is one of the biggest fields in terms of a career as of today. I achieved a Grade 8 in my GCSE Computer Science and am going to be taking Computer Science (Artificial Intelligence) at Royal Holloway come September (2020). I am passionate about this subject and hope to open students' eyes about how incredible and how fun this subject can really be, as well as teaching you the main ideas and the tiny details you need to get the highest grades in your exam and coursework. I will teach you how to code, I will teach you the theory and I will make sure you know how to answer those exam questions, but most important of all, I will make sure you enjoy this beautiful subject, as much as I do.";
  } else if (subject == "programming") {
    document.getElementById("subjectInfoHolder").innerText =  "My earliest memory of coding is playing logic gate games, those where you had to solve puzzles with logic gates to solve the level, and those were always my favourite (very specific I know). I have loved coding ever since and today I do almost daily and it is what I want to do in life, code for a living, so I want to spread my knowledge to other people. I am experienced in various languages such as: Java, JavaScript, Python, VB.net (Maybe I’m a little rusty on that one). I am also experienced in Web Development (HTML, CSS, etc…), as well as experience with databases using SQLite and more recently I started learning Django. All this experience makes me fit to teach someone how to code from scratch. I will make sure you understand what you are coding and why code works the way it does, I will explain and teach you through various coding puzzles and hopefully we will come out with a product you can actually show off to people. I can teach you everything I know from how to make a pretty website, to how to make an AI from scratch.";
  } else if (subject == "aMaths") {
    document.getElementById("subjectInfoHolder").innerText = "This is where maths really starts to get difficult, you start to learn about the work of brilliant mathematicians such as Issac Newton, Blaise Pascal, Leonhard Euler and many others, although you won’t realise this. This is where you really start to see a point to maths, the stuff you learn here can be directly applied to real world problems and help you solve them, it is also incredibly fun. I have an A* predicted for this subject and have always loved it, I actually looked forward to tests so I could answer fun questions. I will make sure you learn the theory behind the maths and how it works, but most importantly I will teach you how to answer those exam questions and how to take the knowledge you learn in lessons and apply it to questions. I will also not bore you, because maths is not boring, I will not throw a bunch of information at you, we will analyse different parts of the subject and decompose it so you actually enjoy it, and when you enjoy something, then you usually tend to get very good at it!";
  } else if (subject == "aFMaths") {
    document.getElementById("subjectInfoHolder").innerText = "Now this is a monster subject. My college did not even let you in the course if you did not get 8+ in your GCSE at Maths. This subject is the hardest subject I have ever done, and with that it was also the most fun. The concepts you learn about are simply amazing, although they might not seem it at first, and this is where I come in. I want to make sure you know the deeper meaning of the maths you are learning, I don’t want you to think that you are learning hard maths for the sake of hard maths because you are not. I will help you understand the maths you are doing, and with this will come not just a greater appreciation, but also a better understanding, which will result in better marks! I am predicted an A* in this subject and would say I am pretty confident in it and would love to help you answer those insanely hard exam questions. By the time we are done, you will be counting the marks you didn’t get instead of the marks you did get, you will be that good!";
  }

}

function removetest() {
  document.getElementById("gMaths").classList.remove("gMathsAnimation");
  document.getElementById("gComp").classList.remove("gCompAnimation");
  document.getElementById("programming").classList.remove("programmingAnimation");
  document.getElementById("aMaths").classList.remove("aMathsAnimation");
  document.getElementById("aFMaths").classList.remove("aFMathsAnimation");
  document.getElementById("goback").classList.remove("visibleTest");
  document.getElementById("goback").style.visibility = "hidden";
  document.getElementById("goback").style.opacity = 0;
  document.getElementById("displayinfo").style.visibility = "hidden";
  document.getElementById("displayinfo").style.opacity = 0;
  document.getElementById('video').src = "";
  document.getElementById("video").style.display = "none";
  document.getElementById("bottomDiv").style.visibility = "visible";
  document.getElementById("bottomDiv").style.opacity = 1;

  setTimeout(function() {
    document.getElementById("gMaths").classList.remove("forwardIndex");
    document.getElementById("gComp").classList.remove("forwardIndex");
    document.getElementById("programming").classList.remove("forwardIndex");
    document.getElementById("aMaths").classList.remove("forwardIndex");
    document.getElementById("aFMaths").classList.remove("forwardIndex");
  }, 500);

}

function goToContact() {
  window.location.replace("../?page=contactme");
}
