function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = -256;
    this.e = -256;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f6(a7, a8) {
    const o12 = {
        "f": v4,
        "h": F0,
        __proto__: v3,
        [a7]: v5,
        "e": a8,
        "g": v5,
        "c": a7,
        set d(a10) {
            try { new a10(v4); } catch (e) {}
        },
        ...a7,
        "a": v5,
        "d": a7,
        "b": a7,
    };
    return o12;
}
const v13 = f6(v3, v3);
const v14 = f6(v13, v5);
const v15 = f6(v14, v14);
class C16 extends F0 {
    static #a = v13;
    static c;
    [F0] = v13;
    static #d;
    m(a18, a19) {
        v14 ** a19;
        function f21() {
            return v5;
        }
        return f21;
    }
    #b = v15;
    static g = v14;
    static e = v15;
}
new C16();
new C16();
new C16();
const v25 = [968159.0220748538,6.480799889834069e+306,0.7592848908864864,1e-15,694.4329106291716];
[134.18220780399656,-634875.8832992753,-7.580741188494785e+307,4.0,0.5637035628617927,-683.7830118496164];
[0.5571756236532639,5.0];
[0.6190207025914545,NaN,1000.0,863.0148864213631,NaN,-2.0,-1.9702420127438565];
[-3.0,-189772.2074486718,-4.0,-1.2818895283416063e+308,0.7947483494076958,-1.497832361262362e+308,-1000.0];
[NaN];
for (let v31 = 0; v31 < 32; v31++) {
    v25["p" + v31] = v31;
}
-(+f6);
Math.max(f6);
-643318413 / -643318413;
