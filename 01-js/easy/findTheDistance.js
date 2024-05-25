const findTheDistanceValue = function (arr1, arr2, d) {

    let counter=0;

    let forAll=true;

    for(let i=0;i<arr1.length;i++){

        let element=arr1[i];

        for(let j=0;j<arr2.length;j++){
            
            if(Math.abs(element-arr2[j])>d){
                continue;
            }
            else{
                forAll=false;
                break;
            }
        }
        if(forAll){
            counter++;
        }
    }

    return counter;
};

console.log(findTheDistanceValue([4, 5, 8], [1, 2, 3], 3)); // Expected Output: 1
// console.log(findTheDistanceValue([1, 4, 5, 6], [10, 12, 15], 5)); // Expected Output: 2
// console.log(findTheDistanceValue([2, 3, 4], [3, 4, 5], 1)); // Expected Output: 0
