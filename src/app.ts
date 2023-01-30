function rotateRight(arrRotate: number[], step: number){

    //  adding the new elements to the end of the array based on the step value.
    for (let i=0; i<step ; i++)
    {
            arrRotate.push(arrRotate[i]);
    }
    
    // Removing the elements which we recently added to the Array based on the step value. 
    for (var i=0; i<step; i++)
    {
            arrRotate.shift();
    }
      return arrRotate;
    }
      

    rotateRight([1,2,3], 2);
    rotateRight([], 3);



      const check = (arr: number[]): boolean => {
        let N = arr.length;
        let inc: boolean = true;
        let dec: boolean = true;
 
        // Loop to check if array is increasing
        for (let i = 0; i < N - 1; i++) {
 
            // To check if
            // array is not increasing
            if (arr[i] > arr[i + 1]) {
                inc = false;
            }
        }
 
        // Loop to check if array is decreasing
        for (let i = 0; i < N - 1; i++) {
 
            // To check if
            // array is not decreasing
            if (arr[i] < arr[i + 1]) {
                dec = false;
            }
        }
 
        // Pick one whether inc or dec
        return inc || dec;
    }

    check([1,2,3,4]);
    check([10,3,4,6]);
    check([9]);