export const categories = [
  { id: 1, title: "TV Shows", slug: "tv" },
  { id: 2, title: "Movies", slug: "movies" },
  { id: 3, title: "Music", slug: "music" },
  { id: 4, title: "Books", slug: "books" },
];

export const getTotalTime = (selection: any) => {
  const seconds = Object.entries(selection).reduce(
    (total, [, v]: any) => total + v.timeTaken,
    0,
  );
  return new Date(seconds * 1000).toISOString().slice(14, 19);
};

export const isCorrect = (id: number, answer: number) =>
  id === answer ? "correct-answer" : "wrong-answer";

export const handleCorrectionOption = (
  selection: number,
  option: number,
  answer: number,
) => {
  // eslint-disable-next-line no-nested-ternary
  return selection === option
    ? isCorrect(option, answer)
    : option === answer
    ? "correct-answer"
    : "";
};

export const topics = {
  "TV Shows": [
    {
      id: 1,
      title: "Breaking Bad",
      slug: "breaking-bad",
      poster:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",

      quiz: [
        {
          id: 1,
          question: "What is the name of the main character?",
          options: [
            { id: 1, title: "Walter White", correct: true },
            { id: 2, title: "Jesse Pinkman" },
            { id: 3, title: "Saul Goodman" },
            { id: 4, title: "Hank Schrader" },
          ],
          answer: {
            id: 1,
            title: "Walter White",
            correct: true,
          },
        },

        {
          id: 2,
          question:
            "Walt’s pre-Heisenberg vehicle, the one he runs over the gangsters in, is a…",
          options: [
            { id: 1, title: "Chevy Citation" },
            { id: 2, title: "Nissan Cube" },
            { id: 3, title: "Ford Explorer" },
            { id: 4, title: "Pontiac Aztek" },
          ],
          answer: {
            id: 4,
            title: "Pontiac Aztek",
          },
        },
        {
          id: 3,
          question: "Walt doesn’t call it the meth game, though. He calls it…",
          options: [
            { id: 1, title: "“Making a living”" },
            { id: 2, title: "“My family’s nest egg”" },
            { id: 3, title: "“The empire business”" },
            { id: 4, title: "“Pure chemistry”" },
          ],
          answer: {
            id: 3,
            title: "“The empire business”",
          },
        },
        {
          id: 4,
          question: "What is the name of Walt’s best friend?",
          options: [
            { id: 1, title: "Jesse" },
            { id: 2, title: "Elliott" },
            { id: 3, title: "Hank" },
            { id: 4, title: "Tobias" },
          ],
          answer: {
            id: 2,
            title: "Elliott",
          },
        },
        {
          id: 5,
          question: "What is the name of the drug that Walt uses to get high?",
          options: [
            { id: 1, title: "Meth" },
            { id: 2, title: "Heroin" },
            { id: 3, title: "Cocaine" },
            { id: 4, title: "Weed" },
          ],
          answer: {
            id: 1,
            title: "Meth",
          },
        },
      ],
    },
    {
      id: 2,
      title: "Game of Thrones",
      slug: "game-of-thrones",
      poster:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg",
      quiz: [
        {
          id: 1,
          question: "Who is the youngest of Ned Stark’s children?",
          options: [
            { id: 1, title: "Rickon" },
            { id: 2, title: "Arya" },
            { id: 3, title: "Bran" },
            { id: 4, title: "Sansa" },
          ],
          answer: {
            id: 1,
            title: "Sansa",
          },
        },

        {
          id: 2,
          question: "Who is Jon Snow's mother",
          options: [
            { id: 1, title: "Cersei Lannister" },
            { id: 2, title: "Lysa Arryn" },
            { id: 3, title: "an unnamed prostitute" },
            { id: 4, title: "Lyanna Stark" },
          ],
          answer: {
            id: 4,
            title: "Lyanna Stark",
          },
        },
        {
          id: 3,
          question: "What is Davos Seaworth’s nickname?",
          options: [
            { id: 1, title: "the Sand Snake" },
            { id: 2, title: "Hot Pie" },
            { id: 3, title: "the Onion Knight" },
            { id: 4, title: "the Hound" },
          ],
          answer: {
            id: 3,
            title: "the Onion Knight",
          },
        },
        {
          id: 4,
          question:
            "Which character, also known as the Lightning Lord, gets continually resurrected by Thoros of Myr after he dies?",
          options: [
            { id: 1, title: "Alliser Thorne" },
            { id: 2, title: "Beric Dondarrion" },
            { id: 3, title: "Jaqen H’ghar" },
            { id: 4, title: "Barristan Selmy" },
          ],
          answer: {
            id: 2,
            title: "Beric Dondarrion",
          },
        },
        {
          id: 5,
          question:
            "How does Gregor (“the Mountain”) Clegane kill Oberyn Martell, the “Red Viper,” in their trial by combat?",
          options: [
            { id: 1, title: "poisons him" },
            { id: 2, title: "crushes his skull" },
            { id: 3, title: "strangles hims" },
            { id: 4, title: "cuts his head off" },
          ],
          answer: {
            id: 2,
            title: "crushes his skull",
          },
        },
      ],
    },
    {
      id: 3,
      title: "The office",
      slug: "the-office",
      poster:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qWnJzyZhyy74gjpSjIXWmuk0ifX.jpg",
      quiz: [
        {
          id: 1,
          question:
            "The office is set in the fictitious paper company named ...",
          options: [
            { id: 1, title: "Dunder Mifflin" },
            { id: 2, title: "Scranton Paper" },
            { id: 3, title: "Stark Industries" },
            { id: 4, title: "Toby Paper" },
          ],
          answer: {
            id: 1,
            title: "Dunder Mifflin",
          },
        },
        {
          id: 2,
          question: "What political position did Angela's first husband hold",
          options: [
            { id: 1, title: "State Senator" },
            { id: 2, title: "U.S. Senator" },
            { id: 3, title: "Governor" },
            { id: 4, title: "Congressman" },
          ],
          answer: {
            id: 1,
            title: "State Senator",
          },
        },
        {
          id: 3,
          question: "Where did Phyllis's husband Bob Vance work?",
          options: [
            { id: 1, title: "Vance Refrigeration " },
            { id: 2, title: "Vance Heating & Cooling" },
            { id: 3, title: "Vance Roofing" },
            { id: 4, title: "Vance Windows and Doors" },
          ],
          answer: {
            id: 1,
            title: "Vance Refrigeration ",
          },
        },
        {
          id: 4,
          question: "Why was Dwight removed as safety officer?",
          options: [
            { id: 1, title: "He caused Stanley to have a heart Attack" },
            { id: 2, title: "He set a fire in the office" },
            {
              id: 3,
              title: "He locked the doors so no one could leave the office",
            },
            { id: 4, title: "All of the above" },
          ],
          answer: {
            id: 2,
            title: "He set a fire in the office",
          },
        },
        {
          id: 5,
          question:
            "Toby Flenderson was a junior on what infamous murder case?",
          options: [
            { id: 1, title: "The Scranton Strangler" },
            { id: 2, title: "The Mifflin Murderer" },
            { id: 3, title: "The Jersey Jabber" },
            { id: 4, title: "The Pennsylvania Poisoner" },
          ],
          answer: {
            id: 1,
            title: "The Scranton Strangler",
          },
        },
      ],
    },
  ],
  Movies: [
    {
      id: 1,
      title: "The Dark Knight",
      slug: "the-dark-knight",
      poster:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      quiz: [
        {
          id: 1,
          question: "Who played Batman in the movie?",
          options: [
            { id: 1, title: "Christian Bale" },
            { id: 2, title: "Bend Afleck" },
            { id: 3, title: "George Clooney" },
            { id: 4, title: "Val Kilmer" },
          ],
          answer: {
            id: 1,
            title: "Christian Bale",
          },
        },
        {
          id: 2,
          question:
            "Who is the mastermind behind the bank robbery at the beginning of the movie?",
          options: [
            { id: 1, title: "The Russian Mob" },
            { id: 2, title: "Penguin" },
            { id: 3, title: "Two Face" },
            { id: 4, title: "The Joker" },
          ],
          answer: {
            id: 4,
            title: "The Joker",
          },
        },

        {
          id: 3,
          question: "Who is district Attorney ?",
          options: [
            { id: 1, title: "Bruce Wayne" },
            { id: 2, title: "Jim Gordon" },
            { id: 3, title: "Harvey Dent" },
            { id: 4, title: "Anthony Garcia" },
          ],
          answer: {
            id: 4,
            title: "The Joker",
          },
        },
        {
          id: 4,
          question: "How does the Joker leave the bank after he robs it ?",
          options: [
            { id: 1, title: "On foot" },
            { id: 2, title: "A School Bus" },
            { id: 3, title: "The Sewers" },
            { id: 4, title: "A Plane" },
          ],
          answer: {
            id: 2,
            title: "A School Bus",
          },
        },
        {
          id: 5,
          question: "Who does the Joker have kidnapped?",
          options: [
            { id: 1, title: "Harvey dent " },
            { id: 2, title: "Jim Gordon" },
            { id: 3, title: "Bruce Wayne" },
            { id: 4, title: "Alfred Pennyworth" },
          ],
          answer: {
            id: 1,
            title: "Harvey dent ",
          },
        },
      ],
    },
    {
      id: 2,
      title: "Pulp Fiction",
      slug: "pulp-fiction",
      poster:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fIE3lAGcZDV1G6XM5KmuWnNsPp1.jpg",
      quiz: [
        {
          id: 1,
          question: "What year was Pulp Fiction released?",
          options: [
            { id: 1, title: "1994" },
            { id: 2, title: "1993" },
            { id: 3, title: "1996" },
            { id: 4, title: "1995" },
          ],
          answer: {
            id: 1,
            title: "1994",
          },
        },
        {
          id: 2,
          question: "Who are the first two characters seen in the film?",
          options: [
            { id: 1, title: "PUMPKIN AND HONEY BUNNY" },
            { id: 2, title: "BUTCH AND MARSELLUS" },
            { id: 3, title: "BUTCH AND FABIENNE" },
            { id: 4, title: "VINCENT AND JULES" },
          ],
          answer: {
            id: 1,
            title: "PUMPKIN AND HONEY BUNNY",
          },
        },
        {
          id: 3,
          question: "What city has Vincent just returned from?",
          options: [
            { id: 1, title: "AMSTERDAM" },
            { id: 2, title: "PARIS" },
            { id: 3, title: "STOCKHOLM" },
            { id: 4, title: "BERLIN" },
          ],
          answer: {
            id: 1,
            title: "AMSTERDAM",
          },
        },
        {
          id: 4,
          question: "Which character does Quentin Tarantino himself play?",
          options: [
            { id: 1, title: "ANTOINE" },
            { id: 2, title: "BRETT" },
            { id: 3, title: "JIMMIE" },
            { id: 4, title: "LANCE" },
          ],
          answer: {
            id: 3,
            title: "JIMMIE",
          },
        },
        {
          id: 5,
          question: "What is the name of the restaurant Mia takes Vincent to?",
          options: [
            { id: 1, title: "WILDCAT BILL'S" },
            { id: 2, title: "PRAIRIE DOG JOE'S" },
            { id: 3, title: "JACKRABBIT SLIM'S" },
            { id: 4, title: "PANTHER PETE'S" },
          ],
          answer: {
            id: 3,
            title: "JACKRABBIT SLIM'S",
          },
        },
      ],
    },
  ],
  Music: [
    {
      id: 1,
      title: "Eminem",
      slug: "eminem",
      poster:
        "https://images.genius.com/357dbca4b44758c4b734ecb5c6dd19bc.1000x1000x1.jpg",
      quiz: [
        {
          id: 1,
          question: "What is the real name of Eminem?",
          options: [
            { id: 1, title: "Slim Shady" },
            { id: 2, title: "Marshall Bruce Mathers" },
            { id: 3, title: "James Gosling" },
            { id: 4, title: "Frank Zimmer" },
          ],
          answer: {
            id: 2,
            title: "Marshall Bruce Mathers",
          },
        },
        {
          id: 2,
          question: "What Is The Name Of Eminem's Mother?",
          options: [
            { id: 1, title: "Jane" },
            { id: 2, title: "Debbie" },
            { id: 3, title: "Grace" },
            { id: 4, title: "Fran" },
          ],
          answer: {
            id: 2,
            title: "Debbie",
          },
        },
        {
          id: 3,
          question:
            "Name The Eminem Song: 'There's Vomit On His Sweater Already'",
          options: [
            { id: 1, title: "Without Me" },
            { id: 2, title: "Rap God" },
            { id: 3, title: "My Name Is" },
            { id: 4, title: "Lose Yourself" },
          ],
          answer: {
            id: 4,
            title: "Lose Yourself",
          },
        },
        {
          id: 4,
          question: "What is Honey Bunny's real name?",
          options: [
            { id: 1, title: "MIA" },
            { id: 2, title: "JODY" },
            { id: 3, title: "RAQUEL" },
            { id: 4, title: "YOLANDA" },
          ],
          answer: {
            id: 4,
            title: "YOLANDA",
          },
        },
        {
          id: 5,
          question:
            "What was the only feature film Tarantino had directed before Pulp Fiction?",
          options: [
            { id: 1, title: "RESERVOIR DOGS" },
            { id: 2, title: "JACKIE BROWN" },
            { id: 3, title: "TRUE ROMANCE" },
            { id: 4, title: "FROM DUSK 'TIL DAWN" },
          ],
          answer: {
            id: 1,
            title: "RESERVOIR DOGS",
          },
        },
      ],
    },
    {
      id: 2,
      title: "The Weeknd",
      slug: "the-rolling-stones",
      poster:
        "https://images.genius.com/1bab7f9dbd1216febc16d73ae4da9bd0.1000x1000x1.jpg",
      quiz: [
        {
          id: 1,
          question: "What is The Weeknd's birth name?",
          options: [
            { id: 1, title: "Aaron Tesfaye" },
            { id: 2, title: "Shar Tsiano" },
            { id: 3, title: "Mike Abel" },
            { id: 4, title: "Abel Tesfaye" },
          ],
          answer: {
            id: 4,
            title: "RESERVOIR DOGS",
          },
        },
        {
          id: 2,
          question: "What is the title of his second album?",
          options: [
            { id: 1, title: "Mad Beauty" },
            { id: 2, title: "Ashes For Beauty" },
            { id: 3, title: "Beauty Behind the Madness" },
            { id: 4, title: "Starboy" },
          ],
          answer: {
            id: 3,
            title: "Beauty Behind the Madness",
          },
        },
        {
          id: 3,
          question:
            "While his mother worked multiple jobs, he was reportedly brought up by his...",
          options: [
            { id: 1, title: "Sister" },
            { id: 2, title: "Father" },
            { id: 3, title: "Aunt" },
            { id: 4, title: "Grandmother" },
          ],
          answer: {
            id: 4,
            title: "Grandmother",
          },
        },
        {
          id: 4,
          question: "Which of these is the title of one of his albums?",
          options: [
            { id: 1, title: "Rider" },
            { id: 2, title: "Starboy" },
            { id: 3, title: "After Day" },
            { id: 4, title: "Independence" },
          ],
          answer: {
            id: 2,
            title: "Starboy",
          },
        },
      ],
    },
  ],
  Books: [
    {
      id: 1,
      title: "The Lord of the Rings",
      slug: "the-lord-of-the-rings",
      poster:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1566425108l/33.jpg",
      quiz: [
        {
          id: 1,
          question:
            "Who possesses the ring of power at the start of the trilogy?",
          options: [
            { id: 1, title: "Gandalf" },
            { id: 2, title: "Bilbo" },
            { id: 3, title: "Frodo" },
            { id: 4, title: "Sauron" },
          ],
          answer: {
            id: 2,
            title: "Bilbo",
          },
        },
        {
          id: 2,
          question: "Who do the hobbits encounter at the Prancing Pony?",
          options: [
            { id: 1, title: "Gandalf" },
            { id: 2, title: "Legolas" },
            { id: 3, title: "Strider" },
            { id: 4, title: "Boromir" },
          ],
          answer: {
            id: 3,
            title: "Strider",
          },
        },
        {
          id: 3,
          question: " How many members make up the fellowship of the ring?",
          options: [
            { id: 1, title: "Seven" },
            { id: 2, title: "Eight" },
            { id: 3, title: "Nine" },
            { id: 4, title: "Ten" },
          ],
          answer: {
            id: 3,
            title: "Nine",
          },
        },
        {
          id: 4,
          question: "What is the name of the elf in the fellowship?",
          options: [
            { id: 1, title: "Gimli" },
            { id: 2, title: "Legolas" },
            { id: 3, title: "Merry" },
            { id: 4, title: "Boromir" },
          ],
          answer: {
            id: 2,
            title: "Legolas",
          },
        },
        {
          id: 5,
          question:
            "When the pass of Caradhras is blocked, where does Frodo say the fellowship should go?",
          options: [
            { id: 1, title: "Rivendell" },
            { id: 2, title: "Lothlorien" },
            { id: 3, title: "Moria" },
            { id: 4, title: "Minas Tirith" },
          ],
          answer: {
            id: 3,
            title: "Moria",
          },
        },
      ],
    },
    {
      id: 2,
      title: "Harry Potter",
      slug: "harry-potter",
      poster:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1474171184l/136251._SY475_.jpg",
      quiz: [
        {
          id: 1,
          question:
            "What's Harry's mum Lily's surname before she marries Harry's dad?",
          options: [
            { id: 1, title: "Peters" },
            { id: 2, title: "Smith" },
            { id: 3, title: "Evans" },
            { id: 4, title: "Collins" },
          ],
          answer: {
            id: 3,
            title: "Evans",
          },
        },
        {
          id: 2,
          question: "How many Harry Potter books are there in total?",
          options: [
            { id: 1, title: "2" },
            { id: 2, title: "7" },
            { id: 3, title: "12" },
            { id: 4, title: "1" },
          ],
          answer: {
            id: 2,
            title: "7",
          },
        },
        {
          id: 3,
          question: "Who does Harry live with before going to Hogwarts?",
          options: [
            { id: 1, title: "The Simpsons" },
            { id: 2, title: "Menaces" },
            { id: 3, title: "The Dursleys" },
            { id: 4, title: "The Sheerans" },
          ],
          answer: {
            id: 3,
            title: "The Dursleys",
          },
        },
        {
          id: 5,
          question: "What is the name of Hermione Granger's cat?",
          options: [
            { id: 1, title: "Bart" },
            { id: 2, title: "Crookshanks" },
            {
              id: 3,
              title: "Peppa",
            },
            { id: 4, title: "Sarah" },
          ],
          answer: {
            id: 2,
            title: "Crookshanks",
          },
        },
      ],
    },
  ],
};

export const getActiveQuiz = (topicTitle: string, slug: string) => {
  return Object.entries(topics)
    .filter(([key]) => key === topicTitle)[0][1]
    .filter((topic) => slug === topic.slug);
};
