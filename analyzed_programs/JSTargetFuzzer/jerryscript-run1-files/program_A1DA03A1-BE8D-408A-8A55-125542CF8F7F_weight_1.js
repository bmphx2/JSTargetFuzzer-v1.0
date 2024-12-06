function f0() {
}
class C1 extends f0 {
    toString() {
        const v3 = f0 - this;
        function f4(a5) {
            const o6 = {
                9: v3,
                8: this,
                [a5]: C1,
                "c": f0,
            };
            return o6;
        }
        f4(f4);
        f4(v3);
        return f4(C1);
    }
}
new C1();
new C1();
const v12 = new C1();
function F13(a15, a16) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a16;
}
const v17 = new F13(C1, C1);
const v18 = new F13(v12, v17);
new F13(v12, v18);
new Float64Array(0);
new Uint32Array(127);
const v28 = new Uint32Array(8);
new Uint32Array(181);
let v33 = BigUint64Array;
let v34 = new v33(1);
let v35 = 253;
[v35,,v33,v34] = v28;
try { v33["abs"](181, v35, v33); } catch (e) {}
new Uint16Array(v35);
for (let i48 = 0; i48 < 2; i48++) {
    const v54 = new Function("x");
    v54.name;
}
Function();
