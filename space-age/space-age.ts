enum PCoefficients {
    Mercury = 0.2408467,
    Venus = 0.61519726,
    Mars = 1.8808158,
    Jupiter = 11.862615,
    Saturn = 29.447498,
    Uranus = 84.016846,
    Neptune = 164.79132
}

export default class SpaceAge {
    static EATH_YEAR_SECONDS = 31557600;

    constructor(public seconds: number = 0) {}

    protected calc(seconds: number, coefficient?: number): number {
        let eathValue: number = seconds / SpaceAge.EATH_YEAR_SECONDS;

        if (coefficient) {
            eathValue = eathValue / coefficient;
        }

        return Number(eathValue.toFixed(2));
    }

    onEarth(): number {
        return this.calc(this.seconds);
    }

    onMercury(): number {
        return this.calc(this.seconds, PCoefficients.Mercury);
    }

    onVenus(): number {
        return this.calc(this.seconds, PCoefficients.Venus);
    }

    onMars(): number {
        return this.calc(this.seconds, PCoefficients.Mars);
    }

    onJupiter(): number {
        return this.calc(this.seconds, PCoefficients.Jupiter);
    }

    onSaturn(): number {
        return this.calc(this.seconds, PCoefficients.Saturn);
    }

    onUranus(): number {
        return this.calc(this.seconds, PCoefficients.Uranus);
    }

    onNeptune(): number {
        return this.calc(this.seconds, PCoefficients.Neptune);
    }
}
