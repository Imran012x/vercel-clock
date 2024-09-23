// Optional: If you want to add functionality for the question input
document.getElementById('submit').addEventListener('click', () => {
    const question = document.getElementById('question').value;
    document.getElementById('response').innerText = `You asked: ${question}`;
});
