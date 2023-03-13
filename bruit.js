
const canvasW = 768;
const canvasH = 512;


function tab1() //lvl 0 = superfields ; 1 = large ; 2 = small ; 3 = nano ; 4 = raster
{
  this.array = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] ;
}

function item(nextField , density )
{
  this.nextField = nextField ;
  this.density = +density;    
}

//setup de la structure
let superField =  new Array(16);
for(let i =0 ; i<16 ; i++)
{
  superField[i] = new item(new Array(16),0);
};
superField.forEach()

  
  

  
  
  
  
  



function setup()
{
  createCanvas(canvasW,canvasH);
}
function draw()
{
  background(255);

}