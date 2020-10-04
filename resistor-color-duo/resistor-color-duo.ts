enum Colors {
    black,
    brown,
    red,
    orange,
    yellow,
    green,
    blue,
    violet,
    grey,
    white,
}

type Color = keyof typeof Colors;

export class ResistorColor {
    private colors: string[];

    constructor(colors: Color[]) {
        if(colors.length < 2) {
            throw new Error("At least two colors need to be present")
        }

        this.colors = colors.slice(0, 2);
    }
    value = (): number => {
        let arr: string[] = [];

        this.colors.forEach((c: string) => {
            arr.push(Colors[c as any]);
        })

        return Number(arr.join(''));
    };
}
