function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = f0;
    this.f = f0;
    this.b = f0;
}
const v3 = new F1();
const v4 = new F1();
const v5 = new F1();
for (let i9 = 0; i9 < 2; i9++) {
    function F15(a17, a18, a19, a20) {
        if (!new.target) { throw 'must be called with new'; }
        this.e = a20;
        this.a = f0;
    }
    new F15(v3, i9, v4, v3);
    const v22 = new F15(i9, 12, 12, v5);
    new F15(v22, 12, v3, v4);
}
new Uint32Array(9);
let v33 = 0;
while (v33 < 0) {
    [];
    v33++;
}
new BigInt64Array(2836);
v4[1073741825] **= -9;
typeof v3 === "boolean";
new Float32Array(4);
let {"b":v46,"f":v47,} = v4;
v5.f = Float32Array;
try {
    let v53 = SyntaxError(-65537n);
    v53 -= v53.cause;
} catch(e55) {
}
new Uint8ClampedArray([4.0,0.7137662539774001,800.1465636629484]);
new Int8Array(107);
