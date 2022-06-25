let a = new XMLHttpRequest();
a.open("GET", "./cas.json", true);
let sentences;
a.onload = () => 
{
  sentences = JSON.parse(a.responseText);
};
a.send();
document.getElementById("sentence").innerHTML = JSON.stringify(sentences);
