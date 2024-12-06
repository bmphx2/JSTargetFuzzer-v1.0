const v1 = new WeakMap();
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a4;
    this.resizable = v1;
}
const v6 = new F2(v1, v1);
const v7 = new F2(v1, v6);
const v8 = new F2(v7, WeakMap);
function F9(a11, a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = v1;
    this.g = v6;
    this.c = a13;
    new Uint8Array();
    new Int16Array(255);
}
const v20 = new F9(v7, v7, WeakMap, v7);
new F9(v6, v8, v1, v8);
const v22 = new F9(v6, v7, v20, v7);
const v27 = [2036046200,-9223372036854775807,-61646];
const v29 = v27["map"](Array);
try {
    class C30 extends F2 {
    }
    const v31 = new C30();
    EvalError(v31[5]);
    new BigUint64Array(v29);
} catch(e37) {
    const v38 = [v27,v27,v27,v27,v27];
    function f39(a40) {
        return f39;
    }
    class C41 extends f39 {
    }
    const v43 = Symbol.toPrimitive;
    const o47 = {
        "f": v43,
        __proto__: v22,
        [C41]: v27,
        "d": f39,
        "g": WeakMap,
        [v43]() {
            try {
                function f45() {
                }
            } catch(e46) {
            }
        },
    };
    for (let i50 = 0, i51 = 10;
        (() => {
            for (let v52 = 0; v52 < 92; v52++) {
                v20[4041695737] >>= v52;
            }
            try { e37["valueOf"](v20, v43, v6, i51); } catch (e) {}
            return i50 < i51;
        })();
        ) {
        const v60 = [-35.9907096880105,-753.3103121236893,2.0,1.0391535673433964e+308,-1.7013521965165265e+308,-5.0,-1.656785925253001e+308,2.0];
        const v63 = v60 < "POSITIVE_INFINITY" ? v60 : "POSITIVE_INFINITY";
        for (let v64 = 0; v64 < 5; v64++) {
            const t62 = [Date(),Date];
            t62["p" + v29] = v29;
            [v64,v64,v64,v64] = v63;
        }
        ({"f":i51,"length":i50,...C41} = v38);
    }
} finally {
}
