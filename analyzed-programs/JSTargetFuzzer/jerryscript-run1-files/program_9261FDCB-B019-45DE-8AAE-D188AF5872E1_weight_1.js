function f3(a4, a5) {
    const o12 = {
        __proto__: a4,
        "g": a5,
        "f": 4294967296,
        "h": a5,
        "a": a4,
        "c": a5,
        "d": a5,
        "b": a5,
        set e(a7) {
            let v8;
            try { v8 = new a4(this); } catch (e) {}
            const o9 = {
            };
            new Proxy(v8, o9);
        },
    };
    return o12;
}
f3(-256, -256);
f3(f3(f3, -256), -256);
function F24(a26, a27) {
    if (!new.target) { throw 'must be called with new'; }
}
class C28 extends F24 {
}
new C28();
Math.sign(-7);
const v33 = new Int32Array(2083);
new Uint8Array(255);
const v39 = new Int16Array(7);
function f40(a41, a42, a43) {
    const o50 = {
        "h": Int32Array,
        set e(a45) {
            e = a42;
            [a43,a42];
            [v33];
            [Int16Array,Uint8Array];
            this.h;
        },
        __proto__: v39,
        "b": Uint8Array,
        "c": 255,
        ...a41,
        1053877365: a42,
    };
    return o50;
}
const v51 = f40(2083, 255, 7);
const v52 = f40(v51, 7, 2083);
f40(f40, 255, 7);
v51[-2] &= 2083;
v39[-1] -= 7;
let v54 = 10;
for (; v54--;) {
    v52.h;
    v52[Symbol.toPrimitive] = 7;
}
