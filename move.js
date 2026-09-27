import Queue from './queue.js'

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

            if(element[0] < 0 || element[0] > 7 || element[1] < 0 || element[1] > 7){
               continue 
            }else{
                valid_moves.push(element)
            }
        }

        return valid_moves
    }

   knight_moves(start, end) {

    let storage = new Queue()
    let connected_moves = new Map()
    let visited = new Set()

    storage.enqueue(start)
    visited.add(start.join(","))

    while (storage.length() > 0) {

        let current = storage.dequeue()

        let valid_moves = this.movement(current)

        for (let move of valid_moves) {

            let moveKey = move.join(",")

            if (!visited.has(moveKey)) {

                visited.add(moveKey)

                // child → parent
                connected_moves.set(
                    moveKey,
                    current.join(",")
                )

                storage.enqueue(move)
            }
        }



         if (this.search(end, [current])) {

            let path = []
            let currentKey = current.join(",")

            while (currentKey !== start.join(",")) {

                let currentNode = currentKey.split(",").map(Number)

                path.push(currentNode)

                currentKey = connected_moves.get(currentKey)
            }

            path.push(start)
            path.reverse()
            return path
        }
    }

    return null
}


    // finding exact moves
    search(find_elemenet, arrays){
        return arrays.some(subArrays => 
            find_elemenet.length === subArrays.length &&
            find_elemenet.every((value, index) => value === subArrays[index])
        )
    }


    flat_push(moves_array, container){
        for(let i = 0; i < moves_array.length; i++){
            container.enqueue(moves_array[i])
        }
    }

    addValueToKey(map,key, value){
        if(!map.has(key)){
            map.set(key, [])
        }

        map.get(key).push(value)
    }
    
}


const whiteKnight = new knight()
console.log(whiteKnight.knight_moves([0,0],[7,7]))
