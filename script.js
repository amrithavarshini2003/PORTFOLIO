var audio = new Audio('assets/sentmessage.mp3');
var contactString = "<div class='social'> <a target='_blank' href='tel:+918778498177'> <div class='socialItem' id='call'><img class='socialItemI' src='file:///C:/Users/amirt/Downloads/phone.svg'/><label class='number'>8438524727</label></div> </a> <a href='mailto:amirthu33@gmail.com'> <div class='socialItem'><img class='socialItemI' src='file:///C:/Users/amirt/Downloads/gmail.svg' alt=''></div> </a> <a target='_blank' href='https://github.com/amrithavarshini2003'> <div class='socialItem'><img class='socialItemI' src='file:///C:/Users/amirt/Downloads/github.svg' alt=''></div> </a> <a target='_blank' href='https://wa.me/918778498177'> <div class='socialItem'><img class='socialItemI' src='file:///C:/Users/amirt/Downloads/whatsapp.svg' alt=''></div> </a> <a target='_blank' href='https://web.telegram.org/k/'> <div class='socialItem'><img class='socialItemI' src='file:///C:/Users/amirt/Downloads/telegram.svg' alt=''></div> </a> <a target='_blank' href='https://www.instagram.com/_.amirthu_/'> <div class='socialItem'><img class='socialItemI' src='file:///C:/Users/amirt/Downloads/instagram.svg' alt=''> </div> </a> <a href='https://www.linkedin.com/in/' target='_blank' rel='noopener noreferrer'> <div class='socialItem'><img class='socialItemI' src='file:///C:/Users/amirt/Downloads/linkedin.svg' alt=''></div> </a> </div>";
var resumeString = "<img src='C:\\Users\\amirt\\Pictures\\resumeThumbnail.jpeg' class='resumeThumbnail'><div class='downloadSpace'><div class='pdfname'><img src='C:\\Users\\amirt\\Downloads\\pdf.png'><label>Amritha's Resume.pdf</label></div><a href='Downloads/Resume.pdf' download='Amritha_Varshini_Resume.pdf'><img class='download' src='C:/Users/amirt/Downloads/downloadIcon.svg'></a></div>";
var addressString = "<div class='mapview'><iframe src='https://www.google.com/maps/place/Arthanari+St,+Arthanari+Nagar,+Swarnapuri,+Salem,+Tamil+Nadu/@11.6714893,78.1397659,17z/data=!3m1!4b1!4m6!3m5!1s0x3babf0440c4ec973:0xab49a43a5fe39581!8m2!3d11.6714893!4d78.1397659!16s%2Fg%2F1tp2ytzh?entry=ttu' class='map'></iframe></div><label class='add'><address>11-1/5A Arthanari Street,<br>Saminathapuram,<br>Salem-636009</address>";



var repliesfForHowAreYou = ["I'm fine.", "I'm good. And yourself?", "Not bad. How are you?", "I'm doing well, and you?", "Good, how about you?", "I'm great!", "Everything is fine when you are around.", "The best I can be. I hope you are at your best too.", "I'm still learning and eagerly waiting to grasp new things."];
var repliesForHello = ["Hello there!", "Hey!", "Hola!", "Nice to meet you!", "I'm here!", "Hey! How's it going?", "What's up?", "Hey! What a pleasant surprise!"];
var repliesForBye = ["Catch you on the flip side!", "Bye-bye, butterfly.", "See you soon!", "Catch you later!", "Bye for now", "See you on the internet!"];
var repliesfForLove = ["You are not my type!","I get that a lot!", "You are day-dreaming again!", "I love You........Tube! LOL!", "Are you sure you aren't sick or something?", "I love you too!", "❤️"]
var repliesForCommandUnknown = ["Hey I couldn't catch you....<br>Send 'help' to know more about usage.", "I didn't get it.", "Please can you repeat it?", "I'm still learning...please use approriate keywords in your phrase.", "I'm still working on it.<br>"];
var repliesForVoiceAssistants = ["Yes! I know her.", "Of-cource! Who don't know her?", "I'm teching lessions from her!", "She is my BFF!", "My childhood friend!"];



function getRandom(arrayOfReplies) {
    var sizeOfArray = arrayOfReplies.length;
    return arrayOfReplies[Math.floor(Math.random() * sizeOfArray)];
}




function startFunction() {
    setLastSeen();
    waitAndResponce("intro");
}

function setLastSeen() {
    var date = new Date();
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "last seen today at " + date.getHours() + ":" + date.getMinutes()
}


function closeFullDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}

function openFullScreenDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}


function isEnter(event) {
    if (event.keyCode == 13) {
        sendMsg();
    }
}

function sendMsg() {
    var input = document.getElementById("inputMSG");
    var ti = input.value;
    if (input.value == "") {
        return;
    }
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "sent");
    greendiv.setAttribute("class", "green");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = input.value;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    setTimeout(function () { waitAndResponce(ti) }, 1500);
    input.value = "";
    playSound();
}

function waitAndResponce(inputText) {
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "typing...";
    switch (inputText.toLowerCase().trim()) {
        case "intro":
            setTimeout(() => {
                sendTextMessage("Hey there, fellow tech enthusiasts!👋🏻,<br><br> I'm <span class='bold'><a class='alink'>Amritha Varshini Nagarajan</a>,</span><br><br> the engineering aficionado from <span class='bold'>Sri Eshwar College Of Engineering👨🏻‍💻📚</span><br><br> I'm on the hunt for awesome job opportunities in the engineering world, ready to unleash my skills and make a mark. Let's have a chat that's engaging, fun, and maybe throw in a few nerdy jokes. Buckle up, and let's embark on this exciting journey together! 😄🚀.<br><br>Send <span class='bold'>'help'</span> to know more about me.<br>");
            }, 2000);
            break;
        case "help":
            sendTextMessage("<span class='sk'>Feel free to share the keyword that corresponds to the information you'd like to know about me. Here are a few examples to get started:<br>e.g<br><span class='bold'>'Skills'</span>: To learn about my skills and areas of expertise.<br><span class='bold'>'Resume'</span>: To obtain a copy of my resume.<br><span class='bold'>'Education'</span>: To discover details about my educational background.<br><span class='bold'>'Address'</span> : To obtain information regarding my address.<br><span class='bold'>'Contact'</span> : To find out ways to connect with me.<br><span class='bold'>'Projects'</span> : To get insights into my past projects and their details.<br><span class='bold'>'Clear'</span> : To reset the conversation and start afresh.<br><span class='bold'>'About'</span> ': To gain knowledge about this site and its purpose.</span>");
            break;
        case "resume":
            sendTextMessage(resumeString);
            break;
        case "skills":
            sendTextMessage("<span class='sk'>I am currently pursuing B.E degree in Computer Science Engineering.<br><br>TECHNICAL SKILLS:<br><span class='bold'>Java<br>C<br>MySql<br>JavaScript<br>Python<br>CSS<br>HTML</span><br><br>SOFT SKILLS :<span class='bold'><br>Design Thinking<br>Problem Solving<br>Leadership<br>Team Management</span><br><br></span>");
            break;

        case "education":
            sendTextMessage("I am currently pursuing B.E degree in Computer Science Engineering from SECE Coimbatore<br>Passing Year : 2025<br><br>I have completed my Secondary school in Cluny Matriculation Higher Secondary School<br>Passing Year:2020");
            break;

        case "address":
            sendTextMessage(addressString);
            break;
        case "clear":
            clearChat();
            break;
        case "about":
            sendTextMessage("🛠️💻 This portfolio website is built using HTML, CSS and JavaScript from SCRATCH!<br><br>👨🏻‍💻 Designed and Developed by <a class='alink' target='_blank' href='https://www.instagram.com/_.amirthu_/'><span class='bold'>Amritha Varshini</a> with ❤️</span>");
            break;
        case "contact":
            sendTextMessage(contactString);
            break;
        case "projects":
            sendTextMessage("You want to check my projects? Then just jump into my Github Account.<br><br><div class='social'><a target='_blank' href='https://github.com/amrithavarshini2003'> <div class='socialItem'><img class='socialItemI' src='file:///C:/Users/amirt/Downloads/github.svg' alt=''></div> </a></div>");
            break;
        case "new":
            sendTextMessage(addressString);
            break;
            default:
                ifElseThinkAndExecute(inputText.toLowerCase().trim());
                break;
    }
}



function ifElseThinkAndExecute(textString) {
    if (textString.includes("hii") || textString.includes("hi") || textString.includes("hello") || textString.includes("hola") || textString.includes("hey")) {
        // reply for hi message
        sendTextMessage(getRandom(repliesForHello));
    } else if (textString.includes("i need break") || textString.includes("leave me") || textString.includes("bye") || textString.includes("see you soon") || textString.includes("bye bye") || textString.includes("goodbye")) {
        // reply for bye message
        sendTextMessage(getRandom(repliesForBye));
    } else if (textString.includes("i love you") || textString.includes("love you") || textString.includes("you are hot") || textString.includes("i like you")) {
        // reply for i love you
        sendTextMessage(getRandom(repliesfForLove));
    } else if (textString.includes("how are you") || (textString.includes("hows going") || textString.includes("how its going" || textString.includes("how it's going") || textString.includes("what are you doing")))) {
        // reply for 'how are you' request
        sendTextMessage(getRandom(repliesfForHowAreYou));
    } else if (textString.includes("you know") && (textString.includes("bixby") || textString.includes("siri" || textString.includes("alexa") || textString.includes("cortana")))) {
        // reply for 'you know other chattingBots' request
        sendTextMessage(getRandom(repliesForVoiceAssistants));
    } else {
        setTimeout(() => {
            sendTextMessage(getRandom(repliesForCommandUnknown));
        }, 2000);
    }
}

function clearChat() {
    document.getElementById("listUL").innerHTML = "";
    waitAndResponce('intro');
}



function sendTextMessage(textToSend) {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.setAttribute("id", "sentlabel");
    dateLabel.id = "sentlabel";
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    greendiv.innerHTML = textToSend;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}


function sendResponse() {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ";
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}

function playSound() {
    audio.play();
}