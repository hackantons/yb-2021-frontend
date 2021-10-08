enum POSITIONEN {
  TOR = 'Tor',
  MITTELFELD = 'Mittelfeld',
}

export interface PlayerI {
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
}

export const TEAM_API: Array<PlayerI> = [
  {
    firstName: 'Sandro',
    lastName: 'Lauper',
    number: 30,
    position: POSITIONEN.MITTELFELD,
    stat: {
      games: 9,
      goals: 5,
    },
    assets: {
      portrait: 'https://yb-hackathon-2021-players.s3.eu-central-1.amazonaws.com/30_Lauper.png',
      action: 'https://center.bscyb.dev/team/david-von-ballmoos-action',
    },
  },
  {
    firstName: 'Nico',
    lastName: 'Maier',
    number: 22,
    position: POSITIONEN.MITTELFELD,
    stat: {
      games: 0,
      goals: 0,
    },
    assets: {
      portrait: 'https://yb-hackathon-2021-players.s3.eu-central-1.amazonaws.com/22_Maier.png',
      action: 'https://center.bscyb.dev/team/david-von-ballmoos-action',
    },
  },
  {
    firstName: 'Michel',
    lastName: 'Aebischer',
    number: 20,
    position: POSITIONEN.MITTELFELD,
    stat: {
      games: 0,
      goals: 0,
    },
    assets: {
      portrait: 'https://yb-hackathon-2021-players.s3.eu-central-1.amazonaws.com/20_Aebischer.png',
      action: 'https://center.bscyb.dev/team/david-von-ballmoos-action',
    },
  },
  {
    firstName: 'Christian',
    lastName: 'Fassnacht',
    number: 16,
    position: POSITIONEN.MITTELFELD,
    stat: {
      games: 0,
      goals: 0,
    },
    assets: {
      portrait: 'https://yb-hackathon-2021-players.s3.eu-central-1.amazonaws.com/16_Fassnacht.png',
      action: 'https://center.bscyb.dev/team/david-von-ballmoos-action',
    },
  },
  {
    firstName: 'David',
    lastName: 'von Ballmoos',
    position: POSITIONEN.TOR,
    number: 26,
    stat: {
      games: 6,
      goals: 10,
    },
    assets: {
      portrait: 'https://yb-hackathon-2021-players.s3.eu-central-1.amazonaws.com/26_von_Ballmoos.png',
      action: 'https://center.bscyb.dev/team/david-von-ballmoos-action',
    },
  },
  {
    firstName: 'Jana',
    lastName: 'Neuhaus',
    position: POSITIONEN.TOR,
    number: 99,
    stat: {
      games: 6,
      goals: 4,
    },
    assets: {
      portrait: 'https://www.bscyb.ch/kader-frauen?s=264',
      action: 'https://www.bscyb.ch/kader-frauen?s=264',
    },
  },
];

export enum Teams {
  YB = 'yb',
  ZURICH = 'zurich',
  BASEL = 'basel',
  LUZERN = 'luzern',
  LUGANO = 'lugano',
}

export enum Sponsors {
  SWISSCOM = 'swisscom',
  BIER = 'bier',
  ISOLUTIONS = 'isolutions',
}

export const VIDEO_HEIGHT = 1920;
export const VIDEO_WIDTH = 1280;
export const FPS = 30;
export const GOAL_VIDEO_DURATION = 265;

enum EVENT_TYPES {
  GOAL = 'Tor',
  CHANGE = 'Wechsel',
}

export interface EventI {
  timestamp: number;
  type: EVENT_TYPES;
  minute: number;
  text: string;
  payload: Object;
}

export const events: Array<EventI> = [
  {
    timestamp: 1633719378,
    type: EVENT_TYPES.GOAL,
    minute: 30,
    text: 'Tor für BSCYB von Nico Maier',
    payload: {
      playerIndex: 2,
      minute: 30,
      homeScore: 7,
      awayScore: 2,
      awayTeam: Teams.BASEL,
    },
  },
  {
    timestamp: 1633719379,
    type: EVENT_TYPES.CHANGE,
    minute: 30,
    text: 'Christian Fasnacht kommt für Michel Aebischer',
    payload: {
      playerInIndex: 4,
      playerOutIndex: 3,
      minute: 30,
    },
  },
];
