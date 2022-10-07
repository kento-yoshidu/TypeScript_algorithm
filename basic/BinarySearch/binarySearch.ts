const binarySearch = (input: number[], target: number) => {
  let count = 0;

  let start = 0;
  let end = input.length

  while (true) {
    count++;

    const middle = Math.floor((start + end) / 2)

    console.log(start, end, middle, input[middle])

    if (input[middle] === target) {
      return count;
    } else if (input[middle] > target) {
      end = input[middle]
    } else {
      start = input[middle]
    }
  }
}

const arr = [1,2,3];

console.log(binarySearch(arr, 3))
