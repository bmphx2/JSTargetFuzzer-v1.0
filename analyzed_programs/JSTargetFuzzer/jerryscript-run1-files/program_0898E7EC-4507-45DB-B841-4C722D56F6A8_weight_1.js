function f0() {
    const o27 = {
        "g": 100854817,
        255: 9,
        __proto__: 1073741825,
        get f() {
            try { this(100854817); } catch (e) {}
            this[100854817] >>>= 9;
            const v6 = [1073741825,this,100854817,f0,9];
            [v6,v6,this,v6,v6];
            [f0];
            let v12 = 1e-15;
            2742 * v6;
            Math.floor(v12);
            --v12;
            const v17 = Symbol.iterator;
            const o26 = {
                [v17]() {
                    let v19 = 10;
                    const o25 = {
                        next() {
                            v19--;
                            const v23 = v19 == 0;
                            const o24 = {
                                "done": v23,
                                "value": v19,
                            };
                            return o24;
                        },
                    };
                    return o25;
                },
            };
            return o26;
        },
    };
    return o27;
}
const v28 = f0();
const v29 = f0();
const v30 = f0();
const v31 = [-Infinity,1.0,1.4188429262687874e+308,117.64990278032406,-1.6891211339536412,NaN,-1.7976931348623157e+308,-1.4882680487115607,-1.7149192151204385e+307];
const v32 = [-1.681114247809614e+307,1000.0,-1000000000.0,0.6578187218821819];
const v33 = [-1.0,6.796144474042695e+307,-1000000000.0,-2.220446049250313e-16,5.0,-4.583966842438567];
function F34(a36, a37, a38) {
    if (!new.target) { throw 'must be called with new'; }
    const v40 = Symbol.iterator;
    const o49 = {
        [v40]() {
            let v42 = 10;
            const o48 = {
                next() {
                    v42--;
                    const v46 = v42 == 0;
                    const o47 = {
                        "done": v46,
                        "value": v42,
                    };
                    return o47;
                },
            };
            return o48;
        },
    };
    this.d = f0;
    this.c = a38;
    this.e = a38;
}
const v50 = new F34(v28, v30, f0);
const v51 = new F34(v29, v28, F34);
const v52 = new F34(v30, v28, v30);
const v55 = new Uint32Array(181);
let v57 = BigUint64Array;
let v58 = new v57(1);
let v59 = 253;
[v59,,v57,v58] = v55;
let v61;
try { v61 = v57["abs"](181, v59, v57); } catch (e) {}
new Uint16Array(v59);
for (let i72 = 0; i72 < 2; i72++) {
    const v79 = Symbol.iterator;
    const o88 = {
        [v79]() {
            let v81 = 10;
            const o87 = {
                [v31]: v81,
                ...v32,
                "e": v81,
                "g": f0,
                ["2147483648"]: this,
                next() {
                    v81--;
                    const v85 = v81 == 0;
                    const o86 = {
                        "done": v85,
                        "value": v81,
                    };
                    return o86;
                },
            };
            return o87;
        },
    };
    const v89 = new Function("x");
    v89.name;
    function F92(a94, a95, a96, a97) {
        if (!new.target) { throw 'must be called with new'; }
        this.b = a96;
        this.h = o88;
    }
    new F92(v32, 638046528, v50, 181);
    new F92(v33, v89, v52, F92);
    new F92(v61, v89, v51, v50);
}
Function();
