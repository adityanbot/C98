var speechRecognition=window.webkitSpeechRecognition;
var Recognition=new speechRecognition();
function start()
{
    document.getElementById("textbox").innerHTML="";
    Recognition.start();
}

recognition.onresult=function(event)
{
    console.log(event);
    var content=event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=content;
}