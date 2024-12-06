function f1() {
    const o6 = {
        valueOf() {
            let v3;
            try { v3 = this(this); } catch (e) {}
            let v4;
            try { v4 = this.isInteger(); } catch (e) {}
            let v5 = v3 != v3;
            v4 = v3;
            ({"e":v5,"g":v5,} = v3);
            return true;
        },
        "e": true,
        __proto__: true,
        "h": true,
        "b": true,
    };
    return o6;
}
const v7 = f1();
f1();
const v9 = f1();
[v9];
[v7,v7,[v7,v7,v9,f1],v9,v7];
new Int32Array(3);
new Uint8Array(3143);
new Float64Array(1);
const v24 = -2n ^ 36564n;
const v25 = `
    \`undefined${v24}string\`;
`;
