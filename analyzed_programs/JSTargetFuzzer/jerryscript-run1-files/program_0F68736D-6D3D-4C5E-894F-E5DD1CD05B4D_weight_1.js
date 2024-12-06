function F6(a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    a8.g = a8;
    this.h = a10;
}
new F6(536870889, F6, -65535n);
const v12 = new F6(-65536, 1073741825n, 1073741825n);
new F6(536870889, v12, 1073741825n);
for (let v17 = 0; v17 < 5; v17++) {
    const v18 = `
        let v19 = -65537;
        +v19;
        v19++;
    `;
    eval(v18);
}
