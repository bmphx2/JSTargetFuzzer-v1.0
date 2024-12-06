function f0() {
    const o17 = {
        "g": 100854817,
        255: 9,
        __proto__: 1073741825,
        get f() {
            try { this(100854817); } catch (e) {}
            const v7 = Symbol.iterator;
            const o16 = {
                [v7]() {
                    let v9 = 10;
                    const o15 = {
                        next() {
                            v9--;
                            const v13 = v9 == 0;
                            const o14 = {
                                "done": v13,
                                "value": v9,
                            };
                            return o14;
                        },
                    };
                    return o15;
                },
            };
            return o16;
        },
    };
    return o17;
}
const v18 = f0();
const v19 = f0();
const v20 = f0();
[-Infinity,1.0,1.4188429262687874e+308,117.64990278032406,-1.6891211339536412,NaN,-1.7976931348623157e+308,-1.4882680487115607,-1.7149192151204385e+307];
const v22 = [-1.681114247809614e+307,1000.0,-1000000000.0,0.6578187218821819];
const v23 = [-1.0,6.796144474042695e+307,-1000000000.0,-2.220446049250313e-16,5.0,-4.583966842438567];
function F24(a26, a27, a28) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = f0;
    this.c = a28;
    this.e = a28;
}
const v29 = new F24(v18, v20, f0);
const v30 = new F24(v19, v18, F24);
const v31 = new F24(v20, v18, v20);
const v34 = new Uint32Array(181);
let v36 = BigUint64Array;
let v37 = new v36(1);
let v38 = 253;
[v38,,v36,v37] = v34;
let v40;
try { v40 = v36["abs"](181, v38, v36); } catch (e) {}
new Uint16Array(v38);
for (let i51 = 0; i51 < 2; i51++) {
    const v58 = Symbol.iterator;
    const o67 = {
        [v58]() {
            let v60 = 10;
            const o66 = {
                next() {
                    v60--;
                    const v64 = v60 == 0;
                    const o65 = {
                        "done": v64,
                        "value": v60,
                    };
                    return o65;
                },
            };
            return o66;
        },
    };
    const v68 = new Function("x");
    v68.name;
    function F71(a73, a74, a75, a76) {
        if (!new.target) { throw 'must be called with new'; }
        this.b = a75;
        this.h = o67;
    }
    new F71(v22, 638046528, v29, 181);
    new F71(v23, v68, v31, F71);
    new F71(v40, v68, v30, v29);
}
Function();
