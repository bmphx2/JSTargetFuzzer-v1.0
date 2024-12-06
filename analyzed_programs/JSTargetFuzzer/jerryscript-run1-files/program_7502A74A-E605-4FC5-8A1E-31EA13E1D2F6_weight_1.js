function f0() {
}
function f1() {
    return f0;
}
function f2(a3, a4) {
    const o18 = {
        [a4]: a4,
        "e": a4,
        __proto__: a4,
        "f": f1,
        set b(a6) {
            const v7 = a6 - this;
            f1 = a4;
            f0 && v7;
            new Int8Array(f2);
            new Uint16Array(9);
            new Uint32Array(257);
        },
    };
    return o18;
}
const v20 = f2(f0, f1(f0, f0));
f2(f0, f0);
[-9.680369072370094e+307,0.9380995283499891,-267420.24347570154,-3.0,-Infinity];
[759.1476306815753,-2.2250738585072014e-308,-0.0];
const v24 = [-1000000000000.0,-3.0,1000.0,1000000000000.0,-293.7214815198886,0.3142957180877236,1.7976931348623157e+308,-5.510623556398047,1e-15];
const v26 = new f1();
const v27 = [v20,v26];
let v28 = [v27,f0];
[v24,v27,f2];
const v32 = new Array(10);
function f36(a37, a38, a39, a40) {
    const o41 = {
        ...a40,
    };
    return a38;
}
let v42 = f36(4096, 481111932, 129, v32);
f36(10, 481111932, 10, f36);
f36(v42, 4096, 481111932, 4096);
v42.g;
try {
    let v46;
    try { v46 = v42.isSealed(); } catch (e) {}
    v42 = v46;
    v28 = v46;
} catch(e47) {
    e47[0] = e47;
    try { e47(Array); } catch (e) {}
}
