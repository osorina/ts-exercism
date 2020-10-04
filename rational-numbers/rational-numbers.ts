interface IRational {
    numerator: number;
    denominator: number;
    set(numerator: number, denominator: number): void;
    add(rational: IRational): IRational;
    sub(rational: IRational): IRational;
    mul(rational: IRational): IRational;
    div(rational: IRational): IRational;
    exprational(n: number): IRational;
    expreal(n: number): number;
    reduce(): IRational;
    abs(): IRational;
}

class Rational implements IRational {
    denominator: number = 1;
    numerator: number = 1;

    constructor(numerator: number, denominator: number) {
        this.set(numerator, denominator);
    }

    set(numerator: number, denominator: number): void {
        this.numerator = numerator;
        this.denominator = denominator;

        this.reduce();
    }

    add(rational: IRational): IRational {
        const { numerator: a1, denominator: b1 } = this;
        const { numerator: a2, denominator: b2 } = rational;

        this.set(a1 * b2 + a2 * b1, b1 * b2);

        return this;
    }

    sub(rational: IRational): IRational {
        const { numerator: a1, denominator: b1 } = this;
        const { numerator: a2, denominator: b2 } = rational;

        this.set(a1 * b2 - a2 * b1, b1 * b2);

        return this;
    }

    mul(rational: IRational): IRational {
        const { numerator: a1, denominator: b1 } = this;
        const { numerator: a2, denominator: b2 } = rational;

        this.set(a1 * a2, b1 * b2);

        return this;
    }

    /* TODO: add check to zero values*/
    div(rational: IRational): IRational {
        const { numerator: a1, denominator: b1 } = this;
        const { numerator: a2, denominator: b2 } = rational;

        this.set(a1 * b2, a2 * b1);

        return this;
    }

    abs(): IRational {
        const { numerator: a, denominator: b } = this;

        this.set(Math.abs(a), Math.abs(b));

        return this;
    }

    exprational(n: number): IRational {
        const { numerator: a, denominator: b } = this;

        if (n > 0) {
            this.set(a ** n, b ** n);
        } else {
            this.set(b ** n, a ** n);
        }

        return this;
    }

    expreal(n: number): number {
        const { numerator: a, denominator: b } = this;

        const root = (p: number, q: number): number => Math.pow(p, 1 / q);

        return root(n ** a, b);
    }

    reduce(): IRational {
        /* revert values if denominator is negative */
        let gcd = Math.sign(this.denominator);

        ((
            numerator: number = Math.abs(this.numerator),
            denominator: number = Math.abs(this.denominator),
        ) => {
            if (denominator % numerator === 0) {
                gcd *= numerator;

                return;
            }

            if (numerator % denominator === 0) {
                gcd *= denominator;

                return;
            }

            /* TODO: get numbers for the division dynamically */
            const check = [2, 3, 5, 7, 11, 13, 17, 19, 23];

            for (let div = 0; div < check.length; div++) {
                const nd = numerator === 0 ? 1 : getDividerDegree(numerator, check[div]); // numerator div degree to compare
                const dd = getDividerDegree(denominator, check[div]); // denominator div degree to compare

                if (nd && dd) {
                    gcd *= check[div] * (nd > dd ? dd : nd);
                }
            }

            /* getDividerDegree - how many times can we divide a number by the same number */
            function getDividerDegree(number: number = 1, divider: number = 1): number {
                let degree: number = 0;
                let remainder: number = number;

                const devide = (): number => {
                    while (Math.abs(remainder) > divider && Math.abs(remainder % divider) === 0) {
                        remainder = remainder / divider;
                        degree++;

                        devide();
                    }

                    return degree;
                };

                return devide();
            }
        })();

        this.numerator /= gcd;
        this.denominator /= gcd;

        return this;
    }
}

export default Rational;
