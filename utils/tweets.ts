interface Data {
  lastName: string;
  minute: number;
  awayScore: number;
  homeScore: number;
}

const earlyWith0Message = [
  `Ein frühes Tor für YB! In der %minute%. Minute schiesst %lastName% YB in Führung. 💛🖤`,
  `YB startet besser in die Partie. %lastName% bringt YB in der %minute%. Minute früh näher zum Sieg. 💛🖤`,
];

const basicMessage = [
  `%minute%. %homeScore%:%awayScore%. %lastName% haut den Ball ins Netz! 💛🖤`,
  `%lastName% schiesst ein Tor für YB! %minute%. Minute. %homeScore%:%awayScore%. 💛🖤`,
];

const equalMessage = [
  `%lastName% gleicht aus für YB! Das Spiel können wir noch gewinnen! 💛🖤`,
  `%minute%. Tor für YB. Die Karten sind dank %lastName% neu gemischt! 💛🖤`,
];

const randomNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const replace = (str: string, inputProps: Data) => {
  return str
    .replaceAll('%lastName%', inputProps.lastName)
    .replaceAll('%minute%', inputProps.minute.toString())
    .replaceAll('%homeScore%', inputProps.homeScore.toString())
    .replaceAll('%awayScore%', inputProps.awayScore.toString());
};

export const buildMessage = (inputProps: Data) => {
  if (inputProps.minute < 10 && inputProps.awayScore == 0) {
    return replace(
      earlyWith0Message[randomNumber(0, earlyWith0Message.length - 1)],
      inputProps
    );
  }
  if (inputProps.awayScore === inputProps.homeScore) {
    return replace(
      equalMessage[randomNumber(0, randomNumber.length - 1)],
      inputProps
    );
  }
  return replace(
    basicMessage[randomNumber(0, basicMessage.length - 1)],
    inputProps
  );
};
