import { createRef } from "react";

export const anyRef =createRef<{
    setValue: (name: "comp" | "playerIndex" | "minute" | "homeScore" | "awayScore" | "awayTeam" | "sponsor", value: string | number)  => void
  }>()