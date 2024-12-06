function f0() {
    const o8 = {
        "c": 63964,
        "g": "2G2g",
        [63964]: "2G2g",
        "a": 63964,
        ..."2G2g",
        get h() {
            try { this.then(Error, Error); } catch (e) {}
            "2G2g" == "2G2g";
            return Error;
        },
    };
    return o8;
}
const v9 = f0();
const v10 = f0();
const v11 = f0();
function f12(a13) {
    const o26 = {
        "c": f0,
        [v10]: v10,
        0: v11,
        set f(a15) {
            super.d;
            new Int32Array(213);
            new Uint8Array(5);
            new Float32Array(9);
        },
    };
    return o26;
}
const v27 = f12(v9);
f12(v10);
const v29 = f12(v10);
function f30() {
    return v9;
}
function f31(a32, a33) {
    const o49 = {
        m(a35, a36, a37) {
            switch (f30) {
                default:
                    const v39 = Symbol.iterator;
                    const o48 = {
                        [v39]() {
                            let v41 = 10;
                            const o47 = {
                                next() {
                                    v41--;
                                    const v45 = v41 == 0;
                                    const o46 = {
                                        "done": v45,
                                        "value": v41,
                                    };
                                    return o46;
                                },
                            };
                            return o47;
                        },
                    };
                    break;
            }
            return v11;
        },
    };
    return o49;
}
f31(v27, f31);
f31(f31(v29, v27), f0);
("1000")["toUpperCase"]();
