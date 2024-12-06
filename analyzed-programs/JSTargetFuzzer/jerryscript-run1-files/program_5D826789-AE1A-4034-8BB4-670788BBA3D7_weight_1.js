[-14638721,8,-256,127,2,-168258471,-33267];
[-256,-9007199254740990];
const v11 = [4096,-11,5,103444640,4];
function F15() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -589293468;
}
const v18 = new F15();
const v19 = new F15();
const v20 = new F15();
let v22 = -937546.0274885385;
[55781,[[-10,v11,-14],v20,55781]];
const v33 = [-1e-15,1000000.0,v22,v20];
const v34 = [1000000.0,-1e-15,v19,v33,-1e-15];
const v35 = [v20,v22,v20];
function f36(a37, a38) {
    const o52 = {
        "b": -1e-15,
        ...a38,
        [v35]: v19,
        __proto__: v19,
        "d": v20,
        "f": a38,
        [a37]: v33,
        set a(a40) {
            this.__proto__ = v34;
            v35[0.22410269410035233] = a37;
            const v42 = Symbol.iterator;
            const o51 = {
                [v42]() {
                    let v44 = 10;
                    const o50 = {
                        next() {
                            v44--;
                            const v48 = v44 == 0;
                            const o49 = {
                                "done": v48,
                                "value": v44,
                            };
                            return o49;
                        },
                    };
                    return o50;
                },
            };
        },
    };
    return o52;
}
f36(v35, v18);
f36(v35, v19);
const v55 = f36(v34, v35);
with (v20) {
    let v56 = a;
    let v58 = `rizPp${0.22410269410035233}number${v55}sticky${426.7417148362349}-29565${v56 || v56}atan2`;
    ({"length":v56,} = v58);
    v22 |= 426.7417148362349;
    let v61 = -9;
    Math.round(v61);
    const v64 = v58++;
    v61++;
    Math.fround(v64);
    Math.sign(v61);
    v61 || v58;
}
