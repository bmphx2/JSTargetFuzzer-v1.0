function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = -4294967297;
    this.f = -4294967297;
    this.e = -4294967297;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
const v6 = [531.5828890767316];
const v7 = [1.7976931348623157e+308,-592.3603072935095,-6.84780188175512,689.4484341759987,-1.7976931348623157e+308,2.220446049250313e-16,0.04147984099418134,1.0,2.220446049250313e-16];
const v8 = [2.0,-659132.8847748209,5.479264616415829e+307,591.6785075004532,4.0,1.871570666324466,Infinity];
function f9(a10, a11) {
    const o24 = {
        ...a11,
        [a11]: v7,
        "e": v4,
        ...v3,
        __proto__: v6,
        [v4]: F0,
        o(a13, a14, a15, a16) {
            const o19 = {
                "maxByteLength": v4,
            };
            const v21 = new SharedArrayBuffer(1000, o19);
            new Uint8ClampedArray(v21);
            return a10;
        },
    };
    return o24;
}
const v25 = f9(v3, v4);
[v25,f9(v25, v4),[[v8,v5,f9(v8, v3),v6],v4],v6,v7];
("e").lastIndexOf("e");
