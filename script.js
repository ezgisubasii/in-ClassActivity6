var levelNum = 1; // Start from level 1
var clickNum = 1;
var timeoutDuration = 500; // Initial timeout duration

function clickme(element) {
    if (clickNum < 3) {
        marginTop = Math.random() * 300 + "px";
        marginLeft = Math.random() * 300 + "px";
        element.style.marginTop = marginTop;
        element.style.marginLeft = marginLeft;
        clickNum++;
    } else {
        // Level up
        levelNum++;
        timeoutDuration -= 100; // Decrease timeout duration
        clickNum = 0;
        if (levelNum == 6) {
            timeoutDuration = 0; // Set timeout to 0 for level 6
        }
        alert("Level " + (levelNum ) + " completed!");
        const myTimeout = setTimeout(function() {
            clickme(element);
        }, timeoutDuration);
        console.log(timeoutDuration)

        
    }
    
}