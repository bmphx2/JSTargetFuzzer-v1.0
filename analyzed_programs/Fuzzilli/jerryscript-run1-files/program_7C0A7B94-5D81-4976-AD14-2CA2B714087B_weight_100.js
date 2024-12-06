new WeakMap();
function F2(a4) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a4;
    this.h = a4;
    this.f = a4;
}
const v5 = new F2(F2);
new F2(v5);
const v7 = new F2(v5);
function f17(a18, a19, a20, a21) {
    a21.f = a18;
    return v7;
}
const v22 = f17(512n, "G0", 512n, v5);
const v23 = ("G0")[WeakMap];
v23[-1] = F2;
v22[v23] = "G0";
const v25 = Symbol.iterator;
const o34 = {
    [v25]() {
        let v27 = 10;
        const o33 = {
            next() {
                v27--;
                const v31 = v27 == 0;
                const o32 = {
                    "done": v31,
                    "value": v27,
                };
                return o32;
            },
        };
        return o33;
    },
};
