const getMappedRows = () => {
    const mappedRows = [];
    let lastId = 1;
    for(var i = 0; i < 8; i++) {
        const nextSet = [];
        for (var j = 1; j < 9; j++) {
            nextSet.push({
                even: i % 2 === j % 2,
                id: lastId++,
            });
        }
        mappedRows.push(nextSet);
    }
    return mappedRows;
}

export const mappedRows = getMappedRows();