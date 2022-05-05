$(document).ready(function() {

    /* Subscribe notification is hidden. */
    $('#subcribe-alert').hide();

    /* Do not dismiss completely elements from dom. Just hide them. */
    $("[data-hide]").on("click", function() {
        $("." + $(this).attr("data-hide")).fadeOut();
    });

    $("#subscribeEmailForm").submit(function(e) {
        const emailAddress = $("#subscribe-email").val();
        console.log(`Email address is ${emailAddress}`);
        $.post("/subscribe", {email: emailAddress}).done(function(data) {
            if (undefined !== data.error && 0 === data.error) {
                /* Display notification. */
                $("#subcribe-alert").show();
            } else {
                /* Display error notification. */
            }
        }).fail(function() {
            /* Display error notification. */
        });
        e.preventDefault();
    });

    $("#subscribe-button").click(function(e) {
        $("#subscribeEmailForm").submit();
    });
});