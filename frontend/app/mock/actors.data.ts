import { IActor } from '@/interfaces/actor.interface'

export const actors: IActor[] = [
  {
    _id: '1',
    kinopoisk_id: '6317',
    name: 'Christian Bale',
    en_name: 'Christian Bale',
    photo: 'https://image.tmdb.org/t/p/w500/qCpZn2e3dimwbryLnqxZuI88PTi.jpg',
    slug: 'christian-bale',
    sex: 'male',
    growth: 183,
    birthday: '1974-01-30',
    death: null,
    age: 50,
    birth_place: ['Haverfordwest', 'Pembrokeshire', 'Wales', 'UK'],
    death_place: [],
    count_awards: 72,
    profession: ['Actor', 'Producer'],
    facts: [
      'Known for his intense method acting style',
      'Lost 63 pounds for his role in The Machinist (2004)',
      'Won an Academy Award for Best Supporting Actor in The Fighter (2010)'
    ],
    awards: [
      {
        movie_id: '1',
        movie_name: 'The Dark Knight',
        award_title: 'Saturn Award',
        award_year: 2009,
        nomination_title: 'Best Actor',
        winning: true
      }
    ],
    movies_count: 45,
    description: 'Christian Charles Philip Bale is an English actor. Known for his versatility and physical transformations for his roles, he has been a leading man in films of several genres. He has received various accolades, including an Academy Award and two Golden Globe Awards.',
    createdAt: '2024-02-20',
    updatedAt: '2024-02-20'
  },
  {
    _id: '2',
    kinopoisk_id: '8985',
    name: 'Morgan Freeman',
    en_name: 'Morgan Freeman',
    photo: 'https://image.tmdb.org/t/p/w500/905k0RFzH0Kd6gx8oSxRdnr6FL.jpg',
    slug: 'morgan-freeman',
    sex: 'male',
    growth: 188,
    birthday: '1937-06-01',
    death: null,
    age: 86,
    birth_place: ['Memphis', 'Tennessee', 'USA'],
    death_place: [],
    count_awards: 58,
    profession: ['Actor', 'Producer', 'Director'],
    facts: [
      'Began acting at age 9',
      'Served in the United States Air Force',
      'Has a private pilot\'s license'
    ],
    awards: [
      {
        movie_id: '1',
        movie_name: 'The Dark Knight',
        award_title: 'People\'s Choice Award',
        award_year: 2009,
        nomination_title: 'Favorite Cast',
        winning: true
      }
    ],
    movies_count: 135,
    description: 'Morgan Freeman is an American actor, director, and narrator. He has appeared in a range of film genres portraying character roles and is particularly known for his distinctive deep voice.',
    createdAt: '2024-02-20',
    updatedAt: '2024-02-20'
  },
  {
    _id: '3',
    kinopoisk_id: '37908',
    name: 'Leonardo DiCaprio',
    en_name: 'Leonardo DiCaprio',
    photo: 'https://image.tmdb.org/t/p/w500/wo2hJpn04vbtmh0B9utCFdsQhxM.jpg',
    slug: 'leonardo-dicaprio',
    sex: 'male',
    growth: 183,
    birthday: '1974-11-11',
    death: null,
    age: 49,
    birth_place: ['Los Angeles', 'California', 'USA'],
    death_place: [],
    count_awards: 101,
    profession: ['Actor', 'Producer'],
    facts: [
      'Named after Leonardo da Vinci',
      'Environmental activist',
      'Finally won an Oscar for The Revenant (2015)'
    ],
    awards: [
      {
        movie_id: '2',
        movie_name: 'Inception',
        award_title: 'Golden Globe',
        award_year: 2011,
        nomination_title: 'Best Actor - Drama',
        winning: true
      }
    ],
    movies_count: 37,
    description: 'Leonardo Wilhelm DiCaprio is an American actor and film producer. Known for his work in biographical and period films, he is the recipient of numerous accolades, including an Academy Award, a British Academy Film Award, and three Golden Globe Awards.',
    createdAt: '2024-02-20',
    updatedAt: '2024-02-20'
  },
  {
    _id: '4',
    kinopoisk_id: '7987',
    name: 'Robert De Niro',
    en_name: 'Robert De Niro',
    photo: 'https://image.tmdb.org/t/p/w500/cT8htcckIuyI1Lqwt1CvD02ynTh.jpg',
    slug: 'robert-de-niro',
    sex: 'male',
    growth: 177,
    birthday: '1943-08-17',
    death: null,
    age: 80,
    birth_place: ['New York City', 'New York', 'USA'],
    death_place: [],
    count_awards: 57,
    profession: ['Actor', 'Producer', 'Director'],
    facts: [
      'Known for his collaborations with Martin Scorsese',
      'Method actor who learned to speak Sicilian for The Godfather Part II',
      'Founder of the Tribeca Film Festival'
    ],
    awards: [
      {
        movie_id: '8',
        movie_name: 'Goodfellas',
        award_title: 'BAFTA',
        award_year: 1991,
        nomination_title: 'Best Actor',
        winning: false
      }
    ],
    movies_count: 120,
    description: 'Robert Anthony De Niro Jr. is an American actor and producer. Known for his collaborations with Martin Scorsese, he is considered to be one of the best actors of his generation.',
    createdAt: '2024-02-20',
    updatedAt: '2024-02-20'
  },
  {
    _id: '5',
    kinopoisk_id: '7987',
    name: 'Tom Hanks',
    en_name: 'Tom Hanks',
    photo: 'https://image.tmdb.org/t/p/w500/xndWFsBlClOJFRdhSt4NBwiPq2o.jpg',
    slug: 'tom-hanks',
    sex: 'male',
    growth: 183,
    birthday: '1956-07-09',
    death: null,
    age: 67,
    birth_place: ['Concord', 'California', 'USA'],
    death_place: [],
    count_awards: 89,
    profession: ['Actor', 'Producer', 'Director'],
    facts: [
      'Two consecutive Academy Awards for Best Actor',
      'Received the Presidential Medal of Freedom',
      'Space enthusiast and supporter of NASA'
    ],
    awards: [
      {
        movie_id: '6',
        movie_name: 'Forrest Gump',
        award_title: 'Academy Award',
        award_year: 1995,
        nomination_title: 'Best Actor',
        winning: true
      }
    ],
    movies_count: 95,
    description: 'Thomas Jeffrey Hanks is an American actor and filmmaker. Known for both his comedic and dramatic roles, he is one of the most popular and recognizable film stars worldwide.',
    createdAt: '2024-02-20',
    updatedAt: '2024-02-20'
  },
  {
    id: 6,
    name: 'Brad Pitt',
    slug: 'brad-pitt',
    photo: '/images/actors/brad-pitt.jpg',
    description: 'William Bradley Pitt is an American actor and film producer. He has received multiple accolades, including two Academy Awards, a British Academy Film Award, two Golden Globe Awards, and a Primetime Emmy Award.',
    countMovies: 87
  },
  {
    id: 7,
    name: 'Al Pacino',
    slug: 'al-pacino',
    photo: '/images/actors/al-pacino.jpg',
    description: 'Alfredo James Pacino is an American actor. Considered one of the most influential actors of the 20th century, he has received numerous accolades, including an Academy Award, two Tony Awards, and two Primetime Emmy Awards.',
    countMovies: 60
  },
  {
    id: 8,
    name: 'Anthony Hopkins',
    slug: 'anthony-hopkins',
    photo: '/images/actors/anthony-hopkins.jpg',
    description: 'Sir Philip Anthony Hopkins CBE is a Welsh actor, director, and producer. One of Britain\'s most recognizable and prolific actors, he is known for his performances on the screen and stage.',
    countMovies: 85
  },
  {
    id: 9,
    name: 'Samuel L. Jackson',
    slug: 'samuel-l-jackson',
    photo: '/images/actors/samuel-l-jackson.jpg',
    description: 'Samuel Leroy Jackson is an American actor and producer. One of the most widely recognized actors of his generation, the films in which he has appeared have collectively grossed over $27 billion worldwide.',
    countMovies: 150
  },
  {
    id: 10,
    name: 'Gary Oldman',
    slug: 'gary-oldman',
    photo: '/images/actors/gary-oldman.jpg',
    description: 'Gary Leonard Oldman is an English actor and filmmaker. Known for his versatility and intense acting style, he has received various accolades, including an Academy Award, a Golden Globe Award, and three British Academy Film Awards.',
    countMovies: 108
  }
] 