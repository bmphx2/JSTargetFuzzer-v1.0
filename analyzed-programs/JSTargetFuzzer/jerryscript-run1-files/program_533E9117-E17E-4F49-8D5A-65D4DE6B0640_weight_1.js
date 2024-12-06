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
}
const v15 = new F9(v7, v7, WeakMap, v7);
new F9(v6, v8, v1, v8);
new F9(v6, v7, v15, v7);
const v22 = [2036046200,-9223372036854775807,-61646];
const v24 = v22["map"](Array);
try {
    new BigUint64Array(v24);
} catch(e27) {
    const v28 = [v22,v22,v22,v22,v22];
    function f29(a30) {
        return f29;
    }
    class C31 extends f29 {
    }
    for (let i34 = 0, i35 = 10; i34 < i35;) {
        const v41 = [-35.9907096880105,-753.3103121236893,2.0,1.0391535673433964e+308,-1.7013521965165265e+308,-5.0,-1.656785925253001e+308,2.0];
        const v44 = v41 < "POSITIVE_INFINITY" ? v41 : "POSITIVE_INFINITY";
        for (let v45 = 0; v45 < 5; v45++) {
            [v45,v45,v45,v45] = v44;
        }
        ({"f":i35,"length":i34,...C31} = v28);
    }
} finally {
}
