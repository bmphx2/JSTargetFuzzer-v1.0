const v2 = -Infinity;
function f3(a4, a5) {
    new Int16Array(512);
    new Float64Array(139);
    new Int8Array(6);
    const o23 = {
        [v2]: a4,
        set MAX_SAFE_INTEGER(a19) {
            [this,a4,this];
            [a5,a19,0.5068513363484461];
            [0.5068513363484461,this,a19,this];
        },
        ...a5,
        "c": 5.0,
        "f": 0.5068513363484461,
        __proto__: a4,
    };
    let v24 = 44256;
    const o30 = {
        m(a27, a28, a29) {
            v24 ^= a29;
            return 858;
        },
    };
    return o30;
    return o23;
}
const v31 = f3(0.5068513363484461, v2);
const v32 = f3(0.5068513363484461, v31);
f3(v32, v32);
function f34(a35, a36, a37, a38) {
    const o56 = {
        [a38]: v32,
        "c": a35,
        ...v31,
        p(a40, a41, a42) {
            let v43;
            try { v43 = this.min(a41, a42, a41, a35, v2); } catch (e) {}
            let v44;
            try { v44 = new v43(5.0, a38, a38); } catch (e) {}
            let v45 = this.c;
            for (let i47 = 0; i47 < 10; i47++) {
                v32.c = v45;
            }
            v45 /= v44;
            return a40;
        },
    };
    return o56;
}
const v57 = f34(v31, v31, v2, 0.5068513363484461);
f34(v32, v31, v2, 5.0, f34(v32, v31, v2, 0.5068513363484461), v2);
const o60 = {
};
async function f61(a62, a63, a64, a65) {
    const v66 = await a62;
    gc(10000);
    function F70(a72, a73, a74, a75) {
        if (!new.target) { throw 'must be called with new'; }
    }
    if (a65) {
        Object.defineProperty(v32, v66, { get: gc, set: gc });
    } else {
        let v77;
        try { v77 = v32.m(F70, a63, a65, F70, v57); } catch (e) {}
        new f3(gc, v77);
    }
    new F70();
    return v66;
}
f61(o60);
