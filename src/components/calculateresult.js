const countries = ["Ryssland", "Egypten",
  "Uruguay", "Saudiarabien", "Marocko",
  "Iran", "Portugal", "Spanien",
  "Frankrike", "Australien", "Peru", "Danmark", "Argentina",
  "Island", "Kroatien", "Nigeria", "Costa Rica", "Serbien",
  "Brasilien", "Schweiz", "Tyskland", "Mexiko", "Sverige", "Sydkorea", "Belgien",
  "Tunisien", "England", "Panama", "Colombia",
  "Japan", "Polen", "Senegal"]

export const calculateResult = (games) => {
  const result = countries.map((country) => {
    let playedGames = 0
    let wins = 0
    let draws = 0
    let losts = 0
    let totOwnScore = 0
    let totAgainstScore = 0
    let points = 0
    let group = ""
    let diffScore = 0

    games.map((game) => {
      if ((country === game.homeTeam) || (country === game.awayTeam)) {
        group = game.group
        if ((game.awayScore !== null) && (game.homeScore !== null)) {

          if (country === game.homeTeam) {
            playedGames += 1
            totOwnScore += parseInt(game.homeScore)
            totAgainstScore += parseInt(game.awayScore)
            diffScore = (totOwnScore - totAgainstScore)
            if (game.homeScore > game.awayScore){
              points += 3
              wins += 1
            } else if (game.homeScore === game.awayScore) {
              points += 1
              draws += 1
            } else {
              losts += 1
            }
          } else if (country === game.awayTeam) {

              playedGames += 1
              totOwnScore += parseInt(game.awayScore)
              totAgainstScore += parseInt(game.homeScore)
              diffScore = (totOwnScore - totAgainstScore)
              if (game.awayScore > game.homeScore) {
                points += 3
                wins += 1
              } else if (game.homeScore === game.awayScore) {
                points += 1
                draws += 1
              } else {
                losts += 1
              }
        }
      } else {
      }
    } else {

    }
      })

      return { group: group, country: country, playedGames: playedGames, wins: wins, draws: draws, losts: losts, totOwnScore: totOwnScore, totAgainstScore: totAgainstScore, diffScore: diffScore, points: points }

    })
  return result
}
