import { Spin } from 'antd';
import React, { FC } from 'react'

export const Spinner: FC = () => {

    const contentStyle: React.CSSProperties = {
        padding: 50,
        background: 'rgba(0, 0, 0, 0.05)',
        borderRadius: 4,
    };

    const content = <div style={contentStyle} />;

    return (
        <Spin tip="Loading" size="large">
            {content}
        </Spin>
    )
}
