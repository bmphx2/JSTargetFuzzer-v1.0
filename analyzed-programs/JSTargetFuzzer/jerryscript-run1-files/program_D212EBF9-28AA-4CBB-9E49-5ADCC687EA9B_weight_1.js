const v4 = new WeakSet();
function f5() {
    return v4;
}
function f9(a10, a11) {
    const o23 = {
        set g(a13) {
            function F14(a16, a17, a18, a19) {
                if (!new.target) { throw 'must be called with new'; }
                this.f = a11;
            }
            const v20 = new F14(WeakSet, a10, -2.5535102600604453, -2.5535102600604453);
            new F14(-2147483649, a11, 0.0, 1e-15);
            new F14(v20, -35509, 0.0, this);
        },
        234: -2.5535102600604453,
        "g": a11,
    };
    return o23;
}
f9(0.0, v4);
f9(0.0, -2147483649);
const v26 = f9(v4, v4);
const v29 = new Array(10);
let v31 = 4096;
function f33(a34, a35, a36, a37) {
    const o47 = {
        "g": v31,
        ...a37,
        "e": a35,
        set b(a39) {
            function F40(a42, a43) {
                if (!new.target) { throw 'must be called with new'; }
                this.g = a34;
            }
            new F40(a37, 129);
            new F40(F40, a36);
            new F40(F40, 481111932);
        },
    };
    return v26;
}
let v48 = f33(v31, 481111932, v31, v29);
f33(f33(-35509, 481111932, 10, f33), v31, 481111932, v31);
v48.g;
try {
    let v52;
    try { v52 = v48.isSealed(); } catch (e) {}
    v48 = v52;
    v31 = v52;
} catch(e53) {
    e53[0] = e53;
    try { e53(v48); } catch (e) {}
}
new Int32Array(1959);
new Int32Array(512);
new Int16Array(213);
