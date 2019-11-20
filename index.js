function findMinAndRemoveSorted(arr){
  return arr.shift()
}

function merge(arr1, arr2){
  const mergedArray = []

  while (arr1.length !== 0 && arr2.length !== 0) {
    if (arr1[0] < arr2[0]){
      mergedArray.push(findMinAndRemoveSorted(arr1))
    } else {
      mergedArray.push(findMinAndRemoveSorted(arr2))
    }
  }

  return mergedArray.concat(arr1).concat(arr2)
}

function mergeSort(array){
  let mid = Math.floor(array.length / 2)
  let firstArr = array.slice(0, mid)
  let secondArr = array.slice(mid)

  if (array.length === 1) {
    return array
  } else {
    return merge(mergeSort(firstArr), mergeSort(secondArr))
  }
}