function f3(a4, a5) {
    const o12 = {
        3865203235: 4,
        1408: -4096,
        "c": 4,
        toString(a7, a8) {
            try { a4.valueOf(a8); } catch (e) {}
            for (const v10 of a7) {
                let v11;
                try { v11 = new v10(); } catch (e) {}
                super.a **= v11;
                a7.e = a5;
            }
            return a5;
        },
        [4]: -4096,
        "a": -16,
        __proto__: a4,
    };
    return o12;
}
const v13 = f3(-4096, -16);
f3(-4096, -4096);
const v15 = f3(f3, -4096);
class C19 extends f3 {
    static {
        v13[v13] = this;
        const o21 = {
        };
        new Proxy(f3, o21);
        function F24(a26, a27, a28, a29) {
            if (!new.target) { throw 'must be called with new'; }
            this.f = 50684;
            this.a = o21;
            this.e = -4096;
        }
        new F24(-65536, v15, o21, v15);
        new F24(-65536, o21, v15, v15);
        new F24(-16, v15, v15, v15);
    }
}
const v33 = new C19();
new C19();
const v35 = new C19();
function f36() {
    return -65536;
}
[268435456,3883];
[268435440];
const v39 = [1,0,9342506,-536870912,10,-1917162586,-1352182093];
for (let v40 = 0; v40 < 32; v40++) {
    v33["p" + v40] = v40;
}
f3(-4096, -4096);
try { v35.toString(v39, v33); } catch (e) {}
