[];
let v3 = 2.220446049250313e-16;
const v7 = [1.0,-1.7976931348623157e+308,628.6380737651577,1.9330447431302495,-1000.0,1.0,-1000000.0];
const v8 = [-1.3963006593414634e+307,-298599.6538344304];
const v9 = [1.0,-2.220446049250313e-16,-1.5203865940753282e+308];
let v11 = -2n;
v11 = -59927n;
({"length":v3,} = v8);
let v13;
try { v13 = v7.join(v11); } catch (e) {}
let {"b":v14,"length":v15,} = v9;
try { v9.reduce(v13, v14); } catch (e) {}
for (const v17 of v14) {
    v9.__proto__ = v17;
    v7[2] = v17;
    const o20 = {
        "maxByteLength": 4096,
    };
    const v22 = new ArrayBuffer(4096, o20);
    new Uint32Array(v22);
}
