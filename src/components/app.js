import React from "react"
import {
  HashRouter,
  Route,
  NavLink
} from "react-router-dom"
import Group from "./group"
import {
  calculateResult
} from "./calculateresult"
import "./groupnavigationcomponent.css"
import "./group.css"
import Final18 from "./final18"
import Final14 from "./final14"
import Final12 from "./final12"
import Final from "./final"
import Brons from "./brons"

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      table: [{
        group: "A",
        country: "Ryssland",
        playedGames: "0",
        wins: "0",
        draws: "0",
        losts: "0",
        totOwnScore: "0",
        totAgainstScore: "0",
        diffScore: "0",
        points: "0"
      },
      {
        group: "A",
        country: "Saudiarabien",
        playedGames: "0",
        wins: "0",
        draws: "0",
        losts: "0",
        totOwnScore: "0",
        totAgainstScore: "0",
        diffScore: "0",
        points: "0"
      },
      {
        group: "A",
        country: "Egypten",
        playedGames: "0",
        wins: "0",
        draws: "0",
        losts: "0",
        totOwnScore: "0",
        totAgainstScore: "0",
        diffScore: "0",
        points: "0"
      },
      {
        group: "A",
        country: "Uruguay",
        playedGames: "0",
        wins: "0",
        draws: "0",
        losts: "0",
        totOwnScore: "0",
        totAgainstScore: "0",
        diffScore: "0",
        points: "0"
      }
      ],
      games: [{
        matchId: 1,
        date: "Torsdag 14/6",
        homeTeam: "Ryssland",
        awayTeam: "Saudiarabien",
        homeScore: null,
        awayScore: null,
        group: "A",
        grupp: "Grupp A",
        time: "17.00",
        channel: "TV4",
        logo: "./image/TV4.png"
      },
      {
        matchId: 2,
        date: "Fredag 15/6",
        homeTeam: "Egypten",
        awayTeam: "Uruguay",
        homeScore: null,
        awayScore: null,
        group: "A",
        grupp: "Grupp A",
        time: "14.00",
        channel: "TV4",
        logo: "./image/TV4.png"
      },
      {
        matchId: 3,
        date: "Tisdag 19/6",
        homeTeam: "Ryssland",
        awayTeam: "Egypten",
        homeScore: null,
        awayScore: null,
        group: "A",
        grupp: "Grupp A",
        time: "20.00",
        channel: "SVT",
        logo: "./image/svt.png"
      },
      {
        matchId: 4,
        date: "Onsdag 20/6",
        homeTeam: "Uruguay",
        awayTeam: "Saudiarabien",
        homeScore: null,
        awayScore: null,
        group: "A",
        grupp: "Grupp A",
        time: "17.00",
        channel: "TV4",
        logo: "./image/TV4.png"
      },
      {
        matchId: 5,
        date: "Måndag 25/6",
        homeTeam: "Uruguay",
        awayTeam: "Ryssland",
        homeScore: null,
        awayScore: null,
        group: "A",
        grupp: "Grupp A",
        time: "16.00",
        channel: "TV4",
        logo: "./image/TV4.png"
      },
      {
        matchId: 6,
        date: "Måndag 25/6",
        homeTeam: "Saudiarabien",
        awayTeam: "Egypten",
        homeScore: null,
        awayScore: null,
        group: "A",
        grupp: "Grupp A",
        time: "16.00",
        channel: "TV4",
        logo: "./image/TV4.png"
      },
      {
        matchId: 7,
        date: "Fredag 15/6",
        homeTeam: "Marocko",
        awayTeam: "Iran",
        homeScore: null,
        awayScore: null,
        group: "B",
        grupp: "Grupp B",
        time: "17.00",
        channel: "SVT",
        logo: "./image/svt.png"
      },
      {
        matchId: 8,
        date: "Fredag 15/6",
        homeTeam: "Portugal",
        awayTeam: "Spanien",
        homeScore: null,
        awayScore: null,
        group: "B",
        grupp: "Grupp B",
        time: "20.00",
        channel: "SVT",
        logo: "./image/svt.png"
      },
      {
        matchId: 9,
        date: "Onsdag 20/6",
        homeTeam: "Portugal",
        awayTeam: "Marocko",
        homeScore: null,
        awayScore: null,
        group: "B",
        grupp: "Grupp B",
        time: "14.00",
        channel: "SVT",
        logo: "./image/svt.png"
      },
      {
        matchId: 10,
        date: "Onsdag 20/6",
        homeTeam: "Iran",
        awayTeam: "Spanien",
        homeScore: null,
        awayScore: null,
        group: "B",
        grupp: "Grupp B",
        time: "20.00",
        channel: "TV4",
        logo: "./image/TV4.png"
      },
      {
        matchId: 11,
        date: "Måndag 25/6",
        homeTeam: "Iran",
        awayTeam: "Portugal",
        homeScore: null,
        awayScore: null,
        group: "B",
        grupp: "Grupp B",
        time: "20.00",
        channel: "SVT",
        logo: "./image/svt.png"
      },
      {
        matchId: 12,
        date: "Måndag 25/6",
        homeTeam: "Spanien",
        awayTeam: "Marocko",
        homeScore: null,
        awayScore: null,
        group: "B",
        grupp: "Grupp B",
        time: "20.00",
        channel: "SVT",
        logo: "./image/svt.png"
      },
      {
        matchId: 13,
        date: "Lördag 16/6",
        homeTeam: "Frankrike",
        awayTeam: "Australien",
        homeScore: null,
        awayScore: null,
        group: "C",
        grupp: "Grupp C",
        time: "12.00",
        channel: "SVT",
        logo: "./image/svt.png"
      },
      {
        matchId: 14,
        date: "Lördag 16/6",
        homeTeam: "Peru",
        awayTeam: "Danmark",
        homeScore: null,
        awayScore: null,
        group: "C",
        grupp: "Grupp C",
        time: "18.00",
        channel: "TV4",
        logo: "./image/TV4.png"
      },
      {
        matchId: 15,
        date: "Torsdag 21/6",
        homeTeam: "Danmark",
        awayTeam: "Australien",
        homeScore: null,
        awayScore: null,
        group: "C",
        grupp: "Grupp C",
        time: "14.00",
        channel: "TV4",
        logo: "./image/TV4.png"
      },
      {
        matchId: 16,
        date: "Torsdag 21/6",
        homeTeam: "Frankrike",
        awayTeam: "Peru",
        homeScore: null,
        awayScore: null,
        group: "C",
        grupp: "Grupp C",
        time: "17.00",
        channel: "TV4",
        logo: "./image/TV4.png"
      },
      {
        matchId: 17,
        date: "Tisdag 26/6",
        homeTeam: "Danmark",
        awayTeam: "Frankrike",
        homeScore: null,
        awayScore: null,
        group: "C",
        grupp: "Grupp C",
        time: "16.00",
        channel: "SVT",
        logo: "./image/svt.png"
      },
      {
        matchId: 18,
        date: "Tisdag 26/6",
        homeTeam: "Australien",
        awayTeam: "Peru",
        homeScore: null,
        awayScore: null,
        group: "C",
        grupp: "Grupp C",
        time: "16.00",
        channel: "SVT",
        logo: "./image/svt.png"
      },
      {
        matchId: 19,
        date: "Lördag 16/6",
        homeTeam: "Argentina",
        awayTeam: "Island",
        homeScore: null,
        awayScore: null,
        group: "D",
        grupp: "Grupp D",
        time: "15.00",
        channel: "SVT",
        logo: "./image/svt.png"
      },
      {
        matchId: 20,
        date: "Lördag 16/6",
        homeTeam: "Kroatien",
        awayTeam: "Nigeria",
        homeScore: null,
        awayScore: null,
        group: "D",
        grupp: "Grupp D",
        time: "20.00",
        channel: "TV4",
        logo: "./image/TV4.png"
      },
      {
        matchId: 21,
        date: "Torsdag 21/6",
        homeTeam: "Argentina",
        awayTeam: "Kroatien",
        homeScore: null,
        awayScore: null,
        group: "D",
        grupp: "Grupp D",
        time: "20.00",
        channel: "TV4",
        logo: "./image/TV4.png"
      },
      {
        matchId: 22,
        date: "Fredag 22/6",
        homeTeam: "Nigeria",
        awayTeam: "Island",
        homeScore: null,
        awayScore: null,
        group: "D",
        grupp: "Grupp D",
        time: "17.00",
        channel: "SVT",
        logo: "./image/svt.png"
      },
      {
        matchId: 23,
        date: "Tisdag 26/6",
        homeTeam: "Nigeria",
        awayTeam: "Argentina",
        homeScore: null,
        awayScore: null,
        group: "D",
        grupp: "Grupp D",
        time: "20.00",
        channel: "TV4",
        logo: "./image/TV4.png"
      },
      {
        matchId: 24,
        date: "Tisdag 26/6",
        homeTeam: "Island",
        awayTeam: "Kroatien",
        homeScore: null,
        awayScore: null,
        group: "D",
        grupp: "Grupp D",
        time: "20.00",
        channel: "TV4",
        logo: "./image/TV4.png"
      },
      {
        matchId: 25,
        date: "Söndag 17/6",
        homeTeam: "Costa Rica",
        awayTeam: "Serbien",
        homeScore: null,
        awayScore: null,
        group: "E",
        grupp: "Grupp E",
        time: "14.00",
        channel: "TV4",
        logo: "./image/TV4.png"
      },
      {
        matchId: 26,
        date: "Söndag 17/6",
        homeTeam: "Brasilien",
        awayTeam: "Schweiz",
        homeScore: null,
        awayScore: null,
        group: "E",
        grupp: "Grupp E",
        time: "20.00",
        channel: "SVT",
        logo: "./image/svt.png"
      },
      {
        matchId: 27,
        date: "Fredag 22/6",
        homeTeam: "Brasilien",
        awayTeam: "Costa Rica",
        homeScore: null,
        awayScore: null,
        group: "E",
        grupp: "Grupp E",
        time: "14.00",
        channel: "SVT",
        logo: "./image/svt.png"
      },
      {
        matchId: 28,
        date: "Fredag 22/6",
        homeTeam: "Serbien",
        awayTeam: "Schweiz",
        homeScore: null,
        awayScore: null,
        group: "E",
        grupp: "Grupp E",
        time: "20.00",
        channel: "SVT",
        logo: "./image/svt.png"
      },
      {
        matchId: 29,
        date: "Onsdag 27/6",
        homeTeam: "Serbien",
        awayTeam: "Brasilien",
        homeScore: null,
        awayScore: null,
        group: "E",
        grupp: "Grupp E",
        time: "20.00",
        channel: "TV4",
        logo: "./image/TV4.png"
      },
      {
        matchId: 30,
        date: "Onsdag 27/6",
        homeTeam: "Schweiz",
        awayTeam: "Costa Rica",
        homeScore: null,
        awayScore: null,
        group: "E",
        grupp: "Grupp E",
        time: "20.00",
        channel: "TV4",
        logo: "./image/TV4.png"
      },
      {
        matchId: 31,
        date: "Söndag 17/6",
        homeTeam: "Tyskland",
        awayTeam: "Mexiko",
        homeScore: null,
        awayScore: null,
        group: "F",
        grupp: "Grupp F",
        time: "17.00",
        channel: "TV4",
        logo: "./image/TV4.png"
      },
      {
        matchId: 32,
        date: "Måndag 18/6",
        homeTeam: "Sverige",
        awayTeam: "Sydkorea",
        homeScore: null,
        awayScore: null,
        group: "F",
        grupp: "Grupp F",
        time: "14.00",
        channel: "SVT",
        logo: "./image/svt.png"
      },
      {
        matchId: 33,
        date: "Lördag 23/6",
        homeTeam: "Sydkorea",
        awayTeam: "Mexiko",
        homeScore: null,
        awayScore: null,
        group: "F",
        grupp: "Grupp F",
        time: "17.00",
        channel: "TV4",
        logo: "./image/TV4.png"
      },
      {
        matchId: 34,
        date: "Lördag 23/6",
        homeTeam: "Tyskland",
        awayTeam: "Sverige",
        homeScore: null,
        awayScore: null,
        group: "F",
        grupp: "Grupp F",
        time: "20.00",
        channel: "TV4",
        logo: "./image/TV4.png"
      },
      {
        matchId: 35,
        date: "Onsdag 27/6",
        homeTeam: "Sydkorea",
        awayTeam: "Tyskland",
        homeScore: null,
        awayScore: null,
        group: "F",
        grupp: "Grupp F",
        time: "16.00",
        channel: "SVT",
        logo: "./image/svt.png"
      },
      {
        matchId: 36,
        date: "Onsdag 27/6",
        homeTeam: "Mexiko",
        awayTeam: "Sverige",
        homeScore: null,
        awayScore: null,
        group: "F",
        grupp: "Grupp F",
        time: "16.00",
        channel: "SVT",
        logo: "./image/svt.png"
      },
      {
        matchId: 37,
        date: "Måndag 18/6",
        homeTeam: "Belgien",
        awayTeam: "Panama",
        homeScore: null,
        awayScore: null,
        group: "G",
        grupp: "Grupp G",
        time: "17.00",
        channel: "SVT",
        logo: "./image/svt.png"
      },
      {
        matchId: 38,
        date: "Måndag 18/6",
        homeTeam: "Tunisien",
        awayTeam: "England",
        homeScore: null,
        awayScore: null,
        group: "G",
        grupp: "Grupp G",
        time: "20.00",
        channel: "TV4",
        logo: "./image/TV4.png"
      },
      {
        matchId: 39,
        date: "Lördag 23/6",
        homeTeam: "Belgien",
        awayTeam: "Tunisien",
        homeScore: null,
        awayScore: null,
        group: "G",
        grupp: "Grupp G",
        time: "14.00",
        channel: "SVT",
        logo: "./image/svt.png"
      },
      {
        matchId: 40,
        date: "Söndag 24/6",
        homeTeam: "England",
        awayTeam: "Panama",
        homeScore: null,
        awayScore: null,
        group: "G",
        grupp: "Grupp G",
        time: "14.00",
        channel: "SVT",
        logo: "./image/svt.png"
      },
      {
        matchId: 41,
        date: "Tordag 28/6",
        homeTeam: "England",
        awayTeam: "Belgien",
        homeScore: null,
        awayScore: null,
        group: "G",
        grupp: "Grupp G",
        time: "20.00",
        channel: "SVT",
        logo: "./image/svt.png"
      },
      {
        matchId: 42,
        date: "Torsdag 28/6",
        homeTeam: "Panama",
        awayTeam: "Tunisien",
        homeScore: null,
        awayScore: null,
        group: "G",
        grupp: "Grupp G",
        time: "20.00",
        channel: "SVT",
        logo: "./image/svt.png"
      },
      {
        matchId: 43,
        date: "Tisdag 19/6",
        homeTeam: "Colombia",
        awayTeam: "Japan",
        homeScore: null,
        awayScore: null,
        group: "H",
        grupp: "Grupp H",
        time: "14.00",
        channel: "TV4",
        logo: "./image/TV4.png"
      },
      {
        matchId: 44,
        date: "Tisdag 19/6",
        homeTeam: "Polen",
        awayTeam: "Senegal",
        homeScore: null,
        awayScore: null,
        group: "H",
        grupp: "Grupp H",
        time: "17.00",
        channel: "SVT",
        logo: "./image/svt.png"
      },
      {
        matchId: 45,
        date: "Söndag 24/6",
        homeTeam: "Japan",
        awayTeam: "Senegal",
        homeScore: null,
        awayScore: null,
        group: "H",
        grupp: "Grupp H",
        time: "17.00",
        channel: "TV4",
        logo: "./image/TV4.png"
      },
      {
        matchId: 46,
        date: "Söndag 24/6",
        homeTeam: "Polen",
        awayTeam: "Colombia",
        homeScore: null,
        awayScore: null,
        group: "H",
        grupp: "Grupp H",
        time: "20.00",
        channel: "TV4",
        logo: "./image/TV4.png"
      },
      {
        matchId: 47,
        date: "Torsdag 28/6",
        homeTeam: "Japan",
        awayTeam: "Polen",
        homeScore: null,
        awayScore: null,
        group: "H",
        grupp: "Grupp H",
        time: "16.00",
        channel: "TV4",
        logo: "./image/TV4.png"
      },
      {
        matchId: 48,
        date: "Torsdag 28/6",
        homeTeam: "Senegal",
        awayTeam: "Colombia",
        homeScore: null,
        awayScore: null,
        group: "H",
        grupp: "Grupp H",
        time: "16.00",
        channel: "TV4",
        logo: "./image/TV4.png"
      },
      ],
      groups: {
        A: [],
        B: [],
        C: [],
        D: [],
        E: [],
        F: [],
        G: [],
        H: []
      },
      final18: [{
        matchId: 1,
        date: "Lördag 30/6",
        homeTeamKeys: { group: "C", index: 0 },
        homeTeam: "1C",
        awayTeamKeys: { group: "D", index: 1 },
        awayTeam: "2D",
        homeScore: null,
        awayScore: null,
        group: "Åttondelsfinal",
        time: "16.00",
        channel: "TV4",
        logo: "./image/TV4.png"
      },
      {
        matchId: 2,
        date: "Lördag 30/6",
        homeTeamKeys: { group: "A", index: 0 },
        homeTeam: "1A",
        awayTeamKeys: {
          group: "B",
          index: 1
        },
        awayTeam: "2B",
        homeScore: null,
        awayScore: null,
        group: "Åttondelsfinal",
        time: "20.00",
        channel: "SVT",
        logo: "./image/svt.png"
      },
      {
        matchId: 3,
        date: "Söndag 1/7",
        homeTeamKeys: { group: "B", index: 0 },
        homeTeam: "1B",
        awayTeamKeys: { group: "A", index: 1 },
        awayTeam: "2A",
        homeScore: null,
        awayScore: null,
        group: "Åttondelsfinal",
        time: "16.00",
        channel: "SVT",
        logo: "./image/svt.png"
      },
      {
        matchId: 4,
        date: "Söndag 1/7",
        homeTeamKeys: { group: "D", index: 0 },
        homeTeam: "1D",
        awayTeamKeys: { group: "C", index: 1 },
        awayTeam: "2C",
        homeScore: null,
        awayScore: null,
        group: "Åttondelsfinal",
        time: "20.00",
        channel: "TV4",
        logo: "./image/TV4.png"
      },
      {
        matchId: 5,
        date: "Måndag 2/7",
        homeTeamKeys: { group: "E", index: 0 },
        homeTeam: "1E",
        awayTeamKeys: { group: "F", index: 1 },
        awayTeam: "2F",
        homeScore: null,
        awayScore: null,
        group: "Åttondelsfinal",
        time: "16.00",
        channel: "TV4",
        logo: "./image/TV4.png"
      },
      {
        matchId: 6,
        date: "Måndag 2/7",
        homeTeamKeys: { group: "G", index: 0 },
        homeTeam: "1G",
        awayTeamKeys: { group: "H", index: 1 },
        awayTeam: "2H",
        homeScore: null,
        awayScore: null,
        group: "Åttondelsfinal",
        time: "20.00",
        channel: "SVT",
        logo: "./image/svt.png"
      },
      {
        matchId: 7,
        date: "Tisdag 3/7",
        homeTeamKeys: { group: "F", index: 0 },
        homeTeam: "1F",
        awayTeamKeys: { group: "E", index: 1 },
        awayTeam: "2E",
        homeScore: null,
        awayScore: null,
        group: "1_8",
        time: "16.00",
        channel: "SVT",
        logo: "./image/svt.png"
      },
      {
        matchId: 8,
        date: "Tisdag 3/7",
        homeTeamKeys: { group: "H", index: 0 },
        homeTeam: "1H",
        awayTeamKeys: { group: "G", index: 1 },
        awayTeam: "2G",
        homeScore: null,
        awayScore: null,
        group: "Åttondelsfinal",
        time: "20.00",
        channel: "TV4",
        logo: "./image/TV4.png"
      }
      ],
      final14: [{
        matchId: 1,
        country: null,
        homeTeam: "1C / 2D",
        homeTeamIndex: 1,
        awayTeam: "1A / 2B",
        awayTeamIndex: 2,
        group: "Kvartsfinal",
        date: "Fredag 6/7",
        time: "16.00",
        channel: "SVT",
        logo: "./image/svt.png"
      },
      {
        matchId: 2,
        country: null,
        homeTeam: "1E / 2F",
        homeTeamIndex: 5,
        awayTeam: "1G / 2H",
        awayTeamIndex: 6,
        group: "Kvartsfinal",
        date: "Fredag 6/7",
        time: "20.00",
        channel: "TV4",
        logo: "./image/TV4.png"
      },
      {
        matchId: 3,
        country: null,
        homeTeam: "1F / 2E",
        homeTeamIndex: 7,
        awayTeam: "1H / 2G",
        awayTeamIndex: 8,
        group: "Kvartsfinal",
        date: "Lördag 7/7",
        time: "16.00",
        channel: "TV4",
        logo: "./image/TV4.png"
      },
      {
        matchId: 4,
        country: null,
        homeTeam: "1B / 2A",
        homeTeamIndex: 3,
        awayTeam: "1D / 2C",
        awayTeamIndex: 4,
        group: "Kvartsfinal",
        date: "Lördag 7/7",
        time: "20.00",
        channel: "SVT",
        logo: "./image/svt.png"
      }
      ],
      final12: [{
        matchId: 1,
        country: null,
        homeTeam: "Kvartsfinal 1",
        homeTeamIndex: 1,
        awayTeam: "Kvartsfinal 2",
        awayTeamIndex: 2,
        group: "Semifinal",
        date: "Tisdag 10/7",
        time: "20.00",
        channel: "SVT",
        logo: "./image/svt.png"
      },
      {
        matchId: 2,
        country: null,
        homeTeam: "Kvartsfinal 3",
        homeTeamIndex: 3,
        awayTeam: "Kvartsfinal 4",
        awayTeamIndex: 4,
        group: "Semifinal",
        date: "Onsdag 11/7",
        time: "20.00",
        channel: "TV4",
        logo: "./image/TV4.png"
      }
      ],
      final: {
        matchId: 1,
        country: null,
        homeTeam: null,
        homeTeamIndex: 1,
        awayTeam: null,
        awayTeamIndex: 2,
        group: "Final",
        date: "Söndag 15/7",
        time: "17.00",
        channel: "SVT",
        logo: "./image/svt.png"
      },
      brons: {
        matchId: 1,
        country: null,
        homeTeam: null,
        homeTeamIndex: 1,
        awayTeam: null,
        awayTeamIndex: 2,
        group: "Bronsmatch",
        date: "Lördag 14/7",
        time: "16.00",
        channel: "TV4",
        logo: "./image/TV4.png"
      }
  }
}

  handleScore18 = (matchId, awayTeam, awayScore,
    homeTeam, homeScore) => {
    const {
      final14
    } = this.state

    const index = final14.findIndex((game) => game.homeTeamIndex === matchId || game.awayTeamIndex === matchId)
    console.log("index", index)
    console.log("matchId", matchId)
    console.log("final14", final14)
    if (final14[index].homeTeamIndex === matchId) {
      if (homeScore > awayScore) {
        final14[index].homeTeam = homeTeam
      } else {
        final14[index].homeTeam = awayTeam
      }
    } else {
      if (homeScore > awayScore) {
        final14[index].awayTeam = homeTeam
      } else {
        final14[index].awayTeam = awayTeam
      }
    }

    this.setState({
      final14
    })
  }

  handleScore14 = (matchId, awayTeam, awayScore,
    homeTeam, homeScore) => {
    const {
      final12
    } = this.state

    const index = final12.findIndex((game) => game.homeTeamIndex === matchId || game.awayTeamIndex === matchId)
    if (final12[index].homeTeamIndex === matchId) {
      // console.log("hej")
      if (homeScore > awayScore) {
        final12[index].homeTeam = homeTeam
      } else {
        final12[index].homeTeam = awayTeam
      }
    } else {
      // console.log("hi")
      if (homeScore > awayScore) {
        final12[index].awayTeam = homeTeam
      } else {
        final12[index].awayTeam = awayTeam
      }
    }

    this.setState({
      final12
    })
  }

  handleScore12 = (matchId, awayTeam, awayScore,
    homeTeam, homeScore) => {
    const {
      final,
      brons
    } = this.state

    if (final.homeTeamIndex === matchId) {
      // console.log("hej")
      if (homeScore > awayScore) {
        final.homeTeam = homeTeam
      } else {
        final.homeTeam = awayTeam
      }
    } else {
      // console.log("hi")
      if (homeScore > awayScore) {
        final.awayTeam = homeTeam
      } else {
        final.awayTeam = awayTeam
      }
    }

    if (brons.homeTeamIndex === matchId) {
      // console.log("hej")
      if (homeScore < awayScore) {
        brons.homeTeam = homeTeam
      } else {
        brons.homeTeam = awayTeam
      }
    } else {
      // console.log("hi")
      if (homeScore < awayScore) {
        brons.awayTeam = homeTeam
      } else {
        brons.awayTeam = awayTeam
      }
    }

    this.setState({
      final,
      brons
    })
  }

  handleScoreFinal = (matchId, awayTeam, awayScore,
    homeTeam, homeScore) => {
    const {
      Final
    } = this.state

    if (homeScore > awayScore) {
      this.setState({
        winner: homeTeam
      })
    } else {
      this.setState({
        winner: awayTeam
      })
    }
  }

  handleScoreBrons = (matchId, awayTeam, awayScore,
    homeTeam, homeScore) => {
    const {
      Brons
    } = this.state

    if (homeScore > awayScore) {
      this.setState({
        Brons: homeTeam
      })
    } else {
      this.setState({
        Brons: awayTeam
      })
    }
  }

  handleScore = (matchId, awayTeam, awayScore,
    homeTeam, homeScore) => {
    // console.log(matchId, awayTeam, awayScore)
    const {
      games,
      groups
    } = this.state

    const index = games.findIndex((game) => game.matchId === matchId)
    games[index].awayScore = awayScore
    games[index].homeScore = homeScore

    console.log("hejjjj", this.state.awayScore)

    // const newAwayScore = this.state.awayScore
    this.setState({
      games: games
    })

    localStorage.setItem("games", JSON.stringify(games))

    const table = calculateResult(this.state.games)
    //console.log(table)
    const final18table = calculateResult(this.state.final18)
    console.log(final18table)

    // nollställ grupperna
    Object.keys(groups).forEach(key => {
      groups[key] = []
    })
    table.forEach(country => {
      groups[country.group].push(country)
    })

    Object.keys(groups).forEach(key => {

      const unsorted = groups[key]
      const sorted = unsorted.sort(this.compareScore)
      groups[key] = sorted

      this.setState({
        groups: groups
      })
    })

    //Set countrynames for final 18
    const newFinal18 = this.populateCountries()
    this.setState({
      final18: newFinal18
    })

  }

  // pym.js
  componentDidMount() {

    const pym = require('pym.js'); // We use require since import can't be used inside an if-statement.
    const pymChild = pym.Child({
      polling: 250
    }); // Poll for height changes every 250ms and send to parent. (read the Pym docs for more info)
    pymChild.sendMessage('init');


  }
  // slut pym.js

  compareScore = (a, b) => {
    if (a.points < b.points) {
      return true
    } else if (a.points > b.points) {
      return false
    } else {
      if (a.diffScore < b.diffScore) {
        return true
      } else if (a.diffScore > b.diffScore) {
        return false
      } else {
        if (a.totOwnScore < b.totOwnScore) {
          return true
        } else if (a.totOwnScore > b.totOwnScore) {
          return false
        } else {
          return 0
        }
      }
    }
  }

  populateCountries = () => {
    const {
      groups,
      final18
    } = this.state;
    const newFinal18 = final18.map(eight => {
      // console.log("hej", eight, eight.homeTeamKeys)
      const homeGroupLetter = eight.homeTeamKeys.group
      const homeWinnerIndex = eight.homeTeamKeys.index

      if (groups[homeGroupLetter].length >= 2) {
        const countryObj = groups[homeGroupLetter][homeWinnerIndex]
        // console.log(countryObj)
        if (countryObj.playedGames > 0)
          eight.homeTeam = countryObj.country
      }

      const awayGroupLetter = eight.awayTeamKeys.group
      const awayWinnerIndex = eight.awayTeamKeys.index

      if (groups[awayGroupLetter].length >= 2) {
        const countryObj = groups[awayGroupLetter][awayWinnerIndex]
        if (countryObj.playedGames > 0)
          eight.awayTeam = countryObj.country
      }

      return eight
    })
    return newFinal18
  }

  render() {

    const groupIdFromUrl = ""

    return (
      <div>
      <div className = "header-container">
      <div className="header-container-logovm">
        <img src="image/vmlogo.png"/>
      </div>
        <div className="header-container-headline">
          <h1>Så sänds hela fotbolls-VM på tv!</h1>
        </div>
        <div className="header-container-text">
          <p> Mästerskapet pågår mellan 14 juni och 15 juli. Alla matcherna sänds på SVT och TV4/CMore. Här hittar du alla grupper, datum, tider och hela slutspelet.</p>
        </div>
      </div>
      <div className = "groupstage-headline" >
      <p> Gruppspel </p>
      </div>
      <HashRouter>
        <div>
          <ul className = "grouprow" >
            <li className="groupboxActive">
              < NavLink activeClassName = { "groupboxActive" } to = "/A" className = "groupbox" >
                <div >
                  <p>Grupp A</p>
                  <div className="flag-container">
                    <div className="flag"><img src="image/ryssland.png"/></div>
                    <div className="flag"><img src="image/saudiarabien.png"/></div>
                    <div className="flag"><img src="image/egypten.png"/></div>
                    <div className="flag"><img src="image/uruguay.png"/></div>
                </div>
              </div>
              < /NavLink>
            </li >
            <li className="groupboxActive">
              < NavLink activeClassName = { "groupboxActive" } to = "/B" className = "groupbox" >
                <div>
                  <p>Grupp B</p>
                  <div className="flag-container">
                    <div className="flag"><img src="image/portugal.png"/></div>
                    <div className="flag"><img src="image/spanien.png"/></div>
                    <div className="flag"><img src="image/marocko.png"/></div>
                    <div className="flag"><img src="image/iran.png"/></div>
                </div>
              </div>
              < /NavLink>
            </li >
            <li className="groupboxActive">
              < NavLink activeClassName = { "groupboxActive" } to = "/C" className = "groupbox" >
                <div >
                  <p>Grupp C</p>
                  <div className="flag-container">
                    <div className="flag"><img src="image/frankrike.png"/></div>
                    <div className="flag"><img src="image/australien.png"/></div>
                    <div className="flag"><img src="image/peru.png"/></div>
                    <div className="flag"><img src="image/danmark.png"/></div>
                </div>
              </div>
              < /NavLink>
            </li >
            <li className="groupboxActive">
              < NavLink activeClassName = { "groupboxActive" } to = "/D" className = "groupbox" >
                <div >
                  <p>Grupp D</p>
                  <div className="flag-container">
                    <div className="flag"><img src="image/argentina.png"/></div>
                    <div className="flag"><img src="image/island.png"/></div>
                    <div className="flag"><img src="image/kroatien.png"/></div>
                    <div className="flag"><img src="image/nigeria.png"/></div>
                </div>
              </div>
              < /NavLink>
            </li >
            <li className="groupboxActive">
              < NavLink activeClassName = { "groupboxActive" } to = "/E" className = "groupbox" >
                <div>
                  <p>Grupp E</p>
                  <div className="flag-container">
                    <div className="flag"><img src="image/brasilien.png"/></div>
                    <div className="flag"><img src="image/schweiz.png"/></div>
                    <div className="flag"><img src="image/costarica.png"/></div>
                    <div className="flag"><img src="image/serbien.png"/></div>
                </div>
              </div>
              < /NavLink>
            </li >
            <li className="groupboxActive">
              < NavLink activeClassName = { "groupboxActive" } to = "/F" className = "groupbox" >
                <div >
                  <p>Grupp F</p>
                  <div className="flag-container">
                    <div className="flag"><img src="image/tyskland.png"/></div>
                    <div className="flag"><img src="image/mexico.png"/></div>
                    <div className="flag"><img src="image/sweden.png"/></div>
                    <div className="flag"><img src="image/sydkorea.png"/></div>
                </div>
              </div>
              < /NavLink>
            </li >
            <li className="groupboxActive">
              < NavLink activeClassName = { "groupboxActive" } to = "/G" className = "groupbox" >
                <div>
                  <p>Grupp G</p>
                  <div className="flag-container">
                    <div className="flag"><img src="image/belgien.png"/></div>
                    <div className="flag"><img src="image/panama.png"/></div>
                    <div className="flag"><img src="image/tunisien.png"/></div>
                    <div className="flag"><img src="image/england.png"/></div>
                </div>
              </div>
              < /NavLink>
            </li >
            <li className="groupboxActive">
              < NavLink activeClassName = { "groupboxActive" } to = "/H" className = "groupbox" >
                <div>
                  <p>Grupp H</p>
                  <div className="flag-container">
                    <div className="flag"><img src="image/polen.png"/></div>
                    <div className="flag"><img src="image/senegal.png"/></div>
                    <div className="flag"><img src="image/colombia.png"/></div>
                    <div className="flag"><img src="image/japan.png"/></div>
                </div>
              </div>
              < /NavLink>
            </li >
            <p className="tablatext">Klicka på respektive grupp för tablå</p>
          </ul>

        <Route path = "/:groupId"
        render = {
          (props) => (
            <Group { ...props}
            addScore = { this.handleScore }
            games = { this.state.games }
            groups = { this.state.groups }
            />
          )
        }
        />
        </div>
      </HashRouter>
      <div>
        <Final18
        table = { this.state.table }
        addScore = { this.handleScore18 }
        final18 = { this.state.final18 } />
      </div>
      <div>
        <Final14
        table = { this.state.table }
        addScore = { this.handleScore14 }
        final14 = { this.state.final14 } />
      </div>
      <div>
      <Final12
        table = { this.state.table }
        addScore = { this.handleScore12 }
        final12 = { this.state.final12 } />
      </div>
      <div>
        <Brons
          table = { this.state.table }
          addScore = { this.handleScoreBrons }
          brons = { this.state.brons } />
      </div>
      <div>
        <Final
        table = { this.state.table }
        addScore = { this.handleScoreFinal }
        final = { this.state.final } />
      </div>
    </div>
    )
  }
}

export default App


// <li> < NavLink activeClassName = { "groupboxActive" } to = "/B" className = "groupbox" > Grupp B < /NavLink></li >
// <li> < NavLink activeClassName = { "groupboxActive" } to = "/C" className = "groupbox" > Grupp C < /NavLink></li >
// <li> < NavLink activeClassName = { "groupboxActive" } to = "/D" className = "groupbox" > Grupp D < /NavLink></li >
// <li> < NavLink activeClassName = { "groupboxActive" } to = "/E" className = "groupbox" > Grupp E < /NavLink></li >
// <li> < NavLink activeClassName = { "groupboxActive" } to = "/F" className = "groupbox" > Grupp F < /NavLink></li >
// <li> < NavLink activeClassName = { "groupboxActive" } to = "/G" className = "groupbox" > Grupp G < /NavLink></li >
// <li> < NavLink activeClassName = { "groupboxActive" } to = "/H" className = "groupbox" > Grupp H < /NavLink></li >
