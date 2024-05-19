import React from 'react'
import { Button } from 'antd'

export const LoginButton = () => {
    return (
        <a href='/api/auth/login'>
            <Button
                type="link" >
                Login
            </Button>
        </a>
    )
}
