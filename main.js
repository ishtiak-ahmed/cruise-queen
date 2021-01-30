let BookingData = {
    firstClass: 0,
    economyClass: 0,
    firstClassCost: 150,
    economyClassCost: 100,
}

// Updating Value in DOM
function updateDOM(ticketClass) {
    const ticketValue = document.getElementById(ticketClass + 'Value')
    ticketValue.value = BookingData[ticketClass];
    const subTotal = document.getElementById('subTotal');
    const total = document.getElementById('total');
    const tax = document.getElementById('tax');
    subTotal.innerText = subTotalCost();
    tax.innerText = taxCost();
    total.innerText = totalCost();
}

// Calculate subTotalCost
let subTotalCost = function () {
    return (BookingData.firstClass * BookingData.firstClassCost) + (BookingData.economyClass * BookingData.economyClassCost);
}
// Calculate Tax
let taxCost = function () {
    return (subTotalCost() * .1);
}
// Calculate Total Cost
let totalCost = function () {
    return (subTotalCost() + taxCost());
}

// Ticket Counter
function ticketCounter(ticketClass, isIncreasing) {
    // Booking.ticketCount(ticketClass, isIncreasing);
    if (isIncreasing) {
        BookingData[ticketClass] += 1;
    } else {
        if (BookingData[ticketClass] > 0) {
            BookingData[ticketClass] -= 1;
        }
    }
    updateDOM(ticketClass);
}

// Message for confirming Booking
function confirmBooking() {
    let body = document.querySelector('body');
    let confirmMessage = ''
    if (BookingData.firstClass == 0 && BookingData.economyClass == 0) {
        confirmMessage = "Please select at least 1 Ticket before booking."
    }
    else { confirmMessage = `You are booking ${BookingData.firstClass} First Class and ${BookingData.economyClass} Economy Class ticket. Total Cost is $${totalCost()}. Thanks for Traveling with us. Have a nice Journey.`; }
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
