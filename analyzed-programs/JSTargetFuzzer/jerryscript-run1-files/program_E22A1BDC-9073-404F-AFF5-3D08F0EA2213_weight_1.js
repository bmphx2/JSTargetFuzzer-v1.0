const v0 = [-2.2250738585072014e-308,-3.0,-1000.0,54386.48312880425,-3.0,Infinity,-7.766747675054774e+307,1.7976931348623157e+308,-2.2250738585072014e-308,2.2250738585072014e-308];
const v1 = [-2.220446049250313e-16,0.0,755.0116847944194,-5.0];
const v2 = [5.0,694.8939301230307,-4.101361412691591,-2.220446049250313e-16,-3.0];
const v3 = [v2,v2,v1];
[v0,v3,[v2,v1,v2,v3,v2]];
new WeakSet();
function F11() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -589293468;
}
const v14 = new F11();
const v15 = new F11();
const v16 = new F11();
let v17 = -1e-15;
let v18 = -937546.0274885385;
const v24 = [1000000.0,v17,v15,[v17,1000000.0,v18,v16],v17];
const v25 = [v16,v18,v16];
function f26(a27, a28) {
    const o42 = {
        "b": v17,
        ...v24,
        [v25]: v15,
        __proto__: v15,
        "d": v16,
        "f": a28,
        [a27]: v2,
        set a(a30) {
            this.__proto__ = v24;
            v25[0.22410269410035233] = a27;
            const v32 = Symbol.iterator;
            const o41 = {
                [v32]() {
                    let v34 = 10;
                    const o40 = {
                        next() {
                            v34--;
                            const v38 = v34 == 0;
                            const o39 = {
                                "done": v38,
                                "value": v34,
                            };
                            return o39;
                        },
                    };
                    return o40;
                },
            };
        },
    };
    return o42;
}
f26(v25, v14);
f26(v25, v15);
const v45 = f26(v24, v25);
with (v16) {
    let v46 = a;
    const v48 = `rizPp${0.22410269410035233}number${v45}sticky${426.7417148362349}-29565${v46 || v46}atan2`;
    ({"length":v46,} = v48);
    v18 |= 426.7417148362349;
    let v51 = -9;
    Math.round(v51);
    const v54 = v17++;
    v51++;
    Math.fround(v54);
    Math.sign(v51);
    v51 || v48;
}
