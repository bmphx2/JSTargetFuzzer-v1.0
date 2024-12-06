function f0() {
}
new Uint8Array(5);
new BigUint64Array(3010);
const v9 = new Int8Array(9);
const v11 = new WeakSet();
const v12 = [v11,5,3010,f0];
[v9,v12,5,[v12,v12,v12]];
function F15() {
    if (!new.target) { throw 'must be called with new'; }
}
const v17 = new F15();
with (v17) {
    class C18 {
        m(a20, a21, a22) {
            for (let i25 = 0, i26 = 10;
                i25 < i26;
                (() => {
                    const o30 = {
                    };
                })()) {
            }
        }
    }
}
