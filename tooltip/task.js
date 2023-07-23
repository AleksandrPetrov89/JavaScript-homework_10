const links = document.querySelectorAll(".has-tooltip");
for (let link of links) {
    let hint = document.createElement("div");
    hint.classList.add("tooltip");
    hint.textContent = link.title;
    hint.dataset.position = "right";
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
    if (hint.classList.contains("tooltip_active")) {
        domRect= link.getBoundingClientRect();
        if (hint.dataset.position == "bottom" || hint.dataset.position == "top") {
            hint.style.left = `${domRect.left}px`;
            if (hint.dataset.position == "bottom") {
                hint.style.top = `${domRect.bottom}px`;
            } else {
                hint.style.top = `${domRect.top - hint.offsetHeight}px`;
            };    
        } else if (hint.dataset.position == "left" || hint.dataset.position == "right") {
            hint.style.top = `${domRect.top}px`;
            if (hint.dataset.position == "left") {
                hint.style.left = `${domRect.left - hint.offsetWidth}px`;
            } else {
                hint.style.left = `${domRect.right}px`;
            };
        };
    };
};