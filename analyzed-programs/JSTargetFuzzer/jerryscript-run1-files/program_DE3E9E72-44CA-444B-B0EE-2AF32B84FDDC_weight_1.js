const v1 = new WeakSet();
function f2(a3) {
    const o17 = {
        "g": WeakSet,
        "h": WeakSet,
        __proto__: a3,
        "a": v1,
        [WeakSet](a5) {
            const v7 = Symbol.iterator;
            const o16 = {
                [v7]() {
                    let v9 = 10;
                    const o15 = {
                        next() {
                            v9--;
                            v9 == 0;
                            const o14 = {
                                "done": a5,
                                "value": v9,
                            };
                            return o14;
                        },
                    };
                    return o15;
                },
            };
            return this;
        },
    };
    return v1;
}
const v18 = f2(f2);
const v19 = f2(WeakSet);
f2(v18);
function f21() {
    return v19;
}
new Map();
new Array(5);
class C33 {
    static get a() {
        const o37 = {
            "maxByteLength": 268435439,
        };
        const v39 = new SharedArrayBuffer(1278, o37);
        v39.byteLength;
        o37[-622135.0466104625];
        const o43 = {
        };
        new f21(v39, o43);
        new Uint32Array(v39);
        return o37;
    }
}
new C33();
const v48 = new C33();
const v49 = new C33();
class C50 extends C33 {
    static set c(a52) {
        let v53;
        try { v53 = a52(v48, v48, a52); } catch (e) {}
        Object.defineProperty(v49, this, { writable: true, configurable: true, value: v53 });
        new Float32Array(4096);
        new Float32Array(1);
        new BigUint64Array(8);
    }
}
new C50();
new WeakSet();
new C50();
const v73 = [-16,4];
const v74 = [-1124966260,9223372036854775807,9,-1022811835,14,-9223372036854775807,-954173599,592825194,-1892405619,4294967296];
const v75 = [-4294967295,14,219268071,1317141055,2];
const v79 = delete v74[-9];
try { v73.slice(45103); } catch (e) {}
const o81 = {
    __proto__: v73,
    "d": -2,
    3943951267: 536870889,
    "a": v79,
    [C50]: 4294967297,
    "e": v73,
    "g": 26157,
    "c": v75,
    ...C33,
    "e": 45103,
};
