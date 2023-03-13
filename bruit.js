
const canvasW = 768;
const canvasH = 512;
let hDens = 0.9 ;
let mDens = 0.8 ;
let sDens = 0.7 ;
let nDens = 0.6 ;

function item(nextField , density )
{
  this.nextField = nextField ;
  this.density = +density;    
}

//setup de la structure
let superField =  new Array(16);

let tabDensityRandom_superField = [ hDens , hDens ,hDens ,hDens ,hDens ,hDens ,hDens ,hDens ,hDens ,hDens, mDens ,mDens ,mDens ,sDens, sDens ,nDens ];
for(let i =0 ; i<16 ; i++)
{
  let i_removed = Math.floor(Math.random()*tabDensityRandom_superField.length-1);
  superField[i] = new item(new Array(16),tabDensityRandom_superField.splice(i_removed,1));
  
  let tabDensityRandom_largeField =[hDens , hDens ,hDens ,hDens ,hDens ,hDens ,hDens ,hDens ,hDens ,hDens, mDens ,mDens ,mDens ,sDens, sDens ,nDens];
  for(let j = 0 ; j<16 ; j++)
  {
    let i_removed = Math.floor(Math.random()*tabDensityRandom_largeField.length-1);
    superField[i].nextField[j] = new item(new Array(16),tabDensityRandom_largeField.splice(i_removed,1));
    
    let tabDensityRandom_mediumField = [hDens , hDens ,hDens ,hDens ,hDens ,hDens ,hDens ,hDens ,hDens ,hDens, mDens ,mDens ,mDens ,sDens, sDens ,nDens];
    for(let k = 0 ; k<16 ; k++)
    {
      let i_removed = Math.floor(Math.random()*tabDensityRandom_mediumField.length-1);
      superField[i].nextField[j].nextField[k] = new item(new Array(16),tabDensityRandom_mediumField.splice(i_removed,1));

      let tabDensityRandom_smallField = [hDens , hDens ,hDens ,hDens ,hDens ,hDens ,hDens ,hDens ,hDens ,hDens, mDens ,mDens ,mDens ,sDens, sDens ,nDens];
      for(let l = 0 ; l<16 ; l++)
      {
        let i_removed = Math.floor(Math.random()*tabDensityRandom_smallField.length-1);
        superField[i].nextField[j].nextField[k].nextField[l] = new item(new Array(6),tabDensityRandom_smallField.splice(i_removed,1));

        let tabDensityRandom_modules = [hDens , hDens ,hDens ,hDens ,hDens ,hDens ,hDens ,hDens ,hDens ,hDens, mDens ,mDens ,mDens ,sDens, sDens ,nDens]; ;
        for(let m = 0 ; m<6 ; m++)
        {
          let i_removed = Math.floor(Math.random()*tabDensityRandom_modules.length-1);
          superField[i].nextField[j].nextField[k].nextField[l].nextField[m] = new item([],tabDensityRandom_modules.splice(i_removed,1));
        }
      }
    }
  }
};

function setup()
{
  createCanvas(canvasW,canvasH);
  frameRate(1/5);
}
function draw()
{
  background(255);
  let x =0;
  let y =0;
  for(let i = 0 ; i<16 ; i++)
  {
    for(let j = 0 ; j<16 ; j++)
    {
      for(let k = 0 ; k<16 ; k++)
      {
        for(let l = 0 ; l<16 ; l++)
        {
          for(let m = 0 ; m<6 ; m++)
          {
            let f1 = superField[i];
            let f2 = f1.nextField[j]
            let f3 = f2.nextField[k];
            let f4 = f3.nextField[l];
            let f5 = f4.nextField[m];
            let p = f1.density * f2.density * f3.density * f4.density * f5.density;
            console.log(p);

            x=192*(i%4)+48*(j%4)+12*(k%4)+3*(l%4)+m%3;
            y=128*(i%4)+32*(j%4)+8*(k%4)+2*(l%4)+m%2;
            let placeNoireBoule = random(1000);
            if(placeNoireBoule<p*1000)
            {
              fill(color(0,0,0));
              noStroke();
              rect(x,y,1,1);
            }
          }
        }
      }
    }
  }

}