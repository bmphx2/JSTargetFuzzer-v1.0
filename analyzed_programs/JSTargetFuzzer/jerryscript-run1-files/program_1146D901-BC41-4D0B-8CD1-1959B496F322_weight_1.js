const v12 = /Y93\x0f/s;
const v13 = /foo[z]*/m;
const v14 = /a{z}*/yi;
function f16(a17, a18, a19) {
    const o37 = {
        p(a21, a22, a23, a24) {
            try { a17(v14, 255, a23, this, a24); } catch (e) {}
            const v27 = Symbol.iterator;
            const o36 = {
                [v27]() {
                    let v29 = 10;
                    const o35 = {
                        next() {
                            v29--;
                            const v33 = v29 == 0;
                            const o34 = {
                                "done": v33,
                                "value": v29,
                            };
                            return o34;
                        },
                    };
                    return o35;
                },
            };
            return o36;
        },
    };
    return o37;
}
f16(980926866, v13, "MIN_SAFE_INTEGER");
f16("21765", v12, "MIN_SAFE_INTEGER");
f16("MIN_SAFE_INTEGER", v14, "21765");
