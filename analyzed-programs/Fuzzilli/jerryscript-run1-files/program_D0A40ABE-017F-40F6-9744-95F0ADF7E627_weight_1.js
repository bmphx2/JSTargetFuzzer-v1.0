function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -7;
    this.b = a8;
}
const v10 = new F6(3, -65536);
const v11 = new F6(2, -65536);
new F6(3, F6);
const o13 = {
};
const v15 = new Proxy(v10, o13);
delete v11[v15];
const v18 = Symbol.iterator;
const o27 = {
    [v18]() {
        let v20 = 10;
        const o26 = {
            next() {
                v20--;
                const v24 = v20 == 0;
                const o25 = {
                    "done": v24,
                    "value": v20,
                };
                return o25;
            },
        };
        return o26;
    },
};
