let v2 = 17513;
function f3(a4, a5) {
    const o18 = {
        "POSITIVE_INFINITY": a4,
        __proto__: v2,
        m(a7, a8) {
            try { new a7(this, v2, 2147483649, a4); } catch (e) {}
            ([2147483649,-10,-4096,3]).__proto__;
            new Uint8Array(6);
            return a5;
        },
        "d": a5,
    };
    return o18;
}
const v19 = f3(4294967296, v2);
f3(2147483649, 2147483649);
const v21 = f3(2147483649, 4294967296);
class C22 {
    n(a24, a25, a26, a27) {
        try {
            v21[this] = a26;
        } catch(e28) {
            Object.defineProperty(v19, 56, { configurable: true, value: a27 });
        } finally {
            v2 = a25;
        }
        return this;
    }
}
new C22();
new C22();
new C22();
([-159.91632461601353,1.2939760484235483e+308,-234.44839619711706,4.0,1e-15,5.0,-5.0,448.93894136360746,-629237.2752174904,-1.5485730665822505e+308])[3.0];
const v40 = [];
function F41() {
    if (!new.target) { throw 'must be called with new'; }
}
const v43 = new F41();
with (v43) {
    let [,...v44] = v40;
}
const v45 = new Int16Array(19);
const v48 = new Uint32Array(64);
new Int8Array(1700);
const o52 = {
};
const v54 = new Proxy(v48, o52);
let v56;
try { v56 = v54["valueOf"](Uint32Array, Uint32Array, v54, v48, v54, -65536n, -13n); } catch (e) {}
const v57 = [v56,-36134n,v56,Uint32Array];
[v54,1700,v57,v45,v57];
const v59 = [-65536n];
try { v56(v59); } catch (e) {}
