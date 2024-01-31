var count = 0;


try {
    document.querySelector("#submit").addEventListener("click", ()=>{
        var email = document.querySelector("#email").value;

        var name= document.querySelector("#name").value;
        var message = document.querySelector("#message").value;

        if(name !== "" && email !== "" && message !== ""){
                var output = `Name: ${name}\n`;
            output += `Email: ${email}\n`;
            output += `Message: ${message}\n`;

            alert(output);
        }
    });
}
catch (error) {
    
}

try {
    document.querySelector("#lower-count").addEventListener("click", ()=>{
        document.querySelector("#counter").textContent = '' + --count;
        if (count === 0) {
            document.querySelector("#counter").classList.remove("white");
            document.querySelector("#counter").classList.remove("red");

        }
        else if (count < 0) {
            document.querySelector("#counter").classList.remove("white");
            document.querySelector("#counter").classList.add("red");
        }
        else {
            document.querySelector("#counter").classList.remove("red");
            document.querySelector("#counter").classList.add("white");
        }
    });
}
catch (error) {
    
}

try {
    document.querySelector("#higher-count").addEventListener("click", ()=>{
        document.querySelector("#counter").textContent = '' + ++count;
        
        if (count === 0) {
            document.querySelector("#counter").classList.remove("white");
            document.querySelector("#counter").classList.remove("red");

        }
        else if (count < 0) {
            document.querySelector("#counter").classList.remove("white");
            document.querySelector("#counter").classList.add("red");
        }
        else {
            document.querySelector("#counter").classList.remove("red");
            document.querySelector("#counter").classList.add("white");
        }
    });
}
catch (error) {
    
}

try {
    document.querySelector("#name").addEventListener("input", () => {
        const input1 = document.querySelector("#name").value;
        const input2 = document.querySelector("#email").value;
        console.log(input1 + input2);
        if (input1 !== '' && input2 !== '') {
            document.querySelector("#submit").disabled = false;
        }
        else {
            document.querySelector("#submit").disabled = true;
        }
    });

    document.querySelector("#email").addEventListener("input", () => {
        const input1 = document.querySelector("#name").value;
        const input2 = document.querySelector("#email").value;
        console.log(input1 + input2);
        if (input1 !== '' && input2 !== '') {
            document.querySelector("#submit").disabled = false;
            document.querySelector("#submit").classList.toggle("green");
        }
        else {
            document.querySelector("#submit").disabled = true;
        document.querySelector("#submit").classList.toggle("green");
        }
    });
}
catch (error) {
    
}
