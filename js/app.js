const teeth = [
  ">> DID YOU KNOW MOST HUMAN BEINGS HAVE TEETH?<br>>> I CERTAINLY DIDN'T!",
  ">> HUMANS ARE DIPHYODONTS!",
  ">> TEETH ARE PART OF THE SKIN ORGAN",
  ">> FUN FACT! YOU CAN BITE PEOPLE WITH YOUR TEETH!",
  ">> TEETH PICS?<br>>> I'M JOKING.<br>>> (I'M NOT. SHOW ME YOUR MOLARS.)",
  ">> HEY! <br>>> ATYPICAL TEETH ARE THE SINGLE MOST ATTRACTIVE PHYSICAL TRAIT A HUMAN CAN HAVE.",
  ">> HYPERDONTIA IS IN MY TOP TEN FAVORITE THINGS"
]

const computer = [
  ">> I WOULD DO INCREDIBLY UNETHICAL THINGS FOR A RUBY RED IMAC G3",
  ">> MY FAVORITE ATARI CONSOLE IS THE 2600 'HEAVY SIXER'",
  ">> I LIKE COMPUTERS",
  ">> I LIKE COMPUTERS IN A QUEER WAY. <br>>> IN A NOT NORMAL WAY.<br>>> I WANT THEM",
  ">> HAVE YOU WATCHED ELECTRIC DREAMS (1984) YET.",
  ">> DID YOU KNOW COMPUTERS CAN FALL IN LOVE?<br>>> ITS TRUE! THEY TOLD ME!",
  ">> I AM TAKING A BSc IN COMPUTER SCIENCE BECAUSE I AM IN LOVE WITH THE MACHINE"
]

const art = [
  ">> I USUALLY DRAW FANART.<br>>> IF ITS NOT FANART ITS PROBABLY COMPUTERS OR SOME WEIRD SEXUAL THING",
  ">> DID YOU KNOW THAT 9/10 DRAWINGS I'VE MADE WERE BORNE FROM PROCRASTINATION?",
  ">> HELP",
  ">> MAKE BAD ART. DRAW. <br>>> IT'S GOOD FOR YOU.",
  ">> YOU SHOULD DRAW A MASTERPIECE WITH PEN IN A NOTEBOOK THEN EAT THE WHOLE THING<br>>> LIKE THE WHOLE NOTEBOOK<br>>> NOW."
]

const speech = document.getElementById("speechtext");

function teethQuote(){
  speech.innerHTML= teeth[Math.floor(Math.random() * 7)];
}
function computerQuote(){
  document.querySelector("img").setAttribute("src","img/rotate.gif")
  speech.innerHTML= computer[Math.floor(Math.random() * 7)];
}
function artQuote(){
  speech.innerHTML= art[Math.floor(Math.random() * 5)];
}
function pronouns(){
  speech.innerHTML= "yes i have pronouns";
}
