const initialstate = {
  events: [
    {
      type: "Goal",
      team: "Home",
      score: {
        home: 2,
        away: 1
      },
      players: [
        1, 2, 0
      ]
    },
    {
      type: "fight",
      score: {
        home: 2,
        away: 1
      },
      players: [
        2, 0
      ]
    }
  ],
  home: {
    name: "Bridgton Academy",
    mascot: "Wolverines",
    site: "https://bridgtonacademy.org/",
    players: [
        {
          First: "Griffin",
          Last: "Burkey",
          number: 1,
          Position: "Goalie",
          id: 1
        },
        {
          First: "Bryson",
          Last: "Pacocha",
          number: 2,
          Position: "Goalie",
          id: 2
        },
        {
          First: "Cam",
          Last: "Hubbard",
          number: 3,
          Position: "Goalie",
          id: 3
        },
      ],
  },
  away: {
    name: "Harvard",
    mascot: "Crimson",
    site: "http://www.harvard.edu/",
    players: [
      {
        First: "Yung",
        Last: "Money",
        number: 0,
        Position: "Forward",
        id: 0
      },
    ]
  }
}

export default function gameReducer (state = initialstate, action) {
  return state
}
