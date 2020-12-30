// Countdown to event date
// Countdown to event date
const countDown = (
  eleDaysId,
  EleHoursId,
  EleMinutesId,
  eleSecondsId,
  eDate
) => {
  // Current date in ms
  const currentDate = new Date(Date.now());
  // Event date in ms
  const eventDate = eDate;
  // Remaining time to event date in ms
  const remainTime = eventDate - currentDate;

  // Number of days until the event
  const dayToMs = 24 * 60 * 60 * 1000;
  const days = Math.floor(remainTime / dayToMs);
  // Number of hours until the event
  const hourToMs = 60 * 60 * 1000;
  const hours = Math.floor((remainTime - days * dayToMs) / hourToMs);
  // Number of minutes until the event
  const minuteToMs = 60 * 1000;
  const minutes = Math.floor(
    (remainTime - hours * hourToMs - days * dayToMs) / minuteToMs
  );
  // Number of seconds until the event
  const secondToMs = 1000;
  const seconds = Math.floor(
    (remainTime - minutes * minuteToMs - days * dayToMs - hours * hourToMs) /
      secondToMs
  );

  document.getElementById(eleDaysId).innerHTML = days.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false
  });
  document.getElementById(EleHoursId).innerHTML = hours.toLocaleString(
    'en-US',
    { minimumIntegerDigits: 2, useGrouping: false }
  );
  document.getElementById(EleMinutesId).innerHTML = minutes.toLocaleString(
    'en-US',
    {
      minimumIntegerDigits: 2,
      useGrouping: false
    }
  );
  document.getElementById(eleSecondsId).innerHTML = seconds.toLocaleString(
    'en-US',
    {
      minimumIntegerDigits: 2,
      useGrouping: false
    }
  );

  setTimeout(() => {
    countDown(eleDaysId, EleHoursId, EleMinutesId, eleSecondsId, eDate);
  }, 1000);
};

document.addEventListener('DOMContentLoaded', () => {
  countDown('days', 'hours', 'minutes', 'seconds', new Date(2021, 01, 13));
});

// Scroll to top
var scrollToTopBtn = document.getElementById('scrollToTopBtn');
var rootElement = document.documentElement;

function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
scrollToTopBtn.addEventListener('click', scrollToTop);

// Track switching
var data = {
  track1: {
    track: 'track1',
    title: 'Education Challenge',
    content:
      'Tired of Zoom University? This challenge is open to teams who want to rethink education. Whether tackling the struggles of online education or developing an app that enhances traditional education, teams will have their work cut out for them with this track!',
    imagePath: 'dist/images/Kids_Studying_from_Home-pana_2.svg'
  },
  track2: {
    track: 'track2',
    title: 'Environment Challenge',
    content:
      'Have an idea for a hack that looks to solve pressing environmental issues? This challenge is open to teams who want to tackle big problems like climate change, food waste, and biodiversity loss (just to name a few).',
    imagePath: 'dist/images/Environment-rafiki.svg'
  },
  track3: {
    track: 'track3',
    title: 'Media Challenge',
    content:
      'Looking to solve the spread of misinformation? Interested in tackling the issues highlighted by the Social Dilemma? This challenge is open to teams who would like to take on modern media. Problems such as social media dependency, fake news, and body shaming need solving!',
    imagePath: 'dist/images/Mobile_Marketing-cuate_3.svg'
  },
  track4: {
    track: 'track4',
    title: 'Economy Challenge',
    content:
      'Economic challenges such as poverty, rise of powers, and pandemics have the potential to destabilize entire continents. This challenge is open to teams who would like to explore solutions to some of the biggest problems available.',
    imagePath: 'dist/images/Finance-cuate.svg'
  },
  track5: {
    track: 'track5',
    title: 'Open Challenge',
    content:
      'Have an idea that doesn’t quite fit the bill of our other challenges? This challenge is open to teams who would like to put their creativity to the test and submit a project that does not meet the theme of the other yuHacks challenges.',
    imagePath: 'dist/images/Creative_thinking-pana_1.svg'
  },
  track6: {
    track: 'track6',
    title: 'New Hacker Challenge',
    content:
      'New to hackathons? This challenge is open to teams where a majority of the members are attending their first hackathon.',
    imagePath: 'dist/images/Coding-pana.svg'
  },
  track7: {
    track: 'track7',
    title: 'Non-Technical Challenge',
    content:
      'Not much of a developer? Still want to tackle challenges and explore ideas? This challenge is open to teams who are submitting a project in which they did not write any code. Examples: business proposals, powerpoint presentations, or merely a pitch.',
    imagePath: 'dist/images/Mind_map-cuate.svg'
  }
};

var icons = document.querySelector('#icons');
icons.addEventListener('click', switchClick, false);

function switchClick(track) {
  // Remove all active class
  var allIcon = document.querySelectorAll('#icons .btn i');
  allIcon.forEach((icon) => {
    icon.classList.remove('active');
  });

  var title = document.getElementById('trackTitle');
  var content = document.getElementById('trackContent');
  var image = document.getElementById('trackImage');

  var clickedIcon = track.target.id;
  var length = Object.keys(data).length;
  for (i = 0; i < length; i++) {
    var o = Object.values(data);
    if (o[i].track === clickedIcon) {
      title.innerHTML = o[i].title;
      content.innerHTML = o[i].content;
      image.src = o[i].imagePath;
      track.target.classList.add('active');
    }
  }

  // Fade in animation
  $('.track-content-text').css({
    position: 'relative',
    opacity: 0,
    left: '+=100'
  });
  $('.track-content-text').animate({ left: 0, opacity: 1 }, 500);
  $('.track-content-image').css({
    position: 'relative',
    opacity: 0,
    right: '+=100'
  });
  $('.track-content-image').animate({ right: 0, opacity: 1 }, 500);
}

// Init AOS
AOS.init();

// Navbar collapse on link click
$('.navbar-nav>li>a').on('click', function () {
  $('.navbar-collapse').collapse('hide');
});
