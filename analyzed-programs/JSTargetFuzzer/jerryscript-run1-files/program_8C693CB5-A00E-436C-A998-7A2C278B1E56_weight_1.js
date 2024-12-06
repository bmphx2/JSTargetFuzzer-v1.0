const v1 = new WeakSet();
function f2(a3, a4) {
    const o18 = {
        set h(a6) {
            super.b;
            let v8;
            try { v8 = v1.delete(a4); } catch (e) {}
            for (let v9 = 0; v9 < 32; v9++) {
                v8["p" + v9] = v9;
            }
        },
        __proto__: a3,
        [WeakSet](a13) {
            let v14 = 1217740269;
            while (v14 < 10) {
                a3[182] = this;
                a3 = WeakSet;
                v14++;
            }
            return a4;
        },
    };
    return o18;
}
const v19 = f2(WeakSet, WeakSet);
const v20 = f2(v1, WeakSet);
const v21 = f2(WeakSet, f2);
function F22(a24, a25) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = v1;
}
new F22(v21, v20);
new F22(v20, v20);
new F22(v21, v19);
function f32() {
    return -53071;
}
const o40 = {
    get unicode() {
        function f37(a38, a39) {
            'use strict';
            a38.c = this;
            return a39;
        }
        return this;
    },
};
