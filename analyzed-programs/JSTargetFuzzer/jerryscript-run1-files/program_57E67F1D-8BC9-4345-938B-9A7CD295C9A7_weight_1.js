const v2 = new Uint8Array(230);
const v5 = new Uint8ClampedArray(257);
const v8 = new Int16Array(149);
[Uint8ClampedArray];
const v10 = [Uint8Array,Int16Array,149,Uint8ClampedArray];
Object.defineProperty(v10, Int16Array, { writable: true, value: v8 });
const v11 = new Int16Array(v5, 149, 149);
for (let v12 = 0; v12 < 32; v12++) {
    v5["p" + v12] = v12;
}
const v15 = [v2,149,v10,257,v10];
class C17 {
    constructor(a19) {
        const v22 = Reflect.setPrototypeOf(("SevCf").trimStart, this);
        this[Symbol.split];
        v11.__proto__ = "SevCf";
        const v28 = new Map();
        const v30 = v28["values"]();
        const v32 = Array(v30);
        function F35(a37, a38) {
            if (!new.target) { throw 'must be called with new'; }
            this.b = v15;
            this.g = v11;
        }
        new F35(149, a19);
        new F35("SevCf", 230);
        new F35(v22, 230);
        const v42 = new Uint32Array(2334);
        v32[v42.join(v30)];
        const v46 = Symbol.iterator;
        const o55 = {
            [v46]() {
                let v48 = 10;
                const o54 = {
                    next() {
                        v48--;
                        const v52 = v48 == 0;
                        const o53 = {
                            "done": v52,
                            "value": v48,
                        };
                        return o53;
                    },
                };
                return o54;
            },
        };
    }
}
new C17();
