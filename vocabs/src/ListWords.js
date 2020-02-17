import React from 'react';
import {firebase} from './firebase';
/** @jsx jsx */ import { jsx, css } from '@emotion/core';

const useVocabs = () => {
    const [vocabs, setVocabs] = React.useState([]);

    React.useEffect(() => {
        firebase
            .firestore()
            .collection('vocabs')
            .onSnapshot((snapshot) => {
                debugger
            })

    })

    return {
        vocabs
    }
}

const ListWords = () => {
    const {vocabs} = useVocabs();

    return <div css={{
        display: 'flex',
        flexDirection: 'column'
    }}>
        <div css={{
            display: 'flex',
            alignItems: 'center'
        }}>
            <label css={{ marginRight: '1rem' }}>Sort by:</label>
            <select css={{
                width: 'min-content'
            }}>
                <option value="1">a-z</option>
                <option value="-1">z-a</option>
            </select>
        </div>
        <ul>

        </ul>
    </div>
}

export default ListWords