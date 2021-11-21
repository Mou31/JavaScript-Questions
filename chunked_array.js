const chunks = ((arr, n) => {
    const chunked = [];

    for(let ele of arr){
        let last = chunked[chunked.length-1];

        if(!last || last.length === n)
        chunked.push([ele])
        else
        last.push(ele)
    }
    return chunked;
})([1,3,5,6,7,8,9,2,4],4)

console.log({
    chunks
});
