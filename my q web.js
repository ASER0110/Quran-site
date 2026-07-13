window.onload = function() {
    const pElement = document.querySelector('p'); 
    
    if (pElement) {
        const words = pElement.innerText.split(' ');
        pElement.innerHTML = words.map(word => `<span>${word}</span>`).join(' ');
    }
};