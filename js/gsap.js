
gsap.registerPlugin(ScrollTrigger);
const tl =  gsap.timeline({default :{
    ease:"power3.inOut",duration:1,
}})


gsap.to(".hero-icons",{
    scrollTrigger: {
        trigger: ".hero-icons",
        scrub: 1,
    },
    y:50,
})

gsap.to(".ib-icons",{
    scrollTrigger: {
        trigger: ".ib-icons",
        scrub: 1,
    },
    y:50,
})


gsap.to(".copy-trade-icons",{
    scrollTrigger: {
        trigger: ".copy-trade-icons",
        scrub: 1,
    },
    y:50,
})

 

 

 
 