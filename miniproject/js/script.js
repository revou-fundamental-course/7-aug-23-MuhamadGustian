function calculate() {
            const base = parseFloat(document.getElementById('base').value);
            const height = parseFloat(document.getElementById('height').value);
            
            const area = 0.5 * base * height;
            const perimeter = base + 2 * Math.sqrt((height ** 2) + (base ** 2));
            
            const resultElement = document.getElementById('result');
            resultElement.innerHTML = `Luas: ${area.toFixed(2)} <br> Keliling: ${perimeter.toFixed(2)}`;
}
