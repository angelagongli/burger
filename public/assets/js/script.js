$(function() {
    $(".devour-btn").on("click", function(event) {
        const id = $(this).data("id");

        $.ajax("/api/burgers/" + id, {
            type: "PUT"
        }).then( function() {
            console.log(`Deleted burger ${id} using AJAX!`);
            location.reload();
        });
    });

    $(".burger-form").on("submit", function(event) {
        event.preventDefault();

        const burgerName = $("#burger-name").val().trim();

        $.post("/api/burgers", {burgerName : burgerName}, function() {
            console.log(`Added burger ${burgerName} using AJAX!`);
            location.reload();
        });
    });
});
