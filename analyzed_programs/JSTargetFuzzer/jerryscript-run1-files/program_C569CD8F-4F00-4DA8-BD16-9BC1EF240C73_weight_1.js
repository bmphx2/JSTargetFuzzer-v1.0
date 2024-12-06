function f0() {
    const o18 = {
        "h": "string",
        "e": "1OR",
        ["string"](a5, a6) {
            Symbol.iterator;
            const o17 = {
                [a6]() {
                    let v10 = 10;
                    const o16 = {
                        next() {
                            v10--;
                            const v14 = v10 == 0;
                            const o15 = {
                                "done": v14,
                                "value": v10,
                            };
                            return o15;
                        },
                    };
                    return o16;
                },
            };
            return "string";
        },
    };
    return o18;
}
f0();
const v20 = f0();
const v21 = f0();
function f25(a26, a27) {
    const o42 = {
        "e": a26,
        "g": 5n,
        "b": a26,
        __proto__: v21,
        set c(a29) {
            -(-256n);
            const v32 = Symbol.iterator;
            const o41 = {
                [v32]() {
                    let v34 = 10;
                    const o40 = {
                        next() {
                            v34--;
                            const v38 = v34 == 0;
                            const o39 = {
                                "done": v38,
                                "value": v34,
                            };
                            return o39;
                        },
                    };
                    return o40;
                },
            };
        },
    };
    return o42;
}
f25(v20, -256n);
f25(v21, 5n);
f25(v21, 65536n);
new WeakMap();
function f51() {
    return WeakMap;
}
new Int8Array(5);
new Function(190);
new Float32Array(127);
function f67(a68, a69) {
    const o76 = {
        get h() {
            this[803142468] = a68;
            try { a69(a69, a69); } catch (e) {}
            return 255;
        },
        __proto__: 255,
        m(a73) {
            this[a73] *= 803142468;
            [] = 39946;
            const v74 = super.a;
            let v75;
            try { v75 = new v74(v74, a73, a73, 190); } catch (e) {}
            v75[2147483648] = v75;
            return a73;
        },
    };
    return o76;
}
const v77 = f67(39946, 803142468);
f67(255, 803142468);
f67(255, 803142468);
const v85 = new BigUint64Array(16);
const v88 = new Float32Array(3007);
const v91 = new Float32Array(3);
Object.defineProperty(v85, "byteOffset", { configurable: true, value: v91 });
v88[v91];
let v93 = v88[2936874794];
v20.g = -1024;
let v96 = --v93;
const v97 = v77 | v96;
const v98 = v77 ** v93;
!v97;
Math.clz32(v98);
--v96;
~v98;
