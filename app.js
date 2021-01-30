/*
    ------------------------
    Requierment
    ------------------------
    1. Clean Code
    2. Live link
    3. Github Code Link
    ------------------------
    Bounus
    ------------------------
    1. Show message for booking 
        🗸 -- Need Improvement
    2. Clean Function
    3. Valid value
*/

let Booking = {
    firstClass: 0,
    economyClass: 0,
    firstClassCost: 150,
    economyClassCost: 100,
    subTotal: function () {
        return this.firstClass * this.firstClassCost + this.economyClass * this.economyClassCost;
    },
    tax: function () {
        return this.subTotal() * .1;
    },
    totalCost: function () {
        return (this.subTotal() + this.tax())
    },
    ticketCount: function (ticketClass, isIncreasing) {
        if (isIncreasing) {
            // console.log('economy ticket increased')
            this[ticketClass] += 1;
        } else {
            if (this[ticketClass] > 0) {
                this[ticketClass] -= 1;
            }
        }
    }
};

// Ticket Counter
function ticketCounter(ticketClass, isIncreasing) {
    Booking.ticketCount(ticketClass, isIncreasing);
    updateDOM(ticketClass);
}

// Updating Value in DOM
function updateDOM(ticketClass) {
    const ticketValue = document.getElementById(ticketClass + 'Value')
    ticketValue.value = Booking[ticketClass];
    const subTotal = document.getElementById('subTotal');
    const total = document.getElementById('total');
    const tax = document.getElementById('tax');
    subTotal.innerText = Booking.subTotal();
    tax.innerText = Booking.tax();
    total.innerText = Booking.totalCost();
}

// Message for confirming Booking
function confirmBooking() {
    let body = document.querySelector('body');
    let confirmMessage = ''
    if (Booking.firstClass == 0 && Booking.economyClass == 0) {
        confirmMessage = "Please select at least 1 Ticket before booking."
    }
    else { confirmMessage = `You are booking ${Booking.firstClass} First Class and ${Booking.economyClass} Economy Class ticket. Total Cost is $${Booking.totalCost()}. Thanks for Traveling with us. Have a nice Journey.`; }
    let message = document.createElement('div');
    message.setAttribute('class', 'confirmMessage');
    let para = document.createElement('p');
    para.innerText = confirmMessage;
    message.appendChild(para);
    body.appendChild(message);
    message.addEventListener('click', function (event) {
        event.target.parentNode.removeChild(event.target);
    });
}