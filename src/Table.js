import React from 'react';

const TableHeader = () => {
    return(
        <thead>
            <tr>
                <th>Nome</th>
                <th>Trabalho</th>
                <th>Opções</th>
            </tr>
        </thead>
    );
}

const TableBody = props => {
    const rows = props.characterData.map((row, index) => {
        return(
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>
                    <button onClick={() => props.removerCharacter(index)}>
                        Eliminar
                    </button>
                </td>
            </tr>
        )
    })

    return <tbody>{rows}</tbody>;
}

const Table = (props) => {
    const {characterData, removerCharacter} = props;

    return(
        <table>
            <TableHeader />
            <TableBody characterData={characterData} removerCharacter={removerCharacter} />
        </table>
    );
}

export default Table;