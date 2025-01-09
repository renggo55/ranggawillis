document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman form

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Tampilkan pesan sukses
    const responseMessage = document.getElementById('responseMessage');
    responseMessage.innerHTML = `<p>Terima kasih, ${name}! Pesan Anda telah dikirim.</p>`;

    // Reset form
    this.reset();
});