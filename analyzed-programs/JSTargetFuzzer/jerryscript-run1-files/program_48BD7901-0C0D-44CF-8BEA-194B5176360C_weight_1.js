function f3(a4) {
    const o7 = {
        ...a4,
        "h": 58228,
        ...a4,
        get c() {
            ~this;
            this[3035] = 2;
            return a4;
        },
        "b": 58228,
        "e": 2,
    };
    return o7;
}
f3(f3);
f3(f3);
const v10 = f3(2);
function f11() {
    return v10;
}
[-2147483647,11,-2147483647];
const v13 = [8,1925649100,-65537,6,10000,2147483649];
const v14 = [-65535,1073741825,-2147483648,268435439,37666,64,-1049,-41577,16];
function F15() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -589293468;
}
const v18 = new F15();
const v19 = new F15(16, v14);
const v20 = new F15();
let v25 = -2.220446049250313e-16;
const v27 = [-1e-15,1000000.0,-937546.0274885385,v20];
const v28 = [426.7417148362349,-1e-15,v19,v27,-1e-15,426.7417148362349,v25];
const v29 = [v20,-937546.0274885385,v20];
function f30(a31, a32) {
    const o46 = {
        "b": -1e-15,
        ...a32,
        [v29]: v19,
        __proto__: v19,
        "d": v20,
        "f": a32,
        [a31]: v27,
        set a(a34) {
            this.__proto__ = v28;
            v29[426.7417148362349] = a31;
            const v36 = Symbol.iterator;
            const o45 = {
                [v36]() {
                    let v38 = 10;
                    const o44 = {
                        next() {
                            v38--;
                            const v42 = v38 == 0;
                            const o43 = {
                                "done": v42,
                                "value": v38,
                            };
                            return o43;
                        },
                    };
                    return o44;
                },
            };
        },
    };
    return o46;
}
f30(v13, v18);
f30(v29, v19);
const v49 = f30(v28, v29);
with (v49) {
    let v50 = a;
    let v52 = `rizPp${0.22410269410035233}number${v49}sticky${426.7417148362349}-29565${v50 || v50}atan2`;
    ({"length":v50,} = v52);
    v25 |= 426.7417148362349;
    let v55 = -9;
    Math.round(v55);
    const v58 = v52++;
    v55++;
    Math.fround(v58);
    Math.sign(v55);
    v55 || v52;
}
