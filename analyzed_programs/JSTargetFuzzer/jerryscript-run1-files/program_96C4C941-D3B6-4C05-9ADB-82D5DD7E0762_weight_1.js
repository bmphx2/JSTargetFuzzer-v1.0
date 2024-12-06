const v0 = [-1.0252125966850826e+308,2.2250738585072014e-308,-1000000000.0,-1.7976931348623157e+308,-1000000.0,630685.5927917482,-1000000.0,85.311550904966,-718.129923992469,377478.0167567397];
const v1 = [-1e-15,-353591.98354992643,0.08629111907648301,-3.0,-1000000000000.0];
let v2 = [340.8821056495092,1e-15,0.800001694663932,-302.90160249661426,-2.0,1.0816615854895715e+307,1.501181789641991e+308,-5.271665702852664e+307,-1e-15,1000000.0];
function f3(a4) {
    const o15 = {
        get f() {
            const o6 = {
            };
            new Proxy(this, o6);
            return a4;
        },
        "f": a4,
        "e": a4,
        m(a10) {
            v1.length = this;
            this.valueOf = v2;
            try { new a4(); } catch (e) {}
            v2 = v1;
            return this;
        },
    };
    return o15;
}
const v16 = f3(v1);
f3(v1);
const v18 = f3(v2);
function f19(a20, a21, a22) {
    const o28 = {
        ...a20,
        __proto__: v2,
        "d": v2,
        ...a21,
        ...v16,
        get f() {
            const v24 = v16[this];
            v1[v24] = v24;
            typeof v24 === "symbol";
            a22[-1] = v16;
            return a22;
        },
        "c": f3,
    };
    return o28;
}
const v29 = f19(v16, v0, v0);
const v30 = f19(v16, v0, v0);
const v31 = f19(v16, v1, v2);
function f35(a36, a37, a38, a39) {
    const o57 = {
        ...a37,
        "g": v31,
        n(a41, a42, a43, a44) {
            for (const v45 in v1) {
                a36 instanceof f19;
                new f3(a43);
                v45 - a39;
                let v51 = -2.2250738585072014e-308;
                const v52 = --v51;
                +4294967297;
                Math.floor(v52);
                v52 >>> v51;
                Math.exp(v1);
            }
            return a37;
        },
    };
    return o57;
}
let v58 = f35(1000000000.0, v18, 1000000000.0, v29);
f35(1000000.0, v18, NaN, v30);
f35(1000000.0, v18, 1000000000.0, v31);
new BigInt64Array(256);
const v69 = new Uint32Array(227);
new Uint16Array(129);
function F73(a75, a76) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a76;
}
new F73(256, 129);
new F73(v69, 227);
new F73(v69, 129);
function f80() {
}
new Uint8Array(227);
const v94 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
new Int32Array(v94);
v58 /= v94;
new WeakSet();
new BigInt64Array(2);
([5]).reverse();
