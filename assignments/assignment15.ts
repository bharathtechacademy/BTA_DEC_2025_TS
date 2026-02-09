
function longestValidParentheses(s: string): number {

    // Array used like a stack to store indexes of '(' characters
    const openIndex: number[] = new Array(s.length);

    // Points to the top index of the stack
    // -1 means the stack is currently empty
    let top: number = -1;

    // Stores the index of the last invalid ')'
    // -1 means no invalid ')' has occurred yet
    let lastInvalid: number = -1;

    // Stores the maximum valid parentheses length found so far
    let maxLen: number = 0;

    // Loop through each character in the string
    for (let i = 0; i < s.length; i++) {

        // If current character is '('
        if (s[i] === '(') {

            // Push its index onto the stack
            top++;
            openIndex[top] = i;

        } else { // Current character is ')'

            // If there is an unmatched '(' available
            if (top >= 0) {

                // Pop the matching '(' from stack
                top--;

                let start: number;

                // If stack still has '(' after popping
                if (top >= 0) {
                    // Use previous unmatched '(' index
                    start = openIndex[top];
                } else {
                    // Otherwise use last invalid ')'
                    start = lastInvalid;
                }

                // Calculate current valid substring length
                const currentLen: number = i - start;

                // Update maximum length if needed
                if (currentLen > maxLen) {
                    maxLen = currentLen;
                }

            } else {
                // No '(' available to match ')'
                // Mark this position as invalid
                lastInvalid = i;
            }
        }
    }

    // Return the longest valid parentheses length
    return maxLen;
}

// Test
console.log(longestValidParentheses("(()())")); // 6
