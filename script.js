// debugger;
let sentences = void 0;

fetch("./cas.json").then((e)=>{
  e.json().then((f)=>{sentences = f; return void 0;}, (f)=>void 0)
}, (e)=>void 0);

function randelem(arr)
{
  return arr[Math.floor(Math.random()*arr.length)];
}

let generatedSentences;

let sentenceNum = 0;

function create(lang)
{
  const puncnum = Math.floor(Math.random()*4);
  let retval = "";
  retval += sentences[lang].punc[1][puncnum];
  retval += randelem(sentences[lang].beginnings) + " ";
  retval += randelem(sentences[lang].endings);
  retval += sentences[lang].punc[0][puncnum];
  return retval;
}

function generate()
{
  const amount = document.getElementById("number").value;
  const lang = document.getElementById("lang").value;
  generatedSentences = [];
  for (let i = 0; i < amount; i++)
  {
    switch(lang)
    {
      case "spanish":
      case "español":
        generatedSentences.push(create("spanish"));
        break;
      default:
        generatedSentences.push(create("english"));
    }
  }
  document.getElementById("sentence").innerHTML = generatedSentences[0] + "<br /> Sentence 1 of " + amount;
  sentenceNum = 0;
}

function forward()
{
  let display = document.getElementById("sentence");
  sentenceNum++;
  sentenceNum %= generatedSentences.length;
  display.innerHTML = generatedSentences[sentenceNum] + "<br />Sentence " + `${sentenceNum + 1} of ${generatedSentences.length}`
}

function back()
{
  let display = document.getElementById("sentence");
  sentenceNum--;
  sentenceNum %= generatedSentences.length;
  display.innerHTML = generatedSentences[sentenceNum] + "<br />Sentence " + `${sentenceNum + 1} of ${generatedSentences.length}`
}

document.getElementById("sentence").innerHTML = "{ }";

document.getElementById("go").onclick = generate;
document.getElementById("back").onclick = back;
document.getElementById("forward").onclick = forward;