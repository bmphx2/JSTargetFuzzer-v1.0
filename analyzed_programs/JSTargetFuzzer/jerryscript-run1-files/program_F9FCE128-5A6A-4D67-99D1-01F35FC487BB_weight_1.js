const v1 = new Set();
function f2(a3, a4) {
    const o22 = {
        [Set]: a4,
        "c": a3,
        "a": a3,
        ...v1,
        "b": Set,
        valueOf(a6, a7) {
            let v8;
            try { v8 = new a3(a6, a3, Set); } catch (e) {}
            a4.length = 256;
            try { v8(a3); } catch (e) {}
            Symbol.iterator;
            const o21 = {
                [v1]() {
                    let v14 = 10;
                    const o20 = {
                        next() {
                            v14--;
                            const v18 = v14 == 0;
                            const o19 = {
                                "done": v18,
                                "value": v8,
                            };
                            return o19;
                        },
                    };
                    return o20;
                },
            };
            return a3;
        },
    };
    return o22;
}
const v23 = f2(Set, Set);
const v24 = f2(Set, f2);
const v25 = f2(v24, v23);
function F26(a28, a29, a30, a31) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a31;
    this.a = f2;
}
const v32 = new F26(v24, v23, v24, v25);
let v33 = new F26(v25, v25, v24, v32);
const v34 = new F26(f2, v24, v24, v24);
function f35(a36, a37, a38, a39) {
    -10n == ([1.1874236030596237e+308])["lastIndexOf"]();
    const o55 = {
        set g(a46) {
            this[2] = v24;
            Math.abs(v34);
            !(v33--);
            Math.sqrt(Math);
            Math.asinh(v23);
        },
        ...a39,
        [Set]: Set,
        "a": v32,
    };
    return o55;
}
const v56 = f35(F26, v34, v25, Set);
f35(f35(v34, v32, v23, v25), v33, v23, v56);
parseInt();
