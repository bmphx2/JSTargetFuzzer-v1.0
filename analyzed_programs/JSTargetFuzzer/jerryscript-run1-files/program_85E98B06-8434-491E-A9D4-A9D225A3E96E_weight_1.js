function f0() {
}
function f1() {
    const o4 = {
        ...f0,
        "c": f0,
        "f": f0,
        16: f0,
        get h() {
            new f0();
            return f0;
        },
        "a": f0,
        "d": f0,
        ...f0,
    };
    return o4;
}
const v5 = f1();
const v6 = f1();
const v7 = f1();
function f14(a15, a16) {
    const o23 = {
        [v7]: v5,
        "f": v7,
        o(a18, a19, a20) {
            v5[2981580716];
            const v22 = v6;
            return a19;
        },
        "b": v5,
        [a16]: v6,
        "c": v7,
        "a": a15,
    };
    return o23;
}
const v24 = f14(v6, v5);
const t38 = 10000n;
t38[9] = v24;
Object.defineProperty(v24, 5, { enumerable: true, get: f0 });
v6.__proto__;
v5[v7] = v5;
v7[10000n];
const v27 = f14(v7, v5);
const v30 = [[f0,f14(v6, v7),v27]];
[v30,v7,v30,f1,v30];
function f32(a33) {
    const o43 = {
        get a() {
            function F35(a37, a38) {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v39 = F35(F35, a33);
            this.d = v39;
            this[69] = F35;
            a33 = -2023752541;
            v30["keys"]();
            v39(a33);
            return F35;
        },
    };
    return a33;
}
f32(f32);
[54783,-268435456,46487,11,-1059659455,16,65537];
gc(10000);
