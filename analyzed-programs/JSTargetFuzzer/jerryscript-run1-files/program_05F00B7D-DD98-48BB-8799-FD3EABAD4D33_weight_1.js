function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 1073741824;
    this.g = 1073741824;
}
const v3 = new F0();
let v4 = new F0();
const v5 = new F0();
const v6 = [5.0,5.354219245044426,-1000000.0,-72173.7018247617,-3.270821549274605,0.0,291.9924025994908,-2.0];
const v7 = [1.7976931348623157e+308,-Infinity,-1.0648363652785896e+308,-293.600281692924];
const v8 = [-203000.3953381416,4.0];
const v9 = [v4,F0,v6,v8,F0];
const v10 = [F0];
v7 | v10;
Object.defineProperty(v10, v7, { configurable: true, value: v8 });
const v12 = v3[7];
v4 = v5;
new F0();
const v14 = [v3];
function f15(a16, a17) {
    const o28 = {
        toString(a19, a20, a21, a22) {
            a21[a17] = a17;
            const v23 = a20 ** v7;
            try { a22(v23, v14, v14, a21, 2n); } catch (e) {}
            return a17;
        },
        "c": a16,
        [v7]: v7,
    };
    return o28;
}
f15(v9, v5);
f15(v8, v3, v14, v14, v8);
f15(v9, v5, v6, f15, v5);
function f32() {
    try { v12(..."NEGATIVE_INFINITY", ...v8, ..."NEGATIVE_INFINITY", ..."NEGATIVE_INFINITY"); } catch (e) {}
    [-4.0,0.937678522836926,1000000000.0,3.8914370843817974,7.488536112240084,427.1664815501524];
    let v36 = [-984.0558205239627,5.0,-1.0,-878.2833680161506,1000.0,-500922.9942163738,0.8619389621132797,-577.590189484213,-1000.0];
    v36 = [-796.7638582298049,0.23598585853016696,-3.0,1.7976931348623157e+308,167491.92752142414];
    let v39 = "message";
    const o44 = {
        get a() {
            let v41;
            try { v41 = this("NEGATIVE_INFINITY", this, 5.662791040550411e+307); } catch (e) {}
            v39 = v41;
            try {
                super.charAt();
            } catch(e43) {
            }
            return 5.662791040550411e+307;
        },
        3207: 5.662791040550411e+307,
        268435440: v39,
    };
    return o44;
}
const v45 = f32();
const v46 = f32();
const v47 = f32();
function F51(a53, a54, a55) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a53;
    this.d = 1073741825;
}
const v56 = new F51(v47, v47, 3);
const v57 = new F51(v56, v45, 3);
new F51(v45, v57, -31282);
new RangeError(4050);
new Uint8ClampedArray(4055);
new Uint16Array(134, v47, v46);
