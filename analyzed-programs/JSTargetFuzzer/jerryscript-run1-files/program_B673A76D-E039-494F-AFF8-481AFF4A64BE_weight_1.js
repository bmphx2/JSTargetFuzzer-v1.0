function f3() {
    return 7;
}
class C10 {
}
const v11 = new C10(C10, f3, 15);
const v13 = new Uint8Array(v11, C10, Uint8Array);
const o14 = {
};
const v16 = new Proxy(v13, o14);
const v17 = v11.f;
v16.__proto__ = v17;
const v18 = [v17,v17,v17,v17];
([v18,v18,v16,Proxy])["shift"]();
