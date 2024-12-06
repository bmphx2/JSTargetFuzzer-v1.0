function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 1788009467;
    this.e = 1788009467;
    this.g = 1788009467;
}
new F0();
const v4 = new F0();
const v5 = new F0();
new WeakMap();
const v9 = new WeakSet();
function F13(a15, a16, a17, a18) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a15;
}
new F13("a", "boolean", v4, v9);
let v20 = new F13("symbol", "symbol", v5, v5);
new F13("a", "symbol", v20, v5);
class C22 {
    #c;
    static ["symbol"];
    ["boolean"];
}
new C22();
new C22();
const v25 = new C22();
v20 ||= v25;
const v27 = Symbol.iterator;
const o36 = {
    [v27]() {
        let v29 = 10;
        const o35 = {
            next() {
                v29--;
                const v33 = v29 == 0;
                const o34 = {
                    "done": v33,
                    "value": v29,
                };
                return o34;
            },
        };
        return o35;
    },
};
