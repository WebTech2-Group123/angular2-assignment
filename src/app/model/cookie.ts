export class Cookie {
    constructor(
        public name: string,
        public description: string,
        public difficulty: number,
        public url: string,
        public ingredients?: string[]
    ) {}
}