interface IClock {
    hours: number;
    minutes?: number;
    minus(minutes: number): IClock;
    plus(minutes: number): IClock;
    equals(clock: IClock): boolean;
    setTime(minutes: number, hours: number): void;
    toString(): string;
}

class Clock implements IClock {
    public hours: number = 0;
    public minutes: number = 0;

    constructor(hours: number = 0, minutes: number = 0) {
        this.setTime(minutes, hours);
    }

    minus(minutes: number = 0): IClock {
        this.setTime(this.minutes - minutes);

        return this;
    }

    plus(minutes: number = 0): IClock {
        this.setTime(this.minutes + minutes);

        return this;
    }

    equals(ClockToCompare: IClock): boolean {
        return this.toString() === ClockToCompare.toString();
    }

    setTime(minutes: number = this.minutes, hours: number = this.hours): void {
        if (minutes / 60 >= 1 || minutes < 0) {
            hours += Math.floor(minutes / 60);
            minutes = minutes % 60;

            if (minutes < 0) {
                minutes += 60;
            }
        }

        if (hours / 24 >= 1 || hours < 0) {
            hours = hours % 24;

            if (hours < 0) {
                hours += 24;
            }
        }

        this.minutes = minutes;
        this.hours = hours;
    }

    toString(): string {
        return `${this.hours}:${this.minutes}`.replace(/\b(\d)(?!\d)/g, '0$1');
    }
}

export default Clock;
