const v0 = [-23990,-35919,10000,400997401,268435439,8,268435456,1732483135,-2121021613,1962011004];
const v1 = [-128,2,2147483647];
const v2 = [128,-2,-256,-10,1423042657,-1256437740,5467,13];
function f3(a4) {
    const o22 = {
        "c": v1,
        6: v0,
        "b": a4,
        [a4]: v1,
        __proto__: v2,
        set f(a6) {
            const v8 = super.h;
            function f9(a10, a11, a12, a13) {
                const o14 = {
                    10: a10,
                    ...v2,
                    "f": v1,
                };
                return o14;
            }
            f9(v2, v0, f9(v0, v1, f3, v2), true);
            f9(v1, f3, a4, this);
            let v18;
            try { v18 = v0.concat(v2, v1, v8, v0); } catch (e) {}
            typeof v18 === "symbol";
        },
    };
    return o22;
}
const v23 = f3(v2);
const v25 = f3(f3(v2));
const o26 = {
    "apply": f3,
    "call": f3,
    "defineProperty": f3,
    "deleteProperty": f3,
    1000: v0,
    "b": v23,
    "a": v25,
    [f3]: v1,
    "g": v0,
    "getOwnPropertyDescriptor": f3,
    "has": f3,
    "isExtensible": f3,
    "ownKeys": f3,
    "preventExtensions": f3,
    "setPrototypeOf": f3,
};
new Proxy(v2, o26);
new Uint32Array(128);
new Float64Array(3707);
new Float64Array(7);
new BigUint64Array(4096);
new Int32Array(4);
new Int8Array(16);
new Int8Array(1033);
new BigUint64Array(2223);
new Uint8Array(257);
new Map();
new Uint16Array(5);
new Float32Array(257);
new Int32Array(803, 741426789);
const v76 = [874925.9932308295,-1000000.0,5.0,-2.220446049250313e-16,0.46534771058701496,4.75896173685579e+307,-2.220446049250313e-16,2.1845493803247624,0.4594452685130429,-1.0];
for (const v77 of v76) {
    for (let v78 = 0; v78 < 5; v78++) {
        const v81 = new Uint32Array(256);
        const v82 = [Uint32Array,Uint32Array,v81];
        const v83 = [v81,v81,256,v81];
        const v84 = [Uint32Array,"number",v83];
        v83[256] /= 256;
        const o85 = {
        };
        for (let i88 = 0; i88 < 7; i88++) {
            let v97 = 0.20342292021627972;
            Math.imul(Uint32Array, 268435441);
            ~Uint32Array;
            let v100 = Uint32Array ^ -4096;
            Math.tan(v100);
            v97++;
            Math.sin(268435441);
            --v100;
        }
        new Proxy(v82, o85);
        let v106;
        try { v106 = Uint32Array(256, 256); } catch (e) {}
        let v107;
        try { v107 = new v106(...v84, o85, v83, ...v83, o85, v106); } catch (e) {}
        try { v107(v84, 741426789); } catch (e) {}
        function f112() {
            return v83;
        }
        o85.a = Uint32Array;
        const v117 = -5.721071462241996e+307 & +v84;
        Math.log10(255);
        v81[256] |= 256;
        v106 = Uint32Array;
        const v119 = 256 / 256;
        try { v119(v119); } catch (e) {}
        const v121 = new Uint32Array(v119, v117);
        const v123 = [v76,v76,v77];
        Reflect.apply(v84.reverse, v121, v123);
        function F126(a128, a129) {
            if (!new.target) { throw 'must be called with new'; }
        }
    }
}
