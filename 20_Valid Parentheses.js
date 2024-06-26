var isValid = function (s) {
    let stack = [];

    // Dictionary to map closing brackets to their corresponding opening brackets
    const bracketMap = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    // Iterate through each character in the string
    for (let char of s) {
        if (bracketMap[char]) {  // If the character is a closing bracket
            // Pop the topmost element from the stack if it is not empty, otherwise assign a dummy value
            let topElement = stack.length > 0 ? stack.pop() : '#';
            // Check if the popped element matches the corresponding opening bracket
            if (bracketMap[char] !== topElement) {
                return false;
            }
        } else {  // If the character is an opening bracket, push it onto the stack
            stack.push(char);
        }
    }

    // If the stack is empty, all opening brackets had matching closing brackets
    return stack.length === 0;
};
