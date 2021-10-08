import { Sponsors, Teams } from '../utils/infos';

export const mapTeam = (team: Teams) => {
  if (team === Teams.BASEL) {
    return 'FC Basel';
  }
  if (team === Teams.LUGANO) {
    return 'FC Lugano';
  }
  if (team === Teams.LUZERN) {
    return 'FC Luzern';
  }
  if (team === Teams.YB) {
    return 'BSC Young Boys';
  }
  if (team === Teams.ZURICH) {
    return 'FC Zürich';
  }
};

export const mapSponsor = (team: Sponsors) => {
  if (team === Sponsors.BIER) {
    return 'Feldschlösschen';
  }
  if (team === Sponsors.ISOLUTIONS) {
    return 'isolution';
  }
  if (team === Sponsors.SWISSCOM) {
    return 'Swisscom';
  }
};
