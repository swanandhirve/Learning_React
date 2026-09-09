import { useState } from 'react';

function getText(change) {
    let text = 'This is a text';
    if (change)
        text = 'Text has been changed';

    return text;
}

export function CreateToggles() {
    const [isDark, setIsDark] = useState(false);

    let bgColor = isDark ? '#000' : '#FFF';
    let text = getText(isDark);
    let color = isDark ? '#FFF' : '#000';

    return (
        <>
        
            <div
                className="flex-center"
                id="mainDiv"
                style={{ height: '100%', width: '100%', backgroundColor: bgColor }}>
                <div className='text-toggle'>
                    <div style={{ color: color }}>
                    <h2>{text}</h2>
                </div>
                    <div id="toggle" className='flex-center'>
                        <label className="switch">
                            <input
                                type="checkbox"
                                role="switch"
                                onChange={() => setIsDark((prev) => !prev)}
                            />
                            <span className="slider"></span>
                        </label>
                    </div>
                </div>
            </div>
        </>
    );
}
