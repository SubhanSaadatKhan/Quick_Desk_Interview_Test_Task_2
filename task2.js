var takeNumber = document.getElementById("takeNumber");
var showCase = document.getElementById("showCase");
var nowServing = document.getElementById("nowServing");
var lastNumber = document.getElementById("lastNumber");
var statusCoun1 = document.getElementById("counter1Status");
var statusCoun2 = document.getElementById("counter2Status");
var statusCoun3 = document.getElementById("counter3Status");
var statusCoun4 = document.getElementById("counter4Status");
var btnCounter1 = document.getElementById("btnCounter1");
var btnCounter2 = document.getElementById("btnCounter2");
var btnCounter3 = document.getElementById("btnCounter3");
var btnCounter4 = document.getElementById("btnCounter4");
var callNxt1 = document.getElementById("callNxt1");
var callNxt2 = document.getElementById("callNxt2");
var callNxt3 = document.getElementById("callNxt3");
var callNxt4 = document.getElementById("callNxt4");
var currNum1 = document.getElementById("currNum1");
var currNum2 = document.getElementById("currNum2");
var currNum3 = document.getElementById("currNum3");
var currNum4 = document.getElementById("currNum4");
var complete1 = document.getElementById("complete1");
var complete2 = document.getElementById("complete2");
var complete3 = document.getElementById("complete3");
var complete4 = document.getElementById("complete4");
var isCounter1Offline = false;
var isCounter2Offline = false;
var isCounter3Offline = false;
var isCounter4Offline = false;
var isCounter1Busy = false;
var isCounter2Busy = false;
var isCounter3Busy = false;
var isCounter4Busy = false;
statusCoun1.style.backgroundColor = "green";
statusCoun2.style.backgroundColor = "green";
statusCoun3.style.backgroundColor = "green";
statusCoun4.style.backgroundColor = "green";
var Queue = /** @class */ (function () {
    function Queue() {
        this.container = [];
        this.latestNum = 0;
    }
    Queue.prototype.enqueue = function () {
        this.latestNum += 1;
        this.container.push(String(this.latestNum));
        return this.container;
    };
    Queue.prototype.dequeue = function () {
        return this.container.shift();
    };
    Queue.prototype.getQueue = function () {
        return this.container;
    };
    Queue.prototype.size = function () {
        return this.container.length;
    };
    Queue.prototype.getCurrNum = function () {
        return this.latestNum;
    };
    return Queue;
}());
var changeCoun1Status = function () {
    btnCounter1.innerHTML = statusCoun1.style.backgroundColor == 'gray' ? "Go Online" : "Go Offline";
};
var changeCoun2Status = function () {
    btnCounter2.innerHTML = statusCoun2.style.backgroundColor == 'gray' ? "Go Online" : "Go Offline";
};
var changeCoun3Status = function () {
    btnCounter3.innerHTML = statusCoun3.style.backgroundColor == 'gray' ? "Go Online" : "Go Offline";
};
var changeCoun4Status = function () {
    btnCounter4.innerHTML = statusCoun4.style.backgroundColor == 'gray' ? "Go Online" : "Go Offline";
};
changeCoun1Status();
changeCoun2Status();
changeCoun3Status();
changeCoun4Status();
var displayTicketNum = function (q) {
    var number = q.getCurrNum();
    showCase.innerHTML = "Your ticket number is ".concat(number);
    lastNumber.innerHTML = "Last Number: ".concat(number);
};
var updateNowServing = function (ticket) {
    nowServing.innerHTML = "Now Serving: ".concat(ticket);
};
var queue = new Queue();
takeNumber.addEventListener('click', function () {
    queue.enqueue();
    displayTicketNum(queue);
});
btnCounter1.addEventListener('click', function () {
    statusCoun1.style.backgroundColor = statusCoun1.style.backgroundColor == 'gray' ? "green" : "gray";
    isCounter1Offline = statusCoun1.style.backgroundColor == 'gray' ? true : false;
    currNum1.innerHTML = statusCoun1.style.backgroundColor == 'gray' ? "Offline" : "_ _";
    changeCoun1Status();
});
btnCounter2.addEventListener('click', function () {
    statusCoun2.style.backgroundColor = statusCoun2.style.backgroundColor == 'gray' ? "green" : "gray";
    currNum2.innerHTML = statusCoun2.style.backgroundColor == 'gray' ? "Offline" : "_ _";
    isCounter2Offline = statusCoun2.style.backgroundColor == 'gray' ? true : false;
    changeCoun2Status();
});
btnCounter3.addEventListener('click', function () {
    statusCoun3.style.backgroundColor = statusCoun3.style.backgroundColor == 'gray' ? "green" : "gray";
    currNum3.innerHTML = statusCoun3.style.backgroundColor == 'gray' ? "Offline" : "_ _";
    isCounter3Offline = statusCoun3.style.backgroundColor == 'gray' ? true : false;
    changeCoun3Status();
});
btnCounter4.addEventListener('click', function () {
    statusCoun4.style.backgroundColor = statusCoun4.style.backgroundColor == 'gray' ? "green" : "gray";
    currNum4.innerHTML = statusCoun4.style.backgroundColor == 'gray' ? "Offline" : "_ _";
    isCounter4Offline = statusCoun4.style.backgroundColor == 'gray' ? true : false;
    changeCoun4Status();
});
complete1.addEventListener('click', function () {
    if (!isCounter1Offline) {
        statusCoun1.style.backgroundColor = "green";
        isCounter1Busy = false;
        currNum1.innerHTML = "_ _";
    }
});
complete2.addEventListener('click', function () {
    if (!isCounter2Offline) {
        statusCoun2.style.backgroundColor = "green";
        isCounter2Busy = false;
        currNum2.innerHTML = "_ _";
    }
});
complete3.addEventListener('click', function () {
    if (!isCounter3Offline) {
        statusCoun3.style.backgroundColor = "green";
        isCounter3Busy = false;
        currNum3.innerHTML = "_ _";
    }
});
complete4.addEventListener('click', function () {
    if (!isCounter4Offline) {
        statusCoun4.style.backgroundColor = "green";
        isCounter4Busy = false;
        currNum4.innerHTML = "_ _";
    }
});
callNxt1.addEventListener('click', function () {
    if (!isCounter1Offline && !isCounter1Busy) {
        var pickUp = queue.dequeue();
        currNum1.innerHTML = pickUp !== undefined ? pickUp : "Empty Queue";
        if (pickUp !== undefined) {
            statusCoun1.style.backgroundColor = "red";
            updateNowServing(pickUp);
            isCounter1Busy = true;
        }
        else {
            statusCoun1.style.backgroundColor = "green";
        }
    }
    else {
        console.log("Counter 1 is currently offline or is currently busy");
    }
});
callNxt2.addEventListener('click', function () {
    if (!isCounter2Offline && !isCounter2Busy) {
        var pickUp = queue.dequeue();
        currNum2.innerHTML = pickUp !== undefined ? pickUp : "Empty Queue";
        if (pickUp !== undefined) {
            statusCoun2.style.backgroundColor = "red";
            updateNowServing(pickUp);
            isCounter2Busy = true;
        }
        else {
            statusCoun2.style.backgroundColor = "green";
        }
    }
    else {
        console.log("Counter 2 is currently offline or is currently busy");
    }
});
callNxt3.addEventListener('click', function () {
    if (!isCounter3Offline && !isCounter3Busy) {
        var pickUp = queue.dequeue();
        currNum3.innerHTML = pickUp !== undefined ? pickUp : "Empty Queue";
        if (pickUp !== undefined) {
            statusCoun3.style.backgroundColor = "red";
            updateNowServing(pickUp);
            isCounter3Busy = true;
        }
        else {
            statusCoun3.style.backgroundColor = "green";
        }
    }
    else {
        console.log("Counter 3 is currently offline or is currently busy");
    }
});
callNxt4.addEventListener('click', function () {
    if (!isCounter4Offline && !isCounter4Busy) {
        var pickUp = queue.dequeue();
        currNum4.innerHTML = pickUp !== undefined ? pickUp : "Empty Queue";
        if (pickUp !== undefined) {
            statusCoun4.style.backgroundColor = "red";
            updateNowServing(pickUp);
            isCounter4Busy = true;
        }
        else {
            statusCoun4.style.backgroundColor = "green";
        }
    }
    else {
        console.log("Counter 4 is currently offline or is currently busy");
    }
});
