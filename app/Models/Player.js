export class Player{
  constructor(name, score, img){
    this.name = name
    this.score = 0
    if(img){
      this.img = img
    }else{
      this.img = '//via.placeholder.com/100'
    }
  }
  get HTMLTemplate(){
    return `
    <div class="col-3 d-flex align-items-center justify-content-center py-3">
    <img src="${this.img}" alt="">
  </div>
  <div class="col-5 d-flex align-items-center justify-content-start text-light">
    <p class="fs-1 nomb">${this.name}</p>
  </div>
  <div class="col-4 d-flex align-items-center text-light">
    <button class="scoreButton" onclick="app.playersController.minusScore('${this.name}')"><i class="mdi mdi-minus fs-3"></i></button>
    <p class="fs-1 px-4 nomb">${this.score}</p>
    <button class="scoreButton" onclick="app.playersController.addScore('${this.name}')"><i class="mdi mdi-plus fs-3"></i></button>
  </div>
    `
  }
}
