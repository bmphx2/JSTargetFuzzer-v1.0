function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a6;
    this.a = -65536;
}
new F3(-65536, F3);
const v8 = new F3(-268435456, -65536);
new F3(-65536, v8);
const v14 = ["undefined"];
const v16 = [-52091];
Reflect.apply(("undefined").search, v14, v16);
[-1.7976931348623157e+308,3.0,-1000000000000.0];
[1.0,0.08988191181982241,-754.4375949553275,-138973.53479381907];
[1e-15,0.6234157689732824,0.0,-1e-15,NaN,-2.220446049250313e-16,-1e-15];
function F23() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -589293468;
}
const v26 = new F23();
const v27 = new F23();
const v28 = new F23();
let v30 = -937546.0274885385;
const v35 = [-1e-15,1000000.0,v30,v28];
const v36 = [1000000.0,-1e-15,v27,v35,-1e-15];
const v37 = [v28,v30,v28];
function f38(a39, a40) {
    const o54 = {
        "b": -1e-15,
        ...a40,
        [v37]: v27,
        __proto__: v27,
        "d": v28,
        "f": a40,
        [a39]: v35,
        set a(a42) {
            this.__proto__ = v36;
            v37[0.22410269410035233] = a39;
            const v44 = Symbol.iterator;
            const o53 = {
                [v44]() {
                    let v46 = 10;
                    const o52 = {
                        next() {
                            v46--;
                            const v50 = v46 == 0;
                            const o51 = {
                                "done": v50,
                                "value": v46,
                            };
                            return o51;
                        },
                    };
                    return o52;
                },
            };
        },
    };
    return o54;
}
f38(v37, v26);
f38(v37, v27);
const v57 = f38(v36, v37);
with (v28) {
    let v58 = a;
    let v60 = `rizPp${0.22410269410035233}number${v57}sticky${426.7417148362349}-29565${v58 || v58}atan2`;
    ({"length":v58,} = v60);
    v30 |= 426.7417148362349;
    let v63 = -9;
    Math.round(v63);
    const v66 = v60++;
    v63++;
    Math.fround(v66);
    Math.sign(v63);
    v63 || v60;
}
