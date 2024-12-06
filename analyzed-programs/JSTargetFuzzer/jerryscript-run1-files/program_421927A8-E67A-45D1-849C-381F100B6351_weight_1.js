class C3 {
    set d(a5) {
        this ** this;
    }
    o(a11, a12) {
        const o15 = {
            "maxByteLength": 4096,
        };
        const v17 = new SharedArrayBuffer(4096, o15);
        new Uint8ClampedArray(v17);
        return 536870912;
    }
}
new C3();
const v21 = new C3();
class C23 extends v21.constructor {
    static ["rln"] = v21;
    static f = v21;
}
new C23();
new C3();
function f32() {
    return "rln";
}
function f42(a43, a44) {
    const o52 = {
        ...a44,
        "c": a44,
        "b": 1073741824,
        "e": a44,
        __proto__: a44,
        [3](a46, a47, a48) {
            try {
                super.m(a44, a46, a48, a46);
            } catch(e50) {
            }
            const v51 = this[8];
            a43 **= -33749;
            return v51;
        },
    };
    return o52;
}
f42(10000, 512);
f42(-33749, f42);
f42(3, f42);
function F56(a58, a59) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a59;
}
new F56(10000, 3);
const v61 = new F56(512, 22165);
new F56(1073741824, 3);
delete v61[1509295508];
const v72 = Symbol.iterator;
const o81 = {
    [v72]() {
        let v74 = 10;
        const o80 = {
            next() {
                v74--;
                const v78 = v74 == 0;
                const o79 = {
                    "done": v78,
                    "value": v74,
                };
                return o79;
            },
        };
        return o80;
    },
};
Math.sinh(F56);
Math.sinh(10000);
const v84 = 127 * 3;
10000 >> -1000000000.0;
Math.atan(v84);
