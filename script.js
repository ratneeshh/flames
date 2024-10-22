document.getElementById('flamesForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name1 = document.getElementById('name1').value.toLowerCase().replace(/\s/g, '');
    const name2 = document.getElementById('name2').value.toLowerCase().replace(/\s/g, '');
    
    const uniqueLetters = removeCommonLetters(name1, name2);
    const remainingCount = uniqueLetters.length;
    const flamesResult = getFlamesResult(remainingCount);

    const resultElement = document.getElementById('flamesResult');
    resultElement.textContent = flamesResult;

    // Add some drama with text animations
    const resultContainer = document.querySelector('.result');
    resultContainer.style.display = 'block';
    resultContainer.style.opacity = 0;
    
    let opacity = 0;
    let step = 0.05;
    const interval = setInterval(() => {
        opacity += step;
        resultContainer.style.opacity = opacity;
        
        if (opacity >= 1) {
            clearInterval(interval);
        }
    }, 50);

    
});

function removeCommonLetters(name1, name2) {
    let nameArr1 = name1.split('');
    let nameArr2 = name2.split('');
    
    nameArr1.forEach(letter => {
        const index = nameArr2.indexOf(letter);
        if (index !== -1) {
            nameArr2.splice(index, 1);
        }
    });

    return [...nameArr1, ...nameArr2];
}

function getFlamesResult(count) {
    const flames = ['Friends', 'Lovers', 'Affectionate', 'Marriage', 'Enemies', 'Siblings'];
    let index = count % flames.length - 1;

    if (index < 0) {
        index = flames.length - 1;
    }

    return flames[index];
}
