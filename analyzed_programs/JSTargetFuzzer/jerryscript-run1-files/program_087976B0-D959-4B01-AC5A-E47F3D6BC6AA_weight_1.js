function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = true;
    this.a = true;
}
new F1();
const v6 = new Int16Array(2083, 2083);
function f7(a8, a9, a10) {
    const o11 = {
        __proto__: v6,
        ...a8,
        1053877365: a9,
    };
    return Int16Array;
}
const v12 = f7();
f7(v12);
f7(f7);
v12[-2] &= 2083;
new F1();
const v16 = new F1();
function f20(a21, a22) {
    const o35 = {
        "e": F1,
        [a22](a24, a25, a26) {
            function F27(a29, a30, a31) {
                if (!new.target) { throw 'must be called with new'; }
                this.a = a29;
                this.f = a22;
            }
            const v32 = new F27(v16, a26, "a3n9r");
            const v33 = new F27(a24, a24, v32);
            new F27(a25, a24, v33);
            return a26;
        },
        ..."boolean",
    };
    return o35;
}
f20("boolean", "boolean");
f20("57077", "boolean");
f20("boolean", "57077");
const v41 = new Int32Array(2083);
new Uint8Array(255);
const v47 = new Int16Array(7);
function f48(a49, a50, a51) {
    const o58 = {
        "h": Int32Array,
        set e(a53) {
            e = a50;
            [a51,a50];
            [v41];
            [Int16Array,Uint8Array];
            this.h;
        },
        __proto__: v47,
        "b": Uint8Array,
        "c": 255,
        ...a49,
        1053877365: a50,
    };
    return o58;
}
const v59 = f48(2083, 255, 7);
const v60 = f48(v59, 7, 2083);
f48(f48, 255, 7);
v59[-2] &= 2083;
v47[-1] -= 7;
let v62 = 10;
for (; v62--;) {
    v60.h;
    v60[Symbol.toPrimitive] = 7;
}
