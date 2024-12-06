let v2 = -1;
let v3 = -5;
let v4 = -4096;
function f6(a7, a8) {
    const o17 = {
        "g": a7,
        toString(a10, a11, a12, a13) {
            for (let v14 = 0; v14 < 32; v14++) {
                this["p" + v14] = v14;
            }
            return a12;
        },
        "a": a7,
        [a7]: 4,
        __proto__: a7,
    };
    return o17;
}
const v18 = f6(4, v2);
const v19 = f6(v2, 4294967295);
({"a":v2,"g":v4,} = v19);
const v23 = 2147483649 % 9;
Math.pow(9, v23);
let v25 = 9 + v23;
9 + v25;
--v25;
Math.max(2147483649);
const v29 = f6(v4, v3);
function F30(a32, a33, a34, a35) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a35;
}
let {"a":v36,...v37} = v4;
v37.toString = f6;
new F30(4, 2147483649, v29, v3 |= 4);
new F30(v3, v3, v19, v2);
new F30(4, 4294967295, v18, 4294967295);
const v45 = new Date();
v45.setMonth();
