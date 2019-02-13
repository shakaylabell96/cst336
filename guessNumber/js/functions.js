<html>
    <head>
        <title> Guess a Number </title>
        <meta charset="utf-8" />
        <script src="https://code.jquery.com/jquery.min.js"></script>
        
       
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
        
        
        <link href="css/styles.css" rel="stylesheet" type="text/css" />
    </head>
    <body>

        <div class="jumbotron">
            <h1>Guess a Number</h1>
        </div>
        
        <div id="directions" class="resultParas">
            Guess a number between 1 and 99 in seven attempts!
            
            <br><br>
            <label for="guessField">Enter a guess: </label>
            <input type="text" id="guessField" class="guessField">
            <input type="submit" value="Submit guess" class="guessSubmit">
            
            </br></br>
            <p id="guesses"></p>
            <p id="lastResult"></p>
            <p id="lowOrHi"></p>
            <button id='rest'>Reset</button>
        </div>
        <script SRC="js/functions.js"></script>

</body>

</html>
            
            
            
            
            
            
            
            
            
            
            