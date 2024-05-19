import React from 'react'
import { Button } from 'antd'

export const LogoutButton = () => {
    return (
        <a href='/api/auth/logout'>
            <Button
                type="link" >
                Logout
            </Button>
        </a>
    )
}
