const v3 = [268435439,268435456,268435439,13795,268435456];
const v4 = [268435456];
const v5 = [v4,v4];
const v6 = [v5,v5,268435439,268435456,13795];
[268435456,268435456,[v3,268435456,v5,v6]];
function F10() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 2147483647;
    this.a = 2147483647;
}
const v17 = new Array(10);
let v19 = 4096;
function f21(a22, a23, a24, a25) {
    const o35 = {
        "b": v19,
        "g": a23,
        [v6]: v19,
        __proto__: a25,
        2: -1987297532,
        "g": v19,
        ...a25,
        "e": a23,
        set b(a27) {
            function F28(a30, a31) {
                if (!new.target) { throw 'must be called with new'; }
                this.g = a30;
            }
            new F28(a25, 129);
            new F28(a24, a24);
            new F28(F28, 481111932);
        },
    };
    return o35;
}
let v36 = f21(v19, 481111932, 129, v17);
f21(10, 481111932, 10, f21);
const v38 = f21(v36, v19, 481111932, v19);
v36.g;
try {
    let v40;
    try { v40 = v36.isSealed(); } catch (e) {}
    v36 = v40;
    v19 = v40;
} catch(e41) {
    e41[0] = e41;
    try { e41(Array); } catch (e) {}
}
new Int32Array(1959);
new Int32Array(512);
v38.f = -51901;
let v50 = 1073741824n;
++v50;
typeof "b";
new Int16Array(213);
