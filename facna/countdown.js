let end = new Date(2024, 9, 18);
console.log(end);

let countdown = () => { 
    let total = Date.parse(end) - Date.now();
    let days = Math.floor(total / (1000 * 60 * 60 * 24))
    let hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((total / (1000 * 60)) % 60);
    let seconds = Math.floor(total / (1000) % 60);
    return {
        days,
        hours,
        minutes,
        seconds
    }
}

countdown();

let update = () => {
    let temp = countdown();
    let output = "";
    for (let property in temp) {
        let capProp = property.charAt(0).toUpperCase() + property.slice(1);
        document.getElementById(property).innerText = `${capProp}: ${temp[property]} `;
    }
    console.log(output);
    setTimeout(update, 1000);
}

update();  