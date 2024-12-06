const v2 = new Int32Array(1000);
new Int8Array(9);
const v8 = new Float64Array(602);
new Set();
class C11 {
    get g() {
        for (let v13 = 0; v13 < 32; v13++) {
            this["p" + v13] = v13;
        }
        return 1000;
    }
    constructor(a17, a18, a19, a20) {
        let v21 = 0;
        do {
            const v22 = v2[a20];
            try { this[this](v22, 1000, "isSealed"); } catch (e) {}
            v21++;
        } while (v21 < 1)
    }
}
new C11(602, v2, 9, 9);
new C11(602, v8, 602, 602);
const v30 = new C11(9, Set, 9, 9);
function f31() {
}
const v36 = [0.014069366437978514,-1000000.0,0.014069366437978514,[-1000000.0,0.014069366437978514,-807.6596022618603,-1000000.0]];
const v37 = [v36,f31,-807.6596022618603];
function* f41(a42, a43, a44, a45) {
    try { a44.padStart(a42, "object"); } catch (e) {}
    const o47 = {
        "construct": f31,
        "ownKeys": f31,
        "preventExtensions": v30,
    };
    new Proxy(v37, o47);
    yield* "object";
    return a42;
}
f41(-807.6596022618603, "U7O", "U7O", v36);
