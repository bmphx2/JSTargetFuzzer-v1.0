function f0() {
    try {
        const t2 = "m";
        delete t2[1112];
        const o5 = {
            "call": f0,
            "defineProperty": f0,
            "getOwnPropertyDescriptor": f0,
            "isExtensible": f0,
        };
        new Proxy("m", o5);
    } catch(e8) {
        try { e8.isArray(); } catch (e) {}
    }
    const o27 = {
        ["m"](a11) {
            a11.valueOf = a11;
            let v12;
            try { v12 = a11(this, -1e-15, 949.9976371219341, a11); } catch (e) {}
            let v14 = -734986776;
            let v15 = 1038099154;
            --v15;
            for (const v17 in this) {
                for (let v18 = 0; v18 < 32; v18++) {
                    const t24 = "m";
                    t24["p" + v18] = v18;
                }
            }
            const v21 = --v14;
            v12 >>> -1e-15;
            Math.round(v21);
            const o24 = {
                "b": v15,
                "g": v21,
            };
            super.g = -1e-15;
            let v25 = ++v14;
            ++v25;
            return "m";
        },
    };
    return o27;
}
const v28 = f0();
let v29 = f0();
let v30 = f0();
class C31 {
    o(a33) {
        const v35 = Symbol.iterator;
        const o53 = {
            [v35]() {
                let v37 = 10;
                let v38 = v30[8];
                ++v38;
                const v43 = +v29;
                Math.tan(Symbol);
                Math.atan2(0.0, 0.0);
                Math.imul(Symbol, v43);
                const o52 = {
                    next() {
                        v37--;
                        const v50 = v37 == 0;
                        const o51 = {
                            "done": v50,
                            "value": v37,
                        };
                        return o51;
                    },
                };
                return o52;
            },
        };
        return a33;
    }
}
let v54 = new C31();
const v55 = new C31();
new C31();
[[v28,v55,v54,v54,v29],v28,C31];
[v29,v29,v55,v55];
v29 |= v28;
v30 = C31;
new Float64Array(1776);
new Int16Array(2);
const v68 = new Float32Array(243);
const v69 = [-11,-28972,65535,12,536870912,-2,536870889,50897,8];
for (let v70 = 0; v70 < 10; v70++) {
    v69.includes(v70);
    f0();
    var e = v70;
    v29 += v70;
    v68[1];
    v54 = v30;
    let v76 = -256;
    --v76;
    Math.asin(v70);
    Math.atan2(6, v70);
    v70 ** v70;
}
