const v0 = [];
const v1 = [268435439];
const v2 = [12402,-858171386,109660725,-12,8,-11,65536,-25021];
const v3 = [-1024,-2147483648,-4294967296,-13046,10000,257];
[v3,v3,v0,v2];
const v5 = [v3,v2];
const v6 = [v5];
class C7 {
    static #e = v1;
    m(a9, a10, a11) {
        let v12;
        try { v12 = a9(v1, v2, v3, a9); } catch (e) {}
        v2.length <<= v12;
        return v2;
    }
    set f(a14) {
        let v15;
        try { v15 = this.m(v6, v6); } catch (e) {}
        v5.splice(this, v15, ...v2, this, ...v1, ...v0);
    }
    2;
}
const v17 = new C7();
new C7();
const v19 = new C7();
delete v17[v17];
for (let i23 = 0, i24 = 10; i23 < i24; i23++, i24--) {
    for (let i33 = 0; i33 < 10; i33++) {
        v19.toString = C7[v6];
    }
}
