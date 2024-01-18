document.getElementById("start").addEventListener("click", function() {
    for (let i = 0; i < 100; i++) {
        const particle = document.createElement("div");
        particle.classList.add("particle");
        document.getElementById("particles").appendChild(particle);
    }
});
