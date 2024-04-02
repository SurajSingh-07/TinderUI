let users = [
  {
    profilePic:
      "https://images.unsplash.com/photo-1502323777036-f29e3972d82f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    displayPic:
      "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    pendingMsg: 4,
    locaton: "Jabalpur, India",
    name: "Nancy",
    age: 20,
    interests: [
      {
        icon: `<i class="ri-women-fill"></i>`,
        interest: "Dance",
      },
      {
        icon: `<i class="ri-emoji-sticker-line"></i>`,
        interest: "Sleeping",
      },
    ],
    bio: "Nanc ipsum dolor sit amet, consectetur adipisicing elit. Deserunt distinctio, provident laboriosam labore.",
    isFreind: null,
  },
  {
    profilePic:
      "https://images.unsplash.com/photo-1532073150508-0c1df022bdd1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
    displayPic:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    pendingMsg: 3,
    locaton: "Kota, India",
    name: "Hada",
    age: 22,
    interests: [
      {
        icon: `<i class="ri-headphone-fill"></i>`,
        interest: "Music",
      },
      {
        icon: `<i class="ri-book-open-fill"></i>`,
        interest: "Reading",
      },
    ],
    bio: "HAda Sexy Sam ipsum dolor sit amet, consectetur adipisicing elit. Deserunt distinctio, provident laboriosam labore.",
    isFreind: null,
  },
  {
    profilePic:
      "https://images.unsplash.com/photo-1586752847555-97759e620aeb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    displayPic:
      "https://images.unsplash.com/photo-1609505849320-29530bcb2d26?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    pendingMsg: 4,
    locaton: "Varanasi, India",
    name: "Shweta",
    age: 20,
    interests: [
      {
        icon: `<i class="ri-women-fill"></i>`,
        interest: "Dance",
      },
      {
        icon: `<i class="ri-slideshow-3-fill"></i>`,
        interest: "Reel",
      },
    ],
    bio: "SHweta ipsum dolor sit amet, consectetur adipisicing elit. Deserunt distinctio, provident laboriosam labore.",
    isFreind: null,
  },
  {
    profilePic:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    displayPic:
      "https://images.unsplash.com/photo-1524255684952-d7185b509571?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    pendingMsg: 2,
    locaton: "Lucknow, India",
    name: "Deepti",
    age: 21,
    interests: [
      {
        icon: `<i class="ri-movie-2-fill"></i>`,
        interest: "Movies",
      },
      {
        icon: `<i class="ri-suitcase-3-fill"></i>`,
        interest: "Traveling",
      },
    ],
    bio: "Deep ipsum dolor sit amet, consectetur adipisicing elit. Deserunt distinctio, provident laboriosam labore.",
    isFreind: null,
  },
  {
    profilePic:
      "https://images.unsplash.com/photo-1526413232644-8a40f03cc03b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    displayPic:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    pendingMsg: 1,
    locaton: "Delhi, India",
    name: "Sakshi",
    age: 23,
    interests: [{
        icon: `<i class="ri-football-fill"></i>`,
        interest: "Football",
    }, {
        icon: `<i class="ri-tv-2-fill"></i>`,
        interest: "Anime"
    }],
    bio: "Saks ipsum dolor sit amet, consectetur adipisicing elit. Deserunt distinctio, provident laboriosam labore.",
    isFreind: null,
  },
];

function select(elem) {
  return document.querySelector(elem);
}

let curr = 0;
let isAnimating = false;

function setData(index){
    select(".prflimg img").src = users[index].profilePic;
  select(".badge div").textContent = users[index].pendingMsg;
  select(".location h3").textContent = users[index].locaton;
  select(".name h1:nth-child(1)").textContent = users[index].name;
  select(".name h1:nth-child(2)").textContent = users[index].age;

  let clutter = "";
  users[index].interests.forEach(function (interests) {
    clutter += `<div class="tag flex gap-2 items-center bg-white/30 px-3 py-1 rounded-full">
    ${interests.icon}
    <h3 class="text-sm tracking-tight">${interests.interest}</h3>
</div>`;
  });
  select(".tags").innerHTML = clutter;

  select(".bio p").textContent = users[index].bio;
}

(function setInitaial() {
  select(".maincard img").src = users[curr].displayPic;
  select(".incomingcard img").src = users[curr + 1]?.displayPic;

  setData(curr);

  curr = 2;
})();


function imageChange(){
    if(!isAnimating){
        isAnimating = true;
        let tl = gsap.timeline({
            onComplete: function(){
                isAnimating = false;
                let main = select(".maincard");
                let incoming = select(".incomingcard");
    
                incoming.classList.remove("z-[2]");
                incoming.classList.add("z-[3]");
                incoming.classList.remove("incomingcard");
    
                main.classList.remove("z-[3]");
                main.classList.add("z-[2]");
                gsap.set(main, {
                    scale: 1,
                    opacity: 1
                })
                if(curr === users.length) curr = 0;
                select(".maincard img").src = users[curr].displayPic;
                curr++;
                main.classList.remove("maincard");
                incoming.classList.add("maincard");
                main.classList.add("incomingcard");
            }
        });
    
        tl.to(".maincard", {
            scale: 1.1,
            opacity: 0,
            ease: Circ,
            duration: .9
        }, "a")
        .from(".incomingcard", {
            scale: .9,
            opacity: 0,
            ease: Circ,
            duration: 1.1
        }, "a")
    }
}


let deny = select(".deny");
let accept = select(".accept");

deny.addEventListener("click", function () {
    imageChange();
    setData(curr-1);
    gsap.from(".details .element",{
        y: "100%",
        stagger: .06,
        ease: Power4.easeInOut,
        duration: 1.5
    })
});

accept.addEventListener("click", function(){
    imageChange();
    setData(curr-1);
    gsap.from(".details .element",{
        y: "100%",
        stagger: .06,
        ease: Power4.easeInOut,
        duration: 1.5
    })
});


(function containerCreator(){
    document.querySelectorAll(".element").forEach(
        function(element){
            let div = document.createElement("div");
            div.classList.add(`${element.classList[1]}container`, 'overflow-hidden');
            div.appendChild(element);
            select(".details").appendChild(div);
        }
    )
})();

