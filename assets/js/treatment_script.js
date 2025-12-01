document.addEventListener("DOMContentLoaded", () => {

    const listItems = document.querySelectorAll(".treatment-list li");
    const thumbs = document.querySelectorAll(".thumb");
    const thumbRow = document.querySelector(".thumb-row");

    // LEFT CLICK
    listItems.forEach(item => {
        item.addEventListener("click", () => {
            const img = item.dataset.img;

            // remove active states
            listItems.forEach(li => li.classList.remove("active"));
            thumbs.forEach(t => t.classList.remove("active"));

            item.classList.add("active");

            thumbs.forEach(t => {
                if (t.dataset.img === img) {

                    t.classList.add("active");

                    // move this thumb to first
                    thumbRow.prepend(t);
                }
            });
        });
    });

    // RIGHT CLICK
    thumbs.forEach(thumb => {
        thumb.addEventListener("click", () => {
            const img = thumb.dataset.img;

            // remove active states
            thumbs.forEach(t => t.classList.remove("active"));
            listItems.forEach(li => li.classList.remove("active"));

            thumb.classList.add("active");

            // move clicked thumb first
            thumbRow.prepend(thumb);

            listItems.forEach(li => {
                if (li.dataset.img === img) {
                    li.classList.add("active");
                }
            });
        });
    });

});
