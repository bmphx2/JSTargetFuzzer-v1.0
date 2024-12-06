function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = f0;
    this.h = f0;
}
const v3 = new F1();
const v4 = new F1();
new F1();
let v6 = 2;
let v8 = new Uint8Array(v6);
const v10 = v8++;
v4.length = 0;
let v12;
try { v12 = v4.getSeconds(v10); } catch (e) {}
let v14 = 11;
Math.hypot(v3);
v14++;
Math.exp(v6);
Math.log1p(v3);
!v3;
v6--;
const v22 = new Float64Array(2492);
try { v12(v3, v22); } catch (e) {}
function f28() {
    return 4294967295;
}
new BigInt64Array(5);
const v33 = new BigUint64Array(BigUint64Array, BigUint64Array);
v33.copyWithin();
const v35 = new Uint16Array(Uint16Array, Uint16Array);
const o40 = {
    m(a37, a38, a39) {
        return this;
    },
};
Reflect.set(o40.m, v35);
