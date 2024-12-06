new Date();
new Uint8ClampedArray(0);
new Int8Array(16);
new Float64Array(145);
function f11(a12, a13, a14) {
    const o54 = {
        [a13]: a14,
        ...a14,
        [Float64Array]: Uint8ClampedArray,
        "f": 145,
        set h(a16) {
            "unicode" ** "a";
            let v22 = 1000000.0;
            Math.round(++v22);
            const v26 = Symbol.iterator;
            const o46 = {
                [v26]() {
                    let v28 = 10;
                    const o45 = {
                        next() {
                            v28--;
                            const v32 = v28 == 0;
                            const o40 = {
                                toString(a34, a35, a36, a37) {
                                    Proxy();
                                    return a37;
                                },
                                "done": v32,
                                "value": v28,
                            };
                            return o40;
                        },
                        [a12]: a12,
                        m(a42, a43, a44) {
                            super.e = a12;
                            return a12;
                        },
                    };
                    return o45;
                },
            };
        },
        toString(a48, a49, a50, a51) {
            return Proxy();
        },
    };
    return o54;
}
const v57 = ([-2.0,8.942667862857025,5.0])["fill"](..."fill");
let v58 = undefined;
Math.asinh(v58 = v57) ^ v58;
try { Uint8Array(); } catch (e) {}
let v64 = 0;
v64++;
([-30092,64]).toLocaleString();
f11(145, 16, Uint8ClampedArray);
f11(145, 16, Int8Array);
f11(0, 0, Float64Array);
try {
    for (const v72 of "preventExtensions") {
        function f73() {
            const o74 = {
                ...v72,
            };
            return o74;
        }
        f73();
        f73();
        break;
    }
} finally {
}
const o78 = {
    get g() {
        return this;
    },
};
let v79 = [o78,o78,o78,o78];
let v80 = --v79;
++v80;
