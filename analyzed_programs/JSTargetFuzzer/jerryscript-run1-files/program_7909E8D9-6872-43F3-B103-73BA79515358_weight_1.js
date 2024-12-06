const t0 = "a";
t0["2bt"] = "5fWq";
const v6 = `
    const t3 = "a";
    delete t3["toString"];
    let v8;
    try { v8 = ("5fWq").repeat(1024); } catch (e) {}
    v8.length = 230;
`;
const v11 = eval(eval);
const o12 = {
    "maxByteLength": 1024,
    "b": 1024,
    "f": eval,
    "c": v11,
    ..."5fWq",
    "e": "toString",
};
const v14 = new ArrayBuffer(1024, o12);
new Uint32Array(v14);
/a|bc+/y.exec();
