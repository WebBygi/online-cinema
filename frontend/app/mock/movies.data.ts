import { IMovie } from '@/interfaces/movie.interface'
import { actors } from './actors.data'

export const movies: IMovie[] = [
  {
    _id: '1',
    kinopoisk_id: '111543',
    tmdb_id: '155',
    title: 'The Dark Knight',
    description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    short_description: 'Batman faces his greatest challenge as the Joker terrorizes Gotham City.',
    slogan: 'Why So Serious?',
    poster: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
    big_poster: 'https://image.tmdb.org/t/p/original/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
    video_url: 'https://www.youtube.com/watch?v=EXeTwQWrcwY',
    trailer: 'https://www.youtube.com/watch?v=EXeTwQWrcwY',
    quality: '4K',
    movie_type: 'movie',
    slug: 'the-dark-knight',
    is_series: false,
    rating_kp: 9.0,
    votes: 2500000,
    rating: 9.0,
    count_opened: 1245,
    is_send_telegram: false,
    updated_at: '2024-02-20',
    genres: [
      { _id: '1', name: 'Action', slug: 'action', description: 'Action movies', icon: '🎬' },
      { _id: '2', name: 'Crime', slug: 'crime', description: 'Crime movies', icon: '🔪' },
      { _id: '3', name: 'Drama', slug: 'drama', description: 'Drama movies', icon: '🎭' }
    ],
    actors: [actors[0], actors[1]], // Christian Bale, Morgan Freeman
    collections: [
      { _id: '1', name: 'DC Movies', slug: 'dc-movies', description: 'Movies based on DC Comics', icon: '⚡' }
    ],
    views: 15000,
    parameters: {
      year: 2008,
      duration: 152,
      country: 'USA',
      age: '16+'
    },
    videos: [
      {
        _id: '1',
        url: 'https://www.youtube.com/watch?v=EXeTwQWrcwY',
        name: 'Official Trailer'
      }
    ],
    reviews: [
      {
        _id: '1',
        user: {
          _id: '1',
          name: 'John Doe'
        },
        text: 'One of the greatest superhero movies ever made.',
        rating: 5,
        createdAt: '2024-02-20'
      }
    ],
    similar: [
      {
        _id: '4',
        title: 'Batman Begins',
        poster: 'https://image.tmdb.org/t/p/w500/8RW2runSEc34IwKN2D1aPcJd2UL.jpg',
        slug: 'batman-begins'
      }
    ],
    favorites: [],
    isSendTelegram: false,
    createdAt: '2024-02-20',
    updatedAt: '2024-02-20'
  },
  {
    _id: '2',
    kinopoisk_id: '447301',
    tmdb_id: '27205',
    title: 'Inception',
    description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
    short_description: 'Dream thieves attempt the impossible: inception.',
    slogan: 'Your mind is the scene of the crime',
    poster: 'https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg',
    big_poster: 'https://image.tmdb.org/t/p/original/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg',
    video_url: 'https://www.youtube.com/watch?v=YoHD9XEInc0',
    trailer: 'https://www.youtube.com/watch?v=YoHD9XEInc0',
    quality: '4K',
    movie_type: 'movie',
    slug: 'inception',
    is_series: false,
    rating_kp: 8.8,
    votes: 2000000,
    rating: 8.8,
    count_opened: 980,
    is_send_telegram: false,
    updated_at: '2024-02-20',
    genres: [
      { _id: '1', name: 'Action', slug: 'action', description: 'Action movies', icon: '🎬' },
      { _id: '4', name: 'Sci-Fi', slug: 'sci-fi', description: 'Science Fiction movies', icon: '🚀' }
    ],
    actors: [actors[2]], // Leonardo DiCaprio
    collections: [
      { _id: '2', name: 'Christopher Nolan', slug: 'christopher-nolan', description: 'Movies directed by Christopher Nolan', icon: '🎥' }
    ],
    views: 12000,
    parameters: {
      year: 2010,
      duration: 148,
      country: 'USA',
      age: '12+'
    },
    videos: [
      {
        _id: '2',
        url: 'https://www.youtube.com/watch?v=YoHD9XEInc0',
        name: 'Official Trailer'
      }
    ],
    reviews: [
      {
        _id: '2',
        user: {
          _id: '2',
          name: 'Jane Smith'
        },
        text: 'Mind-bending masterpiece that keeps you guessing.',
        rating: 5,
        createdAt: '2024-02-20'
      }
    ],
    similar: [
      {
        _id: '5',
        title: 'Interstellar',
        poster: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
        slug: 'interstellar'
      }
    ],
    favorites: [],
    isSendTelegram: false,
    createdAt: '2024-02-20',
    updatedAt: '2024-02-20'
  },
  {
    _id: '3',
    kinopoisk_id: '326',
    tmdb_id: '278',
    title: 'The Shawshank Redemption',
    description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    short_description: 'Hope is a good thing, maybe the best of things, and no good thing ever dies.',
    slogan: 'Fear can hold you prisoner. Hope can set you free.',
    poster: 'https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
    big_poster: 'https://image.tmdb.org/t/p/original/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
    video_url: 'https://www.youtube.com/watch?v=6hB3S9bIaco',
    trailer: 'https://www.youtube.com/watch?v=6hB3S9bIaco',
    quality: '4K',
    movie_type: 'movie',
    slug: 'the-shawshank-redemption',
    is_series: false,
    rating_kp: 9.3,
    votes: 2800000,
    rating: 9.3,
    count_opened: 1500,
    is_send_telegram: false,
    updated_at: '2024-02-20',
    genres: [
      { _id: '3', name: 'Drama', slug: 'drama', description: 'Drama movies', icon: '🎭' }
    ],
    actors: [actors[1], actors[4]], // Morgan Freeman, Tom Hanks
    collections: [
      { _id: '3', name: 'Prison Movies', slug: 'prison-movies', description: 'Movies set in prison', icon: '🔒' }
    ],
    views: 18000,
    parameters: {
      year: 1994,
      duration: 142,
      country: 'USA',
      age: '16+'
    },
    videos: [
      {
        _id: '3',
        url: 'https://www.youtube.com/watch?v=6hB3S9bIaco',
        name: 'Official Trailer'
      }
    ],
    reviews: [
      {
        _id: '3',
        user: {
          _id: '3',
          name: 'Bob Wilson'
        },
        text: 'A timeless classic about hope and friendship.',
        rating: 5,
        createdAt: '2024-02-20'
      }
    ],
    similar: [
      {
        _id: '6',
        title: 'The Green Mile',
        poster: 'https://image.tmdb.org/t/p/w500/velWPhVMQeQKcxggNEU8YmIo52R.jpg',
        slug: 'the-green-mile'
      }
    ],
    favorites: [],
    isSendTelegram: false,
    createdAt: '2024-02-20',
    updatedAt: '2024-02-20'
  },
  {
    id: 4,
    title: 'Pulp Fiction',
    slug: 'pulp-fiction',
    rating: 8.9,
    poster: '/images/movies/pulp-fiction.jpg',
    bigPoster: '/images/movies/pulp-fiction-big.jpg',
    description: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
    duration: 154,
    year: 1994,
    genres: ['Crime', 'Drama'],
    actors: [8, 9, 10],
    countOpened: 1100,
    videoUrl: 'https://www.youtube.com/watch?v=s7EdQ4FqbhY'
  },
  {
    id: 5,
    title: 'The Matrix',
    slug: 'the-matrix',
    rating: 8.7,
    poster: '/images/movies/matrix.jpg',
    bigPoster: '/images/movies/matrix-big.jpg',
    description: 'A computer programmer discovers that reality as he knows it is a simulation created by machines, and joins a rebellion to break free.',
    duration: 136,
    year: 1999,
    genres: ['Action', 'Sci-Fi'],
    actors: [1, 4, 5],
    countOpened: 1300,
    videoUrl: 'https://www.youtube.com/watch?v=m8e-FF8MsqU'
  },
  {
    id: 6,
    title: 'Forrest Gump',
    slug: 'forrest-gump',
    rating: 8.8,
    poster: '/images/movies/forrest-gump.jpg',
    bigPoster: '/images/movies/forrest-gump-big.jpg',
    description: 'The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75.',
    duration: 142,
    year: 1994,
    genres: ['Drama', 'Romance'],
    actors: [2, 6, 8],
    countOpened: 950,
    videoUrl: 'https://www.youtube.com/watch?v=bLvqoHBptjg'
  },
  {
    id: 7,
    title: 'Fight Club',
    slug: 'fight-club',
    rating: 8.8,
    poster: '/images/movies/fight-club.jpg',
    bigPoster: '/images/movies/fight-club-big.jpg',
    description: 'An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.',
    duration: 139,
    year: 1999,
    genres: ['Drama'],
    actors: [3, 7, 9],
    countOpened: 890,
    videoUrl: 'https://www.youtube.com/watch?v=qtRKdVHc-cE'
  },
  {
    id: 8,
    title: 'Goodfellas',
    slug: 'goodfellas',
    rating: 8.7,
    poster: '/images/movies/goodfellas.jpg',
    bigPoster: '/images/movies/goodfellas-big.jpg',
    description: 'The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito.',
    duration: 146,
    year: 1990,
    genres: ['Biography', 'Crime', 'Drama'],
    actors: [4, 8, 10],
    countOpened: 780,
    videoUrl: 'https://www.youtube.com/watch?v=qo5jJpHtI1Y'
  },
  {
    id: 9,
    title: 'The Silence of the Lambs',
    slug: 'the-silence-of-the-lambs',
    rating: 8.6,
    poster: '/images/movies/silence-lambs.jpg',
    bigPoster: '/images/movies/silence-lambs-big.jpg',
    description: 'A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer.',
    duration: 118,
    year: 1991,
    genres: ['Crime', 'Drama', 'Thriller'],
    actors: [5, 9, 1],
    countOpened: 670,
    videoUrl: 'https://www.youtube.com/watch?v=W6Mm8Sbe__o'
  },
  {
    id: 10,
    title: 'Schindler\'s List',
    slug: 'schindlers-list',
    rating: 8.9,
    poster: '/images/movies/schindlers-list.jpg',
    bigPoster: '/images/movies/schindlers-list-big.jpg',
    description: 'In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.',
    duration: 195,
    year: 1993,
    genres: ['Biography', 'Drama', 'History'],
    actors: [6, 10, 2],
    countOpened: 560,
    videoUrl: 'https://www.youtube.com/watch?v=gG22XNhtnoY'
  }
] 