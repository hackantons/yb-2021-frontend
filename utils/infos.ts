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

export const TEAM_API: Record<number, PlayerI> = {
  30: {
    firstName: 'Sandro',
    lastName: 'Lauper',
    number: 30,
    position: POSITIONEN.MITTELFELD,
    stat: {
      games: 9,
      goals: 5,
    },
    assets: {
      portrait:
        'https://yb-hackathon-2021-players.s3.eu-central-1.amazonaws.com/30_Lauper.png',
      action:
        'https://yb-hackathon-2021-players.s3.eu-central-1.amazonaws.com/30_lauper_action.png',
    },
  },
  20: {
    firstName: 'Michel',
    lastName: 'Aebischer',
    number: 20,
    position: POSITIONEN.MITTELFELD,
    stat: {
      games: 0,
      goals: 9,
    },
    assets: {
      portrait:
        'https://yb-hackathon-2021-players.s3.eu-central-1.amazonaws.com/20_Aebischer.png',
      action:
        'https://yb-hackathon-2021-players.s3.eu-central-1.amazonaws.com/20_aebischer_action.png',
    },
  },
  16: {
    firstName: 'Christian',
    lastName: 'Fassnacht',
    number: 16,
    position: POSITIONEN.MITTELFELD,
    stat: {
      games: 2,
      goals: 8,
    },
    assets: {
      portrait:
        'https://yb-hackathon-2021-players.s3.eu-central-1.amazonaws.com/16_Fassnacht.png',
      action:
        'https://yb-hackathon-2021-players.s3.eu-central-1.amazonaws.com/16_fassnacht_action.png',
    },
  },
  26: {
    firstName: 'David',
    lastName: 'von Ballmoos',
    position: POSITIONEN.TOR,
    number: 26,
    stat: {
      games: 6,
      goals: 10,
    },
    assets: {
      portrait:
        'https://yb-hackathon-2021-players.s3.eu-central-1.amazonaws.com/26_von_Ballmoos.png',
      action:
        'https://yb-hackathon-2021-players.s3.eu-central-1.amazonaws.com/26_von_ballmoos_action.png',
    },
  },
  99: {
    firstName: 'Jana',
    lastName: 'Neuhaus',
    position: POSITIONEN.MITTELFELD,
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
  98: {
    firstName: 'Carola',
    lastName: 'Fasel',
    position: POSITIONEN.MITTELFELD,
    number: 98,
    stat: {
      games: 6,
      goals: 4,
    },
    assets: {
      portrait: 'https://www.bscyb.ch/kader-frauen?s=264',
      action: 'https://www.bscyb.ch/kader-frauen?s=264',
    },
  },
};

export enum Teams {
  YB = 'BSCYB',
  ZURICH = 'FC Zürich',
  BASEL = 'FC Basel',
  LUZERN = 'FC Luzern',
  LUGANO = 'FC Lugano',
}

export enum Sponsors {
  SWISSCOM = 'Swisscom',
  BIER = 'Feldschlösschen',
  ISOLUTIONS = 'iSolutions',
}

export const VIDEO_HEIGHT = 1280;
export const VIDEO_WIDTH = 720;
export const FPS = 30;
export const GOAL_VIDEO_DURATION = 265;

export enum EVENT_TYPES {
  GOAL = 'Tor',
  CHANGE = 'Wechsel',
}

export interface EventI {
  timestamp: number;
  type: EVENT_TYPES;
  team: string;
  minute: number;
  text: string;
  payload: Object;
}
