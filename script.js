  function checkPrime(n = document.getElementById('A').value) {
    let list = [];
    for(let i = 0; i <= n; i++){
      let count = 0;
      for(let q = 2; q < i; q++){
        if(i % q === 0){
          count = 1;
        }
      }
      if(i > 1 && count === 0){
        list.push(i);
        document.getElementById('result').innerHTML = list;
      }
    }

  }
