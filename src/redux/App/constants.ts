import { GameData, Theme, GameGenres } from "./types";
import { assets } from "../../constants";

export const games: GameData[] = [
  {
    name: "Call of Duty Black Ops: Cold War",
    coverArtUrl: assets.codbo,
    playtime: 15190,
    progression: 31,
    genre: [GameGenres.action],
    title: "KingKiller",
    titleUrl: assets.target,
    wallpaperUrl: assets.codboWp,
    theme: Theme.DARK,
    audioUrl: assets.codAudio,
  },
  {
    name: "Ghost of Tsushima",
    coverArtUrl: assets.ghost,
    playtime: 35190,
    progression: 62,
    genre: [GameGenres.action, GameGenres.adventure],
    title: "Ronin",
    titleUrl: assets.buddah,
    wallpaperUrl: assets.ghostWp,
    theme: Theme.DARK,
    audioUrl: assets.ghostAudio,
  },
  {
    name: "God of War",
    coverArtUrl: assets.gow,
    playtime: 55190,
    progression: 80,
    genre: [GameGenres.action, GameGenres.adventure],
    title: "God Slayer",
    titleUrl: assets.skull,
    wallpaperUrl: assets.gowWp,
    theme: Theme.LIGHT,
    audioUrl: assets.gowAudio,
  },
  {
    name: "The Witcher III: Wild Hunt",
    coverArtUrl: assets.witcher,
    playtime: 45190,
    progression: 77,
    genre: [GameGenres.action, GameGenres.adventure, GameGenres.puzzle],
    title: "Wolfblood",
    titleUrl: assets.wolf,
    wallpaperUrl: assets.witcherWp,
    theme: Theme.DARK,
    audioUrl: assets.witcherAudio,
  },
  {
    name: "Naruto Shippuden: Ultimate Ninja Storm 4",
    coverArtUrl: assets.naruto,
    playtime: 75190,
    progression: 90,
    genre: [GameGenres.action, GameGenres.adventure],
    title: "Anbu",
    titleUrl: assets.anbu,
    wallpaperUrl: assets.narutoWp,
    theme: Theme.DARK,
    audioUrl: assets.narutoAudio,
  },
];
