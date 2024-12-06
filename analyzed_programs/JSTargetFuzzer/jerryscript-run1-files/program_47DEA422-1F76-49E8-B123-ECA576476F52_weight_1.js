function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = -65536;
    try { this["p"](); } catch (e) {}
}
const v8 = new F0();
const v9 = new F0();
const v10 = new F0();
function F11(a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a13;
    this.g = a13;
}
const v14 = new F11(F0);
const v15 = new F11(v14);
const v16 = delete v15[F11];
v15.__proto__ = v9;
function F17(a19, a20, a21) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a19;
    this.b = F11;
}
const v22 = new F17(v10, v8, v8);
const v23 = new F17(v8, v22, v8);
new F17(v8, v9, v23);
const v25 = new F11(v15);
const o26 = {
    __proto__: v10,
    "c": F0,
    "b": v8,
    "h": v15,
    "a": v16,
    [v25]: v22,
    "d": v10,
    "g": F0,
    "f": F17,
};
const v27 = [9.050342717559278e+307,-3.0,-122.69093545531587,-Infinity,-8.127313229522628,-1000000000.0];
Object.defineProperty(v14, 5, { value: v16 });
[2.2250738585072014e-308,858897.818561445,-55860.88508023694,808606.6571119905];
[304315.4315109553];
[1e-15,0.9141160742560692,-1000000.0,-607882.7683123527,-1.6252836627562746e+308,4.0,5.647499737338888];
const v35 = [-195.74512922464442];
const v37 = ([-3.379867677176711,419916.5602049269,-364183.66610454326,-7.029963782714914e+307,704.4147150551664,0.34737208318234436,Infinity,-1.7976931348623157e+308,-1e-15,314239.9711375057])[1];
o26[58];
async function f39(a40, a41, a42) {
    let v44 = 0;
    new Array(v44 **= a42);
    return v44;
}
f39();
v25[v35] = v10;
let v47;
try { v47 = v37(o26, v8, v9); } catch (e) {}
try { v47["n"](o26, o26, v15, v27, v35); } catch (e) {}
const v51 = new Map();
v51.keys();
