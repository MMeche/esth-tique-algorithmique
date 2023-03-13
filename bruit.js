
const canvasW = 768;
const canvasH = 512;


function fields(density , tab ) //lvl 0 = superfields ; 1 = large ; 2 = small ; 3 = nano ; 4 = raster
{
  this.density = +density ;
  this.tab = tab ;
}

function tab(nextField , array )
{
  this.nextField = nextField ;
  this.array = array;    
}




  
  

  
  
  
  
  
function test(field)
{

}


function setup()
{
  createCanvas(canvasW,canvasH);
}
function draw()
{
  background(255);

}