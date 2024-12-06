function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a5;
    this.f = a5;
}
new F3("undefined");
new F3("function");
new F3("undefined");
function F9(a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a11;
    this.e = a12;
    this.b = "cmMIX";
}
new F9("undefined", "cmMIX");
new F9("function", "undefined");
new F9(F9, "cmMIX");
[-4.59662766776752e+307,-7.200938279611808,-5.0,-2.6670568313028564,-0.21667151660606798,-1.0326494763543377e+308];
[283770.2157751238,2.0,0.47134567114363457,1e-15,-281542.8842685532,0.681132524167387,-1000000000000.0];
[-855.8381469235827,1000.0,-1.4189789144016539e+308,-588.7650001432205,460.08154040157183,4.0,-1000000.0,5.0,0.0,-5.0];
function f25(a26, a27, a28, a29) {
    const o30 = {
        ...a26,
        0: a27,
    };
    return o30;
}
switch (f25(f25(15, 15, f25, f25))) {
    default:
        break;
    case 15:
        break;
}
const v33 = new Float32Array(1);
new Float64Array(14);
new Float32Array(257);
Float64Array instanceof Float32Array;
const o44 = {
    valueOf() {
        let v43 = super.d;
        v43 |= Boolean;
        return 257;
    },
};
try { v33.entries(); } catch (e) {}
