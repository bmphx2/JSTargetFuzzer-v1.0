class C6 {
    p(a8, a9, a10) {
        const v12 = Symbol.iterator;
        const o21 = {
            [v12]() {
                let v14 = 10;
                const o20 = {
                    next() {
                        v14--;
                        const v18 = v14 == 0;
                        const o19 = {
                            "done": v18,
                            "value": v14,
                        };
                        return o19;
                    },
                };
                return o20;
            },
        };
        return this;
    }
}
const v22 = new C6();
new C6();
const v24 = new C6();
let v27 = 536870888;
class C28 {
    set f(a30) {
        this.b = C6;
        [[this,[-4294967295,this,v24,4096,-5],this]];
    }
    static p(a35, a36, a37, a38) {
        let v34 = this;
        /(?=.)ha\D/vyid;
        /PSFG/ysd;
        /a?/uysid;
        v34 = delete v34?.b;
        a37[6] = v22;
        return a35;
    }
}
new C28();
const v44 = new C28();
const v45 = new C28();
const v46 = [v24,-4294967295,v45,v45,-2147483647];
[v27,536870887,v46];
[v22,C28,v45];
v27 = 536870887;
function f49(a50, a51) {
    const o54 = {
        "maxByteLength": 1024,
    };
    const v56 = new SharedArrayBuffer(1024, o54);
    new Uint8ClampedArray(v56);
    return 1024;
}
f49(v46, v44);
