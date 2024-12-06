function f3(a4, a5) {
    const o16 = {
        [a4](a7) {
            let v8;
            try { v8 = a4.valueOf(a4, a7, this, this); } catch (e) {}
            function F9(a11, a12) {
                if (!new.target) { throw 'must be called with new'; }
                this.h = a11;
            }
            new F9(5n, a7);
            new F9(a4, a5);
            new F9(a5, v8);
            return -6n;
        },
        __proto__: a4,
        "b": 5n,
        "h": a4,
    };
    return o16;
}
const v17 = f3(5n, -1275776808n);
const v18 = f3(v17, -6n);
const v19 = f3(f3, -1275776808n);
const v21 = new WeakSet();
function F22(a24, a25, a26, a27) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a25;
    this.a = a27;
    this.d = a27;
}
const v28 = new F22(5n, WeakSet, v17, v17);
const v29 = new F22(-1275776808n, v21, v18, v19);
const v30 = new F22(-1275776808n, v29, v17, v21);
const o33 = {
    "apply": f3,
    "getPrototypeOf": f3,
    "setPrototypeOf": f3,
};
new Proxy(v21, o33);
class C37 {
    static set a(a39) {
        Math.clz32("10000");
        1 & (536870889 | "10000");
        Math.exp(1);
        Math.abs(536870889);
        Math.log2(536870889);
        536870889 ^ "10000";
    }
}
new C37();
new C37();
const v52 = new C37();
class C59 {
    static get a() {
        const o63 = {
            "maxByteLength": 268435439,
        };
        const v65 = new SharedArrayBuffer(1278, o63);
        v65.byteLength;
        o63[-622135.0466104625];
        const o69 = {
        };
        new Proxy(v65, o69);
        new Uint32Array(v65);
        return o63;
    }
}
const v73 = new C59();
const v74 = new C59();
const v75 = new C59();
class C76 extends C59 {
    static set c(a78) {
        let v79;
        try { v79 = a78(v74, v74, a78); } catch (e) {}
        Object.defineProperty(v75, this, { enumerable: true, value: v79 });
        new Float32Array(4096);
        new Float32Array(1);
        new BigUint64Array(8);
    }
}
new C76();
new C76();
new C76();
const v92 = (a93, a94) => {
    new Array(5);
    return Array;
};
const v99 = [v30,v28,v52];
let v100 = [v29,-622135.0466104625,-11,v74,v92];
[5n,v99,16,v100];
v100 = v52;
new C37();
const v109 = [-16,4];
const v110 = [-1124966260,9223372036854775807,9,-1022811835,14,-9223372036854775807,-954173599,592825194,-1892405619,4294967296];
[-4294967295,14,219268071,1317141055,2];
delete v110[-9];
try { v109.slice(45103); } catch (e) {}
const o117 = {
    __proto__: v109,
    "d": -2,
    3943951267: 536870889,
    "a": true,
    [C76]: 4294967297,
    "e": v109,
    "g": 26157,
    "c": v73,
    ...C59,
    "e": 45103,
};
