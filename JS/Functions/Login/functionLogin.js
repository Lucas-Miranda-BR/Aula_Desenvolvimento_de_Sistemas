function validateLogin(currentUsername, currentPassword, guessedUsername, guessedPassword) {


    if (currentPassword == guessedPassword && currentUsername == guessedUsername) {
        
        return true;

    }

    else {
        return false;

    }
}