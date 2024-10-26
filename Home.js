function Flower1() {
    const Charity = document.getElementById("Charity");
    const Blurb = document.getElementById("Blurb");
    const More = document.getElementById("More");
    Charity.innerHTML = "The Jewish Education Project";
    Blurb.innerHTML = "The Jewish Education Project visits schools, camps, synagogues, and other locations to show kids how to apply values and learning to the real world. They also offer education about the history of, and conflicts surrounding Israel. They also give professional development and resources to educators about October 7th, that help build their understanding of the event.";
    document.getElementById('Flower1').src = 'JewishEducationProject.png'
};

function Flower2() {
    const Charity = document.getElementById("Charity");
    const Blurb = document.getElementById("Blurb");
    const More = document.getElementById("More");
    Charity.innerHTML = "HIAS";
    Blurb.innerHTML = "HIAS helps refugees from Israel and around the world resettle and provide them with legal support. They also respond to emergencies around the globe such as Israel and Gaza, Ukraine, and Sudan and Chad. Along with all of this they are actively involved in promoting economic inclusion by teaching people from around the world valuable skills that they wouldn’t learn anywhere else such as financial literacy and technical training.";
    document.getElementById('Flower2').src = 'HIAS.png'
};

function Flower3() {
    const Charity = document.getElementById("Charity");
    const Blurb = document.getElementById("Blurb");
    const More = document.getElementById("More");
    Charity.innerHTML = "Nature Israel"
    Blurb.innerHTML = "Nature Israel is an Israeli organization whose main goal is to protect the wildlife in and around Israel. For example, they are currently working on protecting ocean life in the Mediterranean Sea, Red Sea, and Gulf of Eilat. They are also big advocates of urban nature and actively promote it. Along with all of this, Nature Israel also offers Eco-Therapy to help deal with the PTSD caused by October 7th.";
    document.getElementById('Flower3').src = "NatureIsrael.png"
}

function Flower4() {
    const Charity = document.getElementById("Charity");
    const Blurb = document.getElementById("Blurb");
    const More = document.getElementById("More");
    Charity.innerHTML = "FIDF";
    Blurb.innerHTML = "FIDF is focused on supporting Israeli Defense Force soldiers in various ways. One of these ways is helping soldiers re-enter civilian life after their service is over. They also help soldiers with no immediate family in Israel by providing them with emotional support. FIDF also supports these soldiers by flying them out to their family between deployments.";    
    document.getElementById('Flower4').src = "FIDF.png";
} 

function Flower5() {
    const Charity = document.getElementById("Charity");
    const Blurb = document.getElementById("Blurb");
    const More = document.getElementById("More");
    Charity.innerHTML = "NECHAMA";
    Blurb.innerHTML = "NECHAM responds to emergencies and then helps affected communities bounce back. This year alone they have responded to the Iowa floods, Oklahoma tornados, and hurricanes Helene and Milton. After disasters they work to provide necessities such as food and water to affected communities.";    
    document.getElementById('Flower5').src = "NECHAMA.png";
} 

function Flower6() {
    const Charity = document.getElementById("Charity");
    const Blurb = document.getElementById("Blurb");
    const More = document.getElementById("More");
    Charity.innerHTML = "ADL";
    Blurb.innerHTML = "The ADL works to protect the rights, freedoms, and safety for Jews around the world. They work to eliminate antisemitism on college campuses, in the court system, and in the news. They also work to support the victims and the family of the victims of October 7th.";    
    document.getElementById('Flower6').src = "ADL.png";
} 

function More() {
    const Charity = document.getElementById("Charity");
    const link = document.getElementById("link");
    if (Charity.textContent === "Blue Flowers") {
        document.getElementById("More").style.display = "none";
    } else {
        document.getElementById("More").style.display = "block";
    }  

    if (Charity.textContent === "The Jewish Education Project") {
        link.href = "http://jewishedproject.org";
    };

    if (Charity.textContent === "HIAS") {
        link.href = "http://hias.org";
    };

    if (Charity.textContent === "Nature Israel") {
        link.href = "http://natureisrael.org";
    };

    if (Charity.textContent === "FIDF") {
        link.href = "http://fidf.org";
    };

    if (Charity.textContent === "NECHAMA") {
        link.href = "http://nechama.org";
    };

    if (Charity.textContent === "ADL") {
        link.href = "http://adl.org";
    };
};

setInterval(More, 5);