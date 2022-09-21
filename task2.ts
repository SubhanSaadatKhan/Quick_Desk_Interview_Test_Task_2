const takeNumber = document.getElementById("takeNumber") as HTMLElement
const showCase = document.getElementById("showCase") as HTMLElement
const nowServing = document.getElementById("nowServing") as HTMLElement
const lastNumber = document.getElementById("lastNumber") as HTMLElement
const statusCoun1 = document.getElementById("counter1Status") as HTMLElement
const statusCoun2 = document.getElementById("counter2Status") as HTMLElement
const statusCoun3 = document.getElementById("counter3Status") as HTMLElement
const statusCoun4 = document.getElementById("counter4Status") as HTMLElement
const btnCounter1 = document.getElementById("btnCounter1") as HTMLElement
const btnCounter2 = document.getElementById("btnCounter2") as HTMLElement
const btnCounter3 = document.getElementById("btnCounter3") as HTMLElement
const btnCounter4 = document.getElementById("btnCounter4") as HTMLElement
const callNxt1 = document.getElementById("callNxt1") as HTMLElement
const callNxt2 = document.getElementById("callNxt2") as HTMLElement
const callNxt3 = document.getElementById("callNxt3") as HTMLElement
const callNxt4 = document.getElementById("callNxt4") as HTMLElement
const currNum1 = document.getElementById("currNum1") as HTMLElement
const currNum2 = document.getElementById("currNum2") as HTMLElement
const currNum3 = document.getElementById("currNum3") as HTMLElement
const currNum4 = document.getElementById("currNum4") as HTMLElement
const complete1 = document.getElementById("complete1") as HTMLElement
const complete2 = document.getElementById("complete2") as HTMLElement
const complete3 = document.getElementById("complete3") as HTMLElement
const complete4 = document.getElementById("complete4") as HTMLElement

let isCounter1Offline: boolean = false;
let isCounter2Offline: boolean = false;
let isCounter3Offline: boolean = false;
let isCounter4Offline: boolean = false;
let isCounter1Busy: boolean = false;
let isCounter2Busy: boolean = false;
let isCounter3Busy: boolean = false;
let isCounter4Busy: boolean = false;

statusCoun1.style.backgroundColor = "green"
statusCoun2.style.backgroundColor = "green"
statusCoun3.style.backgroundColor = "green"
statusCoun4.style.backgroundColor = "green"

interface IQueuable {
    //adds value to queue and returns new queue
    enqueue(): string[];
    //removes item from queue, and returns the item removed
    dequeue(): string | undefined;
    //returns a list of all the items in the queue
    getQueue(): string[];
    //returns the number of items in the queue
    size(): number;
    getCurrNum(): number
}

class Queue implements IQueuable {

    private container: string[] = [];
    private latestNum: number = 0;

    enqueue(): string[] {
        this.latestNum += 1
        this.container.push(String(this.latestNum));
        return this.container;
    }
    dequeue(): string | undefined {
        return this.container.shift();
    }
    getQueue(): string[] {
        return this.container;
    }
    size(): number {
        return this.container.length;
    }
    getCurrNum(): number {
        return this.latestNum
    }


}
const changeCoun1Status = () => {
    btnCounter1.innerHTML = statusCoun1.style.backgroundColor == 'gray' ? "Go Online" : "Go Offline"
}
const changeCoun2Status = () => {
    btnCounter2.innerHTML = statusCoun2.style.backgroundColor == 'gray' ? "Go Online" : "Go Offline"
}
const changeCoun3Status = () => {
    btnCounter3.innerHTML = statusCoun3.style.backgroundColor == 'gray' ? "Go Online" : "Go Offline"
}
const changeCoun4Status = () => {
    btnCounter4.innerHTML = statusCoun4.style.backgroundColor == 'gray' ? "Go Online" : "Go Offline"
}

changeCoun1Status()
changeCoun2Status()
changeCoun3Status()
changeCoun4Status()

const displayTicketNum = (q: Queue) => {
    const number: number = q.getCurrNum()
    showCase.innerHTML = `Your ticket number is ${number}`
    lastNumber.innerHTML = `Last Number: ${number}`

}
const updateNowServing = (ticket: string) => {
    nowServing.innerHTML = `Now Serving: ${ticket}`
}

const queue = new Queue();


takeNumber.addEventListener('click', () => {
    queue.enqueue()
    displayTicketNum(queue)
})

btnCounter1.addEventListener('click', () => {
    statusCoun1.style.backgroundColor = statusCoun1.style.backgroundColor == 'gray' ? "green" : "gray"
    isCounter1Offline = statusCoun1.style.backgroundColor == 'gray' ? true : false
    currNum1.innerHTML = statusCoun1.style.backgroundColor == 'gray' ? "Offline" : "_ _"
    changeCoun1Status()
})
btnCounter2.addEventListener('click', () => {
    statusCoun2.style.backgroundColor = statusCoun2.style.backgroundColor == 'gray' ? "green" : "gray"
    currNum2.innerHTML = statusCoun2.style.backgroundColor == 'gray' ? "Offline" : "_ _"
    isCounter2Offline = statusCoun2.style.backgroundColor == 'gray' ? true : false
    changeCoun2Status()
})
btnCounter3.addEventListener('click', () => {
    statusCoun3.style.backgroundColor = statusCoun3.style.backgroundColor == 'gray' ? "green" : "gray"
    currNum3.innerHTML = statusCoun3.style.backgroundColor == 'gray' ? "Offline" : "_ _"
    isCounter3Offline = statusCoun3.style.backgroundColor == 'gray' ? true : false
    changeCoun3Status()
})
btnCounter4.addEventListener('click', () => {
    statusCoun4.style.backgroundColor = statusCoun4.style.backgroundColor == 'gray' ? "green" : "gray"
    currNum4.innerHTML = statusCoun4.style.backgroundColor == 'gray' ? "Offline" : "_ _"
    isCounter4Offline = statusCoun4.style.backgroundColor == 'gray' ? true : false
    changeCoun4Status()
})



complete1.addEventListener('click', () => {
    if (!isCounter1Offline) {
        statusCoun1.style.backgroundColor = "green"
        isCounter1Busy = false
        currNum1.innerHTML = "_ _"
    }

})



complete2.addEventListener('click', () => {
    if (!isCounter2Offline) {

        statusCoun2.style.backgroundColor = "green"
        isCounter2Busy = false
        currNum2.innerHTML = "_ _"
    }

})



complete3.addEventListener('click', () => {
    if (!isCounter3Offline) {
        statusCoun3.style.backgroundColor = "green"
        isCounter3Busy = false
        currNum3.innerHTML = "_ _"
    }

})


complete4.addEventListener('click', () => {
    if (!isCounter4Offline) {
        statusCoun4.style.backgroundColor = "green"
        isCounter4Busy = false
        currNum4.innerHTML = "_ _"

    }
})

callNxt1.addEventListener('click', () => {
    if (!isCounter1Offline && !isCounter1Busy) {

        const pickUp: string | undefined = queue.dequeue()
        currNum1.innerHTML = pickUp !== undefined ? pickUp : "Empty Queue"
        if (pickUp !== undefined) {
            statusCoun1.style.backgroundColor = "red"
            updateNowServing(pickUp)
            isCounter1Busy = true
        }
        else {
            statusCoun1.style.backgroundColor = "green"
        }
    }
    else {
        console.log("Counter 1 is currently offline or is currently busy")
    }
})
callNxt2.addEventListener('click', () => {
    if (!isCounter2Offline && !isCounter2Busy) {

        const pickUp: string | undefined = queue.dequeue()
        currNum2.innerHTML = pickUp !== undefined ? pickUp : "Empty Queue"
        if (pickUp !== undefined) {
            statusCoun2.style.backgroundColor = "red"
            updateNowServing(pickUp)
            isCounter2Busy = true
        }
        else {
            statusCoun2.style.backgroundColor = "green"
        }
    }
    else {
        console.log("Counter 2 is currently offline or is currently busy")
    }
})
callNxt3.addEventListener('click', () => {
    if (!isCounter3Offline && !isCounter3Busy) {

        const pickUp: string | undefined = queue.dequeue()
        currNum3.innerHTML = pickUp !== undefined ? pickUp : "Empty Queue"
        if (pickUp !== undefined) {
            statusCoun3.style.backgroundColor = "red"
            updateNowServing(pickUp)
            isCounter3Busy = true
        }
        else {
            statusCoun3.style.backgroundColor = "green"
        }
    }
    else {
        console.log("Counter 3 is currently offline or is currently busy")
    }
})
callNxt4.addEventListener('click', () => {
    if (!isCounter4Offline && !isCounter4Busy) {

        const pickUp: string | undefined = queue.dequeue()
        currNum4.innerHTML = pickUp !== undefined ? pickUp : "Empty Queue"
        if (pickUp !== undefined) {
            statusCoun4.style.backgroundColor = "red"
            updateNowServing(pickUp)
            isCounter4Busy = true
        }
        else {
            statusCoun4.style.backgroundColor = "green"
        }
    }
    else {
        console.log("Counter 4 is currently offline or is currently busy")
    }
})