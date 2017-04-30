var lon1=document.getElementsByName("lon")[0].value;
lon1= ~~lon1-0.46;
var lon2=75.09;
var lat1=document.getElementsByName("lat")[0].value;
lat1= ~~lat1-0.46;
var lat2=25.09;
var lat1=[];
var lon1=[];
var wat;// for checking wheather it is a waterbody or land
var elev; //for elevation
var i;
var j;
var k;
var l;
var x;
var y;
var x1;
var y1;
var waterid;
var waterlevel;
function myfun()
{
	y=(lat1-Math.floor(lat1))*1000;
	x=(lon1-Math.floot(lon1))*1000;
	for(i=x;i<Math.floor(lat2);i+=10)
	{
		lat1[i]=~~lat1+0.01;
		for(j=y;j<Math.floor(lon2);j+=10)
		{
			lon1[i]=~~lon1+0.01;
			var min=1000;
			for(k=i;k<10;k++)
			{
				for(l=j;l<10;l++)
				{
					if(wat[x][y]==1)
					{
						elev=document.getElementsByName("elevation")[0].value;// we will be getting the elevation values from database
						if(elev<min)
						{
							min=elev;
							x1=k;
							y1=l;
						}
					}
				}
			}
			var max=-100;
			for(k=i;k<10;k++)
			{
				for(l=j;l<10;l++)
				{
					if(wat[x][y]==0)
					{
						elev=document.getElementsByName("elevation")[0].value;// we will be getting the elevation values from database
						waterid=document.getElementsByName("ID")[0].value; // we will be getting the waterid values from database
						waterlevel=document.getElementsByName("Level")[0].value; // we will be getting the waterlevel values from database
						if(elev>max)
						{
							max=elev+waterlevel;
						
						}
					}
				}
			}
		var m=max-min;
			var l;
			var h;
			var mid;
			
		}
	}
	
}
