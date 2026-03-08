const SHEET_URL =
"https://opensheet.elk.sh/1wUbc1tUzFjLgWPI9m3x8Rav9BS2bKS_2_ZH_80K0Ntw/Grimorio";

export async function loadSpells() {

const res = await fetch(SHEET_URL);
const data = await res.json();

return data.map((s, index) => ({

id: index + 1,
nome: s["Feitiço"],
grau: Number(s["Grau"]),
origem: s["Origem"],
tipo: s["Tipo"] ? s["Tipo"].split(",") : [],
escola: s["Escola"],
descricao: s["Descrição"]

}));

}