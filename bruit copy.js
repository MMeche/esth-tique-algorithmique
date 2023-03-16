
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
  noLoop();
  frameRate();
}

let clickCount = 4;

function mouseClicked()
{
  clickCount ++;
  
}

function draw()
{
  background(255);
  

  let i=0;
  let l=0;
  let k=0;
  let j =0;

  for(let xi = 0 ; xi<768 ; xi+=192)
  {
    for(let yi = 0 ; yi<512 ; yi+=128)
    {
      i++;
      console.log(`i=${i}`);
      if(i==16)
      {
        i=0;
      }
      for(let xj = 0 ; xj<192 ; xj+= 48)
      {
        for(let yj = 0 ; yj<128 ; yj+= 32)
        {
          j++;
          console.log(`j=${j}`);
          if(j==16)
          {
            j=0;
          }
          for(let xk = 0 ; xk<48 ; xk+= 12)
          {
            for(let yk = 0 ; yk<32 ; yk+= 8)
            {
              k++;
              console.log(`k=${k}`);
              if(k==16)
              {
                k=0;
              }
              for(let xl = 0 ; xl<12 ; xl+= 3)
              {
                for(let yl = 0 ; yl<8 ; yl+= 2)
                  {
                    l++;
                    console.log(`l=${l}`);
                    if(l==16)
                    {
                      l=0;
                    }
                    let m = 0;
                    for(let xm = 0 ; xm<3 ; xm+= 1)
                    {
                      for(let ym = 0 ; ym<1 ; ym+= 1)
                      {
                        m++;
                        console.log(`m=${m}`);
                        let p =0;
                        let f1 = superField[i];
                        let f2 = superField[i].nextField[j];
                        let f3 = superField[i].nextField[j].nextField[k];
                        let f4 = superField[i].nextField[j].nextField[k].nextField[l];
                        let f5 = superField[i].nextField[j].nextField[k].nextField[l].nextField[m];
                        p = f1.density * f2.density *f3.density*f4.density*f5.density;                        
                        let placeNoireBoule = random(1000);
                        if(placeNoireBoule<(p*1000))
                          {
                            rect(xi+xj+xk+xl+xm,yi+yj+yk+yl+ym,1,1); 
                          };      
                      }
                    }
                  }
              }
            }
          }
        }
      }
                      
    }
  }
};