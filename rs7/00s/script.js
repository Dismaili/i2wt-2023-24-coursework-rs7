document.addEventListener("DOMContentLoaded", function() {
    var currentIndex = 0;
    var players = document.querySelectorAll('.player-card');
    var totalPlayers = players.length;

    function showPlayer(index) {
        players.forEach((player, idx) => {
            player.style.display = idx === index ? 'block' : 'none';
        });
    }

    document.getElementById('prev').addEventListener('click', function() {
        currentIndex = currentIndex > 0 ? currentIndex - 1 : totalPlayers - 1;
        showPlayer(currentIndex);
    });

    document.getElementById('next').addEventListener('click', function() {
        currentIndex = currentIndex < totalPlayers - 1 ? currentIndex + 1 : 0;
        showPlayer(currentIndex);
    });

    showPlayer(0); // Show the first player initially
});