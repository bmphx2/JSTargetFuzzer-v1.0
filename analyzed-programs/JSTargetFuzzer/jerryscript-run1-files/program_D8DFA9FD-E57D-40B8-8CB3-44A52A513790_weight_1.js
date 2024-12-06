const v6 = [1.5029484534383251e+308,-752.5970730741722,-914.4145013109164,-4.0,2.220446049250313e-16];
const v7 = [0.4269714603769824,6.369985445849029,Infinity,996832.1475637963];
const v8 = [-2.220446049250313e-16,0.6236081536807467,4.0,1.0,1e-15,-902114.9217635163,753633.4770144457,-7.5505908692111445,-2.0,-1000000000.0];
function f9(a10, a11, a12, a13) {
    const o26 = {
        toString(a15, a16, a17, a18) {
            function F19(a21, a22) {
                if (!new.target) { throw 'must be called with new'; }
                this.a = a17;
                this.e = a22;
                this.c = a12;
            }
            const v23 = new F19("byteOffset", -757452530);
            new F19(a15, v6);
            new F19(a10, a12);
            return v23;
        },
    };
    return o26;
}
f9(f9(v8, v7, "17987", f9(v7, v8, "byteOffset", v7)), v6, "17987", v6);
function F30() {
    if (!new.target) { throw 'must be called with new'; }
}
const v32 = new F30();
new F30();
const v34 = new F30();
const v37 = new Array(3565);
const v39 = new WeakSet();
function f43(a44, a45, a46, a47) {
    const o54 = {
        "g": v37,
        ["e"]: a44,
        __proto__: a44,
        valueOf(a49, a50) {
            const v51 = this != a49;
            try { a47(v51); } catch (e) {}
            a50.length += 6.387594296892118;
            return a44;
        },
        "c": a46,
    };
    return o54;
}
const v55 = f43("1176243804", v34, v34);
const v57 = f43("1176243804", v39, f43("d", v34, v34), v55);
function f58(a59, a60) {
    const v61 = new f43(..."1176243804", ...a59, v32, ..."1176243804");
    typeof v61 === "function";
    v39[256];
    return a60;
}
f58("1176243804");
for (let v67 = 0; v67 < 5; v67++) {
    const v69 = "p" + v67;
    const v70 = `
        ("p").length;
    `;
    eval(v70);
    v57[v69] = v67;
}
