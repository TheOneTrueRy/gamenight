import { appState } from "../AppState.js";
import { Player } from "../Models/Player.js";

class PlayersService{ 
  addScore(name){
    let player = appState.players.find(player => player.name == name)
    player.score++
  }
  minusScore(name){
    let player = appState.players.find(player => player.name == name)
    player.score--
    if(player.score < 0){
      player.score = 0
    }
  }
}

export const playersService = new PlayersService()