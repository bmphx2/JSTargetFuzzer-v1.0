function f6(a7, a8, a9) {
    const o19 = {
        ...a7,
        get d() {
            let v14;
            try {
            const t0 = 128;
            v14 = t0(-4294967297, 767938279, 4294967296n);
            } catch (e) {}
            const v15 = a9 >>> 4294967296n;
            try { v14(-16352, v15, a8, v15, v14); } catch (e) {}
            let [v17,...v18] = v14;
            return v17;
        },
        "a": a7,
        __proto__: a8,
        ...48709n,
    };
    return o19;
}
f6(-1951125450, 4294967296n, -268435456n);
f6(921152150, 48709n, 4294967296n);
const v22 = f6(767938279, 4294967296n, 48709n);
[2.2250738585072014e-308,0.20368639302891867,633443.6268452245,2.2250738585072014e-308,-8.611982620101388,-887.6350256092134,-8.455323050234913];
[1000000000.0,1.7976931348623157e+308,111.45741619661453,7.211472080562842,323.17233625628];
let v25 = [-9.344705756371068];
function F26(a28, a29, a30, a31) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = v22;
    this.e = -268435456n;
    this.g = a30;
}
const v32 = new F26(921152150, -1951125450, 921152150, -1951125450);
new F26(921152150, -1951125450, 921152150, 767938279);
new F26(-1951125450, -1951125450, 921152150, -1951125450);
const v37 = Symbol();
class C39 extends Array {
    constructor(a41) {
        C39.match(a41);
    }
    valueOf(a44, a45) {
        for (const v46 in this) {
            const v48 = (a49, a50, a51, a52) => {
                a51 == 127;
            };
            Object.defineProperty(v25, "length", { writable: true, value: a44 });
        }
        const o54 = {
        };
        Proxy();
        let v57;
        try { v57 = a45(); } catch (e) {}
        class C58 {
            valueOf(a60, a61) {
                let v62;
                try { v62 = a61(); } catch (e) {}
                ({"b":v57,"e":a60,} = v62);
            }
            static n(a64, a65, a66, a67) {
                try {
                    super.p();
                } catch(e69) {
                }
            }
        }
        ({"b":v25,"e":a44,} = v57);
        let v70 = Int32Array;
        let v71 = v70();
        let v72 = v32(767938279);
        [,v70,v72,v71] = v72;
    }
    static [v37] = 64769;
}
