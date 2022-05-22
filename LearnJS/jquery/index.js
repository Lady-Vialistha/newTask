// $(document).ready(function () {
//     $("input").keyup(function (x) {
//         console.log(x.target.value);
//     });
// });

// $(document).ready(function () {
//     // var x = $("#p1").text();
//     // $("div").append(`<h1>${x}</h1>`);
//     // $("#p1").appendTo("#p2");
//     // $("#p2").prependTo("#p2");
//     // $("#p1").append("<p>ini append</p>");
//     // $("#p1").prepend("<p>ini prepend</p>");
//     // $("div").before("<p>before</p>");
//     // $("div").after("<p>after</p>");
//     $("p").wrap("<h1>");
//     $("#btn").click(function () {
//         $("#p1").toggleClass("myClass");
//         $("#p2").toggleClass("myClass");
//     });
// });

// $(document).ready(function () {
//     var arr = ["andi", "budi", "sasa"];
//     $.each(arr, function (i, val) {
//         console.log(val);
//     });
// });

// $(document).ready(function () {
//     var array = $("ul li").toArray();
//     $.each(array, function (i, val) {
//         console.log(val);
//     });
// });

$(document).ready(function () {
    $("input").keydown(function (x) {
        var code = x.which;
        if (code == 13) {
            $("ul").append(`<li>${x.target.value}</li>`);
            $(":text").val("");
        }
    });
});
