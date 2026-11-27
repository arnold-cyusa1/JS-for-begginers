function dayName(n) {
    switch (n) {
        case 1: return "monday";
        case 2: return "tuesday";
        case 3: return "wednesday";
        case 4: return "thursday";
        case 5: return "friday";
        case 6: return "saturday";
        case 7: return "sunday";
        default: return "Invalid day";
    }
}

console.log(dayName(3)); // wednesday
console.log(dayName(7)); // sunday
console.log(dayName(9)); // Invalid day