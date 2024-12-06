class C9 {
    static m(a11, a12, a13) {
        const v15 = `
            const v16 = this[4294967296];
            const v18 = Symbol.iterator;
            const o28 = {
                [v18]() {
                    let v20 = 10;
                    const o27 = {
                        next() {
                            v20--;
                            const v24 = v20 == 0;
                            const o26 = {
                                "done": v24,
                                "value": v20,
                                ...v16,
                                [this]() {
                                    return 255;
                                },
                                ...this,
                            };
                            return o26;
                        },
                    };
                    return o27;
                },
            };
        `;
        return eval(v15);
    }
}
new C9();
new C9();
new C9();
class C40 {
    static get a() {
        const o44 = {
            "maxByteLength": 268435439,
        };
        const v46 = new SharedArrayBuffer(1278, o44);
        11 != [1000000000000.0];
        [[4,536870889,536870889],-4096];
        v46.byteLength;
        o44[-622135.0466104625];
        const o58 = {
        };
        new Proxy(v46, o58);
        new Uint32Array(v46);
        return o44;
    }
}
const v62 = new C40();
const v63 = new C40();
const v64 = new C40();
class C65 extends C40 {
    static set c(a67) {
        let v68;
        try { v68 = a67(v63, v63, a67); } catch (e) {}
        Object.defineProperty(v64, this, { writable: true, configurable: true, value: v68 });
        new Float32Array(4096);
        new Float32Array(1);
        new BigUint64Array(8);
    }
}
new C65();
new C65();
new C65();
const v88 = [-16,4];
const v89 = [-1124966260,9223372036854775807,9,-1022811835,14,-9223372036854775807,-954173599,592825194,-1892405619,4294967296];
[-4294967295,14,219268071,1317141055,2];
delete v89[-9];
try { v88.slice(45103); } catch (e) {}
const o96 = {
    __proto__: v88,
    "d": -2,
    3943951267: 536870889,
    "a": true,
    [C65]: 4294967297,
    "e": v88,
    "g": 26157,
    "c": v62,
    ...C40,
    "e": 45103,
};
const v99 = new Date();
const v102 = new Float64Array(128);
v99["setUTCMonth"](v102[2]);
