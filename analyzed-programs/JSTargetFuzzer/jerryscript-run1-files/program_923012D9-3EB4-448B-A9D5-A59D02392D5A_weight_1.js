class C3 {
    1073741824;
    o(a5, a6) {
        const v7 = 1n && a5;
        a6 = this;
        this.g -= a5;
        a6[a6];
        delete a6[65536];
        return v7;
    }
}
new C3();
new C3();
new C3();
const v24 = new Array(10);
let v26 = 4096;
function f28(a29, a30, a31, a32) {
    const o42 = {
        "g": v26,
        ...a32,
        "e": a30,
        set b(a34) {
            function F35(a37, a38) {
                if (!new.target) { throw 'must be called with new'; }
                this.g = a37;
            }
            new F35(a32, 129);
            new F35(a31, a31);
            new F35(F35, 481111932);
        },
    };
    return o42;
}
let v43 = f28(v26, 481111932, 129, v24);
f28(10, 481111932, 10, f28);
f28(v43, v26, 481111932, v26);
v43.g;
try {
    let v47;
    try { v47 = v43.isSealed(); } catch (e) {}
    v47[7] = -24152;
    new v47(9);
    async function f51(a52, a53, a54, a55) {
        return a55;
    }
    v43 = v47;
    v26 = v47;
} catch(e56) {
    e56[0] = e56;
    try { e56(Array); } catch (e) {}
}
new Int32Array(1959);
new Int32Array(512);
new Int16Array(213);
