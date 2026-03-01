const correctAnswers = ["evet", "evet", "evet", "evet"];

const form = document.querySelector('.question-form');
const result = document.querySelector('.result'); // BUNU EKLEMELİYİZ

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let score = 0;

    const userAnswers = [
        form.question1.value,
        form.question2.value,
        form.question3.value,
        form.question4.value,
    ];

    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 25;
        }
    });

    // SONUÇ GÖSTER
    result.classList.remove('d-none');

    let puan = 0;

    const bastir = setInterval(() => {

        result.querySelector('span').textContent = `${puan}%`;

        if (puan === score) {
            clearInterval(bastir);
        } else {
            puan++;
        }

    }, 10);
});