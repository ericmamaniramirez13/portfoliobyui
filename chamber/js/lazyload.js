const images = document.querySelectorAll("[data-src]");

function preloadImage(img){
    const src = img.getAttribute("data-src");
    if(!src){
        return;
    }
    
    img.src = src
    img.addEventListener("load", () => img.removeAttribute("data-src"))

}
imgOptions = {
    threshold: 1,
    rootMargin: "0px 0px 50px 0px"
};

const imgObserver = new IntersectionObserver( (entires, imgObserver) => {
    entires.forEach(entry => {
        if (!entry.isIntersecting){
            return
        } else{
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target)
        }
    })
}, imgOptions);

images.forEach(image =>{
    imgObserver.observe(image);
});