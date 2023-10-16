function scrollToElement(elementSelector, instance = 0){
    const elements = document.querySelectorAll(elementSelector);
    if (elements.length > instance) {
        elements[instance].scrollIntoView({ behavior: "smooth" });
    }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");

link1.addEventListener("click", () => {
    scrollToElement(".header");
});

link2.addEventListener("click", () => {
    scrollToElement(".column");
});

const joinNowLinks = document.querySelectorAll(".container .card a[href='#']");
joinNowLinks.forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        
        const discordInviteLink = "https://discord.gg/Zg6ZZUk3Ku";
        
        window.open(discordInviteLink, "_blank");
    });
});

const discordLink = document.querySelector(".socials a[href='#'] i.ri-discord-line");
discordLink.parentElement.addEventListener("click", (event) => {
    event.preventDefault();
    
    const discordLink = "https://discord.gg/Zg6ZZUk3Ku";
    
    window.open(discordLink, "_blank");
});

const githubLink = document.querySelector(".socials a[href='#'] i.ri-github-line");
githubLink.parentElement.addEventListener("click", (event) => {
    event.preventDefault();
    
    const githubLink = "https://github.com/DqnutDevelopment";
    
    window.open(githubLink, "_blank");
});


