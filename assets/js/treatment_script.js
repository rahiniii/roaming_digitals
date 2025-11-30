document.addEventListener("DOMContentLoaded", () => {

    const listItems = document.querySelectorAll(".treatment-list li");
    const thumbs = document.querySelectorAll(".thumb");

    // When selecting treatment from LEFT list
    listItems.forEach(item => {
        item.addEventListener("click", () => {

            // remove active from all
            listItems.forEach(li => li.classList.remove("active"));
            thumbs.forEach(t => t.classList.remove("active"));

            // mark selected item
            item.classList.add("active");

            // find matching thumbnail
            const img = item.dataset.img;

            thumbs.forEach(t => {
                if (t.dataset.img === img) {
                    t.classList.add("active");
                }
            });
        });
    });


    // When selecting thumbnail on RIGHT
    thumbs.forEach(thumb => {
        thumb.addEventListener("click", () => {

            // remove active from all
            thumbs.forEach(t => t.classList.remove("active"));
            listItems.forEach(li => li.classList.remove("active"));

            // mark selected thumbnail
            thumb.classList.add("active");

            // find matching LEFT list item
            const img = thumb.dataset.img;

            listItems.forEach(li => {
                if (li.dataset.img === img) {
                    li.classList.add("active");
                }
            });
        });
    });

});
