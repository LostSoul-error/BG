function BG() {
    var p1 = document.getElementById('input1').value;
    var p2 = document.getElementById('input2').value;
    

    var m = "";
    var f = "";
    var a1 = "AA";
    var a2 = "AO";
    var b1 = "BB";
    var b2 = "BO";
    var o = "OO";
    var ab = "AB";
    var combinations = new Array(16);
    var t = 16;
    switch (p1) {
        case "A":
            f = a1;
            break;
        case "B":
            f = b1;
            break;
        case "O":
            f = o;
            break;
        case "AB":
            f = ab;
            break;
        default:
            alert("Not Possible");
            process.exit(0);
    }
    switch (p2) {
        case "A":
            m = a1;
            break;
        case "B":
            m = b1;
            break;
        case "O":
            m = o;
            break;
        case "AB":
            m = ab;
            break;
        default:
            alert("Not Possible");
            process.exit(0);
    }
    
    combinations[0] = "" + f.charAt(0) + m.charAt(0);
    combinations[1] = "" + f.charAt(0) + m.charAt(1);
    combinations[2] = "" + f.charAt(1) + m.charAt(0);
    combinations[3] = "" + f.charAt(1) + m.charAt(1);
    
    if ((p1 == "A" && p2 == "B" )||( p2 == "A" || p1 == "B")){
        switch (p1) {
            case "A":
                f = a2;
                break;
            case "B":
                f = b2;
                break;
        }
        switch (p2) {
            case "A":
                m = a2;
                break;
            case "B":
                m = b2;
                break;
        }
        combinations[4] = "" + f.charAt(0) + m.charAt(0);
        combinations[5] = "" + f.charAt(0) + m.charAt(1);
        combinations[6] = "" + f.charAt(1) + m.charAt(0);
        combinations[7] = "" + f.charAt(1) + m.charAt(1);
        switch (p1) {
            case "A":
                f = a1;
                break;
            case "B":
                f = b1;
                break;
            }
        switch (p2) {
            case "A":
                m = a2;
                break;
            case "B":
                m = b2;
                break;
        }
        combinations[8] = "" + f.charAt(0) + m.charAt(0);
        combinations[9] = "" + f.charAt(0) + m.charAt(1);
        combinations[10] = "" + f.charAt(1) + m.charAt(0);
        combinations[11] = "" + f.charAt(1) + m.charAt(1);
        switch (p1) {
            case "A":
                f = a2;
                break;
            case "B":
                f = b2;
                break;
        }
        switch (p2) {
            case "A":
                m = a1;
                break;
            case "B":
                m = b1;
                break;
        }
        combinations[12] = "" + f.charAt(0) + m.charAt(0);
        combinations[13] = "" + f.charAt(0) + m.charAt(1);
        combinations[14] = "" + f.charAt(1) + m.charAt(0);
        combinations[15] = "" + f.charAt(1) + m.charAt(1);
    } 
    else if ((p1 == "A" && p2 == "AB" )||( p1 == "AB" && p2 == "A")||(p1 == "A" && p2 == "O" )||( p1 == "O" && p2 == "A")||(p1 == "B" && p2 == "AB" )||( p1 == "AB" && p2 == "B")||(p1 == "B" && p2 == "O" )||( p1 == "O" && p2 == "B")){
        console.log("Hi");
        t = 8;
        switch (p1) {
            case "A":
                f = a2;
                
                break;
            case "B":
                f = b2;
                break;
            case "AB":
                f = ab;
                break;
            case "O":
                f = o;
                break;
        }
        switch (p2) {
            case "A":
                m = a2;
                break;
            case "B":
                m = b2;
                break;
            case "AB":
                m = ab;
                
                break;
            case "O":
                m = o;
                break;
            
        }
        combinations[4] = "" + f.charAt(0) + m.charAt(0);
        combinations[5] = "" + f.charAt(0) + m.charAt(1);
        combinations[6] = "" + f.charAt(1) + m.charAt(0);
        combinations[7] = "" + f.charAt(1) + m.charAt(1);
        for (var i = 8; i < combinations.length; i++) combinations[i] = "";
    }
    else{
        for (var i = 4; i < combinations.length; i++) combinations[i] = "";
    }
    for (var i = 0; i < combinations.length; i++) {
        if (combinations[i] == "OB")    combinations[i] = "BO"
        if (combinations[i] == "OA")    combinations[i] = "AO"
        if (combinations[i] == "BA")    combinations[i] = "AB"

        /*var arranged = "";
        var arr = combinations[i].split("");
        for (var i = 0; i < arr.length - 1; i++) {
            for (var j = 0; j < arr.length - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    var temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        for (var i = 0; i < arr.length; i++) {
            arranged = arranged + arr[i];
        }

        combinations[i] = arranged;*/
    }
    var A = 0, B = 0, O = 0, AB = 0;
    
    
    if (p1 == "O" && p2 == "O" || p1 == "AB" && p2 == "AB"||p1 == "O" && p2 == "AB" || p1 == "AB" && p2 == "O") {
        t = 4;
    }
    //for (var i = 0; i < combinations.length; i++) console.log(combinations[i]);
    for (var i = 0; i < combinations.length; i++) {
        if (combinations[i] === a1 || combinations[i] === a2) A++;
        else if (combinations[i] === b1 || combinations[i] === b2) B++;
        else if (combinations[i] === o) O++;
        else if (combinations[i] === ab) AB++;
    }
    output = "A - " + (A / t) * 100 + "%\t"+"B - " + (B / t) * 100 + "%\t"+"O - " + (O / t) * 100 + "%\t"+"AB - " + (AB / t) * 100 + "%\t";
    


    
    
    document.getElementById('output').innerHTML = output;
    document.getElementById('output').style.display = "block";


}

function clearFields() {
    document.getElementById('input1').value = '';
    document.getElementById('input2').value = '';
    document.getElementById('output').innerHTML = '';
    document.getElementById('output').style.display = "none";
}
function changeHeartColor() {
    var heart = document.querySelector('.heart');
    heart.style.color = 'pink';
}
window.onload = function() {
   
    if (!localStorage.getItem('popupDisplayed')) {
        
        document.getElementById('infoPopup').style.display = 'block';
        
        
        localStorage.setItem('popupDisplayed', true);
    }
}

function closePopup() {
    document.getElementById('infoPopup').style.display = 'none';
}

