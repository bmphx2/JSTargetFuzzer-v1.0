class C3 {
    static d;
    get c() {
        class C5 {
            static #h = this;
            [this];
        }
        new C5();
        new C5();
        new C5();
        return this;
    }
    static #f;
}
new C3();
new C3();
const v11 = new C3();
const v21 = `
    v11[1073741824];
    ("clz32").normalize("NFKD");
`;
eval(v21);
