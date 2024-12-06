function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 1024;
    this.c = 1024;
}
new F0(F0);
const v4 = new F0();
const v5 = new F0();
function F9(a11, a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = F0;
    this.a = 8;
}
new F9(4, v4, 8);
new F9(4, v5, 4);
new F9(4, v4, 4);
function F20() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -589293468;
}
const v23 = new F20();
const v24 = new F20();
const v25 = new F20();
let v27 = -937546.0274885385;
const v32 = [-1e-15,1000000.0,v27,v25];
const v33 = [1000000.0,-1e-15,v24,v32,-1e-15];
const v34 = [v25,v27,v25];
function f35(a36, a37) {
    const o51 = {
        "b": -1e-15,
        ...a37,
        [v34]: v24,
        __proto__: v24,
        "d": v25,
        "f": a37,
        [a36]: v32,
        set a(a39) {
            this.__proto__ = v33;
            v34[0.22410269410035233] = a36;
            const v41 = Symbol.iterator;
            const o50 = {
                [v41]() {
                    let v43 = 10;
                    const o49 = {
                        next() {
                            v43--;
                            const v47 = v43 == 0;
                            const o48 = {
                                "done": v47,
                                "value": v43,
                            };
                            return o48;
                        },
                    };
                    return o49;
                },
            };
        },
    };
    return o51;
}
f35(v34, v23);
f35(v34, v24, 426.7417148362349);
const v54 = f35(v33, v34);
with (v25) {
    let v55 = a;
    let v57 = `rizPp${0.22410269410035233}number${v54}sticky${426.7417148362349}-29565${v55 || v55}atan2`;
    ({"length":v55,} = v57);
    v27 |= 426.7417148362349;
    let v60 = -9;
    Math.round(v60);
    const v63 = v57++;
    v60++;
    Math.fround(v63);
    Math.sign(v60);
    v60 || v57;
}
