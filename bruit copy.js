
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

  }
};

function setup()
{
  createCanvas(canvasW,canvasH);
  
}
function draw()
{
  background(255);
  let x =0;
  let y =0;
  let i=0;
  for(let xi = 0 ; xi<768 ; xi+=192)
  {
    for(let yi = 0 ; yi<512 ; yi+=128)
    {
      i++;
      
      let f1 = superField[i];
      console.log(f1);
      let p = f1.density; //* f2.density;
      // let f2 = f1.nextField[j];
      let placeNoireBoule = random(1000);
            if(placeNoireBoule<p*1000)
            {
              rect(xi,yi,20,20);
            };      
    }
  }
};