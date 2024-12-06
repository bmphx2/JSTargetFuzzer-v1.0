const v4 = new WeakMap();
class C5 extends WeakMap {
    static get b() {
        let {"c":v7,"h":v8,...v9} = v4;
        super.b = v4;
        this[384];
        return 14934;
    }
    static d = v4;
    b;
    e = WeakMap;
}
new C5();
new C5();
new C5();
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
    const o54 = {
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
            const o53 = {
                [v41]() {
                    const v43 = [2.2250738585072014e-308,-3.0523145138510728,8.8528793692258,Infinity,-1.0,-9.967973400042263,0.9935714796792462,808174.2085289448,0.3227943248176133];
                    const o44 = {
                        __proto__: v43,
                    };
                    function f45() {
                        return f45;
                    }
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
f35(v34, v23);
f35(v34, v24);
const v57 = f35(v33, v34);
with (v25) {
    let v58 = a;
    let v60 = `rizPp${0.22410269410035233}number${v57}sticky${426.7417148362349}-29565${v58 || v58}atan2`;
    ({"length":v58,} = v60);
    v27 |= 426.7417148362349;
    let v63 = -9;
    Math.round(v63);
    const v66 = v60++;
    v63++;
    Math.fround(v66);
    Math.sign(v63);
    v63 || v60;
}
