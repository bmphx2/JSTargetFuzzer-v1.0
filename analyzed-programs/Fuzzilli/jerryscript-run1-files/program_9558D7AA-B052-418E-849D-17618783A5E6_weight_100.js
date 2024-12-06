function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a5;
    this.e = 10;
}
const v6 = new F3(1000);
const v7 = new F3(1000);
const v8 = new F3(10);
const v12 = [49231,10000,-685263568,61043];
const v13 = [-4294967296,2,-4096,13,-59301,129,6];
const v14 = [4294967296,-25045,-65537,-2147483647,1904699721,8,7,114924933,-11];
const v15 = v7[F3];
const v17 = [[F3,v13],v12,v7,v14];
const v18 = [v8];
try { v18.reduce(v15); } catch (e) {}
v7.valueOf = v15;
const v21 = v17[50073];
let v22;
try { v22 = v17.push(v15, v21, v18, v21); } catch (e) {}
try { v22(v22, v13, v6); } catch (e) {}
