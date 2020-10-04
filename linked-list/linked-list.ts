interface INode<T> {
    next: number; // index
    prev: number; // index
    value: T;
}
class Node<T> implements INode<T> {
    constructor(public next: number, public prev: number, public value: T) {}
}

/* CIRCULAR LINKED LIST */
class LinkedList<T> {
    private array: Node<T>[] = [];

    get length(): number {
        return this.array.length;
    }

    push(element: T): void {
        const prev = this.length ? this.length - 1 : 0;
        const node = new Node<T>(0, prev, element);

        if (this.length) {
            this.array[this.length - 1].next = this.length;
        }

        this.array.push(node);
    }

    unshift(element: T): void {
        const next = this.length || 0;
        const prev = this.length ? this.length - 1 : 0;
        const node = new Node<T>(next, prev, element);

        this.array.forEach((el) => {
            el.prev += el.prev === 0 ? 0 : el.prev + 1;
        });

        this.array.unshift(node);
    }

    pop(): T | undefined {
        if (!this.length) return;

        /* if next element has index 0 - its last element */
        const index = this.length > 1 ? this.array.findIndex((el) => el.next === 0) : 0;
        const value = this.array[index].value;

        this.array.splice(index, 1);

        return value;
    }

    shift(): T | undefined {
        if (!this.length) return;

        /* if next element has index 1 - its first element */
        const index = this.length > 1 ? this.array.findIndex((el) => el.next === 1) : 0;
        const value = this.array[index].value;

        this.array.splice(index, 1);

        return value;
    }

    count(): number {
        return this.length;
    }

    delete(element: T): void {
        const index = this.array.findIndex((el) => el.value === element);
        const target = this.array[index];

        if (!this.length || !target) return;

        if (this.length === 1) {
            this.array.pop();

            return;
        }

        this.array.forEach((el, idx) => {
            if (idx === index) return;

            el.next = this.array[idx + 1] ? this.array[idx + 1].next : 0;
            el.prev = this.array[idx - 1] ? this.array[idx - 1].prev : this.length - 1;
        });

        this.array.splice(index, 1);
    }
}

export default LinkedList;
