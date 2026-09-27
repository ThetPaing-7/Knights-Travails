export default class Queue{
    constructor(){
        this.items =  {}
        this.head = 0
        this.tail = 0
    }



    // Add to back
    enqueue(element){
        this.items[this.tail] = element
        this.tail++
    }

    // Remove from front
    dequeue(){
        if(this.isEmpty()) return 'Queue is empty'

        const item = this.items[this.head]
        delete this.items[this.head]
        this.head++
        return item
    }

    // Check current element
    peek(){
        return this.isEmpty() ? 'Queue is empty' : this.items[this.head]
    }
    
    isEmpty(){
        return this.tail - this.head === 0
    }

    length(){
        return this.tail - this.head
    }

    show(){
        return Object.values(this.items)
    }
}


