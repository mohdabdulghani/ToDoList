// console.log("hello world")


const newElement = () => {
    var li=document.createElement("li")
    var inputValue = document.getElementById("myInput").value
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if(inputValue==""){
        alert("you must enter something")

    }else{
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value=" ";
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className="close";
    span.appendChild(txt);
    li.appendChild(span);
    var close = document.getElementsByClassName("close")
    for(var i=0; i<close.length; i++){
        close[i].onclick = function(){
            var div = this.parentElement;
            div.style.display="none"; 
            // console.log("helelo world");
        }
    }
}
var list = document.querySelector("ul")
list.addEventListener(click,function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
},false)



// var TextNode = document.getElementsByTagName("LI");
// var i;
// for(i=0;i<TextNode.length;i++){
//     var span = document.createElement("SPAN")
//     var txt = document.createTextNode("\u00D7");
//     span.className="close"
//     span.appendChild(txt);
//     TextNode[i].appendChild(span)
// }
// var close = document.getElementsByClassName("close");
// var i;
// for(i=0;i<close.length; i++){
//     close[i].onclick=function(){
//         // console.log("hello world")
//         var div = this.parentElement;
//         div.style.display="none";
//     }
// }
