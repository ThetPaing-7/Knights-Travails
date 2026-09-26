class knight{
    constructor(){

    }


    movement(point){
        let moves = [
            [point[0] + 1, point[1] + 2], // 1 o'clock (+1, +2)
            [point[0] + 2, point[1] + 1], // 2 o'clock (+2, +1)
            [point[0] + 2, point[1] - 1], // 4 o'clock (+2, -1)
            [point[0] + 1, point[1] - 2], // 5 o'clock (+1, -2)
            [point[0] - 1, point[1] - 2], // 7 o'clock (-1, -2)
            [point[0] - 2, point[1] - 1], // 8 o'clock (-2, -1)
            [point[0] - 2, point[1] + 1], // 10 o'clock (-2, +1)
            [point[0] - 1, point[1] + 2]  // 11 o'clock (-1, +2)
];


        let valid_moves = []

        for (let index = 0; index < moves.length; index++) {
            const element = moves[index];

            if(element[0] < 0 || element[0] > 7 || element[1] < 0 || element > 7){
               continue 
            }else{
                valid_moves.push(element)
            }
        }

        return valid_moves
    }

    

    
}


const whiteKnight = new knight()
console.log(whiteKnight.movement([0,0]))
console.log(whiteKnight.movement([1,2]))
console.log(whiteKnight.movement([2,4]))
console.log(whiteKnight.movement([6,5]))
console.log(whiteKnight.movement([7,7]))