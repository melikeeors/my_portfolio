$(document).ready(function () {
    $("#green").click(function () {
        $(".project").css({
            backgroundColor: "rgb(228 228 210)",
        });
        $(".project h3").css({
            color: "black",
        });
        $(".project-button").css({
            backgroundColor: "rgb(54, 84, 44)",
            color: "white"
        });
        $(".project-button").hover(function () {
            $(this).css({
                backgroundColor: "white",
                color: "rgb(54, 84, 44)",
                border: "0.4rem solid rgb(54, 84, 44)"
            });
        }, function () {
            $(this).css({
                backgroundColor: "rgb(54, 84, 44)",
                color: "white",
                border: "0rem solid black",
            });
        });
    });
    $("#blue").click(function () {
        $(".project").css({
            backgroundColor: "rgb(167, 192, 197)",
        });
        $(".project h3").css({
            color: "black",
        });
        $(".project-button").css({
            backgroundColor: "rgb(31, 44, 60)",
            color: "white"
        });
        $(".project-button").hover(function () {
            $(this).css({
                backgroundColor: "white",
                color: "rgb(31, 44, 60)",
                border: "0.4rem solid rgb(31, 44, 60)"
            });
        }, function () {
            $(this).css({
                backgroundColor: "rgb(31, 44, 60)",
                color: "white",
                border: "0rem solid black",
            });
        });
    });
    $("#red").click(function () {
        $(".project").css({
            backgroundColor: "black",
        });
        $(".project h3").css({
            color: "white",
        });
        $(".project-button").css({
            backgroundColor: "rgb(65 1 0)",
            color: "white"
        });
        $(".project-button").hover(function () {
            $(this).css({
                backgroundColor: "white",
                color: "rgb(65 1 0)",
                border: "0.4rem solid rgb(65 1 0)"
            });
        }, function () {
            $(this).css({
                backgroundColor: "rgb(65 1 0)",
                color: "white",
                border: "0rem solid black",
            });
        });
    });
    $("#pink").click(function () {
        $(".project").css({
            backgroundColor: "rgb(233 233 233)",
        });
        $(".project h3").css({
            color: "black",
        });
        $(".project-button").css({
            backgroundColor: "rgb(163 86 112)",
            color: "white"
        });
        $(".project-button").hover(function () {
            $(this).css({
                backgroundColor: "white",
                color: "rgb(163 86 112)",
                border: "0.4rem solid rgb(163 86 112)"
            });
        }, function () {
            $(this).css({
                backgroundColor: "rgb(163 86 112)",
                color: "white",
                border: "0rem solid black",
            });
        });
    });
});