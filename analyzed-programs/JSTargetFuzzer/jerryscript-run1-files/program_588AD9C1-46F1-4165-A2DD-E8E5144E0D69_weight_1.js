function f0() {
    const o33 = {
        ["valueOf"](a5, a6) {
            const v7 = this.c;
            const v9 = Symbol.iterator;
            const o32 = {
                [v9]() {
                    let v11 = 10;
                    const o31 = {
                        next() {
                            v11--;
                            const v19 = Symbol.iterator;
                            const o28 = {
                                [v19]() {
                                    const o27 = {
                                        next() {
                                            let v22 = this;
                                            v22--;
                                            const v25 = 10 == 0;
                                            const o26 = {
                                                "done": v25,
                                                "value": 10,
                                            };
                                            return o26;
                                        },
                                    };
                                    return o27;
                                },
                            };
                            const v29 = v11 == 0;
                            const o30 = {
                                "done": v29,
                                "value": v11,
                            };
                            return a5;
                        },
                    };
                    return o31;
                },
            };
            return v7;
        },
    };
    return o33;
}
f0();
const v35 = f0();
const v36 = f0();
function F37(a39, a40) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = v36;
    this.h = a40;
    this.g = a40;
}
new F37(F37, v36);
const v42 = new F37(v35, v35);
new F37(v42, v42);
new Uint8ClampedArray(4096);
new Uint16Array(256);
new Uint32Array(1493);
function f65() {
    const o87 = {
        __proto__: "-536870912",
        "d": "-536870912",
        "g": "-536870912",
        ..."-536870912",
        "c": 1.7976931348623157e+308,
        9: -24152,
        "h": -24152,
        get f() {
            this[7] = -24152;
            let v70;
            try { v70 = this.n(this); } catch (e) {}
            let [v71,v72] = v70;
            new v70(3);
            new Int8Array(8);
            new Int8Array(3692);
            return 3692;
            +-2;
            for (let [v85,v86] of "resizable") {
            }
            return "-536870912";
        },
    };
    return o87;
}
const v88 = f65();
const v89 = f65();
const v90 = f65();
class C97 extends f65 {
    constructor(a99, a100, a101, a102) {
        super();
        const o105 = {
            "call": -1957950668,
            "construct": f65,
            "defineProperty": f65,
            get b() {
                return this;
            },
            p() {
                this[C97] = this;
                return C97;
            },
            "get": f65,
            "getOwnPropertyDescriptor": f65,
            "has": f65,
            "isExtensible": f65,
            "set": f65,
            "setPrototypeOf": f65,
        };
        new Proxy(this, o105);
    }
}
new Uint8Array(4);
new Int32Array(2592);
new Uint32Array(2592, 2592);
new Uint32Array();
const v117 = new C97(-19870386, -341266709, v89, 9007199254740990);
let v118 = new C97(v117, -1957950668, v117, 9007199254740990);
try {
    function f119() {
    }
    const v123 = [-1000000.0,f119,-807.6596022618603,-1000000.0];
    const v124 = [v123,-1000000.0,0.014069366437978514,v123];
    const v125 = [v124,f119,-807.6596022618603];
    function* f129(a130, a131, a132, a133) {
        try { a132.padStart(a130, "object"); } catch (e) {}
        const o135 = {
            "construct": f119,
            "ownKeys": f119,
            "preventExtensions": f119,
        };
        new Proxy(v125, C97);
        yield* "object";
        return a130;
    }
    f129(-807.6596022618603, "U7O", "U7O", v124);
} finally {
}
const v141 = new Uint32Array([6,17590]);
new Proxy(v141, v117);
let v144 = new C97(v90, 9007199254740990, v88, -341266709);
if (v89 <= v144) {
    v144 = C97;
} else {
    let {"b":v147,"d":v148,} = C97;
    C97[-4096] += -4096;
}
v118 <<= v117;
9007199254740990 <= v88 ? 9007199254740990 : v88;
