new Array(52);
const v6 = [-664202.4585260709,2.220446049250313e-16,0.38365289829048044,-4.0,1000000000000.0];
const v7 = [-662.1529752041342,-1.6700639233294563e+308,NaN,0.7374796442383599,-1e-15,-1.0];
const v8 = [-1e-15,-5.0,-1.7976931348623157e+308,-2.5209203689549417e+307,-4.689382368512609];
let v9 = 0;
do {
    const v10 = v6 <= 4n;
    const v11 = v10 ? v6 : 4n;
    [v7,v6,v10];
    [v11,[v11,v6],v8,v7];
    v9++;
} while (v9 < 3)
function f18() {
    return v6;
}
function F22() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = -2147483647;
    this.a = -2147483647;
}
const v25 = new F22();
const v26 = new F22();
const v27 = new F22();
function f34(a35, a36, a37) {
    const o50 = {
        get g() {
            let v38 = this;
            function F39(a41, a42, a43, a44) {
                if (!new.target) { throw 'must be called with new'; }
                ({"h":v38,} = this);
                a43.__proto__ = v26;
                try { a44(a43); } catch (e) {}
                Object.defineProperty(v27, 3, { writable: true, enumerable: true, get: f34 });
                try { new a35(a43, a36, F22, v27, v25); } catch (e) {}
                this.a = a43;
                v26.b = 65536;
            }
            new F39(268435439, 65536, -256, v26);
            new F39(1995520660, v38, 9007199254740992, -112.37934798817048);
            new F39(9007199254740992, F39, 1995520660, a35);
            return 268435440;
        },
        ...a35,
        "d": a36,
        [a35]: v25,
        3: a36,
    };
    return o50;
}
f34(v25, 268435440, 268435440);
f34(v27, -256, -256);
const v53 = f34(F22, 65536, -256);
const v56 = new BigInt64Array(28);
const v57 = new BigInt64Array(28);
function f58() {
    v53[243.41242208355516] = v57;
    try { v57.filter(f34, 268435439); } catch (e) {}
    return v57;
}
v56.find(f58);
