class C3 {
    valueOf(a5, a6) {
        for (let v7 = 0; v7 < 32; v7++) {
            this["p" + v7] = v7;
        }
        return a6;
    }
    static #d;
    static ["p"];
    #g = 1000.0;
    static #h;
    #c;
}
new C3();
const v11 = new C3();
const v12 = new C3();
class C13 extends C3 {
    set e(a15) {
        let v16 = 10;
        for (; v16--;) {
            const o20 = {
                "maxByteLength": 2147483648,
            };
            const v22 = new SharedArrayBuffer(5, o20);
            new Int32Array(v22);
        }
    }
}
const v25 = new C13();
let v26 = new C13();
const v27 = new C13();
function F28(a30, a31, a32, a33) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = v12;
    this.g = a32;
}
new F28(v27, v25, v26, v25);
let v35 = new F28(v11, C13, v26, v25);
new F28(v26, v27, C3, v26);
let v37 = 0;
while (v37 < 2) {
    const v43 = -"length";
    --v26;
    let v45 = ++v35;
    --v45;
    Math.round(v43);
    Math.sign(v45);
    16 ** v35;
    v37++;
}
