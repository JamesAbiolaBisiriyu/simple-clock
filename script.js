const $ = (selector) => {
  return document.querySelector(selector);
};

const $second = $('.second-hand');
const $min = $('.min-hand');
const $hour = $('.hour-hand');

function update() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDeg = 
  ((seconds / 60) * 360 + 90) % 360; // 0 - 5
  $second.style.transform =
  `rotate(${secondsDeg}deg)`;


  const mins = now.getMinutes();
  const minsDeg = 
  ((mins / 60) * 360 + 90) % 360
  $min.style.transform =
  `rotate(${minsDeg}deg)`;

  const hour = now.getHours();
  const hourDeg = ((hour/12) * 360) +
  ((mins/60) * 30) + 90;
  $hour.style.transform =
  `rotate(${hourDeg}deg)`;
}

setInterval(update, 900);
update();