class BinarySearch {
    constructor(public input: number[]) {}

    get array(): number[] | undefined {
        if (this.isSorted(this.input)) {
            return this.input;
        }
    }

    isSorted(input: number[]): boolean {
        return input.every((el, i) => i === 0 || !input[i + 1] || el <= input[i + 1]);
    }

    indexOf(element: number): number | undefined {
        if (!this.array) return;

        const center = Math.floor(this.array.length / 2);

        if (element === this.array[center]) return center;

        return this.array
            .splice(element > this.array[center] ? center : 0, center)
            .findIndex((el) => el === element);
    }
}

export default BinarySearch;
