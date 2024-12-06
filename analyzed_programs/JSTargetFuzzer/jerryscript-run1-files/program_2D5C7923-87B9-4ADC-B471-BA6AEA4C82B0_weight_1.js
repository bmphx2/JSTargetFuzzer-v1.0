function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = -256;
    this.g = -256;
}
const v3 = new F0();
const v4 = new F0();
new F0();
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a8;
}
new F6(v4, v3);
let v11 = new F6(v4, v4);
const v12 = new F6(v3, v4);
new Set();
const v15 = [-2.0,-1.601440531771923e+308,-1.0,-3.077642219695236e+307,1.0];
with (v15) {
    for (let [i25, i26] = (() => {
            try {
                v11 ^= v12;
            } catch(e18) {
                try { v12.getOwnPropertyDescriptor(v3, 10, v4, Set); } catch (e) {}
            } finally {
                const v22 = 292718186 || 0;
                v22 << 292718186;
                Math.asinh(v22);
            }
            return [0, 10];
        })();
        i25 < i26;
        (() => {
            i25++;
            function f31(a32, a33, a34, a35) {
                return v15;
            }
        })()) {
    }
}
