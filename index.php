<?php
    session_start();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Giao diện trò chơi</title>
    <link rel="stylesheet" href="./style/index.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <script src="./components/startGame.js"></script>
    <script src="./components/module.js"></script>
    <script src="./components/buildDeck.js"></script>
    <script src="./components/getValue.js"></script>
    <script src="./components/hitAndStay.js"></script>
    <script src="./components/checkAndReduceAce.js"></script>
    <script src="./components/shuffleDeck.js"></script>
</head>
<body>
    <?php include './footerAndHeader/header.php'; ?>
    <div class="text-center mt-5">
        <h2 class="mb-3"><strong>Điểm của máy:</strong> <span id="dealer-sum"></span></h2>
        <div id="dealer-cards" class="mb-5">
            <img id="hidden" src="./assets/mat-sau.png">
        </div>
        <h2 class="mb-3"><strong>Điểm của bạn:</strong> <span id="your-sum"></span></h2>
        <div id="your-cards"></div><br>
    </div>
    <div class="text-center mt-5">
        <input type="button" value="Kéo 1 lá" class="btn btn-primary" id="hit">
        <input type="submit" value="Dằn" class="btn btn-danger ms-3" id="stay">
    </div>
    <div class="text-center mt-5">
        <h3 id="results"></h3>
    </div>
    <div class="text-center mt-5">
        <input type="button" value="Chơi lại" class="btn btn-dark mb-5" onClick="refresh(this)">
    </div>
    <?php include './footerAndHeader/footer.php'; ?>
</body>
</html>