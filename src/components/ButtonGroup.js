import React from 'react';
import DownloadBrochure from './DownloadBrochure';
import WhatsAppButton from './WhatsAppButton'

const ButtonGroup = () => {
    return (
        <div className="fixed bottom-8 right-24 z-50 flex items-center gap-4">
            <DownloadBrochure />
            <WhatsAppButton />
        </div>
    );
};

export default ButtonGroup;
