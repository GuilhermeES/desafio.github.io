function organizacaoFoto(pessoas) {
    let modos = 1;

    for (let i = 1; i <= pessoas; i++) {
      modos *= i;
    }
    
    return modos;
  }
  
  console.log(organizacaoFoto(5));