var kiosk={
    fruit:'mango',
    setFruit(){
        return this.fruit;
    },
    getFruits(fruits_list){
        return this.fruit=fruits_list;
    }
}
console.log(kiosk.fruit);
 kiosk.fruits_list=['watermelon','guava'];
 console.log(kiosk.fruits_list);