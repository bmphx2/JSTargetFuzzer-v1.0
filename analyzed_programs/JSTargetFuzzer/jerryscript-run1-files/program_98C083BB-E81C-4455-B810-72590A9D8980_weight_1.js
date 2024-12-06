function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 2200;
    this.h = 2200;
    this.b = 2200;
}
const v3 = new F0();
new F0();
const v5 = new F0();
const v7 = new WeakSet();
const v8 = [-9.165521875672146e+307,-829900.4301943489,-1.0929723181108614e+308,-4.775470299802733e+307,-1000.0,-1000000000.0,8.911045670987294e+307,-511.48604386085196,-766029.518596685];
const v9 = [1.0,1.5593926288190375e+308,7.9496556167518015,-5.029421696077944e+307,-1.0674590940043797e+308,-0.0];
const v10 = [-634.1856195535049,-9.47544133149349,2.818798601751041,0.369804463303821,2.2250738585072014e-308,-532.05421553649,-3.0033022019166022,-Infinity,0.49283510676869713];
function f11(a12, a13, a14) {
    const o29 = {
        set f(a16) {
            a14 = v10;
            function F17(a19, a20, a21) {
                if (!new.target) { throw 'must be called with new'; }
                this.h = this;
                this.e = a21;
            }
            new F17(a16, v8, v9);
            new F17(v9, v8, v10);
            const v24 = new F17(v10, v10, a16);
            if (a16) {
                v24[4] = f11;
            } else {
                a13 >> a14;
            }
            [,,a13] = v9;
            v8.__proto__;
            const t31 = v5[this];
            t31.length = 2;
        },
        ...v5,
    };
    return o29;
}
f11(v5, v7, v10);
f11(v3, v7, v8);
f11(v3, v3, v10);
let v33 = 181;
let v35 = new Uint32Array(v33);
let v37 = BigUint64Array;
let v38 = new v37(v33);
let v39 = 253;
[v39,,v37,v38] = v35;
let v41;
try { v41 = v37["abs"](v33, v39, v37); } catch (e) {}
new Uint16Array(v39);
v5[delete v5["abs"]] = v41;
for (let i57 = (() => {
        v35 = v41;
        v37.valueOf = v41;
        v33 = v35;
        v9[-1] = 1073741824;
        function f55() {
            return 638046528;
        }
        return 0;
    })();
    i57 < 2, v38;
    i57++) {
    const v63 = new Function("x");
    v63.name;
}
Function();
