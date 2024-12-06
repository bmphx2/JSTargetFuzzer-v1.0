function f0() {
    const o9 = {
        "h": -2.0,
        ...-15,
        "b": -15,
        get g() {
            with (-15) {
                h = -256;
                -256 | this;
            }
            return -256;
        },
        "e": f0,
        ...-15,
    };
    return o9;
}
f0();
typeof -268435456;
f0();
f0();
function f15() {
    return f0;
}
[-1000.0,1.288116195718133e+307,0.13188586484224396,-1000000000000.0,-4.0,3.0,862.7637958534656,-820395.4030426006];
[-1000000.0,8.055416392369903,-894.9637915266044];
[-5.0,4.471555202320804,528067.1780419238,2.220446049250313e-16,-1000000000.0];
function f25() {
    return f0;
}
new Array(10);
let v30 = 4096;
function f32(a33, a34, a35, a36) {
    const o46 = {
        "g": v30,
        ...a36,
        "e": a34,
        set b(a38) {
            function F39(a41, a42) {
                if (!new.target) { throw 'must be called with new'; }
                this.g = a41;
            }
            new F39(a36, 129);
            new F39(a35, a35);
            new F39(F39, 481111932);
        },
    };
    return o46;
}
let v47 = f32(v30, 481111932, 129, 9223372036854775807);
f32(10, 481111932, 10, f32);
f32(v47, v30, 481111932, v30);
v47.g;
try {
    let v51;
    try { v51 = v47.isSealed(); } catch (e) {}
    v47 = v51;
    v30 = v51;
} catch(e52) {
    e52[0] = e52;
    try { e52(Array); } catch (e) {}
}
new Int32Array(1959);
new Int32Array(512);
new Int16Array(213);
