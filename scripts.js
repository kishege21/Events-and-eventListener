$("#button1").click(() => {
    alert("Yeah, you clicked me")
});

$("#button2").click(() => {
    $("#button1").text("changed text")
});

$("#button3").click(() => {
    $("button").css("background-color", "yellow")
});