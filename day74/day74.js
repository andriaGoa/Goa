function rounding(n, m) {

    const remainder =  n % m
    const half = m / 2
    
    if (remainder < half){
      return n - remainder
    }else if(remainder > half){
      return n + (m - remainder)
    }else{
      return n
}

function findOdd(A) {
    let counts = {}
    for (let num of A){
      counts[num] =   (counts[num] || 0 ) + 1 
    }
    
    for(let num in counts){
      if(counts[num] % 2 != 0){
        return Number(num)
      }
    }
    
  }