class C3 {
    [16] = 1;
    p(a5) {
        function F7(a9, a10, a11) {
            if (!new.target) { throw 'must be called with new'; }
            this.a = a5;
            this.b = a11;
            this.c = 255;
        }
        new F7(255, 1, 16);
        new F7(a5, 1, a5);
        const v14 = new F7(1, 255, a5);
        return v14;
    }
}
const v15 = new C3();
const v16 = new C3();
const v17 = new C3();
function f18(a19, a20, a21) {
    const o28 = {
        p(a23, a24) {
            this.toString = a23;
            typeof a24 === "bigint";
            return a23;
        },
        "g": v17,
        __proto__: v15,
        ...v16,
    };
    return o28;
}
const v29 = f18(16, 16, 1);
f18(16, v29, 16, v29, v16);
f18(16, v17, 1);
const v37 = new Uint8Array(512);
new Int16Array(447);
new Uint32Array(2438);
function f47() {
}
v37.description <<= 2006448021;
const v55 = [2.220446049250313e-16,-1.7976931348623157e+308,-3.4833326659982795,-1000000000000.0,0.0,2.220446049250313e-16,-4.191721618721404,1.4104645033139904e+308];
("constructor").match(v55.copyWithin(v55, v55));
new Uint8Array(0);
const v65 = [-8,4294967295,148900462];
const v67 = new Float32Array();
v67[v67] = v67;
let v68 = RegExp.bind("2147483647", v65);
const v70 = new Int32Array(127);
v68 /= v70;
new WeakSet();
new BigInt64Array(2);
([5]).reverse();
