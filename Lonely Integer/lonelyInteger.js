function LonelyInt(arr){
	var i = 0;
	var j=i+1
	while(i<arr.length){
		while(j<arr.length){
			// console.log(i)
			// console.log(j)
			if(arr[i]==arr[j]){
				arr.splice(j, 1)
				arr.splice(i, 1)
				i=0
				j=i+1;
				// console.log(arr)
			}
			else{
				j++
			}
		}
	i++
	}
	return(arr[0])
}


console.log(LonelyInt([4, 9, 95, 93, 57, 4, 57, 93, 9]))