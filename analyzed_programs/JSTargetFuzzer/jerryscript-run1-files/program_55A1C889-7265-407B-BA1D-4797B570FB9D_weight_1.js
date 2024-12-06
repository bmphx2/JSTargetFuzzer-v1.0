const v6 = [0,-1161172836];
const v7 = [v6,-1161172836];
const v8 = [v7,v6,v6,v7,0];
function f9(a10, a11) {
    const o20 = {
        "c": 9,
        [a10]: -32804,
        get b() {
            v7.valueOf = a10;
            let v16 = v7.__proto__;
            let [] = v8;
            0 || v6;
            v8.c = 9;
            Object.defineProperty(a10, "b", { configurable: true, enumerable: true, set: f9 });
            Object.defineProperty(this.c, f9, { get: f9 });
            v6[1073741824] = 5.036338679606262e+307;
            v16 -= this;
            v8[3] = a10;
            this[0] = v6;
            delete this[a11];
            return a10;
        },
        ...v6,
    };
    return o20;
}
f9(v8, -1073741824, -1073741824, v8, f9(v7, 9, 3, f9(v6, -1073741824), -1073741824));
class C25 {
    constructor(a27) {
        function f28(a29, a30) {
            delete this["getUTCSeconds"];
            return a30;
        }
        new Promise(f28);
    }
}
new C25();
