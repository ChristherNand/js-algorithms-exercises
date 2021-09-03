/**
 * A queue is a DS which is based on the concept of
 * FIFO, First in first Out
 */

function createQueue(){
    const queue = []
    return {
        //Add method
        enqueueMethod(item){
            //Add item at the beginning of the array
            queue.unshift(item)
        },
        //Remove method
        dequeueMethod(){
            //Deletes the last item in the array
            return queue.pop()
        },
        //Peek method
        peekMethod(){
            //returns the item thats next to be removed
            return queue[queue.length - 1]
        },
        //length
        get length(){
            return queue.length
        },
        //isEmpty
        isEmpty(){
            return queue.length === 0
        }
    }
}

//Creating the queue

const newQueue = createQueue()
newQueue.enqueueMethod("Learn data structures and algorithms")
newQueue.enqueueMethod("Master Problem solving skills")
newQueue.enqueueMethod("Create your dream job")
newQueue.dequeueMethod()
console.log(newQueue.isEmpty())
console.log(newQueue.peekMethod())