function multiTable(number) {
    let ats = "";

    for (let i = 1; i <= 10; i++) {
        const res = i * number

        ats += `${i} * ${number} = ${res}`;
        if (i < 10) {
            ats += "\n";
        }
    }
    return ats;

}
