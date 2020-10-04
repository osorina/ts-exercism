export default class Pangram {
    constructor(public sentence: string = '') {}

    isPangram(): boolean {
        if (this.sentence.length) {
            const characters: string[] = this.sentence.toLowerCase().replace(/[^a-z]+/g, '').split('');
            const noDuplicates: { size: number } = new Set(characters);

            const isPangram: boolean = noDuplicates.size === 26;

            return isPangram;
        }

        return false;
    }
}
