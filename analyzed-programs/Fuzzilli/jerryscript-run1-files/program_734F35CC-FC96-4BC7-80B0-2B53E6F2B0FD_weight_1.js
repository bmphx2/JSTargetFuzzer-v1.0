function f0() {
    const o10 = {
        set g(a5) {
            const v6 = a5?.[this];
            this <= v6 ? this : v6;
            let v9;
            try { v9 = ("ignoreCase").trimStart(); } catch (e) {}
            v9 = -9007199254740992;
        },
        [-9007199254740992]: "ignoreCase",
        "c": "ignoreCase",
        2147483647: 55676,
    };
    return o10;
}
const v11 = f0();
const v12 = f0();
let v13 = f0();
const v14 = [v13,v13,v13,v11,v12];
const v15 = [f0,f0,v13,v14,f0];
const v16 = [f0,v12,v12];
function F17(a19, a20) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = v14;
    this.d = v14;
}
let v21 = new F17(v11, v14);
const v22 = new F17(v12, v15);
const v23 = new F17(v12, v16);
f0(v22, ...v15, v23, v23, v12);
v23 || v12;
const o26 = {
};
new Proxy(F17, o26);
f0();
const v30 = v13.__proto__;
v21 **= o26;
v13 = v30;
