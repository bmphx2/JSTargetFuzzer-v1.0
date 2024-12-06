const v2 = -Infinity;
function f3(a4, a5) {
    const o11 = {
        [v2]: a4,
        set MAX_SAFE_INTEGER(a7) {
            [this,a4,this];
            [a5,a7,0.5068513363484461];
            [0.5068513363484461,this,a7,this];
        },
        ...a5,
        "c": 5.0,
        "f": 0.5068513363484461,
        __proto__: a4,
    };
    let v12 = 44256;
    const o18 = {
        m(a15, a16, a17) {
            v12 ^= a17;
            return 858;
        },
    };
    return o18;
    return o11;
}
const v19 = f3(0.5068513363484461, v2);
const v20 = f3(0.5068513363484461, v19);
f3(v20, v20);
function f22(a23, a24, a25, a26) {
    const o34 = {
        [a26]: v20,
        "c": a23,
        ...v19,
        p(a28, a29, a30) {
            let v31;
            try { v31 = this.min(a29, a30, a29, a23, v2); } catch (e) {}
            let v32;
            try { v32 = new v31(5.0, a26, a26); } catch (e) {}
            let v33 = this.c;
            v33 /= v32;
            return a28;
        },
    };
    return o34;
}
f22(v19, v19, v2, 0.5068513363484461);
f22(v20, v19, v2, 5.0, f22(v20, v19, v2, 0.5068513363484461), v2);
const o38 = {
};
async function f39(a40, a41, a42, a43) {
    const v44 = await a40;
    gc(10000);
    function F48(a50, a51, a52, a53) {
        if (!new.target) { throw 'must be called with new'; }
    }
    new F48();
    return v44;
}
f39(o38);
