function f0() {
    const o11 = {
        get f() {
            function F5(a7) {
                if (!new.target) { throw 'must be called with new'; }
                this.e = 4.271859993132747;
                this.a = "o";
                this.c = a7;
            }
            new F5(this);
            const v9 = new F5(this);
            const v10 = new F5(v9);
            return v10;
        },
        ..."o",
        ..."o",
    };
    return o11;
}
const v12 = f0();
f0();
f0();
const v16 = new Set();
v16[undefined] += 12;
v12[v16];
new Int32Array(10);
new Uint16Array(1578);
new BigInt64Array(16);
const v35 = new Date(Date);
v35.setFullYear();
