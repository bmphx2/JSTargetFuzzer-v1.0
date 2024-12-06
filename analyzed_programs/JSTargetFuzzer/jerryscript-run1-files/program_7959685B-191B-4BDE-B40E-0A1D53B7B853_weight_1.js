function f0() {
}
function f2(a3) {
    const o16 = {
        "b": f0,
        "f": a3,
        "g": f0,
        __proto__: a3,
        "h": f0,
        "a": f0,
        get d() {
            const v6 = Symbol.iterator;
            const o15 = {
                [v6]() {
                    let v8 = 10;
                    const o14 = {
                        next() {
                            v8--;
                            const v12 = v8 == 0;
                            const o13 = {
                                "done": v12,
                                "value": v8,
                            };
                            return o13;
                        },
                    };
                    return o14;
                },
            };
            return o15;
        },
    };
    return o16;
}
f2(f2);
f2(undefined);
f2(f2);
const v26 = new Uint8Array();
v26.set(v26);
const v29 = [607456100,607456100,f2];
[[1608936976,1608936976,1608936976,-256],3,697298698,v29];
const v34 = new Int32Array(2083);
new Uint8Array(255);
const v40 = new Int16Array(7);
function f41(a42, a43, a44) {
    const o51 = {
        "h": Int32Array,
        set e(a46) {
            e = a43;
            [a44,a43];
            [v34];
            [Int16Array,Uint8Array];
            this.h;
        },
        __proto__: v40,
        "b": Uint8Array,
        "c": 255,
        ...a42,
        1053877365: a43,
    };
    return o51;
}
const v52 = f41(2083, 255, 7);
const v53 = f41(v52, 7, 2083);
f41(f41, 255, 7);
v52[-2] &= 2083;
v40[-1] -= 7;
let v55 = 10;
for (; v55--;) {
    v53.h;
    v53[Symbol.toPrimitive] = 7;
}
