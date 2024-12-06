let v1 = 5.0;
const v2 = -Infinity;
function f3(a4, a5) {
    new Int16Array(512);
    new Float64Array(139);
    new Int8Array(6);
    const o23 = {
        [v1]: a4,
        set MAX_SAFE_INTEGER(a19) {
            [this,a19,this];
            [a5,512,0.5068513363484461];
            [0.5068513363484461,this,a19,this];
        },
        ...a5,
        "c": v1,
        "f": 0.5068513363484461,
        __proto__: a4,
    };
    const o30 = {
        m(a27, a28, a29) {
            a27 ^= a29;
            return 858;
        },
    };
    return o30;
    return o23;
}
const v31 = f3(0.5068513363484461, v2);
const v32 = f3(0.5068513363484461, v31);
const v33 = f3(v32, v32);
function f34(a35, a36, a37, a38) {
    const o62 = {
        [a38]: v32,
        "c": a35,
        ...v31,
        p(a40, a41, a42) {
            let v43;
            try { v43 = this.min(a41, a42, a41, a35, v2); } catch (e) {}
            let v44;
            try { v44 = new v43(v1, a38, a38); } catch (e) {}
            const v45 = this.c;
            for (let i47 = 0;
                i47 < 10, a38;
                (() => {
                    const v51 = i47++;
                    super.e = i47;
                    f34(v51 >= f34, a37, v51, v33);
                    Symbol.unscopables;
                    this[a40];
                })()) {
                v32.c = v45;
            }
            v1 /= v44;
            return a41;
        },
    };
    return o62;
}
const v63 = f34(v31, v31, v2, 0.5068513363484461);
const v64 = f34(v32, v31, v2, 0.5068513363484461);
f34(v32, v31, 0.5068513363484461, v1, v64, v2);
const o66 = {
};
async function f67(a68, a69, a70, a71) {
    const v72 = await a68;
    gc(10000);
    function F76(a78, a79, a80, a81) {
        if (!new.target) { throw 'must be called with new'; }
    }
    if (a71) {
        Object.defineProperty(v32, v72, { get: gc, set: gc });
    } else {
        let v83;
        try { v83 = v32.m(F76, a69, v64, F76, v63); } catch (e) {}
        new f3(gc, v83);
    }
    new F76();
    return v72;
}
f67(o66);
