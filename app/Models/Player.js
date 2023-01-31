export class Player{
  constructor(name, score, img){
    this.name = name
    this.score = score;
    if(img){
      this.img = img
    }else{
      this.img = '//via.placeholder.com/100'
    }
  }
  get HTMLTemplate(){
    return `
    <div class="col-4 d-flex align-items-center justify-content-end py-3">
    <img src="${this.img}" alt="">
  </div>
  <div class="col-4 d-flex align-items-center justify-content-center text-light">
    <p class="fs-1">${this.name}</p>
  </div>
  <div class="col-4 d-flex align-items-center text-light">
    <button class="scoreButton" onclick="app.playersController.minusScore('${this.name}')"><i class="mdi mdi-minus fs-3"></i></button>
    <p class="fs-1 px-4">${this.score}</p>
    <button class="scoreButton" onclick="app.playersController.addScore('${this.name}')"><i class="mdi mdi-plus fs-3"></i></button>
  </div>
    `
  }
}
