function sortedNumbers(numbers){
  if(!numbers.length){
    return []
  }

  const oddNumbers = []
  const evenNumbers = []

  for(let i = 0 ; i < numbers.length ; i++){
    if(numbers[i] % 2 === 0){
      evenNumbers.push(numbers[i])
      continue
    }

    oddNumbers.push(numbers[i])
  }

  return [...oddNumbers.sort((a,b) => a - b), ...evenNumbers.sort((a,b)=> b - a)]
}