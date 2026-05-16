var typed = new Typed(".text", {
    strings: ["FrontEnd Developer", "Web Developer", "Software Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

document.getElementById("connectBtn").addEventListener("click", () => {
    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });
});

document.getElementById("aboutBtn").addEventListener("click", () => {
    document.getElementById("about").scrollIntoView({
        behavior: "smooth"
    });
});
const slides = document.querySelectorAll(".about-slide");
const nextBtn = document.getElementById("nextSlide");

let currentSlide = 0;

nextBtn.addEventListener("click", () => {
    slides[currentSlide].classList.remove("active");

    currentSlide++;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    slides[currentSlide].classList.add("active");
});

const aboutButtons = document.querySelectorAll('a[href="#about"], #aboutBtn');
const aboutImg = document.querySelector(".about-img");
const aboutText = document.querySelector(".about-text");

function triggerAboutAnimation() {
    aboutImg.classList.remove("animate");
    aboutText.classList.remove("animate");

    void aboutImg.offsetWidth;
    void aboutText.offsetWidth;

    aboutImg.classList.add("animate");
    aboutText.classList.add("animate");
}

aboutButtons.forEach(button => {
    button.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector("#about").scrollIntoView({
            behavior: "smooth"
        });

        setTimeout(() => {
            triggerAboutAnimation();
        }, 500);
    });
});

const educationBoxes = document.querySelectorAll(".education-box");

function triggerEducationAnimation() {
    educationBoxes.forEach((box, index) => {
        box.classList.remove("animate");

        setTimeout(() => {
            box.classList.add("animate");
        }, index * 300);
    });
}

document.querySelectorAll('a[href="#education"]').forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        document.getElementById("education").scrollIntoView({
            behavior: "smooth"
        });

        setTimeout(() => {
            triggerEducationAnimation();
        }, 700);
    });
});

const skillBoxes = document.querySelectorAll(".skills-box");
const skillsSection = document.querySelector("#skills");

let skillsAnimated = false;

function triggerSkillsAnimation() {
    skillBoxes.forEach((box, index) => {
        box.classList.add("animate");
    });

    skillsAnimated = true;
}

/* Trigger only once on scroll */
window.addEventListener("scroll", () => {
    const top = skillsSection.getBoundingClientRect().top;

    if (top < window.innerHeight - 100 && !skillsAnimated) {
        triggerSkillsAnimation();
    }
});

/* Replay only when nav clicked */
document.querySelectorAll('a[href="#skills"]').forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        skillsSection.scrollIntoView({
            behavior: "smooth"
        });

        skillBoxes.forEach(box => box.classList.remove("animate"));

        setTimeout(() => {
            triggerSkillsAnimation();
        }, 600);
    });
});

// PROJECTS SLIDER

const projectSlides = document.querySelectorAll(".project-card");
const nextProjectBtn = document.getElementById("nextProject");
const projectsLink = document.querySelector('a[href="#projects"]');

let currentProject = 0;

/* Show specific project */
function showProject(index) {
    projectSlides.forEach((slide) => {
        slide.classList.remove("active");
    });

    projectSlides[index].classList.add("active");
}

/* Arrow button click */
nextProjectBtn.addEventListener("click", () => {
    currentProject++;

    if (currentProject >= projectSlides.length) {
        currentProject = 0;
    }

    showProject(currentProject);
});

/* Navbar click animation */
projectsLink.addEventListener("click", function(e) {
    e.preventDefault();

    document.querySelector("#projects").scrollIntoView({
        behavior: "smooth"
    });

    currentProject = 0;

    setTimeout(() => {
        showProject(currentProject);
    }, 600);
});

/* Initial project */
showProject(0);

document.addEventListener("DOMContentLoaded", () => {

    const contactSection = document.getElementById("contact");
    const cards = document.querySelectorAll(".contact-card");

    function animateCards() {

        cards.forEach((card, i) => {

            // RESET animation first
            card.classList.remove("show");

            void card.offsetWidth; // FORCE reflow (important trick)

            setTimeout(() => {
                card.classList.add("show");
            }, i * 120);

        });
    }

    // Scroll trigger
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCards();
            }
        });
    }, {
        threshold: 0.3
    });

    if (contactSection) {
        observer.observe(contactSection);
    }

    // Navbar / anchor click trigger (IMPORTANT FIX)
    document.querySelectorAll('a[href="#contact"]').forEach(link => {
        link.addEventListener("click", () => {

            setTimeout(() => {
                animateCards();
            }, 500); // wait for scroll animation

        });
    });

});

fetch("https://portfolio-backend-fm0n.onrender.com/api/projects")
    .then(res => res.json())
    .then(data => {
        const projectContainer = document.querySelector("#projects .cards");
        projectContainer.innerHTML = "";

        data.forEach(project => {
            const card = document.createElement("div");
            card.classList.add("card");

            card.innerHTML = `
                <h3>${project.title}</h3>
                <p>${project.description}</p>
            `;

            projectContainer.appendChild(card);
        });
    })
    .catch(err => console.error("Backend not running:", err));