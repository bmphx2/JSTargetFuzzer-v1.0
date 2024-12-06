function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = null;
    let v4 = 0;
    for (let i = 0; i < 5; i++) {
        v4++;
        Symbol.for(v4);
    }
}
const v7 = new F1();
const v8 = new F1();
const v9 = new F1();
function f10(a11, a12) {
    const o42 = {
        toString(a14, a15) {
            v7[9] = F1;
            a11.h;
            return a11;
        },
        "h": a11,
        [null]: null,
        n(a18, a19, a20, a21) {
            const v22 = (a23, a24, a25, a26) => {
                const v29 = new Uint8Array(1705);
                const o35 = {
                    m(a31, a32, a33) {
                        v29.fill();
                        return 1705;
                    },
                };
                o35.m;
                return Reflect.apply(v29);
            };
            return v9;
        },
    };
    return o42;
}
f10(v9, f10(v8, f10(v8, v7)));
new Uint8Array(10);
new Uint32Array(127);
new Int16Array(4);
Math.round(-2.220446049250313e-16);
