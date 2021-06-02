import React from "react";
import Space from "./Space"

//for displaying alert messages
function message(props) {
  var msg;
  switch (props) {
    case 0:
      msg = 'On a January night at the Embarcadero plaza, you were gripping onto the side rails for dear life, slipping, sliding, and scrambling through lap after lap around the ice rink.'
    break
    case 1:
      msg = 'I’d hold your hand sometimes so you could venture out beyond the edge, and we’d both bumble along, arm in arm, as agile twelve-year-old girls in tight ponytails sped past us on the left.'
    break
    case 2:
      msg = 'both you and I only fell once during the whole three hours (color me impressed!) when a Large Latino family™ caused a traffic jam and neither of us knew how to stop.'
    break
    default:
      msg = 'as we sat on our cold, helpless asses, you –– dark curls matted with sweat, hot cheeks flushed with blood, dewy skin glowing technicolor by the lights –– laughed a hearty belly laugh that made me forget the cold.'
  };
  alert(msg);
}

function Christmas(props) {
  return (
    <div class="christmas">
      <Space />
      <div className="container">
        <div class="flexImgGap"></div>
        <div class="widthTwothirds">
          <img class="cursorNone widthFull" src={`/img/${props.text}/main.gif`} alt="christmas salt shaker front and back"/>
        </div>
      </div>
      <div class="container">
        <p class="widthHalf">
        Christmas tree salt shaker. From Los Angeles, California.<br/><br/>

        2.75” x 2.75” x 2.75”<br/>
        2.4 oz<br/>
        $0 (free pickup).<br/>
        Made in china.<br/>
        Ceramic and rubber.<br/>
        </p>
      </div>
      <Space />
      <Space />
      <Space />
      <div class="container swatch">
        <button onClick={(e) => message(0)}>on</button>
        <button onClick={(e) => message(1)}>hold</button>
        <img class="heightButton cursorNone" src={`/img/${props.text}/sellerImg.jpg`} alt="seller's picture of christmas tree salt shaker"/>
        <button onClick={(e) => message(2)}>you</button>
        <button onClick={(e) => message(3)}>we</button>
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
            “tag’s vision is to bring well-designed, stylish and affordable products into the home of every consumer.<br/>
            “since 1975, tag has been designing and manufacturing gifts and decorative accessories for the home with its distribution focus on the independent specialty retailer.<br/>
            “tag introduces two seasonal catalogs annually, as well as a portfolio of everyday products that coordinate with and enhance both seasonal collections.<br/>
            “any room in the home is fair game for tag! our collections include an array of everyday products that sell 12 months of the year as well as a mix of seasonal products that support festive holidays and all four seasons” (<a href="https://www.tagltd.com/t-about.aspx">x</a>).
          </p>
        </div>
        <Space />
        <div class="container">
          <div class="flexImgGap"></div>
          <div class="widthTwothirds">
            <img class="widthFull" src={`/img/${props.text}/journey2.png`} alt="june with image of pet lizard blocking their face."/>
          </div>
        </div>
        <Space />
        <div class="container">
          <p class="widthHalf italic">
            I. LOVE. CHRISTMAS<br/>
            I like holidays. I like tasteful Christmas aesthetics. I like the tension of the moodiness and loneliness of winter alongside the communion and generosity of Christmas. I like Last Christmas by Wham!. I like Christmas trees. I like sweaters. I like thinking things like, “This is a wonderful evening to make hot cocoa.” I love to have downtime to spend with people with whom I share love. I love the West struggling to keep up the pretense it’s not completely deferential to Christianity<br/>
            Fun fact when I was 15 I commandeered the decoration of the Christmas tree<br/>
            It was always cheesy and kitschy my entire life and when I was 15 I was like “stop it just let me decorate this”<br/>
            Best Christmas tree we ever had<br />
          </p>
        </div>
        <Space />
      </div>
      <div class="container">
        <div class="flexImgGap"></div>
        <div class="widthTwothirds">
          <img class="widthFull" src={`/img/${props.text}/journey3.png`} alt="my hand holding the christmas tree salt shaker and box in which it came."/>
        </div>
      </div>
    </div>
  );
}

export default Christmas;
