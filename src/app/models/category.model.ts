export class SongModel {
  id: string;
  title: string;
  description: string;
  artist: string;
  album: string;
  youtubeUrl: string;
  votes: number;
  year: number;
}

export class InterestCategoryYearModel {
  id: string;
  year: number;
  title: string;
  description: string;
  songs: Array<SongModel> = new Array<SongModel>();
}

export class InterestCategoryModel {
  id: string;
  title: string;
  description: string;
  subCategories: Array<InterestCategoryYearModel> = new Array<InterestCategoryYearModel>();
  imageUrl: string;
}

export class StubModel {
  abc: Array<InterestCategoryModel> = new Array<InterestCategoryModel>();
  getCategoryData() {
    let song1 = new SongModel();
    song1.title = 'FLY OR DIE';
    song1.artist = 'Rock Mafia';
    song1.description = 'Fly Or Die This song is by Rock Mafia. This song is featured in the video game FIFA 13.';

    let song2 = new SongModel();
    song2.title = 'LOVE ME AGAIN';
    song2.artist = 'John Newman';
    song2.description = '"Love Me Again" is a song by English singer John Newman. It was released on 30 June 2013 as the lead single from his debut studio album, Tribute (2013).';



    let year2017 = new InterestCategoryYearModel();
    year2017.id = '0';
    year2017.title = '2017';
    year2017.year = 2017;
    year2017.description = 'SONGS RELEASED IN 2017';
    year2017.songs.push(song1);
    year2017.songs.push(song2);

    let year2018 = new InterestCategoryYearModel();
    year2018.id = '1';
    year2018.title = '2018';
    year2018.year = 2018;
    year2018.description = 'SONGS RELEASED IN 2018';
    year2018.songs.push(song1);
    year2018.songs.push(song2);



    let categoryFifa = new InterestCategoryModel();
    categoryFifa.id = '0';
    categoryFifa.description = 'Every FIFA Soundtrack Song EVER';
    categoryFifa.title = 'FIFA';
    categoryFifa.subCategories.push(year2017);
    categoryFifa.subCategories.push(year2018);

    let categoryPinkFloyd = new InterestCategoryModel();
    categoryPinkFloyd.id = '1';
    categoryPinkFloyd.description = 'Every PINK FLOYD Song EVER';
    categoryPinkFloyd.title = 'PINK FLOYD';
    categoryPinkFloyd.subCategories.push(year2017);
    categoryPinkFloyd.subCategories.push(year2018);



    this.abc.unshift(categoryPinkFloyd);
    this.abc.unshift(categoryFifa);

    return this.abc;
  }
}
