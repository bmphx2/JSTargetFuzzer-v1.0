function F6(a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a10;
    this.f = a10;
    this.g = "d";
}
const v11 = new F6("d", 0.0, -2.0);
const v12 = new F6("-268435456", 0.48168199138999124, -2.0);
const v13 = new F6("string", 0.0, 0.48168199138999124);
function f14(a15, a16, a17, a18) {
    const o39 = {
        [a18](a20, a21) {
            function f22() {
                const v23 = [a20,a17];
                const v24 = [v13];
                const v25 = [v11,v24];
                const t16 = "string";
                t16[1073741825] = a17;
                function F26(a28, a29, a30, a31) {
                    if (!new.target) { throw 'must be called with new'; }
                    this.f = a31;
                }
                new F26(-2.0, a20, v23, "-268435456");
                new F26(v24, 0.0, v25, "d");
                new F26("-268435456", 0.48168199138999124, v25, "d");
                return this;
            }
            "string" in a21;
            return a18;
        },
        ..."-268435456",
    };
    return o39;
}
const v41 = f14(v12, f14(v11, 0.48168199138999124, -2.0, v13), 0.48168199138999124, v12);
f14(v12, v13, -2.0, v12);
class C46 {
    static set a(a48) {
        Math["string"] = this;
        let {"length":v51,} = "string";
        Math.clz32("10000");
        1 & (536870889 | "10000");
        Math.exp(1);
        Math.abs(536870889);
        Math.log2(536870889);
        536870889 ^ "10000";
    }
}
const v63 = new C46();
new C46();
const v65 = new C46();
class C72 {
    static get a() {
        const o76 = {
            "maxByteLength": 268435439,
        };
        const v78 = new SharedArrayBuffer(1278, o76);
        v78.byteLength;
        o76[-622135.0466104625];
        const o82 = {
        };
        new Proxy(v78, o82);
        new Uint32Array(v78);
        return v41;
    }
}
const v86 = new C72();
const v87 = new C72();
const v88 = new C72();
class C89 extends C72 {
    static set c(a91) {
        let v92;
        try { v92 = a91(v87, v87, a91); } catch (e) {}
        Object.defineProperty(v88, this, { writable: true, configurable: true, value: v92 });
        new Float32Array(4096);
        new Float32Array(1);
        new BigUint64Array(8);
    }
}
new C89();
new C89();
new C89();
const v105 = (a106, a107) => {
    new Array(5);
    return Array;
};
const v118 = [-16,4];
const v119 = [-1124966260,9223372036854775807,9,-1022811835,14,-9223372036854775807,-954173599,592825194,-1892405619,4294967296];
[-4294967295,14,219268071,1317141055,2];
delete v119[-9];
try { v118.slice(45103); } catch (e) {}
const o126 = {
    __proto__: v118,
    "d": -2,
    3943951267: 536870889,
    "a": true,
    [C89]: 4294967297,
    "e": v118,
    "g": 26157,
    "c": v86,
    ...C72,
    [-2]: v65,
    "h": v11,
    2147483649: v63,
    ...v88,
    [v11]: 0.0,
    "e": 45103,
};
