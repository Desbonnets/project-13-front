import React from 'react';

/**
 * Loading qui recouvre toute la page
 */
function Loading() {

    return (
        <div style={{position: 'relative'}}>
            <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.8)', zIndex: 1000, }}>
                <h2 style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: '#7ab1e8' }}>Chargement en cours...</h2></div>
        </div>
    );
}

export default Loading;