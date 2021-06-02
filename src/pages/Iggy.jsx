import React from "react";
import Space from "./Space"

//for displaying alert messages
function message(props) {
  var msg;
  switch (props) {
    case 0:
      msg = 'You handed me the left earbud, and I stuck it in my right ear, wiggling it around trying to get its ill-fitted shape to conform to my orfice. '
    break
    case 1:
      msg = 'You pressed play, and from those headphones drizzled out Eliot smith’s soft guitar. Each note hummed with a loneliness that only a low-fidelity audio device could capture.'
    break
    case 2:
      msg = '“This is the song that made me want to learn guitar.” How the acoustic chords accompanied you on the way to high school as you ran your fingers along the chain link fence. How you became fascinated with Portland when you learned that he was born there.'
    break
    default:
      msg = 'And now, as we laid on the bed of that Portland airbnb, I tried very hard to be still as I listened to you recount those memories, his entwined with yours. He’d killed himself in the end.'
  };
  alert(msg);
}

function Iggy(props) {
  return (
    <div class="iggy">
      <Space />
      <div className="container">
        <div class="flexImgGap"></div>
        <div class="widthTwothirds">
          <img class="cursorNone widthFull" src={`/img/${props.text}/main.gif`} alt="iggy pop's brick by brick front and back"/>
        </div>
      </div>
      <div class="container">
        <p class="widthHalf">
        iggy pop brick by brick cd album. From Oakland, California.<br /><br />

        5.5” x 4.75” x 0.5”<br />
        3.8 oz<br />
        $3 ($4 for shipping).<br />
        Made in the United Kingdom.<br />
        Plastic, paper, cd.<br />
        </p>
      </div>
      <Space />
      <Space />
      <Space />
      <div class="container swatch">
        <button onClick={(e) => message(0)}>handed</button>
        <button onClick={(e) => message(1)}>pressed</button>
        <img class="heightButton cursorNone" src={`/img/${props.text}/sellerImg.jpg`} alt="seller's picture of iggy pop's brick by brick"/>
        <button onClick={(e) => message(2)}>is</button>
        <button onClick={(e) => message(3)}>now</button>
      </div>
      <Space />
      <Space />
      <Space />
      <Space />
      <div class="relative">
        <img class="path widthTwothirdsMax absolute" src={`/img/${props.text}/path.png`} alt="sf to la"/>
        <div class="container flexAlignStart">
          <div class="flexImgGap"></div>
          <div class="widthTwothirds">
            <img class="widthFull" src={`/img/${props.text}/journey1.jpg`} alt="stylized screenshot of seller's page."/>
          </div>
        </div>
        <Space />
        <div class="container">
          <p class="widthHalf">
            “I’m tellin’ you, it’s a motley crew in Butt Town<br />
            Monday you’re new, and Friday you’re through<br />
            In Butt Town<br />
            The producer is wily, and owns what he sells<br />
            The talent is eager to go straight to hell<br />
            Th tits are amazing, and everyone’s gazing<br />
            At some body part-<br />
            That’s the nature of art in Butt Town” (<a href="https://www.youtube.com/watch?v=X08Y38927xI">x</a>).
          </p>
        </div>
        <Space />
        <div class="container">
          <div class="flexImgGap"></div>
          <div class="widthTwothirds">
            <img class="widthFull" src={`/img/${props.text}/journey2.png`} alt="june with image of street corner blocking their face."/>
          </div>
        </div>
        <Space />
        <div class="container">
          <p class="widthHalf italic">
            When Iggy Pop and David Bowie were in rehab they were the only ones who would visit each other regularly<br />
            When Iggy Pop was short on cash and Bowie was becoming a superstar, Bowie wrote a song that copied an Iggy Pop melody so Iggy could get songwriter credits and royalties<br />
            They produced each other’s albums! Raw Power was the result of Bowie finding Iggy in a studio with a pile of tapes and working over a few days to arrange it all<br />
            It’s one of the most beautiful artistic relationships in contemporary art and I’m amazed by it every time I think about it<br />
          </p>
        </div>
        <Space />
      </div>
      <div class="container">
        <div class="flexImgGap"></div>
        <div class="widthTwothirds">
          <img class="widthFull" src={`/img/${props.text}/journey3.png`} alt="my hand holding iggy pop's brick by brick and envelope in which it came."/>
        </div>
      </div>
    </div>
  );
}

export default Iggy;
