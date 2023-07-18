const links = document.querySelectorAll(".has-tooltip");
for (let link of links) {
    let hint = document.createElement("div");
    hint.classList.add("tooltip");
    hint.textContent = link.title;
    hint.dataset.position = "bottom";
    link.append(hint);
    link.addEventListener("click", showHint, true)
};

function showHint (e) {
    e.preventDefault();
    let link = e.target;
    let hint = e.target.querySelector(".tooltip");
    if (document.querySelector(".tooltip_active")) {
        let activeHint = document.querySelector(".tooltip_active");
        if (hint != activeHint) {
            activeHint.classList.toggle("tooltip_active");
        };
    };
    hint.classList.toggle("tooltip_active");
};