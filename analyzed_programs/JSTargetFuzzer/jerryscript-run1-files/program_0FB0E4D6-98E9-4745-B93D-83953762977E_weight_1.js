const v1 = new WeakMap();
class C2 {
    static valueOf(a4, a5) {
        try { new a4(); } catch (e) {}
        function F7(a9, a10, a11, a12) {
            if (!new.target) { throw 'must be called with new'; }
            this.a = a10;
            this.f = a10;
        }
        const v13 = new F7(v1, F7, this, this);
        const v14 = new F7(WeakMap, v1, a5, WeakMap);
        new F7(v13, v14, v14, a4);
        return a5;
    }
}
new C2();
new C2();
new C2();
C2 %= C2--;
function f20() {
    return WeakMap;
}
new Uint8ClampedArray(351);
new Uint8Array(373);
new Uint32Array(257);
const v32 = new BigInt64Array();
v32.toString(Date);
