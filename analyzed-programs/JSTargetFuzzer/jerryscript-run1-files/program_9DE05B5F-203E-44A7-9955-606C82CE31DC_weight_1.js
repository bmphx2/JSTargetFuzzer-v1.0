function f3(a4, a5) {
    const o6 = {
        __proto__: a4,
        "c": a5,
        9: a4,
        "f": a5,
        1073741824: a4,
        ...a5,
        1403: -1000000.0,
        "g": a5,
        "e": a4,
        ...130.05842610496302,
        "a": a4,
        [a5]: 130.05842610496302,
    };
    return o6;
}
const v7 = f3(-1000000.0, 130.05842610496302);
const v8 = f3(-1000000.0, -1000000.0);
const v9 = f3(-1000000.0, -1000000.0);
function f13(a14, a15, a16, a17) {
    const o25 = {
        ...a15,
        __proto__: v8,
        "e": a15,
        "a": 1073741824,
        "h": a15,
        [v8]: a17,
        set f(a19) {
            -1000000.0 <= a19;
            const v21 = new f3(a17, -1000000.0);
            v21.valueOf = f3;
            v21 in v8;
            a15[9];
            v9[2];
        },
    };
    return o25;
}
f13(130.05842610496302, v7, v9, f13(-1000000.0, v8, v7, v9));
f13(-1000000.0, v9, v9, -1000000.0);
class C32 {
    static get a() {
        const o36 = {
            "maxByteLength": 268435439,
        };
        const v38 = new SharedArrayBuffer(1278, o36);
        v38.byteLength;
        o36[-622135.0466104625];
        const o42 = {
        };
        new Proxy(v38, o42);
        new Uint32Array(v38);
        return o36;
    }
}
const v46 = new C32();
const v47 = new C32();
const v48 = new C32();
class C49 extends C32 {
    static set c(a51) {
        let v52;
        try { v52 = a51(v47, v47, a51); } catch (e) {}
        Object.defineProperty(v48, this, { writable: true, configurable: true, value: v52 });
        new Float32Array(4096);
        new Float32Array(1);
        try { Float64Array(); } catch (e) {}
        new BigUint64Array(8);
    }
}
new C49();
new C49();
new C49();
const v74 = [-16,4];
const v75 = [-1124966260,9223372036854775807,9,-1022811835,14,-9223372036854775807,-954173599,592825194,-1892405619,4294967296];
[-4294967295,14,219268071,1317141055,2];
delete v75[-9];
try { v74.slice(45103); } catch (e) {}
const o82 = {
    __proto__: v74,
    "d": -2,
    3943951267: 536870889,
    "a": true,
    [C49]: 4294967297,
    "e": v74,
    "g": 26157,
    "c": v46,
    ...C32,
    "e": 45103,
};
