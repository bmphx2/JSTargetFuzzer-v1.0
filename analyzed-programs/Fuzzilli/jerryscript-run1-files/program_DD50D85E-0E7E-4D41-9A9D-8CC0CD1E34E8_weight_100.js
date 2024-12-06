class C3 {
    static get h() {
        const o7 = {
            valueOf() {
                return;
                function f6() {
                    return this;
                }
                return 16814;
            },
        };
        return o7;
    }
    f;
    static [16814];
    static [-268435456];
}
const v8 = new C3();
const v9 = new C3();
let v10 = new C3();
const v11 = [-13,41282,-11,-12,536870912,1073741824,4294967297,-4294967297,279057183,-25869];
const v12 = [49089,9007199254740991,2147483649,2,9007199254740991];
const v13 = [4096,9223372036854775807,9007199254740991,65536,-42081,660128213];
function f17(a18, a19, a20) {
    const o30 = {
        [128]: a18,
        "g": 16814,
        "d": 268435456,
        __proto__: C3,
        "h": v12,
        "e": -268435456,
        "f": 16814,
        [a20]: v12,
        "c": v10,
        toString(a22, a23, a24) {
            try { v11.join(a18); } catch (e) {}
            let [v29] = a18;
            return 128;
        },
    };
    return o30;
}
f17(v11, 128, v9);
f17(v12, -268435456, v9);
f17(v9, 268435456, v10);
function f34(a35, a36, a37, a38) {
    let v39;
    try { v39 = a37.flat(128); } catch (e) {}
    C3.h;
    v39.__proto__;
    return C3;
}
f34(16814, v13, v12, v9);
v10 += v8;
try { v12.find(f34); } catch (e) {}
