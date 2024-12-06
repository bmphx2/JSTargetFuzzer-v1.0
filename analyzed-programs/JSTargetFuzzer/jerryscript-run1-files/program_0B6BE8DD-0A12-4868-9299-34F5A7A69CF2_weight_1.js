new Int32Array(3);
new Uint16Array(9);
new Float32Array(3);
function F15() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -589293468;
}
const v18 = new F15();
const v19 = new F15();
const v20 = new F15();
v19[268435441] = v19;
const v23 = [-5.0,-Infinity];
[0.39187062375380655,7.932800200325886,-1000000000.0,-2.2250738585072014e-308,0.0,1e-15,0.9580764373746904,-520797.25450739264,NaN,-0.0];
[-9.97229079147612];
let v30 = 0.22410269410035233;
const v33 = [426.7417148362349,1000000.0,-937546.0274885385,v20];
const v34 = [1000000.0,-1e-15,v19,v33,-937546.0274885385];
const v35 = [v20,-937546.0274885385,v19];
function f36(a37, a38) {
    const o52 = {
        "b": 426.7417148362349,
        ...Int32Array,
        [v35]: v19,
        __proto__: v19,
        "d": v20,
        "f": a38,
        [a37]: v33,
        set a(a40) {
            this.__proto__ = v34;
            v23[v30] = a37;
            const v42 = Symbol.iterator;
            const o51 = {
                [v42]() {
                    let v44 = 10;
                    const o50 = {
                        next() {
                            v44--;
                            v44 == 0;
                            const o49 = {
                                "done": a40,
                                "value": v44,
                            };
                            return o49;
                        },
                    };
                    return this;
                },
            };
        },
    };
    return o52;
}
f36(v35, v18);
f36(v35, v19);
const v55 = f36(v34, v34);
with (v20) {
    let v56 = a;
    let v58 = `rizPp${v30}number${v55}sticky${426.7417148362349}-29565${v56 || v56}atan2`;
    ({"length":v56,} = v58);
    v30 |= 426.7417148362349;
    let v61 = -9;
    Math.round(v61);
    const v64 = v58++;
    v61++;
    Math.fround(v64);
    Math.sign(3);
    v61 || v30;
}
