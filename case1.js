const rawData = " riyanda_azis, ARIFIAN_SAPUTRA , hasan_harahap ";

const cleanedData = rawData.trim();
const names = cleanedData.split(",");
const formattedNames = names.map(name => name.trim().toLowerCase());
const result = formattedNames.join(" | ");

console.log(result);