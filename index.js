let observer = new IntersectionObserver(entries  => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelector("#aboutBox").classList.add("fadeInLeft")

        }
    })
})

observer.observe(document.querySelector("#aboutme"));

observer = new IntersectionObserver(entries  => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelector("#tragetoriaBox").classList.add("fadeInRight")
        
        }
    })
})

observer.observe(document.querySelector(".blueSec"))

observer = new IntersectionObserver(entries  => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelector(".upline1").classList.add("fadeInLeft")
            document.querySelector(".upline2").classList.add("fadeInRight")
            document.querySelector(".downline").classList.add("fadeInBot")

        }
    })
})

observer.observe(document.querySelector("#timeSec"))


observer = new IntersectionObserver(entries  => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelector("#videoBox").classList.add("fadeInBot")

        }
    })
})

observer.observe(document.querySelector("#videoSec"))

