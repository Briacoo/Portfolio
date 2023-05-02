const myTags = [
    'JavaScript', '•', 'CSS', '•', 'HTML',
    '•', 'SCSS', '•', 'JS', '•', 'Java', 
    '•', 'MySQL', '•', 'jQuery', '•', 
];

var tagCloud = TagCloud('.content', myTags,{

  // radius en px
  radius: 300,

  // animation speed
  // slow, normal, fast
  maxSpeed: 'fast',
  initSpeed: 'fast',

  // 0 = top
  // 90 = left
  // 135 = right-bottom
  direction: 135,
  
  // interaction cursor direction
  keep: false
  
});

// couleur random
var colors = ['#fff'];
var random_color = colors[Math.floor(Math.random() * colors.length)];
document.querySelector('.content').style.color = random_color;