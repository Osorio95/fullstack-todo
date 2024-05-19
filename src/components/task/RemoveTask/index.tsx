import React, { FC, useState } from 'react'
import { useEditTask } from '@/hooks/useEditTask'
import { DeleteOutlined, EditOutlined, CheckCircleOutlined } from '@ant-design/icons'
import { Button, Modal } from 'antd'

interface Props {
    id: string
}

export const RemoveTask: FC<Props> = ({ id }) => {
    const { onRemove } = useEditTask()

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        onRemove(id)
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (

        <>
            <DeleteOutlined onClick={showModal} />
            <Modal title="Confirm action" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                        Return
                    </Button>,
                    <Button key="submit" type="primary" onClick={handleOk}>
                        Remove
                    </Button>,
                ]}
            >
                Are you sure you want to remove this task?
            </Modal>
        </>
    )
}
