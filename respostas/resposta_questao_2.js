function arrayDuplicado(array) {
    const conjunto = new Set();
    const duplicados = new Set();

    for(let i = 0; i < array.length; i++) {
         if (conjunto.has(array[i])) {
            duplicados.add(array[i]);
        } else {
            conjunto.add(array[i]);
        }
    }

    return Array.from(duplicados);
}

console.log(arrayDuplicado([4,5,44,98,4,5,6,7]));