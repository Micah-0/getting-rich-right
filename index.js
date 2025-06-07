// Setup currency input
document.querySelectorAll('.currency-input').forEach(input => {
    input.setAttribute('placeholder', '$0.00');
    input.setAttribute('inputmode', 'decimal');

    let previousValue = '';

    input.addEventListener('focus', function () {
        previousValue = this.value;
    });

    input.addEventListener('blur', function () {
        if (this.value === '') return;

        let value = this.value.replace(/[^0-9.]/g, '');
        let num = parseFloat(value);
        if (isNaN(num)) {
            this.value = previousValue;
        } else {
            this.value = num.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        }

        calculateTotal();
    });
});



// Calculate total
let total = 0;

function calculateTotal() {
    total = 0;

    document.querySelectorAll('.currency-input').forEach(input => {
        let value = input.value.replace(/[^0-9.]/g, '');
        let num = parseFloat(value);
        if (!isNaN(num)) {
            total += num;
        }
    });

    document.getElementById('total').textContent = total.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}

calculateTotal();
