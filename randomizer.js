
// data for holding which page I'm on
let pageNumber = 0

// content for pages
const pages = [
    { title: "O Living Always, Always Dying", background: "#FEFFC4", diamond: "#EDF200", poem: `<p>O Living always, always dying!</p> <p>O the burials of me past and present,</p> <p>O me while I stride ahead, material, visible, imperious as ever;</p> <p>O me, what I was for years, now dead, (I lament not, I am content;)</p> <p>O to disengage myself from those corpses of me, which I turn and look at where I cast them,</p> <p>To pass on, (O living! always living!) and leave the corpses behind.</p>` },
    { title: "Mannahatta", background: "#C4FFD1", diamond: "#7BFF98", poem: `<p>My city’s fit and noble name resumed,</p> <p>Choice aboriginal name, with marvellous beauty, meaning,</p> <p>A rocky founded island — shores where ever gayly dash the coming, going, hurrying sea waves.</p>`},
    { title: "Twilight", background: "#C4E2FF", diamond:"#379FFF", poem: `<p>The soft voluptuous opiate shades,</p> <p>The sun just gone, the eager light dispell'd—(I too will soon be gone, dispell'd,) </p> <p>A haze—nirwana—rest and night—oblivion.</p>` },
    { title: "Sounds of the Winter", background:"#CFC4FF", diamond:"#9E86FF", poem: `<p>Sounds of the winter too,</p> <p>Sunshine upon the mountains—many a distant strain</p> <p>From cheery railroad train—from nearer field, barn, house,</p> <p>The whispering air—even the mute crops, garner'd apples, corn,</p> <p>Children's and women's tones—rhythm of many a farmer and of flail,</p> <p>An old man's garrulous lips among the rest, Think not we give out yet,</p> <p>Forth from these snowy hairs we keep up yet the lilt.</p>` },
   { title: "Song Of Myself", background: "#F5D9FF", diamond: "#E086FF", poem: `</p><span class="versaillen">I celebrate </span>myself, and sing myself,</p> 
   <p>And what I assume you shall assume,</p> <p>For every atom belonging to me as good belongs to you.</p> <p class="space">I loafe and invite my soul,</p> <p>I lean and loafe at my ease observing a spear of summer grass.</p> <p class="space">My tongue, every atom of my blood, form'd from this soil, this air,</p> <p>Born here of parents born here from parents the same, and their parents the same,</p> <p>I, now thirty-seven years old in perfect health begin,</p> <p>Hoping to cease not till death.</p> <p class="space">Creeds and schools in abeyance,</p> <p>Retiring back a while sufficed at what they are, but never forgotten,</p> <p>I harbor for good or bad, I permit to speak at every hazard,</p> <p>Nature without check with original energy.</p>` }
]

// tag declarations
const nextTag = document.querySelector("footer img.next")
const previousTag = document.querySelector("footer img.prev")
const randomTag = document.querySelector("footer img.random")
const titleTag = document.querySelector("h1")
const poemTag = document.querySelector("section div.poem-text")
const poem = document.querySelector("section div.poem")
const diamondTag = document.querySelector("section div.diamond")
const bodyTag = document.querySelector("body")
const backgroundTag = document.querySelector(".background")
const footerTag = document.querySelector("footer")


// increase page number
const next = function () {
    pageNumber = pageNumber + 1

    if (pageNumber > pages.length - 1) {
        pageNumber = 0
    }

    updateSection()
}

// decrease page number
const previous = function () {
    pageNumber = pageNumber - 1

    if (pageNumber < 0) {
        pageNumber = pages.length - 1
    }

    updateSection()
}

// randomizer
const random = function () {
    pageNumber = Math.floor(Math.random() * pages.length)

    updateSection()
}

// update content & style functions
function updateSection() {

    // Ausblenden ohne Transition
    poem.style.opacity = 0;
    poem.style.transition = "none";

    // 3 Millisekunden warten, dann mit Transition einblenden
    setTimeout( ()=> {
        poem.style.transition = "opacity .5s linear";
        poem.style.opacity = 1;
    }, 3 );

    titleTag.innerHTML = pages[pageNumber].title
    poemTag.innerHTML = pages[pageNumber].poem
    diamondTag.style.background = pages[pageNumber].diamond
    backgroundTag.style.backgroundColor = pages[pageNumber].background
    // footerTag.style.backgroundColor = pages[pageNumber].background
}


// on click events 
nextTag.addEventListener("click", function () {
    next() 
})

previousTag.addEventListener("click", function () {
    previous()
})

randomTag.addEventListener("click", function() {
    random()
})

// on arrow key pressing
document.addEventListener("keyup", function (event) {
    console.log(event)

    if (event.key == "ArrowRight") {
        next()
    } 
    
    if (event.key == "ArrowLeft") {
        previous()
    }
})