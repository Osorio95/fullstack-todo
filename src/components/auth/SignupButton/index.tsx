import React from 'react'
import { Button } from 'antd'

export const SignupButton = () => {
    return (
        <a href='/api/auth/signup'>
            <Button
                type="primary" >
                Signup
            </Button>
        </a>
    )
}
