const v0 = [];
function f1() {
    return v0;
}
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a8;
}
const v9 = new F5("4", "4294967297");
new F5("4", "4294967297");
new F5("4294967297", "4294967297");
new BigInt64Array(256);
const v26 = new Uint32Array(227);
new Uint16Array(129);
function F30(a32, a33) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a33;
}
new F30(256, 129);
new F30(v26, 227);
new F30(v26, 129);
function f37() {
}
new Uint8Array(227);
const v50 = [-8,4294967295,148900462];
let v51 = RegExp.bind("2147483647", v50);
v9[v9.d] = v50;
Object.defineProperty(v9, 1, { enumerable: true, get: f37, set: f37 });
const v55 = Symbol.iterator;
const o64 = {
    [v55]() {
        let v57 = 10;
        const o63 = {
            next() {
                v57--;
                const v61 = v57 == 0;
                const o62 = {
                    "done": v61,
                    "value": v57,
                };
                return o62;
            },
        };
        return o63;
    },
};
new Int32Array(v51);
v51 /= v51;
new WeakSet();
new BigInt64Array(2);
([5]).reverse();
