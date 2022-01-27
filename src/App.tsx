import React, { useEffect } from 'react';
//=================================================
// firebase
//=================================================
import { initializeApp } from 'firebase/app';
import { getDatabase, onValue, ref } from 'firebase/database';
import { config } from './api/config';
//=================================================
// reducer
//=================================================
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state';
//=================================================
// app
//=================================================
import TicketApp from './app/TicketApp';

const App: React.FC = () => {
    //=================================================
    // reducer
    //=================================================
    const dispatch = useDispatch();
    const { fetchFirebase, fetchFirebaseSuccess, fetchFirebaseDefault } =
        bindActionCreators(actionCreators, dispatch);
    //=================================================
    // component start
    //=================================================
    useEffect(() => {
        fetchFirebase();
        const app = initializeApp(config);

        const d = getDatabase(app);
        const starCountRef = ref(d, 'data/');

        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                fetchFirebaseSuccess(data);
            } else {
                fetchFirebaseDefault();
            }
        });
    }, []);
    //============================================
    return (
        <div id="main">
            <TicketApp />
        </div>
    );
};

export default App;
