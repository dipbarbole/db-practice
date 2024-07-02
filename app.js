function Counter() {
    this.count = 0;
    this.increment = function() {
        this.count++;
        console.log(this.count);
    };
}

const counter = new Counter();
const button = document.getElementById('incrementButton');
button.addEventListener('click', counter.increment.bind(counter)); // Ensures `this` is bound to `counter`
