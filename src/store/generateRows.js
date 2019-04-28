const generateInitialRows = () => {
    const N = 64;
    return Array.from(Array(N).keys()).map(number => ({
        hovering: false,
        id: number + 1,
    }));
}

const getMappedRows = (rows) => {
    const mappedRows = [];
    let lastId = 1;
    for(var i = 0; i < 8; i++) {
        const nextSet = [];
        for (var j = 1; j < 9; j++) {
            nextSet.push({
                even: i % 2 === j % 2,
                id: lastId++,
                hovering: false,
            });
        }
        mappedRows.push(nextSet);
    }
    return mappedRows;
}

export const initialRows = generateInitialRows();
export const mappedRows = getMappedRows(initialRows);