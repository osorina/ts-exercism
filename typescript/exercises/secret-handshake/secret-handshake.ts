enum Handshakes {
    'wink' = 1,
    'double blink' = 10,
    'close your eyes' = 100,
    'jump' = 1000,
    'reverse' = 10000,
}

class HandShake {
    constructor(public decimal: number) {}

    get binary(): string {
        const bin = [];

        let temp = this.decimal;

        do {
            bin.push(Math.floor(temp % 2));
            temp /= 2;
        } while (temp > 0.99);

        return bin.join('');
    }

    get reversedBinary(): string {
        return this.binary.split('').reverse().join('');
    }

    commands(): string[] {
        let code = parseInt(this.reversedBinary);
        let commands = [Handshakes[code]];

        if (code === Handshakes.reverse || code === 0) return [];

        const values = Object.keys(Handshakes)
            .filter((n) => !isNaN(+n) && code >= +n)
            .map((n) => parseInt(n));

        if (!values.includes(code)) {
            let isReversed = true;

            commands = [];

            [...values].reverse().forEach((value) => {
                if (code < value) return;

                code = code % value;

                if (value === Handshakes.reverse) {
                    isReversed = false;

                    return;
                }

                commands.push(Handshakes[value]);
            });

            if (isReversed) {
                commands.reverse();
            }
        }

        return commands;
    }
}

export default HandShake;
