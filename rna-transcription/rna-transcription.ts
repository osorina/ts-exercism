interface DnaMap {
    [id: string]: string;
};

class Transcriptor {
    toRna(str: string) {
        const dnaMap: DnaMap = {
            G: 'C',
            C: 'G',
            T: 'A',
            A: 'U'
        };

        let rna: string = '';

        [...str].forEach((char: string) => {
            if (!Object.keys(dnaMap).includes(char)) {
                throw 'Invalid input DNA.';
            };

            rna += dnaMap[char];
        });

        return rna;
    }
}

export default Transcriptor
