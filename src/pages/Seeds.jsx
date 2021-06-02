import React from "react";
import Space from "./Space"

//for displaying alert messages
function message(props) {
  var msg;
  switch (props) {
    case 0:
      msg = 'We had just finished watching Tungrus –– a documentary about an Indian family’s fussy pet chicken and how his accidental arrival forever intertwined their lives.'
    break
    case 1:
      msg = 'The film ended with the father taking tungrus to a butcher. as he was tossed into a grimy blue oil barrel, his last agonized cries hung thick in the air.'
    break
    case 2:
      msg = 'I asked you if you’d ever seen a chicken being butchered live. you replied that not only did you have, you had done it yourself.'
    break
    default:
      msg = 'you’d taken the animals delicate neck between your hands, and like this –– you demonstrated here –– wrung it. I imagined the crackling of its spine as one big pop, followed by the sudden limpness under your palms.'
  };
  alert(msg);
}

function Seeds(props) {
  return (
    <div class="seeds">
      <Space />
      <div className="container">
        <div class="flexImgGap"></div>
        <div class="widthTwothirds">
          <img class="cursorNone widthFull" src={`/img/${props.text}/main.gif`} alt="radish seeds charm front and back"/>
        </div>
      </div>
      <div class="container">
        <p class="widthHalf">
          Large radish (brassica) seeds. From Portland, Oregon.<br/><br/>

          7.25” x 3” x 0.25”<br/>
          1.1 oz<br/>
          $2 (free shipping).<br/>
          made in Oregon.<br/>
          brown parchment paper, packing tape, seeds.<br/>
        </p>
      </div>
      <Space />
      <Space />
      <Space />
      <div class="container swatch">
        <button onClick={(e) => message(0)}>had</button>
        <button onClick={(e) => message(1)}>film</button>
        <img class="heightButton cursorNone" src={`/img/${props.text}/sellerImg.jpg`} alt="seller's picture of radish seeds"/>
        <button onClick={(e) => message(2)}>asked</button>
        <button onClick={(e) => message(3)}>taken</button>
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
            “Chickens love radishes, and even if you want to save your hard-earned radish crop for yourself, you can still feed the tops to your birds. They will also eat the root, however, so make sure you save them some extra!Since radishes mature so quickly, it’s recommended that you plant several batches, with one every week, until the growing season ends – that way, you’ll always have a fresh crop of radishes ready to go for your birds! Plus, you can grow any type of radish, including cherry belles, watermelons, or Daikons.” (<a href="https://thehomesteadinghippy.com/top-10-plants-to-grow-for-chicken-feed/">x</a>).
          </p>
        </div>
        <Space />
        <div class="container">
          <div class="flexImgGap"></div>
          <div class="widthTwothirds">
            <img class="widthFull" src={`/img/${props.text}/journey2.png`} alt="june with image of stained glass church window blocking their face."/>
          </div>
        </div>
        <Space />
        <div class="container">
          <p class="widthHalf italic">
            When I was a teenager my dad built this huge cage for like a dozen pet pigeons my mom kept<br/>
            It was gigantic <br/>
            But, and this is one of those memories that haunt me, one day my mom entrusted me to feed the pigeons overnight (which I often did) and I left the door open<br/>
            She was very very very sad<br/>
            And I don’t like my mother but I’ll never forget how sad she was and how, despite my totally deserving to get chewed out, she didn’t get mad at me<br />
          </p>
        </div>
        <Space />
      </div>
      <div class="container">
        <div class="flexImgGap"></div>
        <div class="widthTwothirds">
          <img class="widthFull" src={`/img/${props.text}/journey3.png`} alt="my hand holding the radish seeds and envelope in which it came."/>
        </div>
      </div>
    </div>
  );
}

export default Seeds;
