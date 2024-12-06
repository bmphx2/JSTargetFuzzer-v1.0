function f0() {
    const o5 = {
        "e": 44386,
        [44386]: 44386,
        "b": -268435456,
        [-268435456]: -1000000000000.0,
        "d": 44386,
        [-1000000000000.0]: 44386,
        "a": -1000000000000.0,
        "h": -268435456,
        valueOf() {
            super.f = this;
            return this;
        },
        ...f0,
        "f": -1000000000000.0,
        "g": 44386,
        1790: 44386,
    };
    return o5;
}
const v6 = f0();
const v7 = f0();
const v8 = f0();
function f12(a13, a14, a15, a16) {
    const o36 = {
        __proto__: v6,
        get a() {
            try { a15.repeat(-9007199254740992); } catch (e) {}
            let v20 = -36134n;
            v20 %= v20;
            let v21 = 9223372036854775807n;
            v21 &= v20;
            const o29 = {
                [a15]() {
                    function F24(a26, a27, a28) {
                        if (!new.target) { throw 'must be called with new'; }
                        this.c = "1073741824";
                    }
                    return "1073741824";
                },
            };
            const o33 = {
                "defineProperty": f0,
                "deleteProperty": f0,
                "get": f0,
                "isExtensible": f0,
            };
            new Proxy(a16, o33);
            return a14;
        },
    };
    return o36;
}
f12(1000, 302850731, 302850731, v6);
f12(15, 15, 1000, v8);
f12(1000, 302850731, v7, v8);
let v41 = Float32Array;
const v42 = new v41(127);
function F44(a46) {
    if (!new.target) { throw 'must be called with new'; }
}
function f47() {
    return F44;
}
v41 += v41;
let v48;
try { v48 = WeakSet(v42); } catch (e) {}
const v50 = [v48];
Reflect.apply(v42.sort, v42);
v50.flat();
