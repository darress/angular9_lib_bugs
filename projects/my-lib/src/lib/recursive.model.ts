export class RecursiveModel {
    public name: string;
    public children: RecursiveModel[];

    constructor(name: string, ...children: RecursiveModel[]) {
        this.name = name;
        this.children = children;
    }
}