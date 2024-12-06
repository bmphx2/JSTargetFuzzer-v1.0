function f0() {
    const o16 = {
        o(a5) {
            for (const v6 of -5.0) {
                continue;
            }
            this[Symbol.iterator] = a5;
            const o11 = {
                "maxByteLength": 2843,
            };
            const v13 = new ArrayBuffer(2843, o11);
            new Float64Array(v13);
            return a5;
        },
    };
    return o16;
}
const v17 = f0();
const v18 = f0();
let v19 = f0();
v19 = v17;
function F29(a31, a32, a33) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a31;
    this.g = a32;
}
const v34 = new F29(v17, -1384823881, v17);
class C35 extends F29 {
    6;
}
new C35();
new C35();
new C35();
const v39 = new F29(v18, v34, v19);
new F29(v39, v39, v19);
let v42 = 0;
while (v42 < 10) {
    v42++;
}
Array(Array).concat();
