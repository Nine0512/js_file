const author='Umaporn'
function average(nums){
    let total=0    
    function sum(){
        for(const num of nums){
            total+=num           
            console.log(total)
        }
        return total    
    }
    console.log(`length: ${nums.length}`)
    return sum()/nums.length
}
// console.log(`average = ${average([1,2,3,4,5])}`)

const average2 = (nums) => nums.reduce((sum,num) => sum += num)/nums.length

console.log(average2([1,2,3,4,5]))
