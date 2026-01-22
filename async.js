const processOrder = (customer) => {
    console.log(`Stepl-2: Processing order for customer 1`);

    let currentTime = new Date().getTime();
    while (currentTime + 3000 >= new Date().getTime());

    console.log(`Stepl-3: Order processed for customer 1`);
}

console.log(`Stepl-1: Take order for customer 1`);
processOrder();
console.log(`Stepl-4: Completer order for customer 1`);