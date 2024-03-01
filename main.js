var speechRecognition=window.webkitSpeechRecognition;

var recognition = new speechRecognition();


function start()
{
    document.getElementById("textbox").innerHTML="";

    recognition.start();
}

recognition.onresult=function(event)
{
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML = content;
    if (content=="take my selfie")
    {
        console.log(content);
        speech();
    }

}

function speech()
{
    var syth = window.speechSynthesis;

    var text_speak = "taking your selfie in five seconds";

    var utterthis = new SpeechSynthesisUtterance(text_speak);

    syth.speak(utterthis);

    Webcam.attach("#camera");

    setTimeout(function()
    {
        take_snapshot();
        save();
    } 
    , 5000);
}

Webcam.set({

        height:250 , 
        width:360 , 
        image_format : "png" , 
        png_quality:90
});

function take_snapshot()
{
    Webcam.snap(function(data_uri)
    {
        document.getElementById("result").innerHTML = "<img id = 'capture_img' src = '"+data_uri+"'>";
    });
}

function save()
{
    link=document.getElementById("link");
    image=document.getElementById("capture_img").src;
    link.href=image;
    link.click();
}