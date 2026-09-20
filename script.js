const stars = document.getElementById("stars");
const clock = document.getElementById("clock");
const date = document.getElementById("date");
const quote = document.getElementById("quote");
const change = document.getElementById("change");

const quotes = [
    "Somewhere, someone is looking at the same sky.",
    "The night is allowed to be quiet.",
    "You made it to this moment.",
    "Not every day needs to be extraordinary.",
    "There is something nice about not knowing what comes next.",
    "For a little while, nowhere else matters.",
    "The world can wait.",
    "Stay here for a second."
];

function createStars() {
    stars.innerHTML = "";

    const amount = Math.floor(
        (window.innerWidth * window.innerHeight) / 4500
    );

    for (let i = 0; i < amount; i++) {
        const star = document.createElement("div");

        star.className = "star";

        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 75 + "%";

        star.style.setProperty(
            "--duration",
            (Math.random() * 4 + 2) + "s"
        );

        star.style.animationDelay =
            Math.random() * 5 + "s";

        stars.appendChild(star);
    }
}

function updateClock() {
    const now = new Date();

    clock.textContent = now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
    });

    date.textContent = now.toLocaleDateString([], {
        weekday: "long",
        month: "long",
        day: "numeric"
    });
}

let quoteIndex = Math.floor(Math.random() * quotes.length);

function updateQuote() {
    quote.style.opacity = "0";

    setTimeout(() => {
        quote.textContent = quotes[quoteIndex];
        quote.style.opacity = "1";
    }, 300);
}

change.addEventListener("click", () => {
    quoteIndex++;

    if (quoteIndex >= quotes.length) {
        quoteIndex = 0;
    }

    updateQuote();
});

window.addEventListener("resize", createStars);

createStars();
updateClock();
updateQuote();

setInterval(updateClock, 1000);
