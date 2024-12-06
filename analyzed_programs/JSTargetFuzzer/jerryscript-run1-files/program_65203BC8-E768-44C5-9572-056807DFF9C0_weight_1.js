function f3() {
    return 1073741824n;
}
const v6 = new BigInt64Array(BigInt64Array, BigInt64Array, BigInt64Array);
v6.fill(-3);
new Float64Array(4096);
new Object(100);
new Uint8ClampedArray(255);
function F17() {
    if (!new.target) { throw 'must be called with new'; }
}
const v19 = new F17();
const v23 = new Uint16Array(Uint16Array, Uint16Array);
const o28 = {
    m(a25, a26, a27) {
        return this;
    },
};
Reflect.set(o28.m, v23);
const v32 = new Uint8ClampedArray();
const v33 = v32.__proto__;
let v34;
try { v34 = v19.o(); } catch (e) {}
try { RegExp.call(v34, v19, v33); } catch (e) {}
