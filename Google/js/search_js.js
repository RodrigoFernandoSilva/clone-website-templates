const mainSimilarUl = document.querySelector("#main-similar-ul");
const firstLi = mainSimilarUl.querySelectorAll("li")
// const firstLi = mainSimilarUl.querySelector("li:first-child");
const angleIcons = document.querySelectorAll("#main-similar img");

let isDragStart= false;
let prevPagex;
let prevScrollLeft;
let firstImgWidth = firstLi[0].clientWidth + 15
let scrollWidth = mainSimilarUl.scrollWidth - mainSimilarUl.clientWidth;

angleIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        if (icon.id === "angle-left") {
            const ulRectLeft = mainSimilarUl.getBoundingClientRect().left;

            for (let i = firstLi.length - 1; i > -1; i--) {
                if (firstLi[i].getBoundingClientRect().left < ulRectLeft) {
                    mainSimilarUl.scrollLeft -= mainSimilarUl.getBoundingClientRect().right - firstLi[i].getBoundingClientRect().right;
                    return;
                }
            }
        } else {
            const ulRectRight = mainSimilarUl.getBoundingClientRect().right;

            for (let i = 0; i < firstLi.length; i++) {
                if (firstLi[i].getBoundingClientRect().right > ulRectRight) {
                    mainSimilarUl.scrollLeft += firstLi[i].getBoundingClientRect().left - mainSimilarUl.getBoundingClientRect().left;
                    return;
                }
            }
        }
    })
});

const dragStart = (e) => {
    isDragStart = true;
    prevPagex = e.pageX || e.touches[0].pageX;
    prevScrollLeft = mainSimilarUl.scrollLeft;
}

const dragging = (e) => {
    if (!isDragStart) return;

    e.preventDefault();
    mainSimilarUl.classList.add("dragging");
    let positionDiff = (e.pageX || e.touches[0].pageX) - prevPagex;
    mainSimilarUl.scrollLeft = prevScrollLeft - positionDiff;
}

const dragStop = () => {
    isDragStart = false;
    mainSimilarUl.classList.remove("dragging");
}

mainSimilarUl.addEventListener("mousedown", dragStart);
mainSimilarUl.addEventListener("touchstart", dragStart);

mainSimilarUl.addEventListener("mousemove", dragging);
mainSimilarUl.addEventListener("touchmove", dragging);

mainSimilarUl.addEventListener("mouseup", dragStop);
mainSimilarUl.addEventListener("mouseleave", dragStop);
mainSimilarUl.addEventListener("touchend", dragStop);