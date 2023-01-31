import { appState } from "../AppState.js";

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
    console.log('constructor ran');
    this.drawPlayers()
  }
}