const v4 = new WeakSet();
function f5() {
    return WeakSet;
}
const v6 = [-844364646,5,10000,64,1073741824,6];
const v7 = [2422,16,1,65535,14,14694,-1499381512,127,268435440,-4294967295];
const v8 = [-1912727966,-36729,-9007199254740992];
function f11(a12, a13) {
    const o14 = {
        __proto__: v4,
        "d": -685739278,
        "a": a13,
    };
    return o14;
}
f11(-685739278, v7);
f11(5, v7);
f11(f11, v6);
const v21 = new Int32Array(6);
let v23 = Int16Array;
new v23(184);
const v27 = new Float64Array(65);
[v23] = v27;
const v35 = WeakSet.iterator;
const o48 = {
    [f5]() {
        let v37 = 10;
        const o45 = {
            next() {
                let v38 = this;
                const v39 = v37--;
                const v41 = -2.0 !== v23;
                if (v41) {
                    v38[2];
                } else {
                    v38 ^= v35;
                }
                const v43 = v37 == 0;
                const o44 = {
                    "done": v43,
                    "c": v39,
                    "f": v41,
                    __proto__: -65537,
                    "a": v38,
                    ...v8,
                    "value": v37,
                };
                return o44;
            },
        };
        v23 = v27;
        v4[2464] = v4;
        v8[v8] = v37;
        try { this.asin(v37, Symbol); } catch (e) {}
        let [...v47] = v21;
        return o45;
    },
};
