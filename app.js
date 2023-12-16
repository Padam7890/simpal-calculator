
const display = document.getElementById("display");


function displayValue() {
    const value = display.value;
    if (value) {

        try {
            display.value =  eval(value);
            
        } catch (error) {
         alert("operetar Mistake")
        }

    }
    
}

