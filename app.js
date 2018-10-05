let novels = ['the_old_man_and_the_sea',
              'the_lark_on_the_wing',
              'season_of_migration_to_the_north',
              'the_prince_and_the_poor_boy',
              'crime_and_punishment',
              'karamazov_brothers',
              'war_and_peace',
              'alchemist',
              'anna_karenina',
              'the_idiot'];

let novelsInfo = {
  'the_old_man_and_the_sea': {
    title: 'The Old Man And The Sea',
    language: 'English',
    author: 'Ernest Hemingway'
  },
  'the_lark_on_the_wing': {
    title: 'The Lark On The Wing',
    language: 'English',
    author: 'Elfrida Vipont'
  },
  'season_of_migration_to_the_north': {
    title: 'Season Of Migration To The North',
    language: 'Arabic',
    author: 'Tayeb Salih'
  },
  'the_prince_and_the_poor_boy': {
    title: 'The Prince And The Poor Boy',
    language: 'English',
    author: 'Mark Twain'
  },
  'crime_and_punishment': {
    title: 'Crime And Punishment',
    language: 'Russian',
    author: 'Fyodor Dostoyevsky'
  },
  'karamazov_brothers': {
    title: 'Karamazov Brothers',
    language: 'Russian',
    author: 'Fyodor Dostoyevsky'
  },
  'war_and_peace': {
    title: 'War And Peace',
    language: 'Russian',
    author: 'Leo Tolstoy'
  },
  'alchemist': {
    title: 'Alchemist',
    language: 'English',
    author: 'Paulo Coelho'
  },
  'anna_karenina': {
    title: 'Anna Karenina',
    language: 'Russian',
    author: 'Leo Tolstoy'
  },
  'the_idiot': {
    title: 'The Idiot',
    language: 'Russian',
    author: 'Fyodor Dostoyevsky'
  }
}

console.log(novelsInfo);

function makeNovelList() {
  let novelList = document.createElement('ul');
  let novel, novelTitle, novelAuthor, novelLanguage, novelCover;
  for(let i in novelsInfo) {
    novel = document.createElement('li');
    novel.id = i;
    novelList.appendChild(novel);

    novelsInfo[i].novelCover = `imgs/${i}.jpg`;
    novelCover = document.createElement('img');
    novelCover.setAttribute('src', novelsInfo[i].novelCover);
    novel.appendChild(novelCover);

    novelTitle = document.createElement('h3');
    novelTitle.textContent = novelsInfo[i].title;
    novel.appendChild(novelTitle);

    novelAuthor = document.createElement('p');
    novelAuthor.textContent = novelsInfo[i].author;
    novel.appendChild(novelAuthor);

    novelLanguage = document.createElement('span');
    novelLanguage.textContent = novelsInfo[i].language;
    novel.appendChild(novelLanguage);
  }
  document.body.appendChild(novelList);
}

makeNovelList();