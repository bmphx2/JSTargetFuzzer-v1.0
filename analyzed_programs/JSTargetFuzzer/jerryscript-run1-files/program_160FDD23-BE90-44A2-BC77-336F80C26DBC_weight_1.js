function F9(a11, a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = F9;
    this.a = -31033n;
    this.e = -9223372036854775807n;
    function F14(a16, a17) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v18 = new F14();
    for (let v19 = 0; v19 < 5; v19++) {
        try { v18["getDate"](); } catch (e) {}
        continue;
    }
}
new F9(4, 536870887n, -31033n);
const v23 = new F9(-2077621174, -31033n, -31033n);
new F9(1000, 536870887n, -31033n);
const v27 = new Int32Array(2083);
new Uint8Array(255);
const v33 = new Int16Array(7);
function f34(a35, a36, a37) {
    const o50 = {
        "h": f34,
        set e(a39) {
            e = a36;
            function F40() {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v42 = new F40();
            with (v42) {
                function F43() {
                    if (!new.target) { throw 'must be called with new'; }
                }
                const v45 = new F43();
                with (v45) {
                }
            }
            [a37,a36];
            [v27];
            [Int16Array,Uint8Array];
            this.h;
        },
        __proto__: v23,
        "b": Uint8Array,
        "c": 255,
        ...a35,
        1053877365: a36,
    };
    return o50;
}
const v51 = f34(2083, 255, 7);
const v52 = f34(v51, 7, 2083);
f34(f34, 255, 7);
v51[-2] &= 2083;
v33[-1] -= 7;
let v54 = 10;
for (; v54--;) {
    v52.h;
    v52[Symbol.toPrimitive] = 7;
    let v62 = 0;
    while (v62 < 6) {
        new Int32Array(v52);
        v62++;
    }
}
