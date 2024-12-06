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
    return o11;
}
const v12 = f3(0.5068513363484461, v2);
const v13 = f3(0.5068513363484461, v12);
f3(v13, v13);
function f15(a16, a17, a18, a19) {
    const o27 = {
        [a19]: v13,
        "c": a16,
        ...v12,
        p(a21, a22, a23) {
            let v24;
            try { v24 = this.min(a22, a23, a22, a16, v2); } catch (e) {}
            let v25;
            try { v25 = new v24(5.0, a19, a19); } catch (e) {}
            let v26 = this.c;
            v26 /= v25;
            return a21;
        },
    };
    return o27;
}
f15(v12, v12, v2, 0.5068513363484461);
f15(v13, v12, v2, 5.0, f15(v13, v12, v2, 0.5068513363484461), v2);
const o31 = {
};
async function f32(a33, a34, a35, a36) {
    return await a33;
}
f32(o31);
