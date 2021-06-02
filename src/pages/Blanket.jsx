import React from "react";
import Space from "./Space"

//for displaying alert messages
function message(props) {
  var msg;
  switch (props) {
    case 0:
      msg = '“Mind if I have a smoke?” I shook my head, which gave you the cue to pull out a cigarette from your pocket. Camel brand, of course.'
    break
    case 1:
      msg = 'As we strode westward down Judah that winter night, you took deep, anxious drags, taking care to turn away from me as you exhaled. '
    break
    case 2:
      msg = 'Dim amber streetlights diffused through the tendrils of smoke, blending it with coarse droplets of ocean fog. You were lit chiaroscuro and moved with an urgent deftness as though you were guided by billy wilder. '
    break
    default:
      msg = 'And when I held you later that evening, I was still intoxicated by the ashy musk, deep and masculine, thick with noir, that clung to the fabric of your clothes.'
  };
  alert(msg);
}

function Blanket(props) {
  return (
    <div class="blanket">
      <Space />
      <div className="container">
        <div class="flexImgGap"></div>
        <div class="widthTwothirds">
          <img class="cursorNone widthFull" src={`/img/${props.text}/main.gif`} alt="blanket front and back"/>
        </div>
      </div>
      <div class="container">
        <p class="widthHalf">
        woven tapestry with floral prints. from San Francisco
        (West portal), California. <br /><br />

        1.5” x 0.5” x 0.25”<br />
        0.1 oz<br />
        $2 ($0.50 for shipping).<br />
        Origin unknown.<br />
        Wool cotton blend.<br />

        </p>
      </div>
      <Space />
      <Space />
      <Space />
      <div class="container swatch">
        <button onClick={(e) => message(0)}>if</button>
        <button onClick={(e) => message(1)}>we</button>
        <img class="heightButton cursorNone" src={`/img/${props.text}/sellerImg.jpg`} alt="seller's picture of blanket"/>
        <button onClick={(e) => message(2)}>amber</button>
        <button onClick={(e) => message(3)}>when</button>
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
            “942<br /><br />

            Snow beneath whose chilly softness<br />
            Some that never lay<br />
            Make their first Repose this Winter<br />
            I admonish Thee<br />

            Blanket Wealthier the Neighbor<br />
            We so new bestow<br />
            Than thine acclimated Creature<br />
            Wilt Thou, Austere Snow?” (<a href="https://allpoetry.com/Snow-beneath-whose-chilly-softness">x</a>).
          </p>
        </div>
        <Space />
        <div class="container">
          <div class="flexImgGap"></div>
          <div class="widthTwothirds">
            <img class="widthFull" src={`/img/${props.text}/journey2.png`} alt="june with image of library blocking their face."/>
          </div>
        </div>
        <Space />
        <div class="container">
          <p class="widthHalf italic">
            Also look at my new throw blanket<br />
            I figured I should have at least one<br />
            now I will never again be convinced to not sleep on the couch<br />
            this throw blanket is really cute<br />
            I am now a throw blanket queer<br />
          </p>
        </div>
        <Space />
      </div>
      <div class="container">
        <div class="flexImgGap"></div>
        <div class="widthTwothirds">
          <img class="widthFull" src={`/img/${props.text}/journey3.png`} alt="my hand holding the blanket and envelope in which it came."/>
        </div>
      </div>
    </div>
  );
}

export default Blanket;
