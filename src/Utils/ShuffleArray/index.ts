function shuffleArray(input: any[]): any[] {
    const inputCopy = input.slice();
    const output: any[] = [];
    for (let i = 0; i < input.length; i++) {
        const nextIndex = Math.floor(Math.random() * inputCopy.length);
        output.push(inputCopy[nextIndex]);
        inputCopy.splice(nextIndex, 1);
    }
    return output;
}

export default shuffleArray;
