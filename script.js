function respondToClick(){
	
    let message = prompt("Enter the message to verify:");
    let result = "";
    
    if ((message.includes("FR") && message.includes("AI")) || message.includes("FR")) {
        result = "The message is legitimate.";
    } else if (message.includes("AI")) {
        result = "The message is tampered with.";
    } else if (message.includes("aI") || message.includes("Ai")) {
        result = "The message is tampered.";
    } else {
        result = "The message is yet to be encoded.";
    }
    
    document.getElementById("result").innerText = result;
}
