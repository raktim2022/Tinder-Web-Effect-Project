let users = [
    {
        profilePic: "./Media/istockphoto-996380760-170667a.png",
        displayPic: "./Media/istockphoto-996380760-170667a.png",
        pendingMessage: 4,
        location: "Delhi, India",
        name: "Sophia",
        age: 23,
        interests: [{
            icon: `<i class="text-sm ri-music-2-line"></i>`,
            interest:"Music"
        }, {
            icon: `<i class="ri-quill-pen-fill"></i>`,
            interest:"Writting"
        }],
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad impedit minima laborum, obcaecati illum dicta error voluptatem vero! Reiciendis, ad.",
        isFriend:null
    },
    {
        profilePic: "./Media/photo-1467632499275-7a693a761056.png",
        displayPic: "./Media/photo-1467632499275-7a693a761056.png",
        pendingMessage: 4,
        location: "Kolkata, India",
        name: "Danison",
        age: 30,
        interests: [{
            icon: `<i class="text-sm ri-music-2-line"></i>`,
            interest:"Music"
        }, {
            icon: `<i class="ri-quill-pen-fill"></i>`,
            interest:"Writting"
        }],
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad impedit minima laborum, obcaecati illum dicta error voluptatem vero! Reiciendis, ad.",
        isFriend:null
    },
    {
        profilePic: "./Media/photo-1512310604669-443f26c35f52.png",
        displayPic: "./Media/photo-1512310604669-443f26c35f52.png",
        pendingMessage: 4,
        location: "Chennai, India",
        name: "Ilisia",
        age: 20,
        interests: [{
            icon: `<i class="text-sm ri-music-2-line"></i>`,
            interest:"Music"
        }, {
            icon: `<i class="ri-quill-pen-fill"></i>`,
            interest:"Writting"
        }],
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad impedit minima laborum, obcaecati illum dicta error voluptatem vero! Reiciendis, ad.",
        isFriend:null
    },
    {
        profilePic: "./Media/photo-1571348635303-dabc89cff3be.png",
        displayPic: "./Media/photo-1571348635303-dabc89cff3be.png",
        pendingMessage: 4,
        location: "Mumbai, India",
        name: "Rafela",
        age: 25,
        interests: [{
            icon: `<i class="text-sm ri-music-2-line"></i>`,
            interest:"Music"
        }, {
            icon: `<i class="ri-quill-pen-fill"></i>`,
            interest:"Writting"
        }],
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad impedit minima laborum, obcaecati illum dicta error voluptatem vero! Reiciendis, ad.",
        isFriend:null
    },
];


function select(elem) {
    return document.querySelector(elem)
}



let curr = 0;
let isAnimating = false;

function setData(index) {
    select(".prflimg img").src = users[index].profilePic;
    select(".badge h5").textContent = users[index].pendingMessage;
    select(".location h3").textContent = users[index].location;
    select(".name").textContent = users[index].name;
    select(".age").textContent = users[index].age;
    select(".bio p").textContent = users[index].bio;

    let clutter=""
    users[index].interests.forEach(function (interest) { 
        clutter+=`<div class="tag flex items-center bg-white/30 px-5 py-2 rounded-full gap-3">
                            ${interest.icon}
                            <h3 class="text-sm tracking-tight capitalize">${interest.interest}</h3>
                        </div>`
    })
    select(".tags").innerHTML = clutter
    
}

(function setInitial() {
    select(".maincard img").src = users[curr].displayPic;
    select(".incomingcard img").src = users[curr + 1]?.displayPic;
    
    setData(curr)
    curr = 2;
})();

function imageChange() {
    if (!isAnimating) {
        isAnimating = true;
        let t1 = gsap.timeline({
        onComplete: function () {
            let main = select(".maincard");
            let incomingcard = select(".incomingcard");
            isAnimating = false;
            incomingcard.classList.remove("z-[2]");
            incomingcard.classList.add("z-[3]");
            incomingcard.classList.remove("incomingcard");

            main.classList.remove("z-[3]");
            main.classList.add("z-[2]");
            gsap.set(main, {
                scale: 1,
                opacity:1,
            })

            if (curr === users.length) curr = 0;
            select(".maincard img").src = users[curr].displayPic;
            curr++;


            main.classList.remove("maincard");

            incomingcard.classList.add("maincard");
            main.classList.add("incomingcard");


        }
    });
    t1.to(".maincard", {
        scale: 1.1,
        opacity: 0,
        ease: Circ,
        duration:0.9
    },"start")
    .from(".incomingcard", {
        scale: .9,
        opacity: 0,
        ease: Circ,
        duration:1.1
    },"start")
    }
    
};

let deny = select(".deny")
let accept = select(".accept")
deny.addEventListener("click", function () { 
    imageChange();
    setData(curr-1);
    gsap.from(".details .element", {
    y: "100%",
    opacity: 0,
    stagger: .06,
    ease: Power4.easeInOut,
    duration:1.5
})
});
accept.addEventListener("click", function () { 
    imageChange();
    setData(curr-1);
    gsap.from(".details .element", {
    y: "100%",
    opacity: 0,
    stagger: .06,
    ease: Power4.easeInOut,
    duration:1.5
})
});

(function containCreator() {
    document.querySelectorAll(".element").forEach(function (element) {
            let div = document.createElement("div");
            div.classList.add(`${element.classList[1]}container`,'overflow-hidden');
            div.appendChild(element);
            select(".details").appendChild(div);
        })
})();


