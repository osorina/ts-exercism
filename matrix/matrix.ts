type MatrixElement = number[][];

class Matrix {
    constructor(private matrixString: string) {}

    get rows(): MatrixElement {
        return this.matrixString.split(/\n/).map((ar: string): number[] => {
            return ar.split(' ').map(d => +d);
        });
    }

    get columns(): MatrixElement {
        const columns: MatrixElement = [];
        const column = (arr: MatrixElement, n: number) => arr.map((ar: number[]) => ar[n]);

        for (let i = 0; i < this.rows[0].length; i++) {
            columns.push(column(this.rows, i));
        }

        return columns;
    }
}

export default Matrix;
