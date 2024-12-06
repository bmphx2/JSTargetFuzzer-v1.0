function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 536870912;
}
new F0();
new F0();
new F0();
new Uint32Array(16);
new BigUint64Array(257);
new Uint8ClampedArray(236);
function F15() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 15766;
    this.g = 15766;
}
const v18 = new F15();
const v19 = new F15();
const v20 = new F15();
const v21 = [F15];
const v22 = [v18];
[v21,v22,v20,v19,F15];
[1.5624786942452632e+308,2.2250738585072014e-308,1.6778875886812652e+308,382.96556994898356,-754.3525488733285,-1.6593828476173794e+308,-1000000.0,-2.220446049250313e-16,719008.9307792347,-750430.4653506284];
[-1000.0,2.2250738585072014e-308,2.220446049250313e-16,-4.23516944478888,1e-15,-5.0,-1.744961969922525e+308,4.0];
[-3.3780303807381333,55.06825640158604,-679907.0931416976,-6.5108520169214295,2.220446049250313e-16,-2.220446049250313e-16];
const v29 = [65535,65535];
const v30 = [65535];
function F33(a35, a36) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 8;
    this.e = a35;
}
const v37 = new F33(8, 16);
function f44(a45, a46, a47) {
    const o104 = {
        "f": 1000,
        o(a49, a50, a51, a52) {
            for (let v53 of a47) {
                v53 = a45;
                let v54 = 0;
                do {
                    const v56 = Array.iterator;
                    const o65 = {
                        [v56]() {
                            let v58 = 10;
                            const o64 = {
                                next() {
                                    v58--;
                                    const v62 = v58 == v37;
                                    const o63 = {
                                        "done": v62,
                                        "value": v58,
                                    };
                                    return o63;
                                },
                            };
                            return o64;
                        },
                    };
                    v54++;
                } while (v54 < 4)
                Int16Array || 2725;
                let v73 = Uint32Array;
                const v74 = new v73(v54);
                class C75 extends v73 {
                    set b(a77) {
                        let v76 = this;
                        try { v76.reduceRight(C75); } catch (e) {}
                        C75.__proto__ = v74;
                        super.findIndex(a77, a77);
                        v76["values"](...v76, ..."values", ...v76, ...v76, a77);
                        v76 = v74;
                    }
                    cos(a86, a87, a88, a89) {
                        this.a = a88;
                        try { this.includes(this, 2); } catch (e) {}
                        v73++;
                        new Int32Array(2);
                        new Int8Array(2);
                        new Int16Array(2982);
                        return v18;
                    }
                }
                new C75(v54, BigUint64Array);
            }
            return v21;
        },
        "h": v22,
        "e": v21,
        __proto__: -2147483648,
        [a45]: 7,
        "b": a45,
        [Int16Array]: a47,
        "a": v21,
        ...v21,
        "b": v21,
    };
    return o104;
}
const v106 = f44(1000, f44(7, Float32Array, 1000), 1000);
const v107 = [v30,v30,v30,v30];
v19[Symbol.unscopables] = v106;
for (let i113 = 0, i114 = 10; i113 < 2, i113;) {
}
Object.defineProperty(v107, 65537, { value: v29 });
v30["lastIndexOf"](v107, -27482);
