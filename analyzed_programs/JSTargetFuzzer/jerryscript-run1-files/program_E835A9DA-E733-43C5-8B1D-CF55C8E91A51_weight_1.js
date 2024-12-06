const v1 = new Map();
const v2 = [v1,v1,Map,Map];
const v4 = [v1,v2,v1,[v1],v1];
function f5(a6) {
    const o14 = {
        get c() {
            const v8 = a6.__proto__;
            try { new v8(Map); } catch (e) {}
            return v1;
        },
        get g() {
            const v11 = v4;
            return v1.size;
        },
        get g() {
            return this;
        },
    };
    return o14;
}
f5(v4);
f5(v2);
f5(v2);
class C21 {
    constructor(a23, a24, a25) {
        try { arguments.n(); } catch (e) {}
    }
}
new C21(C21, C21, C21);
