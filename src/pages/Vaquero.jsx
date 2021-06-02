import React from "react";
import Space from "./Space"

//for displaying alert messages
function message(props) {
  var msg;
  switch (props) {
    case 0:
      msg = 'We found ourselves at taqueria Vallarta because it was one of the only places open that late in the evening. you ordered two al pastor and one carne asada tacos. I ordered two lenguas.'
    break
    case 1:
      msg = 'My hair was still long then––unruly bedheaded locks dyed silver, thanks to your cosmetologist ex-roommate.'
    break
    case 2:
      msg = 'The tables and chairs were packed tightly together, and it was nigh impossible to pass someone without at least brushing into them.'
    break
    default:
      msg = 'We shuffled by the resident mariachi, of which the square-jawed vihuela player greeted me as “muchacho.” I didn’t know what that word meant so I looked to you for a reaction. You were beaming.'
  };
  alert(msg);
}

function Vaquero(props) {
  return (
    <div class="vaquero">
      <Space />
      <div className="container">
        <div class="flexImgGap"></div>
        <div class="widthTwothirds">
          <img class="cursorNone widthFull" src={`/img/${props.text}/main.gif`} alt="cowboy croc charm front and back"/>
        </div>
      </div>
      <div class="container">
        <p class="widthHalf">
          Croc charm of woody from toy story. from San
          Francisco (outer sunset). <br /><br />
          1.5” x 0.5” x 0.25”<br />
          0.1 oz<br />
          $1 ($1 for shipping).<br />
          Made in china.<br />
          Rubber and plastic.<br />
        </p>
      </div>
      <Space />
      <Space />
      <Space />
      <div class="container swatch">
        <button onClick={(e) => message(0)}>found</button>
        <button onClick={(e) => message(1)}>hair</button>
        <img class="heightButton cursorNone" src={`/img/${props.text}/sellerImg.jpg`} alt="seller's picture of cowboy charm"/>
        <button onClick={(e) => message(2)}>tables</button>
        <button onClick={(e) => message(3)}>shuffled</button>
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
            “Mexico’s native cowboys were called vaqueros, which comes from the Spanish word vaca (cow). Vaqueros were hired by ranchers to tend to the livestock and were known for their superior roping, riding and herding skills ...
            included African-Americans, Native Americans, Mexicans and settlers from the eastern United States and Europe.” (<a href="https://www.history.com/topics/westward-expansion/cowboys">x</a>). <br/><br/>
            “Woody Strode was one of the first African-American football players to play in the National Football League. He was also a notable actor
            ... After considering a few names, Pixar eventually settled on the name Woody after the legendary western star” (<a href="https://screenrant.com/toy-story-woody-facts-trivia/">x</a>).
          </p>
        </div>
        <Space />
        <div class="container">
          <div class="flexImgGap"></div>
          <div class="widthTwothirds">
            <img class="widthFull" src={`/img/${props.text}/journey2.png`} alt="june with image of beach blocking their face."/>
          </div>
        </div>
        <Space />
        <div class="container">
          <p class="widthHalf italic">
            I love seeing Texan farmhands who look like my dads
            side of the family <br/>
            More accurate than the conception of the blond buff
            white dude doing it all <br/>
            I love Texas <br/>
            I wanna go back <br/>
            San Antonio <br/>
            You know how long my dad tried to get me to wear
            cowboy hats??<br/>
            He only stopped when I got into high school
            I’d be more into it these days<br/>
          </p>
        </div>
        <Space />
      </div>
      <div class="container">
        <div class="flexImgGap"></div>
        <div class="widthTwothirds">
          <img class="widthFull" src={`/img/${props.text}/journey3.png`} alt="my hand holding the croc charm and envelope in which it came."/>
        </div>
      </div>
    </div>
  );
}

export default Vaquero;
