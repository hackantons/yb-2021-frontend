enum POSITIONEN {
  TOR = 'Tor',
  MITTELFELD = 'Mittelfeld',
}

export const TEAM_API: Array<{
  firstName: string;
  lastName: string;
  position: POSITIONEN;
  number: number;
  stat: {
    games: number;
    goals: number;
  };
  assets: {
    portrait: string;
    action: string;
  };
}> = [
  {
    firstName: 'David',
    lastName: 'von Ballmoos',
    position: POSITIONEN.TOR,
    number: 26,
    stat: {
      games: 6,
      goals: 0,
    },
    assets: {
      portrait: 'https://center.bscyb.dev/team/david-von-ballmoos',
      action: 'https://center.bscyb.dev/team/david-von-ballmoos-action',
    },
  },
  {
    firstName: 'Sandro',
    lastName: 'Lauper',
    number: 30,
    position: POSITIONEN.MITTELFELD,
    stat: {
      games: 6,
      goals: 0,
    },
    assets: {
      portrait: 'https://center.bscyb.dev/team/david-von-ballmoos',
      action: 'https://center.bscyb.dev/team/david-von-ballmoos-action',
    },
  },
];
