class Square {
  constructor( side )
  {
    this.side = side;
  }

  perimeter()
  {
    return this.side * 4;
  }

  area()
  {
    return this.side * this.side;
  }

  diagonal()
  {
    return Math.sqrt( 2 * ( this.side * this.side ) ).toFixed(3);
  }

  describe()
  {
    return `Square with side ${this.side} has perimeter of ${this.perimeter()}, area of ${this.area()}, and diagonal of ${this.diagonal()}`;
  }

}

let run = document.getElementById('run');
run.onclick = function ( e ) {
  e.preventDefault();
  let message = '';
  for( var i =3; i<=7; i+=2 )
  {
    let square = new Square( i );
    message += `<p>${square.describe()}</p>`;
  }
  document.getElementById( 'runMsg' ).innerHTML = message;
}