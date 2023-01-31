import { appState } from "../AppState";

export class PlayersController{
  drawPlayers(){
    let players = appState.players
    console.log('drawing players', players);
    let template = ''
    players.forEach(player => {
      template += player.HTMLTemplate
    })
    document.getElementById('leaderboard').innerHTML = template
  }

  constructor(){
    this.drawPlayers()
  }
}