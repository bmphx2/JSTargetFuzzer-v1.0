class C3 {
    o(a5) {
        [1000,this,37550,this,1000];
        [this,"symbol",this,a5,this];
        ["symbol","symbol",this,a5];
        /A(?<!)a\W/gsi;
        /\c/sid;
        /1\u{12345}\u{23456}(mj\p{Script_Extensions=Greek})/sd;
        return 37550;
    }
    static #a;
}
const v13 = new C3();
new C3();
const v15 = new C3();
function f19() {
    return v13;
}
v15.__proto__ = v13;
const o20 = {
    "getPrototypeOf": f19,
    "set": f19,
};
const v22 = new Proxy("symbol", o20);
v22[Symbol.toStringTag];
