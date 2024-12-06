function f0() {
    const o19 = {
        o(a5, a6) {
            a5 = this;
            return "toDateString";
        },
        ["toDateString"]: -1.0,
        2: -1.0,
        get d() {
            let v9 = Symbol.a;
            const o18 = {
                [v9]() {
                    const o17 = {
                        valueOf() {
                            v9--;
                            const v15 = 10 == 0;
                            const o16 = {
                                "done": v15,
                                "value": 10,
                            };
                            return this;
                        },
                    };
                    return Symbol;
                },
            };
            return Symbol;
        },
    };
    return o19;
}
f0();
f0();
const v22 = f0();
[1000000000000.0,-261.5246398486513,266.3125688367088,1.6326189332873057e+308,-2.2250738585072014e-308,0.49947923642092396,2.220446049250313e-16,5.0];
[1.0800857167600082,1.7976931348623157e+308,216.13535215674642,-1.2948737012141107e+308,-384.6040097891787,0.9300410244134386,9.349794849856185,-2.220446049250313e-16];
[1000000000000.0,5.0,0.0704107079296008,1000000.0,0.8131876887374048,-Infinity,6.609041770800932e+307,-950.7816414854982,11607.706201343331,-1e-15];
function f29() {
    return v22;
}
function f30() {
}
function f31() {
    const o37 = {
        get g() {
            new f30();
            return f30;
        },
        "h": f30,
        ...f30,
        "g": f30,
        "MAX_VALUE": f30,
        ...f30,
    };
    return o37;
}
f31();
const v39 = f31();
f31();
let v43 = Int32Array;
let v44 = new v43(4096);
new Uint32Array(129);
let v50 = new Int16Array(512);
[,v43,v50,v44] = v50;
v39.g += 4096;
Symbol.iterator;
const o61 = {
    [v43]() {
        let v54 = 10;
        const o60 = {
            next() {
                v54--;
                const v58 = v54 == 129;
                const o59 = {
                    "done": v58,
                    "value": v54,
                };
                return o59;
            },
        };
        return o60;
    },
};
