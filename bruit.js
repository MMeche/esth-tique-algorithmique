
const canvasW = 768;
const canvasH = 512;


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
  for(let j = 0 ; j<16 ; j++)
  {
    superField[i].nextField[j] = new item(new Array(16),0);
    for(let k = 0 ; k<16 ; k++)
    {
      superField[i].nextField[j].nextField[k] = new item(new Array(16),0);
      for(let l = 0 ; l<16 ; l++)
      {
        superField[i].nextField[j].nextField[k].nextField[l] = new item(new Array(6),0);
        for(let m = 0 ; m<6 ; m++)
        {
          superField[i].nextField[j].nextField[k].nextField[l].nextField[m] = new item([],0);
        }
      }
    }
  }
};



  
  

  
  
  
  
  



function setup()
{
  createCanvas(canvasW,canvasH);
}
function draw()
{
  background(255);

}