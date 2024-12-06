function f3() {
    return 512;
}
class C13 {
    get g() {
        this[4294967295] = this;
        let v15;
        try { v15 = new C13(536870888, this, -62017, 7); } catch (e) {}
        return v15;
    }
    valueOf(a17, a18) {
        super.a = 7;
        return f3;
        function f20(a21, a22, a23) {
            return a22;
        }
        a17.lastIndexOf;
        const v25 = this.iterator;
        const o39 = {
            [v25]() {
                return this;
                const v28 = new WeakMap();
                Reflect.apply(v28.get, v28);
                let v32 = 10;
                const o38 = {
                    next() {
                        v32--;
                        const v36 = v32 == 0;
                        const o37 = {
                            "done": v36,
                            "value": v32,
                        };
                        return o37;
                    },
                };
                return o38;
            },
        };
        return o39;
    }
}
new C13();
new C13();
new C13();
function f44() {
    return -2.0;
}
function F45(a47, a48, a49, a50) {
    if (!new.target) { throw 'must be called with new'; }
}
const v51 = new F45(F45, F45, F45, F45);
const v52 = new F45();
const o53 = {
    "deleteProperty": f44,
};
const v55 = new Proxy(v52, o53);
const v56 = [9,-1314550274,-6,-21927,11,39852,15,1816348659,0,4];
delete v55[108704231];
Reflect.apply(v56.slice, v51);
