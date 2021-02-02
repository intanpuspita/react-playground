const multiplier = {
    numbers: [10, 20, 30],
    multiplyBy: 5,
    multiply(){
        const res = this.numbers.map((no) => no/this.multiplyBy);
        return res;
    }
}

console.log(multiplier.multiply());