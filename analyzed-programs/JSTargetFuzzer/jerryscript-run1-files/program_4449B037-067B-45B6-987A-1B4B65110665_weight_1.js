function f0() {
}
function f1() {
    return f0;
}
let v2 = "41887";
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a8;
    this.b = "toString";
    this.d = a7;
}
new F5("symbol", "toString");
new F5("symbol", "toString");
v2 = "toString";
+f0;
new F5("toString", v2);
const v20 = Symbol.iterator;
const o29 = {
    [v20]() {
        let v22 = 10;
        const o28 = {
            next() {
                v22--;
                const v26 = v22 == 0;
                const o27 = {
                    "done": v26,
                    "value": v22,
                };
                return o27;
            },
        };
        return o28;
    },
};
function f33(a34, a35) {
    a35();
    return a35;
}
new Promise(f33);
