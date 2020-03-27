import shuffleArray from "./index";

describe('ShuffleArray', () => {
    it('shuffles array', () => {
        const inputArray = [1, 2, 3];
        const result = shuffleArray(inputArray);
        expect(result).toHaveLength(3);
        expect(result).not.toEqual(inputArray);
    });
});
