const v0 = [];
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = v0;
}
const v3 = new F1();
const v4 = new F1();
const v5 = new F1();
function F9(a11, a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a12;
    this.b = v3;
    this.f = a12;
}
const v15 = new F9(1702065897, 1702065897, F1, -55624);
new F9(-55624, 83926045, v0, 1702065897);
for (let v17 = 0; v17 < 31; v17++) {
    try { v3.getUTCDate(v5); } catch (e) {}
    try { v5.getUint32(83926045); } catch (e) {}
}
v4[6] += 1702065897;
new F9(-55624, -55624, 83926045, 1702065897);
let v26 = -1992735215;
function f27(a28, a29) {
    const o48 = {
        "d": a28,
        set b(a31) {
            let v32;
            try { v32 = a31(a31, this); } catch (e) {}
            v26 = a29;
            v32.valueOf = a31;
        },
        get c() {
            const v34 = [this];
            const v36 = Symbol.iterator;
            const o45 = {
                [v36]() {
                    let v38 = 10;
                    const o44 = {
                        next() {
                            v38--;
                            const v42 = v38 == 0;
                            const o43 = {
                                "done": v42,
                                "value": v38,
                            };
                            return o43;
                        },
                    };
                    return o44;
                },
            };
            const v46 = [545904634,a28,v34,this,v34];
            [v46,a28,v46];
            return a29;
        },
    };
    return o48;
}
f27(3, v26);
f27(v26, 545904634, v4, v15, 3);
f27(v26, v26);
new Int32Array(249);
new Int32Array(2380);
const v60 = new Float32Array(3269);
v60[v60] = v60;
class C62 {
    [Int32Array] = 249;
    static [2380];
    e;
}
new C62();
new C62();
new C62();
