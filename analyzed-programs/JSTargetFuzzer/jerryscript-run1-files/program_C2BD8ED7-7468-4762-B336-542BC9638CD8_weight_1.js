const v2 = new Float32Array(1);
const v5 = new Int8Array(7);
new Uint8ClampedArray(10);
function F10(a12, a13, a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    a12.__proto__ = this;
}
new F10(Uint16Array);
Uint16Array > Uint8Array;
[[v2,Int8Array,7],v5];
const v22 = Symbol.iterator;
const o31 = {
    [v22]() {
        let v24 = 10;
        const o30 = {
            next() {
                v24--;
                const v28 = v24 == 0;
                const o29 = {
                    "done": v28,
                    "value": v24,
                };
                return o29;
            },
        };
        return o30;
    },
};
const v32 = [v5];
[10];
[v32,10];
[Int8Array,1,1,Float32Array,7];
class C36 {
    constructor(a38) {
        a38 &= this;
        this[1073741824] = v32;
    }
}
new C36(C36);
