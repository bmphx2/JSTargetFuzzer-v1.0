class C3 {
    d = 8;
    o(a5, a6) {
        a6 >>= this;
        const t3 = "MDR";
        t3.__proto__ = this;
        const o9 = {
            "maxByteLength": 501,
        };
        const v11 = new SharedArrayBuffer(501, o9);
        const v13 = new Uint8Array(v11);
        return v13;
    }
}
new C3();
new C3();
new C3();
[9223372036854775807,41052,65536,-7,16,536870912,9];
[-9];
[-2,-9223372036854775808,-1024,4294967296,1073741825,31203,127,-8266,45868,65537];
function F26() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -589293468;
}
const v29 = new F26();
const v30 = new F26();
const v31 = new F26();
let v33 = -372862.9439034201;
const v38 = [-1e-15,1000000.0,v33,v31];
const v39 = [1000000.0,-1e-15,v30,v38,-1e-15];
const v40 = [v31,v33,v31];
function f41(a42, a43) {
    const o57 = {
        "b": -1e-15,
        ...a43,
        [v40]: v30,
        __proto__: v30,
        "d": v31,
        "f": a43,
        [a42]: v38,
        set a(a45) {
            this.__proto__ = v39;
            v40[0.22410269410035233] = a42;
            const v47 = Symbol.iterator;
            const o56 = {
                [v47]() {
                    let v49 = 10;
                    const o55 = {
                        next() {
                            v49--;
                            const v53 = v49 == 0;
                            const o54 = {
                                "b": v53,
                                "value": v49,
                            };
                            return o54;
                        },
                    };
                    return o55;
                },
            };
        },
    };
    return o57;
}
f41(v40, v29);
f41(v40, v30);
const v60 = f41(v39, v40);
with (v31) {
    let v61 = a;
    const v63 = `rizPp${0.22410269410035233}number${v60}sticky${426.7417148362349}-29565${v61 || v61}atan2`;
    ({"length":v61,} = v63);
    v33 |= 426.7417148362349;
    let v66 = -9;
    Math.round(v66);
    const v69 = ~v63;
    v66++;
    Math.fround(v69, v69, C3, v69);
    Math.sign(v66);
    v66 | v63;
}
