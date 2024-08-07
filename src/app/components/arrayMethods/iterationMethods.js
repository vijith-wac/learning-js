'use client'
const IterationMethods =()=>{

    //Foreach
    const arr = [1,2,3]   
    arr.forEach(item=>console.log(item*3))
    
    //Map
    const newArray = arr.map(item=>item*2)
    console.log(newArray,'newMappedArray')

    //Filter
    const newFilterArray = arr.filter(item=>item%2!==0)
    console.log(newFilterArray,'newFilteredArray')

    //reduce
    const reducedArray = arr.reduce((accumulator,current)=>accumulator+current,0)
    console.log(reducedArray,'reduced array')

    //some
    const hasPassed = arr.some(item=>item%2==0)
    console.log(hasPassed,'some')

    //every
    const hasAllPassed = arr.every(item=>item%2==0)
    console.log(hasAllPassed,'every')


    //Advanced Array methods

    //find
    const foundElement = arr.find(item=>item>2)
    console.log(foundElement,'find')

    //findIndex
    const findElementIndex = arr.findIndex(num=>num>2)
    console.log(findElementIndex,'findIndex')

    //includes
    const hasInclude = arr.includes(25)
    console.log(hasInclude,'Include')

    //indexOf
    const indexOfElement = arr.indexOf(2)
    console.log(indexOfElement,'indexOf')

    //join
    const joinedElement = arr.join('-')
    console.log(joinedElement,'joined element')

    //slice
    const slicedElement = arr.slice(0,1)
    console.log(slicedElement,'slice')

    //splice
    const arrNew = [1,2,3,4,5]
    console.log(arrNew,'Before splice')
    arrNew.splice(1,2,'a','b')
    console.log(arrNew,'After splice')

    //Sort
    const arrSort = [5,8,4,2,6]
    console.log(arrSort,'Before Sorted')
    arrSort.sort()
    console.log(arrSort,'After sort')

    //Reverse
    console.log(arr,'Before Reverse')
    arr.reverse()
    console.log(arr,'after reverse')

    //Flat
    const flatArr = [1,2,[6,8,[3,9]]]
    console.log(flatArr,'Before Flat')
    const flatArrNew = flatArr.flat(2)
    console.log(flatArrNew,'After Flat')

    //FlatMap
    const flatMapArr = [1,2,3,4]
    const newFlatMapArr = flatMapArr.flatMap(num=>[num,num*2])
    console.log(newFlatMapArr,'flatMap')


}

export default IterationMethods