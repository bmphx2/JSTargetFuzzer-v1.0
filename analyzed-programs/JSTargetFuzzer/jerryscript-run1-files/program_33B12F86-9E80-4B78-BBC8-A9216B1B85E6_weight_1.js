function f0() {
}
function f2(a3) {
    const o19 = {
        "b": f0,
        "f": a3,
        "g": f0,
        __proto__: a3,
        "h": f0,
        "a": f0,
        get d() {
            const v6 = Symbol.iterator;
            const o18 = {
                [v6]() {
                    let v8 = 10;
                    const o17 = {
                        next() {
                            v8--;
                            const v12 = v8 == 0;
                            const o16 = {
                                "done": v12,
                                __proto__: a3,
                                valueOf() {
                                    let v15 = super.d;
                                    v15 |= Boolean;
                                    return v8;
                                },
                                "value": v8,
                            };
                            return o16;
                        },
                    };
                    return o17;
                },
            };
            return o18;
        },
    };
    return o19;
}
f2(f2);
f2(undefined);
f2(f2);
const v29 = new Uint8Array();
v29.set(v29);
const v32 = [607456100,607456100,f2];
[[1608936976,1608936976,1608936976,-256],3,697298698,v32];
const v37 = new Int32Array(2083);
new Uint8Array(255);
const v43 = new Int16Array(7);
function f44(a45, a46, a47) {
    const o54 = {
        "h": Int32Array,
        set e(a49) {
            e = a46;
            [a47,a46];
            [v37];
            [Int16Array,Uint8Array];
            this.h;
        },
        __proto__: v43,
        "b": Uint8Array,
        "c": 255,
        ...a45,
        1053877365: a46,
    };
    return o54;
}
const v55 = f44(2083, 255, 7);
const v56 = f44(v55, 7, 2083);
f44(f44, 255, 7);
v55[-2] &= 2083;
v43[-1] -= 7;
let v58 = 10;
for (; v58--;) {
    v56.h;
    v56[Symbol.toPrimitive] = 7;
}
