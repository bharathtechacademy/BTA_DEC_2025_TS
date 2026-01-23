or (let i: number = 1; i <= n; i++) {
    let line: string = "";

    // Print spaces
    for (let j: number = n; j > i; j--) {
        line += " ";
    }

    // Print numbers
    for (let j: number = 1; j <= i; j++) {
        line += j + " ";
    }

    console.log(line);
}