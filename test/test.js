const callbacks= function(data)
{
	if(data>0)
	{
		console.log(data);
		callbacks(data-1);
		console.log(data);
	}
	
	
}

callbacks(5);