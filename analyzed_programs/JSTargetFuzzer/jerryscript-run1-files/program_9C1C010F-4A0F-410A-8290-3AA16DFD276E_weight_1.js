function f0() {
    let v2 = 5;
    const v4 = [2.220446049250313e-16,-1.7976931348623157e+308,-3.4833326659982795,-1000000000000.0,0.0,2.220446049250313e-16,-4.191721618721404,1.4104645033139904e+308];
    ("1073741824").match(v4.copyWithin(v4, v4));
    const o19 = {
        set c(a9) {
            let v8 = this;
            a9 = v2;
            v8.f;
            let v13 = 26593;
            Math.floor(-v8);
            --v8;
            --v2;
            v13++;
        },
        ..."function",
    };
    return o19;
}
const v20 = f0();
const v21 = f0(f0);
const v22 = f0();
const v23 = [v20,v22];
const v24 = [v23,v23];
const v25 = [v24,f0,v23,v24,v20];
const v27 = new Set();
function F28(a30, a31, a32) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = v27;
}
new F28(v25, v25, v21);
new F28(v25, v25, v22);
new F28(v25, v25, v20);
const v36 = [5];
try { v36.flatMap(v36); } catch (e) {}
