function f0() {
}
function f1() {
    const o2 = {
        __proto__: f0,
        "h": f0,
        ...f0,
        ...f0,
        [f0]: f1,
        "d": f0,
        "e": f0,
        "c": f0,
        "a": f0,
        1935: f0,
        "g": f0,
        "b": f0,
        "f": f0,
    };
    return o2;
}
const v3 = f1();
const v4 = f1();
f1();
class C6 {
    static [f1] = v3;
    static set d(a8) {
        const o9 = {
            7: a8,
            [v4]: v4,
        };
        const o12 = {
            "call": f1,
            "construct": f1,
            "deleteProperty": f0,
            [a8](a11) {
                for (let i = 0; i < 5; i++) {
                    continue;
                    break;
                }
            },
            "get": f1,
            "getOwnPropertyDescriptor": f0,
            "set": f0,
            "setPrototypeOf": f0,
        };
        new Proxy(v3, o12);
    }
}
const v15 = new f1();
const v16 = new C6();
new C6();
("65537").match(([-16,4]).slice(45103));
function f24(a25, a26, a27, a28) {
    const v31 = new ArrayBuffer(ArrayBuffer, Array);
    Array(v31);
    function f33(a34, a35, a36) {
        a34 += [1000.0,-661455.3517563553,-5.0,-6.127641363150984,1.7976931348623157e+308,NaN,1.0,-784.2669369097914,-1000000000.0];
        return f33;
    }
    f33();
    const o52 = {
        "g": f0,
        ...v16,
        "b": C6,
        ...a28,
        "c": v4,
        "e": a28,
        n(a40, a41, a42) {
            a42[536870912];
            const t68 = super.a;
            t68[0] = this;
            class C48 {
                constructor(a50) {
                    return arguments;
                }
            }
            return -739444412;
        },
    };
    return a27;
}
for (let i54 = 0;
    (() => {
        const v57 = new Uint8Array(1);
        v57.reduceRight(f24);
        Array()["fill"]();
        return i54 < 6;
    })();
    i54++) {
    C6[1725612576];
}
f24(v3, f24(v4, C6, v3, v3), v3, f24(v3, v15, C6, C6));
("d").padStart("d");
