import { appState } from "../AppState.js";
import { playersService } from "../Services/PlayersService.js";

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

  addScore(name){
    playersService.addScore(name)
    this.drawPlayers()
  }
  minusScore(name){
    playersService.minusScore(name)
    this.drawPlayers()
  }

  constructor(){
    console.log('constructor ran');
    this.drawPlayers()
  }
}