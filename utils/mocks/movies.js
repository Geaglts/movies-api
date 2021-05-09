let moviesMock = [
    {
        id: 'aaaca176-1cc9-45de-914e-a139cdbd3d2c',
        title: "Scatter My Ashes at Bergdorf's",
        year: 2008,
        cover: 'http://dummyimage.com/242x120.png/cc0000/ffffff',
        description:
            'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        duration: 1957,
        contentRating: 'PG-13',
        source:
            'https://dyndns.org/maecenas/pulvinar/lobortis/est/phasellus.aspx',
        tags: ['Action', 'Crime|Drama|Thriller'],
    },
    {
        id: '42f1fdc8-d0b0-49c9-bd84-935d37525697',
        title: 'Hearts Divided',
        year: 2001,
        cover: 'http://dummyimage.com/152x178.png/cc0000/ffffff',
        description:
            'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
        duration: 1940,
        contentRating: 'NC-17',
        source: 'https://arstechnica.com/vestibulum.aspx',
        tags: [
            'Action|Thriller',
            'Adventure|Drama|Sci-Fi',
            'Drama',
            'Documentary',
            'Comedy',
        ],
    },
    {
        id: '9e11f642-6f75-450d-a1ac-8cca49a5efd6',
        title: 'Girl Play',
        year: 1988,
        cover: 'http://dummyimage.com/170x202.png/cc0000/ffffff',
        description:
            'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
        duration: 2030,
        contentRating: 'PG',
        source: 'http://surveymonkey.com/est.jsp',
        tags: ['Action|Drama|Mystery|Thriller'],
    },
    {
        id: '4d59ce08-bb02-43e4-8743-f43fc9713b27',
        title: 'Mortal Instruments: City of Bones, The',
        year: 1994,
        cover: 'http://dummyimage.com/123x109.png/cc0000/ffffff',
        description:
            'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
        duration: 2068,
        contentRating: 'NC-17',
        source: 'https://typepad.com/integer/a/nibh/in/quis/justo.png',
        tags: [
            'Drama',
            'Drama|Thriller',
            'Documentary',
            'Comedy',
            'Comedy|Western',
        ],
    },
    {
        id: 'fcef6ae3-df1f-4e33-9b8b-0500e45b8839',
        title: 'Better Off Dead...',
        year: 2009,
        cover: 'http://dummyimage.com/102x103.png/dddddd/000000',
        description:
            'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
        duration: 2041,
        contentRating: 'PG-13',
        source: 'http://bloglovin.com/in/leo/maecenas/pulvinar/lobortis/est.js',
        tags: [
            'Action|Adventure',
            'Comedy|Crime|Drama',
            'Action|Children|Sci-Fi|IMAX',
            'Thriller',
            'Comedy',
        ],
    },
    {
        id: 'c0064b2e-da8b-4218-bb6d-252fec01803c',
        title: 'Pagemaster, The',
        year: 2011,
        cover: 'http://dummyimage.com/121x207.png/dddddd/000000',
        description:
            'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
        duration: 1934,
        contentRating: 'PG-13',
        source: 'http://stumbleupon.com/tincidunt/eu.jsp',
        tags: ['Mystery|Thriller', 'Action|Adventure|Crime|Drama|Thriller'],
    },
    {
        id: '8941b71a-b4a2-4f0e-9526-a8db49f13bd8',
        title: 'This Woman Is Dangerous',
        year: 1995,
        cover: 'http://dummyimage.com/114x148.png/ff4444/ffffff',
        description:
            'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
        duration: 1979,
        contentRating: 'R',
        source: 'https://zimbio.com/nulla/neque/libero/convallis.jsp',
        tags: [
            'Comedy|Crime|Drama|Thriller',
            'Drama|Thriller',
            'Comedy|Drama',
            'Drama',
        ],
    },
    {
        id: '0d6c9282-0a9c-4a08-975a-f6b6a267117e',
        title: 'Bandolero!',
        year: 2011,
        cover: 'http://dummyimage.com/179x226.png/dddddd/000000',
        description:
            'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.',
        duration: 1928,
        contentRating: 'PG',
        source: 'http://tuttocitta.it/faucibus/accumsan/odio.xml',
        tags: [
            'Animation|Children|Comedy|Fantasy',
            'Thriller',
            'Action|Crime|Drama|Thriller',
            'Comedy|Drama|War',
        ],
    },
    {
        id: '038120bd-543a-410a-b52f-ffff59f8a733',
        title: 'Bhowani Junction',
        year: 1999,
        cover: 'http://dummyimage.com/215x100.png/ff4444/ffffff',
        description:
            'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
        duration: 2060,
        contentRating: 'R',
        source: 'http://t-online.de/pellentesque/at/nulla.js',
        tags: [
            'Comedy',
            'Action|Thriller|Western',
            'Drama',
            'Comedy|Horror',
            'Documentary',
        ],
    },
    {
        id: 'b20a3849-952f-4a65-92aa-1ae43dae7804',
        title: 'James Dean',
        year: 1990,
        cover: 'http://dummyimage.com/221x199.png/dddddd/000000',
        description:
            'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
        duration: 1996,
        contentRating: 'PG',
        source: 'http://alexa.com/odio/porttitor/id.png',
        tags: [
            'Comedy|Crime',
            'Drama|Musical',
            '(no genres listed)',
            'Romance|Sci-Fi',
        ],
    },
];

function filteredMoviesMock(tag) {
    return moviesMock.filter((movie) => movie.tags.includes(tag));
}

class MoviesServiceMock {
    getMovies() {
        return Promise.resolve(moviesMock);
    }

    createMovie() {
        return Promise.resolve(moviesMock[0]);
    }
}

module.exports = { moviesMock, filteredMoviesMock, MoviesServiceMock };
