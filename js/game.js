function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    var dropzone = event.target;

    if (dropzone.classList.contains('dropzone')) {
        if (!dropzone.hasChildNodes()) {
            var draggedWord = document.getElementById(data);
            dropzone.appendChild(draggedWord);
            dropzone.classList.add("filled");
        } else {
            var existingWord = dropzone.firstChild;
            var wordBank = document.getElementById('word-bank');
            wordBank.appendChild(existingWord);
            dropzone.appendChild(document.getElementById(data));
        }
    }
}

function checkSentence() {
    const correctOrder = ['you', 'are', 'the', 'cause', 'of', 'my', 'euphoria'];
    let sentence = [];
    document.querySelectorAll('.dropzone').forEach(function(dropzone) {
        if (dropzone.firstChild) {
            sentence.push(dropzone.firstChild.textContent);
        }
    });

    if (sentence.join(' ') === correctOrder.join(' ')) {
        document.getElementById('result').innerHTML = "Congratulations!";
        document.getElementById('song').style.display = 'block';
        document.getElementById('song').play();
        playButtonSound();
        setTimeout(closeGame, 3000);
        closeGame();
    } else {
        document.getElementById('result').innerHTML = "Try again!";
        resetGame();
        document.getElementById('song').style.display = 'none';
    }
}

function playButtonSound() {
    var buttonSound = document.getElementById("button-sound");
    buttonSound.play();
}

function playButtonSounError() {
    var buttonSoundError = document.getElementById("button-sound-error");
    buttonSoundError.play();
}

function resetGame() {
    playButtonSounError();
    var wordBank = document.getElementById('word-bank');
    var dropzones = document.querySelectorAll('.dropzone');

    dropzones.forEach(function(dropzone) {
        if (dropzone.firstChild) {
            wordBank.appendChild(dropzone.firstChild);
        }
        dropzone.classList.remove("filled");
    });

    document.getElementById('result').innerHTML = "";
    
    closeGame();
}

function closeGame() {
    var gameContainer = document.querySelector('.game-container');
    gameContainer.style.opacity = '0'; 
    setTimeout(function() {
        gameContainer.style.display = 'none';
    }, 500); 
}
document.addEventListener('keydown', function(event) {
        if (event.key === "Escape") {
            closeGame();
        }
    });