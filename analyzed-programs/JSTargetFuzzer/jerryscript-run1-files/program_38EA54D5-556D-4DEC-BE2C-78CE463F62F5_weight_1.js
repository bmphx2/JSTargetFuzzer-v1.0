function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a5;
    this.g = 1e-15;
}
new F3(1000.0, 1000.0);
new F3(1000.0, 1000.0);
new F3(1000.0, 1e-15);
new Float64Array(12);
try {
const t0 = 257;
t0(F3);
} catch (e) {}
const v16 = Symbol.iterator;
const o25 = {
    [v16]() {
        let v18 = 10;
        const o24 = {
            next() {
                v18--;
                const v22 = v18 == 0;
                const o23 = {
                    "done": v22,
                    "value": v18,
                };
                return o23;
            },
        };
        return o24;
    },
};
new BigUint64Array(257);
new Uint16Array(44);
function f31() {
}
new Uint8Array(0);
let v45 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
new Int32Array(127);
v45 /= f31;
new WeakSet();
new BigInt64Array(2);
let v60 = 15;
const v62 = [5];
new Uint8Array(RegExp, 16, 1073741824);
function f64() {
    return BigUint64Array;
}
v60 += 257;
v62.reverse();
