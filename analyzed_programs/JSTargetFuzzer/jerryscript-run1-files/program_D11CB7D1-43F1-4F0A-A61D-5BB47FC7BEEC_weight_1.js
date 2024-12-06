const v1 = new WeakMap();
function f2(a3) {
    const o11 = {
        [a3](a5, a6) {
            a6 >>= a5;
            const o7 = {
                "b": a3,
                __proto__: a5,
                "d": a3,
                "e": a6,
                "f": a3,
                "a": a5,
                ...v1,
                "g": v1,
                ...a5,
                95: WeakMap,
            };
            new Proxy(WeakMap, o7);
            function f10() {
                return a3;
            }
            return WeakMap;
        },
        "b": WeakMap,
        __proto__: v1,
        "d": a3,
        [a3]: f2,
        "f": a3,
        [v1]: WeakMap,
        /*
        __proto__: v1,
        */
    };
    return o11;
}
const v12 = f2(v1);
const v13 = f2(v1);
const v14 = f2(v13);
function f15(a16, a17, a18) {
    const o28 = {
        [a17](a20, a21, a22) {
            super.b;
            a22.c;
            ("m").normalize("NFKD");
            return v1;
        },
        "b": f2,
        "e": a18,
        "a": WeakMap,
        "h": f2,
        __proto__: v12,
    };
    return o28;
}
const v29 = f15(WeakMap, v14, v12);
f15(v12, v14, v13);
const o37 = {
    n(a32, a33, a34, a35) {
        /(a)\1D(?:ab)?/gu;
        return a34;
    },
};
const v40 = [f15(v1, v29, v29),WeakMap,WeakMap,[v14]];
[WeakMap,f15,v40];
const v42 = [-16,4];
const v43 = [-1124966260,9223372036854775807,9,-1022811835,14,-9223372036854775807,-954173599,592825194,-1892405619,4294967296];
v42[105] = v43;
v42.pop();
try {
    f2(v13);
    let [,v46] = v40;
    v29 ** v46;
} catch(e51) {
    try {
        v13.b;
        v1[Symbol.iterator] = v43;
    } catch(e58) {
        let v60 = -7.620814743680803;
        v60--;
    }
}
