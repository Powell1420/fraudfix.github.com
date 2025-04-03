document.addEventListener("DOMContentLoaded", () => {
    const messages = [
        "✅ La traçabilité des transactions effectuées",
        "✅ La possibilité de bloquer ou récupérer les fonds",
        "✅ L’identification des comptes bancaires ou crypto-portefeuilles liés à l’arnaque",
        "✅ La mise en relation avec les autorités compétentes si nécessaire",
        "",
        "Lancement de la procédure de récupération",
        "Intervention auprès des banques et plateformes de paiement...",
        "Signalement officiel aux autorités compétentes...",
        "Action légale contre la plateforme frauduleuse...",
    ];

    let index = 0;
    const messageContainer = document.getElementById("message");

    function displayNextMessage() {
        if (index < messages.length) {
            const newMessage = document.createElement("p");
            newMessage.textContent = messages[index];
            newMessage.classList.add("fade-in");
            messageContainer.appendChild(newMessage);
            index++;
            setTimeout(displayNextMessage, 1500); // Affichage progressif
        } else {
            setTimeout(() => {
                window.location.href = "conseigner.html"; // Redirection après 10s
            }, 3000);
        }
    }

    setTimeout(displayNextMessage, 2000);
});
