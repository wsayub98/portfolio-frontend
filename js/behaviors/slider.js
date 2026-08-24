export async function initProjectSlider() {
    const list = document.getElementById("projectList");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    const cards = list.children;
    const totalCards = cards.length;
    const cardsPerView = 2;
    const maxIndex = Math.max(0, totalCards - cardsPerView);

    let currentIndex = 0;

    function update() {
        const cardWidth = cards[0].getBoundingClientRect().width;
        const gap = 10;
        const offset = currentIndex * (cardWidth + gap);
        list.style.transform = `translateX(-${offset}px)`;

        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex >= maxIndex;
    }

    prevBtn.addEventListener("click", () => {
        currentIndex = Math.max(0, currentIndex - 1);
        update();
    });

    nextBtn.addEventListener("click", () => {
        currentIndex = Math.min(maxIndex, currentIndex + 1);
        update();
    });
    
    window.addEventListener("resize", update);

    update();
}
