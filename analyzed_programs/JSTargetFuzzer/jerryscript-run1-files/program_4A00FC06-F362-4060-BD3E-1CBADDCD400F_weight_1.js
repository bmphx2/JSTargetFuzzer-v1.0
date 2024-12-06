function f9() {
    if (-9223372036854775808n) {
        new Array(8);
    } else {
        let v15 = -2.0;
        Math.sign(4n >>> v15);
        v15++;
    }
    return -65536n;
}
[-31647,-11,9223372036854775807,536870912,19253924,-4,9007199254740992,-2097000878,10000];
const v20 = [-12980,-1024,11];
[1,65536,9007199254740991];
let v23 = -13012493;
let v24 = -4294967295;
const v25 = `
    new f9();
    ({"h":v24,"length":v23,} = v20);
`;
eval(v25);
("multiline")["x"];
const v43 = Symbol.species;
const t22 = "x";
t22[v43] = 536870887n;
const t24 = 1000n;
t24[9] = 255;
let v44;
try { v44 = v43.toString(255, "x", 1073741824n); } catch (e) {}
v44 = v43;
