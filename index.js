$("document").ready(function () {
    var value = "";
    $("#name").change(function () {
        var input = $(this).val();
        value = input;
    });
    $("ol").on("click", ".btnX", ".li", function () {
        $(this).parent("li").fadeOut(300);
    });
    $("#buttonSubmit").click(function () {
        $("ol").append(
            '<li class="li">' + value + '<button class="btnX">X</button></li>'
        );
        $("#name").val("");
    });
});
