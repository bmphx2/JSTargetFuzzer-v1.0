function f0() {
    let v2 = "string";
    const o15 = {
        o(a5, a6) {
            [a6,v2,"0",this,this];
            const v8 = [a5,"number","number"];
            ["0",v8,a5,v8];
            return a6;
        },
        __proto__: v2,
        valueOf(a11) {
            ({"b":v2,"c":v2,"length":a11,} = a11);
            try {
                super.n(this, this, "number");
            } catch(e14) {
            }
            return this;
        },
    };
    return o15;
}
const v16 = f0();
const v17 = f0();
const v18 = f0();
class C19 extends f0 {
    static valueOf(a21, a22) {
        try { a22(v18, a21, a22, f0, a21); } catch (e) {}
        try { a22(v17, a21, this); } catch (e) {}
        return a21;
    }
    static m(a26, a27) {
        super.e;
        const v30 = Symbol.iterator;
        const o39 = {
            [v30]() {
                let v32 = 10;
                const o38 = {
                    next() {
                        v32--;
                        const v36 = v32 == 0;
                        const o37 = {
                            "done": v36,
                            "value": v32,
                        };
                        return o37;
                    },
                };
                return o38;
            },
        };
        return a27;
    }
}
const v40 = new C19();
new C19();
const v42 = new C19();
const v46 = [C19,f0,v16,v42];
const v47 = [2,v46,v17,v46];
const v48 = [C19,v47,f0,-1716957693];
function f49(a50, a51, a52, a53) {
    const o66 = {
        m(a55, a56) {
            new Uint8ClampedArray(40);
            new Uint32Array(16);
            new Float64Array(5);
            return a51;
        },
        "e": a50,
        "d": v48,
        ...v17,
    };
    return o66;
}
const v67 = f49(v46, v47, v46, v16);
function* f68(a69, a70, a71) {
    v67.d;
    yield* v42;
    return v42;
}
f68(v46, v40, v46);
f49(v48, v48, v48, v40);
f49(v48, v47, v47, v18);
function F76() {
    if (!new.target) { throw 'must be called with new'; }
}
const v78 = new F76();
class C79 extends F76 {
}
const v80 = new C79();
const v81 = [F76,F76,F76,F76];
const v82 = [v80,v80];
const v84 = v82[536870912];
let v85;
try { v85 = v84(); } catch (e) {}
const v87 = new Uint8Array(v82, v84, v85);
const v89 = new Uint8ClampedArray(C79, v85, v85);
const v90 = ("seal").replaceAll(v85, v85);
v89["set"](v78);
const v93 = v87[v81];
try { new Uint8Array(v90, v80, v93, v93, ...v85); } catch (e) {}
