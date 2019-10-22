
function swap(idx1, idx2, arr){
  let swapped= arr[idx1]
  arr[idx1] = arr[idx2]
  arr[idx2]= swapped
  return arr
}

function bubbleSort(arr){
  for (let i=0; i<arr.length; i++){
    for (let j=0; j<arr.length; j++){
      if (arr[j]> arr[j+1]){
        swap(j, j+1, arr)
      }
    }
  }

  return arr
}

