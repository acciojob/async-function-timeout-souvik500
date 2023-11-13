//your JS code here. If required.

 let output =document.getElementById("output");
let form = document.getElementById("btn");
  let msgi =document.getElementById("text");
let delayi =document.getElementById("delay");
form.addEventListener("click",(e)=>{
	e.preventDefault();
 const	msg= msgi.value;
	const delay=delayi.value;
	if(msg && delay>0)
	{
		main(delay,msg);
	}
	
	
})
  
async function main( delay,msg){

	  await new Promise((resolve)=>{
		  setTimeout(()=>{
			  resolve();
		  },delay);
	  })
	 output.innerText = msg; 
}