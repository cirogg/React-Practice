const user = {
    name: 'Ciro',
    cities:['Buenos aires', 'San Martin', 'Bolivia'],
    printPlacesLived(){      

        // return this.cities.map((city) => {
        //     return this.name + ' has lived in ' + city;
        // });        

        return this.cities.map((city) => this.name + ' has lived in '+ city);
        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city);
        // });
    }
};

console.log(user.printPlacesLived());

//Challenge

const multiplier = {
    //numbers array.
    //single number multiplyBy
    numbers: [0,1,2,3,4,5],
    multiplyBy: 2,
    multiply(){
       return this.numbers.map((number) => number * this.multiplyBy); 
    }    
};

console.log(multiplier.multiply())