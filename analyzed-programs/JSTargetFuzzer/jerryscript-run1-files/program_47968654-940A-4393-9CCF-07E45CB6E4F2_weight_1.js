function f0() {
    const o9 = {
        get a() {
            while (0 < this) {
            }
            return this;
        },
        __proto__: "MAX_SAFE_INTEGER",
        "e": 21554,
        get h() {
            return false;
        },
        "f": 0.8433774079808196,
        "a": 21554,
        ..."MAX_SAFE_INTEGER",
        "b": 0.8433774079808196,
        "h": 21554,
    };
    return o9;
}
const v10 = f0();
const v11 = f0();
const v12 = f0();
function f16(a17, a18, a19) {
    const o28 = {
        [f0](a21, a22, a23) {
            a23 <<= this % a21;
            return v10;
        },
        "c": a17,
        [-10]: -10,
        "g": a19,
    };
    return o28;
}
f16(-10, v10, v10);
const v31 = Symbol.iterator;
const o40 = {
    [v31]() {
        let v33 = 10;
        const o39 = {
            next() {
                v33--;
                const v37 = v33 == 0;
                const o38 = {
                    "done": v37,
                    "value": v33,
                };
                return o38;
            },
        };
        return o39;
    },
};
f16(-9007199254740991, v11, v12);
f16(-10, v10, v11);
function F43() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -589293468;
}
const v46 = new F43();
const v47 = new F43();
const v48 = new F43();
let v50 = -937546.0274885385;
const v55 = [-1e-15,1000000.0,v50,v48];
const v56 = [1000000.0,-1e-15,v47,v55,-1e-15];
const v57 = [v48,v50,v48];
function f58(a59, a60) {
    const o77 = {
        "b": -1e-15,
        ...a60,
        [v57]: v47,
        __proto__: v47,
        "d": v48,
        "f": a60,
        [a59]: v55,
        set a(a62) {
            this.__proto__ = v56;
            v57[0.22410269410035233] = a59;
            const v64 = Symbol.iterator;
            const o76 = {
                [v64]() {
                    let v66 = 10;
                    const o75 = {
                        next() {
                            v66--;
                            const v70 = v66 == 0;
                            const o74 = {
                                "done": v70,
                                "value": v66,
                                valueOf(a72) {
                                    super.getOwnPropertyDescriptors(this, 0, -9007199254740991, v66);
                                    return a72;
                                },
                                "get": a62,
                            };
                            return o74;
                        },
                    };
                    return o75;
                },
            };
        },
    };
    return o77;
}
f58(v57, v46);
f58(v57, v47);
const v80 = f58(v56, v57);
with (v48) {
    let v81 = a;
    let v83 = `rizPp${0.22410269410035233}number${v80}sticky${426.7417148362349}-29565${v81 || v81}atan2`;
    ({"length":v81,} = v83);
    v50 |= 426.7417148362349;
    let v86 = -9;
    Math.round(v86);
    const v89 = v83++;
    v86++;
    Math.fround(v89);
    Math.sign(v86);
    v86 || v83;
}
