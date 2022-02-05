/* Featured Speakers */

const featuredSpeakers = [
  {
    id: 1,
    name: 'Steven Fitzwater',
    position: 'Leading Expert on Bitcoin and Blockchain',
    details: 'CEO and co-founder of Letter and informer Senior Advisor for Mobile and Data Innovation.',
    img: 'resources/images/speaker-1.svg',
  },
  {
    id: 2,
    name: 'Timothy M Mackey',
    position: 'Leadership Authors Artificial Intelligence',
    details: 'Futurist, Trends & Innovation Expert and Author.',
    img: 'resources/images/speaker-2.svg',
  },
  {
    id: 3,
    name: 'Mable A Terrell',
    position: 'Crypto/Blockchain Journalist',
    details: 'Host of "Unfettered" Podcast; Former Senior Editor & Contributor at Norbes',
    img: 'resources/images/speaker-3.svg',
  },
  {
    id: 4,
    name: 'Ronald B Wicks',
    position: 'World leading global futurist',
    details: 'Advise international business and governments around the world on how to thrive into the future.',
    img: 'resources/images/speaker-4.svg',
  },
  {
    id: 5,
    name: 'Diana W Carlson',
    position: 'Leading Expert on Bitcoin and Blockchain',
    details: 'Advise organisations on, cyber-crime, cryto-currency and blockchain, information security, and on digital innovation.',
    img: 'resources/images/speaker-5.svg',
  },
  {
    id: 1,
    name: 'Robert N Rogers',
    position: 'Chairman, The Futurist Institute',
    details: 'President and Chief Economist of esteem Economics.',
    img: 'resources/images/speaker-6.svg',
  },
];

function getFeaturedSpeakers(speaker) {
  return `
   <img src="${speaker.img}" alt="" />
   <div class="speakers-information">
   <h3 class="speaker-name">${speaker.name}</h3>
   <p><em>${speaker.position}</em></p>
   <hr />
   <p>${speaker.details}</p>
  </div>
  `;
}

function loadSpeakers() {
  const speakersContainer = document.querySelector('.speakers-list');
  featuredSpeakers.forEach( (speaker) => {
    const speakerLoad = getFeaturedSpeakers(speaker);
    const speakerCard = document.createElement('li');
    speakerCard.innerHTML = speakerLoad;
    speakersContainer.appendChild(speakerCard);
  });
}

loadSpeakers();