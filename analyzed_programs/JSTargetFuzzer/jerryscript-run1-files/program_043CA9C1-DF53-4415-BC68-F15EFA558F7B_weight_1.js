function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const t2 = -9007199254740990;
    t2.f = -9007199254740990;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
class C12 extends F0 {
    constructor(a14, a15, a16, a17) {
        super();
        try { this(939.4405864812986, a15, 2.2250738585072014e-308); } catch (e) {}
        v3.length = 2;
        new Uint8ClampedArray(30);
        new Int8Array(64);
        new BigUint64Array(9);
    }
}
const v29 = new C12(1000000000000.0, v4, v5, v4);
let v31 = -16;
const v34 = -208823.79901807255 * (v4 >>> v31);
++v31;
!v34;
const v37 = new C12(0.11814852528031772, v4, v29, v4);
new C12(2.2250738585072014e-308, v37, v29, v37);
function f39() {
}
const t27 = "W";
t27.__proto__ = C12;
for (let v45 = 0; v45 < 32; v45++) {
    const t30 = "W";
    t30["p" + v45] = v45;
}
const v53 = ("symbol")[5];
v53 < v53;
const t34 = 2.0;
t34[257] = "symbol";
f39(..."boolean", ..."unscopables", ..."symbol", "W");
new Uint8ClampedArray(9);
new Int8Array(2);
new Float32Array(15);
