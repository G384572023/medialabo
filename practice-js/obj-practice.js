let ns = [5,3,7,11,8,9,3,6];

// プロI で習った for文の構文
for (let i=0; i<ns.length; i=i+1) {
    console.log(ns[i]);
}

// for-of 構文
for (let n of ns) {
    console.log(n);
}
//////////////// ここは書き換えてはいけない！ 

let campus = {
	address: "八王子市館町",
	buildingD: ["D101", "D102", "D103", "D201", "D202", "D203", "D204", "D205"],
	lon: 35.624869704425,
	lat: 139.28201056633
};

let gakka = [
	{name: "機械システム工学科", ename: "Department of Mechanical Systems Engineering"},
	{name: "電子システム工学科", ename: "Department of Electronics and Computer Systems"},
	{name: "情報工学科", ename: "Department of Computer Science"},
	{name: "デザイン学科", ename: "Department of Design"}
];

//////////////// ここから下にプログラムを書きたそう!
for(let n of campus){
	console.log(n);
}
for (let n of gakka){
	console.log(n);
}

