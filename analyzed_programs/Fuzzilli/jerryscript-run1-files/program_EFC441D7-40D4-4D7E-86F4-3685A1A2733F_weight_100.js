function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = f0;
    this.d = f0;
}
const v3 = new F1();
new F1();
const v5 = new F1();
["-11080",f0,v3,v5];
["undefined",v3,268435439n,F1];
["-11080"];
function f15() {
}
class C16 extends f15 {
    static h = C16;
    valueOf() {
        const v19 = Symbol.iterator;
        const o28 = {
            [v19]() {
                let v21 = 0;
                const o27 = {
                    next() {
                        v21--;
                        const v25 = v21 == 0;
                        const o26 = {
                            "done": v25,
                            "value": v21,
                        };
                        return o26;
                    },
                };
                return o27;
            },
        };
        return f15;
    }
}
const v29 = new C16();
const v30 = new C16();
const v31 = new C16();
const v32 = [v31,f15,v29,v30,v30,v29];
const v33 = [v30,f15,C16,v32];
[f15,v29];
[v29,v33,null,null];
const v37 = [v29];
[v31,v32,v37];
class C42 {
    m(a44, a45) {
        function F46(a48, a49, a50) {
            if (!new.target) { throw 'must be called with new'; }
            this.c = a50;
            this.b = "mk";
            this.f = a48;
        }
        new F46(a44, 0.7819968330858019, this);
        const v52 = new F46(a44, this, a45);
        a44.__proto__ = C42;
        this[5] = C42;
        new C42(7);
        new Uint32Array(4096);
        new BigUint64Array(-9223372036854775808);
        const v62 = new F46(0.7819968330858019, "mk", v52);
        return v62;
    }
    a;
    h = 943.1398846416655;
}
const v63 = new f15();
const o68 = {
    valueOf() {
        return "mk";
    },
};
const v69 = new C42();
let v70 = new C42();
function F71(a73, a74, a75, a76) {
    if (!new.target) { throw 'must be called with new'; }
    v37.d = a74;
}
v63.valueOf = "mk";
[3.774534267776463e+307,9.3286968496236,-5.09019147536695];
const v78 = [5.0,-6.453120030313442,2.220446049250313e-16,36710.818736602785,-Infinity,2.0,-567.2575997612171];
const v79 = [1e-15,786.1096948534125,-1.5734942521682175e+308,1.291635685171515e+308];
v79[2] = C42;
Math.max(-1e-15);
Math.cosh(v70);
Math.atan(v78);
const v86 = ++v70;
v63 % v70;
v63 | v86;
v86 | -27209;
let [] = v79;
new F71(v63, v70, v63, v69);
new F71(v69, v70, v69, v69);
new F71(v63, v70, v70, v69);
Math.trunc(-27209);
