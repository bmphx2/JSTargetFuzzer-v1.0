const v2 = [-6,1,128,959659090,-1073741824];
const o3 = {
};
const v5 = new Proxy(v2, o3);
const o13 = {
    get a() {
        function F7(a9, a10) {
            if (!new.target) { throw 'must be called with new'; }
        }
        const t9 = F7(F7, v2);
        t9(v2);
        return F7;
    },
};
class C14 {
}
const v15 = new C14();
delete v5[v15];
function F18(a20) {
    if (!new.target) { throw 'must be called with new'; }
    Array(39830);
    let v24 = 41365n;
    for (; v24--;) {
    }
    this.b = "valueOf";
    this.d = "__proto__";
    this.g = "__proto__";
}
const v26 = new F18(F18);
new F18(v26);
new F18("__proto__");
new BigInt64Array();
class C31 {
    valueOf(a33, a34) {
        const v35 = `
            delete this?.d;
        `;
        eval(v35);
    }
}
async function f39(a40, a41) {
    return a40 /= C31;
}
ReferenceError();
const v47 = `
    WeakSet();
`;
9007199254740991 % v47;
const o54 = {
    get f() {
        super.e = "v";
        return this;
    },
};
