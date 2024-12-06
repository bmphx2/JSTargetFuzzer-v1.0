function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 2147483647;
    this.e = 2147483647;
    this.g = 2147483647;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0(v4, v4, v3);
[v5,F0,v4,v5,v3,v5,F0];
const v7 = [F0,v3,v4];
[v3,v7,v7,F0,v4];
-Infinity;
if (-3.1488150178832637 >= -3.1488150178832637) {
    const v15 = Symbol.iterator;
    const o24 = {
        [v15]() {
            let v17 = 10;
            const o23 = {
                next() {
                    v17--;
                    const v21 = v17 == 0;
                    const o22 = {
                        "done": v21,
                        "value": v17,
                    };
                    return o22;
                },
            };
            return o23;
        },
    };
} else {
    v4.c >>= -2147483647;
}
for (let i29 = 0; i29 < 9; i29++) {
    new Uint8Array(3335);
    new BigUint64Array(1991);
    new Uint8ClampedArray(16);
}
let v44 = -9007199254740990n;
v44 -= 9223372036854775807n;
v44--;
class C46 extends F0 {
    2147483648;
}
new C46();
new C46();
new C46();
