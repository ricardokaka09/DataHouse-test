function palindromeSubstring(string){
  const newString = string.replace(/[^A-Za-z0-9]/g, '').toLowerCase()

  let palindromeString = ''

  for(let i = 0; i <= newString.length; i++){
    let odd = palindrome(i, i, newString)
    let even = palindrome(i, i + 1, newString)

    palindromeString = palindromeString.length > odd.length ? palindromeString : odd
    palindromeString = palindromeString.length > even.length ? palindromeString : even

    if(palindromeString.length > 1){
      return true
    }
  }

  return false
}

function palindrome(left, right, string){
  while(left >= 0 && right <= string.length && string[left] === string[right]){
    left--
    right++
  }

  return string.slice(left + 1, right)
}