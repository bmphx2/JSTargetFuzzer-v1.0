const v0 = [988284538,-9007199254740992,2061,-11,-65537,-1];
const v1 = [268435439,-268435456,-4294967297,13,2570,388375540,-4847];
const v2 = [9,-42768,255,2147483649];
function f3(a4) {
    const o7 = {
        "a": v0,
        "f": v1,
        "d": v2,
        "e": v0,
        get b() {
            let v5 = this;
            const v6 = super.d;
            ({"a":a4,"length":v5,} = v2);
            v1[v6] = a4;
            return v0;
        },
    };
    return o7;
}
f3(v0);
f3(v2);
f3(v1);
[-3,1304295740,268435439,2046714984,-1956527751,1100017988,9,-9007199254740991];
[6,-51488,1024,52060,-4,28804,65537,9007199254740990,-4096,-2147483648];
[-6,-536870912,512,-1,9];
const v16 = new Array(10);
let v18 = 4096;
function f20(a21, a22, a23, a24) {
    const o34 = {
        "g": v18,
        ...a24,
        "e": a22,
        set b(a26) {
            function F27(a29, a30) {
                if (!new.target) { throw 'must be called with new'; }
                F27.g = a29;
            }
            new F27(a24, 129);
            new F27(a23, a23);
            new F27(F27, 481111932);
        },
    };
    return o34;
}
let v35 = f20(v18, 129, 129, v16);
f20(10, 481111932, 10, f20);
f20(v35, v18, 481111932, v18).g;
try {
    let v39;
    try { v39 = v35.isSealed(); } catch (e) {}
    v35 = v39;
    v18 = v39;
} catch(e40) {
    e40[0] = e40;
    try { e40(Array); } catch (e) {}
}
new Int32Array(1959);
new Int32Array(512);
new Int16Array(213);
